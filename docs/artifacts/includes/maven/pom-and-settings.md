---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 07/01/2024
ms.custom: sfi-image-nochange
---

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
    
1. Generate a [Personal Access Token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope, and then paste it into the `<password>` tag.

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

1. Generate a [Personal Access Token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope, and then paste it into the `<password>` tag.

::: moniker-end

