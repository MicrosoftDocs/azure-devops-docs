---
title: Azure Artifacts overview
description: Learn about Azure Artifacts offering
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: chcomley
ms.date: 09/20/2022
monikerRange: '<= azure-devops'
---

# Azure Artifacts overview

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to share their code efficiently and manage all their packages from one place. With Azure Artifacts, developers can publish packages to their feeds and share it within the same team, across organizations, and even publicly. Developers can also consume packages from different feeds and public registries such as NuGet.org or npmjs.com. Azure Artifacts supports multiple package types such as NuGet, npm, Python, Maven, and Universal Packages.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- [Allow domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server.

> [!NOTE]
> If you anticipate using more than the provided 2-GiB storage, it is recommended to [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

::: moniker range="tfs-2018"

## Install Azure Artifacts

Azure Artifacts comes pre-installed in TFS 2018. If the extension is removed, you can install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then, select **Azure Artifacts**.

    :::image type="content" source="media/users-hub-tfs.png" alt-text="Assign user licenses in TFS":::

2. Select **Assign**, enter the user to assign licenses, and then select **Ok**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts automatically.  
   * Ensure that your Visual Studio Enterprise subscribers are assigned [VS Enterprise Access level](../organizations/security/change-access-levels.md).

::: moniker-end

::: moniker range=">=azure-devops-2019"

## Get started with Azure Artifacts

With Azure Artifacts, you can publish and consume different types of packages. Select your package type to get started: 

# [NuGet](#tab/nuget)

- [Get started with NuGet packages and Azure Artifacts](./get-started-nuget.md)

# [Npm](#tab/npm)

- [Get started with npm packages and Azure Artifacts](./get-started-npm.md)

# [Maven](#tab/maven)

- [Get started with Maven packages and Azure Artifacts](./get-started-maven.md)

# [Python](#tab/python)

- [Get started with Python packages and Azure Artifacts](./quickstarts/python-packages.md)

# [Universal Packages](#tab/universalpackages)

- [Universal Packages quickstart](./quickstarts/universal-packages.md)

---

## Feature availability

| Package type                      | Azure DevOps Services  |          Azure DevOps Server                 |                    TFS-2018                  |
|-----------------------------------|------------------------|----------------------------------------------|----------------------------------------------|
| **NuGet packages**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **npm packages**                  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Maven packages**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Python packages**               | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | Server 2019 Update 1 and newer, Server 2020, and Server 2022.  | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                                          |
| **Universal Packages**            | :::image type="icon" source="../media/icons/checkmark.png" border="false":::                    | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                           | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::                                           |

## Artifacts free tier and upgrade

Azure Artifacts is free for every organization up to 2 GiB of storage. Once you reach the maximum storage limit, you can no longer upload new artifacts and need to delete some of your existing artifacts or [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) to increase your storage limit. See the [Pricing Calculator](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) to learn more about Azure DevOps billing.

## View organization billing

Follow the steps outlined below to view your billing settings for your organization:

1. Sign in to your Azure DevOps organization.

1. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**, and then select **Billing**.

1. View your Artifacts tier and usage limit.

    :::image type="content" source="media/organization-billing-artifacts.png" alt-text="A screenshot showing Artifacts tier and usage limit.":::

## View Artifacts storage consumption

### [Organization-level storage](#tab/orgstorage)

- [Artifacts Storage - Organization-level](./artifact-storage.md#organization-level-storage)

### [Project-level storage](#tab/projstorage)

- [Artifacts Storage - Project-level](./artifact-storage.md#project-level-storage)

## FAQs

### Q: Which artifacts count toward my total billed storage?

A: You get billed for all package types (npm, NuGet, Python, Maven, and Universal Packages) including packages stored from upstream sources. However, you don't get billed for Pipeline Artifacts, and Pipeline Caching.

> [!NOTE]
> Packages in the recycle bin still count as part of your storage consumption. Those packages get deleted permanently after 30 days. If you want to delete them sooner, navigate to your recycle bin and delete them manually.

### Q: I'm storing Artifacts but my storage consumption shows 0 GiB?

A: 1 GiB is currently our lowest granularity, so you most likely haven't reached 1 GiB yet.

### Q: How can I control how many days Artifacts are kept?

A: You can set up the retention policies to delete packages automatically. For more information, see [How to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies).

### Q: How can I delete specific packages?

A: See [Delete and recover packages](how-to/delete-and-recover-packages.md) for details.

### Q: How long does it take for deleted Artifacts to reflect in the amount of billed storage?

A: Deletion of artifacts doesn't register immediately. Storage consumption should be updated within 24 hours, but in some cases it may take up to 48 hours. If you're blocked from uploading Artifacts, as a workaround you can temporarily increase your usage level, then reduce the level back once the storage metrics are updated.

The **used** column on the Billing page of your Organization gets updated once a day. When you delete an Artifact, it may not reflect immediately on your billing page. The Artifact Storage page however gets updated more frequently, so you may see a small discrepancy between the two pages.  

:::image type="content" source="media/settings-vs-storage.png" alt-text="Artifacts billing settings vs Artifacts storage data":::

### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: When you remove your Azure Subscription from your Azure DevOps organization, you only have access to the free tier. If you used more than 2 GiB of storage, you can only read packages. You can't publish new packages until you lower your storage below 2 GiB. Or, you can reconnect an Azure subscription to your organization and set up billing to increase your storage tier.

::: moniker-end

## Related articles

- [View storage usage](./artifact-storage.md)
- [Feeds overview](./concepts/feeds.md)
- [Manage permissions](./feeds/feed-permissions.md)
- [Feed views](./concepts/views.md)
