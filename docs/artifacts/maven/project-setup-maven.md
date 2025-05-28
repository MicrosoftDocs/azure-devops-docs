---
title: Connect your Maven project to an Azure Artifacts feed
description: Learn how to set up your Maven project and connect to an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.assetid: 944f45ee-baa3-45ba-8467-5e7ab2bc47cf
ms.topic: how-to
ms.date: 05/05/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Connect to an Azure Artifacts feed - Maven

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to publish and restore Maven packages from feeds and public registries such as Maven Central and Google Maven Repository. This article walks you through setting up your Maven project and connecting to an Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven. |

## Project setup

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. In the left navigation pane, select **Maven**. Make sure you've installed the prerequisites, if not, select **Get the tools** in the top-right corner to download and install them.

1. In the **Project setup** section, copy the `repository` snippet and add it to your *pom.xml* file within the `<repositories>` and `distributionManagement>` sections. Your file should resemble the following:

    ```xml
    <repositories>
      <repository>
        <id>FEED_NAME</id>
        <url>https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
        <releases>
          <enabled>true</enabled>
        </releases>
        <snapshots>
          <enabled>true</enabled>
        </snapshots>
      </repository>
    </repositories>
    <distributionManagement>
      <repository>
        <id>FEED_NAME</id>
        <url>https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
        <releases>
          <enabled>true</enabled>
        </releases>
        <snapshots>
          <enabled>true</enabled>
        </snapshots>
      </repository>
    </distributionManagement>
    ```

1. Add the provided snippet to your local *settings.xml* (located in *${user.home}/.m2*):

    ```xml
      <servers>
        <server>
          <id>FEED_NAME</id>
          <username><ORGANIZATION_NAME></username>
          <password>[PERSONAL_ACCESS_TOKEN]</password>
        </server>
      </servers>
    ```

1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes, and paste it into the `<password>` tag in your *settings.xml* file.

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. In the left navigation pane, select **Maven**. Make sure you've installed the prerequisites, if not, select **Get the tools** in the top-right corner to download and install them.

1. In the **Project setup** section, copy the `repository` snippet and add it to your *pom.xml* file within the `<repositories>` and `distributionManagement>` sections. Your file should resemble the following:
        
    ```xml
      <repositories>
        <repository>
          <id>FEED_NAME</id>
          <url>http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
      <distributionManagement>
        <repository>
          <id>FEED_NAME</id>
          <url>http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </distributionManagement>
    ```

1. Add the provided snippet to your local *settings.xml* (located in *${user.home}/.m2*):
    
    ```xml
      <servers>
        <server>
          <id>FEED_NAME</id>
          <username><COLLECTION_NAME></username>
          <password>[PERSONAL_ACCESS_TOKEN]</password>
        </server>
      </servers>
    ```

1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes, and paste it into the `<password>` tag in your *settings.xml* file.

::: moniker-end

> [!TIP]
> If your `settings.xml` file is shared across your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

## Related content

- [Restore Maven packages](install.md)

- [Use packages from Maven Central](upstream-sources.md)

- [Use packages from Google Maven Repository](google-maven.md)
