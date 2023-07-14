---
title: Reconcile differences between two folders
titleSuffix: Azure Repos
description: Reconcile differences between two folders in Team Foundation Version Control (TFVC).
ms.assetid: 8776e3dd-fc70-422c-a191-81b22a989403
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Reconcile differences between two folders

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

After you compare a server folder and a local folder in Team Foundation Version Control (TFVC), you can reconcile the differences between the folder contents and between files that have conflicting pending changes in your local folder. For more information, see [Compare folders](compare-folders.md).

## Prerequisites

To do these procedures, you must have the **Read** and **Check out** permissions set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

> [!NOTE]
> To reconcile two local folders or files, you don't need Azure DevOps permissions.

## Reconcile differences

1. In Visual Studio **Source Control Explorer**, right-click a folder, and then select **Compare**. The **Compare** dialog box opens.

1. In the **Compare** dialog box, select the folder versions to compare, and then select **OK**. The **Folder Difference** window appears.

1. In the **Folder Difference** window, right-click the folder or file you want to reconcile, and select **Reconcile**.

   > [!NOTE]
   > You can select multiple folders and files by holding down the Ctrl key and selecting the items. Also, you can press Ctrl+A to select all folders and files.

   The **Reconcile Folder Differences** window appears.

1. For **Files that are not in your workspace**, either select **Get Latest Version** to download the latest version of the files, or select **Ignore** to leave these files only on the server.

1. For **Files that are not on the server**, either select **Add to Server** to upload the files to the server, or select **Ignore** to leave these files only in your local workspace.

1. For **Files that have pending changes**, select one of the following options:

   - **Ignore** to keep the changes made to these files in your local workspace.
   - **Undo Pending Changes** to disregard changes made to these files in your local workspace.
   - **Get Latest Version** to download the latest version of these files to your local workspace.

1. For **Files that do not have pending changes**, select one of the following options:

   - **Get Latest Version** to download the latest versions of files.
   - **Check Out** to check out the server version of files. If you made any changes to your local versions, you'll get an option to merge these changes with the server version when you check in the files.
   - **Ignore** to leave these files on the server.

1. Select **OK**.

   If you have pending changes in your local workspace that conflict with the server version of a file, and you choose to **Get Latest Version** of the file, the **Resolve Conflicts** window appears. For more information, see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).

## Related articles

- [Compare folders](compare-folders.md) 
- [Compare files](compare-files.md) 
- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
