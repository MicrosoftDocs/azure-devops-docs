---
title: Configure Check-In Notes
titleSuffix: Azure Repos
description: Configure Check-In Notes
ms.assetid: c7829273-4d53-412c-99d6-4944780ebc74
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Configure Check-In Notes

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Administrators of Team Foundation version control can add, configure, and remove check-in notes. Check-in notes settings are set in the Source Control Settings window. For more information about check-ins, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411).

**Required Permissions**  
To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To add check-in notes

1.  On the **Team** menu, click **Project Settings**, and then click **Source Control**.  
2.  In the **Source Control Settings** dialog box, choose the **Check-in Notes** tab, and click **Add**.  
3.  In the **Add Check-in Note** dialog box, in the **Title** box, either type the desired name (for example, Documentation Reviewer), or select an existing check-in note from the drop-down list.  
4.  If you want the note to be mandatory for check-ins, select the **Required on check-ins** box.  
5.  Click **Add**, to return to the **Check-in Notes** tab in the **Source Control Settings** window with the new check-in note title added.

### To configure a check-in note as being required

1.  On the **Team** menu, click **Project Settings**, and then click **Source Control**.  
2.  In the **Source Control Settings** dialog box, click the **Check-in Notes** tab.  
3.  In the **Required** column, select the check-in notes that you want to designate as mandatory, and clear those that you do not want to designate as mandatory for the check-in process.

### To rename a check-in note

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source** **Control**.  
2.  In the **Source** **Control** **Settings** dialog box, click the **Check-in** **Notes** tab.  
3.  Select the check-in note that you want to rename, and type a new name for it.

### To change the ordering of the check-in notes

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source** **Control**.  
2.  In the **Source** **Control** **Settings** dialog box, select the **Check-in** **Notes** tab.  
3.  Select the check-in note for which you want to change the order.  
4.  Use the up and down arrow buttons to move the note to the desired order.  
5.  Repeat process until all the check-in notes are in the order you desire. This ordering is reflected during the check-in process. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md) and [Associate Check-in Notes with Changesets](https://msdn.microsoft.com/library/ms245464).

### To remove check-in notes

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source** **Control**.  
2.  In the **Source** **Control** **Settings** dialog box, click the **Check-in** **Notes** tab.  
3.  Select the check-in note title that you want to remove, and click **Remove**.

## See Also

#### Tasks

[Add Check-In Policies](add-check-policies.md)  
[Associate Check-in Notes with Changesets](https://msdn.microsoft.com/library/ms245464)
#### Other Resources

[Administering Team Foundation Version Control](administering-team-foundation-version-control.md)
