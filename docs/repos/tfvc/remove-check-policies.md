---
title: Remove Check-In Policies
titleSuffix: Azure Repos
description: Remove Check-In Policies
ms.assetid: fb4b62ef-e413-4f03-81fe-ae560c9f60ff
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Remove Check-In Policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


Administrators of Team Foundation version control can add check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to source control. For example, a user can be required to associate a work item with a changeset. For more information, see [Add Check-In Policies](add-check-policies.md). The following procedure demonstrates how to remove a check-in policy from your project.

## Prerequisites

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).


## Remove a check-in policy

1.  From the **Team** menu, choose **Project Settings**, and then select **Source Control**.

2.  In the **Source Control Settings** dialog box, choose the **Check-in Policy** tab.

3.  In the policy type list, click the policy type that you want to delete, and click **Remove**.

4.  Click **OK**.

## Related articles

- [Set and Enforce Quality Gates](set-enforce-quality-gates.md)
- [Working with Changesets](find-view-changesets.md)
- [Walkthrough: Customizing Checkin Policies and Notes](/previous-versions/ms181281(v=vs.100))