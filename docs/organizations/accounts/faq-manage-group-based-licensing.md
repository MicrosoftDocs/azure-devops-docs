---
title: Troubleshoot managing group-based licensing
description: Troubleshoot managing group-based licensing (what does remove group do? remove group rule? Will users lose access level and project membership?)
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.assetid: 5288549e-30cb-4ac0-81dd-8ba4890e8448
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 03/21/2018
monikerRange: 'vsts'
---
# Troubleshoot managing group-based licensing

**VSTS**

#### Q: Will my users lose their access level and project membership if I remove a group rule?

A: Users in the group "TestGroup" will lose access to group resources if they have not been explicitly assigned to them or via a different group rule.

> [!div class="mx-imgBorder"]
![remove-test-group-group-rule-managing_group-based-licensing](_img/faq/remove-test-group-rule.png)

#### Q: Will my VSTS or Azure AD group be deleted if I remove its group rule?

A: No, your groups will not be deleted.

#### Q: What does the option to “Remove <group> from all project level groups” do?

A: It will remove the VSTS or Azure AD group from any project-level default groups, such as Project Readers or Project Contributors.

## Related articles

- [Migrate to group-based resource management](https://docs.microsoft.com/en-us/vsts/organizations/accounts/migrate-to-group-based-resource-management-in-vsts?view=vsts)
- [Assign access levels and extensions to users by group membership](https://docs.microsoft.com/en-us/vsts/organizations/accounts/assign-access-levels-and-extensions-by-group-membership?view=vsts)