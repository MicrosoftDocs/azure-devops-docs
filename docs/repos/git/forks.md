---
title: Fork your repository
titleSuffix: Azure Repos
description: Learn how to isolate experimental or risky code using a forking workflow with Azure Repos Git repos.
ms.assetid: d212c1ec-19b9-4d5a-bb7f-2a909f151180
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 10/19/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Forks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Git repo forks are useful when people want to make experimental, risky, or confidential changes to a codebase, but those changes need to be isolated from the codebase in the original repo. A new fork is basically a clone of the original repo pushed to a new remote repo. The fork is independent of the original repo, and is a complete copy unless you specify a single branch.

As an independent copy, changes you make to your fork, such as adding commits or branches, aren't shared with the original repo. If you want to merge your codebase changes into the original repo, you must create a [pull request](pull-requests.md) (PR) to request review and approval of those changes.

The forking process doesn't transfer any permissions, policies, or build pipelines from the original repo to your fork.

This article addresses working with forks in Azure Repos Git repositories, and provides links to GitHub content that discusses how to manage Forks in GitHub repos.

In this article you learn how to:

>[!div class="checklist"]
>* Share code between forks
>* Choose between branches and forks
>* Enable repo forks
>* Create a fork
>* Clone your fork locally
>* Push local changes to your fork
>* Create and complete a PR
>* Sync your fork

## Prerequisites for access to Azure Repos

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## Share code between forks

The original repo is often referred to as the *upstream* repo. You can create PRs to merge changes in either direction: from fork to upstream, or upstream to fork. The most common direction is from fork to upstream. The destination repo's permissions, policies, builds, and work items will apply to the PR.

## Choose between branches and forks

