---
ms.service: azure-devops-test-plans
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/13/2021
---


## Prerequisites

- You must connect to a project. If you don't have a project yet, [create one](../../user-guide/sign-up-invite-teammates.md). 
- You must be added to a project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
- To view test-related work items or run test cases, you must have **Basic** access or higher. Users with **Stakeholder** access have no access to Test Plans.  
- To exercise the full range of test-related features, you must have been granted [Basic + Test Plans](../../organizations/billing/buy-access-tfs-test-hub.md) access level or have one of the following subscriptions:
	- [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
	- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
	- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)
- To add or edit test-related artifacts, you must have the following permissions: 
	-  To add or modify test plans, test suites, test cases, or other test-based work item types, you must have **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**. 
	- To modify test plan properties such as build and test settings, you must have **Manage test plans** permission set to **Allow** under the corresponding **Area Path**.  
	- To create and delete test suites; add, and remove test cases from test suites; change test configurations associated with test suites&mdash;you must have **Manage test suites** permission set to **Allow** under the corresponding **Area Path**. 
- Project-level permissions that you may need include:
	- To view, create, or delete test runs, you must be granted the corresponding permissions: **View test runs**, **Create test runs**, and **Delete test runs**.
	- To manage test configurations or test environments, you must be granted the corresponding permissions: **Manage test configurations** and **Manage test environments**.
	- To add new tags to test-based work items, you must have the **Create tag definition** permission set to **Allow**. 
	- To move test-based work items out of a project, you must have the **Move work items out of this project** permission set to **Allow**. 
	- To delete or restore test-based work items, you must have the **Delete and restore work items** permission set to **Allow**.  
	- To permanently delete test-based work items, you must have the **Permanently delete work items** permission set to **Allow**.  

To learn more, see [Manual test access and permissions](../manual-test-permissions.md). 


