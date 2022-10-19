---
title: Check out and edit files
titleSuffix: Azure Repos
description: Check out and edit files
ms.assetid: eb404d63-c448-4994-9416-3e6d50ec554a
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/11/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Check out and edit files

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

When you want to edit a file, you can open it from Visual Studio **Solution Explorer** or **Source Control Explorer**. When you begin editing a file, it's automatically checked out to you.

In rare situations, for example if you want to check out and lock the file to make sure your changes are checked in before changes from other team members, you might need to manually check out and optionally lock a file.

> [!IMPORTANT]
> As a best practice, use the **Lock type** option with discretion, and notify your teammates why you are locking an item and when you plan to remove the lock.

## Prerequisites  

You must be one of the **Contributors** for your project. To learn more, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Check out items manually

1. In Visual Studio [Solution Explorer](develop-code-manage-pending-changes.md) or [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), select the files you want to edit, right-click, and select **Check Out for Edit**.

1. In the **Check Out** dialog box, you can optionally lock the files. Under **Lock type**, select one of the following options:

   - **Unchanged - Keep any existing lock**
   - **Check In - Allow other users to check out but prevent them from checking in**

   > [!NOTE]
   > The **Lock type** menu isn't available if:
   >
   > - Another team member has locked the file. If other users have locked any of the specified files, the lock operation fails. For more information, see [Lock and unlock folders or files](lock-unlock-folders-files.md).
   > - The **Enable multiple check-out** option has been disabled by a project administrator, which isn't recommended. Administrators can configure this option by selecting **Team** > **Team Project Settings** > **Source Control** from the Visual Studio menu bar.

1. Choose **Check Out**.

In **Solution Explorer** and in **Source Control Explorer**, a check mark ![TFSC Checked-Out Status Icon](media/check-out-edit-files/IC51402.gif) appears next to the items that you have checked out. In **Team Explorer**, the files show under **Included Changes** on the **Pending Changes** page. In **Source Control Explorer**, a pending **edit** change is visible to you and to members of your team.

## Work from the command prompt

- The [Get command](get-command.md) gets files from the server.
- The [Checkout (or Edit) command](checkout-or-edit-command.md) checks out files from the server.

## Tips

-   If you're beginning a new task, it's a good idea to [download the latest files from the server](download-get-files-from-server.md) before you check out files and begin your work.
-   To help you and your team organize and track your work, use the **My Work** or **Pending Changes** page to associate a task or a bug with the work you're doing. See [Develop code and manage pending changes](develop-code-manage-pending-changes.md).  
-   If you use a [server workspace](decide-between-using-local-server-workspace.md), files that you haven't checked out are read-only.
-   You can [review and manage your work](develop-code-manage-pending-changes.md), [suspend your work](suspend-your-work-manage-your-shelvesets.md), and ultimately [contribute your work to the team's codebase](check-your-work-team-codebase.md).