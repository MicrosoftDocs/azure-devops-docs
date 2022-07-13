---
title: Reconcile differences between two folders
titleSuffix: Azure Repos
description: Reconcile differences between two folders
ms.assetid: 8776e3dd-fc70-422c-a191-81b22a989403
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
---


# Reconcile differences between two folders

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


After you compare a server folder and a local folder, you can reconcile the differences between the folder contents and between files that have conflicting pending changes in your local folder. For more information, see [Compare folders](compare-folders.md).

## Prerequisites

To perform these procedures, you must have the **Read** and **Check out** permissions set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

> [!NOTE]
> To reconcile two local folders or files, you do not need Team Foundation Server permissions.

## Reconcile differences

1.  In Source Control Explorer, right-click a folder, and then click **Compare**.

    The **Compare** dialog box appears.

2.  In the **Compare** dialog box. select the folder versions to compare. For more information see [Compare folders](compare-folders.md).

    The **Folder Difference** window appears.

3.  In the **Folder Difference** window, right-click the folder or file you want to reconcile, and click **Reconcile**.

    > [!NOTE]
    > You can select multiple folders and files by holding down the CTRL key and clicking additional folders or files. Also, you can press CTRL+A to select all folders and files.

    The **Reconcile Folder Differences** window appears.

4.  For **Files that are not in your workspace**, either click **Get** to download the latest version of files that you do not have in your local workspace, or click **Ignore** to leave these files only on the server.

5.  For **Files that are not on the server**, either click **Add to Server** to upload files that do not appear on the server or click **Ignore** to leave these files only in your local workspace.

6.  For **Files that have pending changes**, select one of the following options:

    -   **Ignore** to keep the changes made to these files in your local workspace.

    -   **Undo Pending Changes** to disregard changes made to these files in your local workspace.

    -   **Get** to download the latest version of these files to your local workspace.

7.  For **Files that do not have pending changes**, select one of the following options:

    -   Click **Get** to download the latest version of files that you do not have in your local workspace.

    -   Click **Check Out** to check out the server version of files. If you have made any changes to your local version, you will have an option to merge these changes with the server version when you check in the files.

    -   Click **Ignore** to leave these files only on the server.

8.  Click **OK**.

    If you have pending changes in your local workspace that conflict with the server version of a file and you chose to **Get** the latest version of the file, the **Resolve Conflicts** window appears. For more information, see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).

## Related articles

- [Compare folders](compare-folders.md) 
- [Compare files](compare-files.md) 
- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
