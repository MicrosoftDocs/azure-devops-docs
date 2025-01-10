---
title: What is Azure Artifacts?
description: Learn how to get started with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: ramiMSFT
ms.date: 01/09/2025
monikerRange: '<= azure-devops'
---

# What is Azure Artifacts?

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts provides developers with a streamlined way to manage all their dependencies from a single feed. These feeds serve as repositories for storing, managing, and sharing packages, whether within your team, across organizations, or publicly online.

Azure Artifacts supports multiple package types, including NuGet, npm, Python, Maven, Cargo, and Universal Packages.

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. This free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization starts handling more critical tasks, [increase the storage limit for Azure Artifacts](#increase-azure-artifacts-storage-limit) to ensure you have the appropriate resources.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - Allow [Azure Artifacts Domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server. |

## Create a new feed

Azure Artifacts feeds are organizational constructs that enable you to store, manage, and share your packages while maintaining access control. Feeds are not limited to specific package types; you can store a variety of packages, such as npm, NuGet, Maven, Python, Cargo, and Universal Packages in a single feed. See [What are feeds](concepts/feeds.md) for more details.

Follow the instructions below to create a new feed:

[!INCLUDE [](includes/create-feed.md)]

## Get started

With Azure Artifacts, you can publish and install various package types from feeds and public registries such as nuget.org, npmjs.com, Maven Central, etc. Select your package type to get started:

::: moniker range="azure-devops"

# [NuGet](#tab/nuget)

- **Quickstart:** [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [dotnet](#tab/dotnet)

- **Quickstart:** [Publish and restore NuGet packages from the command line (dotnet)](nuget/dotnet-exe.md)

# [Npm](#tab/npm)

- **Quickstart:** [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/maven)

- **Quickstart:** [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradle)

- **Quickstart:** [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/python)

- **Quickstart:** [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

# [Cargo](#tab/cargo)

- **Quickstart:** [Get started with Cargo packages in Azure Artifacts](./get-started-cargo.md)

# [Universal Packages](#tab/universalpackages)

- **Quickstart:**  [Get started with Universal Packages in Azure Artifacts](./quickstarts/universal-packages.md)

---

::: moniker-end

::: moniker range="azure-devops-2022"

# [NuGet](#tab/nugetserver22)

- **Quickstart:** [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [dotnet](#tab/dotnetserver22)

- **Quickstart:** [Publish and restore NuGet packages from the command line (dotnet)](nuget/dotnet-exe.md)

# [Npm](#tab/npmserver22)

- **Quickstart:** [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/mavenserver22)

- **Quickstart:** [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradleserver22)

- **Quickstart:** [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/pythonserver22)

- **Quickstart:** [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

# [Cargo](#tab/cargoserver22)

- **Quickstart:** [Get started with Cargo packages in Azure Artifacts](./get-started-cargo.md)

---

::: moniker-end

::: moniker range="azure-devops-2020"

# [NuGet](#tab/nugetserver20)

- **Quickstart:** [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [dotnet](#tab/dotnetserver20)

- **Quickstart:** [Publish and restore NuGet packages from the command line (dotnet)](nuget/dotnet-exe.md)

# [Npm](#tab/npmserver20)

- **Quickstart:** [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/mavenserver20)

- **Quickstart:** [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradleserver20)

- **Quickstart:** [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/pythonserver20)

- **Quickstart:** [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

---

::: moniker-end

::: moniker range="azure-devops-2019"

# [NuGet](#tab/nugetserver19)

- **Quickstart:** [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [Npm](#tab/npmserver19)

- **Quickstart:** [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/mavenserver19)

- **Quickstart:** [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradleserver19)

- **Quickstart:** [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/pythonserver19)

- **Quickstart:** [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

---

::: moniker-end

## Feature availability

|      Packages      |                        Azure DevOps Services                                  |                              Azure DevOps Server 2022                              |      Azure DevOps Server 2020      |      Azure DevOps Server 2019      |
|------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|------------------------------------|------------------------------------|
| **NuGet**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false"::: |
| **dotnet**      | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: |
| **npm**       | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false"::: |
| **Maven**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false"::: |
| **Gradle**    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false"::: |
| **Python**    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false"::: |
| **Cargo**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::|:::image type="icon" source="../media/icons/delete-icon.png" border="false":::|
| **Universal Packages** | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: |

::: moniker range="azure-devops"

## View Artifacts storage consumption

The artifact storage UI, accessible through your organization or project settings, lets you monitor storage usage at both the organization and project levels:

- [Project-level storage](./artifact-storage.md#project-level-storage): Provides an overview of total storage usage and consumption by artifact type.

- [Organization-level storage](./artifact-storage.md#organization-level-storage): Provides an overview of total storage usage including consumption by project and artifact type.

## Increase Azure Artifacts storage limit 

Azure Artifacts provides 2 GiB of free storage for each organization. When your organization reaches the maximum storage limit, publishing new artifacts will no longer be possible. To continue, you can either delete some of your existing artifacts or follow these steps to increase your storage limit:

1. [Set up billing for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing-for-your-organization).

1. Sign in to your Azure DevOps organization, select **Organization settings** > **Billing**, and adjust your Artifacts usage limit by selecting **No limit, pay for what you use** from the dropdown menu.

1. Select **Save** when you're done.

   :::image type="content" source="media/adjust-artifacts-usage-limit.png" alt-text="Screenshot showing adjusted usage limit for Artifacts on Billing page.":::

::: moniker-end

## FAQs

::: moniker range=" azure-devops"

#### Q: Which artifacts contribute to my total billed storage?

A: You are charged for all package types (npm, NuGet, Python, Maven, Cargo, and Universal Packages), including packages stored from upstream sources. However, there are no charges for Pipeline Artifacts and Pipeline Caching.

> [!IMPORTANT]
> Packages in the recycle bin contribute to your overall storage consumption. These packages are permanently deleted after 30 days. To remove them sooner, go to your recycle bin and delete them manually.

#### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: Removing your Azure Subscription from your Azure DevOps organization limits your access to the free tier. If your storage usage exceeds 2 GiB, you will have read-only access to packages. To publish new packages, you must reduce your storage usage below 2 GiB. Alternatively, you can reconnect an Azure subscription to your organization and set up billing to [upgrade your storage tier](#increase-azure-artifacts-storage-limit).

#### Q: Why does my storage consumption show as 0 GiB even though I'm storing Artifacts?

A: The smallest unit of measurement for storage is currently 1 GiB. It's likely that your storage usage hasn't yet surpassed the 1-GiB threshold.

#### Q: How long does it typically take for the removal of Artifacts to be reflected in the billed storage amount?

A: Deleting artifacts may not be immediately reflected in the system. Storage consumption typically updates within 24 hours, but in some cases, it may take up to 48 hours. If you're unable to upload artifacts, a temporary workaround is to increase your usage level and then decrease it once the storage metrics are updated.

The **Used** column on your organization's billing page is updated once a day, so changes may not be reflected right away. However, the **Artifact Storage** page is updated more frequently, which could result in a slight discrepancy between the two pages.  

:::image type="content" source="media/settings-vs-storage.png" alt-text="A screenshot showing Artifacts storage consumption.":::

::: moniker-end

#### Q: How can I manage the retention duration of old packages?

A: You can set up the retention policies to automatically delete old packages. However, that are promoted to a view are not affected by retention policies and will not be deleted. See [How to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) for more details.

#### Q: How do I delete specific packages manually?

A: See [Delete and recover packages](how-to/delete-and-recover-packages.md) for details.

## Related content

- [Package sizes and count limits](./reference/limits.md)
- [Manage permissions](./feeds/feed-permissions.md)
- [Set up upstream sources](./how-to/set-up-upstream-sources.md)
