---
title: Remove direct assignments from users
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: To manage a user's resources only by the groups that they're in, you must remove the direct assignments in your organization.
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 
monikerRange: 'azure-devops'
---

# Remove direct assignments from users in Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

To manage a user's resources only by the groups that they're in, you must remove the direct assignments. Resources that are directly assigned to a user via individual assignment stay assigned to the user, whether the resources are assigned or taken away from the user's groups.

## Prerequisites

* You must be a member of the **Project Collection Administrators** group for the organization that you would like to manage users' direct assignments.

## Remove assignments

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select the **Users** tab.

   ![Select the users tab
](_img/remove-direct-assignments/users-tab-vert.png)

4. Select all users with resources that should be managed only by groups.

   ![Select group rules for migration](_img/remove-direct-assignments/choose-remove-direct-assignments-vert.png)

5. To confirm that you want to remove the direct assignments, select **Remove**.

Direct assignments are removed from the users.

> [!Note]
> If a user isn't a member of any groups, then the user isn't affected.

## Related articles

* [What is Azure Active Directory B2B Collaboration?](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b)

* [Migrate to group-based resource management](migrate-to-group-based-resource-management-in-vsts.md)

* [Assign access levels and extensions to users by group membership](assign-access-levels-and-extensions-by-group-membership.md)
