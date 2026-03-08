---
title: "Worked Examples"
description: "Seven humanities-specific workflows showing how Claude's tools fit into real research processes — from Chat Projects to corpus processing to web tools."
last_verified: 2026-03-08
---

# Worked Examples

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

This section walks through seven realistic workflows, each showing how Claude's tools fit into a humanities research process. They are not step-by-step tutorials but worked examples that show what a productive session looks like, what to watch out for, and which tool to use at each stage.

## Contents

- [8.1 Building a research project in Chat](#building-a-research-project-in-chat)
- [8.2 Processing a text corpus with Code](#processing-a-text-corpus-with-code)
- [8.3 Building a web-based tool with Code](#building-a-web-based-tool-with-code)
- [8.4 Document preparation pipeline](#document-preparation-pipeline)
- [8.5 Data cleaning and transformation](#data-cleaning-and-transformation)
- [8.6 Interview and transcript analysis](#interview-and-transcript-analysis)
- [8.7 Bibliographic and administrative cleanup](#bibliographic-and-administrative-cleanup)

---

## Building a research project in Chat

**Scenario:** You are writing a journal article on the reception of Herodotus in Renaissance Florence. You want Claude to help you explore the topic, organise your thinking, draft sections, and refine your argument.

### Setting up

1. Create a **Project** called "Herodotus in Renaissance Florence."
2. Upload your key primary sources: relevant passages from Herodotus (in translation and Greek), excerpts from Renaissance commentaries you have already collected, and any secondary literature you want Claude to work with.
3. Write **custom instructions**:

    ```
    You are assisting with a journal article on the reception of
    Herodotus in Renaissance Florence (c. 1400-1530). The target
    journal is Renaissance Quarterly. Use formal academic English.
    Cite primary sources by standard abbreviations (e.g., Hdt. 1.1).
    When discussing Renaissance texts, give the Latin title and
    author on first mention. Flag any claims you are uncertain about.
    Do not fabricate references -- if you are unsure of a citation,
    say so explicitly.
    ```

### Working pattern

**Conversation 1 -- Exploration:** "What are the main channels through which Herodotus's text reached Florentine humanists in the fifteenth century? I'm particularly interested in manuscript transmission and the role of Greek emigres."

Claude will draw on its training data to discuss Lorenzo Valla's Latin translation, the role of figures like Manuel Chrysoloras, and the manuscript traditions. **Verify everything it says** -- check names, dates, and claims against your own knowledge and trusted references like the Oxford History of Classical Reception.

**Conversation 2 -- Structure:** "Based on our previous discussion and the sources I've uploaded, suggest a structure for a 10,000-word article. I want to argue that Florentine engagement with Herodotus was shaped more by political analogy than by historical method."

**Conversation 3 -- Drafting:** "Draft the introduction (800 words). Open with the specific moment when [your chosen anecdote]. Establish the historiographical gap. State the thesis clearly in the final paragraph."

**Conversation 4 -- Critique:** Upload your own draft of a later section. "Read this and identify: (a) where my argument is weakest, (b) where I need more evidence, (c) any anachronistic framing."

### What to watch for

- Claude may confidently describe manuscripts or translations that do not exist in the form it claims. Always cross-check.
- It may smooth over genuine scholarly disagreements. Ask explicitly: "Is this contested?"
- Claude's drafts will be competent but may lack your distinctive scholarly voice. Use them as starting points, not final text.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

**Further reading:** [Creating and managing Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) -- [Personalisation features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

---

## Processing a text corpus with Code

**Scenario:** You have 300 OCR-scanned letters (plain text files) from a 19th-century colonial archive. The OCR quality is variable. You want to clean them, extract structured metadata (date, sender, recipient, location), and produce a searchable CSV catalogue.

### Setting up

1. Put all 300 text files in a directory: `corpus/raw/`
2. Create a `CLAUDE.md`:

    ```
    # Project: Colonial Correspondence Corpus

    ## Context
    300 OCR-scanned letters from the National Archives, 1850-1890.
    Variable OCR quality. Goal: clean text, extract metadata, produce
    a searchable catalogue.

    ## Conventions
    - Output cleaned text to corpus/clean/
    - Output metadata to corpus/metadata.csv
    - CSV columns: filename, date, sender, recipient, location,
      subject_summary, word_count, ocr_quality_score
    - Dates in ISO 8601 format (YYYY-MM-DD)
    - Use British English in all generated text
    - Preserve original spelling in letter text

    ## Important
    - Never modify files in corpus/raw/ -- these are the originals
    - Flag any letters where OCR quality makes metadata extraction
      unreliable (ocr_quality_score < 3 on a 1-5 scale)
    ```

3. Initialise git: `git init && git add -A && git commit -m "initial corpus"`

### Working pattern

**Step 1 -- Sample:** "Read 5 representative files from corpus/raw/ and assess the OCR quality. Show me examples of common OCR errors you find."

Claude will identify patterns: misread characters ('rn' &rarr; 'm', 'cl' &rarr; 'd'), broken line breaks, headers misread as body text. Review these -- your knowledge of the handwriting and conventions will help you judge whether Claude's corrections are right.

**Step 2 -- Build the pipeline:** "Write a Python script that cleans OCR text based on the patterns we identified. Process one file first so I can check the output."

Claude writes the script, runs it on one file, shows you the before and after. You review, suggest adjustments. Commit when satisfied.

**Step 3 -- Extract metadata:** "Now add metadata extraction. Parse the date, sender, and recipient from the letter headers. Show me the results for the first 10 files before processing the whole corpus."

Claude adds metadata extraction to the script, runs it on a sample. You check: Are the dates parsed correctly? Are sender/recipient names right? Commit.

**Step 4 -- Batch process:** "Process all 300 files. Generate the metadata CSV. Flag any files where extraction was uncertain."

Claude processes the full corpus, generates the CSV, and reports which files had problems. You review the flagged files manually.

### What to watch for

- Spot-check results across the corpus, not just the first few files. OCR errors vary.
- Claude may "correct" OCR errors that are actually correct readings of unusual spellings or obsolete terms. Your domain knowledge is essential.
- Commit after each milestone so you can revert if a batch operation goes wrong.
- The `CLAUDE.md` instruction "Never modify files in corpus/raw/" is advisory -- Claude *should* follow it but it is not enforced. For stronger protection, use a [hook](code.md#hooks) to block writes to your source directory.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

**Further reading:** [Claude Code documentation](https://code.claude.com/docs/en/overview) -- [Common workflows](https://code.claude.com/docs/en/common-workflows)

---

## Building a web-based tool with Code

**Scenario:** You teach a module on Roman provincial epigraphy and want to create an interactive tool where students can search, filter, and explore a set of 200 inscriptions. The data exists in a spreadsheet.

### Setting up

1. Export your spreadsheet as `inscriptions.csv`
2. Create a project directory with a `CLAUDE.md`:

    ```
    # Project: Epigraphy Teaching Tool

    ## Context
    Interactive web tool for teaching Roman provincial epigraphy.
    200 inscriptions from North Africa (IRT and ILAlg corpora).
    Source data in inscriptions.csv.

    ## Requirements
    - Static HTML/CSS/JS -- no server, no framework, no build step
    - Must work offline (students may have limited connectivity)
    - Accessible design (WCAG 2.1 AA)
    - Mobile-responsive
    - No external dependencies (no CDN links)

    ## Conventions
    - British English throughout
    - Cite inscriptions by corpus abbreviation and number
    - Use Unicode for Greek and Latin text with diacritics
    ```

### Working pattern

**Step 1 -- Minimal version:** "Create a single HTML page that loads inscriptions.csv and displays them in a table. Just the basic structure -- no styling yet."

Claude creates the HTML, embeds the CSV data as JSON (so it works offline), and builds a basic table. Open it in your browser, check that the data displays correctly. Commit.

**Step 2 -- Search and filter:** "Add a search box that filters inscriptions by any column. Add dropdown filters for date range and findspot."

Claude adds JavaScript for filtering. Test in browser. Commit.

**Step 3 -- Design:** "Style the page for readability. Use a clean, academic design. Make the Latin text display in a serif font. Ensure it works well on mobile."

Claude adds CSS. Test on different screen sizes (your browser's developer tools can simulate mobile). Commit.

**Step 4 -- Detail view:** "When a student clicks an inscription, show a detail panel with the full text, translation, commentary, and an image placeholder. Include a link to the EDH/EDCS entry if available."

Claude adds the detail view. Test with several inscriptions. Commit.

**Step 5 -- Deploy:** Push to a GitHub repository and enable GitHub Pages, or deploy via Netlify, institutional hosting, or even just email the HTML file -- since it is a self-contained static page, any delivery method works. No server costs, no maintenance.

### What to watch for

- Test with real data early. Synthetic test data may not surface encoding issues, unusual characters, or edge cases in your actual inscriptions.
- Check accessibility: can you navigate with keyboard only? Does the colour contrast meet WCAG standards? Claude can run accessibility checks for you.
- The finished tool is plain HTML/CSS/JS -- no AI dependency. Students interact with a conventional web page. You can maintain it without Claude if needed.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

**Further reading:** [Claude Code documentation](https://code.claude.com/docs/en/overview)

---

## Document preparation pipeline

**Scenario:** You are preparing a book manuscript. The publisher requires camera-ready copy in a specific LaTeX template. Your draft is in Word. You have 50 figures, a bibliography in Zotero, and an index to compile.

!!! leifnote "Leif's Notes"
    **Note:** LaTeX is a specialist tool used by a subset of humanities scholars, principally those whose publishers require it or whose work involves complex formatting, critical apparatus, or mathematical notation. If you use Word or Google Docs for your publications, this workflow may not apply to you -- but the principle of using Claude to automate tedious document preparation tasks transfers to any format.

### Working pattern

**Step 1 -- Convert:** "Convert manuscript.docx to LaTeX using pandoc. Use the publisher's template (template.tex). Preserve all footnotes and cross-references."

Claude runs pandoc with the right options, then fixes the inevitable conversion artefacts -- broken footnotes, mangled special characters, formatting that did not survive the conversion.

**Step 2 -- Bibliography:** "Export my Zotero collection to BibTeX. Integrate it with the LaTeX document. Use author-date citation style (Chicago 17th)."

You export the BibTeX file from Zotero manually (Claude cannot access Zotero directly unless you set up an MCP server). Claude integrates it with the LaTeX document and configures biblatex.

**Step 3 -- Figures:** "Process all figures in figures/ to meet the publisher's requirements: 300 DPI minimum, TIFF format, maximum 15 cm wide. Insert them at the correct points in the LaTeX document."

Claude uses ImageMagick to batch-convert and resize the figures, then inserts `\includegraphics` commands at the right places.

**Step 4 -- Index:** "Generate an index. The key terms are: [your list]. Also index all personal names and place names mentioned in the text."

Claude adds `\index{}` commands throughout the document. You review the index entries -- automated indexing always needs human review for nuance and consistency.

**Step 5 -- Compile and review:** Claude compiles the LaTeX document, identifies and fixes compilation errors, and produces the final PDF. You review the PDF against the publisher's checklist.

### What to watch for

- LaTeX conversion from Word is never perfect. Budget time for manual fixes, especially for complex formatting, tables, and mathematical notation.
- Check the bibliography carefully -- BibTeX export from Zotero can have encoding issues, especially with non-Latin characters.
- The index will need manual curation. Claude can generate a first pass, but scholarly indexing requires judgement about what to include, what to cross-reference, and how to handle variant names.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

---

## Data cleaning and transformation

**Scenario:** You are combining data from three different sources for a prosopographical database: a published catalogue (PDF), an institutional database (CSV export), and your own fieldwork notes (spreadsheet). The three sources use different date formats, different name conventions, and different classification schemes.

### Working pattern

**Step 1 -- Assess:** "Read samples from each of these three data files. Describe the format, structure, and conventions used in each. Identify the inconsistencies I'll need to resolve to merge them."

Claude analyses the three sources and produces a report: Source A uses "3rd century CE", Source B uses "201--300 AD", Source C uses "III sec. d.C." for the same date range. Names are "Marcus Aurelius" in A, "AVRELIVS, M." in B, and "M. Aurelius" in C. And so on.

**Step 2 -- Define the target schema:** Working with Claude in Chat (or in the same Code session), decide on a unified schema: what columns, what format for dates, what conventions for names, what classification categories.

**Step 3 -- Build transformers:** "Write a Python script that transforms each source file into the target schema. Process one source at a time. Show me the first 10 rows of each transformation before proceeding."

Claude writes transformation scripts for each source. You review the sample outputs: Are the date conversions correct? Are the name normalisation rules working? Are there edge cases the script mishandles?

**Step 4 -- Merge and deduplicate:** "Merge the three transformed files. Identify potential duplicates -- records that likely refer to the same person across sources. Show me the candidate duplicates for manual review."

Claude merges the data and flags potential duplicates based on name similarity, date range overlap, and location. You review the candidates and make the final decisions -- prosopographical identification requires domain expertise that Claude cannot provide.

**Step 5 -- Validate and export:** "Validate the merged dataset: check for missing required fields, impossible date ranges, duplicate IDs. Export as both CSV and a SQLite database."

### What to watch for

- Data merging is where domain expertise matters most. Claude can identify *possible* matches, but confirming whether two records refer to the same historical person requires scholarly judgement.
- Be explicit about your normalisation rules. "Standardise the dates" is ambiguous; "Convert all dates to ISO 8601, using the first year of the range for approximate dates, and flag any date that cannot be parsed" is actionable.
- Keep the transformation scripts in version control. They are your documentation of exactly how the data was processed -- essential for reproducibility and for explaining your methodology in publications.
- Be aware that Claude's normalisation choices encode assumptions. If Claude standardises "3rd century CE", "III sec. d.C.", and "201--300 AD" to the same format, it has made a scholarly decision about periodisation. Make sure that decision is yours, not Claude's.
- Always preserve the original data files untouched. Work on copies. If a transformation goes wrong, you need to be able to start again from the originals.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

**Further reading:** [Claude Code common workflows](https://code.claude.com/docs/en/common-workflows)

---

## Interview and transcript analysis

**Scenario:** You have 25 oral history interview transcripts (Word documents) from a project on post-war migration. You want to identify recurring themes, code passages by topic, and produce a structured comparison across interviews.

### Working pattern

**Step 1 -- Project setup:** Create a Chat Project called "Migration Oral Histories." Upload the transcripts to the knowledge base. Write custom instructions specifying your research questions, the coding framework you want to use, and any ethical constraints (e.g., "do not attempt to identify participants from contextual details").

**Step 2 -- Initial coding:** "Read interviews 1--5. Identify the main themes that emerge, using my coding framework [your framework] as a starting point. Note any themes that appear in the data but aren't in my framework."

Claude produces a thematic analysis. Review it: Has it captured your categories accurately? Has it identified genuine emergent themes or just generated plausible-sounding ones? Your familiarity with the interviews is essential here.

**Step 3 -- Systematic coding:** "For each interview, identify every passage that relates to [theme]. Quote the relevant passage and note the participant and approximate location in the transcript."

Claude produces a structured index. Spot-check: Did it miss relevant passages? Did it include passages that don't actually fit? Refine the coding instructions based on what you find.

**Step 4 -- Cross-interview comparison:** "Compare how participants discuss [theme]. Are there patterns by generation, gender, or country of origin? Where do accounts converge and diverge?"

**Step 5 -- Export:** "Produce a summary table of themes by participant, with key quotes for each." Download the output for use in your analysis or publication.

### What to watch for

- Claude may impose coherence on accounts that are actually fragmented, contradictory, or ambiguous. Oral history values those qualities -- do not let AI analysis smooth them away.
- Be cautious about Claude's interpretations of tone, emotion, or subtext. It reads words, not voices. Your notes from the original interviews are irreplaceable context.
- If transcripts contain sensitive personal information, review your institution's data governance policy before uploading. Consider whether anonymised excerpts would serve your purpose. For data governance principles that apply across all platforms, see [Data Governance](../essentials/data-governance.md).

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"

---

## Bibliographic and administrative cleanup

**Scenario:** You have a messy bibliography accumulated over years of research -- some entries in Chicago style, some in Harvard, some incomplete, some duplicated. You need a clean, consistently formatted bibliography for a book manuscript, plus a reading list for a new module you are teaching.

### Working pattern

**Step 1 -- Assessment:** Upload your bibliography file (BibTeX, Word, or plain text) to Chat. "Analyse this bibliography. How many entries are there? What citation styles are used? Identify any duplicates, incomplete entries, or formatting inconsistencies."

Claude produces a report. Review its assessment -- it will likely find more problems than you expected.

**Step 2 -- Standardise:** "Convert all entries to Chicago 17th edition author-date format. Flag any entries where information is missing (no date, no publisher, no page range). Do not fabricate missing information -- mark it as [missing]."

Claude reformats the bibliography. **Critical:** check a sample of entries against the original sources or your reference manager. Claude may "correct" titles, author names, or dates incorrectly.

**Step 3 -- Deduplicate:** "Identify entries that appear to be duplicates (same work cited in different formats or with slight variations). Show me the pairs for manual review."

You decide which duplicates to merge -- Claude can identify candidates but may not distinguish between, say, a first edition and a revised edition that should both appear.

**Step 4 -- Extract a reading list:** "From this bibliography, select the 30 most relevant items for an undergraduate module on [topic]. Organise them by week, with a one-sentence annotation for each explaining why it is on the list."

Review the selections and annotations. Claude's choices will reflect its training data, not necessarily your pedagogical priorities. Treat its list as a starting point to edit, not a finished syllabus.

### What to watch for

- Never trust Claude's "corrections" to bibliographic entries without checking. It may silently change an author's initials, normalise a title, or assign a wrong date.
- For the reading list, Claude may over-represent well-known Anglophone scholarship. Ensure your list reflects the breadth your module requires.
- If you use Zotero or another reference manager, the cleanest workflow is: clean up with Claude, then import the corrected entries back into your reference manager. Do not abandon your reference manager -- it remains the authoritative record.

!!! caution "Caution"
    **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail -- essential if a reviewer asks "how was this data cleaned?" or "how was this index compiled?"
