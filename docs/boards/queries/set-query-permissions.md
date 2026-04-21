---
title: Set query permissions in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn how to set permissions on work item queries and folders when working in Azure Boards and Azure DevOps.
ms.custom: boards-queries, linked-from-support, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 682f0eb0-462d-41e2-b6a2-41949d1b90fb  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/24/2026
ai-usage: ai-assisted
---

# Set permissions on queries and query folders

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Set permissions on queries and query folders to control who can create, edit, delete, and manage them.

- **My Queries** — All users except Readers can create and edit their own queries. Only the signed-in user can view them.
- **Shared Queries** — By default, only Project Administrators can create, edit, or change permissions. Create a folder for each team so they can manage their own shared queries.

For more information, see [Organize queries](organize-queries.md).
::: moniker range="azure-devops"

[!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

::: moniker-end

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Access levels**| At least [**Basic** access](../../organizations/security/access-levels.md). Users with [Stakeholder access](../../organizations/security/stakeholder-access.md) can't create or save queries in a shared folder.|
|**Permissions**| - To manage permissions, be a member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md).<br>- To create or edit a shared query, have **Contribute** set to **Allow** for the shared query folder.<br>- To change permissions on a query or folder, have **Manage Permissions** set to **Allow** for that folder.| 

## Default query permissions

A ✔️ (checkmark) in the following table indicates that the corresponding security group has permission to exercise the task by default. 

[!INCLUDE [temp](../../organizations/security/includes/boards-queries.md)]

## Set permissions on a new query folder

> [!TIP]   
> To rename or move a shared query or folder, you need **Delete** and **Contribute** permissions for the destination folder.

::: moniker range="azure-devops"

1. From your project, select **Boards** > **Queries** > **All** > **Shared Queries**.

   :::image type="content" source="media/boards-queries-all-shared-queries.png" alt-text="Screenshot showing sequence of selections to get to Shared Queries.":::

1. Select **New folder**. 

    :::image type="content" source="media\view-run-queries\select-new-folder-new-boards-hubs.png" alt-text="Screenshot of New folder selection.":::

1. Enter the folder name and select the parent folder from the dropdown list.

	This example creates a *Service Delivery* folder for that team.

    :::image type="content" source="media/view-run-queries/new-folder-dialog-new-boards-hubs.png" alt-text="Screenshot of New folder dialog.":::

1. Select **More actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/view-run-queries/select-query-security.png" alt-text="Screenshot of security selection for query folder.":::

1. Search for the user or group, then grant them **Contribute** and **Manage Permissions** for the folder.

   This example grants the *Service Delivery* team both permissions for all queries and subfolders under their folder.

   :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   - **Contribute** — Create and edit queries and folders.
   - **Manage Permissions** — Change permission settings on queries and subfolders.

1. (Optional) Turn off inheritance to prevent permissions from being inherited from parent folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog, then reopen it and select the team to verify the permissions.

    :::image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for an existing folder or the top container folder, and choose **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot that shows Open More actions menu, choose New folder.":::

1. Enter the folder name. To change the location, select **Rename** from the folder dropdown menu.

	This example creates a *Service Delivery* folder for that team.

    :::image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog.":::

1. Choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.

1. Search for the user or group, then grant them **Contribute** and **Manage Permissions** for the folder.

   This example grants the *Service Delivery* team both permissions for all queries and subfolders under their folder.

    :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   - **Contribute** — Create and edit queries and folders.
   - **Manage Permissions** — Change permission settings on queries and subfolders.

1. (Optional) Turn off inheritance to prevent permissions from being inherited from parent folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog, then reopen it and select the team to verify the permissions.

    :::image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::
  
::: moniker-end

## Set permissions on a shared query 

To prevent others from modifying a shared query, set permissions directly on that query.

::: moniker range="azure-devops"

1. Select the **More actions** icon :::image type="icon" source="../media/icons/more-actions.png" border="false"::: and select **Security**.  

    :::image type="content" source="media/view-run-queries/select-query-security.png" alt-text="Screenshot of Open query permissions context menu.":::

1. Deny the relevant permissions for the user or group. This example denies permissions for the *Disallow access group*.

    :::image type="content" source="media/permissions/deny-access-group-permissions-set.png" alt-text="Screenshot of Permissions dialog for a shared query.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Select the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.  

    :::image type="content" source="media/permissions/query-permissions-select.png" alt-text="Screenshot of Open query permissions context menu.":::

1. Deny the relevant permissions for the user or group. This example denies permissions for the *Disallow access group*.

    :::image type="content" source="media/permissions/deny-access-group-permissions-set.png" alt-text="Screenshot of Permissions dialog for a shared query.":::

::: moniker-end

## Related content  

- [Manage queries and query folders](organize-queries.md)
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)
- [Add a chart to a dashboard](../../report/dashboards/add-charts-to-dashboard.md)
- [Manage dashboards](../../report/dashboards/dashboards.md)
