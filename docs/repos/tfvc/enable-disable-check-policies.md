---
title: Enable and disable check-in policies
titleSuffix: Azure Repos
description: See how TFVC administrators can enable and disable check-in policies in Team Foundation Version Control (TFVC).
ms.assetid: 629bf67c-22c5-4047-92b8-aa8f7c201cc9
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Enable and disable check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control (TFVC) administrators can add check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to source control. For example, users can be required to associate work items with changesets. 

Prior to enabling or disabling check-in policies, you must first create the check-in policies. For more information, see [Add check-in policies](add-check-policies.md). The following procedure describes how to enable or disable check-in policies for your project.

## Prerequisites

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).


## Enable or disable a check-in policy

1. On the Visual Studio **Team** menu, select **Team Project Settings** > **Source Control**.

   Or, in the Visual Studio **Team Explorer** window, select **Settings**, and then select **Source Control** under **Team Project**.

1. In the **Source Control Settings** dialog box, select the **Check-in Policy** tab.

1. In the **Policy Type** list, select the policy type you want to enable or disable, and then select **Enable** or **Disable**.

1. Select **OK**.

## Related articles

- [Set and enforce quality gates](set-enforce-quality-gates.md)
- [Work with changesets](find-view-changesets.md)
- [Add check-in policies](add-check-policies.md)
- [Configure check-out settings](configure-check-out-settings.md)