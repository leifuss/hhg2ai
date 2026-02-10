/* Context switcher — shows discipline- and institution-specific content via URL parameters.
 *
 * Usage:
 *   ?discipline=classics          — load guide/content/classics.js
 *   ?institution=exeter           — load guide/content/exeter.js
 *   ?discipline=classics&institution=exeter — both
 *
 * HTML pattern:
 *   <div data-ctx-generic="slot-name">Generic content</div>
 *   <div data-ctx-slot="slot-name"></div>          ← filled by JS, hidden by default
 *
 * Without JS or without parameters, generic content is visible and slots stay hidden.
 */
(function () {
    'use strict';

    var params = new URLSearchParams(location.search);
    var discipline = params.get('discipline');
    var institution = params.get('institution');

    /* Nothing to do — leave generic content visible */
    if (!discipline && !institution) return;

    /* Propagate parameters to nav links so context persists across pages */
    var suffix = location.search;
    document.querySelectorAll('nav.site-nav a[href], .guide-card[href]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
            var parts = href.split('#');
            var base = parts[0].split('?')[0];
            a.setAttribute('href', base + suffix + (parts[1] ? '#' + parts[1] : ''));
        }
    });

    /* Load a content file and apply its slots */
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
    if (institution) loadContent('institution', institution);
})();
