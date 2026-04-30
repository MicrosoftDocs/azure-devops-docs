---
ms.service: azure-devops-test-plans
ms.author: pliaros
author: raviLiftr
ms.topic: include
ms.date: 04/08/2026
---


| Category | Requirements |
|--|--|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md) |
| **Access levels** | At least [**Basic**](../../organizations/security/access-levels.md) access to view test-related work items. Users with **Stakeholder** access can't access Azure Test Plans.<br><br>To add test plans and test suites, delete test artifacts, or define test configurations, you need [**Basic + Test Plans**](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access or a Visual Studio subscription: [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/), [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/), or [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/). |
| **Permissions** | **Area Path:** <br>- **Edit work items in this node**: Add or modify test plans, test suites, test cases, or other test-based work items.<br>- **Manage test plans**: Modify test plan properties such as build and test settings.<br>- **Manage test suites**: Create and delete test suites, add and remove test cases from test suites, change test configurations, and move test suites.<br><br>**Project-level:**<br>- **Manage test configurations** and **Manage test environments**: Manage test configurations or test environments.<br>- **Permanently delete work items**: Permanently delete test-based work items. |

For more information, see [Manual test access and permissions](../manual-test-permissions.md).
