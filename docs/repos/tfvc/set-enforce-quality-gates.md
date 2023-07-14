---
title: Set and enforce quality gates
titleSuffix: Azure Repos
description: Learn how to set and enforce quality gates for TFVC.
ms.assetid: bdc5666e-6cf0-45b2-a0a1-133c3f61e852
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/30/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Set and enforce quality gates

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Check-in policies are a mechanism for enforcing development practices across your development team. Check-in notes are a communication mechanism for collecting data from team members during the check-in process. Both of these mechanisms are customizable to meet the needs of a team. This section explains the purpose of these items and also describes how to configure them.

## Check-in policies

Check-in policies are used to enforce mandatory software development practices. Policy is enforced during the check-in process after you select **Check In** on the **Pending Changes** page or **My Work** page in the Visual Studio **Team Explorer** window. If a user attempts to perform a check-in that violates a mandatory policy, the check-in is blocked. If necessary, these policies may be overridden. For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).

Policies are configured and established in **Settings** on the **Source Control** page of **Team Explorer**. A sample policy constraint is **You must associate your changes with one or more work items.** This policy prevents users from submitting changes without associating a specific bug or feature they're working on.

When policies are violated, the **Check In** and **Pending Changes** pages of **Team Explorer** present the violations to the user during the source control check-in process. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Check-in notes

Check-in notes are used for capturing specific pieces of information during the check-in process by prompting the user for specific data. Check-in notes can be configured and made mandatory in **Settings** on the **Source Control** page of **Team Explorer**. The information archived in check-in notes can be vital when viewing the details of a [changeset](find-view-changesets.md). For more information, see [View and manage past versions](view-manage-past-versions.md).

Check-in notes are presented to the user during the source control check-in process in the **Pending Changes** window. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).


## Related articles

- [Add check-in policies](add-check-policies.md)   
- [Edit check-in policies](edit-check-policies.md)   
- [Remove check-in policies](remove-check-policies.md)   
- [Enable and disable check-in policies](enable-disable-check-policies.md)   
- [Configure check-in notes](configure-check-notes.md)   
- [Develop code and manage pending changes](develop-code-manage-pending-changes.md)
- [View and manage past versions](view-manage-past-versions.md)