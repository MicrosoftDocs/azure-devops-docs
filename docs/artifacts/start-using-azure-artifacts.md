---
title: Start Using Azure Artifacts 
description: Quickly start hosting NuGet, npm, Python, Maven, or Universal packages in Azure Artifacts. Find out the prerequisites to start using Azure Artifacts as well as details on billing, how to pay for the service, and a FAQ section. 
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: chcomley
author: chcomley
ms.date: 07/27/2020
monikerRange: '>= tfs-2017'
---

# Start using Azure Artifacts

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)]  

> [!NOTE]
> If you're using a version of TFS, you will need to license Azure Artifacts instead of signing up. 

::: moniker range="azure-devops"

[!INCLUDE [version-vsts-only](../includes/version-vsts-only.md)]

This article guides you through the sign-up process for Azure Artifacts. Azure Artifacts is a service where you can create package feeds to publish and consume Maven, npm, NuGet, Python, and universal packages. Azure Artifacts is billed on a consumption basis, and is free up until 2 GB of storage. In the case that your organization needs more storage, you need to set up billing.

## Prerequisites

Ensure that the following statements are true:

- [Billing is set up for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- You have [Project Collection Administrator or organization Owner permissions](../organizations/security/lookup-organization-owner-admin.md)
- Your network connection is set up to [allow certain IP addresses and domain URLs](../organizations/security/allow-list-ip-url.md).

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020"

Users with a Basic license can use Azure Artifacts on-premises without needing to purchase an Azure Artifacts extension. This means with Azure DevOps Server 2019 and 2020, users with a Basic license can create and consume Azure Artifacts on-premises if they have a Basic license assigned.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

Azure Artifacts is an **extension** to TFS. The Azure Artifacts extension comes pre-installed in TFS 2017 and 2018.

Azure Artifacts is required for each user that consumes or publishes packages to/from Azure Artifacts feeds as well as user that consumes or publishes symbols. The service currently supports the following package types: NuGet, npm, Python, Maven, and Universal packages.

## Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers. You must upgrade to TFS 2017 in order to use Azure Artifacts.

> [!NOTE]
> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then, select **Azure Artifacts**.

   ![Users page in TFS](media/users-hub-tfs.png)

2. Select **Assign**, enter the user to whom you want to assign licenses, and then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts automatically.  
   * Ensure that your Visual Studio Enterprise subscribers are assigned **VS Enterprise** [Access level](../organizations/security/change-access-levels.md).

::: moniker-end

::: moniker range="azure-devops"

## Billing and free monthly usage

Azure Artifacts includes a free usage tier of 2 GB. Any usage below this level isn't billed to your subscription. Above this limit, we charge you for your actual usage. The usage limit allows you to control the maximum volume of storage that you're billed for. Once the maximum usage limit is reached, you can no longer upload artifacts and will need to either reduce your artifact storage, or increase your usage limit. For more information on usage tiers, see the [Azure Artifacts pricing page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

> [!NOTE]
> Organizations created before May 6, 2019 will remain on the per-user billing model, and will be switched over to storage-based charging on October 5, 2020. This date is pushed back from the previously communicated May 9, 2020.  

## View Billed Storage

To see your storage bill for Azure Artifacts:
 
1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```). 
 
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**. 
 
   ![Open Organization settings](../media/settings/open-admin-settings-vert.png) 
 
3. Select **Billing**. 
 
   ![Select Billing from Organization settings](../organizations/billing/media/shared/select-billing-organization-settings.png)
 
4. Find Artifacts and review your current billed usage from Azure Artifacts.

   ![View storage for Azure Artifacts](media/azure-artifacts-view-storage-used.png)
   
## View Artifact Storage 

To navigate and understand your Azure Artifacts storage: 

1. In the same ![gear icon](../media/icons/gear-icon.png) **Organization settings** tab, select **Storage** under the Artifacts tab. 

2. Review a breakdown of the different types of storage your organization is currently using. See the [FAQs](#faqs) below for information on what artifacts count towards your storage total. 

> [!NOTE]
> Based on community feedback, we are working on more granular drilldowns and views into your artifact storage. More information to come. 

## Pay for Artifacts

Each organization gets Azure Artifacts for free, up until they hit 2 GB of storage. If you need more than 2 GB, complete the following steps to set up billing:

1. Sign in to your organization `https://dev.azure.com/{yourorganization}`. 
 
2. Repeat steps **#2** and **#3** from [View billed storage](#view-billed-storage).
 
3. Find Artifacts, under Resources, and increase the usage limit above the free tier, by selecting from the dropdown menu. Select **Save** when you are done. You will only be charged for the storage you use up to the limit.

   ![Increase artifacts beyond the free tier with the dropdown menu](media/increase-artifacts-beyond-free-tier.png)

> [!NOTE]
> If you have reached your storage limit, you will be blocked from making additional uploads. It can take up to 1 hour after increasing your limit for uploads to be re-enabled. 

## FAQs

### Q: Which artifacts count toward my total billed storage?

A: Currently, the following get counted in your Azure Artifacts billed cost: 
* All packages (npm, NuGet, Python, Maven, and universal packages), including those packages stored from upstream sources
* All symbols

You are not billed by Azure Artifacts for storage of Pipeline Artifacts, Build Artifacts, and Pipeline Caching. 

### Q: Why do I see 0 GB of storage, even though I'm storing artifacts?

A: 1 GB is currently our lowest granularity, so you most likely have not reached 1 GB yet. 

### Q: How can I control how long artifacts are stored?

A: Retention for stored packages can be set via the feed retention policy. See how to [automatically delete old package versions with retention policies](how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies).

Symbols retention is set via pipeline and/or build retention. See [retention policies](../pipelines/policies/retention.md) for more details. 

### Q: How can I delete my artifacts? 

A: To delete packages within your feeds, follow these instructions to [delete and recover packages in Azure Artifacts](how-to/delete-and-recover-packages.md). 

Symbols are deleted based on the pipeline they are associated with. See [how to delete a pipeline run](../pipelines/policies/retention.md#delete-a-run) for more details. 

### Q: How long does it take for deleted artifacts to affect the amount of billed storage?

A: Deletion of artifacts doesn't register immediately. It can take up to 24 hours for the usage level to be updated. If you're blocked from uploading artifacts, you can temporarily increase your usage level to continue publishing artifacts. Then, reduce the level once the storage metrics are updated.

The 'used' value on the Billing tab of your Organization Settings page is updated once per day, so when you delete artifacts, it may not reflect immediately. The Artifact Storage tab is updated more frequently, so you may see a small discrepency between the two.  

### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: If you remove your Azure Subscription from your Azure DevOps organization, you'll only have access to the free tier of storage (< 2 GB). If you have above 2 GB of used storage, you can read packages, but you can't push until you either get your usage below 2 GB, or reconnect an Azure subscription to your organization and increase your storage tier appropriately.

### Q: What about customers who were using Artifacts before May 6, 2019 under the previous per user model?

A: Customers from before May 6, 2019 aren't charged for Artifacts storage until October 5, 2020. You can opt in to the new storage model by setting a paid limit above the amount of storage you're currently using. If opted in, your Azure bill will include the storage cost calculated from October 5 onward. 



::: moniker-end
