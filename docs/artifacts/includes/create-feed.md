---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 10/16/2023
---

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a descriptive **Name** for your feed and specify its **Visibility** (determining who can view packages within the feed). Specify the **Scope** of your feed and check the **Upstream sources** checkbox if you want to include packages from public sources.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a need feed.":::

1. Select **Create** when you're done.

> [!NOTE]
> When creating a new feed, the default access level for the *Project Collection Build Service* (organization-scoped) and the project-level *Build Service*(project-scoped) is set to **Collaborator**.

::: moniker-end

::: moniker range="tfs-2018"

Azure Artifacts comes pre-installed in TFS 2018. If this is the first time using your feed, you might be asked to [assign a license](../start-using-azure-artifacts.md?preserve-view=true&view=tfs-2018#assign-licenses-in-tfs)

1. Navigate to your project `http://ServerName:8080/tfs/DefaultCollection/<ProjectName>`.

1. Select **Build & Release**, and then select **Packages**.

1. Select **+ New feed** to create a new feed.

1. Give your feed a **Name**, a **Description**, and choose **who can read** and **who can contribute** to your feed and if you want to **Include external packages**.

    :::image type="content" source="../media/new-feed-dialog-azure-tfs.png" alt-text="A screenshot showing how to create a new feed in TFS 2018.":::

1. Select **Create** when you're done.

::: moniker-end
