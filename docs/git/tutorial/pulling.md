---
title: Pull changes to your local Git repo | VSTS & TFS
description: Using Git Pull, fetch, and merge to get code from others
ms.assetid: b06b9f18-b76f-418c-93d0-f12d1f48f3c0
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.topic: get-started-article
ms.manager: douge
ms.author: sdanie
ms.date: 09/14/2017
---

#   Update code with fetch and pull

#### VSTS | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Update the code in your local repo with the changes from other members of your team using the following commands:

- `fetch` , which downloads the changes from your remote repo but does not apply them to your code.
- `merge` , which applies changes taken from `fetch` to a branch on your local repo.
- `pull` , which is a combined command that does a `fetch` and then a `merge`.   

In this tutorial you learn how to:

> [!div class="checklist"]
> * Download changes with fetch
> * Update branches with merge
> * Fetch and merge with pull

## Video Overview

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Pull/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

If there is a merge conflict between a commit you haven't [pushed](pushing.md) yet and a commit you are merging or pulling, you'll need to [resolve those conflicts](merging.md) before you finish updating your code.

## Download changes with fetch

You download changes to your local branch from the remote through `fetch`. `Fetch` asks the remote repo for all commits 
and new branches that others have pushed but you don't have and downloads them into your repo, creating local branches as needed. 

`Fetch` does not merge any changes into your local branches, it only downloads the new commits for your review.

# [Visual Studio](#tab/visual-studio)

Visual Studio uses the **Sync** view in Team Explorer to `fetch` changes. 
Changes downloaded by `fetch` are not applied until you **Pull** or **Sync** the changes.

![Fetching changes in Visual Studio's Team Explorer Synchronization View](_img/vsfetch.gif)

# [Command Line](#tab/command-line)

Run the `git fetch` command from the command line to download changes to your local branch.

```
git fetch
```

After running `git fetch you'll see results similar to the following example:

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

![Pulling Changes with Visual Studio](_img/vspull.gif)

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




## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)

> [!div class="nextstepaction"]
> [Resolve merge conflicts](merging.md)