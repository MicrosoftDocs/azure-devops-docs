---
ms.service: azure-devops-test-plans
ms.author: jeom
author: raviLiftr
ms.topic: include
ms.date: 01/13/2025
---


| Category | Requirements |
|--------------|-------------|
| **Access levels** | - At least **Basic** access, with permissions to view work items under the corresponding Area Path.<br>- To add test plans and test suites, delete test artifacts, and define test configurations: [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access.<br>Or, one of the following **Visual Studio subscriptions**:<br> - [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)<br>- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)<br>  - [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/) |
| **Permissions** | - To add or modify test plans, test suites, test cases, or other test-based work item types: **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**.<br>- To modify test plan properties such as build and test settings: **Manage test plans** permission set to **Allow** under the corresponding **Area Path**.<br>- to create and delete test suites, add and remove test cases from test suites, change test configurations associated with test suites, and modify a test suite hierarchy (move a test suite): **Manage test suites** permission set to **Allow** under the corresponding **Area Path**. |

For more information, see [Manual test access and permissions](../manual-test-permissions.md).
