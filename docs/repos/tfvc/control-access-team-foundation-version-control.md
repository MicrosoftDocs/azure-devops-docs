---
title: Control Access to Team Foundation Version Control
titleSuffix: Azure Repos
description: Control Access to Team Foundation Version Control
ms.assetid: cccf50be-5503-4155-974b-c75b57888603
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Control Access to Team Foundation Version Control

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Team Foundation version control supports granting access control permissions to Windows Groups, Windows Users, and Team Foundation Groups. Permissions can be inherited from the containing folder, or you can declare permissions explicitly.

Permission settings are in the form of either **Grant** or **Deny**. **Deny** always overrides **Grant**, even if **Deny** is inherited and **Grant** is explicitly defined.

**Required Permissions**

To complete this task, you must have the **Manipulate security settings** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To set permissions for users or groups

1.  On the Visual Studio **View** menu, click **Other Windows**, and then click **Source Control Explorer**.

2.  Right-click the folder or file for which you want to set permissions, and then click **Properties**.

3.  In the **Properties** dialog box, click the **Security** tab.

4.  In the **Add users and groups** area, select **Team Foundation Server Group** to set permissions for a Team Foundation Server group. Otherwise, select **Windows user or group**.

5.  Click **Add**.

    1.  If you selected **Team Foundation Server** group, the **Add Group** dialog box opens. Select a group, and then click **OK**. The group for which you want to set permissions appears in the **User and Groups** box of the **Properties** dialog box.

    2.  If you selected **Windows User or Group**, the **Select Users or Groups** dialog box opens. Enter the user or group for whom you want to set permissions, and then click **OK**. The user or group appears in the **User and Groups** box of the **Properties** dialog box.

		>**Note**
		>To view a ToolTip that provides information about the controls in the **Select Users or Groups** dialog box, click the Help icon on the title bar, and then click the control.

6.  In the **Users and Groups** box of the **Properties** dialog box, select the user or group for which you want to set permissions.

7.  In the **Permission** box, select either **Allow** or **Deny** for each permission.

    >**Note**
    >If you select the **Inherit security settings** box, the security settings of the containing folder are selected automatically. You can override these inherited settings by selecting or clearing the **Deny** box.

8.  Click **OK** to close the **Properties** dialog box.

## See Also

#### Other Resources

[Administering Team Foundation Version Control](administering-team-foundation-version-control.md)
