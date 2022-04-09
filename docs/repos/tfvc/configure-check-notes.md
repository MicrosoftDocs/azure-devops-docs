---
title: Configure Check-In Notes
titleSuffix: Azure Repos
description: Configure Check-In Notes
ms.assetid: c7829273-4d53-412c-99d6-4944780ebc74
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Configure check-in notes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Administrators of Team Foundation version control can add, configure, and remove check-in notes. Check-in notes settings are set in the Source Control Settings window. For more information about check-ins, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites  

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

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
5.  Repeat process until all the check-in notes are in the order you desire. This ordering is reflected during the check-in process. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md) and [Develop and share your code in TFVC using Visual Studio](share-your-code-in-tfvc-vs.md).

### To remove check-in notes

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source** **Control**.  
2.  In the **Source** **Control** **Settings** dialog box, click the **Check-in** **Notes** tab.  
3.  Select the check-in note title that you want to remove, and click **Remove**.

## Related articles

- [Add Check-In Policies](add-check-policies.md)  
- [Develop and share your code in TFVC using Visual Studio](share-your-code-in-tfvc-vs.md)
- [Configure check-out settings](configure-check-out-settings.md)