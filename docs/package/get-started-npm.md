---
title: Get Started with npm Package Management in VSTS
description: Quickly start hosting npm packages in VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.manager: douge
ms.author: amullans
ms.date: 01/24/2018
---

# Get started with npm Package Management in VSTS

## Before you start
This guide assumes you've already set up Package Management. You can check out how to install and license the extension in the 
[Install and license Package Management guide](install.md), or go directly to the [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed) 
listing to install it.

<a name="create-a-feed"></a>
## Create a feed

*Already have a feed? [Skip to the next step](#set-up-your-npmrc).*

[!INCLUDE [](_shared/create-feed.md)]

<a name="set-up-your-npmrc"></a>
## Set up your npmrc

[!INCLUDE [](_shared/npm/npmrc.md)]

<a name="publish-a-package"></a>
## Publish a package

[!INCLUDE [](_shared/npm/publish.md)]

<a name="consume-in-visual-studio"></a>
## Install your package

[!INCLUDE [](_shared/npm/install.md)]

<a name="automate-with-continuous-integration"></a>
## Automate the process with continuous integration

You can use continuous integration systems such as Team Build to automate the packing and publishing of your packages. 
To get started with continuous integration, see the [npm in Team Build guidance](/vsts/build-release/packages/npm).

## What's next?

For more advanced topics, check out the [content summary](overview.md).
