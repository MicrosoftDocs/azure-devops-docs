---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

1. From the **Git** menu on the menu bar, choose **Clone Repository** to open the **Clone a repository** window.

   :::image type="content" source="../media/clone/visual-studio-2019/git-experience/clone-repo.png" border="true" alt-text="Screenshot of the 'Clone Repository' option in the Git menu in Visual Studio." lightbox="../media/clone/visual-studio-2019/git-experience/clone-repo-lrg.png":::

1. In the **Clone a repository** window, select **Azure DevOps** under **Browse a repository** to open the **Connect to a Project** window.

   :::image type="content" source="../media/clone/visual-studio-2019/git-experience/clone-azure-devops-repo.png" border="true" alt-text="Screenshot of the 'Clone Repository' window in Visual Studio." lightbox="../media/clone/visual-studio-2019/git-experience/clone-azure-devops-repo-lrg.png":::

1. In the **Connect to a Project** window, sign in to Azure DevOps and choose the remote repo you want to clone. You can use the search box to filter the list of remote repos. If you don't see the remote repo, select **Add Azure DevOps Server** to add the server that hosts the repo. Verify the local folder path where you want the local clone to be created, and then select **Clone**.

   :::image type="content" source="../media/clone/visual-studio-2019/team-explorer/connect-add-server.png" border="true" alt-text="Screenshot of the 'Connect to a Project' window in Visual Studio." lightbox="../media/clone/visual-studio-2019/team-explorer/connect-add-server-lrg.png":::

After you've cloned a remote Git repo, Visual Studio detects the local clone and adds it to the list of **Local Repositories** in the **Git** menu.

:::image type="content" source="../media/clone/visual-studio-2019/common/local-repositories.png" border="true" alt-text="Screenshot of the 'Local Repositories' option in the Git menu in Visual Studio." lightbox="../media/clone/visual-studio-2019/common/local-repositories-lrg.png":::