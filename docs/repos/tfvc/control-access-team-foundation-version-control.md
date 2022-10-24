---
title: Control access to Team Foundation Version Control
titleSuffix: Azure Repos
description: See how to control access and permissions for Team Foundation Version Control.
ms.assetid: cccf50be-5503-4155-974b-c75b57888603
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/12/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Control access to Team Foundation Version Control

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


Team Foundation Version Control supports granting access control permissions to Windows users or groups or Azure DevOps Groups. Permissions can be inherited from the containing folder, or you can declare permissions explicitly.

Permission settings are in the form of either **Allow** or **Deny**. **Deny** always overrides **Allow**, even if **Deny** is inherited and **Allow** is explicitly defined.

## Prerequisites

To complete this task, you must have your **Manage permissions** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

### To set permissions for users or groups

1. In Visual Studio, select **View** > **Other Windows** > **Source Control Explorer**.

1. Right-click the folder or file for which you want to set permissions, and select **Advanced** > **Security**.

1. In the **Permissions for \<folder or file>** dialog box, select **Add** and then select **Add Azure DevOps Group** to set permissions for an Azure DevOps Group, or **Add a user** to add a Windows user or group.

1. If you selected **Add Azure DevOps Group**, in the **Add an Azure DevOps Services Group** dialog box, enter or select a group, and then select **Save changes**. The group appears under **Azure DevOps Groups** in the **Permissions for \<folder or file>** dialog box.

1. If you selected **Add a user**, in the **Add a user** dialog box, enter or select the user or group you want to give permissions, and then select **Save changes**. The user or group appears under **Users** in the **Permissions for \<folder or file>** dialog box.

1. On the left side of the **Permissions for \<folder or file>** dialog box, select the user or group for which you want to set permissions.

1. On the right side of the dialog box, under **Access Control Summary**, select the setting next to each permission and click the setting or press Enter to select **Allow** or **Deny**. Changed settings appear in bold.

   > [!NOTE]
   > If you set **Inheritance** to **On**, the security settings of the containing folder are selected automatically. You can override these inherited settings by selecting **Allow** or **Deny**.

1. When you're finished setting permissions for the user or group, select **Save Changes**. When you're done setting permission levels for all users and groups, select **Close** to close the dialog box.

## Related articles

- [Configure check-out settings](configure-check-out-settings.md)
