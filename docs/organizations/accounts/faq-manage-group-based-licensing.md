---
title: Troubleshoot managing group-based licensing
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), like how to remove a group, remove a group rule, and how user access level and project membership is affected.
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.assetid: 5288549e-30cb-4ac0-81dd-8ba4890e8448
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# Troubleshoot managing group-based licensing

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

#### Q: Will my users lose their access level and project membership if I remove a group rule?

A: Users in the group **TestGroup** lose access to group resources if the users haven't been explicitly assigned to the resources, or assigned via a different group rule.

> [!div class="mx-imgBorder"]
![remove-test-group-group-rule-managing_group-based-licensing](_img/faq/remove-test-group-rule.png)

#### Q: Will my Azure DevOps or Azure AD group be deleted if I remove its group rule?

A: No. Your groups won't be deleted.

#### Q: What does the option "Remove <group> from all project level groups" do?

A: This option removes the Azure DevOps or Azure AD group from any project-level default groups, such as **Project Readers** or **Project Contributors**.

## Related articles

- [Migrate to group-based resource management](migrate-to-group-based-resource-management-in-vsts.md)
- [Assign access levels and extensions to users by group membership](assign-access-levels-and-extensions-by-group-membership.md)