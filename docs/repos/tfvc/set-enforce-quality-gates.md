---
title: Set and Enforce Quality Gates
titleSuffix: Azure Repos
description: Set and Enforce Quality Gates
ms.assetid: bdc5666e-6cf0-45b2-a0a1-133c3f61e852
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Set and Enforce Quality Gates

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Check-in policies are a mechanism for enforcing development practices across your development team. Check-in notes are a communication mechanism for collecting data from team members during the check-in process. Both of these are customizable to meet the needs of a team. This section explains the purpose of these items and also describes how to configure them.

## Check-in Policies

Check-in policies are used to enforce mandatory software development practices. Policy is enforced during the check-in process in the Check In and Pending Changes windows. If a user attempts to perform a check-in, in violation of a policy, their check-in is blocked. If necessary, these policies may be overridden. For more information, see [Override a Check-In Policy](https://msdn.microsoft.com/library/ms245460).

Policies are configured and established in the Source Control Settings window. A sample policy constraint is "You must associate your changes with one or more work items." This policy prevents users from submitting changes without having a specific bug or feature they are working on.

When policies are violated, they are presented to the user during the source control check-in process in the Check In and Pending Changes window. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md).

## Check-in Notes

Check-in notes are used for capturing specific pieces of information during the check-in process by prompting the user for specific data. Check-in notes can be configured and made mandatory in the Source Control Settings window. The information archived in check-in notes can be vital when viewing the details of a [Working with Changesets](find-view-changesets.md). For more information, see [Viewing Historical Data about an Item](view-manage-past-versions.md).

Check-in notes are presented to the user during the source control check-in process in the Check In and Pending Changes windows. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md).

## In This Section

[Add Check-In Policies](add-check-policies.md)  
Describes how to create custom check-in policies associated with Team Foundation version control check-ins.

[Edit Check-In Policies](edit-check-policies.md)  
Explains the procedures used to modify a check-in policy.

[Remove Check-In Policies](remove-check-policies.md)  
Describes the steps required to delete a check-in policy.

[Enable and Disable Check-In Policies](enable-disable-check-policies.md)  
Explains the steps used to either enable or disable an existing check-in policy.

[Configure Check-In Notes](configure-check-notes.md)  
Describes the steps used to configure custom check-in notes associated with Team Foundation version control check-ins.

## See Also

#### Tasks

[Check In Pending Changes](https://msdn.microsoft.com/library/ms181411)

#### Other Resources

[Viewing Historical Data about an Item](view-manage-past-versions.md)
