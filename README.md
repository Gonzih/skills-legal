# skills-legal

Claude Code skill suite for lawyers and legal professionals. Four AI-powered skills that integrate directly into your Claude Code workflow.

## Install

```bash
npm install -g @gonzih/skills-legal
```

Skills are automatically installed to `~/.claude/skills/`. Restart Claude Code to activate.

## Skills

### `/contract-scanner`
**Triggers**: review contract, scan contract, contract analysis, contract risks, read contract, analyze agreement

Paste any contract text and state your role (buyer/seller/employee/employer/tenant/landlord). Produces:
- Key terms table (parties, dates, governing law, payment terms)
- Obligations matrix — what each party must do and by when
- Risk flags categorized as high/medium/low with clause quotes
- 200-word plain-English summary for clients
- 3–5 negotiation suggestions with alternative language

### `/research-brief`
**Triggers**: legal research, case research, research memo, find case law, legal brief, research issue

Describe the legal issue, jurisdiction, and client position. Produces:
- Precise legal question framing
- Applicable law framework (federal + state statutes, doctrines)
- Westlaw/LexisNexis search roadmap with Boolean search strings
- Arguments matrix — strongest points for and against client
- IRAC memo outline ready to fill in with verified citations

> Never fabricates case citations. All citations must be verified before use.

### `/client-intake`
**Triggers**: client intake, new client, intake form, matter summary, new matter, onboard client

Walk through a structured intake interview (or provide facts upfront). Produces:
- 1-page matter summary memo (Facts / Issues / Parties / Jurisdiction / Deadlines)
- Statute of limitations flag with deadline and time remaining
- Conflicts check party list
- Preliminary legal issues spotted
- Engagement letter outline with fee structure suggestions

### `/settlement-summary`
**Triggers**: settlement summary, settlement memo, case settlement, settlement analysis, mediation prep, settlement recommendation

Provide damages figures and liability assessment. Produces:
- Full damages inventory (economic + non-economic)
- Settlement range with three scenarios and math shown
- Trial risk/reward analysis
- Attorney recommendation memo
- Plain-English client presentation explaining the numbers

## Disclaimer

All skills are drafting and practice management aids only — not legal advice. Attorney review is required before relying on any output for client matters.

## License

MIT
