# 4. Data and Context

## Purpose

Define the provenance, semantics, freshness, and permissions of information used by AI, and create a traceable connection from source to workflow outcome.

## Information types

| Type | Examples | Operating principle |
|---|---|---|
| Source data | Orders, contracts, customer inquiries, inventory | Preserve the system of record and owner |
| Derived data | Cleaned, joined, or classified results | Record transformation rules and versions |
| Document knowledge | Policies, manuals, meeting notes | Mark scope and freshness |
| Workflow state | Awaiting approval, in progress, complete | Read from the live system of record |
| AI output | Classification, summary, draft, proposal | Link to input, model, evaluation, and approval |
| Execution result | Created tasks or changed states | Record an audit identifier and reversal information |

## Key activities

1. Identify systems of record and data owners.
2. Define fields, identifiers, units, time zones, and missing-value meaning in a data contract.
3. Align workflow terminology and metric definitions.
4. Separate source, derived, AI-output, and execution-result data.
5. Define freshness, retention, access, and deletion rules.
6. Include missing, duplicate, stale, and conflicting values in evaluation data.

## Deliverables

- Data contract
- System-of-record and owner map
- Glossary and metric definitions
- Data lineage
- Quality, freshness, and permission rules

## Exit criteria

- Important outcomes are traceable to their source.
- The design distinguishes live workflow state from document retrieval.
- Missingness and sampling bias can be represented.
- Data owners and access approvers are confirmed.
- AI output does not overwrite source facts.

## Stop signals

- Decisions are automated on replicated data whose system of record is unknown.
- Teams use the same term differently and defer its definition.
- Accuracy is calculated while collection scope and missingness are hidden.
- There is no realistic path to obtain the required data access.
