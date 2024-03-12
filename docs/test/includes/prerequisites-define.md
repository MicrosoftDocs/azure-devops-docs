---
ms.service: azure-devops-test-plans
ms.author: rbatra
author: raviLiftr
ms.topic: include
ms.date: 03/12/2024
---


## Prerequisites

You must have the following permissions and access levels: 
- **Basic** access or higher and permissions to view work items under the corresponding Area Path. For more information, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).
- [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level to add test plans and test suites, delete test artifacts, and define test configurations. Or, have one of the following **Visual Studio subscriptions**:
	- [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
	- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
	- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)
- You must have the following permissions:to add or edit test-related artifacts,  
	- **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**, to add or modify test plans, test suites, test cases, or other test-based work item types. 
	- **Manage test plans** permission set to **Allow** under the corresponding **Area Path**, to modify test plan properties such as build and test settings,.  
	- **Manage test suites** permission set to **Allow** under the corresponding **Area Path**, to create and delete test suites, add, and remove test cases from test suites, change test configurations associated with test suites, and modify a test suite hierarchy (move a test suite). 

For more information, see [Manual test access and permissions](../manual-test-permissions.md). 
