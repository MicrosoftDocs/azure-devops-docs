---
applyTo: "**"
---
# Azure DevOps Documentation Standards

## Terminology

- Use "Azure DevOps" consistently, not "ADO" or "AZDO" in published content.
- "Azure DevOps Services" refers to the cloud offering; "Azure DevOps Server" refers to on-premises.
- Capitalize feature names: "Azure Boards", "Azure Repos", "Azure Pipelines", "Azure Test Plans", "Azure Artifacts".
- Use "organization" not "org" in prose.
- Use "project" not "team project" (legacy term).

## REST API references

- Azure DevOps REST API docs: https://learn.microsoft.com/rest/api/azure/devops/
- Always link to the versioned API reference, not generic Azure docs.
- Include API version in examples (e.g., `api-version=7.1`).
- Authentication examples must show both PAT and OAuth options.

## Code samples

- Azure DevOps CLI: `az devops` commands should reference the latest Azure CLI extension.
- REST API samples should use `curl` or the Azure DevOps Python/Node client libraries.
- Include authentication setup (PAT creation or `az login`) in every code example.

## Article structure

- Every how-to must include Prerequisites listing required permissions.
- Use the Azure DevOps permission names exactly (e.g., "Basic access level", "Project Administrator").
- Cross-reference related services (e.g., link Pipelines articles to Repos articles when relevant).
