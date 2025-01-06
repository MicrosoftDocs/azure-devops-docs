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
ms.date: 11/26/2024
---

# Set permissions on queries and query folders

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can control access to queries by setting permissions, which let you configure users and groups to create, delete, view, and manage shared queries and query folders.

- **My Queries:**
  - **Create and edit:** All users, except users in the Readers group, can create and edit their own queries.
  - **View:** Only the signed-in user can view queries in their **My Queries** space.

- **Shared Queries:**
  - **Permissions:** By default, only Project Administrators can create, edit, or change permissions for queries and folders.
  - **Team management:** Create separate folders for each team under Shared Queries to allow them to manage their own set of shared queries.

For more information, see [Organize queries](organize-queries.md).
::: moniker range="azure-devops"

[!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

::: moniker-end

## Prerequisites

- **Access levels**: Have at least **Basic** access.
- **Permissions**: 
  - To manage permissions, be a member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md).
  - To create or edit a shared query, have your **Contribute** permission set to **Allow** for the shared query folder.  
  - To change permissions of a query or query folder, have the **Manage Permissions** permission set to **Allow** for the query folder.

Users with [Stakeholder access](../../organizations/security/stakeholder-access.md) can't create or save queries in a shared folder.

> [!TIP]    
> Consider creating a query folder for each team and give the team administrators or the team group query permissions to manage their folder. 

## Default query permissions

A ✔️ (checkmark) in the following table indicates that the corresponding security group has permission to exercise the task by default. 

[!INCLUDE [temp](../../organizations/security/includes/boards-queries.md)]

## Set permissions on a new query folder

To set permissions on a new query folder, do the following steps:

> [!TIP]   
> To rename or move a shared query or folder, have **Delete** permissions and **Contribute** permissions for the folder where you move the query to.

::: moniker range="azure-devops"

1. From your project, select **Boards** > **Queries** > **All** > **Shared Queries**.

   :::image type="content" source="media/boards-queries-all-shared-queries.png" alt-text="Screenshot showing sequence of selections to get to Shared Queries.":::

1. Select **New folder**. 

    :::image type="content" source="media\view-run-queries\select-new-folder-new-boards-hubs.png" alt-text="Screenshot of New folder selection.":::

1. Enter the name for the folder and select the parent folder from the drop-down list.

	This example uses the name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    :::image type="content" source="media/view-run-queries/new-folder-dialog-new-boards-hubs.png" alt-text="Screenshot of New folder dialog.":::

1. To set permissions for the new folder, select **More actions** :::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/view-run-queries/select-query-security.png" alt-text="Screenshot of security selection for query folder.":::

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Enter the name of a user or group within the search box.   

   This example adds the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

   :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog when you're done.

1. Reopen the Security dialog and choose Service Delivery and verify that the permissions are set. 

    :::image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for an existing folder or the top container folder, and choose **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot that shows Open More actions menu, choose New folder.":::

1. Enter the name for the folder. If you want to change the location of the folder, select **Rename** from the folder drop-down menu.  

	Here we name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    :::image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog.":::

1. To set permissions for the folder you just added, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Enter the name of a user or group within the search box.   

   Here we add the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

    :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog when you're done.

1. Reopen the Security dialog and choose Service Delivery and verify that the permissions are set. 

    :::image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::
  
::: moniker-end

::: moniker range="azure-devops-2019"

1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for an existing folder or the top container folder, and choose **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot that shows Open actions menu, choose New folder.":::

1. Enter the name for the folder. If you want to change the location of the folder, select it from the Folder drop down menu.  

	Here we name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    :::image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog, Azure DevOps Server 2019.":::

1. To set permissions for the folder you just added, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Choose the **Add...** menu to add a user identity or group. 

   Here we add the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

    :::image type="content" source="media/permissions/permissions-dialog-query-folder-service-delivery.png" alt-text="Screenshot of Permissions dialog for a query folder, Azure DevOps Server 2019.":::


   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  
  
::: moniker-end


## Set permissions on a shared query 

To keep anyone else from modifying a shared query that you create, you might want to set permissions on a specific query. You can set permissions by opening the permissions dialog for the specific query.  

::: moniker range="azure-devops"

1. Choose the **More actions** icon :::image type="icon" source="../media/icons/more-actions.png" border="false"::: and select **Security**.  

    :::image type="content" source="media/view-run-queries/select-query-security.png" alt-text="Screenshot of Open query permissions context menu.":::

2. Change the permissions so that a team member or group can't edit, delete, or change permissions for the query.  

   Here we deny permissions for the *Disallow access group*.  

    :::image type="content" source="media/permissions/deny-access-group-permissions-set.png" alt-text="Screenshot of Permissions dialog for a shared query.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.  

    :::image type="content" source="media/permissions/query-permissions-select.png" alt-text="Screenshot of Open query permissions context menu.":::

1. Change the permissions so that a team member or group can't edit, delete, or change permissions for the query.  

   Here we deny permissions for the *Disallow access group*.  

    :::image type="content" source="media/permissions/deny-access-group-permissions-set.png" alt-text="Screenshot of Permissions dialog for a shared query.":::

::: moniker-end

## Related articles  

- [Manage queries and query folders](organize-queries.md)
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)
- [Add a chart to a dashboard](../../report/dashboards/add-charts-to-dashboard.md)
- [Manage dashboards](../../report/dashboards/dashboards.md)
