---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 03/15/2024
---

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (indicating who can view packages within the feed). Specify the **Scope** of your feed, and if you wish to include packages from public sources, mark the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="A screenshot showing how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

1. Sign in to your Azure DevOps server, and then navigate to your project.

2. Select **Artifacts**, and then select **Create Feed** to create a new feed.

3. Enter a descriptive **Name** for your feed and define its **Visibility** (indicating who can view packages within the feed). Specify the **Scope** of your feed, and if you wish to include packages from public sources, mark the **Upstream sources** checkbox.

::: moniker-end

::: moniker range="azure-devops-2022"

4. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="A screenshot showing how to create a new feed in Azure DevOps 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

4. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2020.png" alt-text="A screenshot showing how to create a new feed in Azure DevOps 2020.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select **New feed**.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (indicating who can view packages within the feed). If you wish to include packages from public sources, select the **Use packages from public sources through this feed** option.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2019.png" alt-text="A screenshot showing how to create a new feed in Azure DevOps 2019.":::

::: moniker-end

> [!NOTE]
> By default, newly created feeds have their project's *Build Service* set to **Feed and Upstream Reader (Collaborator)**.