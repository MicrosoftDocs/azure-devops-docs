---
title: Decide between using a local or a server workspace
titleSuffix: Azure Repos
description: Decide between using a local or a server workspace
ms.assetid: 492696f5-cafe-4090-af07-6dbbb0bd6a86
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: apawast
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Decide between using a local or a server workspace

#### Azure Repos | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

When you [create or edit a workspace](create-work-workspaces.md), you can specify whether its location is **Local** or **Server**. 

<a name="local"></a>

## When should I use a local workspace?

Use a local workspace if there is not a reliable connection between your computer and the Azure DevOps instance you are connected to, and there will be less than 100,000 items in the workspace. It may be also be preferable to you if you do not need to work as part of a team and strongly prefer working with the filesystem in a manner similar to Git.

>**Important:**  

>Using a local workspace can have performance degrade as the number of items approaches or exceeds 100,000. This is because local workspaces keep multiple copies of the same file to enable some version control actions locally due to the DevOps Server connection not being reliably available. This also means there is more room taken up on disk. 



## When might I need to use a server workspace?

Use a server workspace when the specific conditions are not met for using a local workspace, or if...

-   You want to use Visual Studio 2010 or earlier versions to work with the workspace.

-   You need to use the **Enable get latest on check-out** option.

>**Tip:**
You can improve responsiveness by enabling asynchronous checkout. For more information, see [Manage project collection workspace settings for your team](decide-between-using-local-server-workspace.md#Admin_Settings).


### Working in a server workspace while disconnected
You can still work in a server workspace if temporarily disconnected from the DevOps instance by taking a solution "offline". Later when the connection is available, you can take the solution "online" to return to the connected behavior. Visual Studio will detect the disconnected condition and take the solution offline automatically, but if you wish to do so manually, these are the steps.

### To take a solution offline

1.  From your local working folder, open the solution that you want to work on.

    If the server is offline, the **Go Offline** dialog box appears.

2.  Choose **OK**

When saving edits to files in your solution, you may be prompted with the **Save of Read-Only File** dialog box. This is expected. Choose **Overwrite** to remove the write-protection from the file. It should only ask once per file while offline.

Visual Studio does not put the solution back online automatically, the user must do that using the following steps.

### To bring your changes online when the DevOps service is available

1.  In **Solution Explorer**, open the context menu for the solution or file, and then choose **Go Online**.
    - or - 
    In the **File** menu, under Source Control, choose **Go Online**.

    The **Go Online** dialog box appears and shows the changes that you made offline.

2.  Check the check box for each change that you want to check in, and then choose **Go Online**.

    The changes that you made offline are added to Team Foundation version control as pending changes.


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
