---
title: Get Started with NuGet Package Management in VSTS and TFS
description: Quickly start hosting NuGet packages in VSTS or Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 01/24/2018
monikerRange: '>= tfs-2017'
---

# Get started with NuGet Package Management in VSTS and TFS

**VSTS** | **TFS 2018** | **TFS 2017**

## Before you start
This guide assumes you've already set up Package Management. You can check out how to install and license the extension in the 
[Install and license Package Management guide](install.md), or go directly to the [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed) 
listing to install it.

<a name="create-a-feed"></a>
## Create a feed

*Already have a feed? [Skip to the next step](#publish-a-package).*

[!INCLUDE [](_shared/create-feed.md)]

<a name="publish-a-package"></a>
## Publish a package

[!INCLUDE [](_shared/nuget/publish.md)]

<a name="consume-in-visual-studio"></a>
## Consume your package in Visual Studio

[!INCLUDE [](_shared/nuget/consume.md)]

<a name="automate-with-continuous-integration"></a>
## Automate the process with continuous integration

You can use continuous integration systems like Team Build to automate the packing and publishing of your packages. 
To get started with continuous integration, see the [NuGet in Team Build guidance](/vsts/pipelines/packages/nuget-pack-publish).

## What's next?

For more advanced topics, check out the [content summary](overview.md).
