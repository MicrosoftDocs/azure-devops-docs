---
title: Restore a project
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Restore a recently deleted project in Azure DevOps
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 01/28/2019
---

# Restore a project

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

You can restore a deleted project up to 28 days after it was deleted.

## Prerequisites

To restore a project, you must have the "delete project" permission set to **Allow**. To learn how to check you permissions, see [View permissions](../security/view-permissions.md).

> [!NOTE]
> A recently deleted project is only viewable when there is a project that has been deleted from an organization and it is within the last 28 days.

## Restore project

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)
3. Select **Overview** and scroll down to "recently deleted projects."

   ![organization-settings-select-overview.png](../accounts/_img/_shared/organization-settings-select-overview.png)

4. Highlight the project you want to restore, and then select **Restore**.

![Highlight the project, and then select Restore](_img/restore-project/recently-deleted-projects.png)

Your project and associated data are restored.

## Related articles

* [Save project data](save-project-data.md)
* [Create a project](create-project.md)