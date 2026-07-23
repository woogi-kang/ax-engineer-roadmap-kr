# Contributing

AX Engineer Roadmap Korea prioritizes contributions that strengthen decisions and evidence that can be validated in practice, rather than contributions that merely add more technology names.

## What you can contribute

- Missing competencies, lifecycle stages, or failure modes
- Outdated or incorrect sources
- Constraints and counterexamples from specific industries
- Deployment cases that do not identify an organization or person
- Template improvements
- Typo, broken-link, and accessibility fixes

## Before contributing

1. Read the [source policy](research/source-policy.md).
2. Search existing issues and pull requests.
3. If the change substantially alters the content, agree on the scope in an issue first.
4. Confirm that it contains no confidential information about a company, customer, or colleague.

## Competency format

New competencies should answer the following questions whenever possible.

```markdown
## Competency name

### Understand
### Decide
### Practice
### Demonstrate
### Failure modes
### Sources
```

When adding a tool or course, do not list only its name. Explain which competency it helps practice and how.

## Case-study format

A case should include at least:

- problem and users;
- current workflow;
- constraints and non-goals;
- hypotheses and choices;
- implementation and deployment scope;
- evaluation and failure handling;
- adoption and handoff;
- outcomes and limitations;
- reusable patterns.

Any real impact metric must include its measurement method and period. If those details cannot be disclosed, remove the metric and retain only observable states.

## Pull requests

- Keep one issue or argument per pull request.
- Explain why the change is needed and how it affects readers.
- Record the verification date and source type for new links.
- Run `node scripts/check-links.mjs` and `node scripts/check-roadmap.mjs`.
- Even when a draft is generated with AI, the submitter must personally review its facts and language.

## License

By contributing, you agree that your content may be distributed under the repository's [MIT License](../LICENSE). Do not reproduce another person's documents, tables, or images verbatim.
