---
title: Develop and share your code in TFVC using Visual Studio
titleSuffix: Azure Repos
description: Share code in Team Foundation Version Control using Visual Studio
ms.assetid: 108544c0-c29e-4b3b-9a39-4573cf4a71dc
toc: show
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Develop and share your code in TFVC using Visual Studio

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Whether your software project is large, small, or brand new, 
in most cases you'll be better off if you use version control 
as early as possible. 
Here, we'll show you how to get started with 
Team Foundation Version Control (TFVC), a centralized system.
If you want to work in a distributed system, 
you can instead use [Git with Azure Repos](../../repos/git/share-your-code-in-git-vs.md).

Is your code in another place? [Learn how to migrate it here](#migrate).

[!INCLUDE [open-team-project-in-vs](_shared/open-team-project-in-vs.md)]

<a name="workspace"></a>
## Configure your workspace

0.	In Visual Studio, configure your workspace.

	![On Team Explorer home page, click Configure Workspace](_img/share-your-code-in-tfvc-vs/ConfigureWorkspace.png)

	[I don't see the Configure Workspace link. What do I do next?](#workspace_exists)

0.	Confirm your workspace path, map your workspace, and get the source.

	![On Team Explorer home page, click Map and get](_img/share-your-code-in-tfvc-vs/MapAndGet.png)

0.	Now you can check in source, queue builds, and manage work.

	![Visual Studio is now connected to your project](_img/share-your-code-in-tfvc-vs/MapWorkspaceSuccess.png)

## Create a new app

If you already have an app that you want to add to version control,
skip down to [Add an existing app](#app_add).

![New solution from team explorer](_img/share-your-code-in-tfvc-vs/team-explorer-new-solution.png)

Now that you've added your app, you can skip down to 
[snapshot your code](#snapshot).

<a name="app_add"></a>
## Add an existing app

### Move and open the solution

0. Close the solution.

0. Open the workspace folder that you created when you [configured your workspace](#workspace).

 ![Open the workspace folder from source control explorer](_img/share-your-code-in-tfvc-vs/open-workspace-folder-from-source-control-explorer.png)

0. Move the code you want to upload to the workspace folder.

 ![Move your source code to your workspace folder](_img/share-your-code-in-tfvc-vs/IC689415.png)

0. Open your solution in Visual Studio.

 ![Open your solution in Visual Studio](_img/share-your-code-in-tfvc-vs/open-solution-from-team-explorer-home.png)


### Add the solution to Azure Repos

0. Open the solution explorer (Keyboard: Ctrl + Alt + L).

0. Add your solution to version control.

 ![Add the solution to Azure Repos](_img/share-your-code-in-tfvc-vs/IC682953.png)

0. Check in the solution.

 ![Check in your solution](_img/share-your-code-in-tfvc-vs/IC682954.png)

0. Add a comment and check in.

 ![Add a comment and check in pending changes](_img/share-your-code-in-tfvc-vs/IC685248.png)

0. Open the source control explorer.

 ![Open the source control explorer](_img/share-your-code-in-tfvc-vs/IC682140.png)

 Your solution is now in TFS.

 ![Your solution in the source control explorer](_img/share-your-code-in-tfvc-vs/IC689416.png)

Your whole team can work on the code now. All your changes are tracked in version control.

<a name="snapshot"></a>
## Snapshot (check in) your code

0. When you edit code in Visual Studio, the changed file is automatically checked out. For example, Site.css is checked out after the border color has been changed to #ddd.

 ![Checked out file in the team explorer](_img/share-your-code-in-tfvc-vs/IC682155.png)

0. Compare the modified file with the latest version in source control.

 ![Compare in the solution explorer's context menu](_img/share-your-code-in-tfvc-vs/IC682955.png)

 You can see the difference between the two versions.

 ![Compare window](_img/share-your-code-in-tfvc-vs/IC682157.png)

0. Check in the changes.

 ![Check in from the context menu in the solution explorer](_img/share-your-code-in-tfvc-vs/IC682956.png)

 You can also check in from the code window, or the team explorer.

0. If you're working on a task or fixing a bug that's tracked as a work item, add that work item to your pending changes. Source control will resolve the bug or close the task, and it'll link the changeset to the work item.

 ![Related work items in pending changes](_img/share-your-code-in-tfvc-vs/IC682159.png)

0. Add a comment and check in.

 ![Source control explorer, source file context menu, check in](_img/share-your-code-in-tfvc-vs/IC685249.png)

0. Open the source control explorer.

 ![Source control explorer in the team explorer home page](_img/share-your-code-in-tfvc-vs/IC682161.png)

0. View the history of the file you changed.

 ![Source control explorer, source file context menu, view history](_img/share-your-code-in-tfvc-vs/IC682957.png)

 All the changesets that include this file are listed.

 ![History window](_img/share-your-code-in-tfvc-vs/IC682163.png)

## Troubleshooting

* [My code is somewhere else. Can I migrate it to my TFVC project on Azure DevOps Services?](#my-code-is-somewhere-else-can-i-migrate-it-to-my-tfvc-project-on-azure-devops-services)
* [I don't see the Configure Workspace link shown in the steps above. What do I do next?](#i-dont-see-the-configure-workspace-link-shown-in-the-steps-above-what-do-i-do-next)

<a name="migrate"></a>
### My code is somewhere else. Can I migrate it to my TFVC project on Azure DevOps Services?

Yes:

 * [Upgrade From Visual SourceSafe](http://msdn.microsoft.com/library/ms253060).
 * [Migrate from Team Foundation Server into Azure DevOps Services](../../migrate/migrate-from-tfs.md).

<a name="workspace_exists"></a>
### I don't see the Configure Workspace link shown in the steps above. What do I do next?

You might already have a workspace on your computer. To see your workspace, open Source 
Control Explorer. Or change your workspace. Find out how to [manage files under 
source control](http://msdn.microsoft.com/library/ms181370.aspx) or 
[manage workspaces](http://msdn.microsoft.com/library/ms181383.aspx).

![In Team Explorer, click Source Control Explorer or Manage Workspaces](_img/share-your-code-in-tfvc-vs/OpenSCE_ManageWorkspaces.png)

## Next steps

> [!div class="nextstepaction"]
> [Get your code reviewed](get-code-reviewed-vs.md)
