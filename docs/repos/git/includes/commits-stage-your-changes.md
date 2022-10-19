---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

In the **Git Changes** window, right-click a file in the **Changes** section and choose **Stage** to add it into the **Staged Changes** section.

:::image type="content" source="../media/commits/visual-studio-2019/git-experience/stage-files.png" border="true" alt-text="Screenshot of the Changes option in the 'Git Changes' window in Visual Studio." lightbox="../media/commits/visual-studio-2019/git-experience/stage-files-lrg.png":::

Or, you can stage a changed file by selecting the plus sign next to the file. To stage all changed files in a folder, select the plus sign next to the folder. To stage all changed files in your repo, select the plus sign in the top-right corner of the **Changes** section.

You can tell Git to ignore a file by right-clicking it and selecting **Ignore this local item** or **Ignore this extension**. Either command creates a **.gitignore** file in your repo if it doesn't exist, and adds an entry to it. Ignored files won't appear in the **Changes** section in Visual Studio. However, the **.gitignore** file has no effect on tracked files. For information on how to configure Git to ignore tracked files, see [Ignore files](../ignore-files.md). To save time, you can download **.gitignore** templates for various development environments from the GitHub [gitignore](https://github.com/github/gitignore) repo.
