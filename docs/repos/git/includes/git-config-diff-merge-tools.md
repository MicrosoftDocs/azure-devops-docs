---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

The diff and merge tool settings correspond to the `git config diff.tool` and `git config merge.tool` commands. You can set Visual Studio as the merge or diff tool, or configure other diff and merge tools from the [Git command line](../git-config.md?tabs=git-command-line). You can specify diff and merge tool settings at the global or repository scope.

1. From the **Git** menu, choose **Git > Settings** and then select the **Git Global Settings** view. That view contains the diff and merge tools settings.

1. Set the diff and merge tool settings to the desired value, and select **OK** to save.

   :::image type="content" source="../media/git-config/visual-studio-2019/git-experience/tools-setting.png" alt-text="Screenshot showing the diff and merge tool settings in the Options dialog box in Visual Studio." lightbox="../media/git-config/visual-studio-2019/git-experience/tools-setting-lrg.png":::

   Or, choose **Git Repository Settings > General** to edit the diff and merge tool settings for the current Visual Studio project repo.

Valid diff and merge tools are:

- `Visual Studio`
- `None` (default)

To configure other diff and merge tool settings, use the [Git command line](../git-config.md?tabs=git-command-line).
