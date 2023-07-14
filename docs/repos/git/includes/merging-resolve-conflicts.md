---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. In the **Branches** pane of the **Git Repository** window, checkout the target branch. Then right-click the source branch and choose **Merge \<source-branch\> into \<target-branch\>**.

   :::image type="content" source="../media/merging/visual-studio-2019/git-experience/branch-merge-git-repository-window.png" border="true" alt-text="Screenshot of the Merge option in the branch context menu in the Git Repository window of Visual Studio." lightbox="../media/merging/visual-studio-2019/git-experience/branch-merge-git-repository-window-lrg.png":::

1. Visual Studio will notify you if Git halted the merge due to conflicts. In that event, you can either resolve the conflicts, or cancel the merge and return to the pre-merge state. The **Unmerged Changes section** of the **Git Changes** window lists the files with merge conflicts. For a file with merge conflicts in its content, double-click the file to open it in the merge editor.

   :::image type="content" source="../media/merging/visual-studio-2019/git-experience/unmerged-changes.png" border="true" alt-text="Screenshot of the files with merge conflicts in the Git Changes window of Visual Studio." lightbox="../media/merging/visual-studio-2019/git-experience/unmerged-changes-lrg.png":::

1. In the merge editor, the **Incoming** pane shows the source branch file version, the **Current** pane shows the target branch file version, and the **Result** pane shows the resultant merge file. To apply specific source or target branch changes, select the checkbox next to the conflicting line(s) that you want to keep. You can also directly edit the merge file in the **Result** pane. Choose **Accept Merge** after you've resolved all merge conflicts in the current file. Repeat this step for each file with content conflicts.

   :::image type="content" source="../media/merging/visual-studio-2019/git-experience/merge-editor-selections.png" border="true" alt-text="Screenshot of the merge editor in Visual Studio." lightbox="../media/merging/visual-studio-2019/git-experience/merge-editor-selections-lrg.png":::

1. For a file that was edited in one branch and deleted in the other, right-click the file and select which branch action you want.

   :::image type="content" source="../media/merging/visual-studio-2019/git-experience/merge-context-menu.png" border="true" alt-text="Screenshot of the context menu for a conflicting file in the Git Changes window of Visual Studio." lightbox="../media/merging/visual-studio-2019/git-experience/merge-context-menu-lrg.png":::

1. In the Git Changes window, enter a commit message and choose **Commit Staged** to complete the merge&mdash;after you've resolved all merge conflicts for all files.

   :::image type="content" source="../media/merging/visual-studio-2019/git-experience/merge-commit-staged.png" border="true" alt-text="Screenshot of the commit message and Commit Staged button in the Git Changes window of Visual Studio." lightbox="../media/merging/visual-studio-2019/git-experience/merge-commit-staged-lrg.png":::
