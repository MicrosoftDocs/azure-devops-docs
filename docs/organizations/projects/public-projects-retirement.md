---
title: Public projects retirement in Azure DevOps
titleSuffix: Azure DevOps Services
description: Learn about the retirement of public projects in Azure DevOps, key dates, what changes for your organization, and how to prepare.
ms.subservice: azure-devops-public-projects
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 04/22/2026
---

# Public projects retirement in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Public projects in Azure DevOps are being retired. All existing public projects will be automatically converted to private projects, and anonymous (unauthenticated) access will be permanently disabled. This article explains the timeline, what changes, and what you need to do to prepare.

## Why public projects are being retired

When Azure DevOps introduced public projects, the goal was to provide a space for open-source collaboration. Since then, [GitHub](https://github.com) has become the industry-standard platform for open-source development, offering a purpose-built ecosystem with features like GitHub Actions, GitHub Packages, GitHub Discussions, and GitHub Sponsors.

Rather than maintain two separate open-source hosting experiences, Microsoft is consolidating on GitHub for public, open-source collaboration. Azure DevOps continues to be a fully supported platform for private projects and enterprise development workflows.

## Key dates and timeline

| Milestone | Date | Details |
|---|---|---|
| Retirement announced | April 2026 | Public notice via blog post and in-product banners |
| New public projects blocked | *TBD* | Organizations can no longer create new public projects |
| Existing public projects converted | *TBD* | All remaining public projects are automatically converted to private |

> [!IMPORTANT]
> Exact dates for blocking new public projects and converting existing ones will be announced in advance. Monitor the [Azure DevOps blog](https://devblogs.microsoft.com/devops/) and your organization's notification emails for updates.

## What changes when your project converts to private

When a public project becomes private, the following changes take effect immediately:

| Area | Change | Details |
|---|---|---|
| **Access and visibility** | Anonymous access is removed | Users who aren't members of your organization can no longer view code, work items, wikis, pipelines, or artifacts. |
| | Search engine indexing stops | Your project no longer appears in search engine results, and existing public URLs return a sign-in prompt. |
| | Public links stop working | Any shared links to code, work items, or build results require authentication. |
| **Pipelines** | Free pipeline minutes change | Public projects receive unlimited Microsoft-hosted pipeline minutes. After conversion to private, your organization's pipeline capacity is limited to 1,800 free minutes per month (or your purchased amount). |
| | Status badges require authentication | Build status badges embedded in README files or external dashboards stop rendering for anonymous users. |
| **Packages and artifacts** | Package feeds require authentication | Consumers who restore packages from your Azure Artifacts feeds must authenticate. Public upstream access is removed. |
| **Extensions and integrations** | Webhook and service hook consumers might break | Consumers that rely on anonymous access might stop receiving events. |
| | External tools stop working | Dashboards or monitoring tools that query your project's APIs without authentication stop working. |

## What you need to do

| Scenario | Action | Details |
|---|---|---|
| **You need public visibility** | Migrate to GitHub | Move your public-facing content to GitHub for open-source collaboration. For step-by-step guidance, see [Migrate from a public project to GitHub](migrate-public-project.md). |
| **You only need private collaboration** | No action required | Your project is automatically converted to private on the conversion date. All existing members, permissions, and data are preserved. |
| **You want to convert proactively** | Convert to private now | Convert your project to private before the automatic conversion date. For instructions, see [Change project visibility to public or private](make-project-public.md). |

## Frequently asked questions

### What happens to my data when my project converts to private?

All your data is preserved. Repositories, work items, pipelines, artifacts, wikis, and dashboards remain unchanged. The only difference is that unauthenticated users can no longer access them.

### Do my pipelines keep running after the conversion?

Yes. Existing pipelines continue to run. However, your organization's Microsoft-hosted pipeline minutes change from unlimited to the standard private-project allocation (1,800 free minutes per month). If you need more capacity, you can [purchase additional parallel jobs](/azure/devops/pipelines/licensing/concurrent-jobs).

### Do I need to update service connections or personal access tokens?

No. Service connections, personal access tokens (PATs), and OAuth configurations aren't affected by the visibility change. They continue to work as before.

### What happens to forks of my public repositories?

After conversion, existing forks within Azure DevOps continue to work for authenticated users. However, unauthenticated users can no longer clone or view forked repositories. If external contributors rely on forks, consider migrating to GitHub where the fork model is designed for open-source workflows.

### Can I make my project public again after the conversion?

No. After the retirement takes effect, the option to set a project's visibility to public is permanently removed. If you need public visibility, migrate to GitHub.

### Will historical builds and work items still be accessible?

Yes. All historical data, including build logs, test results, and work item history, is preserved and accessible to authenticated project members.

## Related content

- [Migrate from a public project to GitHub](migrate-public-project.md)
- [Change project visibility to public or private](make-project-public.md)
- [About projects](about-projects.md)
- [Create a project](create-project.md)
