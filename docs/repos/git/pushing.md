---
title: Sync your changes to a remote Git repo
titleSuffix: Azure Repos
description: Using Git Push to share code with Git.
ms.assetid: 6c388abd-1b63-4957-9814-9ec5f104fa5b
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 09/10/2018
monikerRange: '>= tfs-2013'
---

# Share code with push

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Share changes made in [commits](commits.md) and [branches](branches.md) using the `push` command. 
Push your branches to the remote repository, where Git takes the commits and adds them to an existing branch on the remote or creates a new branch with the same commits as your local branch.

Git makes sure that pushed changes are consistent with the remote branch so others can [pull](pulling.md) your commits and merge them into their own local copy of the branch. 
Pushed branches that have finished work are reviewed and merged into the main branch of the your repo through a [pull request](pullrequest.md).

In this tutorial you learn how to:

> [!div class="checklist"]
> * Share your code with push

## Video overview
   
<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Push/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

<a name="share-your-code-with-push"></a>

## Share your code with push

# [Visual Studio](#tab/visual-studio)

0. Open up the **Synchronization** view in Team Explorer by selecting the **Home** icon and choosing **Sync**. 

  ![Synchronization](_img/gitquickstart-vs2017/sync.png)

  You can also navigate to the **Synchronization** view from the **Changes** view by choosing **Sync** immediately after making a commit.

  ![Synchronization](_img/gitquickstart-vs2017/commit-created-locally.png)

0. Select **Push** to share your commit with the remote repository.

  ![Push](_img/gitquickstart-vs2017/push-to-origin.png)

  If this is your first push to the repository you'll see the following message in place of the outgoing commits list: `The current branch does not track a remote branch. Push your changes to a new branch on the origin remote and set the upstream branch.` Select **Push** to push your changes to a new branch on the remote repository and set the upstream branch. The next time you push changes you'll see the list of commits.

# [Command Line](#tab/command-line)

The `push` command updates the remote branch on `origin` with the commits from your local branch.

```
git push
```

When running `git push` you'll see output similar to the following example:

```
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 861 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Analyzing objects... (3/3) (114 ms)
remote: Storing packfile... done (62 ms)
remote: Storing index... done (53 ms)
```

If the remote branch doesn't exist, run the following to create a remote branch on `origin`.

```
git push -u origin users/frank/bugfix
```

Your commits on your local branch are added to the branch on `origin`, and a upstream tracking relationship will be set up in
Git so that next time you `push` (or `pull`) from this local branch, you won't have to specify the remote branch name.

---

### Resolve merge conflicts before pushing   

If there are [conflicts](merging.md) between your local commits on the commits on the remote branch, you must first resolve these conflicts before you can push your changes. 
You should [pull](pulling.md) the changes from others first, resolve the conflicts and commit the changes, then re-attempt the `push`.

## Next steps

> [!div class="nextstepaction"]
> [Review code with pull requests](pullrequest.md) or [update code with fetch and pull](pulling.md)

