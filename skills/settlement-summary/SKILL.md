---
name: settlement-summary
description: Produce a structured settlement analysis memo — damages calculation, liability assessment, settlement range with math shown, risk/reward analysis, and a plain-English client presentation. Trigger when user says: settlement summary, settlement memo, case settlement, settlement analysis, mediation prep, settlement recommendation.
triggers:
  - settlement summary
  - settlement memo
  - case settlement
  - settlement analysis
  - mediation prep
  - settlement recommendation
---

# Settlement Summary

Generate a complete settlement analysis: damages inventory, liability assessment, settlement range (with math), trial risk/reward analysis, attorney recommendation memo, and plain-English client explanation.

## How to invoke

```
/settlement-summary

Case type: personal injury / contract / employment / other
Jurisdiction: [state]
Stage: pre-suit / post-suit / pre-trial / at mediation
Parties: [plaintiff] vs. [defendant]

Economic damages:
- Medical bills (past): $
- Medical bills (future estimated): $
- Lost wages (past): $
- Lost wages (future): $
- Property damage: $
- Other economic: $

Non-economic damages: [describe injuries, duration, impact on life]

Liability: strong / moderate / weak — [brief explanation]
Comparative fault: [% if any]

Other factors: [prior offers, policy limits, defendant's ability to pay, venue tendencies]
```

## Workflow

### Step 1 — Case overview

Confirm:
- Type of case and applicable damages framework
- Jurisdiction (affects damage caps, comparative fault rules, venue tendencies)
- Stage of litigation (affects cost/risk calculus)
- Current settlement offers on the table, if any
- Insurance policy limits (if known)

### Step 2 — Damages inventory

**Economic damages** (actual numbers where available, estimates where not):

| Category | Past | Future (estimated) | Total |
|---|---|---|---|
| Medical / Treatment | $ | $ | $ |
| Lost wages / Income | $ | $ | $ |
| Loss of earning capacity | $ | $ | $ |
| Property damage | $ | $ | $ |
| Out-of-pocket expenses | $ | $ | $ |
| Other: | $ | $ | $ |
| **Economic subtotal** | | | **$** |

**Non-economic damages** (pain and suffering, emotional distress, loss of consortium, loss of enjoyment of life):
- Describe the injury, duration, and functional impact
- Note jurisdiction's cap on non-economic damages if applicable (e.g., Nevada: no cap for most PI, but note medical malpractice caps NRS 41A.035)
- Estimated multiplier range: ___ × economic damages (typically 1.5x–5x depending on severity)

**Gross damages total**: $___

### Step 3 — Liability assessment

Rate liability strength and explain:

| Factor | Assessment |
|---|---|
| Liability strength | Strong / Moderate / Weak |
| Key liability evidence | |
| Weaknesses / defenses | |
| Comparative fault (plaintiff) | ___ % |
| Comparative fault (defendant) | ___ % |
| Nevada rule note | Pure comparative fault (NRS 41.141) — damages reduced by plaintiff's % fault |

