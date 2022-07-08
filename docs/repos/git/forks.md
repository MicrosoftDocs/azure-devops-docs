---
title: Fork your repository
titleSuffix: Azure Repos
description: Learn how to isolate experimental or risky code using a forking workflow in Azure DevOps Services.
ms.assetid: d212c1ec-19b9-4d5a-bb7f-2a909f151180
ms.technology: devops-code-git 
ms.topic: how-to
ms.date: 07/08/2022
monikerRange: '<= azure-devops'
---

# Forks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

Forks are useful when people want to make experimental, risky, or confidential changes to a codebase, but those changes need to be isolated from the original repo containing the codebase. If you create a fork of an original repo, the fork is an independent and typically complete copy&mdash;although you can fork a single branch. As an independent copy of an original repo, any changes you make to your fork, such as adding commits or branches, aren't shared with the original repo. If you want to share your codebase changes with the original repo, you must create a [pull request](pull-requests.md) (PR) to request review and approval of the changes.

When you fork an Azure Repos repo, you can specify whether your fork will contain all branches or just the default branch. The forking process doesn't transfer any permissions, policies, or build pipelines to your fork. Basically, the new fork acts as if you cloned the original repo, then pushed the local clone to a new remote repo.

In this article you learn how to:

>[!div class="checklist"]
>* Share code between forks
>* Choose between branches and forks
>* Enable repo forking
>* Create a fork
>* Clone your fork locally
>* Push local changes to your fork
>* Create and complete a PR
>* Sync your fork


## Share code between forks

The original repo is often referred to as the *upstream* repo. You can create PRs to merge changes in either direction: from fork to upstream, or upstream to fork. The most common direction is from fork to upstream. The destination repo's permissions, policies, builds, and work items will apply to the PR.


## Choose between branches and forks

