---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. From the menu bar, choose **Git > View Branch History** to open the **History** tab for the current branch.

   :::image type="content" source="../media/undo/visual-studio-2019/git-experience/view-history.png" border="true" alt-text="Screenshot of the View Branch History option in the Git menu in Visual Studio." lightbox="../media/undo/visual-studio-2019/git-experience/view-history-lrg.png":::

1. In the **History** tab for the current branch, right-click the commit you want to reset, and then choose **Reset > Delete Changes (--hard)** to reset the branch to the selected commit and delete all changes to all branch files since that commit. Or, choose **Reset > Keep Changes (--mixed)** to reset the branch to the selected commit and retain all subsequent changes as unstaged changes.

   :::image type="content" source="../media/undo/visual-studio-2019/common/reset-hard.png" border="true" alt-text="Screenshot of the Reset option in the context menu for a commit in the History window in Visual Studio." lightbox="../media/undo/visual-studio-2019/common/reset-hard-lrg.png":::
