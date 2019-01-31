---
title: Permissions and access for manual testing
description: Default permissions and access levels in Azure DevOps and TFS for manual and exploratory testing topics and problems
ms.assetid: 91146CFD-A4CE-4CC5-973D-1633419CAFDE
ms.prod: devops
ms.technology: devops-test
ms.topic: reference
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 01/31/2018
monikerRange: '>= tfs-2015'
---

# Manual testing permissions and access 

[!INCLUDE [version-header](_shared/version-header.md)]

## License requirements

This table describes the license requirements in more detail:

| Task or Use Case | License requirement |
| --- | --- |
| Execute tests | Basic license |
| Use the out-of-the-box standard charts | Basic license |
| Create and manage test plans | Test Manager license |
| Create and manage test suites | Test Manager license |
| Author test cases using a grid-like view | Test Manager license |
| Assign test cases to suites, move test cases, and order tests cases | Test Manager license |
| Prepare for execution such as assigning configurations or testers | Test Manager license | 
| Prepare User Acceptance Testing | Test Manager license |

To obtain a Test Manager license, you must have either an [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/),
[Test Professional](https://visualstudio.microsoft.com/vs/test-professional/), or [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)
subscription; or have installed the [Test Manager extension for Azure Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
available from Visual Studio Marketplace.

## Access by user role

You can access most manual testing features when you are added as a team member or a member
of the Contributors group for a project. The most common built-in groups include Readers,
Contributors, and Project Administrators. For a simplified view of all default permissions
assigned to built-in groups, see [Default permissions and access](../organizations/security/permissions-access.md).  

Stakeholders have limited access to manual testing features.
To learn more, see [About access levels](../organizations/security/access-levels.md).

| Task | Stakeholders | Readers | Contributors | Account Owner &amp;<br/>Project Admins |
| --- |:---:|:---:|:---:|:---:| 
| Exploratory testing, view test runs | | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Exploratory testing, create and delete test runs |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Provide feedback using the Test & Feedback extension | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Request feedback using the Test & Feedback extension |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Manage test configurations and test environments |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Manage test plans and test suites |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Run automated tests from test plans |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |
| Test Manager (purchased separately) |  |  | ![checkmark](_img/checkmark.png) | ![checkmark](_img/checkmark.png) |

Permissions can be applied at [Project level](../organizations/security/permissions.md#project-level)
and at [Area path level](../organizations/security/permissions.md#area-path-object-level). 

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
