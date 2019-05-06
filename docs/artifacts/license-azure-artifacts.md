---
title: License Azure Artifacts for TFS 2017 and 2018
description: Quickly start hosting NuGet, npm, or Maven packages in Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 01/24/2018
monikerRange: '>= tfs-2017 <= tfs-2018'
---

# License Azure Artifacts for TFS 2017 and 2018

**TFS 2018** | **TFS 2017**

Azure Artifacts is an *extension* to TFS. The Azure Artifacts extension comes pre-installed in TFS 2017 and 2018.

Azure Artifacts is required for each user that consumes packages from (e.g., nuget restore or npm install) or produces packages to (e.g., nuget push or npm publish) Azure Artifacts feeds. Azure Artifacts is also required for each user that consumes or publishes symbols.

## Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers.  You must upgrade to TFS 2017 in order to use Azure Artifacts.

> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

Each organization gets five (5) free licenses. If you need more than 5 licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Click **Buy** and purchase the additional licenses you need.  If you aren't sure, you can click **Start 30 day free trial** and every user in your organization will be granted access to Azure Artifacts for 30 days.  After the 30-day trial period your organization will revert back to five (5) entitled users and you must assign licenses to individual users.  If you need additional licenses at this point, you may purchase them from this same dialog in the Marketplace.

> If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access and licenses do not need to be assigned until the trial period has ended. 

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then select **Azure Artifacts**.

   ![Users page in TFS](_img/users-hub-tfs.png)

1. Select **Assign**, type the user(s) you want to assign licenses, then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts for free.  [Ensure that your Visual Studio Enterprise subscribers are assigned VSE access level](../organizations/security/change-access-levels.md).

   * Users using an instance of TFS disconnected from the internet (and thus unable to purchase licenses from the marketplace) can still assign licenses purchased through an enterprise agreement.

<!-- BEGINSECTION class="md-qanda" -->

#### Q: How do I know if I'll still be able to use Azure Artifacts after my trial expires?

A:  All users who show up under the Azure Artifacts section of the Users page will have access to Azure Artifacts after the trial expires. 
You'll need either a Azure Artifacts license or Visual Studio Enterprise subscription to show up in this list.  

#### Q:  I am one of my organization's 5 free Basic users. Does that mean I can use Azure Artifacts as well?

A:  Your organization's 5 free Basic users are separate from your 5 free Azure Artifacts users. 
The free Azure Artifacts licenses must be bought from the Marketplace and assigned in the Azure Artifacts section of the Users page.

#### Q: I have a Visual Studio Professional subscription. Can I use Azure Artifacts for free?

A: Unfortunately not. Only Visual Studio Enterprise subscriptions include Azure Artifacts.

#### Q: Can I use xxx with my version of TFS?

A: Check out the [Azure Artifacts compatability table](./overview.md#versions-compatibility) to find what each version of TFS has access to.

<!-- ENDSECTION -->
