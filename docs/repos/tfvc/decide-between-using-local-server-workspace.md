---
title: Decide between using a local or a server workspace
titleSuffix: Azure Repos
description: Decide between using a local or a server workspace
ms.assetid: 492696f5-cafe-4090-af07-6dbbb0bd6a86
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Decide between using a local or a server workspace

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

When you [create or edit a workspace](create-work-workspaces.md), you can specify whether its location is **Local** or **Server**. In most cases, local is best because it provides several advantages. Most notably, you can perform core version control operations even when you're not connected to your Team Foundation Server.

<a name="local"></a>

## Why should I use a local workspace?

When you use a local workspace, you get the following advantages:

**Work offline easily.** You can quickly begin editing a file when your network connection is unavailable or unreliable. From Solution Explorer you can add, edit, delete, rename, undo, and compare items in your workspace even when you're not connected to your Team Foundation Server.

**Easily restore files that you have deleted locally.** To restore locally deleted files, just [get your files](develop-your-app-team-foundation-version-control.md).

**Visual Studio automatically detects changes.** When you add or delete files outside of Visual Studio, the program automatically detects these changes.

>**Important:**  
>One drawback to using a local workspace is that performance degrades as the number of items increases. See the next section for details.

## When might I need to use a server workspace?

When you use a server workspace, Visual Studio keeps only one copy of each file. This can significantly reduce disk space usage and improve performance when you have a lot of items. We recommend that you use a server workspace if:

-   Your workspace contains more than 100,000 items.

-   You want to use Visual Studio 2010 or earlier versions to work with the workspace.

-   You need to use the **Enable get latest on check-out** option.

**Work offline with difficulty and with poor performance.** When you are offline in a server workspace, you cannot work with your local files because they are read-only until you check them out. You can check out files only from Solution Explorer, and only after you switch to offline mode (as explained below). While you're offline, you can't perform any other operations, such as add, delete, rename, or undo.

>**Tip:**
You can improve responsiveness by enabling asynchronous checkout. For more information, see [Manage project collection workspace settings for your team](decide-between-using-local-server-workspace.md#Admin_Settings).

### Switch to offline mode when using a server workspace

When you use a server workspace and cannot connect to your Team Foundation Server, Source Control Explorer is disabled. However, if you have local copies of your files in your server workspace, you can still edit them from Solution Explorer. After the server becomes available again, you can check the changes into version control.

>**Tip:**
If working offline is important to you, then you should consider using a local workspace instead of a server workspace See [Local Workspaces](decide-between-using-local-server-workspace.md#local) earlier in this topic.

### To work with version-controlled files when the server is offline

1.  From your local working folder, open the solution that you want to work on.

    If the server is offline, the **Go Offline** dialog box appears.

2.  Choose **OK**, and then edit your solution files.

3.  On the **File** menu, choose **Save**.

4.  In the **Save of Read-Only File** dialog box, choose **Overwrite** to remove the write-protection from the file.

### To commit your offline changes to the server when it is available

1.  In **Solution Explorer**, open the context menu for the solution or file, and then choose **Go Online**.

    The **Go Online** dialog box appears and shows the changes that you made offline.

2.  Under **Name**, select the check box for each change that you want to check in, and then choose **Go Online**.

    The changes that you made offline are added to Team Foundation version control as pending changes.

3.  In **Solution Explorer**, open the context menu for the files that you edited offline, and then choose **Check In** to commit the changes to the server.

<a name="Admin_Settings"><a/>

## Manage project collection workspace settings for your team

If you are an [administrator](https://msdn.microsoft.com/library/ms253077), you can specify which type of workspace Visual Studio creates for your team members by default: Local or Server. You can also enable asynchronous checkout for your team's server workspaces.

1.  On the menu bar, choose **Team**, **Project Collection Settings**, **Source Control**.

    The **Source Control Settings** dialog box appears.

2.  On the **Workspace Settings** tab, choose either the **Local** or **Server** option button.

3.  You can reduce the time the system takes to check out files to server workspaces by selecting **Enable asynchronous checkout in server workspaces**. If you select this option:

    -   The PendChange permission is no longer enforced.

    -   Checkout locks are disabled

## Work from the command prompt

-    [Workspace Command](workspace-command.md)  and [Workspaces Command](workspaces-command.md): Create and manage your workspaces from the command prompt.

## Q & A

 
### Q: Someone checked out a file even though a check-out lock was applied to it. How did this happen?

**A:** The use of local workspaces makes [check-out locks](understand-lock-types.md) un-enforceable. If you have [sufficient permissions](../../organizations/security/permissions.md#tfvc) you can use the [workspaces command](workspaces-command.md) to see the local workspaces being used in your project collection.

    tf workspaces /format:detailed /owner:* /collection:https://YourServer/YourCollection/

### Q: Why can't I see when some members of my team of checked out a file?

Pending changes of team members who use local workspaces are not visible to other team members in [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md).

### Q: Is it OK to switch the location of my workspace?

**A:** Yes, you can change the location of your workspace from server to local or from local to server whenever you need to. See [Create and work with workspaces](create-work-workspaces.md).

### Q: Can I use the same workspace in multiple instances of Visual Studio?

**A:** Although Visual Studio does not block you from running multiple instances against the same workspace, this usage is not supported. Also, working this way is more likely to cause problems if you are using a local workspace.

### Q: How does a local workspace work?

**A:** A local workspace caches the unmodified version of each of your files to enable you to edit, compare, and do other things without being connected to the server.
