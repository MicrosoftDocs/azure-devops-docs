---
title: Delete a Git branch
titleSuffix: Azure Repos
description: "Learn how to delete a Git branch by using two different methods: in Visual Studio and from the command line."
ms.assetid: 4b18a164-d1cb-4f87-89cb-8dc227e64af1
ms.technology: devops-code-git 
ms.topic: tutorial
ms.date: 02/22/2018
monikerRange: '<= azure-devops'
---


# Delete a Git branch

> [!NOTE] 
> Deleting a branch in your local repo doesn't remove the branch on the remote.

#### [Browser](#tab/Browser/)

1. View your repo's branches by selecting **Repos** > **Branches** while viewing your repo on the web.

   ![View your branches](media/repos-navigation/repos-branches.png)

2. Select the **New branch** button in the upper right corner of the page.

   ![Create branch button](media/branches/create-branch.png)

3. In the **Create a branch** dialog, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

   :::image type="content" source="media/branches/create-branch-web-2020.png" alt-text="Screenshot that shows the creation of a branch with the new branch dialog.":::

4. Select **Create branch**.


#### [Visual Studio](#tab/visual-studio/)

**Visual Studio 2015 & 2017**

1. Open up Team Explorer and go to the **Branches** view.
2. Locate the branch you want to delete. Make sure that you aren't checked out to that branch, as you can't delete the branch you are currently working in.
3. Right-click the branch name and select **Delete**. If you have unpublished changes, Visual Studio will ask and make sure you want to delete the branch so you don't possibly lose work.

    ![Deleting a branch in Visual Studio](media/vsbranchdelete.gif)

You can delete a remote branch using the same method - locate the tree for the remote in Team Explorer's **Branches** view (such as `remotes/origin`), right-click and select **Delete**.

#### [Command Line](#tab/command-line/)
Delete a local branch using `git branch -d` while checked out to a different branch.

```
git branch -d <branch_name>
```

Deleting a remote branch requires use of the `git push` command using the `--delete` option.

```
git push origin --delete <branch_name>
```

* * *

