---
title: Migrate from a public project to GitHub
titleSuffix: Azure DevOps Services
description: Learn how to migrate code, pipelines, wikis, artifacts, and work items from an Azure DevOps public project to GitHub before public projects are retired.
ms.subservice: azure-devops-public-projects
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 04/22/2026
---

# Migrate from a public project to GitHub

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [public-projects-retirement](includes/public-projects-retirement.md)]

Migrate public-facing content to GitHub, which offers a rich ecosystem for open-source collaboration.

After the conversion to private:

- Anonymous users lose access to code, boards, wikis, pipelines, and artifacts.
- Your project no longer appears in search engines or is accessible via public links.
- CI/CD features that depend on public visibility - such as status badges, webhook triggers, or external dashboards - might stop working.
- Pipeline capacity is limited to 1,800 minutes per month instead of unlimited.

If you use a public project to share code, documentation, build results, or packages with external users, this article walks through migrating each service area to its GitHub equivalent. Private projects aren't affected by this change.

## Prerequisites

| Requirement | Details |
|---|---|
| **Azure DevOps access** | Member of the project with at least **Basic** access |
| **GitHub account** | A [GitHub account](https://github.com/signup) with permission to create repositories |
| **Git** | [Git](https://git-scm.com/downloads) installed locally |
| **GitHub CLI** (optional) | [GitHub CLI](https://cli.github.com/) for streamlined operations |

## Migrate repositories

GitHub repositories support open collaboration with pull requests, forks, and stars.

### Import a Git repository into GitHub

1. Sign in to [GitHub](https://github.com) and select **New repository**.
1. Enter a repository name and set visibility to **Public**.
1. Select **Import a repository** at the top of the page.
1. Enter your Azure DevOps clone URL: `https://dev.azure.com/{organization}/{project}/_git/{repo}`.
1. If prompted, enter your Azure DevOps credentials (a [personal access token](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate) with **Code > Read** scope).
1. Select **Begin import**.

For more information, see [Understand migrations from Azure DevOps to GitHub](https://docs.github.com/en/migrations/ado/understand-migrations-from-azure-devops-to-github) and [Importing a repository with GitHub Importer](https://docs.github.com/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer).

### Import from the command line

If the GitHub importer doesn't meet your needs, push directly from a local clone:

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
