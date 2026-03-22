---
name: client-intake
description: Guide a structured client intake conversation and produce a professional matter summary memo — facts, legal issues spotted, jurisdiction, conflicts check info, statute of limitations flags, and engagement letter outline. Trigger when user says: client intake, new client, intake form, matter summary, new matter, onboard client.
triggers:
  - client intake
  - new client
  - intake form
  - matter summary
  - new matter
  - onboard client
---

# Client Intake

Conduct a structured intake interview and produce a 1-page matter summary memo plus engagement letter outline. Works for any practice area.

## How to invoke

```
/client-intake
```

Then answer the questions as they come, or provide all information upfront:

```
/client-intake

Practice area: personal injury
Facts: [brief description]
Client name: [name]
Date of incident: [date]
Opposing party: [name]
Jurisdiction: [state]
```

## Workflow

### Step 1 — Identify practice area

Ask (or confirm if provided):

- Personal injury
- Contract dispute
- Family law (divorce / custody / support)
- Criminal defense
- Real estate
- Employment (discrimination / wage & hour / wrongful termination)
- Immigration
- Business formation / transactional
- Estate planning / probate
- Other (describe)

Practice area determines which facts to gather and which SOL to flag.

### Step 2 — Core facts interview

Gather systematically — adjust questions by practice area:

**Universal questions**
- Client's full legal name and contact information
- Opposing party name(s) and relationship to client
- Brief description of what happened
- Key dates: when did the problem arise? When did client first learn of it?
- Prior legal action on this matter? (prior attorneys, filings, judgments)
- Documents client has in hand (contracts, photos, medical records, police reports, correspondence)

**Practice-area specific additions**
- *Personal injury*: Date/location of incident, treating physicians, insurance carriers on both sides, employer (if lost wages claimed)
- *Employment*: Employer name, EEOC charge filed?, last day of employment, pay rate
- *Family law*: Marriage date, separation date, children (names/ages), assets and debts overview
- *Contract*: Contract date, contract amount, breach date, damages to date
- *Criminal*: Charges, arrest date, court date, jurisdiction (state/federal), bail status

### Step 3 — Legal issues spotted (preliminary)

List potential causes of action or defenses without committing to a legal opinion. Frame as "issues to investigate":

- Primary claim/defense
- Secondary claims (if facts support)
- Affirmative defenses opposing party may raise
- Potential counterclaims

Note: these are preliminary observations for attorney review, not legal conclusions.

### Step 4 — Urgency and deadlines

**Statute of limitations check** (flag prominently):

| Jurisdiction | Practice Area | SOL | Date of Accrual | Deadline | Time Remaining |
|---|---|---|---|---|---|
| | | | | | |

Common SOL flags:
- Personal injury: 2 years in most states (Nevada: 2 years, NRS 11.190)
- Contract: 4–6 years depending on state and contract type
- Employment (Title VII): 180/300 days to file EEOC charge
- Medical malpractice: often shorter (1–3 years) with discovery rule nuances

Also flag:
- Pending court dates
- Regulatory filing deadlines
- Contractual notice requirements

### Step 5 — Conflicts check info

Produce a conflicts check list:

**Run conflicts check against:**
- Client full name + any aliases/former names
- All opposing parties (individuals and entities)
- Related entities (employers, insurers, subsidiaries)
- Opposing counsel (if known)
- Any third parties with significant interest

### Step 6 — Matter summary memo

---
**MATTER SUMMARY**
**Date**: [today]
**Prepared by**: [attorney/staff]
**Matter type**: [practice area]

**CLIENT**
Name: | Phone: | Email:
Address:

**FACTS**
[2–3 paragraph factual summary in chronological order]

**PARTIES**
Plaintiff/Client: [name]
Defendant/Opposing: [name, relationship]
Third parties: [if any]

**JURISDICTION**
Court/Venue: | Governing Law:

**PRELIMINARY LEGAL ISSUES**
1. [Primary issue]
2. [Secondary issue]
3. [Potential defenses]

**CRITICAL DEADLINES**
- Statute of limitations: [date] — [X months/days remaining] ⚠️
- [Other deadlines]

**DOCUMENTS IN HAND**
- [List]

**DOCUMENTS NEEDED**
- [List]

**CONFLICTS CHECK**
Parties to check: [list]
Status: [ ] Cleared  [ ] Conflict found  [ ] Pending

**PRELIMINARY ASSESSMENT**
[2–3 sentences: strength of case, key risks, recommended next steps]

**RECOMMENDED NEXT STEPS**
1. Complete conflicts check
2. [Investigation steps]
3. [Filing / demand / negotiation]
4. Schedule follow-up with client

---

### Step 7 — Engagement letter outline

Suggest fee structure based on matter type and complexity:

**Fee options to discuss with client:**
- Contingency (personal injury, employment): [suggested %] — standard range and local norms
- Hourly: [suggested range] — based on matter complexity
- Flat fee: [suggested range] — if matter is routine/bounded
- Retainer + hourly: [suggested retainer] — for ongoing matters

**Engagement letter must include:**
- Scope of representation (what is and is NOT included)
- Fee structure and billing frequency
- Client responsibilities (document production, communication)
- File retention policy
- Termination provisions

## Example output (Personal injury — slip and fall — Nevada)

**SOL FLAG**: Nevada 2-year SOL (NRS 11.190(4)(e)). Incident date: July 15, 2025. Deadline: **July 15, 2027** — 16 months remaining.

**Conflicts check**: Run against [Client Name], [Property Owner LLC], [Property Management Co.], [Insurance Carrier if known].

**Preliminary issues**: (1) Premises liability — negligence of property owner; (2) Comparative fault if client had notice of hazard; (3) Dram shop if alcohol involved.

**Fee suggestion**: Contingency at 33⅓% pre-suit / 40% post-suit, standard Nevada personal injury.

---

> **Disclaimer**: This intake summary is a practice management tool. All legal conclusions, SOL calculations, and case assessments require attorney review before reliance.