For a small team of 2-5 developers, a [forking workflow](#the-forking-workflow) might not be necessary because everyone can work in [feature branches](git-branching-guidance.md#use-feature-branches-for-your-work) and [branch policies](branch-policies-overview.md) can protect the default branch. However, if your team expands and outgrows this arrangement they can switch to a forking workflow.

If your repo has a large number of casual or infrequent committers, such as an open source project might, we recommend the forking workflow. Typically, only core contributors to your project should have direct commit rights to your original repo. Other collaborators should use a forking workflow to isolate their proposed changes until the core contributors have a chance to review their work.

## Enable repo forks

To enable forks for an Azure Repos Git repo, see [enable Forks](repository-settings.md#enable-forks).

To enable forks for a GitHub repo, see [Managing the forking policy for your organization](https://docs.github.com/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).

## The forking workflow

The forking workflow consists of five steps that are described in the following sections.

1. [Create a fork](#create-a-fork)
1. [Clone your fork locally](#clone-your-fork-locally)
1. [Push local changes to your fork](#push-local-changes-to-your-fork)
1. [Create and complete a PR](#create-and-complete-a-pr)
1. [Sync your fork](#sync-your-fork)

## Create a fork

The following steps describe how to fork an Azure Repos Git repo. 

>[!NOTE]
>To fork a repo in a Azure DevOps project, you must have the [Create Repository](../../organizations/security/permissions.md#git-repository-object-level) permission for that project. Repo owners should consider creating a dedicated project for forks and assigning the Create Repository permission to all contributors. For more information about setting permissions, see [Set Git repository permissions](set-git-repository-permissions.md).

1. From your web browser, navigate to the Azure Repos Git repo that you want to fork. Select **Repo > Files** and then choose **Fork** from the ellipsis menu to open the **Fork** dialog.

    :::image type="content" source="media/forks/2022/fork-option.png" border="true" alt-text="Screenshot of the Fork menu item in the More actions menu on the Repo Files page in Azure Repos." lightbox="media/forks/2022/fork-option-lrg.png":::

1. In the **Fork** dialog, name the forked repo, choose the project where you want the fork to be created, select the branches to include in the fork, and then choose **Fork**. You can specify whether the fork will contain all branches or just the default branch. If the repo contains several topic branches, then consider only including the default branch in your fork.

    :::image type="content" source="media/forks/2022/fork-dialog.png" border="true" alt-text="Screenshot of the Fork dialog on the Repo Files page in Azure Repos." lightbox="media/forks/2022/fork-dialog-lrg.png":::

For information about how to fork a GitHub repo, see [Fork a repo](https://docs.github.com/get-started/quickstart/fork-a-repo).

## Clone your fork locally

After you've forked a repo, [clone](clone.md) your fork to create a local copy in a folder on your computer. You can clone from the [command line](clone.md?tabs=git-command-line#clone-an-azure-repos-git-repo) or by using an IDE like [Visual Studio](clone.md?tabs=visual-studio-2019#clone-an-azure-repos-git-repo). For more information about cloning a repo, see [Clone an existing Git repo](clone.md).

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo you cloned. For convenience, add another alias named `upstream` for the repo you forked from, which is referred to as the upstream repo. The following steps describe how to add an `upstream` alias.

>[!TIP]
>For convenience, you can use the `origin` and `upstream` aliases instead of their corresponding URLs in your Git commands.

#### [Visual Studio](#tab/visual-studio)

To add an `upstream` alias in Visual Studio, follow these steps:

1. Choose **Tools > Options** from the menu bar to open the **Options** window. Select **Source Control > Git Repository Settings > Remotes**, and then choose **Add** to open the **Add Remote** dialog.

    :::image type="content" source="media/forks/visual-studio-2019/git-remote-settings.png" border="true" alt-text="Screenshot of the Add button in the Remotes pane of the Git Repository Settings submenu of the Source Control menu in Visual Studio 2019." lightbox="media/forks/visual-studio-2019/git-remote-settings-lrg.png":::

1. In the **Add Remote** dialog, add a new remote called `upstream` and enter the Git [clone URL](clone.md#get-the-clone-url-of-an-azure-repos-git-repo) of the repo you forked. Then, choose **Save**.

    :::image type="content" source="media/forks/visual-studio-2019/git-add-remote-dialog.png" border="true" alt-text="Screenshot of the Add Remote dialog box in Visual Studio 2019." lightbox="media/forks/visual-studio-2019/git-add-remote-dialog-lrg.png":::

#### [Command Line](#tab/command-line)

On the command line, navigate to the root folder of your local repo, and then run the following command to add a new remote named `upstream`. Replace `<clone URL>` with the Git [clone URL](clone.md#get-the-clone-url-of-an-azure-repos-git-repo) of the repo you forked.

```console
git remote add upstream <clone URL>
```

For example, `git remote add upstream https://fiber-teams@dev.azure.com/fiber-teams/FiberTests/_git/FiberTests` adds an `upstream` alias.

To edit an existing `upstream` alias, run the following command:

```console
git remote set-url upstream <clone URL>
```

---

## Push local changes to your fork

When you fork, you create a personal and independent copy of the remote repo. So, there's nothing to prevent you from working directly in the `main` branch of the local clone and then pushing that work to the `main` branch of your fork. However, it's generally better to use [feature branches](git-branching-guidance.md#use-feature-branches-for-your-work) for your work. By using feature branches:

- You can maintain multiple, independent workstreams simultaneously.

- You make it easier for others to understand the work you share because that work is organized into distinct workstreams by branch.

A typical Git [workflow](gitworkflow.md#git-workflow) includes these steps:

1. [Create](./create-branch.md) a local feature or bug fix branch.

1. Make changes in the new branch and [commit](commits.md) your work. Typically, people make multiple commits when working on a feature or bug fix.

1. [Push](pushing.md) the feature or bug fix branch to your fork. Your fork has the alias `origin`.

For information on how to push your changes, see [Share code with push](pushing.md).

## Create and complete a PR

In Azure Repos, to merge into the original repo the changes that you pushed to your fork, you can:

1. [Create a PR](pull-requests.md) to request [review](review-pull-requests.md) and approval of your changes. When you open a PR, set the PR source branch to the feature or bugfix branch in your fork. The PR target branch is typically the `main` branch of the repo you forked. That repo is referred to as the upstream repo and has the alias `upstream`.

   The following screenshot shows the *source* repo and branch and the *target* repo and branch of a PR created in Azure Repos.

   :::image type="content" source="media/forks/2022/pr-cross-repo-fork.png" border="true" alt-text="Screenshot of the PR source and target branch options in Azure Repos." lightbox="media/forks/2022/pr-cross-repo-fork-lrg.png":::

   For more information about how to create a PR using your browser, Visual Studio, or the Azure DevOps CLI, see [Create a PR](pull-requests.md#create-a-pull-request).

   >[!IMPORTANT]
   >Anyone with the [Read](../../organizations/security/permissions.md#git-repository-object-level) permission on the upstream repo can open a PR to it. If the upstream repo has a PR build [pipeline](../../pipelines/repos/azure-repos-git.md) that's configured to run on PR creation, a build will run on the changes introduced by your PR.

1. For your PR to complete, all required reviewers must approve the PR changes and all target branch policies must be met. On PR approval and [completion](complete-pull-requests.md#complete-a-pull-request), the changes in the PR source branch will merge into the PR target branch.

For information about how to create and complete a GitHub PR, see [Creating a pull request](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) and [Merging a pull request](https://docs.github.com/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

## Sync your fork

After a PR merges the changes from your fork into the target branch of the upstream repo, you can [pull](pulling.md) from the target branch of the upstream repo to update your corresponding local branch with both your changes and any changes made by other contributors. Then you're ready to:

- Create a new feature or bug fix branch from the updated local branch. 

- Update your fork by [pushing](pushing.md) from your updated local branch to `origin`. 

Typically, the target branch of the upstream repo is `main`. If you aren't directly editing your local `main` branch (you work in feature branches), then [pulling](pulling.md) from the upstream branch `upstream/main` will update your local `main` branch without merge conflicts.

## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)
> [Review pull requests](review-pull-requests.md)

## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Update code with fetch, merge, and pull](pulling.md)
- [Save your work with commits](commits.md)
