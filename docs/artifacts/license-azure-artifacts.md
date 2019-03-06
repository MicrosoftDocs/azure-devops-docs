---
title: License Azure Artifacts for Azure DevOps Services and TFS
description: Quickly start hosting NuGet packages in Azure DevOps Services or Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 01/24/2018
monikerRange: '>= tfs-2017'
---

# License Azure Artifacts

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

Azure Artifacts is an *extension* to Azure DevOps Services and TFS. The Azure Artifacts extension comes pre-installed in both Azure DevOps Services and TFS (2017 and 2018).

Azure Artifacts is required for each user that consumes packages from (e.g., nuget restore or npm install) or produces packages to (e.g., nuget push or npm publish) Azure Artifacts feeds. Azure Artifacts is also required for each user that consumes or publishes symbols.

::: moniker range=">= tfs-2017 < azure-devops" 

## Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers.  You must upgrade to TFS 2017 in order to use Azure Artifacts.

> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

::: moniker range="azure-devops" 

## Assign Artifacts in Azure DevOps Services

Each organization gets five (5) free licenses. If you need more than 5 licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Click **Buy** and purchase the additional licenses you need.  

You will need to assign your licenses by following the instructions below:

::: moniker-end

::: moniker range=">= azure-devops-2019"

1. Go to your organization, select **Admin settings** in the bottom left of the UX.
2. Select **Users**.
3. Select the user or users you wish to assign the Azure Artifacts extension to, and choose **Manage extensions**.
4. If selecting multiple users, click **Assign extensions** and choose the Azure Artifacts extension. If only selecting one user, check the Azure Artifacts box under _Extensions_ and select **Save changes**.

If you have a Visual Studio Enterprise license, you already have access to Azure Artifacts and don't need to be assigned a license, just ensure that you've been assigned the "Visual Studio Enterprise" access level.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Go to your account, navigate to the **Users** page, and select Package Management.
2. Select **Assign**, type the users you want to assign licenses to, then select **Ok**.

If you have a Visual Studio Enterprise license, you already have access to Package Management and don't need to be assigned a license, just ensure that you've been assigned the "Visual Studio Enterprise" access level.

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops" 

## Assign licenses in TFS

Each organization gets five (5) free licenses. If you need more than 5 licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Click **Buy** and purchase the additional licenses you need.  If you aren't sure, you can click **Start 30 day free trial** and every user in your organization will be granted access to Azure Artifacts for 30 days.  After the 30-day trial period your organization will revert back to five (5) entitled users and you must assign licenses to individual users.  If you need additional licenses at this point, you may purchase them from this same dialog in the Marketplace.

> If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access and licenses do not need to be assigned until the trial period has ended. 

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then select **Package Management**.

   ![Users page in TFS](_img/users-hub-tfs.png)

1. Select **Assign**, type the user(s) you want to assign licenses, then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts for free.  [Ensure that your Visual Studio Enterprise subscribers are assigned VSE access level](../organizations/security/change-access-levels.md).

   * Users using an instance of TFS disconnected from the internet (and thus unable to purchase licenses from the marketplace) can still assign licenses purchased through an enterprise agreement.

::: moniker-end

<!-- BEGINSECTION class="md-qanda" -->

#### Q: How do I know if I'll still be able to use Azure Artifacts after my trial expires?

A:  All users who show up under the Azure Artifacts section of the Users page will have access to Azure Artifacts after the trial expires. 
You'll need either a Azure Artifacts license or Visual Studio Enterprise subscription to show up in this list.  

#### Q:  I am one of my organization's 5 free Basic users. Does that mean I can use Azure Artifacts as well?

A:  Your organization's 5 free Basic users are separate from your 5 free Azure Artifacts users. 
The free Azure Artifacts licenses must be bought from the Marketplace and assigned in the Azure Artifacts section of the Users page.

#### Q: I have a Visual Studio Professional subscription. Can I use Azure Artifacts for free?

A: Unfortunately not. Only Visual Studio Enterprise subscriptions include Azure Artifacts.

<!-- ENDSECTION -->
