/* Institution content: University of Exeter
 * Loaded when ?institution=exeter is present in the URL.
 */
window.defined_institutions = window.defined_institutions || {};
window.defined_institutions.exeter = {
    label: 'University of Exeter',
    slots: {

        /* resources.html — At Exeter section */
        'resources-institution':
            '<h2>At Exeter</h2>' +
            '<div class="highlight">' +
                '<p>These are your institutional starting points. Bookmark them.</p>' +

                '<h3>Enabling AI at Exeter</h3>' +
                '<ul>' +
                    '<li><strong>Enabling AI hub</strong> &mdash; The university&rsquo;s central page for AI strategy, policy, the AI Catalogue of approved tools, and training resources.<br>' +
                    '<a href="https://www.exeter.ac.uk/about/strategies/enabling-ai/" target="_blank">exeter.ac.uk/about/strategies/enabling-ai/</a></li>' +
                    '<li><strong>AI Policy</strong> &mdash; Principles for using AI at Exeter: fairness, transparency, data protection, and ethical standards.<br>' +
                    '<a href="https://www.exeter.ac.uk/v8media/aboutus/strategies/documents/POL020_-_AI_Policy.pdf" target="_blank">AI Policy (PDF)</a></li>' +
                    '<li><strong>Responsible use of AI in research</strong> &mdash; Guidance for researchers, including the AI Catalogue and sustainability considerations.<br>' +
                    '<a href="https://www.exeter.ac.uk/about/strategies/enabling-ai/ai-for-researchers/" target="_blank">exeter.ac.uk/&hellip;/ai-for-researchers/</a></li>' +
                '</ul>' +

                '<h3>Teaching and assessment</h3>' +
                '<ul>' +
                    '<li><strong>GenAI use in assessments</strong> &mdash; Exeter&rsquo;s four-tier framework (AI-prohibited / AI-permitted / AI-assisted / AI-integrated), student declaration requirements, and guidance on setting assessment briefs.<br>' +
                    '<a href="https://libguides.exeter.ac.uk/c.php?g=725611&p=5283663" target="_blank">libguides.exeter.ac.uk/c.php?g=725611&amp;p=5283663</a></li>' +
                    '<li><strong>Referencing GenAI</strong> &mdash; How students should cite AI use under Cite Them Right, with links to style-specific guidance.<br>' +
                    '<a href="https://libguides.exeter.ac.uk/referencing/generativeai" target="_blank">libguides.exeter.ac.uk/referencing/generativeai</a></li>' +
                '</ul>' +

                '<h3>Research centres and institutes</h3>' +
                '<ul>' +
                    '<li><strong>CRAIC</strong> (Centre for Sherlock Holmes AI and Creativity) &mdash; Interdisciplinary research centre exploring AI and creativity.<br>' +
                    '<a href="https://cdf.exeter.ac.uk/communications/research/centres/craic/" target="_blank">cdf.exeter.ac.uk/&hellip;/craic/</a></li>' +
                    '<li><strong>Digital Humanities Lab</strong> &mdash; Supporting digital methods across the humanities, including text analysis, spatial humanities, and data visualisation.<br>' +
                    '<a href="https://www.exeter.ac.uk/research/digitalhumanities/digital-lab/" target="_blank">exeter.ac.uk/research/digitalhumanities/digital-lab/</a></li>' +
                    '<li><strong>IDSAI</strong> (Institute for Data Science and Artificial Intelligence) &mdash; Cross-disciplinary AI research, training, and collaboration.<br>' +
                    '<a href="https://www.exeter.ac.uk/research/institutes/idsai/" target="_blank">exeter.ac.uk/research/institutes/idsai/</a></li>' +
                '</ul>' +

                '<h3>Community and training</h3>' +
                '<p>There is a lot of AI-related activity across the university. The Enabling AI hub lists current training workshops (including Digital Learning Support sessions on GenAI for teaching and assessment design) and <strong>Communities of Practice</strong> that bring together staff to share ideas, pilot tools, and champion responsible adoption. You may want to consider joining an <a href="https://www.exeter.ac.uk/about/vision/enabling-ai/" target="_blank">Exeter AI Community of Practice</a>.</p>' +
            '</div>',

        /* copilot.html — Exeter-specific Copilot restriction */
        'copilot-institution-policy':
            '<p><strong>A note on institutional variation:</strong> How Copilot works at your university depends on decisions made by your IT administration. The technology can search across emails, files, and meeting transcripts&mdash;but many institutions restrict these permissions, sometimes significantly. At Exeter, for example, Copilot can only access the specific file or email you are currently working with, not your broader Microsoft 365 data. This is a deliberate policy choice reflecting cautious data governance, not a limitation of the technology itself. The guidance below covers both full-access and restricted configurations, and includes specific strategies for getting the most out of Copilot even when access is tightly scoped.</p>',

        /* copilot.html — Exeter restricted-access strategy intro */
        'copilot-institution-restricted':
            '<p>If your institution limits Copilot to the document or email you&rsquo;re currently working with&mdash;as Exeter does&mdash;you lose the cross-application search features but retain a capable AI assistant embedded in your everyday tools. Here are strategies for getting genuine value from this configuration:</p>',

        /* resources.html — Cite Them Right Exeter reference */
        'resources-institution-ctr':
            '<li><strong>Cite Them Right</strong> &mdash; Exeter&rsquo;s standard referencing guide. Includes GenAI citation guidance under &ldquo;Digital and Internet&rdquo; for multiple referencing styles.<br>' +
            'Available via Exeter library: <a href="https://libguides.exeter.ac.uk/referencing/generativeai" target="_blank">libguides.exeter.ac.uk/referencing/generativeai</a></li>',

        /* resources.html — AI detection Exeter note */
        'resources-institution-detection':
            '<li><strong>AI detection tools</strong> (Turnitin AI detection, GPTZero, etc.) &mdash; QAA and Jisc both advise caution. Exeter has not activated Turnitin&rsquo;s AI detection. At present, don&rsquo;t rely on these.</li>',

        /* index.html — Exeter-specific links note */
        'index-institution-note': 'Exeter-specific links included.'
    }
};
