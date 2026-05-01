---
title: Migrate from a public project to GitHub
titleSuffix: Azure DevOps Services
description: Learn how to migrate code, pipelines, wikis, artifacts, and work items from an Azure DevOps public project to GitHub before public projects are retired.
ms.subservice: azure-devops-public-projects
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 04/30/2026
---

# Migrate from a public project to GitHub

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [public-projects-retirement](includes/public-projects-retirement.md)]

This article shows how to migrate each service area from an Azure DevOps public project to its GitHub equivalent. It covers repositories, pipelines, wikis, artifacts, and work items.

## Prerequisites

| Requirement | Details |
|---|---|
| **Azure DevOps access** | Member of the project with at least **Basic** access |
| **GitHub account** | A [GitHub account](https://github.com/signup) with permission to create repositories |
| **Git** | [Git](https://git-scm.com/downloads) installed locally |
| **GitHub CLI** (optional) | [GitHub CLI](https://cli.github.com/) for streamlined operations |

## Migrate repositories

GitHub repositories support open collaboration with pull requests, forks, and stars.

### Use GitHub Enterprise Importer

[GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer) is the recommended tool for migrating repositories from Azure DevOps Cloud to GitHub Enterprise Cloud. It migrates Git source (including commit history), pull requests, user history, work item links on pull requests, attachments, and branch policies.

1. Install the GitHub CLI migration extension:

   ```bash
   gh extension install github/gh-gei
   ```

1. Authenticate with both Azure DevOps and GitHub:

   ```bash
   # Sign in to Azure DevOps with Microsoft Entra ID and set the token
   az login
   export ADO_PAT=$(az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query accessToken -o tsv)

   # Authenticate with GitHub
   gh auth login
   ```

1. Generate a migration script for an Azure DevOps organization:

   ```bash
   gh gei generate-script --ado-org {organization} --github-org {github-org} --output migrate.sh
   ```

1. Or migrate a single repository:

   ```bash
   gh gei migrate-repo --ado-org {organization} --ado-team-project {project} \
     --ado-repo {repo} --github-org {github-org} --github-repo {new-repo}
   ```

For more information, see [Understand migrations from Azure DevOps to GitHub](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/about-migrations-from-azure-devops-to-github-enterprise-cloud).

### Use GitHub Importer

For a simpler, browser-based option, use the built-in GitHub Importer:

1. Sign in to [GitHub](https://github.com) and select **New repository**.
1. Enter a repository name and set visibility to **Public**.
1. Select **Import a repository** at the top of the page.
1. Enter your Azure DevOps clone URL: `https://dev.azure.com/{organization}/{project}/_git/{repo}`.
1. If prompted, enter your Azure DevOps credentials. Sign in by using Microsoft Entra ID. If you need to use a personal access token, create one with **Code > Read** scope. For more information, see [Use personal access tokens](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate).
1. Select **Begin import**.

GitHub Importer migrates Git source and commit history but doesn't migrate pull requests, work item links, or branch policies. For more information, see [Importing a repository with GitHub Importer](https://docs.github.com/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer).

### Import from the command line

If GitHub Enterprise Importer doesn't meet your needs, push directly from a local clone:

```bash
# Clone the Azure DevOps repository with full history
git clone --bare https://dev.azure.com/{organization}/{project}/_git/{repo}
cd {repo}.git

# Push to the new GitHub repository
git push --mirror https://github.com/{owner}/{new-repo}.git
```

> [!IMPORTANT]
> Review your Git history for credentials, API keys, or sensitive data before pushing to a public GitHub repository. Use tools like [git filter-repo](https://github.com/newren/git-filter-repo) to remove sensitive content from history.

## Migrate pipelines

[GitHub Actions](https://docs.github.com/actions) offers flexible workflows and free runner minutes for public repositories.

### Use GitHub Actions Importer

GitHub Actions Importer automates the conversion of Azure DevOps pipelines to GitHub Actions workflows.

1. Install the GitHub Actions Importer CLI extension:

   ```bash
   gh extension install github/gh-actions-importer
   ```

1. Run an audit to identify pipelines to migrate:

   ```bash
   gh actions-importer audit azure-devops \
     --output-dir audit-results
   ```

1. Convert a specific pipeline:

   ```bash
   gh actions-importer migrate azure-devops pipeline \
     --target-url https://github.com/{owner}/{repo} \
     --pipeline-id {pipeline-id} \
     --output-dir migration-results
   ```

For more information, see [Migrate from Azure DevOps to GitHub Actions with GitHub Actions Importer](https://docs.github.com/actions/migrating-to-github-actions/automated-migrations/migrating-from-azure-devops-with-github-actions-importer).

### Key differences between Azure Pipelines and GitHub Actions

| Azure Pipelines | GitHub Actions |
|---|---|
| `azure-pipelines.yml` | `.github/workflows/*.yml` |
| Stages, jobs, steps | Jobs, steps (reusable workflows for stages) |
| Service connections | GitHub secrets and OIDC |
| Agent pools | Runner labels (`ubuntu-latest`, `windows-latest`) |
| Task references (`task@version`) | Action references (`owner/action@version`) |

## Migrate wiki content

Use GitHub Wiki or GitHub Pages to publish guides and manuals.

### Migrate to GitHub Wiki

Azure DevOps wikis are Git repositories. Clone and push them directly:

```bash
# Clone the Azure DevOps wiki repository
git clone https://dev.azure.com/{organization}/{project}/_git/{project}.wiki

cd {project}.wiki

# Add the GitHub wiki as a remote
git remote add github https://github.com/{owner}/{repo}.wiki.git

# Push to GitHub wiki
git push github main
```

> [!NOTE]
> Before pushing, create at least one wiki page in your GitHub repository to initialize the wiki repository. Select the **Wiki** tab in your GitHub repo and create a page.

### Migrate to GitHub Pages

For documentation-heavy projects, [GitHub Pages](https://pages.github.com/) provides a full static site hosted directly from your repository. You can use static site generators like Jekyll or MkDocs to convert your wiki content into a published site.

## Migrate artifacts

GitHub Packages supports publishing and consuming NuGet, npm, and Maven packages.

### Move packages to GitHub Packages

1. Download existing packages from your Azure Artifacts feed.
2. Reconfigure your package source to point to GitHub Packages.
3. Publish packages to the new feed.

For example, to migrate an npm package:

```bash
# Set the GitHub Packages registry
npm config set @{owner}:registry https://npm.pkg.github.com

# Authenticate
npm login --registry=https://npm.pkg.github.com

# Publish
npm publish
```

### Alternative registries

For packages that need broad public visibility, consider public registries:

| Package type | Public registry |
|---|---|
| NuGet | [nuget.org](https://www.nuget.org/) |
| npm | [npmjs.com](https://www.npmjs.com/) |
| Maven | [Maven Central](https://central.sonatype.com/) |
| Python | [PyPI](https://pypi.org/) |
| Cargo | [crates.io](https://crates.io/) |

## Migrate work items

GitHub Issues and Projects provide modern tools for managing bugs and feature requests.

There's no built-in migration tool for work items from Azure Boards to GitHub Issues. Several community options are available:

- **Azure DevOps to GitHub Issues migrator** — open-source tools on GitHub that convert work items to issues, preserving titles, descriptions, and labels.
- **CSV export/import** — export work items from Azure Boards as CSV, then use the GitHub CLI or API to create issues.
- **REST API scripting** — use the [Azure DevOps Work Items REST API](/rest/api/azure/devops/wit/work-items/get-work-item) and [GitHub Issues REST API](https://docs.github.com/rest/issues/issues#create-an-issue) to build a custom migration script.

### Export work items with the Azure DevOps CLI

```bash
# Export work items from a query
az boards query --wiql "SELECT [System.Id], [System.Title], [System.State] FROM workitems WHERE [System.TeamProject] = '{project}'" --organization https://dev.azure.com/{organization} --output table
```

> [!TIP]
> Prioritize migrating active and recent work items. Closed or historical items might not need migration—you can keep them accessible in the private project for reference.

## Replace dashboards

GitHub doesn't have a single dashboard feature equivalent to Azure DevOps dashboards. Instead, similar functionality is spread across several native features.

| Azure DevOps dashboard use | GitHub equivalent |
|---|---|
| Work tracking and burndown | [GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects) with built-in Insights charts |
| Repository activity | [Repository Insights](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository) (commits, PRs, traffic, contributors) |
| Build and CI status | [GitHub Actions](https://docs.github.com/actions) workflow run history and status badges |
| Public transparency | Issues, pull requests, releases, and [README badges](https://github.com/badges/shields) |

For org-level dashboards that aggregate data across multiple repositories, explore integrations on the [GitHub Marketplace](https://github.com/marketplace).

## Post-migration checklist

After migrating your content, verify the following items:

- [ ] All Git repositories are available on GitHub with full history.
- [ ] CI/CD workflows run successfully in GitHub Actions.
- [ ] Wiki content renders correctly in GitHub Wiki or GitHub Pages.
- [ ] Packages publish and restore from the new registry.
- [ ] Active work items are tracked in GitHub Issues.
- [ ] External links and badges point to the new GitHub locations.
- [ ] Collaborators and community members are informed of the new location.
- [ ] README in the Azure DevOps project directs visitors to the new GitHub location.

## Related content

- [Public projects retirement in Azure DevOps](public-projects-retirement.md)
- [Change project visibility to public or private](make-project-public.md)
- [About projects](about-projects.md)
- [Create a project](create-project.md)
- [GitHub Actions documentation](https://docs.github.com/actions)
