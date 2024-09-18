---
title: Start using Azure Artifacts
description: Learn how to get started with Azure Artifacts by increasing the storage or usage limit in Billing, and create your first feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: ramiMSFT
ms.date: 09/18/2024
monikerRange: '<= azure-devops'
---

# Start using Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts allows developers to manage dependencies in one place, for instance, they can: 
- Publish packages to feeds and share them within teams, across organizations, or publicly. 
- Consume packages from various feeds and public registries like NuGet.org or npmjs.com. 
- Use supported package types include NuGet, npm, Python, Maven, Cargo, and Universal Packages.

This article shows you how to increase your Azure Artifact storage limit and create your first feed.

## Prerequisites

- **Project:** Have a [project](../organizations/projects/create-project.md#create-a-project) and be a member.
- **Permissions:** Be a member of the [Project Collection Administrators group](../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.
- **Network configuration:** [Allow domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server.

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. This free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization starts handling more critical tasks, [increase the storage limit for Azure Artifacts](#increase-artifacts-storage-limit) to ensure you have the appropriate resources.

::: moniker range="azure-devops"

<a name="increase-artifacts-storage-limit"></a>

## Increase storage limit for Azure Artifacts

Azure Artifacts is provided at no cost for every organization with up to 2 GiB of storage. When your organization reaches the maximum storage limit, you can't publish new artifacts. To continue, either delete some of your existing artifacts or do the following steps to increase your storage limit.

1. [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing-for-your-organization) for your organization.

2. Adjust your Artifacts usage limit by selecting **No limit, pay for what you use** from the dropdown menu.

   :::image type="content" source="media/adjust-artifacts-usage-limit.png" alt-text="Screenshot showing adjusted usage limit for Artifacts on Billing page.":::

## View Artifacts storage consumption

- [Project-level storage](./artifact-storage.md#project-level-storage)

- [Organization-level storage](./artifact-storage.md#organization-level-storage)

::: moniker-end

::: moniker range="azure-devops"

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Get started with package type

With Azure Artifacts, you can publish and consume various package types from feeds and public registries such as nuget.org, npmjs.com, Maven Central, etc. Select your package type to get started:

# [NuGet](#tab/nuget)

- [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [Npm](#tab/npm)

- [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/maven)

- [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradle)

- [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/python)

- [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

# [Cargo](#tab/cargo)

- [Get started with Cargo packages in Azure Artifacts](./get-started-cargo.md)

# [Universal Packages](#tab/universalpackages)

- [Get started with Universal Packages in Azure Artifacts](./quickstarts/universal-packages.md)

---

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020 || azure-devops-2022"

## Get started with package type

With Azure Artifacts, you can publish and consume different types of packages. Select your package type to get started: 

# [NuGet](#tab/nugetserver)

- [Get started with NuGet packages in Azure Artifacts](./get-started-nuget.md)

# [Npm](#tab/npmserver)

- [Get started with npm packages in Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/mavenserver)

- [Get started with Maven packages in Azure Artifacts](./get-started-maven.md)

# [Gradle](#tab/gradleserver)

- [Get started with Gradle packages in Azure Artifacts](./maven/publish-with-gradle.md)

# [Python](#tab/pythonserver)

- [Get started with Python packages in Azure Artifacts](./quickstarts/python-packages.md)

---

::: moniker-end

## Feature availability

|      Package type      |                        Azure DevOps Services                                  |                              Azure DevOps Server                               |
|------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **NuGet packages**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   |
| **npm packages**       | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   |
| **Maven packages**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   |
| **Gradle packages**    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   |
| **Python packages**    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::   |
| **Cargo packages**     | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: |
| **Universal Packages** | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false"::: |

## FAQs

#### Q: How can I manage the retention duration for Artifacts?

A: You can set up the retention policies to automatically delete packages. For more information, see [How to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies).

#### Q: How do I delete specific packages?

A: For more information, see [Delete and recover packages](how-to/delete-and-recover-packages.md).

::: moniker range=" azure-devops"

#### Q: Which artifacts contribute to my total billed storage?

A: You get charged for all package types (npm, NuGet, Python, Maven, Cargo, and Universal Packages), including packages stored from upstream sources. However, there are no charges for Pipeline Artifacts and Pipeline Caching.

> [!NOTE]
> Packages in the recycle bin contribute to your overall storage consumption. These packages are permanently deleted after 30 days. If you wish to remove them before that, go to your recycle bin and delete them manually.

#### Q: What are the implications if I remove my Azure Subscription from my Azure DevOps organization?

A: When you remove your Azure Subscription from your Azure DevOps organization, your access is limited to the free tier. If your storage usage exceeds 2 GiB, you retain read-only access to packages. To publish new packages, you must reduce your storage usage below 2 GiB. Alternatively, you can reconnect an Azure subscription to your organization and set up billing to increase your storage tier.

#### Q: Why does my storage consumption display as 0 GiB even though I'm storing Artifacts?

A: Currently, our smallest unit of measurement is 1 GiB, so it's probable that you didn't surpass the 1-GiB threshold yet.

#### Q: How much time does it typically take for the removal of Artifacts to be reflected in the billed storage amount?

A: Deletion of artifacts might not immediately reflect in the system. Storage consumption updates are typically completed within 24 hours, but in some instances, it might take up to 48 hours. If you encounter obstacles in uploading artifacts, a temporary workaround is to increase your usage level then reduce it once storage metrics are updated.

The **Used** column on the Billing page of your Organization is updated once a day. When you delete an Artifact, it might not be reflected immediately on your billing page. However, the Artifact Storage page is updated more frequently, so you might see a small discrepancy between the two pages.  

:::image type="content" source="media/settings-vs-storage.png" alt-text="A screenshot showing Artifacts storage consumption.":::

::: moniker-end

## Related articles

- [Package sizes and count limits](./reference/limits.md)
- [Manage permissions](./feeds/feed-permissions.md)
- [Set up upstream sources](./how-to/set-up-upstream-sources.md)
