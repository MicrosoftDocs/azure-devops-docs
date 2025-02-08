---
ms.service: azure-devops-test-plans
ms.author: jeom
author: raviLiftr
ms.topic: include
ms.date: 01/13/2025
---


| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Access levels** | - To view test-related work items or run test cases: At least **Basic** access. Users with **Stakeholder** access have no access to Test Plans. <br>- To exercise the full range of test-related features: [Basic + Test Plans](../../organizations/billing/buy-access-tfs-test-hub.md) access level or one of the following subscriptions: <br> - [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/) <br>- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/) <br>- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/) |
| **Permissions** | - To add or modify test plans, test suites, test cases, or other test-based work item types: **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**. <br>- To modify test plan properties such as build and test settings: **Manage test plans** permission set to **Allow** under the corresponding **Area Path**. <br>- To create and delete test suites, add and remove test cases from test suites, or change test configurations associated with test suites: **Manage test suites** permission set to **Allow** under the corresponding **Area Path**. <br>- Project-level permissions that you might need include: <br>- To view, create, or delete test runs: **View test runs**, **Create test runs**, and **Delete test runs** permission set to **Allow**. <br> - To manage test configurations or test environments: **Manage test configurations** and **Manage test environments**. <br>- To add new tags to test-based work items: **Create tag definition** permission set to **Allow**. <br>- To move test-based work items out of a project: **Move work items out of this project** permission set to **Allow**. <br>- To delete or restore test-based work items: **Delete and restore work items** permission set to **Allow**. <br>- To permanently delete test-based work items: **Permanently delete work items** permission set to **Allow**. |

For more information, see [Manual test access and permissions](../manual-test-permissions.md).


