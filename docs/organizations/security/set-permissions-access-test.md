---
title: Set permissions and access for manual testing
titleSuffix: Azure DevOps
description: How to grant or restrict access to test plans, test suites, test cases, and other test-related features.
ms.subservice: azure-devops-security
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/17/2024
--- 

# Set permissions and access for testing

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To fully utilize Azure Test Plans, it's crucial to understand and configure the necessary permissions and access levels. This article outlines the steps, so you can do the following tasks:

- Grant access to manual testing features
- Manage test plans and test suites
- Set permissions for creating and deleting test artifacts

By following these guidelines, you can ensure that your team has the appropriate access to efficiently manage and execute test plans.

To manage access to manual test features, you can grant specific permissions to users or groups at the **object** or **project** level for the following tasks: 

- **Object-level (Area path):**  
	- **Edit work items in this node**: Add or edit test-specific work items like test plans, test suites, and test cases. 
	- **Manage test plans**: Modify test plan properties, such as build and test settings. 
	- **Manage test suites**: Create, delete, and modify test suites.
- **Project-level:** 
	- **Manage test configurations**: [Add or edit test configurations and variables](../../test/test-different-configurations.md). 
	- **Manage test environments**: [Adjust test plan settings](../../test/run-automated-tests-from-test-hub.md).
	- **[Create test runs](../../test/run-manual-tests.md)**.
	- **[Delete and restore test-specific work items](../../boards/backlogs/remove-delete-work-items.md)**.
	- **[Delete test runs](../../boards/backlogs/delete-test-artifacts.md)**.

[Test controllers](/visualstudio/test/configure-test-agents-and-controllers-for-load-tests), used for load tests, are managed at the organization or collection level. For more information, see [Install test agents and test controllers](/visualstudio/test/lab-management/install-configure-test-agents).   
 
## Prerequisites 

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Access levels**| **[Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)** or specific subscriptions like **[Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)**, **[Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)**, or **[MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)**.|
| **Permissions**| - To manage project or object-level test-related permissions or to permanently delete test artifacts: Member of the **Project Administrators** security group.<br>- To manage access levels or organization-level permissions: Member of the **Project Collection Administrators** security group or **Edit instance-level information** set to **Allow**.        | 

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Access levels**|member of the **Azure DevOps Server Administrators** security group. |
| **Permissions**| - To manage project or object-level test-related permissions or to permanently delete test artifacts: Member of the **Project Administrators** security group.<br>- To manage access levels or organization-level permissions: Member of the **Project Collection Administrators** security group or **Edit instance-level information** set to **Allow**.        | 


::: moniker-end

For more information, see [About access levels](access-levels.md) and [Change access levels for users or groups](change-access-levels.md). 

<a id="license"></a>

## Grant access to manual testing features 

For full access to Test Plans, users must have [**Basic + Test Plans**](change-access-levels.md) access level. Users with **Basic** access and permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases.  

<a id="manage-test-artifacts"></a>

## Manage test plans and test suites under an area path 

Do the following steps to grant permissions for managing test artifacts at the area path level.

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
2. Select **Project settings** > **Project configuration**.
3. Select **Areas** > **...**(ellipses) > **Security**. 

   :::image type="content" source="media/delete-test-plans-open-area-permissions.png" alt-text="Screenshot showing opened Area path permissions for project."::: 

4. Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

   :::image type="content" source="media/manage-test-plans-test-suites-access.png" alt-text="Screenshot showing access set to Allow for test plans and suites.":::

## Set permissions for managing test artifacts 

When it comes to testing artifacts like test plans, test suites, and test cases, the process for deleting them is distinct from deleting nontest work items.

Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases. That is, they can delete test cases created from **Work** that aren't linked to any test plans or test suites.

> [!IMPORTANT]  
> When you delete test artifacts like test plans, test suites, and test cases, note the following information:
> - **Permanent deletion:** We only support permanent deletion of these artifacts.
> - **No recycle bin:** Deleted test artifacts don’t appear in the recycle bin and you can't restore them.
> - **Associated child items:** Deletion affects associated child items, including child test suites, test points across all configurations, testers (the underlying test case work item remains unaffected), test results history, and other related history.
> - **Removal from TCM data store:** The deleted test artifact is removed from the test case management (TCM) data store, and the underlying work item is deleted.
> - **Child item deletion:** A job runs to delete all child items both from the TCM side and the underlying work items. This process may up to a few minutes depending on the number of artifacts being deleted.
> - **Irreversible deletion:** All information in the work item tracking data store and TCM data store is permanently deleted and cannot be reactivated or restored.

::: moniker range="azure-devops"

> [!NOTE]   
> To turn on the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

Do the following steps to set permissions for managing test artifacts.

#### [Preview page](#tab/preview-page) 

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
2. Select **Project settings** > **Permissions**.
   
	![Screenshot showing Choose Project settings > Permissions.](../settings/media/shared/open-project-settings-permissions-preview.png)

3. Select a user or group.
4. Select from the dropdown menus to change the permissions for each item.

   In the following example, we grant users assigned to the Team Admin group permissions to view test runs and manage test configurations and environments.

   :::image type="content" source="media/test-permissions/set-project-level-test-permissions-new-ui.png" alt-text="Screenshot of Set project-level test permissions for a custom group, Team Admin.":::

   Updated permissions automatically save.

#### [Current page](#tab/current-page) 

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
2. Select **Project settings** > **Permissions**.
3. Select a user or group.
4. Select from the dropdown menus to change the permissions for each item.

   In the following example, we grant users assigned to the Team Admin group permissions to view test runs and manage test configurations and environments.

   :::image type="content" source="media/test-permissions/project-level-permissions-2020-earlier.png" alt-text="Screenshot of Set project-level test permissions for a custom group, Team Admin.":::

   Updated permissions automatically save.
::: moniker-end    

* * *

::: moniker range="< azure-devops"

In the following example, we grant members assigned to the Test Admin group permissions to delete test runs.   

:::image type="content" source="media/set-permissions-project-level-dialog.png" alt-text="Screenshot of Set project-level permissions for a custom group, Team Admin."::: 

::: moniker-end    

## Next steps

> [!div class="nextstepaction"]
> [Navigate Test Plans](../../test/navigate-test-plans.md)

## Related articles 

- [Manage access](restrict-access.md)   
- [Set permissions and access for work tracking](set-permissions-access-work-tracking.md) 
