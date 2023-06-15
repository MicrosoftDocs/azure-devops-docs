---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. Choose **Git > Manage Branches** to open the **Git Repository** window.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

1. In the **Git Repository** window, right-click the target branch and choose **Checkout**.

   :::image type="content" source="../media/cherry-pick/visual-studio-2019/git-experience/branch-checkout.png" border="true" alt-text="Screenshot of the Checkout option in the branch context menu in the Git Repository window in Visual Studio." lightbox="../media/cherry-pick/visual-studio-2019/git-experience/branch-checkout-lrg.png":::

1. In the **Branches** view, right-click the source branch and choose **View History** to open a commit **History** tab.

   :::image type="content" source="../media/cherry-pick/visual-studio-2019/git-experience/view-branch-history.png" border="true" alt-text="Screenshot of the View History option in the Branches view of the Git Repository window in Visual Studio." lightbox="../media/cherry-pick/visual-studio-2019/git-experience/view-branch-history-lrg.png":::

1. In the **History** tab, right-click the commit you want to cherry-pick and choose **Cherry-Pick**. Visual Studio doesn't support cherry-picking more than one commit at a time, so you'll need to repeat this step for each commit that you want to cherry-pick.

   :::image type="content" source="../media/cherry-pick/visual-studio-2019/git-experience/cherry-pick-commit.png" border="true" alt-text="Screenshot of the Cherry-Pick option within the commit context menu in the Git Repository window in Visual Studio." lightbox="../media/cherry-pick/visual-studio-2019/git-experience/cherry-pick-commit-lrg.png":::

   Visual Studio creates a new target branch commit that contains the changes from the cherry-picked commit. If the cherry-pick operation doesn't complete successfully, Visual Studio will notify you.
