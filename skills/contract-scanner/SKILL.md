---
name: contract-scanner
description: Extract key terms, obligations, risks, and red flags from any contract. Produces a structured summary with risk rating, plain-English client explanation, and negotiation points. Trigger when user says: review contract, scan contract, contract analysis, contract risks, read contract, analyze agreement.
triggers:
  - review contract
  - scan contract
  - contract analysis
  - contract risks
  - read contract
  - analyze agreement
---

# Contract Scanner

Analyze any contract or agreement and produce a structured risk summary, obligations matrix, plain-English client summary, and negotiation recommendations.

## How to invoke

User pastes contract text (or a section) and states their role:

```
/contract-scanner

[paste contract text here]

My role: employee (or buyer / seller / tenant / landlord / employer)
```

## Workflow

### Step 1 — Confirm role and scope

Ask if not provided:
- What is the user's role in this contract? (buyer/seller/employee/employer/tenant/landlord/other)
- Is this the full contract or a specific section?

### Step 2 — Key terms extraction

Pull and present in a table:

| Field | Value |
|---|---|
| Parties | Party A / Party B |
| Effective Date | |
| Term / Duration | |
| Governing Law | |
| Jurisdiction | |
| Payment Terms | |
| Deliverables | |
| Termination Notice | |

### Step 3 — Obligations matrix

Two-column table: what EACH party must do, and by when.

| Party | Obligation | Deadline / Trigger |
|---|---|---|
| [Party A] | | |
| [Party B] | | |

### Step 4 — Risk flags

Categorize each flag by severity:

**🔴 HIGH RISK**
- Auto-renewal clauses (silent rollover, notice window too short)
- Indemnification scope (broad, unlimited, covers third-party claims)
- IP assignment (assigns all work product, no carve-out for pre-existing IP)
- Non-compete (overly broad geography/industry/duration)
- Unlimited liability exposure

**🟡 MEDIUM RISK**
- Liquidated damages clauses
- One-sided termination triggers
- Mandatory arbitration with venue disadvantageous to client
- Unilateral amendment rights

**🟢 LOW RISK / NOTABLE**
- Standard boilerplate variations
- Minor definition gaps
- Unusual but not harmful provisions

For each flag: quote the relevant clause, explain why it matters for client's role.

### Step 5 — Plain-English summary (for client)

Write a ~200-word explanation in plain language:
- What is this contract actually asking the client to agree to?
- What are the most important things they should know before signing?
- What could go wrong if they sign as-is?

### Step 6 — Negotiation suggestions

List 3–5 specific clauses to push back on. For each:
1. Quote the problematic language
2. Explain why it's problematic
3. Suggest alternative language

Example format:
> **Clause 8.2 — IP Assignment**
> Current: "Employee assigns all inventions conceived during employment..."
> Problem: No carve-out for pre-existing IP or after-hours personal projects.
> Suggested: "...excluding inventions unrelated to Company's business that are developed entirely on Employee's own time without Company resources."

## Example output (NDA — employee role)

**Key Terms**: 2-year term, California law, covers all confidential information disclosed during employment.

**Red Flags**:
1. 🔴 IP assignment clause covers inventions "related to any field the Company is or may be interested in" — far too broad
2. 🔴 Non-compete extends to "any competing business globally" for 18 months — likely unenforceable in CA but worth removing
3. 🟡 No carve-out for information already known to employee before signing

**Plain English**: You're agreeing to keep company secrets confidential for 2 years and hand over ownership of anything you invent while employed...

**Top negotiation point**: Strike or narrow the IP assignment clause to require nexus to your actual job duties.

---

> **Disclaimer**: This analysis is a drafting and review aid only — not legal advice. All contracts should be reviewed by a licensed attorney before signing.