**Liability-adjusted damages** = Gross damages × (1 − plaintiff's comparative fault %)

### Step 4 — Settlement range calculation

Show the math for three scenarios:

**Low scenario** (defense-favorable — weak liability, high comparative fault, conservative jury)
- Liability probability: ___%
- Economic damages: $___
- Non-economic (low multiplier): $___
- Less comparative fault (___%): ($__)
- **Low scenario value**: $___

**Midpoint scenario** (most likely outcome)
- Liability probability: ___%
- Economic damages: $___
- Non-economic (mid multiplier): $___
- Less comparative fault (___%): ($__)
- **Midpoint value**: $___

**High scenario** (plaintiff-favorable — clear liability, sympathetic facts, plaintiff-friendly venue)
- Liability probability: ___%
- Economic damages: $___
- Non-economic (high multiplier): $___
- Less comparative fault (___%): ($__)
- **High scenario value**: $___

**Settlement recommendation range**: $[Low] – $[High], targeting $[Midpoint]

Note: Discount high scenario by trial risk (typically 20–40% for cost, risk, and uncertainty).

### Step 5 — Risk/reward analysis

**Cost of going to trial:**
- Attorney fees (if contingency: additional % over settlement vs. trial)
- Estimated trial costs (experts, depositions, court costs): $___
- Time to trial: ___ months/years
- Client's personal cost (stress, time off work, depositions)

**Risks of going to trial:**
- Jury verdict risk (defense verdict % based on venue/facts)
- Damages risk (jury could award less than settlement offer)
- Appeal risk
- Collectability risk (can defendant actually pay a judgment?)

**Benefits of settling:**
- Certainty of outcome
- Speed of recovery
- Avoidance of trial costs
- Avoidance of public record / privacy

**Benefits of going to trial:**
- Potential for higher recovery
- Principle / deterrence value to client
- Discovery leverage

### Step 6 — Recommendation memo

---
**SETTLEMENT ANALYSIS MEMORANDUM**
**Date**: [today]
**Matter**: [case name]
**Attorney**: [name]
**Confidential — Attorney-Client Privileged**

**RECOMMENDATION**: [Settle / Continue litigation / Counter at $___]

**SETTLEMENT RANGE**: $[low] – $[high]
**TARGET**: $[midpoint]
**CURRENT OFFER** (if any): $___

**REASONING**:
[3–5 sentences: why this range, why this recommendation, key risk factors driving the recommendation]

**CONDITIONS ON RECOMMENDATION**:
- Assumes liability finding of ___% probability
- Assumes non-economic multiplier of ___×
- Does not account for [unknown factor]
- Recommend re-evaluating if [key event, e.g., expert report, dispositive motion ruling]

---

### Step 7 — Client presentation (plain English)

Write a plain-language explanation the attorney can share directly with the client:

**What the numbers mean:**
- Your documented economic losses (medical bills, lost wages) total $___
- On top of that, you're entitled to compensation for your pain and suffering — we estimate that's worth $__ to $__ given your injuries
- Your total case value before any adjustments is roughly $___

**Why we can't just ask for the maximum:**
- Liability: [plain-language explanation of any fault/risk issues]
- Trial risk: Even strong cases lose sometimes. If a jury sides with the defense, you get nothing.
- Costs: A trial would cost approximately $__ and take __ more months/years

**Our recommendation:**
[Plain-English version of the recommendation — what we think you should do and why, in 3–5 sentences a non-lawyer can understand]

**What happens if we reject and go to trial:**
- Best case: $___
- Most likely: $___
- Worst case: $0 (defense verdict) + you owe trial costs

**This is your decision.** We are here to advise you — the final choice is yours.

## Example output (Personal injury — Nevada — $45K medical bills)

**Damages**: Medical $45,000 + estimated future treatment $15,000 + lost wages $12,000 = $72,000 economic. Non-economic at 2×–3×: $144,000–$216,000. **Gross total**: $216,000–$288,000.

**Liability**: Strong (defendant ran red light, police report confirms). No comparative fault.

**Settlement range**:
- Low: $80,000 (conservative jury, soft tissue emphasis)
- Midpoint: $140,000
- High: $200,000+ (sympathetic injuries, plaintiff-friendly Clark County venue)

**Recommendation**: Accept any offer above $120,000; counter at $165,000 if current offer is below $100,000. Strong case for plaintiff — recommend mediation before trial to avoid $25K+ in trial costs.

**Client plain English**: "Your medical bills and lost wages alone are $57,000. Juries in Nevada typically award 2–3 times that for pain and suffering in cases like yours. We think a fair settlement is between $120,000 and $165,000. Going to trial could get you more, but it could also get you less — and it will take another year and cost you more in expenses..."

## Live Data Sources

Use these sources to find comparable verdicts and settlements when calibrating the settlement range:

- **CourtListener docket search** (`courtlistener.com/api/rest/v3/dockets/`) — search for dockets by court, case type, and keyword to identify comparable cases that proceeded to verdict; filter by `date_filed` range to find recent outcomes in the same jurisdiction
- Example query for comparable PI verdicts in Nevada: `GET /api/rest/v3/dockets/?q="personal+injury"&court=nvd&filed_after=2021-01-01`
- Review docket entries for PACER-linked documents showing verdict or settlement amounts where publicly available; use these data points to anchor the high-scenario and midpoint values in Step 4
- Cross-reference CourtListener opinion search for any published opinions discussing damages in the same cause of action to validate multiplier assumptions

---

> **Disclaimer**: This settlement analysis is a practice management and client counseling tool. All valuations are estimates based on provided facts and general legal knowledge. Attorney judgment, local venue experience, and verified case-specific facts must inform any final settlement recommendation.
