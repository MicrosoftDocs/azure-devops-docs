---
title: Reconcile differences between two folders
titleSuffix: Azure Repos
description: Reconcile differences between two folders
ms.assetid: 8776e3dd-fc70-422c-a191-81b22a989403
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Reconcile differences between two folders

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

After you compare a server folder and a local folder, you can reconcile the differences between the folder contents and between files that have conflicting pending changes in your local folder. For more information, see [Compare folders](compare-folders.md).

**Required Permissions**

To perform these procedures, you must have the **Read** and **Check out** permissions set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

>**Note:**
>  To reconcile two local folders or files, you do not need Team Foundation Server permissions.

### To reconcile differences

1.  In Source Control Explorer, right-click a folder, and then click **Compare**.

    The **Compare** dialog box appears.

2.  In the **Compare** dialog box. select the folder versions to compare. For more information see [Compare folders](compare-folders.md).

    The **Folder Difference** window appears.

3.  In the **Folder Difference** window, right-click the folder or file you want to reconcile, and click **Reconcile**.

    >**Note**:
    >  You can select multiple folders and files by holding down the CTRL key and clicking additional folders or files. Also, you can press CTRL+A to select all folders and files.

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

## See Also

#### Other Resources

 [Compare folders](compare-folders.md) 

 [Compare files](compare-files.md) 

 [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
