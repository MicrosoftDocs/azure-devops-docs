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

This article describes how to delete a Git branch by using two different methods: in Visual Studio and from the command line.

> [!NOTE] 
> Deleting a branch in your local repo doesn't remove the branch on the remote.

#### [Browser](#tab/Browser/)

1. View your repo's branches by selecting **Repos** > **Branches** while viewing your repo on the web.

   :::image type="content" source="media/repos-navigation/repos-branches.png" alt-text="Screenshot that shows how to access your branches.":::

2. Select the **More** options button at the end of the row of the branch you want to delete.

   :::image type="content" source="media/delete-git-branch/more-options.png" alt-text="Screenshot that shows how to access the menu to delete a branch.":::

3. In the options menu, select **Delete branch**.

4. In the **Delete branch** dialog box, select **Delete**.


#### [Visual Studio](#tab/visual-studio/)

**Visual Studio 2015 & 2017**

1. Open up Team Explorer and go to the **Branches** view.
2. Locate the branch you want to delete. Remember that you can't delete a branch you're currently working in.
3. Right-click the branch name and select **Delete**. Visual Studio will ask if you're sure you want to delete the branch if you have unpublished changes.

    ![Deleting a branch in Visual Studio](media/vsbranchdelete.gif)

You can delete a remote branch using the same method. Locate the tree for the remote in Team Explorer's **Branches** view (such as `remotes/origin`), right-click, and select **Delete**.

#### [Command Line](#tab/command-line/)
Delete a local branch using the `git branch -d` command while checked out to a different branch.

```
git branch -d <branch_name>
```

Deleting a remote branch requires use of the `git push` command using the `--delete` option.

```
git push origin --delete <branch_name>
```

* * *

## Next Steps

> [!div class="nextstepaction"]
> [Restore a deleted branch](./restore-deleted-branch.md)