---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 03/15/2024
---

<<<<<<< HEAD
=======
# Quickstart: Get started with NuGet packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download NuGet packages from sources such as feeds and public registries. With Azure Artifacts, you can create feeds that are either:

* Private, so you can share packages with your team and specific users.
* Public, so you can share packages openly with anyone on the internet.

In this quickstart, you learn how to:

> [!div class="checklist"]
>
> * Create a new feed.
> * Set up your project and connect to your feed.
> * Publish NuGet packages.
> * Download packages from your feed.

## Prerequisites

* Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

* Install the [latest NuGet version](https://www.nuget.org/downloads).

* Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

## <a name = "create-feed"></a> Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

>>>>>>> cb3196f31566c7b52671fad1d2ece4ceee5d23f7
::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. For **Name**, enter a descriptive name for your feed.

   For **Visibility**, select an option to indicate who can view packages within the feed.

   If you want to include packages from public sources, select the checkbox under **Upstream sources**.

   For **Scope**, specify whether the scope of your feed is the project or the organization.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="Screenshot that shows selections for creating a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

1. Sign in to your Azure DevOps server, and then go to your project.

2. Select **Artifacts**, and then select **Create Feed**.

3. For **Name**, enter a descriptive name for your feed.

   For **Visibility**, select an option to indicate who can view packages within the feed.

   If you want to include packages from public sources, select the checkbox under **Upstream sources**.

   For **Scope**, specify whether the scope of your feed is the project or the organization.

::: moniker-end

::: moniker range="azure-devops-2022"

4. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="Screenshot that shows selections for creating a new feed in Azure DevOps 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

4. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2020.png" alt-text="Screenshot that shows selections for creating a new feed in Azure DevOps 2020.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps server, and then go to your project.

1. Select **Artifacts**, and then select **New feed**.

1. For **Name**, enter a descriptive name for your feed.

   For **Visibility**, select an option to indicate who can view packages within the feed.

   If you want to include packages from public sources, select the **Use packages from public sources through this feed** option.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2019.png" alt-text="Screenshot that shows selections for creating a new feed in Azure DevOps 2019.":::

::: moniker-end

> [!NOTE]
> By default, newly created feeds have their project's **Build Service** value set to **Feed and Upstream Reader (Collaborator)**.
