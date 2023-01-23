---
title: Install Maven Artifacts 
description: How to connect to feeds and install Maven Artifacts
ms.service: azure-devops-artifacts
ms.assetid: 0f66e727-e76a-4a72-be12-3fa1775b9e2c
ms.manager: jenp
ms.topic: conceptual
ms.reviewer: dastahel
ms.custom: engagement-fy23
ms.date: 01/09/2023
monikerRange: '<= azure-devops'
---

# Install Maven Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and restore Maven packages from Azure Artifacts feed and public registries. In this article, you will learn how to connect to Azure Artifacts feeds and restore your Maven packages.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Download](https://maven.apache.org/download.cgi) and [install](https://maven.apache.org/install.html) Maven.

## Connect to feed

1. From your Azure DevOps project, select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to your feed":::

1. Select **Maven** from the left navigation panel.

1. Follow the instructions in the **Project setup** section to set up your config files and generate a new personal access token.

    :::image type="content" source="../media/maven-project-setup.png" alt-text="Screenshot showing how to set up Maven projects.":::

> [!TIP]
> If your *settings.xml* file is shared within your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

## Restore Maven packages

Run the following command in an elevated command prompt to download your Maven packages. Maven automatically downloads all your dependencies to your local repository when the `build` command is executed.

```Command
mvn build
```

> [!TIP]
> The `<id>` tags in your *settings.xml* and *pom.xml* files must be the same.

## Related articles

- [Use packages from Maven Central](./upstream-sources.md)
- [Use public feeds to share your packages publicly](../tutorials/share-packages-publicly.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Use feed views to share packages](../feeds/views.md)