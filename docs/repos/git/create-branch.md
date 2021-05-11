---
title: Create a new Git branch from the web
titleSuffix: Azure Repos
description: Use the branches page to create a new Git branch in Azure DevOps Services or TFS
ms.assetid: 13783230-7762-4fd0-b392-5187c7f9fe1e
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 10/11/2018
monikerRange: '<= azure-devops'
---

# Create a new Git branch

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

>[!TIP]
> Need help creating a new Git branch in your local repo from Visual Studio or the command line? Visit the [Git tutorial]().

>[!IMPORTANT]
> Users of TFS 2015 and previous won't have the **Branches** tab in the **Code** view. When using those versions, you can create a new branch in TFS from the **Code** view by selecting the dropdown list next to the branch name and then selecting **New branch**.


## Create a new branch

#### [Browser](#tab/browser) 

::: moniker range=">= azure-devops-2019"

1. View your repo's branches by selecting **Repos** > **Branches** while viewing your repo on the web.

   ![View your branches](media/repos-navigation/repos-branches.png)

2. Select **New branch** in the upper-right corner of the page.

   ![Create branch button](media/branches/create-branch.png)

3. In the **Create a branch** dialog box, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

   :::image type="content" source="media/branches/create-branch-web-2020.png" alt-text="Screenshot that shows the creation of a branch with the new branch dialog.":::

4. Select **Create branch**.

::: moniker-end

::: moniker range="<= tfs-2018"

1. View your repo's branches by selecting **Branches** while viewing your repo on the web.

   ![Branches page](media/branches/branches_nav.png)

2. Select **New branch** in the upper-right corner of the page.

   ![Create branch button](media/branches/create-branch.png)

3. In the **Create a branch** dialog box, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

   ![Create a branch with the new branch dialog](media/branches/newbranch_dialog.png)

4. Select **Create branch**.

::: moniker-end

>[!TIP]
> You will need to [fetch](pulling.md) the branch before you can see it and swap to it in your local repo.

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]  

**Visual Studio 2015 & 2017**

1. Open up Team Explorer and go to the **Branches** view.
2. Right-click the parent branch (usually `main`) to base your changes and choose **New Local Branch From...**. 
3. Supply a branch name in the required field and select **Create Branch**. Visual Studio automatically performs a `checkout` to the newly created branch.
   
      ![Creating Git Branches in Visual Studio](media/vsbranch.gif)   


#### [Command Line](#tab/command-line)

Use the `branch` command to create the branch and `checkout` to swap to that branch.

```console
git branch feature1
git checkout feature1
```

---