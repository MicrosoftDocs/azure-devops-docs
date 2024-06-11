---
title: Restore Maven packages from your Azure Artifacts feed
description: Learn how to connect to your Azure Artifacts feed and restore your Maven packages.
ms.service: azure-devops-artifacts
ms.assetid: 0f66e727-e76a-4a72-be12-3fa1775b9e2c
ms.manager: mijacobs
ms.topic: conceptual
ms.custom: engagement-fy23
ms.date: 06/11/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Restore Maven packages from your Azure Artifacts feed

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and restore Maven packages from Azure Artifacts feed and public registries. This article will walk you through setting up your Maven project, connecting to your Azure Artifacts feed, and restoring your Maven packages.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../concepts/feeds.md#create-a-new-feed).

- [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven.

## Connect to a feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Maven** from the left navigation area.

1. If this is your first time using Azure Artifacts with Maven, make sure you've installed the prerequisites. Otherwise select **Get the tools** in the top-right corner to install them.

1. Follow the instructions in the **Project setup** section to set up your *pom.xml* and *settings.xml* files. Your files should resemble the following examples:

    - **pom.xml**:
        
        ```xml
          <repositories>
            <repository>
              <id>MavenDemo</id>
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
              <id>MavenDemo</id>
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

    - **settings.xml**:
    
        ```xml
          <servers>
            <server>
              <id>MavenDemo</id>
              <username><ORGANIZATION_NAME></username>
              <password>[PERSONAL_ACCESS_TOKEN]</password>
            </server>
          </servers>
        ```
    
1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope, and then paste it into the `<password>` tag.

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **Maven** from the left navigation pane.

1. If this is your first time using Azure Artifacts with Maven, make sure you've installed the prerequisites, otherwise select **Get the tools** in the top-right corner to install them.

1. Follow the instructions in the **Project setup** section to set up your *pom.xml* and *settings.xml* files. Your files should resemble the following examples:

    - **pom.xml**:
        
        ```xml
          <repositories>
            <repository>
              <id>MavenDemo</id>
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
              <id>MavenDemo</id>
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

    - **settings.xml**:
    
        ```xml
          <servers>
            <server>
              <id>MavenDemo</id>
              <username><COLLECTION_NAME></username>
              <password>[PERSONAL_ACCESS_TOKEN]</password>
            </server>
          </servers>
        ```

1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope, and then paste it into the `<password>` tag.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **Maven** from the left navigation pane.

1. Select **Generate Maven Credentials** and add the credentials to your user *settings.xml* file inside the `<servers>` tag. Your file should look like the following example:

    ```xml
      <servers>
        <server>
          <id>server-2019-defaultcollection-demo</id>
          <username><FEED_NAME></username>
          <password>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</password>
        </server>
      </servers>
    ```

1. Add the second snippet to your project's *pom.xml* inside both the `<repositories>` and `<distributionManagement>` tags. Your file should look like the following example:

    ```xml
      <repositories>
        <repository>
          <id>server-2019-defaultcollection-demo</id>
          <url>http://<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
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
          <id>server-2019-defaultcollection-demo</id>
          <url>http://<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/maven/v1</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </distributionManagement>
    ```

::: moniker-end

> [!TIP]
> If your *settings.xml* file is shared within your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

## Restore packages

Run the following command in an elevated command prompt to download your Maven packages. Maven automatically downloads all your dependencies to your local repository when the `build` command is executed.

```Command
mvn build
```

> [!NOTE]
> Ensure that the `<id>` tags in your *settings.xml* and *pom.xml* files match exactly.

## Related articles

- [Use packages from Maven Central](./upstream-sources.md)
- [Use public feeds to share your packages publicly](../tutorials/share-packages-publicly.md)
- [Configure permissions](../feeds/feed-permissions.md)