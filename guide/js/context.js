/* Context switcher — shows discipline- and institution-specific content via URL parameters.
 *
 * Usage:
 *   ?discipline=classics          — load guide/content/classics.js
 *   ?institution=exeter           — load guide/content/exeter.js
 *   ?discipline=classics&institution=exeter — both
 *
 * Default: institution defaults to 'exeter' if not specified.
 * Without JS, generic content is visible and slots stay hidden.
 */
(function () {
    'use strict';

    /* ── Configuration ── */

    var DISCIPLINES = [
        { key: 'classics', label: 'Classics' },
        { key: 'theology', label: 'Theology & Religion' }
    ];

    var DEFAULT_INSTITUTION = 'exeter';

    /* ── Read parameters ── */

    var params = new URLSearchParams(location.search);
    var discipline = params.get('discipline');
    var institution = params.get('institution') || DEFAULT_INSTITUTION;

    /* ── Build the effective search string for nav links ── */

    var effectiveParams = new URLSearchParams();
    if (discipline) effectiveParams.set('discipline', discipline);
    if (institution && institution !== DEFAULT_INSTITUTION) {
        effectiveParams.set('institution', institution);
    } else if (discipline) {
        /* Include institution in links when discipline is set, so context is complete */
    }
    /* Always include discipline if set; institution propagates via default */
    var linkParams = new URLSearchParams();
    if (discipline) linkParams.set('discipline', discipline);
    if (institution !== DEFAULT_INSTITUTION) linkParams.set('institution', institution);
    var suffix = linkParams.toString() ? '?' + linkParams.toString() : '';

    /* ── Propagate parameters to nav links ── */

    document.querySelectorAll('nav.site-nav a[href], .guide-card[href]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
            var parts = href.split('#');
            var base = parts[0].split('?')[0];
            a.setAttribute('href', base + suffix + (parts[1] ? '#' + parts[1] : ''));
        }
    });

    /* ── Discipline chooser UI ── */

    var nav = document.querySelector('nav.site-nav');
    if (nav && DISCIPLINES.length > 0) {
        var wrap = document.createElement('span');
        wrap.className = 'ctx-chooser-wrap';

        var btn = document.createElement('button');
        btn.className = 'ctx-chooser-btn';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-haspopup', 'true');
        btn.innerHTML = (discipline ? findLabel(discipline) : 'Choose discipline') +
            ' <span class="ctx-caret">&#9660;</span>';

        var panel = document.createElement('div');
        panel.className = 'ctx-chooser-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Choose discipline');

        var lbl = document.createElement('label');
        lbl.setAttribute('for', 'ctx-discipline-select');
        lbl.textContent = 'Discipline';
        panel.appendChild(lbl);

        var sel = document.createElement('select');
        sel.id = 'ctx-discipline-select';

        var defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = 'Generic (all humanities)';
        if (!discipline) defaultOpt.selected = true;
        sel.appendChild(defaultOpt);

        DISCIPLINES.forEach(function (d) {
            var opt = document.createElement('option');
            opt.value = d.key;
            opt.textContent = d.label;
            if (discipline === d.key) opt.selected = true;
            sel.appendChild(opt);
        });
        panel.appendChild(sel);

        wrap.appendChild(btn);
        wrap.appendChild(panel);
        nav.appendChild(wrap);

        /* Toggle panel */
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = panel.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        /* Close on outside click */
        document.addEventListener('click', function () {
            panel.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
        panel.addEventListener('click', function (e) { e.stopPropagation(); });

        /* Selection changes → reload with new params */
        sel.addEventListener('change', function () {
            var newParams = new URLSearchParams();
            if (sel.value) newParams.set('discipline', sel.value);
            if (institution !== DEFAULT_INSTITUTION) newParams.set('institution', institution);
            var qs = newParams.toString();
            var base = location.pathname + location.hash;
            location.href = location.pathname + (qs ? '?' + qs : '') + location.hash;
        });
    }

    function findLabel(key) {
        for (var i = 0; i < DISCIPLINES.length; i++) {
            if (DISCIPLINES[i].key === key) return DISCIPLINES[i].label;
        }
        return key;
    }

    /* ── Load content files and apply slots ── */

    function loadContent(type, key) {
        var script = document.createElement('script');
        script.src = 'content/' + key + '.js';
        script.onload = function () {
            var registry = type === 'discipline'
                ? (window.defined_disciplines || {})
                : (window.defined_institutions || {});
            var data = registry[key];
            if (!data || !data.slots) return;

            Object.keys(data.slots).forEach(function (slotName) {
                var slot = document.querySelector('[data-ctx-slot="' + slotName + '"]');
                var generic = document.querySelector('[data-ctx-generic="' + slotName + '"]');
                if (slot) {
                    slot.innerHTML = data.slots[slotName];
                    slot.removeAttribute('hidden');
                    slot.classList.add('ctx-active');
                }
                if (generic) {
                    generic.hidden = true;
                }
            });
        };
        script.onerror = function () {
            /* Content file not found — leave generic content visible */
        };
        document.head.appendChild(script);
    }

    if (discipline) loadContent('discipline', discipline);
    loadContent('institution', institution);
})();
