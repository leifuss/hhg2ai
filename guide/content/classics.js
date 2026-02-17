/* Discipline content: Classics & Ancient History
 * Loaded when ?discipline=classics is present in the URL.
 */
window.defined_disciplines = window.defined_disciplines || {};
window.defined_disciplines.classics = {
    label: 'Classics & Ancient History',
    slots: {

        /* index.html — title and subtitle */
        'index-title': 'Large Language Models: A Guide for Classics and Ancient History',
        'index-subtitle': 'For colleagues in Classics and Ancient History',

        /* index.html — ancient languages card description */
        'index-ancient-langs-card': 'Worked translation examples in Latin, Greek, and Hebrew. How LLMs handle textual criticism, fragmentary evidence, and sacred texts. Written for specialists.',

        /* getting-started.html — translation exercise (Classics-specific) */
        'getting-started-exercise':
            '<p>This exercise works best if you have some Latin, but the principle applies to any ancient language you read. We use a passage from Tacitus because its compressed, syntactically demanding prose exposes both the strengths and the limitations of machine translation in ways that simpler Latin does not.</p>' +
            '<ol>' +
                '<li><strong>Open an LLM.</strong> Go to <a href="https://claude.ai" target="_blank">claude.ai</a> (or <a href="https://chatgpt.com" target="_blank">chatgpt.com</a> if you prefer). A free account is fine for this exercise.</li>' +
                '<li><strong>Paste this passage</strong>&mdash;the opening of Tacitus, <em>Agricola</em> 1:' +
                    '<blockquote>&ldquo;Clarorum virorum facta moresque posteris tradere, antiquitus usitatum, ne nostris quidem temporibus quamquam incuriosa suorum aetas omisit, quotiens magna aliquave virtus vicit ac supergressa est vitium parvis magnisque civitatibus commune, ignorantiam recti et invidiam.&rdquo;</blockquote>' +
                '</li>' +
                '<li><strong>Ask:</strong> &ldquo;Please translate this passage from Latin into English.&rdquo;</li>' +
                '<li><strong>Read the translation carefully.</strong> Note what works and what doesn&rsquo;t. Consider: Does it capture Tacitus&rsquo;s compressed style, or does it over-expand into paraphrase? How does it handle the ablative absolute? Does it render <em>ignorantiam recti et invidiam</em> accurately&mdash;and does the English convey the same rhetorical weight?</li>' +
                '<li><strong>Now try:</strong> &ldquo;What alternative renderings are possible for <em>ignorantiam recti et invidiam</em>?&rdquo; See whether the system can articulate the interpretive choices involved, or whether it simply offers synonyms.</li>' +
                '<li><strong>Ask:</strong> &ldquo;What is the rhetorical function of this opening sentence in the context of the <em>Agricola</em> as a whole?&rdquo;</li>' +
                '<li><strong>Assess the response against what you know about the text.</strong> Does the system understand how this sentence positions Tacitus&rsquo;s project? Does it recognise the political undertones? Where does its analysis feel generic, and where does it show genuine purchase on the passage?</li>' +
            '</ol>' +
            '<div class="highlight" style="font-size: 0.9rem;">' +
                '<p><strong>What you&rsquo;ll produce:</strong> A calibrated judgement of how the tool handles material in your domain &mdash; where it performs well, where it falls short, and what the failure modes look like.</p>' +
                '<p><strong>How to check it:</strong> Compare the translation against a published rendering (Birley, Hammond, or your own preferred edition). Identify at least one place where the LLM missed nuance that matters.</p>' +
                '<p style="margin-bottom: 0;"><strong>Common pitfalls:</strong> Accepting a fluent translation as adequate without checking the interpretive choices. Concluding the tool is &ldquo;good enough&rdquo; based on a passage you know well &mdash; the real test is material at the edge of your expertise, where errors are harder to spot.</p>' +
            '</div>',

        /* quickstart.html — translation exercise (Classics-specific) */
        'quickstart-exercise':
            '<ol>' +
                '<li><strong>Paste this passage</strong> &mdash; Tacitus, <em>Agricola</em> 1:' +
                    '<blockquote style="font-size: 0.95rem;">&ldquo;Clarorum virorum facta moresque posteris tradere, antiquitus usitatum, ne nostris quidem temporibus quamquam incuriosa suorum aetas omisit, quotiens magna aliquave virtus vicit ac supergressa est vitium parvis magnisque civitatibus commune, ignorantiam recti et invidiam.&rdquo;</blockquote>' +
                    '<p style="font-size: 0.85rem; color: var(--text-secondary);">(Or substitute a passage in Greek or Hebrew that you know well.)</p>' +
                '</li>' +
                '<li><strong>Ask:</strong> &ldquo;Please translate this passage from Latin into English.&rdquo;</li>' +
                '<li><strong>Assess the translation.</strong> Does it capture the compressed style? How does it handle <em>ignorantiam recti et invidiam</em>? What is lost?</li>' +
                '<li><strong>Now try:</strong> &ldquo;What alternative renderings are possible for <em>ignorantiam recti et invidiam</em>?&rdquo;</li>' +
                '<li><strong>Ask:</strong> &ldquo;What is the rhetorical function of this opening sentence in the context of the <em>Agricola</em> as a whole?&rdquo;</li>' +
                '<li><strong>Judge the response</strong> against what you know about the text. Where does it show genuine purchase? Where is it generic?</li>' +
            '</ol>',

        /* use-cases.html — system prompt example */
        'use-cases-system-prompt':
            '<blockquote>&ldquo;I&rsquo;m a classicist working on Latin literature. When I ask about primary sources, cite specific passages. Flag when you&rsquo;re uncertain rather than generating plausible-sounding guesses. Challenge my interpretations rather than agreeing reflexively. Avoid theoretical frameworks I haven&rsquo;t specifically requested. When I ask for counterarguments, give me the strongest versions, not strawmen.&rdquo;</blockquote>',

        /* use-cases.html — custom project example */
        'use-cases-custom-project':
            '<p>You can create project-specific assistants preloaded with your research context, methodological preferences, key sources, and standing instructions. A &ldquo;Roman epigraphy assistant&rdquo; might include your transcription conventions, standard reference works, and instructions to flag dating uncertainties. A &ldquo;thesis writing assistant&rdquo; might include your chapter outlines, style preferences, and instructions to challenge weak arguments.</p>',

        /* ancient-languages.html — worked translation examples */
        'ancient-langs-examples':
            '<p>Each example presents the original text, followed by an LLM-generated translation and a published human translation side by side for comparison, with a brief note on what the LLM output gets right and where it falls short. These are not cherry-picked failures or successes. They are representative of what you will encounter if you paste ancient language material into a current model.</p>' +

            '<div class="note">' +
                '<p><strong>A note on this page&rsquo;s own method:</strong> The commentary below each translation is itself AI-generated (Claude Opus 4.6, February 2026) and therefore subject to the same limitations discussed throughout this guide. It may overstate or mischaracterise particular interpretive points. You are invited to evaluate not only the translations but also the analysis of them&mdash;a useful exercise in its own right.</p>' +
            '</div>' +

            '<!-- Latin: Tacitus, Agricola 1 -->' +
            '<h3>Latin: Tacitus, <em>Agricola</em> 1</h3>' +
            '<div class="translation-example">' +
                '<h4>Tacitus, <em>Agricola</em> 1.1</h4>' +
                '<div class="original-text">' +
                    '<p class="translation-label">Original Latin</p>' +
                    '<p>Clarorum virorum facta moresque posteris tradere, antiquitus usitatum, ne nostris quidem temporibus quamquam incuriosa suorum aetas omisit, quotiens magna aliquave virtus vicit ac supergressa est vitium parvis magnisque civitatibus commune, ignorantiam recti et invidiam.</p>' +
                '</div>' +
                '<div class="translation-pair">' +
                    '<div>' +
                        '<p class="translation-label">LLM Translation</p>' +
                        '<p>To hand down to future generations the deeds and character of distinguished men has been a long-established custom, and even our own age, though indifferent to its own people, has not failed to do so whenever some great or notable virtue has triumphed over and risen above the vice common to small and great states alike &mdash; namely, ignorance of what is right and envy.</p>' +
                        '<p class="translation-source">Claude Opus 4.6, February 2026</p>' +
                    '</div>' +
                    '<div>' +
                        '<p class="translation-label">Published Translation</p>' +
                        '<p>It was the custom in past times to relate famous men&rsquo;s deeds and characters for posterity. Even our present age, though indifferent to its own affairs, has not abandoned it, at least whenever some great and noble virtue has overcome and surmounted the vice that is common to small and great states alike: ignorance of what is right and jealousy.</p>' +
                        '<p class="translation-source">Anthony R. Birley, <em>Agricola and Germany</em>, Oxford World&rsquo;s Classics, 2009</p>' +
                    '</div>' +
                '</div>' +
                '<p class="translation-note">This translation is readable and broadly accurate, but notice how the compressed Latin becomes looser English. The final phrase <em>ignorantiam recti et invidiam</em> carries specific weight &mdash; \'ignorance of what is right and resentment\' &mdash; that the translation may dilute. The rhetorical structure of the periodic sentence is largely lost. Tacitus builds suspense by withholding the main verb and piling up subordinate clauses; the English rendering, by smoothing the syntax into a more natural word order, sacrifices the deliberate difficulty of Tacitean prose. The phrase <em>incuriosa suorum aetas</em> &mdash; an age careless of its own people &mdash; is quietly devastating in context, and the translation captures its sense without its sting.</p>' +
            '</div>' +

            '<!-- Greek: Thucydides, History 1.22.4 -->' +
            '<h3>Greek: Thucydides, <em>History</em> 1.22.4</h3>' +
            '<div class="translation-example">' +
                '<h4>Thucydides, <em>History</em> 1.22.4 &mdash; the methodology statement</h4>' +
                '<div class="original-text">' +
                    '<p class="translation-label">Original Greek</p>' +
                    '<p lang="grc">\u03BA\u03C4\u1FC6\u03BC\u03AC \u03C4\u03B5 \u1F10\u03C2 \u03B1\u1F30\u03B5\u1F76 \u03BC\u1FB6\u03BB\u03BB\u03BF\u03BD \u1F22 \u1F00\u03B3\u03CE\u03BD\u03B9\u03C3\u03BC\u03B1 \u1F10\u03C2 \u03C4\u1F78 \u03C0\u03B1\u03C1\u03B1\u03C7\u03C1\u1FC6\u03BC\u03B1 \u1F00\u03BA\u03BF\u03CD\u03B5\u03B9\u03BD \u03BE\u03CD\u03B3\u03BA\u03B5\u03B9\u03C4\u03B1\u03B9.</p>' +
                '</div>' +
                '<div class="translation-pair">' +
                    '<div>' +
                        '<p class="translation-label">LLM Translation</p>' +
                        '<p>It has been composed as a possession for all time rather than as a competition piece to be heard for the moment.</p>' +
                        '<p class="translation-source">Claude Opus 4.6, February 2026</p>' +
                    '</div>' +
                    '<div>' +
                        '<p class="translation-label">Published Translation</p>' +
                        '<p>It was composed as a permanent legacy, not a showpiece for a single hearing.</p>' +
                        '<p class="translation-source">Martin Hammond, <em>The Peloponnesian War</em>, Oxford World&rsquo;s Classics, 2009</p>' +
                    '</div>' +
                '</div>' +
                '<p class="translation-note">The phrase <em>\u03BA\u03C4\u1FC6\u03BC\u03AC \u03C4\u03B5 \u1F10\u03C2 \u03B1\u1F30\u03B5\u1F76</em> (\'a possession for all time\') is among the most discussed in ancient historiography. Any translation involves interpretive choices about what Thucydides means by his work being a \'possession\' versus a \'competition piece\' &mdash; choices that reflect broader debates about his historiographic programme. Does <em>\u03BA\u03C4\u1FC6\u03BC\u03B1</em> imply practical utility or enduring value? Is the contrast with <em>\u1F00\u03B3\u03CE\u03BD\u03B9\u03C3\u03BC\u03B1</em> a reference to epideictic oratory, to Herodotus, or to the broader culture of rhetorical performance? The LLM produces a serviceable rendering but doesn\'t signal that this is contested ground. A student encountering this translation might reasonably assume the meaning is settled, when in fact generations of scholars have argued over what precisely Thucydides is claiming about the nature and purpose of historical writing.</p>' +
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
                '<p class="translation-note">This is perhaps the most translated passage in human history, and every word carries theological weight. The LLM defaults to familiar renderings &mdash; but <em>\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA</em> could begin a temporal clause (\'When God began to create&hellip;\') rather than an absolute statement. The syntactic ambiguity has implications for the doctrine of <em>creatio ex nihilo</em>: does the text describe an absolute beginning, or does it presuppose pre-existing material? <em>\u05E8\u05D5\u05BC\u05D7\u05B7 \u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD</em> carries at least three defensible readings: \'the spirit of God\', \'a wind from God\', or \'a mighty wind\' (taking <em>\u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD</em> as a superlative rather than a divine name). <em>\u05EA\u05B9\u05D4\u05D5\u05BC \u05D5\u05B8\u05D1\u05B9\u05D4\u05D5\u05BC</em> resists easy translation &mdash; \'formless and void\' is a convention, not a transparent rendering, and the Hebrew carries connotations of waste, chaos, and desolation that no single English phrase captures. The confident fluency of the LLM output obscures the genuine interpretive complexity that scholars and translators have wrestled with for millennia.</p>' +
            '</div>',

        /* ancient-languages.html — iterative engagement examples */
        'ancient-langs-iterative':
            '<p>Consider returning to the Tacitus passage above. Rather than accepting the initial translation, you might pursue a line of questioning:</p>' +
            '<div class="highlight">' +
                '<p><strong>Prompt 1:</strong> "What alternative renderings are possible for <em>ignorantiam recti et invidiam</em>?"</p>' +
                '<p>A well-constructed response will note that <em>recti</em> could mean \'the right\', \'the morally correct\', or \'the straight path\'; that <em>invidia</em> ranges across \'envy\', \'resentment\', \'ill-will\', and \'the evil eye\'; and that the hendiadys reading (where the two nouns form a single complex idea) is worth considering alongside the simple list reading. A poor response will offer synonyms without discussing the interpretive stakes.</p>' +
            '</div>' +
            '<div class="highlight">' +
                '<p><strong>Prompt 2:</strong> "How does Tacitus\'s word order create rhetorical emphasis in this sentence?"</p>' +
                '<p>This probes whether the model can move beyond lexical translation into stylistic analysis. Tacitus delays the main clause, front-loads the infinitive phrase, and places the key vice &mdash; <em>ignorantiam recti et invidiam</em> &mdash; at the very end of the period for maximum impact. The model may identify some of these features. It may also miss the specifically Tacitean quality of the compression, or fail to connect the style to the broader literary programme of the <em>Agricola</em>.</p>' +
            '</div>' +
            '<div class="highlight">' +
                '<p><strong>Prompt 3:</strong> "What is the relationship between this opening and the broader argument of the <em>Agricola</em>?"</p>' +
                '<p>Here the model must connect the passage to the work\'s function as biography, political commentary, and defence of a particular kind of <em>virtus</em> under tyranny. This is where depth of knowledge matters: can it articulate why Tacitus begins with the tradition of commemorating great men precisely at a moment when that tradition is under threat?</p>' +
            '</div>',

        /* ancient-languages.html — manuscripts, fragments, sacred texts */
        'ancient-langs-fragments':
            '<h3>Textual criticism and manuscripts</h3>' +
            '<p>LLMs can be genuinely useful for certain tasks adjacent to textual criticism. They perform reasonably well at OCR of manuscript hands, particularly for well-represented scripts and periods. They can help navigate an apparatus criticus, explaining sigla and summarising variant readings in accessible language. They can compare variant readings across multiple witnesses and present the differences clearly. These are real efficiencies, and scholars working with critical editions may find them worth exploring.</p>' +
            '<p>They are, however, unreliable for the core intellectual tasks of the discipline. Conjectural emendation requires a feel for an author\'s usage, a knowledge of palaeographic error patterns, and a judgement about plausibility that cannot be reduced to statistical prediction. Palaeographic dating depends on features of letter-form, ductus, and scribal convention that the model has no access to &mdash; it has never seen a manuscript. Codicological analysis is entirely outside its competence. When a model pronounces on these matters, it is generating text about manuscripts based on patterns in its training data, not reading the physical evidence. The distinction matters: a confident statement about a manuscript\'s date or provenance drawn from an LLM is not evidence. It is a guess dressed in scholarly language.</p>' +

            '<h3>Fragmentary evidence</h3>' +
            '<p>LLMs will \'complete\' fragmentary texts with confidence. Given a lacunose passage, they will supply plausible-sounding restorations without distinguishing between well-attested supplementation (drawn from parallel texts, formulaic language, or epigraphic convention) and pure invention. This can be useful as a hypothesis-generating exercise: if you are working with a fragmentary inscription or papyrus, the model\'s suggestions might prompt you to consider possibilities you had not entertained. But the output must be treated as what it is &mdash; a probabilistic guess at what words might fill a gap, not a reading of what was once there.</p>' +
            '<p>The danger is particularly acute for students and early-career researchers who may not yet have the experience to distinguish a well-founded restoration from a plausible fabrication. If you use these tools for work on fragmentary material, build in explicit checkpoints: Does this restoration fit the available letter-traces? Is it consistent with the formulaic conventions of the genre and period? Does it have parallels in securely attested texts? The model will not ask these questions for you.</p>' +

            '<h3>Sacred texts</h3>' +
            '<p>Biblical, Qur\'anic, liturgical, and other sacred texts occupy a distinct category that demands particular care. These materials carry theological and liturgical significance that statistical text generation cannot engage with. A model may translate accurately at a surface level while being entirely deaf to the interpretive traditions, theological commitments, and pastoral contexts that shape how these texts are read within living communities of faith.</p>' +
            '<p>The Hebrew Bible, the New Testament, the Qur\'an &mdash; these are not simply ancient texts that happen to be old. They are texts around which vast traditions of interpretation have grown, traditions that inform and constrain what a responsible translation looks like. An LLM has no access to the weight of those traditions as traditions. It has patterns derived from training data that includes scholarly and devotional writing about these texts, and it can reproduce elements of those discussions. But confident fluency about sacred texts is not understanding of, or engagement with, tradition. A translation of the Psalms that reads smoothly but ignores the interpretive history preserved in the Targumim, the Septuagint, the Vulgate, and centuries of Jewish and Christian commentary is not merely incomplete &mdash; it misrepresents the nature of the enterprise.</p>' +
            '<p>Scholars in Theology and Religion will recognise this problem immediately. The caution is not that LLMs should never be used with sacred texts, but that their use requires the same hermeneutical self-awareness that any encounter with these texts demands.</p>',

        /* resources.html — source-facing AI in ancient-world scholarship */
        'resources-discipline-tools':
            '<h2>3. Source-facing AI in ancient-world scholarship</h2>' +
            '<p>This is where AI changes the discipline, not just the workflow. The most significant impact in classics, ancient history, and archaeology is &ldquo;extends what is legible, datable, and searchable,&rdquo; not &ldquo;writes prose.&rdquo;</p>' +
            '<h3>Inscriptions and text restoration</h3>' +
            '<ul>' +
                '<li><strong>Ithaca</strong> (Google DeepMind) &mdash; Ancient Greek inscriptions: restoration of missing text, geographical attribution, and chronological dating via deep learning on epigraphic parallels.<br>' +
                '<a href="https://ithaca.deepmind.com/" target="_blank">ithaca.deepmind.com</a></li>' +
                '<li><strong>Aeneas</strong> (Google DeepMind) &mdash; Latin inscriptions: the Latin counterpart to Ithaca. Restoration, dating, and provenance assistance.</li>' +
                '<li><strong>Research group</strong> behind Ithaca and Aeneas &mdash; For colleagues who want to know &ldquo;what exactly is this?&rdquo; and follow the underlying research.<br>' +
                '<a href="https://deepmind.google/discover/blog/" target="_blank">deepmind.google/discover/blog/</a> (search &ldquo;Ithaca&rdquo; or &ldquo;Aeneas&rdquo;)</li>' +
            '</ul>' +
            '<h3>Manuscripts, archival handwriting, and OCR/HTR</h3>' +
            '<ul>' +
                '<li><strong>Transkribus</strong> &mdash; The most widely used handwritten text recognition (HTR) platform across archives and manuscript-based fields. Free tier available; institutional licensing for large projects.<br>' +
                '<a href="https://www.transkribus.org/" target="_blank">transkribus.org</a></li>' +
                '<li><strong>eScriptorium</strong> &mdash; Open-source environment for HTR/OCR workflows, often paired with the kraken engine. Good for institutional projects and bespoke model training.<br>' +
                '<a href="https://escriptorium.inria.fr/" target="_blank">escriptorium.inria.fr</a></li>' +
                '<li><strong>kraken</strong> &mdash; Open-source HTR/OCR engine. Especially useful where bespoke training on particular scripts or hands is needed.<br>' +
                '<a href="https://github.com/mittagessen/kraken" target="_blank">github.com/mittagessen/kraken</a></li>' +
            '</ul>' +
            '<h3>A vivid example</h3>' +
            '<ul>' +
                '<li><strong>Vesuvius Challenge</strong> &mdash; Machine learning + imaging applied to carbonised Herculaneum papyri. A concrete, headline-worthy example of &ldquo;AI extends the readable.&rdquo;<br>' +
                '<a href="https://scrollprize.org/" target="_blank">scrollprize.org</a></li>' +
            '</ul>',

        /* resources.html — discipline-specific reading list */
        'resources-discipline-reading':
            '<h3>Classics &amp; ancient history</h3>' +
            '<ul>' +
                '<li><strong>Shawn Graham, <em>Practical Necromancy for Beginners</em></strong> (Digital Press at the University of North Dakota, 2025) &mdash; Opinionated, memorable introduction to AI for archaeology and history. Good for framing, caution, and classroom discussion.</li>' +
                '<li><strong>Morrice et al., &ldquo;Making Use of AI in the Classics Classroom,&rdquo;</strong> <em>Journal of Classics Teaching</em> (2025) &mdash; Practical uses (translation exercises, question generation, comprehension tasks) plus risks and limits. Directly applicable.</li>' +
                '<li><strong>&ldquo;Artificial Intelligence and the Practice of History: A Forum,&rdquo;</strong> <em>American Historical Review</em> 128, no. 3 (September 2023): 1345&ndash;89 &mdash; Multiple perspectives from practising historians. Excellent seminar reading.</li>' +
            '</ul>',

        /* resources.html — discipline intro line */
        'resources-discipline-intro': '<em>Especially classics, ancient history, archaeology, religion &amp; theology</em>',

        /* agentic.html — project examples */
        'agentic-projects':
            '<div class="highlight">' +
                '<p><strong><a href="https://scotchbon.net/qgis/html/en/docs/exeter_training_manual/index.html" target="_blank">QGIS Tutorials for Ancient History</a></strong></p>' +
                '<p>Standard GIS tutorials redeveloped for ancient history case studies. The agent handled technical adaptation and formatting; the human provided the pedagogical brief, disciplinary context, and quality review.</p>' +
            '</div>' +
            '<div class="highlight">' +
                '<p><strong><a href="https://leifuss.github.io/ravenclaw/" target="_blank">RavenC:LAW</a></strong></p>' +
                '<p>Interactive map comparing place references across the Ravenna Cosmography and Peutinger Map. The data and principal coding were done manually over three months; AI-assisted improvements (bugfixes, interface work) followed in September 2025. An example of agentic tools augmenting existing manual work rather than replacing it.</p>' +
            '</div>' +
            '<div class="highlight">' +
                '<p><strong><a href="https://scotchbon.net/globes/" target="_blank">Interactive Ancient Globes</a></strong></p>' +
                '<p>Ancient Greek and Islamic globes with adjustable orientation. Original coding took several weeks (summer 2024); consolidated into a single framework with new features added using AI in September 2025.</p>' +
            '</div>' +
            '<div class="highlight">' +
                '<p><strong><a href="https://leifuss.github.io/hestiavizredux/" target="_blank">HestiaViz Redux</a></strong></p>' +
                '<p>Revamped version of a tool for visualising place references in Herodotus&rsquo;s <em>Histories</em>.</p>' +
            '</div>'
    }
};
