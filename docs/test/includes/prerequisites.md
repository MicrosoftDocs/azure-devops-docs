---
ms.service: azure-devops-test-plans
ms.author: jeom
author: raviLiftr
ms.topic: include
ms.date: 07/13/2021
---


## Prerequisites

- Connect to a project. If you don't have a project yet, [create one](../../user-guide/sign-up-invite-teammates.md). 
- Be added to a project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
- To view test-related work items or run test cases, have at least **Basic** access. Users with **Stakeholder** access have no access to Test Plans.  
- To exercise the full range of test-related features, have been granted [Basic + Test Plans](../../organizations/billing/buy-access-tfs-test-hub.md) access level or have one of the following subscriptions:
	- [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
	- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
	- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)
- To add or edit test-related artifacts, have the following permissions: 
	-  To add or modify test plans, test suites, test cases, or other test-based work item types, have **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**. 
	- To modify test plan properties such as build and test settings, have **Manage test plans** permission set to **Allow** under the corresponding **Area Path**.  
	- To create and delete test suites; add, and remove test cases from test suites; change test configurations associated with test suites&mdash;have **Manage test suites** permission set to **Allow** under the corresponding **Area Path**. 
- Project-level permissions that you may need include:
	- To view, create, or delete test runs, have the corresponding permissions: **View test runs**, **Create test runs**, and **Delete test runs**.
	- To manage test configurations or test environments, have the corresponding permissions: **Manage test configurations** and **Manage test environments**.
	- To add new tags to test-based work items, have the **Create tag definition** permission set to **Allow**. 
	- To move test-based work items out of a project, have the **Move work items out of this project** permission set to **Allow**. 
	- To delete or restore test-based work items, have the **Delete and restore work items** permission set to **Allow**.  
	- To permanently delete test-based work items, have the **Permanently delete work items** permission set to **Allow**.  

For more information, see [Manual test access and permissions](../manual-test-permissions.md). 


