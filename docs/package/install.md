---
title: Install and license Package Management for VSTS and TFS
description: Quickly start hosting NuGet packages in VSTS or Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 01/24/2018
monikerRange: '>= tfs-2017'
---

 

# Install and license Package Management

**VSTS** | **TFS 2018** | **TFS 2017**

Package Management is an *extension* to VSTS and TFS.  This means you'll need the Package Management extension installed in your account and have Package Management assigned to you in order to view, upload, and download packages.  

::: moniker range="vsts" 

## Install Package Management in VSTS

Package Management is an extension that must be installed from the Marketplace. 

### Install Package Management extension
1. Go to the [Marketplace page for Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)

1. Select **Get**

    ![Package Management extension for VSTS in Visual Studio Marketplace](_img/marketplace.png)

1. Select your account into which the Package Management extension should be installed

1. Each account gets five (5) free licenses. If you need more than 5 licenses, click **Buy** and purchase the additional licenses you need.  If you aren't sure you can click **Start 30 day free trial** and every user in your account will be granted access to Package Management for 30 days.  After the 30-day trial period your account will revert back to five (5) entitled users and you must assign licenses to individual users.  If you need additional licenses at this point, you may purchase them from this same dialog in the Marketplace.

1. After the install is completed, select **Proceed to the account**. Then, go to any project and select the **Packages** hub in the **Build & Release** hub group

::: moniker-end

::: moniker range=">= tfs-2017 < vsts" 

## Install Package Management in TFS

Package Management is installed by default for TFS 2017 customers.  You must upgrade to TFS 2017 in order to use Package Management.

::: moniker-end

::: moniker range="vsts" 

## Assign Package Management in VSTS

If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access and licenses do not need to be assigned until the trial period has ended. 

If you selected **Buy** or **Get it free**, you will need to assign your licenses by following the instructions below:

1. Go to your account, select the **Users** hub, and select **Package Management**.
1. Select **Assign**, type the users you want to assign licenses to, then select **Ok.**

   > If you have a Visual Studio Enterprise license, you already have access to Package Management and don't need to be assigned a license, just ensure that you've been assigned the "Visual Studio Enterprise" access level.

::: moniker-end

::: moniker range=">= tfs-2017 < vsts" 

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** hub. Then select **Package Management**.

   ![Users hub in TFS](_img/users-hub-tfs.png)

1. Select **Assign**, type the user(s) you want to assign licenses, then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Package Management for free.  [Ensure that your Visual Studio Enterprise subscribers are assigned VSE access level](../organizations/security/change-access-levels.md).

   * Users using an instance of TFS disconnected from the internet (and thus unable to purchase licenses from the marketplace) can still assign licenses purchased through an enterprise agreement.

::: moniker-end

<!-- BEGINSECTION class="md-qanda" -->

#### Q: How do I know if I'll still be able to use Package Management after my trial expires?

A:  All users who show up under the Package Management section of the Users hub will have access to Package Management after the trial expires. 
You'll need either a Package Management license or Visual Studio Enterprise subscription to show up in this list.  

#### Q:  I am one of my account's 5 free Basic users. Does that mean I can use Package Management as well?

A:  Your account's 5 free Basic users are separate from your 5 free Package Management users. 
The free Package Management licenses must be bought from the Marketplace and assigned in the Package Management section of the Users hub.

#### Q: I have a Visual Studio Professional subscription. Can I use Package Management for free?

A: Unfortunately not. Only Visual Studio Enterprise subscriptions include Package Management.

<!-- ENDSECTION -->