For a small team of 2-5 developers, a fork might be unnecessary because everyone can work in [feature branches](git-branching-guidance.md#use-feature-branches-for-your-work), and you can create [branch policies](branch-policies-overview.md) to protect the default branch. However, if your team expands and outgrows this arrangement you might prefer to switch to a forking workflow.

If your repo has a large number of casual or infrequent committers, such as an open source project might, we recommend the forking workflow. Typically, only core contributors to your project should have direct commit rights to your original repo. Other collaborators should use a forking workflow to isolate their proposed changes until you've had a chance to review the work.


## Enable repo forking

To enable forking at the organization level, go to **Project Settings** > **Repositories**, then select the repository and **Options** next to the **Security** tab to turn on forks.

For some versions, you might have to enable forking as a Preview Feature, see **User settings** > **Preview Features**, then select `For this organization` from the drop-down, and make sure `Git Forks` is turned on.


## The forking workflow

The forking workflow consists of five steps that are described in the following sections.

1. [Create a fork](#create-a-fork)
1. [Clone your fork locally](#clone-your-fork-locally)
1. [Push local changes to your fork](#push-local-changes-to-your-fork)
1. [Create and complete a PR](#create-and-complete-a-pr)
1. [Sync your fork](#sync-your-fork)


## Create a fork

The following steps describe how to fork an Azure Repos repo.

>[!NOTE]
>To create a fork in a project, you must have the [Create Repository](../../organizations/security/permissions.md#git-repository-object-level) permission for that project. Repo owners can create a dedicated project for forks and assign the Create Repository permission to all contributors. For more information about setting permissions, see [Set Git repository permissions](set-git-repository-permissions.md).

1. From your web browser, navigate to the Azure Repos repo you want to fork. Select **Repo > Files** and then choose **Fork** from the ellipsis menu to open the **Fork** dialog.

    :::image type="content" source="media/forks/2022/fork-option.png" border="true" alt-text="Screenshot of the Fork menu item in the More actions menu on the Repo Files page in Azure Repos.":::

1. In the **Fork** dialog, name the forked repo, choose the project where you want the fork to be created, select the branches to include in the fork, and then choose **Fork**. If the repo contains several topic branches, then consider only including the default branch in your fork.

    :::image type="content" source="media/forks/2022/fork-dialog.png" border="true" alt-text="Screenshot of the Fork dialog on the Repo Files page in Azure Repos.":::


## Clone your fork locally

After you've forked a repo, [clone](clone.md) your fork to create a local copy in a folder on your computer. You can clone from the [command line](clone.md?tabs=command-line) or by using an IDE like [Visual Studio](clone.md?tabs=visual-studio-2019). For more information about cloning a repo, see [Clone an existing Git repo](clone.md).

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo you cloned. For convenience, add another alias named `upstream` for the repo you forked from, which is referred to as the upstream repo. The following steps describe how to add the `upstream` alias.

>[!TIP]
>Use the `origin` and `upstream` aliases instead of their corresponding URLs in your Git commands.

#### [Visual Studio 2019](#tab/visual-studio-2019/)

To add the `upstream` alias in Visual Studio, follow these steps:

1. Choose **Tools > Options** from the menu bar to open the **Options** window, select **Source Control > Git Repository Settings > Remotes**, and then choose **Add** to open the **Add Remote** dialog.

    :::image type="content" source="media/forks/visual-studio-2019/git-remote-settings.png" border="true" alt-text="Screenshot of the Add button in the Remotes pane of the Git Repository Settings submenu of the Source Control menu in Visual Studio 2019.":::

1. In the **Add Remote** dialog, add a new remote called `upstream` using the Git [clone URL](clone.md#get-the-clone-url-of-an-azure-repos-git-repo) of the repo you forked. Then, choose **Save** to add the `upstream` alias to the list of remotes.

    :::image type="content" source="media/forks/visual-studio-2019/git-add-remote-dialog.png" border="true" alt-text="Screenshot of the Add Remote dialog box in Visual Studio 2019.":::

#### [Visual Studio 2017](#tab/visual-studio-2017)

To add your upstream repository in Visual Studio, follow these steps:

1. Open the **Settings** page.

   :::image type="content" source="media/forks/visual-studio-2017/team-explorer/home-settings.png" border="false" alt-text="Screenshot of the Team Explorer Home view.":::

1. Choose **Repository Settings**.

    :::image type="content" source="media/forks/visual-studio-2017/team-explorer/settings.png" border="false" alt-text="Screenshot of Team Explorer settings.":::

1. Under **Remotes**, choose **Add**.

    :::image type="content" source="media/forks/visual-studio-2017/team-explorer/reposettings.png" border="false" alt-text="Screenshot of Repository settings.":::

1. Add a new remote called `upstream`, using the Git clone URL of the repo you forked.

    :::image type="content" source="media/forks/visual-studio-2017/team-explorer/new-remote.png" border="false" alt-text="Screenshot of Dialog: add new remote.":::

1. Select **Save** and the new remote is added and displayed in the repository settings.

    :::image type="content" source="media/forks/visual-studio-2017/team-explorer/upstream-added.png" border="false" alt-text="Screenshot of New remote added.":::

#### [Command Line](#tab/command-line)

On the command line, navigate to the root folder of your local repo. Run the following command to add a new remote named `upstream`. Replace `<clone URL>` with the Git [clone URL](clone.md#get-the-clone-url-of-an-azure-repos-git-repo) of the repo you forked.

```cmd
git remote add upstream <clone URL>
```

For example, `git remote add upstream https://fiber-teams@dev.azure.com/fiber-teams/FiberTests/_git/FiberTests`.

To edit an existing `upstream` alias, run the following command:

```cmd
git remote set-url upstream <clone URL>
```


---


## Push local changes to your fork

The fork you created is your personal copy of the remote repo you forked. So, there's nothing to prevent you from working directly in the `main` branch of the local clone and then pushing that work to the `main` branch of your fork. However, it's usually better to use [feature branches](git-branching-guidance.md#use-feature-branches-for-your-work) for your work. By using feature branches:

- You can maintain multiple, independent workstreams simultaneously.

- You make it easier for others to understand the work you share because that work is organized into distinct workstreams.

A typical Git [workflow](gitworkflow.md#git-workflow) includes these steps:

1. [Create](./create-branch.md) a local feature or bug fix branch.

1. Make changes and [commit](commits.md) your work to the new branch. Typically, people make multiple commits when working on a feature or bug fix.

1. [Push](pushing.md) your feature or bug fix branch to your fork, which has the alias `origin`.

For information on how to push your changes, see [Share code with push](pushing.md).


## Create and complete a PR

To merge the changes that you pushed to your fork into the original repo, you can:

1. [Create a PR](pull-requests.md) to request [review](review-pull-requests.md) and approval of your changes.

   When you open a PR, set the PR source branch to the feature or bugfix branch in your fork. The PR target branch is typically the `main` branch of the repo you forked. That repo is referred to as the upstream repo and has the alias `upstream`. The following screenshot shows the source repo and branch and the target repo and branch of a PR created in Azure Repos.

   :::image type="content" source="media/forks/2022/pr-cross-repo-fork.png" border="true" alt-text="Screenshot of the PR source and target branch options in Azure Repos.":::

   For more information about how to create a PR using either your browser, Visual Studio, or the Azure DevOps CLI, see [Create a PR](pull-requests.md#create-a-pull-request).

   >[!IMPORTANT]
   >Anyone with the [Read](../../organizations/security/permissions.md#git-repository-object-level) permission on the upstream repo can open a PR to it. If the upstream repo has a PR build [pipeline](../../pipelines/repos/azure-repos-git.md) that's configured to run on PR creation, a build will run on the changes introduced by your PR.

1. For your PR to complete, all required reviewers must approve the PR changes and all target branch policies must be met. On PR approval and completion, the work in your source branch will merge into the PR target branch.


## Sync your fork

After you've merged the changes from your fork into the target branch of the upstream repo, [pull](pulling.md) from the target branch of the upstream repo to your corresponding local branch. By doing so, you update that local branch with both your changes and any changes made by other contributors. Then you can:

- Create a new feature or bug fix branch from the updated local branch. 

- Update your fork by [pushing](pushing.md) from the updated local branch to `origin`. 

Typically, the target branch of the upstream repo is `main`. If you aren't directly editing your local `main` branch because you work in feature branches, then [pulling](pulling.md) from the upstream branch `upstream/main` should update your local `main` branch without merge conflicts.
