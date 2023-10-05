---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

Visual Studio supports discarding uncommitted changes to a file by reverting the file to its last committed version.

In the **Git Changes** window, identify the file with the changes that you want to discard. If the file is in the **Staged Changes** section, right-click it and choose **Unstage**. Unstaged files show up in the **Changes** section.

:::image type="content" source="../media/undo/visual-studio-2019/git-experience/unstage.png" border="true" alt-text="Screenshot of the context menu options for staged files in Visual Studio." lightbox="../media/undo/visual-studio-2019/git-experience/unstage-lrg.png":::

If the file is in the **Changes** section, right-click it and choose **Undo Changes** to discard all changes to the file since the last commit.

:::image type="content" source="../media/undo/visual-studio-2019/git-experience/undo-changes.png" border="true" alt-text="Screenshot of the context menu options for changed files in Visual Studio." lightbox="../media/undo/visual-studio-2019/git-experience/undo-changes-lrg.png":::
