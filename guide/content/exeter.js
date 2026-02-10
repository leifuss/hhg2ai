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
                '<p>These are your institutional starting points. Bookmark them; they change.</p>' +
                '<ul>' +
                    '<li><strong>GenAI use in assessments</strong> &mdash; Exeter&rsquo;s four-tier framework (AI-prohibited / AI-permitted / AI-assisted / AI-integrated), student declaration requirements, and guidance on setting assessment briefs.<br>' +
                    '<a href="https://libguides.exeter.ac.uk/c.php?g=725611&p=5283663" target="_blank">libguides.exeter.ac.uk/c.php?g=725611&amp;p=5283663</a></li>' +
                    '<li><strong>Referencing GenAI</strong> &mdash; How students should cite AI use under Cite Them Right, with links to style-specific guidance.<br>' +
                    '<a href="https://libguides.exeter.ac.uk/referencing/generativeai" target="_blank">libguides.exeter.ac.uk/referencing/generativeai</a></li>' +
                '</ul>' +
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
