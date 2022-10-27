---
title: Install Maven Artifacts 
description: How to install Maven Artifacts
ms.service: azure-devops-artifacts
ms.assetid: 0f66e727-e76a-4a72-be12-3fa1775b9e2c
ms.manager: jenp
ms.topic: conceptual
ms.reviewer: dastahel
ms.date: 12/13/2021
monikerRange: '<= azure-devops'
---

# Install Maven Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and restore Maven packages to/from your Azure Artifacts feed. In this article, we will be covering how to restore your packages from an Azure Artifacts feed.

## Prerequisites

- [Azure DevOps Services account](https://azure.microsoft.com/services/devops/).
- [Azure Artifacts feed](../../artifacts/get-started-nuget.md).

## Connect to feed

1. From within your project, select **Artifacts**, and then select your feed.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to your feed":::

1. Select **Maven**.

    :::image type="content" source="../media/maven-connect-feed.png" alt-text="Screenshot showing how to connect to Maven feeds.":::

1. If this is the first time using Azure Artifacts with Maven, select **Get the tools** button and follow the instructions to download and install the prerequisites.

    1. [Download Maven](https://maven.apache.org/download.cgi).
    1. [Install Maven](https://maven.apache.org/install.html).

1. Follow the instructions in the **Project setup** section to set up your config files and generate a new personal access token. If your *settings.xml* file is shared within your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

    :::image type="content" source="../media/maven-project-setup.png" alt-text="Screenshot showing how to set up Maven projects.":::

> [!TIP]
> The `<id>` tags in your *settings.xml* and *pom.xml* files must be the same.

## Restore Maven packages

Run the following command in an elevated command prompt to download your Maven packages. Maven automatically downloads all your dependency to your local repository when the build command is executed.

```Command
mvn build
```

## Related articles

- [Use packages from Maven Central](./upstream-sources.md)
- [Use public feeds to share your packages publicly](../tutorials/share-packages-publicly.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Use feed views to share packages](../feeds/views.md)