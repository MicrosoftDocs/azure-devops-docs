---
title: Share your code with Git using Visual Studio 2015
titleSuffix: Azure Repos
description: Share code in Git using Visual Studio
ms.assetid: 0c1dc48e-6f52-499d-a03e-6361c9a838dd
ms.prod: devops
ms.technology: devops-code-git 
toc: show
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 08/29/2017
monikerRange: '>= tfs-2015'
---


# Share your code with Visual Studio 2015 and Azure Repos

> [!div class="op_single_selector"]
> - [Visual Studio 2017](share-your-code-in-git-vs-2017.md)
> - [Visual Studio 2015 Update 2](share-your-code-in-git-vs.md)
> - [Visual Studio 2013](share-your-code-in-git-vs-2013.md)   
   
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015  

Share your Visual Studio solution in a new Azure DevOps Services or Team Foundation Server Git repo.

> This article walks you through the steps to get a Visual Studio solution on your PC into a Git repo you can share with others, even if you don't have an organization in Azure DevOps.
> If you need to work with a Visual Studio solution hosted in an existing repo, use the [Git quick start](gitquickstart.md) instead.

##  Create a local Git repo for your project

Create a new local Git repo for your project by selecting ![Publish to Git from the Visual Studio Status bar](_img/share-your-code-in-git-vs/publish_status_bar.png) on the status bar in the lower right hand corner of Visual Studio.
This will create a new repo in the folder the solution is in and commit your code into that repo.

Once you have a local repo, select items in the status bar to quickly navigate between Git tasks in Team Explorer.

![Visual Studio Git status bar](_img/share-your-code-in-git-vs/vs-status-bar.png)

----
- ![Visual Studio Unpublished Changes Status Bar icon](_img/share-your-code-in-git-vs/vs_unpublished_changes.png) shows the number of unpublished commits in your local branch. Selecting this will open the **Sync** view in Team Explorer.
- ![Visual Studio Pending Changes Status Bar icon](_img/share-your-code-in-git-vs/vs_pending_changes.png) shows the number of uncommitted file changes. Selecting this will open the **Changes** view in Team Explorer.
- ![Visual Studio Repo Status Bar icon](_img/share-your-code-in-git-vs/vs_current_repo.png) shows the current Git repo. Selecting this will open the **Connect** view in Team Explorer.
- ![Visual Studio branch status bar icon](_img/share-your-code-in-git-vs/vs_branch_picker.png) shows your current Git branch. Selecting this displays a branch picker to quickly switch between Git branches or create new branches.   
 
----

## Publish your code to Azure Repos

1. In the **Sync** view in Team Explorer, select the **Publish Git Repo** button under **Publish to Azure Repos**.

 ![Publish your code from VS directly into Azure Repos](_img/share-your-code-in-git-vs/vsts_get_started_te.png)

0. Verify your email and select your account in the **Account Url** drop down. 

0. Enter your repository name and select **Publish Repository**. 

 ![Publish your VS project to a new Git repo in Azure Repos](_img/share-your-code-in-git-vs/vsts_publish_repo.png)

 > This creates a new Project in your account with the same name as the repository. To create the repo in an existing Project, click **Advanced** 
next to **Repository name** and select a project.

Your code is now in a Git repo in Azure Repos. You can view your code on the web by selecting **See it on the web** .
  
  ![View your Azure Repos/TFS Git repo on the Web](_img/share-your-code-in-git-vs/vsts_view_on_web.png)
  
## Commit and push updates

0. As you write your code, your changes are automatically tracked by Visual Studio. 
You can [commit](commits.md) changes to your local Git repository by selecting the pending changes icon ( ![Visual Studio Pending Changes Status Bar icon](_img/share-your-code-in-git-vs/vs_pending_changes.png) ) from the status bar.

0. On the **Changes** view in Team Explorer, add a message describing your update and commit your changes.

 ![Add a comment and choose Commit](_img/share-your-code-in-git-vs/vs_commit_te.png)

0. Select the unpublished changes status bar icon ( ![Visual Studio Unpublished Changes Status Bar icon](_img/share-your-code-in-git-vs/vs_unpublished_changes.png) ) or the **Sync** view in Team Explorer. Select **Push** to 
update your code in Azure DevOps Services/TFS.

 ![Push your changes](_img/vspush.gif)

## Get changes from others

Sync your local repo with changes from your team as they make updates.

0. From the **Sync** view in Team Explorer, fetch the [commits](commits.md) that your team has made. 
Double-click a commit to view its file changes.

 ![Choose Fetch to see any changes that your team has made](_img/share-your-code-in-git-vs/vs_fetch_commits.png)

0. Select **Sync** to merge the fetched commits into your local repo and then [push](pushing.md) any unpublished changes to Azure Repos.

 ![Choose Pull to get these commits locally](_img/share-your-code-in-git-vs/vs_sync_commits.png)

0. The changes from your team are now in your local repo and visible in Visual Studio.

 ![The changes are now in your local repo](_img/share-your-code-in-git-vs/vs_pull_complete.png)
 
## Try this next

[Set up a build](../../pipelines/overview.md) for your code and learn more about using Git in the [Azure Repos Git tutorial](gitworkflow.md).

## Troubleshooting

<!-- BEGINSECTION class="md-qanda" -->

###  I don't see the **Publish** button in the status bar.

A: The **Publish** link in the status bar ( ![Publish to Git from the Visual Studio Status bar](_img/share-your-code-in-git-vs/publish_status_bar.png) )  was added in Visual Studio 2015 Update 2 and will only appear when you have Git as your source control provider. If your code is
already in a Git repo, you won't see the **Publish** button in the status bar, but the information from your local repo instead.

If you are in a previous version of Visual Studio, create a local Git repo for your project by selecting the **Create new Git repository** option in the **New Project** window when you create a new project. 

You can create a local Git repo for an existing solution by right-clicking your project in the Solution Explorer and selecting **Add Solution to Source Control**.

### How can I see what changes are in a commit before I pull it into my local branch?

A: To see what's changed in a commit, go to the **Synchronization** page in Team Explorer and right-click on the commit. Select **View Commit Details**.
You can then right-click on any file modified by the commit and select **Compare with Previous...** to view the changes compared to the previous 
version of the file.

 ![Choose Compare with Previous from the context menu](_img/share-your-code-in-git-vs/vs_compare_with_previous.png)

### How do I associate my commits with work items?

A: You can include work items in your commits through **Related Work Items** in the **Changes** page in Team Explorer. 

![Adding work items to changes](_img/share-your-code-in-git-vs/vs_linked_work_items.png)

Work items can be included in commits by adding #_ID_ into the commit message. For example, "Fixing bug #23 in the reporting tools" would link work item 23
to the commit. The work item is linked when the commit is pushed to Azure Repos.

### Can I use the Git command prompt with Visual Studio?

A: Visual Studio's Team Explorer and the Git command line work great together. Changes to your repos made in either tool will be reflected in the other. 
Make sure to install the latest release of [Git for Windows](https://git-scm.com/download/win), which has tools to help you connect to your Azure DevOps Services/TFS repos.

See [the Azure Repos Git tutorial](gitworkflow.md) and the [command reference](command-prompt.md) for additional help using Git from the command line.

<!-- ENDSECTION --> 
