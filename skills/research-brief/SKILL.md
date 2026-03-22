---
name: research-brief
description: Produce a structured legal research memo on any legal issue. Identifies the legal question, applicable law framework, research roadmap, arguments for both sides, and IRAC outline — without hallucinating citations. Trigger when user says: legal research, case research, research memo, find case law, legal brief, research issue.
triggers:
  - legal research
  - case research
  - research memo
  - find case law
  - legal brief
  - research issue
---

# Research Brief

Generate a structured legal research memo: issue framing, applicable law framework, Westlaw/Lexis search roadmap, arguments matrix, and IRAC outline ready to fill in with verified citations.

## How to invoke

```
/research-brief

Issue: [describe the legal question]
Jurisdiction: [federal / state — which state]
Client position: [plaintiff / defendant / respondent / regulatory]
Area of law: [employment / contract / tort / criminal / family / etc.]
Urgency: [routine / urgent — any filing deadlines?]
```

## Workflow

### Step 1 — Issue clarification

If not provided, ask:
1. What is the specific legal question? (not "is my client liable" but "does X conduct constitute Y under Z statute")
2. Which jurisdiction governs? Federal? Which circuit? Which state?
3. What is the client's position?
4. Are there any pending deadlines or statutes of limitations concerns?

### Step 2 — Issue framing

Restate the precise legal question in research-memo format:

> **Legal Question**: Whether [specific conduct] constitutes [legal standard] under [applicable law] in [jurisdiction], where [key facts].

Identify sub-issues if the main question has multiple components.

### Step 3 — Applicable law framework

Map the legal landscape:

**Federal law**
- Relevant statutes (cite by name and USC section range — do not fabricate specific subsections)
- Relevant federal agencies with jurisdiction
- Circuit split status if applicable

**State law**
- State statutes (cite by name and code — do not fabricate specific section numbers)
- State administrative regulations
- Common law doctrines

**Key doctrines to research**
- List the controlling legal doctrines by name (e.g., McDonnell Douglas burden-shifting, but-for causation, economic loss rule)
- Note which doctrines favor client's position vs. opposing party

### Step 4 — Research roadmap

**Westlaw / LexisNexis search terms**

Provide 5–8 specific Boolean/natural-language search strings:
- `"[key term]" AND "[element]" /p [jurisdiction]`
- Include both narrow and broad variants
- Note which database (Westlaw vs. Lexis) is better for this area

**Key cases to find (by doctrine, not fabricated citations)**
- Cases establishing the controlling standard in this jurisdiction
- Cases distinguishing the standard on facts similar to client's
- Recent cases (last 3–5 years) showing trend

**Secondary sources**
- Restatements (identify which Restatement and section range to check)
- Treatises (name the leading treatise for this area of law)
- Law review search terms for this doctrine
- Practitioner guides (e.g., ABA, state bar practice guides)

### Step 5 — Arguments matrix

| | For Client | Against Client |
|---|---|---|
| **Strongest argument** | | |
| **Key facts supporting** | | |
| **Key cases supporting** (by doctrine) | | |
| **Weaknesses to address** | | |
| **Likely opposing arguments** | | |

### Step 6 — IRAC memo outline

Ready-to-fill structure:

---
**MEMORANDUM**

**To**: [Attorney]
**From**: [Researcher]
**Date**: [Date]
**Re**: [Matter / Issue]

**ISSUE**
[Insert refined legal question from Step 2]

**SHORT ANSWER**
[Insert after completing research — likely [favorable/unfavorable] because...]

**RULE**
[Insert controlling statute text]
[Insert elements of the test from case law]
[Insert burden of proof]

**APPLICATION**
*Element 1 — [Name]*: Client's facts [support/undermine] this element because...
*Element 2 — [Name]*: ...
*Counterargument*: Opposing party will argue... Client responds...

**CONCLUSION**
[Insert after completing research]

**AUTHORITIES TO VERIFY**
[List all cases/statutes found during research — verify citations before filing]

---

## Example output (Employment discrimination — Nevada — Title VII)

**Legal Question**: Whether termination of a 52-year-old employee two weeks after she complained to HR about a supervisor's comments constitutes retaliation under Title VII, 42 U.S.C. § 2000e et seq., and NRS Chapter 613.

**Applicable law**: Title VII (federal), Nevada Fair Employment Practices Act (NRS 613.310–613.435), EEOC regulations.

**Key doctrine**: McDonnell Douglas burden-shifting framework; "but-for" causation standard (Univ. of Texas Sw. Med. Ctr. v. Nassar — research this case); temporal proximity as circumstantial evidence.

**Research roadmap**: Search Westlaw for `"Title VII" AND "retaliation" AND "temporal proximity" /p Nevada` + `"McDonnell Douglas" AND "retaliation" AND "two weeks"`.

---

> **Important**: Never rely on citations in this memo without verifying them in Westlaw, LexisNexis, or Google Scholar. AI models can hallucinate case names and citations. All citations must be verified by the researching attorney before use.
