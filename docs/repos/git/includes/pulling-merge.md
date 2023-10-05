
1. Choose **Git > Manage Branches** from the menu bar to open the **Git Repository** window.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu.png" border="true" alt-text="Screenshot of the Manage Branches option in the Git menu of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/manage-branches-git-menu-lrg.png":::

1. In the **Git Repository** window, right-click the target branch and select **Checkout**.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window.png" border="true" alt-text="Screenshot of the Checkout option in the Git Repository window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-checkout-git-repository-window-lrg.png":::

1. Right-click the source branch, and select **Merge \<source-branch\> into \<target-branch\>**.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-merge-git-repository-window.png" border="true" alt-text="Screenshot of the Merge option in the Git Repository window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-merge-git-repository-window-lrg.png":::

1. Visual Studio will display a confirmation message after a successful merge.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-merge-confirmation.png" border="true" alt-text="Screenshot of the merge confirmation message in the Git Repository window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-merge-confirmation-lrg.png":::

   If the merge is halted due to merge conflicts, Visual Studio will notify you. You can either [resolve the conflicts](../merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-merge-conflict.png" border="true" alt-text="Screenshot of the merge conflict message in the Git Repository window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-merge-conflict-lrg.png":::
