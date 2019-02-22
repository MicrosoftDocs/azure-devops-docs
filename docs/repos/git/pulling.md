---
title: Pull changes to your local Git repo
titleSuffix: Azure Repos
description: Using Git Pull, fetch, and merge to get code from others
ms.assetid: b06b9f18-b76f-418c-93d0-f12d1f48f3c0
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 09/10/2018
monikerRange: '>= tfs-2013'
---

# Update code with fetch and pull

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Update the code in your local repo with the changes from other members of your team using the following commands:

- `fetch` , which downloads the changes from your remote repo but does not apply them to your code.
- `merge` , which applies changes taken from `fetch` to a branch on your local repo.
- `pull` , which is a combined command that does a `fetch` and then a `merge`.   

In this tutorial you learn how to:

> [!div class="checklist"]
> * Download changes with fetch
> * Update branches with merge
> * Fetch and merge with pull
> * Update your local branch with the latest changes from master

## Video Overview

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Pull/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

If there is a merge conflict between a commit you haven't [pushed](pushing.md) yet and a commit you are merging or pulling, you'll need to [resolve those conflicts](merging.md) before you finish updating your code.

## Download changes with fetch

You download changes to your local branch from the remote through `fetch`. `Fetch` asks the remote repo for all commits 
and new branches that others have pushed but you don't have and downloads them into your repo, creating local branches as needed. 

`Fetch` does not merge any changes into your local branches, it only downloads the new commits for your review.

