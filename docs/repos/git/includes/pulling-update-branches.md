
1. In the **Git Changes** window, choose **Pull**.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/pull-git-changes-window.png" border="true" alt-text="Screenshot of the Pull button in the Git Changes window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/pull-git-changes-window-lrg.png":::

   You can also choose **Pull** from the Git menu.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/pull-git-menu.png" border="true" alt-text="Screenshot of the Pull option in the Git menu in Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/pull-git-menu-lrg.png":::

1. A confirmation message displays when the pull operation completes.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/pull-confirm-git-changes-window.png" border="true" alt-text="Screenshot of the pull confirmation message in the Git Changes window in Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/pull-confirm-git-changes-window-lrg.png":::

   If there are conflicts during the merge portion of the pull operation, Visual Studio will notify you. You can either [resolve the conflicts](../merging.md?tabs=visual-studio), or cancel the merge and return to the pre-merge state.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/branch-pull-conflict.png" border="true" alt-text="Screenshot of the pull conflict message in the Git Changes window in Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/branch-pull-conflict-lrg.png":::

> [!NOTE]
> In Visual Studio, **Sync** performs a **Pull** then a **Push** to synchronize a local and remote branch. For more information on **Sync**, see [Use git fetch, pull, push and sync for version control in Visual Studio](/visualstudio/version-control/git-fetch-pull-sync).
