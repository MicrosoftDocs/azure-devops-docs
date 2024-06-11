---
title: Connect your Maven project with Azure Artifacts
description: Learn how to set up your Maven project and connect to an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.assetid: 944f45ee-baa3-45ba-8467-5e7ab2bc47cf
ms.topic: conceptual
ms.date: 06/10/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Connect your Maven project to an Azure Artifacts feed

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can seamlessly publish and restore Maven packages from feeds and public registries. Azure Artifacts supports upstreaming from Maven Central, Google Maven Repository, Gradle Plugins, and JitPack. This guide will walk you through the process of setting up your Maven project and connecting to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../concepts/feeds.md#create-a-new-feed).

- [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven.

## Project setup

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

> [!NOTE]
> If your `settings.xml` file is shared within your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

## Related articles

- [Restore Maven packages](install.md)
- [Use packages from Maven Central](upstream-sources.md)
- [JitPack upstream source](jitpack-upstream.md)