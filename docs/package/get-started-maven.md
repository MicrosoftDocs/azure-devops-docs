---
title: Get Started with Maven Package Management in Team Services and TFS
description: Quickly start hosting Maven packages in Visual Studio Team Services or Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.manager: jenp
ms.author: rossav
ms.date: 09/01/2017
---

# Get started with Maven Package Management in Team Services and TFS

## Before you start
This guide assumes you've already set up Package Management. You can check out how to install and license the extension in the 
[Install and license Package Management guide](install.md), or go directly to the [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed) 
listing to install.

[!INCLUDE [](_shared/availability-maven.md)]

### Prerequisites

1. Apache Maven installed. It can be downloaded from the [Apache Maven Site](https://maven.apache.org/download.cgi).
2. Have [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed) installed in your Team Services account.
3. [Public-opt in only] - To enable Maven support for your account, ask your account admin to go to the "Preview Features" section, choose "for this account", and enable "Maven for Package Management". 
([Preview Features docs](https://www.visualstudio.com/en-us/docs/collaborate/preview-features))

<a name="create-a-feed"></a>

## Create a feed

*Already have a feed? [Skip to the next step](#setup-your-POM-and-settings-.xml).*

[!INCLUDE [](_shared/create-feed.md)]

<a name="setup-your-POM-and-settings-.xml"></a>

## Set up authentication

[!INCLUDE [](_shared/maven/pom-and-settings.md)]

<a name="publish-a-package"></a>

## Publish a package

[!INCLUDE [](_shared/maven/publish.md)]

<a name="consume-in-visual-studio"></a>

## Install a package from your feed

[!INCLUDE [](_shared/maven/install.md)]

<a name="automate-with-continuous-integration"></a>

## Automate the process with continuous integration

You can use continuous integration systems like Team Build to automate the packing and publishing of your packages. 
To get started with continuous integration, see the [Maven in Team Build guidance](/vsts/build-release/packages/maven.md).

## What's next?

For more advanced topics, check out the [content summary](overview.md).
