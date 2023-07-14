---
title: Set permissions for work tracking
titleSuffix: Azure DevOps
description: How to grant or restrict access to work tracking tasks by setting object or project-level permissions for Azure DevOps
ms.custom: boards-permissions, linked-from-support, engagement-fy23
ms.subservice: azure-devops-security
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 05/24/2023
--- 

# Set work tracking permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can grant or restrict access to various work tracking features by granting users or groups specific permissions for an object, project, or collection. Or, you can specify custom rules for a process or project that apply to users or groups that may restrict or require users to perform a select action. In general, you want to add users to a project's Contributors group to provide access to most features as listed in [Permissions and access for work tracking](permissions-access-work-tracking.md).

::: moniker range="azure-devops"

> [!NOTE]
> For public projects, Stakeholder access gives users greater access to work tracking features and full access to Azure Pipelines. To learn more, see [Stakeholder access quick reference](stakeholder-access.md).

::: moniker-end

## Prerequisites  

- To set work tracking permissions, you must be a member of the [**Project Administrators** group](change-project-level-permissions.md), or have explicit permissions to manage the work tracking area as described in this article. 
- To set process permissions, you must be a member of the [**Project Collection Administrators** group](change-organization-collection-level-permissions.md), or have explicit permissions to edit a collection process.  

<a id="business-workflows" /> 

## Support business workflows through custom rules  

Custom rules don't control permissions, but they do affect the permissions of a user at run-time to modify a work item or set the value of a work item field. Azure Boards supports the following work tracking customizations that support business workflows. 

- Apply select rules upon work item creation, state change, specified state. For example, make a field required or read-only.
- Apply select rules when a field value is empty, set to a specific value, or was changed or not changed to a value. For example, clear or set the value of a field, or copy a field value to another field or hide a field.
- Restrict the transition to a specific state when moving from a specified state. For example, reassign a work item based on state change, or state transitions of parent work items based on state changes made to their child work items. 
- Apply select rules based on user or group membership of the user modifying a work item. For example, you can specify rules that effectively restrict a group of users from creating a work item, transitioning a work item to a closed or completed state, or changing the value of a field.  

Some restrictions are placed on applying custom rules to system fields. For example, you can't specify rules that set or clear the value for **Area Path** or **Iteration Path** as these are system fields. To learn more about custom rules you can define and system field restrictions on custom rules, see [Rules and rule evaluation](../settings/work/rule-reference.md). For sample scenarios that define custom rules, see [Sample rule scenarios](../settings/work/rule-samples.md).   

## Work tracking roles and permission levels

The following table summarizes the different permissions you can set at the object, project, or collection level. The team administrator role provides access to add and modify team resources. 

