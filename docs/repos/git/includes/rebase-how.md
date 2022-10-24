---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. Choose **Git > Manage Branches** to open the **Git Repository** window.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

1. In the **Git Repository** window, right-click the target branch and select **Checkout**.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window.png" border="true" alt-text="Screenshot of the Checkout option in the branch context menu in the Git Repository window of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window-lrg.png":::

1. Right-click the source branch, and select **Rebase \<target-branch\> onto \<source-branch\>**.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-rebase-git-repository-window.png" border="true" alt-text="Screenshot of the Rebase option in the branch context menu in the Git Repository window of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-rebase-git-repository-window-lrg.png":::

1. Visual Studio will display a confirmation message after a successful rebase.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-rebase-confirmation.png" border="true" alt-text="Screenshot of the rebase confirmation message in the Git Repository window of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-rebase-confirmation-lrg.png":::

   If the rebase is halted due to merge conflicts, Visual Studio will notify you. You can either [resolve the conflicts](../merging.md?tabs=visual-studio), or cancel the rebase and return to the pre-rebase state.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-rebase-conflict.png" border="true" alt-text="Screenshot of the rebase conflict message in the Git Repository window of Visual Studio." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-rebase-conflict-lrg.png":::
