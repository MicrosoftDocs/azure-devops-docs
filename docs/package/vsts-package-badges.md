---
title: Share your VSTS packages with badges | Visual Studio Team Services
description: Share your NuGet, npm, or Maven packages from VSTS with badges. 
ms.assetid: 60a3f33a-d8bc-436a-a676-c1bd4b3066e7
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 02/16/2018
monikerRange: '>= tfs-2017'
---


# Share your NuGet, npm, and Maven packages from VSTS with badges

**VSTS** | **TFS 2018** | **TFS 2017**

You can share your packages anywhere you can share an image with badges. You can put a badge directly into your project's home page in Visual Studio Team Service (VSTS) or in any Markdown/README file so readers can easily discover and consume your package.

Example NuGet package badge:  
![VSTS Package sharing badge for NuGet, npm, or Maven](_shared/_img/package-badge.png)

## Enable package sharing

To start sharing your VSTS-hosted packages with badges you'll first have to turn on **Package sharing** in your feed settings. 

1. Go to your Feed settings page by clicking on the gear icon from your feed page: 

    ![Edit a VSTS feed in Package](_shared/_img/edit-feed-full.png)

    > Only feed administrators can edit the feed.

2. Find the **Package sharing** section and select *Enable package badges*.

This will enable the **Create badge** button for every package in that feed.

![Create badge for NuGet, npm, or Maven packages in VSTS](_img/pm-create-badge.png)

## Create badge

You can create a badge for any package that is in a feed with package sharing enabled. You can only create a badge for the latest version of each package.

1. Go to your package in Visual Studio Team Services and click the **Create badge** option. 

2. Select a *Feed view* for your package badge. If you're using release views, select the view that contains the packages you want to share; otherwise, just use `No view`.

3. You'll see a preview of your badge. You can copy the Markdown version of your badge that includes alt text, or a direct image link. 

Add the markdown or direct image link to your README or any other place you want to share your package!
