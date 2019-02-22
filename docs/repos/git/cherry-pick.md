---
title: Copy changes to a branch with cherry-pick
titleSuffix: Azure Repos
description: Copy and port changes from one branch to another in Git with cherry-pick,
ms.assetid: 5bf5a8d2-9ff2-4d89-b59f-484a3c14021a
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


# Copy changes with cherry-pick

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 Update 2

Copy commits from one branch to another using cherry-pick. Unlike a merge or rebase, cherry-pick only brings the changes from the commits you select, instead of all the changes in a branch.

Cherry-pick is a great way to tackle these common problems:

- Accidentally committing on the wrong branch. Cherry-pick the change(s) over to the correct branch and then reset the original branch to the previous commit.
- Pulling out a set of commits made in a feature branch so you merge them back to your `master` branch sooner.
- Porting in specific commits from the `master` branch without rebasing your branch.   

In this tutorial you learn how to:

> [!div class="checklist"]
> * Cherry-pick a commit

## Cherry-pick a commit

# [Visual Studio](#tab/visual-studio)

0. Open up Team Explorer and checkout to the branch you want to cherry-pick changes into using the **Branches** view.
0. Right-click the branch containing the changes you want and select **View History...**. 
0. Right-click the commit you want to cherry-pick and select **Cherry-pick**.    

    Visual Studio copies the changes made in that commit into a new one on your current branch.
    ![Cherry pick from inside Visual Studio](_img/vscherrypick.gif)

Repeat this process for each commit you need to bring over to your current branch.

# [Command Line](#tab/command-line)

Use `git log` to find the commit ID of the commit whose changes you want to copy.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git log app.ts
<font color="#b5bd68">commit d34bcef232f6cf033e1252b7300465d3e561b2ee
Author: Francis Totten &lt; frank@fabrikam.com &gt;
Date:   Wed May 18 21:10:39 2016 +0000

add complex query parsing logic</font>
</pre>
 
Once you have the commit ID, you pass it to `git cherry-pick` to copy the changed into your current branch.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git cherry-pick <font color="#b5bd68">d34bcef232f6c</font>   

<font color="#b5bd68">[featurebranch a343e2c] add complex query parsing logic
 Date: Thu May 19 19:07:26 2016 -0400
 1 file changed, 67 insertions(+), 6 deletions(-)</font>
</pre>

If you need to cherry-pick a range of commits, you can use two commit IDs separated by `...` to specify a range in your history.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git cherry-pick <font color="#b5bd68">d34bcef...86d2aec</font>   

<font color="#b5bd68">[featurebranch a343e2c] add complex query parsing logic
 Date: Thu May 19 19:07:26 2016 -0400
 1 file changed, 67 insertions(+), 6 deletions(-)
 [featurebranch 3065fc7] fix regression in error handling
 Date: Mon May 23 09:23:45 2016 -0400
 1 file changed, 32 insertions(+), 15 deletions(-)</font>
</pre>

---

## Next steps

> [!div class="nextstepaction"]
> [Resolve merge conflicts](merging.md)
