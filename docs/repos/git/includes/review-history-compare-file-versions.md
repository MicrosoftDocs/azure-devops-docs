---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

Visual Studio lets you compare two versions of the same file in the same branch, but doesn't support comparing file versions across branches.

1. In **Solution Explorer**, select a file and choose **Git > View History** from the file's context menu to open the **Git History** tab for the selected file.

    :::image type="content" source="../media/review-history/visual-studio-2019/common/view-file-history-option.png" border="true" alt-text="Screenshot of the View History option in the file context menu in Solution Explorer in Visual Studio." lightbox="../media/review-history/visual-studio-2019/common/view-file-history-option-lrg.png":::

1. In the **Git History** tab, choose **Compare with Previous** from a commit's context menu to open a **Diff** tab that compares the selected commit with the preceding commit.

    :::image type="content" source="../media/review-history/visual-studio-2019/common/compare-with-previous-option.png" border="true" alt-text="Screenshot of the Compare with Previous option in the commit context menu in the commit History view in Visual Studio." lightbox="../media/review-history/visual-studio-2019/common/compare-with-previous-option-lrg.png":::

    Or, select two commits and choose **Compare** from either commit's context menu to open a **Diff** tab that compares the two selected commits.

    :::image type="content" source="../media/review-history/visual-studio-2019/common/compare-option.png" border="true" alt-text="Screenshot of the Compare Commits option in the commit context menu in the commit History view in Visual Studio." lightbox="../media/review-history/visual-studio-2019/common/compare-option-lrg.png":::

    The **Diff** tab shows new, deleted, or modified file lines.

    :::image type="content" source="../media/review-history/visual-studio-2019/common/commits-diff.png" border="true" alt-text="Screenshot of the file diff view in Visual Studio 2022.":::
