---
title: Restore a project
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Restore a recently deleted project in Azure DevOps
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 10/29/2019
---

# Restore a project

[!INCLUDE [version-vsts-plus-azdevserver-2019](../../boards/_shared/version-vsts-plus-azdevserver-2019.md)]

You can restore a deleted project up to 28 days after it was deleted. This article shows you how.

> [!IMPORTANT]
> A project can only be restored if it was deleted from the Web or REST API.

## Prerequisites

::: moniker range="= azure-devops"

To restore a project, you must have the "delete project" permission set to **Allow**. To learn how to check your permissions, see [View permissions](../security/view-permissions.md).

::: moniker-end

::: moniker range="= azure-devops-2019"

To restore a project, you must have the "delete project" permission set to **Allow**. To learn how to check your permissions, see [View permissions](../security/view-permissions.md).

Delete project permissions.

::: monker-end

> [!NOTE]
> A recently deleted project is only viewable when there's a project that's been deleted from an organization within the last 28 days.

## Restore project

::: moniker range="= azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)
3. Select **Overview** and scroll down to "recently deleted projects."

   ![organization-settings-select-overview.png](../accounts/_img/_shared/organization-settings-select-overview.png)

4. Highlight the project you want to restore, and then select **Restore**.

![Highlight the project, and then select Restore](_img/restore-project/recently-deleted-projects.png)

::: moniker-end

::: moniker range="= azure-devops-2019"

You can execute a PowerShell command for restoring a removed project. For more information, see [Restore removed project solution](https://developercommunity.visualstudio.com/content/problem/767453/restore-removed-project.html) within the Developer Community.

::: moniker-end

Your project and associated data are restored.

## Related articles

* [Save project data](save-project-data.md)
* [Create a project](create-project.md)