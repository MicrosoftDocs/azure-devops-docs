---
title: Azure Artifacts overview
description: Learn how to get started with Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: ramiMSFT
ms.date: 12/07/2023
monikerRange: '<= azure-devops'
---

# Azure Artifacts overview

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to efficiently manage all their dependencies from one place. With Azure Artifacts, developers can publish packages to their feeds and share them within their team, across organizations, and even publicly across the internet. Azure Artifacts also allows developers to consume packages from different feeds and public registries such as NuGet.org or npmjs.com. Azure Artifacts supports the following package types: NuGet, npm, Python, Maven, Cargo, and Universal Packages.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- [Allow domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server.

> [!NOTE]
> If you expect to exceed the allocated 2-GiB storage, it is recommended to [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

::: moniker range="azure-devops"

## Get started with Azure Artifacts

With Azure Artifacts, you can publish and consume different types of packages. Select your package type to get started: 

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

## Get started with Azure Artifacts

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

| Package type                      | Azure DevOps Services  |          Azure DevOps Server                 |                    TFS-2018                  |
|-----------------------------------|------------------------|----------------------------------------------|----------------------------------------------|
| **NuGet packages**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **npm packages**                  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Maven packages**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Gradle packages**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Python packages**               | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                           |
| **Cargo packages**               | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                        |
| **Universal Packages**            | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                           | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                           |

::: moniker range="azure-devops"

## Artifacts free tier and upgrade

Azure Artifacts is provided at no cost for every organization with up to 2 GiB of storage. Upon reaching the maximum storage limit, you won't be able to publish new artifacts. To continue, you'll need to either delete some of your existing artifacts or [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) to increase your storage limit. Explore the [Pricing Calculator](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) for further insights into Azure DevOps billing.

## View organization billing

Follow the steps below to access your organization's billing settings:

1. Sign in to your Azure DevOps organization.

1. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**, and then select **Billing**.

1. View your Artifacts tier and usage limit.

    :::image type="content" source="media/organization-billing-artifacts.png" alt-text="A screenshot showing Artifacts tier and usage limit.":::

## View Artifacts storage consumption

- [Project-level storage](./artifact-storage.md#project-level-storage)

- [Organization-level storage](./artifact-storage.md#organization-level-storage)

::: moniker-end

## FAQs

##### Q: How can I manage the retention duration for Artifacts?

A: You can set up the retention policies to automatically delete packages. For more information, see [How to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies).

##### Q: How do I delete specific packages?

A: See [Delete and recover packages](how-to/delete-and-recover-packages.md) for more details.

::: moniker range="azure-devops"

##### Q: Which artifacts contribute to my total billed storage?

A: You will be charged for all package types (npm, NuGet, Python, Maven, Cargo, and Universal Packages), including packages stored from upstream sources. However, there will be no charges for Pipeline Artifacts and Pipeline Caching

> [!NOTE]
> Packages in the recycle bin contribute to your overall storage consumption. These packages are permanently deleted after 30 days. If you wish to remove them before that, you can navigate to your recycle bin and delete them manually.

##### Q: What are the implications if I remove my Azure Subscription from my Azure DevOps organization?

A: When you remove your Azure Subscription from your Azure DevOps organization, your access is limited to the free tier. If your storage usage exceeds 2 GiB, you retain read-only access to packages. To publish new packages, you must reduce your storage usage below 2 GiB. Alternatively, you can reconnect an Azure subscription to your organization and set up billing to increase your storage tier.

##### Q: Why does my storage consumption display as 0 GiB even though I am storing Artifacts?

A: Currently, our smallest unit of measurement is 1 GiB, so it's probable that you haven't surpassed the 1 GiB threshold yet.

##### Q: How much time does it typically take for the removal of Artifacts to be reflected in the billed storage amount?

A: Deletion of artifacts may not be immediately reflected in the system. Storage consumption updates are typically completed within 24 hours, but in some instances, it may take up to 48 hours. If you encounter obstacles in uploading artifacts, a temporary workaround is to increase your usage level then reduce it once storage metrics are updated.

The **Used** column on the Billing page of your Organization is updated once a day. When you delete an Artifact, it might not be reflected immediately on your billing page. However, the Artifact Storage page is updated more frequently, so you might see a small discrepancy between the two pages.  

:::image type="content" source="media/settings-vs-storage.png" alt-text="A screenshot showing Artifacts storage consumption.":::

::: moniker-end

## Related articles

- [Package sizes and count limits](./reference/limits.md)
- [Manage permissions](./feeds/feed-permissions.md)
- [Set up upstream sources](./how-to/set-up-upstream-sources.md)
