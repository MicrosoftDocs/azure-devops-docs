---
title: Create a new Git branch from the web
titleSuffix: Azure Repos
description: Use the branches page to create a new Git branch in Azure DevOps Services or TFS
ms.assetid: 13783230-7762-4fd0-b392-5187c7f9fe1e
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 10/11/2018
monikerRange: '>= tfs-2013'
---

# Create a new Git branch

#### Azure Repos | TFS 2018 | TFS 2017

>[!TIP]
> Need help creating a new Git branch in your local repo from Visual Studio or the command line? Visit the [Git tutorial](branches.md).

>[!IMPORTANT]
> Users of TFS 2015 and previous will not have the **Branches** tab in the **Code** view. When using those versions, you can create a new branch in TFS from the **Code** view by selecting the drop-down next to the branch name and then selecting **New branch**.


## Create a new branch from the web 

[!INCLUDE [temp](../../_shared/new-navigation.md)]

# [New navigation](#tab/new-nav)

::: moniker range="vsts"

0. View your repo's branches by selecting **Repos**, **Branches** while viewing your repo on the web.

  ![View your branches](_img/repos-navigation/repos-branches.png)

0. Select the **New branch** button in the upper right corner of the page.

  ![Create branch button](_img/branches/create-branch.png)

0. In the **Create a branch** dialog, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

    ![Create a branch with the new branch dialog](_img/branches/newbranch_dialog.png)

0. Select **Create branch**.


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

Select **Previous navigation** to view the steps for this procedure in your selected version of the documentation.

::: moniker-end

# [Previous navigation](#tab/previous-nav)

0. View your repo's branches by selecting **Branches** while viewing your repo on the web.

  ![Branches page](_img/branches/branches_nav.png)

0. Select the **New branch** button in the upper right corner of the page.

  ![Create branch button](_img/branches/create-branch.png)

0. In the **Create a branch** dialog, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

    ![Create a branch with the new branch dialog](_img/branches/newbranch_dialog.png)

0. Select **Create branch**.

---

>[!TIP]
> You will need to [fetch](pulling.md) the branch before you can see it and swap to it in your local repo.
