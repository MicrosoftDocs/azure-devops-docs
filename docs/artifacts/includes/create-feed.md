---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/14/2022
---

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select **Create Feed**.

   > [!div class="mx-imgBorder"] 
   > ![Create a feed button](../media/new-feed-button-azure-devops-newnav.png)

1. Give your feed a **Name** and choose its **visibility** (who can view packages in this feed), **upstream sources**, and **scope** (project-scoped or organization-scoped) settings.

   > [!div class="mx-imgBorder"] 
   > ![New feed dialog box](../media/new-feed-dialog-azure-devops.png)

1. Select **Create** when you're done.

> [!NOTE]
> By default, the *Project Collection Build Service* (org-scoped) and the project-level *Build Service* (project-scoped) are set to **Collaborator** when you create a new feed.

::: moniker-end

::: moniker range="tfs-2018"

Azure Artifacts comes pre-installed in TFS 2018. If this is the first time using your feed, you might be asked to [assign a license](../start-using-azure-artifacts.md?preserve-view=true&view=tfs-2018#assign-licenses-in-tfs)

1. Go to **Build & Release** and select **Packages**.

   > [!div class="mx-imgBorder"] 
   > ![Go to Azure Artifacts TFS](../media/goto-feed-hub.png)

1. Select **+ New feed**.

   > [!div class="mx-imgBorder"] 
   > ![New feed button TFS](../media/new-feed-button.png)

1. Give your feed a **Name**, a **Description**, and set up **who can read**, **who can contribute** and if you want to **Include external packages**.

   > [!div class="mx-imgBorder"] 
   > ![New feed dialog box TFS](../media/new-feed-dialog-azure-tfs.png)

1. Select **Create** when you're done.

::: moniker-end
