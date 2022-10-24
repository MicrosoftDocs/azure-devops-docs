---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

The **Rebase local branch when pulling** setting corresponds to the `git config pull.rebase` command. You can specify this setting at the global or repo scope.

From the **Git** menu, choose **Git > Settings** and then select the **Git Global Settings** view. That view contains the **Rebase local branch when pulling** option for the current user.

:::image type="content" source="../media/git-config/visual-studio-2019/git-experience/rebase-setting.png" alt-text="Screenshot of the rebase setting in Git Global Settings in the Options dialog of Visual Studio." lightbox="../media/git-config/visual-studio-2019/git-experience/rebase-setting-lrg.png":::

Or, choose **Git Repository Settings > General** to edit the **Rebase local branch when pulling** option for the current Visual Studio project repo.

Valid values are:

- `True`: rebase the current branch on top of the remote branch after fetch.
- `False`: merge the remote branch into the current branch.
- `Merges`: rebase without flattening locally created merge commits.
- `Unset` (default): unless specified otherwise in a Git configuration file, merge the remote branch into the current branch.