---
:::row:::
   :::column span="1":::
      **Role or permission level**
   :::column-end:::
   :::column span="2":::
      **Functional areas set**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Team administrator role**<br/> 
      To add a user to the team administrator role, see [Add a team administrator](../../organizations/settings/add-team-administrator.md).
   :::column-end:::
   :::column span="2":::
      - [Manage teams and configure team tools](../settings/manage-teams.md)  
      - [Define and edit team dashboards](../../report/dashboards/dashboards.md)  
      - [Add and manage team-level work item templates](../../boards/backlogs/work-item-template.md) 
      - [Add team administrators](../settings/add-team-administrator.md) 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Object-level permissions**
   :::column-end:::
   :::column span="2":::
      - [Modify work items under an area path](#set-permissions-area-path) 
      - [Create and edit nodes under an area path or iteration path](#set-permissions-area-path) 
      - [Define and edit queries or query folders](#work-item-queries) 
      - [Define and edit Delivery Plans](set-permissions-access-work-tracking.md#edit-or-manage-permissions-for-delivery-plans)

   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Project-level permissions**
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2020"
      - [Create work item tags](../../boards/queries/add-tags-to-work-items.md) 
      - [Move work items out of a project](#move-delete-permissions) 
      - [Permanently delete work items](#move-delete-permissions) 
      - [Edit shared work item queries](../../boards/queries/set-query-permissions.md)
      - [Add teams and team administrators](../settings/add-team-administrator.md))
      - [Edit project-level permissions](change-project-level-permissions.md)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      - [Create work item tags](../../boards/queries/add-tags-to-work-items.md) 
      - [Permanently delete work items](#move-delete-permissions) 
      - [Edit shared work item queries](../../boards/queries/set-query-permissions.md)
      - [Add teams and team administrators](../settings/add-team-administrator.md))
      - [Edit project-level permissions](change-project-level-permissions.md)
      ::: moniker-end
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Project collection-level permissions**
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2019"
      - [Create, delete, or edit a process (Inheritance process model)](#process-permissions)  
      - [Delete field from account (Inheritance process model)](change-organization-collection-level-permissions.md) 
      - [Manage process permissions (Inheritance process model)](change-organization-collection-level-permissions.md) 
      - [Edit collection level permissions](change-organization-collection-level-permissions.md) <br/>Project collection-level permissions include all permissions you can set at the collection-level.
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      - [Edit collection level permissions](change-organization-collection-level-permissions.md) <br/>Project collection-level permissions include all permissions you can set at the collection-level.
      ::: moniker-end
   :::column-end:::
:::row-end:::
---
  
> [!NOTE]
> If you haven't defined the group yet whose permissions you want to set, then first create the group, usually at the project level. To learn how, see [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md). 
 
<a name="set-permissions-area-path" /> 

## Create child nodes, modify work items under an area or iteration path   

Area path permissions let you grant or restrict access to edit or modify work items, test cases, or test plans assigned to those areas. You can restrict access to users or groups. You can also set permissions for who can add or modify areas or iterations for the project.  

> [!NOTE]
> Project members granted permissions to create or edit **Area Paths** or **Iteration Paths** is separate from the permissions that control configuring team **Area Paths** and **Iteration Paths**. To configure team settings, you must be added to the [team administrator role](../settings/add-team-administrator.md), or be a member of the [**Project Administrators** group](change-project-level-permissions.md).
* 
::: moniker range="azure-devops" 

Define both areas and iterations for a project from the **Project Settings** > **Project configuration**. 

1. Choose (1) **Project Settings**, then choose (2) **Project configuration** under **Boards**, and then choose (3) **Areas** or **Iterations** to modify Area Paths or Iteration Paths. 

   :::image type="content" source="../settings/media/areas/open-project-work-areas-settings-vert.png" alt-text="Screenshot showing opening Project Settings, Work, Project Configuration."::: 

2. Choose the **...** context menu for the node you want to manage and select **Security**.  

    :::image type="content" source="media/work-tracking/open-area-node-permissions.png" alt-text="Screenshot of context menu for Area Path, choose Security."::: 

3. Select the group or project member, and then change the permission settings. To add a user or group, enter their name in the search box.

    For example, here we added the *Disallow Access Group*, and disallowed members of this group the ability to view, modify, or edit work items in the **Account Management** area path.   

    :::image type="content" source="media/work-tracking/set-area-node-permissions-with-work-item-comments.png" alt-text="Screenshot of Area Path node Security, selected group, and setting Deny permissions. "::: 

    You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three other states. To learn more, see [Get started with permissions, access, and security groups](about-permissions.md). 

4. (Optional) Choose the **Inheritance** slider to disable inheritance. Disabling **Inheritance** persists all inherited permissions as explicit Access Control Entries (ACEs). 

5. When you're done, close the dialog. Your changes are automatically saved. 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops" 

You define both areas and iterations for a project from the **Project Settings>Project configuration**. 

1. Choose (1) **Project Settings**, then choose (2) **Project configuration** under **Boards**, and then choose (3) **Areas**.   

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing opening Project Settings>Work>Project Configuration for on-premises server.](../settings/media/areas/open-project-work-areas-settings-vert.png)   

1. Choose the **...** context menu for the node you want to manage and select **Security**.  

    :::image type="content" source="media/work-tracking/set-permissions-area-node-open.png" alt-text="Screenshot of context menu for Area Path, choose Security, Azure DevOps Server 2020."::: 

1. Select the group or team member, and then change the permission settings.  To add a user or group, enter their name in the search box.

    For example, here we've added the *Disallow Access Group*, and disallowed members of this group the ability to view, modify, or edit work items in the Customer Service area path.

    :::image type="content" source="media/work-tracking/set-permissions-area-node-dialog.png" alt-text="Screenshot of Area Path node Security, selected group, and setting Deny permissions, Azure DevOps Server 2022 and earlier versions. "::: 
 
    You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three other states. To learn more, see [Get started with permissions, access, and security groups](about-permissions.md). 

1. (Optional) Toggle **Inheritance** to **Off** to disable inheritance. Disabling **Inheritance** persists all inherited permissions as explicit Access Control Entries (ACEs). 

2. When you're done, close the dialog. Your changes are automatically saved.  

::: moniker-end

::: moniker range="tfs-2018"  

1. From the web portal for the project, choose the :::image type="icon" source="../../media/icons/gear_icon.png" border="false"::: gear icon.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing opening Web portal, Open Admin context, project level for TFS 2018.](../settings/media/areas/modify-areas-its-open-admin-context-ts.png)

    If you're currently working from a team context, then hover over the ![gear icon](../../media/icons/gear_icon.png) and choose **Project settings**.  

    > [!div class="mx-imgBorder"]
    > ![Screenshot showing Open Project Settings for TFS 2018.](../../media/settings/open-project-settings-horz.png)  

2. Choose **Work** and then **Areas**.  

1. Choose the ... context menu for the node you want to manage and select **Security**.  

    ![Screenshot showing context menu, select Security for TFS 2018.](media/work-tracking/set-permissions-area-node-open.png)

::: moniker-end   


<a id="work-item-queries"></a>

## Set permissions on queries or query folders

You can specify who can add or edit query folders or queries at the object-level. 
To manage permissions for a query or query folder, you must be the creator of the query or folder, a member of the Project Administrators or Project Collection Administrators group, or granted explicit access through the object's **Security** dialog. 

**Query folder Permissions dialog**

::: moniker range="azure-devops"
:::image type="content" source="../../boards/queries/media/permissions/permissions-dialog-query-folder-azure-devops.png" alt-text="Screenshot of Permissions dialog for a query folder.":::
::: moniker-end

::: moniker range="< azure-devops"

> [!div class="mx-imgBorder"]  
> ![Screenshot of Permissions dialog for a query folder, Azure DevOps Server 2022 and earlier versions.](../../boards/queries/media/permissions/permissions-dialog-query-folder.png)
::: moniker-end

To learn more about queries, see [Create managed queries to list, update, or chart work items](../../boards/queries/about-managed-queries.md).

<a id="tags" /> 


## Set permissions on work item tags 

By default, all users of the Contributors group can create and add tags to work items. To set permissions for a group or user to restrict this ability, you can set the **Create tag definition** to **Deny** at the project-level. To learn how, see [Change the permission level for a project-level group](change-project-level-permissions.md). 


<a id="configure-plan-permissions">  </a>
<a id="plan-permissions">  </a>

## Manage permissions for Delivery Plans 

Delivery Plans are an object within a project. You manage plan permissions for each plan similar to the way you manage permissions for shared queries or query folders. The creator of a Delivery Plan and all members of the Project Collection Administrators and Project Administrators groups have permissions to edit, manage, and delete plans. 

To edit the permissions for a Delivery Plan, you must be the creator of the plan, a member of the Project Administrators or Project Collection Administrators group, or granted explicit permission through the plan's **Security** dialog.

::: moniker range=">= azure-devops-2022"

1. Open **Boards** > **Delivery Plans**. 

   :::image type="content" source="../../boards/plans/media/plans/open-plans.png" alt-text="Screenshot showing sequence of buttons for selection to open Delivery Plans.":::

2. To grant permissions to a group or user to manage or edit a specific plan, choose  :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** to open the **Security** dialog for the plan.  

   :::image type="content" source="../../boards/plans/media/permissions/open-security.png" alt-text="Screenshot showing the Permissions dialog for the plan.":::

3. Add a user, team group, or other security group who you want to grant permissions to or restrict access. For details, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md). By default, nonadministrators can't delete or edit a plan. 

4. With the user or group selected, set the permission you want them to have to **Allow**. **Manage** set to **Allow** enables the user to manage permissions for the plan.

	For example, here we grant permission to Cristina to edit the plan.

   :::image type="content" source="../../boards/plans/media/permissions/permissions-dialog-change-s186.png" alt-text="Screenshot showing permissions dialog for delivery plan.":::

5. When you're done, close the dialog. The changes are automatically saved.  

::: moniker-end 

::: moniker range=">= azure-devops-2019 < azure-devops-2022"

1. Open **Boards>Plans**. For details, see [Review team delivery plans](../../boards/extensions/delivery-plans.md).  

2. To grant permissions to a group or user to manage or edit a specific plan, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon to open the **Security** dialog for the plan.  

	:::image type="content" source="../../boards/plans/media/permissions/open-plans-security.png" alt-text="Screenshot showing the Security button for plan permissions, highlighted by a red box.":::    

3. Add a user, team group, or other security group who you want to grant permissions to or restrict access. For details, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md). By default, nonadministrators can't delete or edit a plan. 

4. With the user or group selected, set the permission you want them to have to **Allow**. **Manage** set to **Allow** enables the user to manage permissions for the plan.

	For example, here we grant permission to Raisa to edit the plan.
   
	:::image type="content" source="../../boards/plans/media/permissions/permissions-plans-dialog.png" alt-text="Screenshot showing the permissions dialog for a delivery plan.":::

5. Choose **Save changes** when done. 

::: moniker-end 

::: moniker range="tfs-2018"  

1. Select  **Work** > **Plans**. For more information, see [Review team delivery plans](../../boards/plans/review-team-plans.md).  

2. To grant permissions to a group or user to manage or edit a specific plan, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon to open the **Security** dialog for the plan.  

   :::image type="content" source="../../boards/plans/media/permissions/open-plans-security.png" alt-text="Screenshot showing the Security button for plan permissions, highlighted by a red box.":::   

3. Add a user, team group, or other security group who you want to grant permissions to or restrict access. (For details, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md)). By default, nonadministrators can't delete or edit a plan. 

4. With the user or group selected, set the permission you want them to have to **Allow**. 

	For example, here we grant permission to Raisa to edit the plan.
   
   :::image type="content" source="../../boards/plans/media/permissions/permissions-plans-dialog.png" alt-text="Screenshot showing the permissions dialog for a delivery plan.":::

5. Choose **Save changes** when you're done. 

::: moniker-end  

<a id="move-delete-permissions"></a>

::: moniker range=">= azure-devops-2019"  

## Move or permanently delete work items 

By default, Project Administrators and Contributors can change the work item type and delete work items by moving them to the **Recycle Bin**. Only Project Administrators can permanently delete work items and test artifacts. Project admins can grant permissions to other team members as needed. 

For example, as a project admin you can grant a user, team group, or other group you've created to have these permissions. Open the Security page for the project and choose the user or group you want to grant permissions. To learn how to access project-level **Security**, see [Change project-level permissions](../security/change-project-level-permissions.md).

> [!NOTE]   
> The **Move work items out of this project** permission requires the project uses the Inherited process model. 

In this example, we grant members assigned to the team administrator role, who belong to the Team Admin groups, permissions to move work items to another project and to permanently delete work items.   

:::image type="content" source="media/set-permissions-project-level-dialog.png" alt-text="Screenshot showing setting project-level permissions for a custom security group.":::

::: moniker-end    

<a id="delete-test-permissions"></a>
<a id="manage-test-artifacts"></a>

## Manage test plans and test suites

In addition to the project-level permissions set in the previous section, team members need permissions to manage test artifacts that are set for an area path. 

[Open the **Security** page for area paths](#set-permissions-area-path) and choose the user or group you want to grant permissions. 

:::image type="content" source="media/delete-test-plans-open-area-permissions.png" alt-text="Screenshot showing opened Area path permissions for project."::: 

Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

:::image type="content" source="media/manage-test-plans-test-suites-access.png" alt-text="Screenshot showing access set to Allow for test plans and suites.":::

To have full access to the Test feature set, your [access level must be set to Basic + Test Plans](change-access-levels.md). Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases.  

<a id="process-permissions" />

::: moniker range=">= azure-devops-2019"  

## Customize an inherited process 

By default, only Project Collection Administrators can create and edit processes. However, these admins can grant permissions to other team members by explicitly setting the **Create process**, **Delete process**, or **Edit process** permissions at the collection level for a specific user. 

To customize a process, you need to grant **Edit process**  permissions to a user account for the specific process. 

::: moniker-end  

::: moniker range="azure-devops"  

> [!NOTE]  
> Users added to the **Project-Scoped Users** group won't be able to access Process settings if the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization. For more information including important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker-end  

::: moniker range=">= azure-devops-2019"  

1. Open the &hellip; context menu for the inherited process and choose **Security**.  To open this page, see [Customize a project using an inherited process](../settings/work/customize-process.md).   

    :::image type="content" source="media/process/mprocess-open-security-dialog-inherited.png" alt-text="Screenshot showing open Process, Open security dialog.":::

2. Add the account name of the person you want to grant permissions to, set the permissions to **Allow** that you want them to have, and then you can exit the page and it automatically saves. 

    Here we add Christie Church and allow Christie to edit the process.  

    :::image type="content" source="media/process/mprocess-security-dialog-inherited.png" alt-text="Screenshot showing permissions for a process dialog."::: 

> [!NOTE]     
> Each process is a securable unit and has individual access control lists (ACLs) that govern creating, editing, and deleting inherited processes.  At the collection level, project collection administrators can choose which processes can be inherited from and by whom. When you create a new inherited process, the process creator as well as project collection administrators have full control of the process and can also set individual ACLs for other users and groups to edit and delete the process.

::: moniker-end

::: moniker range="<= azure-devops-2019"  

## More options for restricting access to work items   

For more information about options for customizing work item types to support restrictions, see [Restrict access, Restrict modification of work items based on a user or group](restrict-access.md#restrict-modifications-wits).

::: moniker-end

## Related articles 

- [Grant or restrict access](restrict-access.md)  
- [Rules and rule evaluation](../settings/work/rule-reference.md)  
- [Permissions and access for work tracking](permissions-access-work-tracking.md) 
- [Permissions and groups reference](permissions.md)
- [Delete test artifacts](../../boards/backlogs/delete-test-artifacts.md#prerequisites)
