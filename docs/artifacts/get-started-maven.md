---
title: Get started with Maven packages
description: learn how to publish and download Maven artifacts
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 05/06/2022
monikerRange: '<= azure-devops'
---

# Get started with Maven packages and Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

This quickstart will guide you through setting up your Maven project to connect to Azure Artifacts feeds and publish and download your Maven packages.

### Prerequisites

- An Azure DevOps organization. [Create an organization](../organizations/accounts/create-organization.md), if you don't have one already.
- [Install Apache Maven](https://maven.apache.org/download.cgi).
- An Azure Artifacts feed. [Create a feed](./concepts/feeds.md#create-public-feeds.) if you don't have one already.

## Set up authentication

[!INCLUDE [](includes/maven/pom-and-settings.md)]

> [!TIP]
> If you are using [Maven task](/azure/devops/pipelines/tasks/reference/maven-v3), set the `mavenAuthenticateFeed` argument to true to automatically authenticate with your Maven feed.

## Publish artifacts

[!INCLUDE [](includes/maven/publish.md)]

## Install artifacts

[!INCLUDE [](includes/maven/install.md)]

## Related articles

- [Configure permissions](./feeds/feed-permissions.md)
- [Use feed views to share packages](./feeds/views.md)
- [Set up upstream sources](./how-to/set-up-upstream-sources.md)
