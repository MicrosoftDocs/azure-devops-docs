---
applyTo: '**'
---

- @azure Rule - Use Azure Best Practices: When generating code for Azure, running terminal commands for Azure, or performing operations related to Azure, invoke your `get_azure_best_practices` tool if available.

# Azure DevOps Product Context — Override Instructions

When working in this repository, apply the following Azure DevOps–specific
overrides to any doc-kit agent, skill, or prompt. These rules take precedence
over Foundry-specific defaults shipped with doc-kit.

---

## 1. Product Identity

| Default (Foundry)                  | Override (Azure DevOps)                                           |
|------------------------------------|-------------------------------------------------------------------|
| Product name: "Azure AI Foundry"   | **Azure DevOps**                                                  |
| Docs base URL                      | `https://learn.microsoft.com/azure/devops/`                       |
| Release-notes URL                  | `https://learn.microsoft.com/azure/devops/release-notes/`         |
| REST API reference                 | `https://learn.microsoft.com/rest/api/azure/devops/`              |
| Feedback mechanism                 | Azure DevOps Developer Community (`developercommunity.visualstudio.com`) |
| Product hub                        | `https://azure.microsoft.com/products/devops/`                    |
| `ms.service`                       | `azure-devops`                                                    |
| `ms.subservice` values             | `azure-boards`, `azure-repos`, `azure-pipelines`, `azure-artifacts`, `azure-test-plans` |
| Moniker / version selector         | `azure-devops` (cloud, primary), `azure-devops-2022` (on-premises) |

## 2. Repository & Content Structure

| Aspect               | Value                                                              |
|----------------------|--------------------------------------------------------------------|
| Docs repo            | `MicrosoftDocs/azure-devops-docs`                                  |
| Docs repo path       | `docs/`                                                            |
| TOC root             | `docs/toc.yml`                                                     |
| Content areas        | `docs/artifacts/`, `docs/boards/`, `docs/pipelines/`, `docs/repos/`, `docs/test/`, `docs/organizations/`, `docs/cli/` |
| Media folder         | `media/` subdirectory colocated with each article                  |
| Includes folder      | `docs/includes/`                                                   |
| Release notes        | `release-notes/` (organized by year and sprint)                    |
| What's new docs      | `release-notes/docswhatsnew/`                                      |

## 3. Versioning & Moniker Rules

- Azure DevOps docs use **moniker-based versioning**: `azure-devops`, `azure-devops-2022`, `azure-devops-2020`.
- The primary target is **`azure-devops`** (Azure DevOps Services, cloud) — use by default.
- Include `azure-devops-2022` content when covering on-premises scenarios.
- Include `azure-devops-2020` only if explicitly requested.
- **DISCARD** `tfs-2018` content unless the user explicitly requests legacy coverage.
- Content outside any moniker block is shared across all versions — always include it.
- Every `::: moniker range="..."` must have a matching `::: moniker-end`.
- Do NOT use `monikerRange` YAML front matter for articles with content spanning multiple versions.
- When procedures differ by version, use moniker zones to isolate differing sections. Prefer repeating an entire section rather than splitting individual list items.

## 4. Metadata Defaults

Every Markdown article must include this YAML front matter (adjust values per article):

```yaml
---
title: "{Article Title}"
description: "{140-character max description}"
ms.date: {MM/DD/YYYY}
ms.topic: {how-to | conceptual | overview | reference | quickstart | tutorial}
ms.service: azure-devops
ms.subservice: {azure-boards | azure-repos | azure-pipelines | azure-artifacts | azure-test-plans}
author: {GitHub-username}
ms.author: {Microsoft-alias}
---
```

`title`, `description`, `ms.date`, and `ms.topic` are always required. `author` and `ms.author` are optional — default values are set in `docfx.json` and can be omitted unless overriding the default.

## 5. Key Service Areas

