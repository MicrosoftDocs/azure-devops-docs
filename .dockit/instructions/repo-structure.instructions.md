---
applyTo: "**"
---
# Repository Structure for Azure DevOps Documentation

## Docs repository

- **Repo**: MicrosoftDocs/azure-devops-docs (public)
- **Docs path**: docs/
- **TOC root**: docs/toc.yml
- **Content areas**: docs/artifacts/, docs/boards/, docs/pipelines/, docs/repos/, docs/test/, docs/organizations/, docs/cli/

## Key URLs

- Product page: https://learn.microsoft.com/azure/devops/
- REST API reference: https://learn.microsoft.com/rest/api/azure/devops/
- Azure DevOps CLI: https://learn.microsoft.com/azure/devops/cli/
- Release notes: https://learn.microsoft.com/azure/devops/release-notes/

## Content organization

- Each Azure DevOps service has its own folder under `docs/` (boards, repos, pipelines, artifacts, test).
- Shared content (organizations, security, user guide) is in `docs/organizations/` and `docs/user-guide/`.
- Includes are in `docs/includes/` — used for prerequisites, common steps, and shared notes.
- Media files are colocated with their articles in `media/` subdirectories.
