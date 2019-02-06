---
title: Check out and edit files
titleSuffix: Azure Repos
description: Check out and edit files
ms.assetid: eb404d63-c448-4994-9416-3e6d50ec554a
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Check out and edit files

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

When you want to edit a file you can open it from Solution Explorer or from Source Control Explorer. When you begin editing a file, it is automatically checked out to you. In rare situations (for example, you want to check out and lock the file to make sure your changes are checked in before changes from other team members), you might need to manually check out (and optionally lock) an item.

**Required permissions**  
You must be one of the **Contributors** for your project. See [Team Foundation Server default groups, permissions, and roles](https://msdn.microsoft.com/library/ms253077).

## Manually check out items

### To manually check out items

1.  In [Solution Explorer](develop-code-manage-pending-changes.md) or in [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), select the files that you want to edit, open their shortcut menu, and choose **Check Out for Edit**.

2.  (Optional) You can lock the file.
	>**Important:**  
	>As a best practice, use the **Lock type** option with discretion and notify your teammates why you are locking an item, and when you plan to remove the lock.

    On the **Lock type** menu, choose:  

    -   **Unchanged**: Do not apply a lock to the items.  
    -   **Check Out**: Prevent other users from checking out and checking in the items until you check in and unlock them.

        >**Note:**  
		>In Visual Studio Team Foundation Server 2012 this option is not available if you are using a [local workspace](decide-between-using-local-server-workspace.md). Also, this lock is not enforceable because other users might be using local workspaces. See [Understand lock types](understand-lock-types.md).</p></td>
        </tr>
        </tbody>
        </table>

    -   **Check In**: Allow other users to check out the items you are checking out, but prevent them from checking in their changes until you check in your changes and unlock the items.

	>**Note:**  
	>The **Lock type** menu is not available if:</p>
    <ul>
    <li>Another team member has locked the file.</li>
    <li>The <strong>Enable multiple check-out</strong> option has been cleared (not a recommended practice) by an Administrator of your project. Administrator: On the menu bar, choose <strong>Team</strong>, <strong>Project Settings</strong>, <strong>Source Control</strong>).</li></ul>  

    If any other users have locked any of the specified items, the lock operation will fail. For more information, see [Lock and unlock folders or files](lock-unlock-folders-files.md).

3.  Choose **Check Out**.

In Solution Explorer and in Source Control Explorer, a check mark ![TFSC Checked-Out Status Icon](_img/check-out-edit-files/IC51402.gif) appears next to the items that you have checked out. In Team Explorer, a pending **edit** change to the file is displayed on the Pending Changes page. In Source Control Explorer, a pending **edit** change is visible to you and to members of your team.

## Work from the command prompt

-    [Get command](get-command.md)  Get files from the server.  
-    [Checkout (or Edit) command](checkout-or-edit-command.md)  Check out files from the server.

## Tips

-   If you are beginning a new task, it's probably a good idea for you to [download the latest files from the server](download-get-files-from-server.md) before you check out files and begin your work.  
-   To help you and your team organize and track your work, you should use the My Work or Pending Changes page to associate a task or a bug with the work you are doing. See [Develop code and manage pending changes](develop-code-manage-pending-changes.md).  
-   If you use a [server workspace](decide-between-using-local-server-workspace.md), files that you have not checked out are read-only.  
-   You can [review and manage your work](develop-code-manage-pending-changes.md), [suspend your work](suspend-your-work-manage-your-shelvesets.md), and ultimately [contribute your work to the team's codebase](check-your-work-team-codebase.md).
