---
title: Permissions, licensing, and access for manual testing
description: Default permissions and access levels in Azure DevOps for manual and exploratory testing.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: reference
ms.author: pliaros
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 04/01/2026
ms.update-cycle: 1095-days
---

# Manual test access and permissions 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

This article covers the access levels, licensing, and permissions required for manual and exploratory testing in Azure Test Plans.

## Access and licensing 

To use the full range of Test Plans features, you need [Basic + Test Plans](../organizations/billing/buy-access-tfs-test-hub.md) access level or one of the following Visual Studio subscriptions, which include Test Plans at no extra charge:

- [Visual Studio Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
- [Visual Studio Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)

Users without one of these subscriptions must purchase **Basic + Test Plans** access. For more information, see [Compare Visual Studio subscriptions](https://www.visualstudio.com/vs/pricing).

> [!NOTE]  
> Users with **Stakeholder** access can't access the Test Plans web portal. However, they can provide feedback through the Test & Feedback extension. For more information, see [Stakeholder access quick reference](../organizations/security/stakeholder-access.md).

The following table summarizes the access level required for each task. 

| Task | Access level |
|---|---|
| Provide feedback using the Test & Feedback extension. | **Stakeholder** | 
| Execute tests, mark test outcomes. | **Basic** |
| Chart test status, view reports. | **Basic** |
| Create and manage test plans and test suites. | **Basic + Test Plans** |
| Author test cases using a grid-like view and edit in Test Runner. | **Basic + Test Plans** |
| Assign test cases to suites, move test cases, and order test cases. | **Basic + Test Plans** |
| Prepare for execution such as assigning configurations or testers. | **Basic + Test Plans** | 
| Create and manage configurations and parameters. | **Basic + Test Plans** | 
| Prepare User Acceptance Testing. | **Basic + Test Plans** |

<a id="access-by-user-role"></a>

## Permissions

In addition to the required access level, you need specific permissions for certain tasks. Because manual testing is managed through [test-specific work item types](test-objects-overview.md), test artifacts are subject to the same permissions that manage work items.

The following table lists permissions that control test-related tasks, organized by level.

### Project-level permissions

| Task | Permission |
|---|---|
| View test runs. | **View test runs** |
| Create test runs. | **Create test runs** |
| Delete test runs. | **Delete test runs** |
| Add or edit test configurations and variables. | **Manage test configurations** |
| Create and delete test environments. This permission is used with the [`tcm testenvironments`](test-case-managment-reference.md) CLI and has no corresponding option in the Test Plans web portal. | **Manage test environments** |
| Add new tags to test-based work items. | **Create tag definition** |
| Permanently delete test-specific work items. | **Permanently delete work items** |

### Area Path permissions

| Task | Permission |
|---|---|
| View test plans, test suites, test cases, and other test-based work items. | **View work items in this node** |
| Add or modify test plans, test suites, test cases, and other test-based work items. | **Edit work items in this node** |
| Modify test plan properties such as test run and test outcome settings. | **Manage test plans** |
| Create and delete test suites. Add and remove test cases from test suites. Change test configurations associated with test suites. Modify a test suite hierarchy (move a test suite). | **Manage test suites** |


### Default permissions by security group

The following table provides the default permissions assigned to the built-in security groups: **Readers**, **Contributors**, and **Project Administrators**. To learn how to change these settings, see [Set permissions and access for testing](../organizations/security/set-permissions-access-test.md). 

[!INCLUDE [test](../organizations/security/includes/test.md)] 

For a simplified view of all default permissions assigned to built-in groups, see [Default permissions and access](../organizations/security/permissions-access.md).  
 
## Related content

- [Test objects and terms](test-objects-overview.md)  
- [Set permissions and access for manual testing](../organizations/security/set-permissions-access-test.md)  
- [Default permissions and access](../organizations/security/permissions-access.md)  
- [Security groups, service accounts, and permissions in Azure DevOps](../organizations/security/permissions.md)
