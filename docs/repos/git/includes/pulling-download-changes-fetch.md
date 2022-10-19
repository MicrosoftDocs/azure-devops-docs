
1. In the **Git Changes** window, choose **Fetch**. Then select **outgoing/incoming** to open the **Git Repository** window.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/fetch-git-changes-window.png" border="true" alt-text="Screenshot of the Fetch buttons and Incoming link in the Git Changes window of Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/fetch-git-changes-window-lrg.png":::

   You can also choose **Fetch** from the Git menu.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/fetch-git-menu.png" border="true" alt-text="Screenshot of the Fetch option in the Git menu in Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/fetch-git-menu-lrg.png":::

1. In the **Git Repository** window, fetched commits appear in the **Incoming** section. Select a fetched commit to see the list of changed files in that commit. Select a changed file to see a diff view of changed content.

   :::image type="content" source="../media/pulling/visual-studio-2019/git-experience/fetch-git-repository-window.png" border="true" alt-text="Screenshot of the Git Repository menu in Visual Studio 2019." lightbox="../media/pulling/visual-studio-2019/git-experience/fetch-git-repository-window-lrg.png":::

> [!TIP]
> **Fetch** won't delete remote-tracking branches in your local repo cache that no longer have a remote counterpart. To configure Visual Studio to [prune](https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---prune) stale remote-tracking branches during a **Fetch**:
> - Select **Tools** > **Options** > **Source Control** > **Git Global Settings**.
> - Set the **Prune remote branches during fetch** option to `True`.
