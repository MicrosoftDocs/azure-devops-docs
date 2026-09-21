---
title: Set Permissions for Work Tracking
titleSuffix: Azure DevOps
description: Learn how to grant or restrict Azure Boards permissions for paths, queries, tags, Delivery Plans, testing, and inherited processes.
ms.custom: boards-permissions, linked-from-support, engagement-fy23
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 09/18/2026
--- 

# Set work tracking permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this article to grant or restrict access to Azure Boards tasks at the object, project, or collection level. [Choose a permission scope](#business-workflows) to find the requirements and instructions for your task.

For routine work tracking access, [add users to the project's Contributors group](change-project-level-permissions.md). To review the permissions assigned to built-in groups, see [Default permissions and access levels for Azure Boards](../../boards/get-started/permissions-access-boards.md). To restrict fields or state transitions instead of access to features or objects, [use a custom rule](#use-custom-rules).

## Prerequisites
::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Permissions**| Member of the [**Project Administrators**](change-project-level-permissions.md#add-members-to-the-project-administrators-group) group or explicit permission to manage the work tracking area as described in this article.  | 
 
::: moniker-end
::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Permissions**| Member of the [**Project Collection Administrators**](change-organization-collection-level-permissions.md) group or have explicit permissions to edit a collection process.  | 

::: moniker-end

<a id="business-workflows"></a> 

## Choose the permission scope

Use this table to find the scope, requirements, and instructions for your task.

| Task | Scope | Requirements | Instructions |
|------|-------|--------------|--------------|
| Configure team settings and resources | Team administrator | Team administrator or member of **Project Administrators** | [Add a team administrator](../../organizations/settings/add-team-administrator.md) |
| Manage work items or child nodes under an area or iteration path | Object | Applicable area or iteration path permissions set to **Allow** | [Set area and iteration path permissions](#set-permissions-area-path) |
| Manage queries or query folders | Object | At least **Basic** access and the applicable query permissions | [Set query and query-folder permissions](#work-item-queries) |
| Create work item tags | Project | At least **Basic** access and **Create tag definition** set to **Allow** | [Set work item tag permissions](#tags) |
| Manage a Delivery Plan | Object | Plan creator, administrator, or applicable plan permissions | [Set Delivery Plan permissions](#plan-permissions) |
| Move or permanently delete work items | Project | Applicable project-level permission set to **Allow** | [Set move and permanent-delete permissions](#move-delete-permissions) |
| Manage test plans and test suites | Area path and access level | Eligible Test Plans access and applicable area path permissions | [Set test plan and test suite permissions](#manage-test-artifacts) |
| Manage inherited processes | Collection or process | Member of **Project Collection Administrators** or applicable process permissions | [Set inherited process permissions](#process-permissions) |

For a consolidated reference, see [Default permissions quick reference](permissions-access.md). For testing-specific access and defaults, see [Manual test access and permissions](../../test/manual-test-permissions.md).

<a id="set-permissions-area-path"></a>
<a id="create-child-nodes-modify-work-items-under-an-area-or-iteration-path"></a>

## Set area and iteration path permissions

Area and iteration path permissions control who can view or edit work items and who can manage child nodes. Set these permissions for a user or security group on the applicable path.

> [!NOTE]
> Permission to create or edit paths doesn't grant permission to assign paths to a team. To configure team paths, be a [team administrator](../settings/add-team-administrator.md) or a member of [**Project Administrators**](change-project-level-permissions.md).
 
::: moniker range="azure-devops" 

To set permissions for an area or iteration path:

1. Select **Project settings** > **Project configuration** > **Areas** or **Iterations**.

   :::image type="content" source="../settings/media/areas/open-project-work-areas-settings-vert.png" alt-text="Screenshot of the Areas page in Project configuration."::: 

1. Open **More actions** for the node that you want to manage, and then select **Security**.

   :::image type="content" source="media/work-tracking/open-area-node-permissions.png" alt-text="Screenshot of the Security option for an area path." lightbox="media/work-tracking/open-area-node-permissions.png"::: 

1. Select the user or group. To add an identity, enter its name in the search box.

1. Set the permissions required for the task to **Allow** or **Deny**. For example, use **View work items in this node** and **Edit work items in this node** to control access to work items, or **Create child nodes** to delegate path creation.

   :::image type="content" source="media/work-tracking/set-area-node-permissions-with-work-item-comments.png" alt-text="Screenshot of denied work item permissions for an area path."::: 

   For information about explicit and inherited permission states, see [About permissions, access, and security groups](about-permissions.md).

1. (Optional) Turn off **Inheritance** to stop inheriting permission changes from the parent node.

1. Close the dialog. Reopen **Security**, select the user or group, and confirm that the intended permission states appear.

::: moniker-end

::: moniker range="< azure-devops"

To set permissions for an area or iteration path:

1. Select **Project settings** > **Project configuration** > **Areas** or **Iterations**.

   :::image type="content" source="../settings/media/areas/open-project-work-areas-settings-vert.png" alt-text="Screenshot of the Areas page in Project configuration for Azure DevOps Server."::: 

1. Open **More actions** for the node that you want to manage, and then select **Security**.

   :::image type="content" source="media/work-tracking/set-permissions-area-node-open.png" alt-text="Screenshot of the Security option for an area path in Azure DevOps Server."::: 

1. Select the user or group. To add an identity, enter its name in the search box.

1. Set the permissions required for the task to **Allow** or **Deny**.

   :::image type="content" source="media/work-tracking/set-permissions-area-node-dialog.png" alt-text="Screenshot of denied permissions for an area path in Azure DevOps Server."::: 
 
   For information about explicit and inherited permission states, see [About permissions, access, and security groups](about-permissions.md).

1. (Optional) Turn off **Inheritance** to stop inheriting permission changes from the parent node.

1. Close the dialog. Reopen **Security**, select the user or group, and confirm that the intended permission states appear.

::: moniker-end

<a id="use-custom-rules"></a>

## Use a custom rule for field or state restrictions

Custom rules don't grant or deny access to features or objects. Use them to control work item creation, field behavior, or state transitions for specific users or groups.

Custom rules can't set or clear **Area Path** or **Iteration Path**. For supported conditions, actions, and restrictions, see [Rules and rule evaluation](../settings/work/rule-reference.md) and [Sample custom rule scenarios](../settings/work/rule-samples.md).

Parent-state automation is a separate team backlog feature. For more information, see [Automate work item state transitions](../../boards/backlogs/automate-work-item-state-transitions.md).

<a id="work-item-queries"></a>

## Set query and query-folder permissions

To create or edit a shared query, you need at least **Basic** access and **Contribute** set to **Allow** for the shared query folder. To change permissions on a query or folder, you need **Manage Permissions** set to **Allow** for that folder.

Follow the steps in [Set permissions on queries and query folders](../../boards/queries/set-query-permissions.md). After you save the change, reopen the folder's **Security** dialog and select the user or group to verify the permissions.

<a id="tags"></a> 

## Set work item tag permissions

To create a tag, you need at least **Basic** access and the project-level **Create tag definition** permission set to **Allow**. The **Contributors** group has this permission by default. Denying this permission prevents users from creating tag definitions, but it doesn't prevent them from assigning existing tags to work items that they can edit.

1. Open the project permission page as described in [Change project-level permissions](change-project-level-permissions.md#change-permissions-for-a-group).
1. Select the user or group.
1. Set **Create tag definition** to **Allow** or **Deny**.
1. Reselect the user or group and confirm that the intended permission state appears.

<a id="configure-plan-permissions">  </a>
<a id="plan-permissions">  </a>
<a id="manage-permissions-for-delivery-plans"></a>

## Set Delivery Plan permissions

Delivery Plans are secured objects within a project. Plan creators and members of **Project Administrators** or **Project Collection Administrators** can edit, delete, and manage permissions for a plan. Other users need explicit permissions through the plan's **Security** dialog. Users with **Stakeholder** access can view plans but can't add or edit them.

::: moniker range=">= azure-devops-2022"

1. Open **Boards** > **Delivery Plans**.

   :::image type="content" source="../../boards/plans/media/plans/open-plans.png" alt-text="Screenshot showing sequence of buttons for selection to open Delivery Plans.":::

1. Open :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** for the plan, and then select **Security**.

   :::image type="content" source="../../boards/plans/media/permissions/open-security.png" alt-text="Screenshot showing the Permissions dialog for the plan.":::

1. Add or select the user or group whose access you want to change.

1. Set **View**, **Edit**, **Delete**, or **Manage** to **Allow** or **Deny**. **Manage** controls whether the user can change permissions for the plan.

   :::image type="content" source="../../boards/plans/media/permissions/permissions-dialog-change-s186.png" alt-text="Screenshot showing example permissions dialog for delivery plan.":::

1. Close the dialog. Reopen **Security**, select the user or group, and confirm that the intended permission states appear.

::: moniker-end 

<a id="move-delete-permissions"></a>
<a id="move-or-permanently-delete-work-items"></a>

::: moniker range="<=azure-devops"

## Set move and permanent-delete permissions

By default, members of **Contributors** and **Project Administrators** can change work item types and move deleted work items to the **Recycle Bin**. Other operations have additional requirements:

- To delete and restore work items, have at least **Basic** access and **Delete and restore work items** set to **Allow**.
- To move work items to another project, be a member of **Project Administrators** or have **Move work items out of this project** set to **Allow**. This permission isn't granted to **Contributors** by default, and the feature isn't available to users with **Stakeholder** access.
- To permanently delete work items, have **Permanently delete work items** set to **Allow**. This permission is granted to **Project Administrators** by default.

1. Open the project permission page as described in [Change project-level permissions](change-project-level-permissions.md#change-permissions-for-a-group).
1. Select the user or group.
1. Set **Move work items out of this project** or **Permanently delete work items** to **Allow** or **Deny**.

   :::image type="content" source="media/set-permissions-project-level-dialog.png" alt-text="Screenshot of project-level move and permanent-delete permissions." lightbox="media/set-permissions-project-level-dialog.png":::

1. Reselect the user or group and confirm that the intended permission state appears.

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]
> In Azure DevOps Server, moving work items also requires the [Inheritance process model](../settings/work/inheritance-process-model.md) and a disabled data warehouse. For complete requirements, see [Move work items and change work item type](../../boards/backlogs/move-change-type.md).

::: moniker-end

::: moniker range="<=azure-devops"

For instructions to perform these operations, see [Move work items and change work item type](../../boards/backlogs/move-change-type.md) and [Remove, delete, or restore work items](../../boards/backlogs/remove-delete-work-items.md).

::: moniker-end

<a id="delete-test-permissions"></a>
<a id="manage-test-artifacts"></a>
<a id="manage-test-plans-and-test-suites"></a>

## Set test plan and test suite permissions

To use all Azure Test Plans features, have **Basic + Test Plans** access or an eligible Visual Studio Enterprise, Visual Studio Test Professional, or MSDN Platforms subscription. Test artifacts also require project-level and area path permissions. For complete requirements, see [Manual test access and permissions](../../test/manual-test-permissions.md).

1. Open the [**Security** dialog for the applicable area path](#set-permissions-area-path).

   :::image type="content" source="media/delete-test-plans-open-area-permissions.png" alt-text="Screenshot of the Security dialog for an area path."::: 

1. Select the user or group.

1. Set **Manage test plans** and **Manage test suites** to **Allow**.

   :::image type="content" source="media/manage-test-plans-test-suites-access.png" alt-text="Screenshot of test plan and test suite permissions set to Allow.":::

1. Close the dialog. Reopen **Security**, select the user or group, and confirm that both permissions are set to **Allow**.

Users with **Basic** access can execute tests, but they can't create or manage test plans and suites. With the required permissions, they can permanently delete only orphaned test cases.

::: moniker range="azure-devops"

Deleted test plans and test suites remain recoverable for 14 days. For recovery steps and limitations, see [Delete test artifacts](../../boards/backlogs/delete-test-artifacts.md#restore-deleted-artifacts).

::: moniker-end

::: moniker range="< azure-devops"

Deleted test artifacts can't be restored in Azure DevOps Server. For details, see [Delete test artifacts](../../boards/backlogs/delete-test-artifacts.md).

::: moniker-end

<a id="process-permissions"></a>
<a id="customize-an-inherited-process"></a>

::: moniker range="<=azure-devops"

## Set inherited process permissions

By default, only **Project Collection Administrators** can create, edit, and delete inherited processes. These administrators can delegate the **Create process**, **Delete process**, or **Edit process** permission at the collection level. For more information, see [Change collection-level permissions](change-organization-collection-level-permissions.md).

To let a user or group customize a specific inherited process:

::: moniker-end  

::: moniker range="azure-devops"  
> [!NOTE]  
> Users added to the **Project-Scoped Users** group can't access process settings if the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization. For more information including important security-related callouts, see [Manage your organization, Limit user visibility](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 
::: moniker-end  

::: moniker range="<=azure-devops"

1. Open **Organization settings** > **Process**.

1. Open **More actions** for the inherited process, and then select **Security**. For more information about opening process settings, see [Customize a project using an inherited process](../settings/work/customize-process.md).

   :::image type="content" source="media/process/mprocess-open-security-dialog-inherited.png" alt-text="Screenshot of the Security option for an inherited process.":::

1. Search for and select the user or group.

1. Set **Edit process** to **Allow**. Set other process permissions only when the identity needs those capabilities.

   :::image type="content" source="media/process/mprocess-security-dialog-inherited.png" alt-text="Screenshot of permissions for an inherited process."::: 

1. Close the dialog. Reopen **Security**, select the user or group, and confirm that **Edit process** is set to **Allow**.

::: moniker-end

## Troubleshoot permission changes

- If a **Security** option or permission control isn't available, confirm that you have permission to manage security for that object or scope.
- If an action remains blocked after you set a permission to **Allow**, check the user's access level and trace their effective permissions. An explicit **Deny** inherited through another group can block the action.
- If a recently changed permission isn't reflected, refresh or reevaluate the user's permissions.

For diagnostic steps, see [Troubleshoot access and permission issues](troubleshoot-permissions.md).

## Related content

- [Default permissions and access levels for Azure Boards](../../boards/get-started/permissions-access-boards.md)
- [Restrict modification of work items or fields](restrict-access.md#restrict-modifications-wits)
- [Change project-level permissions](change-project-level-permissions.md)
- [Set object-level permissions](set-object-level-permissions.md)
- [Rules and rule evaluation](../settings/work/rule-reference.md)