>[!TIP]
>To help keep your branches list clean and up to date, configure Git to prune remote branches during fetch. You can configure this setting from the [command line](git-config.md?tabs=command-line#prune-remote-branches-during-fetch) or from within [Visual Studio](git-config.md?tabs=visual-studio#prune-remote-branches-during-fetch).

# [Visual Studio](#tab/visual-studio)

Visual Studio uses the **Sync** view in Team Explorer to `fetch` changes. 
Changes downloaded by `fetch` are not applied until you **Pull** or **Sync** the changes.

0. Open up the **Synchronization** view in Team Explorer by selecting the **Home** icon and choosing **Sync**. 

  ![Synchronization view](_img/pulling/synchronization-menu.png)

0. Choose **Fetch** to update the incoming commits list. (There are two **Fetch** links, one near the top and one in the **Incoming Commits** section. You can use either one as they both do the same thing.)

  ![Fetch](_img/pulling/fetch.png)

0. You can review the results of the fetch operation in the incoming commits section.

  ![Incoming commits](_img/pulling/incoming-commits.png)

# [Command Line](#tab/command-line)

Run the `git fetch` command from the command line to download changes to your local branch.

```
git fetch
```

After running `git fetch` you'll see results similar to the following example:

```
remote: Found 3 objects to send. (9 ms)
Unpacking objects: 100% (3/3), done.
   e2ccee6..55b26a5  feature1   -> origin/feature1
```

---



## Update branches with merge

Apply changes downloaded through `fetch` using the `merge` command. `Merge` takes the commits retrieved from `fetch` and tries to add them to your local branch. The merge will keep the 
commit history of your local changes so that when you share your branch with [push](pushing.md) Git will know how others should merge your changes.

The challenge with merge is when a commit taken from `fetch` conflicts with an existing unpushed commit on your branch. 
Git is generally very smart about resolving merge conflicts automatically, but sometimes you must [resolve merge conflicts manually](merging.md) and complete the merge with a new merge commit.

# [Visual Studio](#tab/visual-studio)

Team Explorer merges when you do a **Pull** or a **Sync** from the **Changes** view. **Sync** is a combined operation of pulling remote changes and then pushing local ones,
synchronizing the commits on the local and remote branch.

0. Open up the **Synchronization** view in Team Explorer by selecting the **Home** icon and choosing **Sync**. 

  ![Synchronization view](_img/pulling/synchronization-menu.png)

0. Choose **Sync**.

  ![Synchronization view](_img/pulling/sync.png)

0. A confirmation message is displayed when the sync operation completes.

  ![Synch operation complete](_img/pulling/sync-results.png)

# [Command Line](#tab/command-line)

Running `merge` without any flags or parameters adds the commits downloaded from `fetch` into the local branch.
Git adds a merge commit if you have any conflicts. This merge commit has two parent commits (one for each branch) and contains the changes committed to resolve the conflicts between branches. 

```
git merge
```
<pre>
<font color="#b5bd68">Updating e2ccee6..55b26a5
 1 file changed, 1 insertion(+)</font>
</pre>

You can merge without committing using `--no-commit` to attempt to perform the merge but not commit the final changes, which gives you a chance to inspect the changed files before finalizing
the merge with a commit.

---



<a name="pull"></a>  

## Fetch and merge with pull

`Pull` does a `fetch` and then a `merge` to download the commits and update your local branch in one command instead of two.
Use `pull` to quickly bring your branch up to date with the remote when you aren't worried about reviewing the changes before merging them into your own branch.

# [Visual Studio](#tab/visual-studio)

Open the Team Explorer and open the Sync view. Then click the **Pull** link under **Incoming Commits** to `pull` remote changes and merge them into your local branch. Pulling
updates files in your open project, so make sure to [commit your changes](commits.md) before pulling.

0. Open up the **Synchronization** view in Team Explorer by selecting the **Home** icon and choosing **Sync**. 

  ![Synchronization view](_img/pulling/synchronization-menu.png)

0. Choose **Pull** to fetch remote changes and merge them into your local branch. (There are two **Pull** links, one near the top and one in the **Incoming Commits** section. You can use either one as they both do the same thing.)

  ![Pull](_img/pulling/pull.png)

0. A confirmation message is displayed when the pull operation completes.

  ![Pull operation complete](_img/pulling/pull-results.png)

# [Command Line](#tab/command-line)

`git pull` without any options will do a `fetch` of the changes you don't have from `origin` and will `merge` the changes for your current branch. 

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git pull
<font color="#b5bd68">Updating 55b26a5..e7926cd
 1 file changed, 2 insertions(+), 1 deletion(-)</font>
</pre>

Pull a remote branch into a local one by passing remote branch information into `pull`:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git pull <font color="#b5bd68">origin users/frank/bugfix</font>
</pre>

This is a useful way to directly merge the work from remote branch into your local branch.

---

## Update your branch with the latest changes from master

When working in a branch, you may want to incorporate the latest changes from the master branch into your branch. There are two different approaches you can use to perform this: rebase or merge.

- **Rebase** takes the changes made in the commits in your current branch and replays them on the history of another branch. The commit history of your current branch will be rewritten so that it starts from the most recent commit in the target branch of the rebase.
- **Merge** merges the changes from the source branch to the target branch using a merge commit, which becomes part of the commit history.

>[!NOTE]
>This article demonstrates the `merge` approach. For more information on `rebase` and guidance on which method is right for your scenario, see [Apply changes with Rebase - When to rebase vs. merge](rebase.md#when-to-rebase-vs-merge) and [Rebase vs merge](https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_vs_merge) from the Pro Git book.

# [Visual Studio](#tab/visual-studio)

To merge the latest changes from the master branch to your branch:

0. Open the **Branches** view in Team Explorer. Ensure your desired target branch is checked out, right-click the target branch, and choose **Merge From**.

  ![Merge from](_img/pulling/merge-from-menu.png)

0. Specify the desired **Merge from branch**, which is `master` in this example, and choose **Merge**.)

  ![Merge from master](_img/pulling/merge-from.png)

  If there are any merge conflicts you'll be notified at this stage. [Resolve the merge commits](merging.md?tabs=visual-studio) before proceeding to the next step.

0. Enter a commit message and select **Commit Staged**.

  ![Commit merge from master](_img/pulling/commit-merge-from-master.png)

0. When you are ready to push your local commits, including your new merge commit, to the remote server, choose **Push** from the Synchronization view.

  ![Push](_img/pulling/merge-from-master-push.png)

# [Command Line](#tab/command-line)

To merge the latest changes from master into your branch, in this example named `users/jamal/readme-fix`, you can use the following commands:

```cmd
git checkout users/jamal/readme-fix
git pull origin master
git push
```

`git pull origin master` fetches and merges the contents of the master branch with your branch and creates a merge commit. If there are any merge conflicts you'll be notified at this stage and you must [resolve the merge commits](merging.md?tabs=command-line) before proceeding. When you are ready to push your local commits, including your new merge commit, to the remote server, run `git push`. 






---

## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)

> [!div class="nextstepaction"]
> [Resolve merge conflicts](merging.md)
