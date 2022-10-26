---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

The **Close open solutions not under Git when opening a repository** setting is only available at the global scope.

1. From the **Git** menu, choose **Git > Settings** and then select the **Git Global Settings** view to configure this setting.

1. Set the default repository location, and select **OK** to save.

    :::image type="content" source="../media/git-config/visual-studio-2019/git-experience/close-sln-setting.png" alt-text="Screenshot showing the Close open solutions not under Git when opening a repository setting in the Options dialog box in Visual Studio." lightbox="../media/git-config/visual-studio-2019/git-experience/close-sln-setting-lrg.png":::

Valid values are:

- `Yes`: when you switch repo, Visual Studio closes any open solution.
- `No`: when you switch repo and the current solution or folder isn't under Git, Visual Studio will keep the solution or folder open.
- `Always ask` (default): when you switch repo and the current solution or folder isn't under Git, Visual Studio will ask whether you want to keep the current solution open.
