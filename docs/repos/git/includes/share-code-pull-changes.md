---
author: vijayma
ms.author: vijayma
ms.date: 10/18/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. In the **Git Changes** window, you can check for the latest commits on the remote branch by using the down-arrow fetch link, then selecting the **outgoing / incoming** link to open the **Git Repository** window. **Fetch** downloads remote commits that aren't in your local branch, but won't merge them into your local branch. Fetched commits show up in the **Incoming Commits** section of the **Git Repository** window. You can double-click a fetched commit to view its file changes.

   :::image type="content" source="../media/share-your-code-in-git-vs/visual-studio-2019/git-experience/push-fetch-git-repositories-window.png" border="true" alt-text="Screenshot of the Fetch, Pull, Push and Sync buttons in the 'Git Changes' window of Visual Studio." lightbox="../media/share-your-code-in-git-vs/visual-studio-2019/git-experience/push-fetch-git-repositories-window-lrg.png":::
  
1. Choose **Pull** to merge the fetched remote commits into your local repo. **Pull** performs a fetch and then merges the downloaded commits into your local branch.
