---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

In the **Git Changes** window, you can keep your local branch current with its remote counterpart by using the **Fetch**, **Pull**, **Push**, and **Sync** buttons.

:::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/sync-git-changes-window.png" border="true" alt-text="Screenshot of the Fetch, Pull, Push and Sync buttons in the 'Git Changes' window of Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/sync-git-changes-window-lrg.png":::

From left to right in the previous screenshot, the button controls are:

- **Fetch** downloads remote commits that aren't in your local branch, but doesn't merge them.
- **Pull** performs a fetch and then merges the downloaded commits into your local branch.
- **Push** uploads your unpushed commits to the remote repository, which adds them to the corresponding remote branch.
- **Sync** performs a **Pull** then a **Push**.

You can also select **Fetch**, **Pull**, **Push**, and **Sync** from the Git menu.

:::image type="content" source="../media/gitquickstart/visual-studio-2019/git-experience/sync-git-menu.png" border="true" alt-text="Screenshot of the Fetch, Pull, Push and Sync options in the Git menu in Visual Studio." lightbox="../media/gitquickstart/visual-studio-2019/git-experience/sync-git-menu-lrg.png":::
