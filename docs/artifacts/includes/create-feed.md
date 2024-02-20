---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/22/2024
---

::: moniker range=">= azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a  feed.":::

1. Enter the following information for your feed:

    1. Enter a descriptive **Name** for your feed.
    1. Define its **Visibility** (indicating who can view packages within the feed).
    1. Select whether to use packages from public sources such as pypi.org.
    1. Specify the **Scope** of your feed.  

1. Select **Create**.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a  feed.":::

::: moniker-end

::: moniker range="azure-devops-2022"

1. Go to your Azure DevOps collection, select your project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-dialog-devops-server.png" alt-text="A screenshot showing how to create a  feed in DevOps Server.":::

1. Enter the following information for your feed:

    1. Enter a descriptive **Name** for your feed.
    1. Define its **Visibility** (indicating who can view packages within the feed).
    1. Select whether to use packages from public sources such as pypi.org.
    1. Specify the **Scope** of your feed.  

1. Select **Create**.

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops-2022"

1. Go to your Azure DevOps collection, select your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Enter the following information for your feed:

    1. Enter a descriptive **Name** for your feed.
    1. Define its **Visibility** (indicating who can view packages within the feed).
    1. Select whether to use packages from public sources such as pypi.org.
    1. Specify the **Scope** of your feed.  

1. Select **Create**.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Go to your Azure DevOps collection, select your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Enter the following information for your feed:

    1. Enter a descriptive **Name** for your feed.
    1. Define its **Visibility** (indicating who can view packages within the feed).
    1. Choose whether to use packages from public sources such as pypi.org.

1. Select **Create**.

::: moniker-end

::: moniker range="tfs-2018"

Azure Artifacts comes pre-installed in TFS 2018. If this is your first time using your feed, you might be prompted to [assign a license](../start-using-azure-artifacts.md?preserve-view=true&view=tfs-2018#assign-licenses).

1. Navigate to your project `http://ServerName:8080/tfs/DefaultCollection/<ProjectName>`.

1. Select **Build & Release**, and then select **Packages**.

1. Select **+ New feed** to create a new feed.

1. Provide a meaningful **Name** and **Description** for your feed. Specify the permissions for **who can read** and **who can contribute**, and decide whether to **Include external packages**.

1. Select **Create** when you're done.
 
   :::image type="content" source="../media/new-feed-dialog-azure-tfs.png" alt-text="A screenshot showing how to create a new feed in TFS 2018.":::

::: moniker-end
