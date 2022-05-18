---
title: Enable and Disable Check-In Policies
titleSuffix: Azure Repos
description: Enable and Disable Check-In Policies
ms.assetid: 629bf67c-22c5-4047-92b8-aa8f7c201cc9
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Enable and disable check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


Administrators of Team Foundation version control can add check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to source control; for example a user can be required to associate a work item with a changeset. For more information, see [Add Check-In Policies](add-check-policies.md). Prior to enabling or disabling check-in policies, you must first create a check-in policy. For more information, see [Add Check-In Policies](add-check-policies.md). The following procedures demonstrate how to enable or disable check-in policies for your project.

## Prerequisites

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).


## Enable a check-in policy

1.  On the **Team** menu, click **Project Settings**, and then click **Source Control**.

2.  In the **Source Control Settings** dialog box, click the **Check-in Policy** tab.

3.  In the policy type list, select the policy type you want to enable, and click **Enable**.

4.  Click **OK**.

## Disable a check-in policy

1.  On the **Team** menu, click **Project Settings**, and then click **Source** **Control**.

2.  In the **Source** **Control** **Settings** dialog box, click the **Check-in Policy** tab.

3.  In the policy type list, select the policy type you want to delete, and click **Disable**.

4.  Click **OK**.

## Related articles

- [Set and enforce quality gates](set-enforce-quality-gates.md)
- [Work with changesets](find-view-changesets.md)
- [Add check-in policies](add-check-policies.md)
- [Configure check-out settings](configure-check-out-settings.md)