| Service                          | Path prefix              | Notes                                                    |
|----------------------------------|--------------------------|----------------------------------------------------------|
| Azure Boards                     | `docs/boards/`           | Work items, backlogs, sprints, Kanban, queries           |
| Azure Repos                      | `docs/repos/`            | Git, TFVC, pull requests, branch policies                |
| Azure Pipelines                  | `docs/pipelines/`        | YAML pipelines, classic pipelines, agents, tasks         |
| Azure Artifacts                  | `docs/artifacts/`        | Package feeds, NuGet, npm, Maven, Cargo, Python          |
| Azure Test Plans                 | `docs/test/`             | Manual testing, exploratory testing, test runs           |
| Administration & Security        | `docs/organizations/`    | Organizations, projects, permissions, billing            |
| CLI                              | `docs/cli/`              | `az devops` commands, Azure CLI extension                |
| Integrate / Extend               | `docs/integrate/`, `docs/extend/` | REST APIs, extensions, service hooks           |
| GitHub Advanced Security (GHAzDO)| `docs/repos/security/`   | Code scanning, secret scanning, dependency scanning      |

## 6. Terminology & Style

| Instead of …                          | Use …                                                         |
|---------------------------------------|---------------------------------------------------------------|
| "ADO" or "AZDO"                       | "Azure DevOps" (full name in published content)               |
| "org"                                 | "organization"                                                |
| "team project"                        | "project"                                                     |
| "deployment" (model deployment)       | "deployment" (pipeline / release deployment)                  |
| "agent" (AI agent)                    | "agent" (pipeline agent) — clarify context if ambiguous       |
| "hub" / "project" (Foundry hierarchy) | Not applicable — omit                                         |
| "Azure AI SDK"                        | "Azure DevOps REST API" or "Azure DevOps client libraries"    |

- Follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/).
- Use **sentence-case** for headings.
- Use **bold** for UI elements: **Boards**, **Pipelines > New Pipeline**.
- Capitalize service names: **Azure Boards**, **Azure Repos**, **Azure Pipelines**, **Azure Test Plans**, **Azure Artifacts**.
- Do NOT abbreviate "Azure DevOps" to "ADO" in published documentation.
- Use "Azure DevOps Services" for the cloud offering; "Azure DevOps Server" for on-premises.

## 7. REST API & Code Sample Standards

- Always link to the versioned REST API reference: `https://learn.microsoft.com/rest/api/azure/devops/`
- Include API version in examples: `api-version=7.1`
- Authentication examples must show both PAT and OAuth/Entra ID options.
- Azure DevOps CLI: `az devops` commands should reference the latest Azure CLI extension.
- REST API samples should use `curl` or the Azure DevOps Python/Node client libraries.
- Include authentication setup (PAT creation or `az login`) in every code example.

## 8. Article Patterns

### Prerequisites block

```markdown
## Prerequisites

- An [Azure DevOps organization](https://go.microsoft.com/fwlink/?LinkId=307137).
- **{Permission name}** permission or membership in the **{Group name}** group.
- {Any additional tools or accounts}
```

Use Azure DevOps permission names exactly: for example, "Basic access level", "Project Administrator", "Build Administrator".

### UI procedure steps

Use **bold** for UI elements and `>` for menu traversal:

```markdown
1. Sign in to your Azure DevOps organization (`https://dev.azure.com/{yourorganization}`).
2. Select **Boards** > **Work Items**.
3. Select **New Work Item** and choose **User Story**.
```

### Screenshot conventions

- File format: PNG
- Max width: 750 px
- Alt text: Describe the action, not the image.
- Path: `media/{article-name}/` subfolder colocated with the article.

### See also section

End every article with a **See also** section linking to 2–5 related articles.

---

## 9. Recent Release Notes — Grounding Data

Use this section as grounding when writing about new features, updating what's-new
pages, or answering questions about current capabilities in Azure DevOps.

**Source:** `https://learn.microsoft.com/azure/devops/release-notes/`

### Sprint 271 (March 31, 2026) — Improved deployment visibility with artifact IDs and stage level views

#### General
- Remote MCP Server public preview — hosted endpoint at `https://mcp.dev.azure.com/{organization}` for VS and VS Code
- Allow extensions to access local network resources (new security policy)
- Expired personal access tokens (PATs) can no longer be modified

