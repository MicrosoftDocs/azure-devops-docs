---
title: Decide between using a local or server TFVC workspace
titleSuffix: Azure Repos
description: Decide between using a local or a server workspace in Team Foundation Version Control (TFVC), and see how to take a solution offline and bring it back online.
ms.assetid: 492696f5-cafe-4090-af07-6dbbb0bd6a86
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 12/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Decide between using a local or server workspace

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

In Team Foundation Version Control (TFVC), when you [create or edit a workspace](create-work-workspaces.md) in Visual Studio, you can specify whether its location is **Local** or **Server**. A local workspace caches the unmodified version of each of your files to enable you to edit, compare, and do other things without being connected to the server.

You can change the location of your workspace from server to local or from local to server whenever you need to. For more information, see [Create and work with workspaces](create-work-workspaces.md).

## Use a local workspace

Use a local workspace if there isn't a reliable connection between your computer and the server you're connected to, and when there will be fewer than 100,000 items in the workspace. You might also prefer a local workspace if you don't work as part of a team, and you prefer working with the file system in a manner similar to Git.

- Using local workspaces makes [check-out locks](understand-lock-types.md) unenforceable.

- Pending changes of team members who use local workspaces aren't visible to other team members in [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md).

- Although Visual Studio doesn't block you from running multiple instances against the same workspace, this usage isn't supported. Working this way is more likely to cause problems if you're using a local workspace.

> [!IMPORTANT]
> Local workspaces keep multiple copies of the same file, to enable some version control actions locally if the server connection isn't available. With a local workspace, performance can degrade as the number of items approaches or exceeds 100,000. Multiple copies also take up more room on disk.

## Use a server workspace

Use a server workspace when the specific conditions aren't met for using a local workspace, or if you use the **Enable get latest on check-out** option.

### Work in a server workspace while disconnected

You can still work in a server workspace if you're temporarily disconnected from the TFVC server by taking the solution *offline*. Later when the connection is available, you can take the solution online to return to the connected behavior. Visual Studio detects a disconnected condition and takes the solution offline automatically, but if you want to do so manually, follow these steps.

> [!TIP]
> If working offline is important to you, consider using a local workspace instead of a server workspace.

### Take a solution offline

1. In Visual Studio **Source Control Explorer**, from your local working folder, open the solution you want to work on.

   If the server is offline, the **Go Offline** dialog box appears.

1. Choose **OK**

When saving edits to files in your solution, you might be prompted with the **Save of Read-Only File** dialog box. This prompt is expected once per file while offline. Choose **Overwrite** to remove the write protection from the file.

Visual Studio doesn't put a solution back online automatically. You must do that by using the following steps.

### Bring your changes online when the server is available

1. In **Solution Explorer**, open the context menu for the solution or file, and then choose **Go Online**. Or, in the Visual Studio **File** menu, choose **Source Control** > **Go Online**.

   The **Go Online** dialog box appears and shows the changes that you made offline.

1. Select the check box for each change that you want to check in, and then choose **Go Online**.

   The changes that you made offline are added to TFVC as pending changes.

<a name="Admin_Settings"><a/>

## Manage project collection workspace settings for your team

If you're an [administrator](../../organizations/security/permissions.md), you can specify which type of workspace Visual Studio creates for your team members by default, local or server. You can also enable asynchronous checkout for your team's server workspaces.

1. In the Visual Studio menu bar, choose **Team** > **Project Collection Settings**> **Source Control**.

   The **Source Control Settings** dialog box appears.

1. On the **Workspace Settings** tab, choose either the **Local** or **Server** option.

1. You can reduce the time the system takes to check out files to server workspaces by selecting **Enable asynchronous checkout in server workspaces**. If you select this option:

   - The **PendChange** permission is no longer enforced.
   - Checkout locks are disabled.

1. Select **OK**.

## Work from the command prompt

Use the TFVC utility [Workspace](workspace-command.md) and [Workspaces](workspaces-command.md) commands to create and manage workspaces from the command prompt.

If you have sufficient [permissions](../../organizations/security/permissions.md#tfvc), you can use the following `workspaces` command to see the local workspaces that are used in your project collection.

```
tf workspaces /format:detailed /owner:* /collection:https://<YourServer>/<YourCollection>/
```

