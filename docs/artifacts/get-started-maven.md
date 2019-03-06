---
title: Get started with Maven packages in Azure DevOps Services and TFS
description: Quickly start hosting Maven artifacts in Azure DevOps Services or Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.manager: jenp
ms.author: elbatk
author: elbatk
ms.reviewer: dastahel
ms.date: 01/31/2018
monikerRange: '>= tfs-2018'
---

# Get started with Maven packages in Azure DevOps Services and TFS

**Azure DevOps Services** | **TFS 2018**

## Before you start

This quickstart assumes you've already set up Azure Artifacts. You can check out how to license the extension in the [License Azure Artifacts guide](license-azure-artifacts.md).

> Azure Artifacts is an extension that comes pre-installed on TFS 2017 or newer (Maven is only available in 2018 or newer), if it was removed from your organization, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

### Prerequisites

1. Apache Maven installed. You can download it from the [Apache Maven site](https://maven.apache.org/download.cgi).

1. Have [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) installed in your organization.

## Create a feed

*Already have a feed? [Skip to the next step](#setup-your-POM-and-settings-.xml).*

[!INCLUDE [](_shared/create-feed.md)]

<a name="setup-your-POM-and-settings-.xml"></a>

## Set up authentication

[!INCLUDE [](_shared/maven/pom-and-settings.md)]

<a name="publish-a-package"></a>

## Publish an artifact

[!INCLUDE [](_shared/maven/publish.md)]

<a name="consume-in-visual-studio"></a>

## Install an artifact from your feed

[!INCLUDE [](_shared/maven/install.md)]

<a name="automate-with-continuous-integration"></a>

## Automate the process with continuous integration

You can use continuous integration systems such as Team Build to automate the installation and publishing of your Maven artifacts. 
To get started with continuous integration, see the [Maven in Team Build guidance](/azure/devops/pipelines/packages/maven).

## What's next?

For more advanced topics, check out the [content summary](overview.md).
