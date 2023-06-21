---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/14/2022
---

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="A screenshot showing the create a feed button.":::

1. Provide a descriptive **Name** for your feed and specify its **Visibility** (determining who can view packages within the feed). Additionally, configure the **Upstream sources** and specify the **Scope** of your feed (project-scoped or organization-scoped).

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a need feed.":::

1. Select **Create** when you're done.

> [!NOTE]
> When creating a new feed, the default access level for the *Project Collection Build Service* (organization-scoped) and the project-level *Build Service*(project-scoped) is set to **Collaborator**.

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
