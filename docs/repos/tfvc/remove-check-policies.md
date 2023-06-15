---
title: Remove TFVC check-in policies
titleSuffix: Azure Repos
description: Remove check-in policies from your Team Foundation Version Control (TFVC) project.
ms.assetid: fb4b62ef-e413-4f03-81fe-ae560c9f60ff
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Remove TFVC check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


Team Foundation Version Control (TFVC) administrators can add check-in policies that require users to take actions when they check in to source control. For example, users can be required to associate work items with changesets. For more information, see [Add check-in policies](add-check-policies.md). The following procedure describes how to remove a check-in policy from your project.

## Prerequisites

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Remove a check-in policy

1. From the Visual Studio **Team** menu, choose **Team Project Settings** > **Source Control**.

2.  In the **Source Control Settings** dialog box, choose the **Check-in Policy** tab.

3.  In the **Policy type** list, select the policy you want to delete, and select **Remove**.

4.  Select **OK**.

## Related articles

- [Set and enforce quality gates](set-enforce-quality-gates.md)
- [Work with changesets](find-view-changesets.md)
- [Walkthrough: Customize checkin policies and notes](/previous-versions/ms181281(v=vs.100))