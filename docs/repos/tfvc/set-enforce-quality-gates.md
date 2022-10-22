---
title: Set and enforce quality gates
titleSuffix: Azure Repos
description: Learn how to set and enforce quality gates for TFVC
ms.assetid: bdc5666e-6cf0-45b2-a0a1-133c3f61e852
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Set and enforce quality gates

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


Check-in policies are a mechanism for enforcing development practices across your development team. Check-in notes are a communication mechanism for collecting data from team members during the check-in process. Both of these are customizable to meet the needs of a team. This section explains the purpose of these items and also describes how to configure them.

## Check-in policies

Check-in policies are used to enforce mandatory software development practices. Policy is enforced during the check-in process in the Check In and Pending Changes windows. If a user attempts to perform a check-in, in violation of a policy, their check-in is blocked. If necessary, these policies may be overridden. For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).

Policies are configured and established in the Source Control Settings window. A sample policy constraint is "You must associate your changes with one or more work items." This policy prevents users from submitting changes without having a specific bug or feature they are working on.

When policies are violated, they are presented to the user during the source control check-in process in the Check In and Pending Changes window. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md).

## Check-in notes

Check-in notes are used for capturing specific pieces of information during the check-in process by prompting the user for specific data. Check-in notes can be configured and made mandatory in the Source Control Settings window. The information archived in check-in notes can be vital when viewing the details of a [Working with Changesets](find-view-changesets.md). For more information, see [Viewing Historical Data about an Item](view-manage-past-versions.md).

Check-in notes are presented to the user during the source control check-in process in the Check In and Pending Changes windows. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md).


## Related articles

- [Add Check-In Policies](add-check-policies.md)   
- [Edit Check-In Policies](edit-check-policies.md)   
- [Remove Check-In Policies](remove-check-policies.md)   
- [Enable and Disable Check-In Policies](enable-disable-check-policies.md)   
- [Configure Check-In Notes](configure-check-notes.md)   
- [Develop code and manage pending changes](develop-code-manage-pending-changes.md)
- [Viewing Historical Data about an Item](view-manage-past-versions.md)