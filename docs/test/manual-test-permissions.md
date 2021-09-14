---
title: Permissions, licensing, and access for manual testing
description: Default permissions and access levels in Azure DevOps and TFS for manual and exploratory testing topics and problems
ms.assetid: 91146CFD-A4CE-4CC5-973D-1633419CAFDE
ms.technology: devops-test
ms.topic: reference
ms.author: sdanie
author: steved0x
ms.date: 06/02/2019
monikerRange: '>= tfs-2015'
---

# Manual test permissions and access 

[!INCLUDE [version-header](includes/version-header.md)]

Azure Test Plans uses an access level called [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web),
which is available from Azure DevOps.

## License requirements

**Visual Studio Enterprise, Visual Studio Test Professional, and MSDN Platforms subscribers** have access to use this feature. These users do not require
an additional license, and can use this feature on their organization or collection for no additional charge.
For more information, see [Compare Visual Studio subscriptions](https://www.visualstudio.com/vs/pricing).
 
**Non-subscribers** must purchase Basic + Test Plans to use this functionality. This can be for any specified number of users.

**Notes:**

* Manual testers do not need this extension and can 
  [execute tests as a Basic user](#license-requirements)
  in an Azure DevOps organization or collection.

* This extension can't be used by Stakeholders.

* Licenses for this extension also gives users rights to use [Microsoft Test Manager](/previous-versions/azure/devops/test/mtm/guidance-mtm-usage) (a deprecated on-premises client).

This table describes the license requirements in more detail:

| Task or Use Case | License requirement |
| --- | --- |
| Execute tests | Basic license |
| Use the out-of-the-box standard charts | Basic license |
| Create and manage test plans | Basic + Test Plans license |
| Create and manage test suites | Basic + Test Plans license |
| Author test cases using a grid-like view and edit in the Test Runner | Basic + Test Plans license |
| Assign test cases to suites, move test cases, and order test cases | Basic + Test Plans license |
| Prepare for execution such as assigning configurations or testers | Basic + Test Plans license | 
| Prepare User Acceptance Testing | Basic + Test Plans license |

## Access by user role

You can access most manual testing features when you are added as a team member or a member
of the Contributors group for a project. The most common built-in groups include Readers,
Contributors, and Project Administrators. For a simplified view of all default permissions
assigned to built-in groups, see [Default permissions and access](../organizations/security/permissions-access.md).  

Stakeholders have limited access to manual testing features.
To learn more, see [About access levels](../organizations/security/access-levels.md).

[!INCLUDE [test](../organizations/security/includes/test.md)] 


Permissions can be applied on area paths and at the project-level. To learn how, see [Set permissions and access for testing](../organizations/security/set-permissions-access-test.md). 

 

## Related articles

- [Set permissions and access for manual testing](../organizations/security/set-permissions-access-test.md)