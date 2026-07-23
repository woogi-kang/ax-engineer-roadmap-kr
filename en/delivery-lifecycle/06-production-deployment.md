# 6. Production Deployment

## Purpose

Move a thin prototype into an operating system with authentication, permissions, observability, recovery, and cost controls.

## Key activities

1. Separate production and development environments, configuration, and secrets.
2. Implement authentication, authorization, and least privilege.
3. Implement input validation, deduplication, timeouts, and retries.
4. Connect logs, metrics, traces, and audit events.
5. Define alerts for quality, latency, error, and cost.
6. Exercise rollback and manual fallback paths.
7. Document deployment, incident, recovery, and operating procedures.

## Minimum observability

- Workflow and execution identifiers
- User or system actor
- Input and output contract versions
- Model, prompt, and tool versions
- Start time, end time, and state
- Approval, execution, and recovery events
- Error type and retry count
- Latency and cost

Do not log sensitive source text and output by default. Design for both traceability and data minimization.

## Deliverables

- Deployed thin vertical slice
- CI/CD and environment configuration
- Operating dashboard or status report
- Runbook and incident procedure
- Rollback and recovery exercise record

## Exit criteria

- Another developer can reproduce the deployment.
- Unauthorized users and system calls are blocked.
- Cause and impact are traceable with the same identifier.
- External-system outages are distinguishable from model failures.
- Rollback or manual fallback works in practice.

## Stop signals

- Production depends on a personal account or local environment.
- Incidents are detected only when a user reports them.
- Every error is retried automatically in the same way.
- There is no cost limit or stop criterion.
- Data and security owners have not confirmed operating boundaries.
