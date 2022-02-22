---
title: Get started with Maven packages
description: Quickly start publishing and consuming Maven Artifacts to/from your feed
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 02/18/2022
monikerRange: '>= tfs-2018'
---

# Get started with Maven feeds and Artifacts

[!INCLUDE [version-gt-eq-2018](../includes/version-gt-eq-2018.md)]

This quickstart will guide you through setting up Maven to publish and consume Artifacts from your feed.

::: moniker range="tfs-2018"

This guide assumes you've already set up Azure Artifacts. See [Start using Azure Artifacts](start-using-azure-artifacts.md) to learn how to license the extension.

> [!NOTE]
> Azure Artifacts is an extension that comes pre-installed in TFS 2017 or newer (Maven is only available in 2018 or newer), if it was removed from your organization, you can install it from the [Visual studio marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

### Prerequisites

1. Apache Maven installed. You can download it from the [Apache Maven project](https://maven.apache.org/download.cgi).

2. Have [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) installed in your organization.

## Create a feed

_Already have a feed?_ [Skip to the next step](#set-up-authentication).

[!INCLUDE [](includes/create-feed.md)]

## Set up authentication

[!INCLUDE [](includes/maven/pom-and-settings.md)]

## Publish an artifact

[!INCLUDE [](includes/maven/publish.md)]

> [!IMPORTANT]
> In order to automatically authenticate with your Maven feed, you must set the `mavenAuthenticateFeed` argument to true in the [Maven task](../pipelines/tasks/build/maven.md).

## Install an artifact from your feed

[!INCLUDE [](includes/maven/install.md)]
