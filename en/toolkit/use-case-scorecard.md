# AX Use-Case Scorecard

## Scoring

Score each item from `1 to 5`. Do not decide from the total alone. Hold a candidate if risk, data, or recoverability falls below a mandatory threshold.

| Criterion | 1 point | 3 points | 5 points | Weight |
|---|---|---|---|---:|
| Workflow value | Convenience | Team productivity or quality | Core cost, revenue, or risk | 3 |
| Frequency | Rare | Weekly or monthly | Daily or continuous | 2 |
| Problem evidence | Opinion only | Some records | Baseline and recurring evidence | 3 |
| Data readiness | Access and definitions unknown | Requires some preparation | Owner, contract, and access confirmed | 3 |
| Evaluability | Hard to adjudicate | Human review possible | Repeatable evaluation set possible | 3 |
| Recoverability | Hard to reverse | Manual correction possible | Immediate stop and recovery possible | 3 |
| Integration difficulty | Core-system change | Some integration required | Can begin with read or propose | 2 |
| Adoption readiness | No accountable owner | Bounded users | Owner, users, and operators confirmed | 3 |
| Reuse potential | One-off | Similar workflows exist | Shared pattern across workflows | 1 |

## Candidate comparison

| Candidate | Value | Frequency | Evidence | Data | Evaluation | Recovery | Integration | Adoption | Reuse | Weighted total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| A |  |  |  |  |  |  |  |  |  |  |
| B |  |  |  |  |  |  |  |  |  |  |
| C |  |  |  |  |  |  |  |  |  |  |

## Mandatory gates

- [ ] The process owner and users are confirmed.
- [ ] The current state can be measured or observed.
- [ ] A data owner and access path exist.
- [ ] High-risk actions can be excluded from the initial scope.
- [ ] Failures can be detected and handled manually.
- [ ] A thin end-to-end slice can be built within two to four weeks.

## Decision

| Field | Content |
|---|---|
| Selected candidate |  |
| Selection reason |  |
| Hold or rejection reasons |  |
| Initial scope |  |
| Non-goals |  |
| Revisit condition |  |
