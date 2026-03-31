---
ms.service: azure-devops-test-plans
ms.author: pliaros
author: raviLiftr
ms.topic: include
ms.date: 03/31/2026
---


| Category | Requirements |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Access levels** | - To view test-related work items: At least **Basic** access. Users with **Stakeholder** access have no access to Test Plans.<br>- To add test plans and test suites, delete test artifacts, and define test configurations: [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access or one of the following Visual Studio subscriptions:<br> - [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)<br> - [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)<br> - [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/) |
| **Permissions** | **Area Path permissions:**<br>- To add or modify test plans, test suites, test cases, or other test-based work item types: **Edit work items in this node** set to **Allow**.<br>- To modify test plan properties such as build and test settings: **Manage test plans** set to **Allow**.<br>- To create and delete test suites, add and remove test cases from test suites, change test configurations associated with test suites, and modify a test suite hierarchy (move a test suite): **Manage test suites** set to **Allow**.<br><br>**Project-level permissions:**<br>- To manage test configurations or test environments: **Manage test configurations** and **Manage test environments** set to **Allow**.<br>- To permanently delete test-based work items: **Permanently delete work items** set to **Allow**. |

For more information, see [Manual test access and permissions](../manual-test-permissions.md).
