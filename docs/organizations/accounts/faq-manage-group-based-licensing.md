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
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 11/07/2019
monikerRange: 'azure-devops'
---

# Troubleshoot managing group-based licensing

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

In this article, find the following frequently asked questions and answers (FAQs) about managing group-based licensing.

#### Q: Will my users lose their access level and project membership if I remove a group rule?

A: Users in the group **TestGroup** lose access to group resources if the users haven't been explicitly assigned to the resources or assigned via a different group rule.

> [!div class="mx-imgBorder"]
> ![remove-test-group-group-rule-managing_group-based-licensing](media/faq/remove-test-group-rule.png)

#### Q: Will my Azure DevOps or Azure AD group be deleted if I remove its group rule?

A: No. Your groups won't be deleted.

#### Q: What does the option "Remove <group> from all project level groups" do?

A: This option removes the Azure DevOps or Azure AD group from any project-level default groups, such as **Project Readers** or **Project Contributors**.

#### Q: What determines the final access level if a user is in more than one group?

A: Group rule types are ranked in the following order: Subscriber > Basic + Test Plans > Basic > Stakeholder.
Users always get the best access level between all the group rules, including VS subscription.

See the following examples, showing how the subscriber detection factors into group rules.

**Example 1**: group rule gives me more access

If I have a VS Pro subscription and I’m in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get Basic + Test Plans because what the group rule gives me is greater than my subscription.

**Example 2**: group rule gives me the same access

I have a Visual Studio Test Pro subscription and I’m in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get detected as a Visual Studio Test Pro subscriber, because the access is the same as the group rule (and I’m already paying for the Visual Studio Test Pro, so I wouldn’t want to pay again).

## Related articles

- [Migrate to group-based resource management](migrate-to-group-based-resource-management-in-vsts.md)
- [Assign access levels and extensions to users by group membership](assign-access-levels-and-extensions-by-group-membership.md)