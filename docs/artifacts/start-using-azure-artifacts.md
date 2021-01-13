---
title: Start using Azure Artifacts 
description: Quickly start hosting NuGet, npm, Python, Maven, or Universal Packages in Azure Artifacts. Find out the prerequisites to start using Azure Artifacts, and details on billing, how to pay for the service, and FAQs. 
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: chcomley
author: chcomley
ms.date: 11/04/2020
monikerRange: '>= tfs-2017'
---

# Start using Azure Artifacts

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)]  

> [!NOTE]
> If you're using a version of TFS, you need to license Azure Artifacts rather than set up billing. 

::: moniker range="azure-devops"

[!INCLUDE [version-vsts-only](../includes/version-vsts-only.md)]

Learn how to go through the sign-up process for Azure Artifacts. Azure Artifacts is a service where you can create package feeds to publish and consume the following package types:

- Maven
- npm
- NuGet
- Python
- Universal Packages 

Azure Artifacts gets billed on a consumption basis, and is free up until 2 GiB of storage. If your organization needs more storage, you must [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).

## Prerequisites

- To start using Azure Artifacts, you need to have [Project Collection Administrator or organization Owner permissions](../organizations/security/lookup-organization-owner-admin.md).
- Your network connection must be set up to [allow certain IP addresses and domain URLs](../organizations/security/allow-list-ip-url.md).
- If you plan to use more than the free usage tier of 2 GiB, you must [set up billing for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md).

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020"

Users with a Basic license can create and consume Azure Artifacts. So, if you have a Basic license, you don't need to purchase an Azure Artifacts extension.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

Azure Artifacts is an **extension** to TFS. The Azure Artifacts extension comes pre-installed in TFS 2017 and 2018.

Azure Artifacts is required for each user who consumes or publishes packages to and from Azure Artifacts feeds. The service currently supports the following package types: NuGet, npm, Python, Maven, and Universal Packages.

## Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers. Upgrade to TFS 2017 to use Azure Artifacts.

> [!NOTE]
> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then, select **Azure Artifacts**.

   > [!div class="mx-imgBorder"]
   > ![Users page in TFS](media/users-hub-tfs.png)

2. Select **Assign**, enter the user to assign licenses, and then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts automatically.  
   * Ensure that your Visual Studio Enterprise subscribers are assigned **VS Enterprise** [Access level](../organizations/security/change-access-levels.md).

::: moniker-end

::: moniker range=">=azure-devops-2019"

## Billing and free monthly usage

Azure Artifacts includes a free usage tier of 2 GB. Any usage below this level isn't billed to your subscription. Above this limit, we charge you for your actual usage. The usage limit allows you to control the maximum volume of storage that you're billed for. Once the maximum usage limit is reached, you can no longer upload artifacts and will need to either reduce your artifact storage, or increase your usage limit. For more information on usage tiers, see the [Azure Artifacts pricing page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/). For Microsoft-internal customers, please refer to internal documentation on Microsoft pricing. 

> [!NOTE]
> Organizations created before May 6, 2019 will remain on the per-user billing model, and will be switched over to storage-based charging as soon as November 1, 2020. More details on billing changes can be found on [the Azure DevOps blog](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/). 

## View artifact and billed storage

To see your storage bill for Azure Artifacts:
 
1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```). 
 
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**. 
   > [!div class="mx-imgBorder"]
   > ![Open Organization settings](../media/settings/open-admin-settings-vert.png) 
 
3. Select **Billing**. 
 
   > [!div class="mx-imgBorder"]
   > ![Select Billing from Organization settings](../organizations/billing/media/shared/select-billing-organization-settings.png)
 
4. Find Artifacts and see your current billed usage from Azure Artifacts, or review a breakdown of the different types of storage your organization is currently using. See the [FAQs](#faqs) further in this article for information on which artifacts count towards your storage total. 

   > [!div class="mx-imgBorder"]
   > ![View storage for Azure Artifacts](media/azure-artifacts-view-storage-used.png)

> [!NOTE]
> Based on community feedback, we're working on more granular drilldowns and views into your artifact storage. More information to come. 

## Pay for Azure Artifacts

Each organization gets Azure Artifacts for free, up until 2 GiB of storage is used. If you need more than 2 GiB, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md).

If you've reached your storage limit, you'll be blocked from making additional uploads. It can take up to 1 hour after increasing your limit for uploads to be re-enabled. 

## FAQs

### Q: Which artifacts count toward my total billed storage?

A: Currently, the following get counted in your Azure Artifacts billed cost: 
* All packages (npm, NuGet, Python, Maven, and Universal Packages), including those packages stored from upstream sources.

You're not billed by Azure Artifacts for storage of Pipeline Artifacts, Build Artifacts, and Pipeline Caching.

> [!NOTE]
> Packages that are placed in the recycle bin will be deleted permanently after 30 days. However, these packages still count as part of your storage bill. If you want to delete them sooner, you can navigate to the recycle bin and delete them manually.

### Q: Why do I see 0 GiB of storage, even though I'm storing artifacts?

A: 1 GiB is currently our lowest granularity, so you most likely haven't reached 1 GiB yet. 

### Q: How can I control how long artifacts are stored?

A: Retention for stored packages can be set via the feed retention policy. See how to [automatically delete old package versions with retention policies](how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies).

### Q: How can I delete my artifacts? 

A: To delete packages within your feeds, see [delete and recover packages in Azure Artifacts](how-to/delete-and-recover-packages.md). 

### Q: How long does it take for deleted artifacts to affect the amount of billed storage?

A: Deletion of artifacts doesn't register immediately. Storage usage should be updated within 24 hours, but in some cases it may take up to 48 hours maximum. If you're blocked from uploading artifacts, you can temporarily increase your usage level to continue publishing artifacts. Then, reduce the level once the storage metrics are updated.

The `used` value on the Billing tab of your Organization Settings page gets updated once per day. When you delete artifacts, it may not reflect immediately on your billing page. The Artifact Storage tab gets updated more frequently, so you may see a small discrepancy between the two.  

### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: When you remove your Azure Subscription from your Azure DevOps organization, you only have access to the free tier of storage (< 2 GiB). If you have above 2 GiB of used storage, you can only read packages. You can't push packages until you lower your usage below 2 GiB, or you can reconnect an Azure subscription to your organization and increase your storage tier appropriately.

### Q: What about customers who were using Artifacts before May 6, 2019 under the previous per user model?

A: Customers from before May 6, 2019 aren't charged for Artifacts storage until November 1, 2020. You can opt in to the new storage model by setting a paid limit above the amount of storage you're currently using. If you opt in, your Azure bill will include the storage cost calculated from November 1 onward. 

::: moniker-end

## What's next?

* [Artifacts Storage breakdown](artifact-storage.md)