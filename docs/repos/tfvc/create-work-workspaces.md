---
title: Create and work with workspaces
titleSuffix: Azure Repos
description: Create and work with workspaces
ms.assetid: 1d7f6ed8-ec7c-48f8-86da-9aea55a90d5a
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 05/12/2017
monikerRange: '>= tfs-2015'
---


# Create and work with workspaces

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Your workspace is your local copy of the team's codebase. This is where you develop and test your code in isolation until you are ready to check in your work. In most cases the only workspace you need is created automatically for you and you don't have to edit it.

In some cases, you might want to modify your workspace or create multiple workspaces to isolate and switch among the changes you are making in different [branches](use-branches-isolate-risk-team-foundation-version-control.md).

## Add, edit, or remove a workspace

After you have [connected to the project](../../organizations/projects/connect-to-projects.md) (Keyboard: Ctrl + 0, C), you can manage your workspaces from the Team Explorer home page (Keyboard: Ctrl + 0, H)

![Manage workspaces from Team Explorer](_img/create-work-workspaces/IC698935.png)   
   
or from [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md).   

![Editing workspaces from Source Control Explorer](_img/create-work-workspaces/IC698934.png)

![Manage Workspaces dialog box](_img/create-work-workspaces/IC698937.png)   

Choose **Show remote workspaces** if you want to view all the workspaces you own (including those on other computers).

After you choose **Add** or **Edit** you can modify working folders in a new or an existing workspace.

![Edit Workspace dialog box](_img/create-work-workspaces/IC720118.png)   

If you want to remove the workspace, before you do so, make sure there are no pending changes (Keyboard: Ctrl + 0, P). If you have pending changes, you can either [check them in](check-your-work-team-codebase.md) or [shelve them](suspend-your-work-manage-your-shelvesets.md).

## Switch workspaces

When you switch from one workspace to another, to avoid confusing yourself, make sure you switch to the same workspace in both **Team Explorer** and **Source Control Explorer**.

1.  [Connect to the project](../../organizations/projects/connect-to-projects.md) (Keyboard: Ctrl + 0, C).

2.  On the home page (Keyboard: Ctrl + 0, H) choose the workspace you want to use.

    ![Switching workspaces from Team Explorer Home page](_img/create-work-workspaces/IC720119.png)

3.  In [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), choose the workspace the workspace you want to work in.

    ![Switching workspace in Source Control Explorer](_img/create-work-workspaces/IC700907.png)

## Work from the command prompt

You can create and manage your workspaces from the command prompt. You can also perform some tasks that are not possible in Visual Studio. For example, you can delete another user's workspace if you have [sufficient permissions](../../organizations/security/permissions.md#tfvc). See [Workspace Command](workspace-command.md), [Workspaces Command](workspaces-command.md), and [Workfold Command](workfold-command.md).

## Q & A

 
#### Q: Why would I need to change the working folders? How should I do it?

**A:** In general, you should map your entire project to a single local folder under **c:\\Users\\***YourName***\\Source\\Workspaces\\**. For example:

![Edit Workspace dialog box](_img/create-work-workspaces/IC720118.png)
Some tips on effective folder names:

-   Keep all folder, sub-folder, and file names short to simplify your work and avoid potential long-path issues that can occur with some types of code projects.

-   Avoid whitespace if you want make command-line operations a little easier to perform.

If your team has a large and complex codebase or if you want your workspace to contain only the files you need to improve performance, you can [optimize your workspace](optimize-your-workspace.md).

#### Q: Can I reuse and share folder mappings?

**A:** Yes. If you want to reuse or share folder mappings with other team members, you can copy the folder mappings. Simply open the shortcut menu in the **Working folders** list and choose **Copy**. To reuse the folder mappings, paste them into another version control workspace or a [build definition workspace](../../pipelines/build/repository.md). To share the folder mappings with your teammates, paste them into a text file and then share the file.

#### Q: What does "Cloaked" mean?

**A:** Choose **Cloaked** to exclude that folder from your workspace. For details and examples, see [Optimize your workspace](optimize-your-workspace.md).

#### Q: How do I add a folder non-recursively?

**A:** [Optimize your workspace](optimize-your-workspace.md).

#### Q: How do I choose advanced workspace options?

**A:** When you choose the **Advanced** button, some additional options appear.

-   **Owner**: Only the owner of a workspace can use it.

    >**Tip:**  Instead of changing the owner of your workspace when someone else needs to continue your work you can [suspend (or shelve)](suspend-your-work-manage-your-shelvesets.md) your work and then share the shelveset with them.

-   **Computer**: This box identifies the dev machine where the workspace exists, and it is read-only. You cannot move a workspace from one computer to another. However, if the name of your dev machine has changed and you want that change to appear in this field, run [tf workspaces /updatecomputername](workspaces-command.md).

-   **Permissions**: For a workspace you are using on a dev machine for a single developer, set this to **Private workspace**. Choose **Public workspace** if you want to use a single computer for a team to collaborate on an effort such as resolving a large number of conflicts. If you want any team member to be able to use a workspace but not check in their work, choose **Public workspace (limited)**. This option reserves check-in permission for the **Owner**.

-   **Location**: **Local** is the best choice in most cases. See [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

-   **File Time**:

    -   Choose **Checkin** if you want the date and time stamp of each file to generally match the stamp of the changeset of the version in your workspace. A few issues and exceptions are:

        -   When you modify the local file, the date and time stamp will match the date and time when you modified the file.

        -   This feature is available only if you are using Visual Studio 2012 or later and Visual Studio Team Foundation Server 2012 or later.

        -   The setting does not apply to folders, unless there is a pending add or delete operation to a file contained by the folder.

        -   You might not be able to build your code project incrementally. Instead, you will have to rebuild).

    -   Choose **Current** if you want the date and time stamp to match the date and time when you last modified the local file. For example, a team member checked in the latest change to the file on Monday. On Tuesday, you perform a get operation to update the file. The date and time stamp is set to Tuesday.

#### Q: Can I use the same workspace in multiple instances of Visual Studio?

**A:** Although Visual Studio does not block you from running multiple instances against the same workspace, this usage is not supported. Also, working this way is more likely to cause problems if you are using a local workspace.

#### Q: How do I add code, get code, develop my app, and check in?

[Add files to the server](add-files-server.md), [download files from the server](develop-your-app-team-foundation-version-control.md), [develop your app](develop-your-app-team-foundation-version-control.md), and [check in](check-your-work-team-codebase.md).

#### Q: I work at a remote site. Is there any way I can save bandwidth?

**A:** [Install Team Foundation Proxy and set up a remote site](/azure/devops/server/install/install-proxy-setup-remote).
