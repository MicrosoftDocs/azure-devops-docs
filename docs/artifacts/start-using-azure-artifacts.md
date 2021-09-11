---
title: Azure Artifacts overview
description: Learn about Azure Artifacts and how to set up billing and view your consumption
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: chcomley
ms.date: 08/13/2021
monikerRange: '>= tfs-2017'
---

# Azure Artifacts overview

Azure Artifacts enables developers to share and consume packages from different feeds and public registries. Packages can be shared within the same team, the same organization, and even publicly. Azure Artifacts supports multiple package types such as NuGet, Npm, Python, Maven, and Universal Packages.

Azure Artifacts gets billed on a consumption basis, and is free up until 2 GiB of storage. If your organization needs more storage, you must [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).

Azure Artifacts comes pre-installed in Azure DevOps Services, Azure DevOps Server 2019 and 2020, and TFS 2017 and 2018.

## Prerequisites

- [Allow IP addresses and domain URLs](../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server.
- If you plan to use more than the free 2 GiB storage, you must [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

> [!NOTE]
> Azure Artifacts license is included with every basic license for TFS 2017, 2018, and Azure DevOps Server 2019 and 2020.

::: moniker range=">= tfs-2017 <= tfs-2018"

## Install Azure Artifacts in TFS

Azure Artifacts comes pre-installed in TFS 2017 and 2018. If the extension has been removed, you can install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then, select **Azure Artifacts**.

    :::image type="content" source="media/users-hub-tfs.png" alt-text="Assign user licenses in TFS":::

2. Select **Assign**, enter the user to assign licenses, and then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts automatically.  
   * Ensure that your Visual Studio Enterprise subscribers are assigned [VS Enterprise Access level](../organizations/security/change-access-levels.md).

::: moniker-end

::: moniker range=">=azure-devops-2019"

## Get started with Azure Artifacts

With Azure Artifacts you can publish, consume, and share different types of packages depending on your team's need. Select your package type to lean more: 

- [NuGet](./get-started-nuget.md)
- [Npm](./get-started-npm.md)
- [Maven](./get-started-maven.md)
- [Python](./quickstarts/python-packages.md)
- [Universal Packages](./quickstarts/universal-packages.md)

## Feature availability

Check out the compatibility table to see if your package type is supported.

| Feature                           | Azure DevOps Services  |          Azure DevOps Server          |                    TFS                       |
|-----------------------------------|------------------------| --------------------------------------|  --------------------------------------------|
| **NuGet**                         | Yes                    | Yes                                   | TFS 2017 and newer                           |
| **npm**                           | Yes                    | Yes                                   | TFS 2017 Update 1 and newer                  |
| **NuGet.org upstream source**     | Yes                    | Yes                                   | TFS 2018 Update 2 and newer                  |
| **Maven**                         | Yes                    | Yes                                   | TFS 2018 and newer                           |
| **Maven Central upstream source** | Yes                    | Azure DevOps Server 2019 Update 1 and newer, Azure DevOps Server 2020| Yes           |
| **Python**                        | Yes                    | Azure DevOps Server 2019 Update 1 and newer, Azure DevOps Server 2020| Yes           |
| **Universal Packages**            | Yes                    | No                                    | No                                           |

## Artifacts free tier and upgrade

Azure Artifacts is free for every organization up to 2 GiB of storage. Once you reach the maximum storage limit, you can no longer upload new artifacts and will need to either delete some of your existing artifacts, or [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) to increase your storage limit. See the [Pricing Calculator](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) to learn more about Azure DevOps billing.

## Organization billing

Follow the steps outlined below to view your billing settings for your organization 
 
1. Sign in to your Azure DevOps organization.
 
1. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**. 

    :::image type="content" source="../media/settings/open-admin-settings-vert.png" alt-text="Access organization settings":::

1. Select **Billing**. 

    :::image type="content" source="../organizations/billing/media/shared/select-billing-organization-settings.png" alt-text="Organization settings - billing":::
 
1. View your Artifacts consumption and usage limit.

    :::image type="content" source="media/billing-settings.png" alt-text="Artifacts billing settings":::

## FAQs

### Q: Which artifacts count toward my total billed storage?

A: Currently, you get billed for all package types (npm, NuGet, Python, Maven, and Universal Packages) including packages stored from upstream sources.

You don't get billed for the storage of Pipeline Artifacts, Build Artifacts, and Pipeline Caching.

> [!NOTE]
> Packages that are placed in the recycle bin will be deleted permanently after 30 days. However, these packages still count as part of your storage bill. If you want to delete them sooner, you can navigate to the recycle bin and delete them manually.

### Q: I'm storing Artifacts but my storage consumption shows 0 GiB?

A: 1 GiB is currently our lowest granularity, so you most likely haven't reached 1 GiB yet. 

### Q: How can I control how many days Artifacts are kept?

A: You can set up the retention policies to delete packages automatically. See [how to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) for more details.

### Q: How can I delete my Artifacts? 

A: See [Delete and recover packages](how-to/delete-and-recover-packages.md) for details. 

### Q: How long does it take for deleted Artifacts to affect the amount of billed storage?

A: Deletion of artifacts doesn't register immediately. Storage consumption should be updated within 24 hours, but in some cases it may take up to 48 hours. If you're blocked from uploading Artifacts, as a workaround you can temporarily increase your usage level, then reduce the level back once the storage metrics are updated.

The `used` column on the Billing page of your Organization gets updated once per day. When you delete an Artifact, it may not reflect immediately on your billing page. The Artifact Storage page however gets updated more frequently, so you may see a small discrepancy between the two.  

:::image type="content" source="media/settings-vs-storage.png" alt-text="Artifacts billing settings vs Artifacts storage data":::

### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: When you remove your Azure Subscription from your Azure DevOps organization, you only have access to the free tier of storage (< 2 GiB). If you have above 2 GiB of used storage, you can only read packages. You can't publish new packages until you delete some of your older packages to lower your usage below 2 GiB, or you can reconnect an Azure subscription to your organization and set up billing to increase your storage tier.

::: moniker-end

## Related articles

- [Artifacts storage consumption](./artifact-storage.md)
- [Feeds overview](./concepts/feeds.md)
- [Manage permissions](./feeds/feed-permissions.md)
- [Feed views](./concepts/views.md)
