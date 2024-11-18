---
title: Get started with Maven packages
description: Learn how to publish and restore Maven packages with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 07/01/2024
monikerRange: '<= azure-devops'
---

# Get started with Maven packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to manage their dependencies from a single feed while providing control over package sharing. With Azure Artifacts feeds, you can publish and restore Maven packages, and set up upstream sources to consume packages from public registries like Maven Central, Google Maven Repository, Gradle Plugins, and JitPack. This article will guide you through setting up your Maven project, connecting to an Azure Artifacts feed, and publishing and restoring your Maven packages.

## Prerequisites

- Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven.

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

[!INCLUDE [](includes/maven/pom-and-settings.md)]

## Publish packages

1. Open a command prompt window and navigate to your project directory where your *pom.xml* file is located, and then run the following command to package your project. This command compiles your code, runs tests included, and packages your project into a distributable format (such as a JAR file).

    ```
    mvn package
    ```

1. Run the following command from your project directory to publish your package to your feed:

    ```
    mvn deploy
    ```

1. After successfully deploying your package, it will shortly be available in your feed.

    :::image type="content" source="media/get-started-maven/maven-package-published-to-feed-contracted.png" alt-text="A screenshot that shows a Maven package deployed to a feed." lightbox="media/get-started-maven/maven-package-published-to-feed.png":::

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Restore packages

1. Navigate to **Artifacts** in your Azure DevOps project, select your feed from the dropdown menu, and then select the package you wish to install.

1. Navigate to **Overview** > **Maven**, then copy the dependency snippet.

1. Open your *pom.xml* file and paste the snippet inside the `<dependencies>` tag.

1. Run the following command from the directory where your *pom.xml* file is located to restore your packages:

    ```
    mvn install
    ```

## Related articles

- [Publish Maven artifacts with Azure Pipelines](../pipelines/artifacts/publish-maven-artifacts.md)
- [Use packages from Maven Central](maven/upstream-sources.md)
- [Use upstream sources in a public feed](how-to/public-feeds-upstream-sources.md)
