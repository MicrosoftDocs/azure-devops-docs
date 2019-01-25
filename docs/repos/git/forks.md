---
title: Fork your repository
titleSuffix: Azure Repos
description: Learn to isolate code using forks in Azure DevOps Services & TFS
ms.assetid: d212c1ec-19b9-4d5a-bb7f-2a909f151180
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 09/10/2018
monikerRange: '>= tfs-2018'
---


# Forks

#### Azure Repos | TFS 2018

A fork is a complete copy of a repository, including all files, commits, and (optionally) branches.
Forks are a great way to support an Inner Source workflow: you can create a
fork to suggest changes to a project when you don't have permissions to 
write to the original project directly.
Once you're ready to share those changes, it's easy to contribute them back using [pull requests](pull-requests-overview.md).

## What's in a fork

A fork starts with all the contents of its upstream (original) repository.
When you create a fork, you can choose whether to include all branches or limit to only the default branch.
None of the permissions, policies, or build pipelines are applied.
The new fork acts as if someone cloned the original repository, then pushed to a new, empty repository.
After a fork has been created, new files, folders, and branches are not shared between the repositories unless a PR carries them along.

### Sharing code between forks

You can create PRs in either direction: from fork to upstream, or upstream to fork.
The most common direction will be from fork to upstream.
The destination repository's permissions, policies, builds, and work items will apply to the PR.

## Choosing between branches and forks

For a very small team (2-5 developers), we recommend working in a single repo.
Everyone should work in topic branches, and master should be protected with [branch policies](branch-policies-overview.md).
As your team grows larger, you may find yourself outgrowing this arrangement and prefer to switch to a forking workflow.

If your repository has a large number of casual or infrequent committers (similar to an open source project), we recommend the forking workflow.
Typically only core contributors to your project have direct commit rights into your repository.
You should ask collaborators from outside this core set of people to work from a fork of the repository. 
This will isolate their changes from yours until you've had a chance to vet the work.

## The forking workflow

1. [Create a fork](#create-fork)
2. [Clone it locally](#clone-locally)
3. [Make your changes locally and push them to a branch](#push-changes)
4. [Create and complete a PR to upstream](#create-pr)
5. [Sync your fork to the latest from upstream](#sync-fork)

<a name="create-fork" />
### Create the fork

0. Navigate to the repository to fork, and choose **Fork**.

0. Specify a name, and choose the project where you want the fork to be created. If the repository contains a lot of topic branches, we recommend you fork only the default branch.

0. Choose **Fork** to create the fork.

![Create new fork](_img/forks/create-new-fork.png)

>[!NOTE]
> You must have the [Create Repository](../../organizations/security/permissions.md#git-repository-object-level) permission in your chosen project to create a fork.
> We recommend you create a dedicated project for forks where all contributors have the Create Repository permission. For an example of granting this permission, see [Set Git repository permissions](../../organizations/security/set-git-tfvc-repository-permissions.md#set-git-repository-permissions).

<a name="clone-locally" />
### Clone your fork locally

Once your fork is ready, clone it using the [command line](clone.md?tabs=command-line) or an IDE like [Visual Studio](clone.md).
The fork will be your `origin` remote.

For convenience, after cloning you'll want to add the upstream repository (where you forked from) as a remote named `upstream`.


# [Visual Studio](#tab/visual-studio)

To add your upstream repository in Visual Studio, follow these steps:

1. Open the **Settings** page.

   ![Team Explorer home](_img/forks/vs-te-home-settings.png)

2. Choose **Repository Settings**.

    ![Team Explorer settings](_img/forks/vs-te-settings.png)

3. Under **Remotes**, choose **Add**.

    ![Repository settings](_img/forks/vs-te-reposettings.png)

4. Add a new remote called `upstream`, using the Git clone URL of the repo you forked.

    ![Dialog: add new remote](_img/forks/vs-te-new-remote.png)

5. Select **Save** and the new remote is added and displayed in the repository settings.

    ![New remote added](_img/forks/vs-te-upstream-added.png)

# [Command Line](#tab/command-line)

On the command line, navigate to your repository, and type:

```git remote add upstream {upstream_url}```

---





<a name="push-changes" />
### Make and push changes

It's possible to work directly in `master` - after all, this fork is your personal copy of the repo.
We recommend you still work in a topic branch, though.
This allows you to maintain multiple, independent workstreams simultaneously.
Also, it reduces confusion later when you want to sync changes into your fork.

Make and commit your changes as you normally would.
When you're done with the changes, push them to `origin` (your fork).

<a name="create-pr" />
### Create and complete a PR

Open a pull request from your fork to the upstream.
All the policies, required reviewers, and builds will be applied in the upstream repo.
Once all policies are satisfied, the PR can be completed and the changes become a permanent part of the upstream repo.

![Pull request](_img/forks/cross-repo-pr.png)

>[!IMPORTANT]
>Anyone with the [Read](../../organizations/security/permissions.md#git-repository-object-level) permission can open a PR to upstream.
> If a PR build pipeline is configured, the build will run against the code introduced in the fork.

<a name="sync-fork" />
### Sync your fork to latest

When you've gotten your PR accepted into upstream, you'll want to make sure your fork reflects the latest state of the repo.
We recommend rebasing on `upstream`'s `master` branch (assuming `master` is the main development branch).

# [Visual Studio](#tab/visual-studio)

In Visual Studio, you can use the **Synchronization** page to fetch and rebase.

1. Open the **Synchronization** page in Team Explorer.

2. Fetch from `upstream`.

    ![Team Explorer sync](_img/forks/vs-te-sync.png)

3. Open the **Branches** page in Team Explorer. Make sure `master` is checked out.

    ![Check out master branch](_img/forks/vs-te-master-checked-out.png)

4. Rebase `master` onto `upstream/master`.

    ![Rebase](_img/forks/vs-te-rebase.png)

Now you're all set to start your next feature on a new topic branch.

# [Command Line](#tab/command-line)

On the command line, navigate to your repository and run:

```
git fetch upstream master
git rebase upstream/master
git push origin
```

---







The forking workflow lets you isolate changes from the main repository until you're ready to integrate them.
When you're ready, integrating code is as easy as completing a pull request.