#### Azure Pipelines
- **Improved continuous deployment visibility in YAML pipelines** — artifact used by each run now visible on runs overview and individual run pages
- **New Stages view** — shows most recent pipeline run deployed (or deploying) to each stage; supports `group` property for organizing stages (including multi-level nesting with `\`)

#### Azure Boards
- Increased inherited process limit — doubled to 256 (from 128)

#### GitHub Advanced Security for Azure DevOps
- **Advanced Security status checks for pull requests** — new `AdvancedSecurity/NewHighAndCritical` and `AdvancedSecurity/AllHighAndCritical` configurable branch policies
- Export results from security overview to CSV (Risk and Coverage views)
- Audit log events for Advanced Security enablement changes
- Automatic cleanup of alerts from stale pipeline configurations (>90 days)

#### Azure Test Plans
- Query and relate work items across projects in test results

---

### Sprint 270 (March 5, 2026) — Auto-complete pull requests by default

#### General
- Retirement of Global Personal Access Tokens in Azure DevOps
- Auto-complete pull requests by default (organization setting)

#### Azure Boards
- Condensed card display on Kanban and sprint boards

#### Azure Repos
- Auto-complete pull requests by default
- New repository setting for pull request ID in commit messages

#### GitHub Advanced Security for Azure DevOps
- Secret push protection bypass details available in audit log

#### Azure Test Plans
- New entry point for exploratory sessions

---

### Sprint 269 (February 12, 2026) — GitHub Copilot Custom Agents in Azure Boards

#### Azure Pipelines
- Improved pipeline run debugging

#### Azure Boards
- Azure Boards integration with GitHub Copilot now supports custom agents
- Increased maximum limit for connected GitHub repositories

#### Azure Repos
- Improved Git policy configuration API

#### GitHub Advanced Security for Azure DevOps
- Permissions enforcement in security overview
- Stale scan detection in security overview coverage

---

### Sprint 268 (January 26, 2026) — Streamlined Test Plans

#### Azure Boards
- General availability of GitHub Copilot integration for Azure Boards

#### Azure Repos
- Breaking change: Disabling of obsolete TFVC check-in policies
- Pull request notification improvements
- Pull request templates for multi-level branches

#### GitHub Advanced Security for Azure DevOps
- CodeQL default setup now in private preview
- CodeQL build task updated to Node.js v24
- CodeQL autobuild task deprecated
- Service hooks event for secret validation status
- Secrets tab is now the default in repository view
- Work item linking API for alerts

#### Azure Test Plans
- New Test Run Hub
- Improved test case import wizard
- Focused test point history panel
- Recent test result in user story
- Resume is now the default action for paused test cases

---

## 10. What's New in Docs — February 2026

**Source:** `release-notes/docswhatsnew/azure-devops-docs-whats-new.md`

Key documentation updates from February 1–28, 2026:

### New articles
- [Troubleshoot Azure Web App deployment tasks](/azure/devops/pipelines/troubleshooting/troubleshoot-azure-web-app-deploy)
- [Microsoft-hosted image deprecation schedule](/azure/devops/pipelines/agents/hosted-deprecation-schedule)

### Major updated areas
- **Administration**: PAT policies, Conditional Access, permissions, billing
- **Azure Artifacts**: Upstream sources, Google Maven Repository, storage monitoring
- **Azure Boards**: GitHub integration, work item fields, automate state transitions
- **Azure Pipelines**: Classic release pipelines, ARM service connections, Microsoft-hosted agents
- **Azure Repos**: Authentication, Advanced Security permissions and secret scanning
- **Azure Test Plans**: Test run automation, manual tests, user acceptance testing
- **Project / Wiki**: Comprehensive wiki documentation updates

---

## 11. How to Keep This File Current

1. **After each sprint release:** Update Section 9 with new entries from the sprint release notes in `release-notes/2026/` (sprint include files under `release-notes/2026/includes/`).
2. **Monthly:** Update Section 10 from the latest file in `release-notes/docswhatsnew/`.
3. **When repos change:** Update Section 2 paths and TOC references.
4. **When metadata rules change:** Update Section 4 front-matter template.
5. **Target size:** If this file exceeds ~600 lines, consider migrating grounding sections into separate `references/*.md` files under `.dockit/instructions/`.
