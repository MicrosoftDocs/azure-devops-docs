---
title: Create a new Git branch from the web | VSTS & TFS
description: Use the branches page to create a new Git branch in VSTS or TFS
ms.assetid: 13783230-7762-4fd0-b392-5187c7f9fe1e
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 08/23/2016
---

# Create a new Git branch

#### VSTS | TFS 2018 | TFS 2017

>[!TIP]
> Need help creating a new Git branch in your local repo from Visual Studio or the command line? Visit the [Git tutorial](tutorial/branches.md).   

>[!IMPORTANT]
> Users of previous TFS releases will not have the **Branches** tab in the **Code** view. Create a new branch in TFS from the **Code** view by selecting the drop-down next to the branch name and then selecting **New branch**.


## Create a new branch from the web 
   
0. From your Team Project, select the **Code** view. Make sure you're working with the right repo, then select **Branches**.

   ![Branches nav view in the web portal](_img/branches/branches_nav.png)

0. Select the **New branch** button in the upper right corner of the page.

0. In the **Create a branch** dialog, enter a name for your new branch, select a branch to base the work off of, and associate any work items.

    ![Create a branch with the new branch dialog](_img/branches/newbranch_dialog.png)

0. Select **Create branch**.

>[!TIP]
> You will need to [fetch](tutorial/pulling.md) the branch before you can see it and swap to it in your local repo.