/* Discipline content: Theology & Religion
 * Loaded when ?discipline=theology is present in the URL.
 * Demonstrates discipline parameterisation for a second field.
 */
window.defined_disciplines = window.defined_disciplines || {};
window.defined_disciplines.theology = {
    label: 'Theology & Religion',
    slots: {

        /* index.html — subtitle */
        'index-subtitle': 'For colleagues in Theology &amp; Religion',

        /* getting-started.html — primary exercise */
        'getting-started-exercise':
            '<h3>Primary exercise: translation</h3>' +
            '<p>This exercise works best if you have some Hebrew or Greek, but the principle applies to any language central to your scholarly work. We use a passage from Genesis because its interpretive complexity &mdash; grammatical, theological, and translational &mdash; exposes both the strengths and the limitations of machine translation in ways that more straightforward passages do not.</p>' +
            '<ol>' +
                '<li><strong>Open an LLM.</strong> Go to <a href="https://claude.ai" target="_blank">claude.ai</a> (or <a href="https://chatgpt.com" target="_blank">chatgpt.com</a> if you prefer). A free account is fine for this exercise.</li>' +
                '<li><strong>Paste this passage</strong>&mdash;Genesis 1:1&ndash;2 (Biblia Hebraica):' +
                    '<blockquote lang="he" dir="rtl">\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA \u05D1\u05B8\u05BC\u05E8\u05B8\u05D0 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05D0\u05B5\u05EA \u05D4\u05B7\u05E9\u05C1\u05B8\u05BC\u05DE\u05B7\u05D9\u05B4\u05DD \u05D5\u05B0\u05D0\u05B5\u05EA \u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5\u05F3 \u05D5\u05B0\u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5 \u05D4\u05B8\u05D9\u05B0\u05EA\u05B8\u05D4 \u05EA\u05B9\u05D4\u05D5\u05BC \u05D5\u05B8\u05D1\u05B9\u05D4\u05D5\u05BC \u05D5\u05B0\u05D7\u05B9\u05E9\u05C1\u05B6\u05DA\u05B0 \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05EA\u05B0\u05D4\u05D5\u05B9\u05DD \u05D5\u05B0\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05DE\u05B0\u05E8\u05B7\u05D7\u05B6\u05E4\u05B6\u05EA \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05D4\u05B7\u05DE\u05B8\u05BC\u05D9\u05B4\u05DD\u05F3</blockquote>' +
                '</li>' +
                '<li><strong>Ask:</strong> &ldquo;Please translate this passage from Biblical Hebrew into English.&rdquo;</li>' +
                '<li><strong>Read the translation carefully.</strong> Consider: Does it render <em>\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA</em> as an absolute statement (&ldquo;In the beginning&rdquo;) or a temporal clause (&ldquo;When God began to create&rdquo;)? How does it handle <em>\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD</em> &mdash; &ldquo;spirit of God&rdquo;, &ldquo;wind from God&rdquo;, or &ldquo;mighty wind&rdquo;? Does it signal the interpretive complexity, or present one reading as settled?</li>' +
                '<li><strong>Now try:</strong> &ldquo;What are the main translational controversies in this passage, and what theological implications does each carry?&rdquo; See whether the system can articulate the stakes, or whether it merely lists options.</li>' +
                '<li><strong>Ask:</strong> &ldquo;How have major translation traditions (KJV, NRSV, JPS Tanakh) handled this passage differently, and why?&rdquo;</li>' +
                '<li><strong>Assess the response against what you know.</strong> Does the system understand the relationship between grammatical ambiguity and doctrinal interpretation? Where does its analysis feel generic, and where does it show genuine purchase on the material?</li>' +
            '</ol>' +
            '<div class="highlight" style="font-size: 0.9rem;">' +
                '<p><strong>What you&rsquo;ll produce:</strong> A calibrated judgement of how the tool handles material in your domain &mdash; where it performs well, where it falls short, and what the failure modes look like.</p>' +
                '<p><strong>How to check it:</strong> Compare the translation against published renderings (KJV, NRSV, JPS Tanakh) and your own understanding. Identify at least one place where the LLM missed theological nuance that matters.</p>' +
                '<p style="margin-bottom: 0;"><strong>Common pitfalls:</strong> Accepting a familiar-sounding translation as adequate without examining the interpretive choices. Defaulting to the reading you already prefer rather than testing whether the LLM can articulate the alternatives.</p>' +
            '</div>',

        /* quickstart.html — Option A exercise */
        'quickstart-exercise':
            '<h3>Option A: Translation (if you have Hebrew or Greek)</h3>' +
            '<ol>' +
                '<li><strong>Go to <span style="color: var(--accent);">claude.ai</span></strong> (or chatgpt.com). A free account is fine.</li>' +
                '<li><strong>Paste this passage</strong> &mdash; Genesis 1:1&ndash;2 (Biblia Hebraica):' +
                    '<blockquote style="font-size: 0.95rem;" lang="he" dir="rtl">\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA \u05D1\u05B8\u05BC\u05E8\u05B8\u05D0 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05D0\u05B5\u05EA \u05D4\u05B7\u05E9\u05C1\u05B8\u05BC\u05DE\u05B7\u05D9\u05B4\u05DD \u05D5\u05B0\u05D0\u05B5\u05EA \u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5\u05F3 \u05D5\u05B0\u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5 \u05D4\u05B8\u05D9\u05B0\u05EA\u05B8\u05D4 \u05EA\u05B9\u05D4\u05D5\u05BC \u05D5\u05B8\u05D1\u05B9\u05D4\u05D5\u05BC \u05D5\u05B0\u05D7\u05B9\u05E9\u05C1\u05B6\u05DA\u05B0 \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05EA\u05B0\u05D4\u05D5\u05B9\u05DD \u05D5\u05B0\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05DE\u05B0\u05E8\u05B7\u05D7\u05B6\u05E4\u05B6\u05EA \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05D4\u05B7\u05DE\u05B8\u05BC\u05D9\u05B4\u05DD\u05F3</blockquote>' +
                    '<p style="font-size: 0.85rem; color: var(--text-secondary);">(Or substitute a passage in Greek that you know well.)</p>' +
                '</li>' +
                '<li><strong>Ask:</strong> &ldquo;Please translate this passage from Biblical Hebrew into English.&rdquo;</li>' +
                '<li><strong>Assess the translation.</strong> How does it handle the grammatical ambiguity of <em>\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA</em>? What about <em>\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD</em>?</li>' +
                '<li><strong>Now try:</strong> &ldquo;What are the main translational controversies in this passage?&rdquo;</li>' +
                '<li><strong>Ask:</strong> &ldquo;How does the syntax of verse 1 relate to the doctrine of <em>creatio ex nihilo</em>?&rdquo;</li>' +
                '<li><strong>Judge the response</strong> against what you know about the text. Where does it show genuine purchase? Where is it generic?</li>' +
            '</ol>',

        /* ancient-languages.html — worked translation examples (focus on Hebrew/Greek for theology) */
        'ancient-langs-examples':
            '<p>Each example presents the original text, followed by an LLM-generated translation and a published human translation side by side for comparison, with a brief note on what the LLM output gets right and where it falls short.</p>' +

            '<div class="note">' +
                '<p><strong>A note on this page&rsquo;s own method:</strong> The commentary below each translation is itself AI-generated and therefore subject to the same limitations discussed throughout this guide. You are invited to evaluate not only the translations but also the analysis of them.</p>' +
            '</div>' +

            '<!-- Hebrew: Genesis 1:1-2 -->' +
            '<h3>Hebrew: Genesis 1:1&ndash;2</h3>' +
            '<div class="translation-example">' +
                '<h4>Genesis 1:1&ndash;2 (Biblia Hebraica)</h4>' +
                '<div class="original-text">' +
                    '<p class="translation-label">Original Hebrew</p>' +
                    '<p lang="he" dir="rtl">\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA \u05D1\u05B8\u05BC\u05E8\u05B8\u05D0 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05D0\u05B5\u05EA \u05D4\u05B7\u05E9\u05C1\u05B8\u05BC\u05DE\u05B7\u05D9\u05B4\u05DD \u05D5\u05B0\u05D0\u05B5\u05EA \u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5\u05F3 \u05D5\u05B0\u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5 \u05D4\u05B8\u05D9\u05B0\u05EA\u05B8\u05D4 \u05EA\u05B9\u05D4\u05D5\u05BC \u05D5\u05B8\u05D1\u05B9\u05D4\u05D5\u05BC \u05D5\u05B0\u05D7\u05B9\u05E9\u05C1\u05B6\u05DA\u05B0 \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05EA\u05B0\u05D4\u05D5\u05B9\u05DD \u05D5\u05B0\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD \u05DE\u05B0\u05E8\u05B7\u05D7\u05B6\u05E4\u05B6\u05EA \u05E2\u05B7\u05DC\u05BE\u05E4\u05B0\u05BC\u05E0\u05B5\u05D9 \u05D4\u05B7\u05DE\u05B8\u05BC\u05D9\u05B4\u05DD\u05F3</p>' +
                '</div>' +
                '<div class="translation-pair">' +
                    '<div>' +
                        '<p class="translation-label">LLM Translation</p>' +
                        '<p>In the beginning God created the heavens and the earth. And the earth was formless and void, and darkness was over the face of the deep, and the Spirit of God was hovering over the face of the waters.</p>' +
                        '<p class="translation-source">Claude Opus 4.6, February 2026</p>' +
                    '</div>' +
                    '<div>' +
                        '<p class="translation-label">Published Translation</p>' +
                        '<p>In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.</p>' +
                        '<p class="translation-source">Authorized (King James) Version, 1611</p>' +
                    '</div>' +
                '</div>' +
                '<p class="translation-note">This is perhaps the most translated passage in human history, and every word carries theological weight. The LLM defaults to familiar renderings &mdash; but <em>\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA</em> could begin a temporal clause (\'When God began to create&hellip;\') rather than an absolute statement. The syntactic ambiguity has implications for the doctrine of <em>creatio ex nihilo</em>. <em>\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD</em> carries at least three defensible readings: \'the spirit of God\', \'a wind from God\', or \'a mighty wind\'. The confident fluency of the LLM output obscures the genuine interpretive complexity that scholars and translators have wrestled with for millennia.</p>' +
            '</div>' +

            '<!-- Greek: Romans 3:28 -->' +
            '<h3>Greek: Romans 3:28</h3>' +
            '<div class="translation-example">' +
                '<h4>Romans 3:28 &mdash; justification by faith</h4>' +
                '<div class="original-text">' +
                    '<p class="translation-label">Original Greek</p>' +
                    '<p lang="grc">\u03BB\u03BF\u03B3\u03B9\u03B6\u03CC\u03BC\u03B5\u03B8\u03B1 \u03B3\u1F70\u03C1 \u03B4\u03B9\u03BA\u03B1\u03B9\u03BF\u1FE6\u03C3\u03B8\u03B1\u03B9 \u03C0\u03AF\u03C3\u03C4\u03B5\u03B9 \u1F04\u03BD\u03B8\u03C1\u03C9\u03C0\u03BF\u03BD \u03C7\u03C9\u03C1\u1F76\u03C2 \u1F14\u03C1\u03B3\u03C9\u03BD \u03BD\u03CC\u03BC\u03BF\u03C5.</p>' +
                '</div>' +
                '<div class="translation-pair">' +
                    '<div>' +
                        '<p class="translation-label">LLM Translation</p>' +
                        '<p>For we hold that a person is justified by faith apart from works of the law.</p>' +
                    '</div>' +
                    '<div>' +
                        '<p class="translation-label">Published Translation</p>' +
                        '<p>Therefore we conclude that a man is justified by faith without the deeds of the law.</p>' +
                        '<p class="translation-source">Authorized (King James) Version, 1611</p>' +
                    '</div>' +
                '</div>' +
                '<p class="translation-note">This verse has been at the centre of Reformation theology. Luther famously added <em>allein</em> (\'alone\') to his German translation &mdash; a word not in the Greek. The key interpretive question revolves around <em>\u03C0\u03AF\u03C3\u03C4\u03B5\u03B9</em>: does it mean \'faith\' as personal trust, \'faithfulness\', or the \'faith of Christ\' (a subjective genitive reading of the related phrase <em>\u03C0\u03AF\u03C3\u03C4\u03B9\u03C2 \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u1FE6</em> elsewhere in Paul)? Similarly, <em>\u1F14\u03C1\u03B3\u03C9\u03BD \u03BD\u03CC\u03BC\u03BF\u03C5</em> &mdash; \'works of the law\' &mdash; has been read as referring to the entire Mosaic law, to Jewish identity markers specifically, or to human effort generally. The LLM produces a standard modern rendering without signalling the centuries of theological controversy embedded in every word choice.</p>' +
            '</div>'
    }
};
