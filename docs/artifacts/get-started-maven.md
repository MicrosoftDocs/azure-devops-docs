---
title: Get started with Maven packages
description: Quickly start hosting Maven artifacts in Azure DevOps Services or Team Foundation Server
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.manager: jenp
ms.reviewer: dastahel
ms.date: 07/22/2020
monikerRange: '>= tfs-2018'
---

# Get started with Maven feeds and Artifacts

**Azure DevOps Services | TFS 2018**

## Before you start

::: moniker range="tfs-2018"

This quickstart assumes you've already set up Azure Artifacts. You can check out how to license the extension in the [License Azure Artifacts guide](start-using-azure-artifacts.md).

> [!NOTE]
> Azure Artifacts is an extension that comes pre-installed on TFS 2017 or newer (Maven is only available in 2018 or newer), if it was removed from your organization, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

### Prerequisites

1. Apache Maven installed. You can download it from the [Apache Maven site](https://maven.apache.org/download.cgi).

2. Have [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) installed in your organization.

## Create a feed

_Already have a feed?_ [Skip to the next step](#setup-your-POM-and-settings-.xml).

[!INCLUDE [](includes/create-feed.md)]

<a name="setup-your-POM-and-settings-.xml"></a>

## Set up authentication

[!INCLUDE [](includes/maven/pom-and-settings.md)]

<a name="publish-a-package"></a>

## Publish an artifact

[!INCLUDE [](includes/maven/publish.md)]

<a name="consume-in-visual-studio"></a>

## Install an artifact from your feed

[!INCLUDE [](includes/maven/install.md)]

<a name="automate-with-continuous-integration"></a>

## Automate the process with continuous integration

You can use continuous integration systems such as Team Build to automate the installation and publishing of your Maven artifacts. 
To get started with continuous integration, see the [Maven in Team Build guidance](../pipelines/artifacts/maven.md).

## What's next?

Check out the [Azure Artifacts landing page](index.yml) to learn about other topics.