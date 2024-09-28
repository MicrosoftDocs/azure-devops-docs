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
ms.date: 09/21/2024
---

# Set permissions on queries and query folders in Azure Boards and Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As with most project objects, you can control access by setting permissions. With queries, you can configure users and groups to create, delete, view, and manage permissions of shared queries and shared query folders. 

All users, except those users assigned to the Readers group, can create and edit their own queries and save them under **My Queries**. Only the signed in user can view queries saved under their **My Queries** space.

By default, only members of the Project Administrators group can create and edit queries and folders under **Shared Queries**, or change the permissions for a query or folder. 

By creating folders under Shared Queries, you can grant permissions to users for each folder. For example, if you have several teams contributing to a project, then you might want to create a folder under Shared Queries for each team to manage their own set of shared queries.  

::: moniker range="azure-devops"

> [!NOTE]
> The browser images used in this article are from the new boards hubs feature, which is enabled by default. If this feature is not enabled, you might be using the previous boards experience. To display the images for the previous experience, select the Azure DevOps Server 2022 version of this article.

::: moniker-end

## Prerequisites

- To create or edit a shared query or manage permissions, you must be a member of the **Project Administrators** groups with **Basic** or higher access level. Or, you must have your **Contribute** permission set to **Allow** for the shared query folder. To get added to this group, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md)
- Or, to create a query or folder under a shared query folder, you must have the **Contribute** permission set explicitly to **Allow** for the query folder and be granted **Basic** or higher access level. 
- Or, to change permissions of a query or query folder, you must have the **Manage Permissions** permission set explicitly to **Allow** for the query folder and be granted **Basic** or higher access level. 

Users with Stakeholder access can't create or save queries in a Shared folder. To learn more about access levels, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). 

> [!TIP]    
> Consider creating a query folder for each team and give the team administrators or the team group query permissions to manage their folder. 

## Default query permissions

A ✔️ (checkmark) in the following table indicates that the corresponding security group has permission to exercise the task by default. 

[!INCLUDE [temp](../../organizations/security/includes/boards-queries.md)]

## Set permissions on a new query folder

You set permissions from the web portal. To open **Queries**, see [View, run, or email a query](view-run-query.md).


> [!TIP]   
> You need **Delete** permissions to rename or move a shared query or folder, and **Contribute** permissions for the folder where you move the query to.

::: moniker range="azure-devops"


1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, select **New folder**. 

    :::image type="content" source="media\view-run-queries\select-new-folder-new-boards-hubs.png" alt-text="Screenshot of New folder selection.":::

1. Enter the name for the folder and select the parent folder from the drop-down list.

	This example uses the name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    :::image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog.":::

1. To set permissions for the folder you just added, choose the **More actions** icon :::image type="icon" source="../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/permissions/select-query-security-new-boards-hubs.png" alt-text="Screenshot of security selection for a query folder.":::

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Enter the name of a user or group within the search box.   

   This example adds the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

   :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog when you're done.

1. Reopen the Security dialog and choose Service Delivery to verify that the permissions are set. 

    :::image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, choose :**More actions** icon ::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for an existing folder or the top container folder, and choose **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot that shows Open More actions menu, choose New folder.":::

1. Enter the name for the folder. If you want to change the location of the folder, select **Rename** from the folder drop-down menu.  

	Here we name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    ::: image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog.":::

1. To set permissions for the folder you just added, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Enter the name of a user or group within the search box.   

   Here we add the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

    :::image type="content" source="media/permissions/service-delivery-folder-permissions-team-dialog.png" alt-text="Screenshot of Permissions dialog for a query folder.":::

   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  

1. Close the dialog when you're done.

1. Reopen the Security dialog and choose Service Delivery to verify that the permissions are set. 

    ::: image type="content" source="media/permissions/permissions-folder-dialog-s166.png" alt-text="Screenshot of Permissions dialog for a query folder, verify permission settings.":::
  
::: moniker-end

::: moniker range="azure-devops-2019"

1. Choose **All**. Expand **Shared Queries**. 
 
1. To add a folder, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for an existing folder or the top container folder, and choose **New folder**. 

    :::image type="content" source="media/organize-queries/select-new-folder.png" alt-text="Screenshot that shows Open actions menu, choose New folder.":::

1. Enter the name for the folder. If you want to change the location of the folder, select it from the Folder drop down menu.  

	Here we name the folder *Service Delivery* with the intention that it gets used by the Service Delivery team.

    ::: image type="content" source="media/permissions/new-folder-dialog.png" alt-text="Screenshot of New folder dialog, Azure DevOps Server 2019.":::

1. To set permissions for the folder you just added, choose the **More actions** icon :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: and select **Security**.

1. Change the permissions so that the team member or group can contribute and manage permissions for the folder. Choose the **Add...** menu to add a user identity or group. 

   Here we add the Service Delivery team and grant them permissions to create and manage permissions to all queries and folders under the Service Delivery folder.  

    ::: image type="content" source="media/permissions/permissions-dialog-query-folder-service-delivery.png" alt-text="Screenshot of Permissions dialog for a query folder, Azure DevOps Server 2019.":::


   **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

1. (Optional) Turn off inheritance. Default is **On**. By turning off inheritance for a folder, you disallow inheritance of permissions that exist up the chain of query folders. For more information, see [Permissions, Inheritance](../../organizations/security/about-permissions.md#permission-inheritance).  
  
::: moniker-end


## Set permissions on a shared query 

To keep anyone else from modifying a shared query that you create, you may want to set permissions on a specific query. You can set permissions by opening the permissions dialog for the specific query.  

::: moniker range="azure-devops"

1. Choose the **More actions** icon :::image type="icon" source="../media/icons/more-actions.png" border="false"::: and select **Security**.  

    :::image type="content" source="media/permissions/select-query-security-new-boards-hubs.png" alt-text="Screenshot of Open query permissions context menu.":::

1. Change the permissions so that a team member or group can't edit, delete, or change permissions for the query.  

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

With queries, you cannot only list work items, you can create status and trend charts and add them to dashboards. You can learn more about permissions and working with queries from these resources: 

- [Manage queries and query folders](organize-queries.md)  
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)  
- [Add a chart to a dashboard](../../report/dashboards/add-charts-to-dashboard.md)
- [Dashboards](../../report/dashboards/dashboards.md) 
