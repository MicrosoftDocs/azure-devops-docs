---
title: Compare folders
titleSuffix: Azure Repos
description: See how to compare two TFVC folders by using the Folder Differences window in Visual Studio.
ms.assetid: 9c894c51-c34c-4c03-a840-5e485dbbc55d
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Compare folders

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can compare the differences between two server folders, two local folders, or a server folder and a local folder.

## Prerequisites  

To do these procedures, you must have the **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

> [!NOTE]
> To compare two local folders, you don't need any Azure DevOps permissions.

## Compare folders

1.  On the Visual Studio **View** menu, choose **Other Windows**, and then choose **Source Control Explorer**.

2.  In **Source Control Explorer**, right-click the source folder you want to compare and choose **Compare**.

    The **Compare** dialog box appears with the server path of the folder that you selected in the **Source Path** box.

3.  Under **Source Version**, select the **Type** you want to use for comparison: **Changeset**, **Date**, **Label**, **Latest Version**, or **Workspace Version**.

4.  Enter the **Target Path**, or choose **Browse** and select the target folder.

5.  If the **Target Path** is to a server folder, under **Target Version**, select the **Type** you want to use for comparison: **Changeset**, **Date**, **Label**, **Latest Version**, or **Workspace Version**.

6.  Under **Filter**, you can add or remove file and folder filters. Select the **Filter local paths only** checkbox if you want to apply the filter only to local paths. For more information, see [Folder comparison filters](folder-comparison-filters.md).

7.  Under **View Options**, select which items to show in the comparison results. You can select a combination of view options by checking or clearing the following boxes:
    -   **Show items that exist only in source path**
    -   **Show items that exist only in target path**
    -   **Show items that are different**
    -   **Show items that are the same**

8.  Choose **OK**.

9.  The **Folder Difference** window displays a list of compared items in the source and target folders. In the **Folder Difference** window:

    -   You can compare the differences between two versions of a file by right-clicking the file and choosing **Compare**. The [Diff window](compare-files.md) appears.  
    -   If there are differences between a server folder and your local folder, you can [reconcile them](reconcile-differences-between-two-folders.md).

## Related articles

-  [Folder comparison filters](folder-comparison-filters.md)  
-  [Compare files](compare-files.md)  
-  [Reconcile differences between two folders](reconcile-differences-between-two-folders.md) 
