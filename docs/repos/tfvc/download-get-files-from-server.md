---
title: Download (get) files from the Server
titleSuffix: Azure Repos
description: Download (get) files from the Server
ms.assetid: 33798544-9e9e-4200-b7d8-127fb088c735
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Download (get) files from the Server

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

In general, you should get the latest files from the server on a regular basis so that the code you develop is compatible with the code developed by others on your team and to minimize the risk of creating bugs when you check in your code. You can download the latest version or a previous version of one or more files from your Team Foundation Server to your workspace on your dev machine.

**Required permissions**

You must be one of the **Contributors** for your project. See [Team Foundation Server default groups, permissions, and roles](https://msdn.microsoft.com/library/ms253077).

## Get the latest version of some files

You should get the latest files from your server after you [set up your dev machine](set-up-team-foundation-version-control-your-dev-machine.md). Then you can begin developing your app.

Later, as you develop functionality in the workspace on your dev machine, your code is isolated from the changes that are made by other developers. But when you are ready (for example, you have completed and checked in the code that completes a task), you should get the latest version of your team's files.

### To get the latest version of some files

-   In [Solution Explorer](develop-code-manage-pending-changes.md) or [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to the files or the folders that contain the files that you want to get, select them, open their shortcut menu, and choose **Get Latest Version**.

## Get a specific version of some files

In special cases (for example, to fix a regression bug), you might need to get and work with a specific version of one or more files.

>**Note:**
>  Keep in mind that if you get an older version of a file, make changes to it, and then try to check it in, there is an increased chance that you will need to [resolve conflicts](resolve-team-foundation-version-control-conflicts.md) before you can complete the check-in.

### To get a specific version of some files from the History window

1.  In Solution Explorer or Source Control Explorer, browse to the folder or file, open its shortcut menu, and choose **View History**.

2.  In the [History](get-history-item.md) window, open the shortcut menu of a version and choose **Get This Version**.

### To get a specific version of some files from Solution Explorer or Source Control Explorer

1.  In Solution Explorer or Source Control Explorer, browse to the files or the folders that contain the files you want to get, select them, open their shortcut menu, and choose **Get Specific Version**.

    The **Get** dialog box appears.

2.  Choose an option from the **Type** drop-down list:

    -   **Changeset**   Get a version by specifying a [changeset](find-view-changesets.md). For more information, see [Find and view changesets](find-view-changesets.md).

    -   **Date**   Get a version by specifying a date. If selected, select a date in the **Date** list.

    -   **Label**   Get a version by specifying a [label](use-labels-take-snapshot-your-files.md). For more information, see [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md).

    -   **Latest Version**   Select this option to get the latest version on the server.

    -   **Workspace Version**   Gets a version by specifying a [workspace](create-work-workspaces.md).

3.  (Optional) Select the **Overwrite writable files that are not checked out** option.

    If selected, files from the server will overwrite all files that do not have the read-only attribute associated with them and are not checked out. Only files on the server, which are different, will overwrite the files in the local workspace. By default, this option is not selected.

    >**Tip:**
    >  This option is equivalent to running the following command: [tf get /overwrite](get-command.md).

4.  (Optional) Select the **Overwrite all files even if the local version matches the specified version** option.

    If selected, files from the server overwrite all files.

    >**Tip:**
    >  This option is equivalent to running the following command: [tf get /force](get-command.md).

5.  Choose **Get**.

    Source Control Explorer appears. If you chose **Latest Version** in step 5, the system updates the **Latest** column with the status of **Yes**.

## Work from the command prompt

-    [LocalVersions Command](localversions-command.md)  Display the version of one or more items in your workspace.

-    [Get command](get-command.md)  Get files from the server.

## Tips

-   ![Tip](_img/download-get-files-from-server/IC572374.png) When you get files and folders from the server, the system also deletes any checked-in files from your local workspace that have been deleted from the server. Files that have been renamed or moved on the server are changed in your workspace to match the changes on the server.

-   ![Tip](_img/download-get-files-from-server/IC572374.png) In Source Control Explorer you can verify whether you have the latest version of a file in the **Latest** column. You can see specific version information about an item by opening its shortcut menu and choosing **Properties**.

-   ![Tip](_img/download-get-files-from-server/IC572374.png) If you are using a [server workspace](decide-between-using-local-server-workspace.md), and you have accidentally deleted some files that you want to restore, you must use the [tf get /all](get-command.md) command to restore the deleted files.
