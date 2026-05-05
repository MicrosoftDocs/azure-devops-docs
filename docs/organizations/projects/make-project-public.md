---
title: Change project visibility to private
titleSuffix: Azure DevOps Services
description: Learn how to convert an existing Azure DevOps public project to private visibility before the automatic conversion in 2027.
ms.subservice: azure-devops-public-projects
ms.custom: support-driven-update
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 05/05/2026
---

# Change project visibility to private

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]  

[!INCLUDE [public-projects-retirement](includes/public-projects-retirement.md)]

Public projects in Azure DevOps are retired. You can no longer create new public projects or change a private project to public. If you have an existing public project, you can proactively convert it to private before the automatic conversion in 2027.

## What changes when your project becomes private

When a public project converts to private, the following changes take effect immediately:

| Area | Change |
|------|--------|
| **Anonymous access** | Unauthenticated users can no longer view code, work items, wikis, pipelines, or artifacts. |
| **Search engine indexing** | Your project no longer appears in search engine results. Existing public URLs return a sign-in prompt. |
| **Public links** | Any shared links to code, work items, or build results require authentication. |
| **Pipeline minutes** | Public projects receive unlimited Microsoft-hosted pipeline minutes. After conversion, your organization's pipeline capacity is limited to 1,800 free minutes per month (or your purchased amount). |
| **Status badges** | Build status badges embedded in README files or external dashboards stop rendering for anonymous users. |
| **Package feeds** | Consumers who restore packages from your Azure Artifacts feeds must authenticate. Public upstream access is removed. |
| **Webhooks and integrations** | Consumers that rely on anonymous access might stop receiving events or stop working. |

For more details about the retirement timeline and what to expect, see [Public projects retirement](public-projects-retirement.md).

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **Permissions** | [Project Collection Administrator](../security/look-up-project-collection-administrators.md) or Organization Owner |

## Convert your project to private

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

1. Go to your project and select **Project settings**.

1. Select **Overview**.

1. In the **Visibility** dropdown menu, choose **Private**.

1. Select **Save**.

> [!NOTE]
> After you convert a public project to private, you can't change it back to public. The option to set project visibility to public is permanently removed.

## After conversion

After converting your project to private, verify the following areas:

- **Pipeline capacity**: Check your organization's [parallel job](../../pipelines/licensing/concurrent-jobs.md) allocation to ensure you have enough capacity for private project builds.
- **External consumers**: Notify any external users or tools that relied on anonymous access to your project.
- **Package feeds**: Update documentation or instructions for package consumers who now need to authenticate.
- **Status badges**: Update or remove build status badges in external documentation that no longer render.

## Related content

- [Public projects retirement](public-projects-retirement.md)
- [Migrate from a public project to GitHub](migrate-public-project.md)
- [About projects](about-projects.md)
- [Delete a project](delete-project.md)
