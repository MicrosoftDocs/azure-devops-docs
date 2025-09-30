---
title: Get started with Maven packages
description: Learn how to publish and restore Maven packages to Azure Artifacts feeds.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 09/29/2025
monikerRange: '>= azure-devops-2020'
---

# Get started with Maven packages in Azure Artifacts

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Maven packages are Java binaries built using the [Apache Maven build tool](https://maven.apache.org/). With Azure Artifacts feeds, you can store multiple package types in a single feed. Stored packages can then be restored to build your project or shared with your team and customers. Azure Artifacts feeds also support consuming packages from public registries such as Maven Central, Google Maven Repository, Gradle Plugins, and JitPack through upstream sources.

This article will guide you through setting up your Maven project, connecting it to an Azure Artifacts feed, and publishing and restoring your Maven packages.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven. |

## Create a feed

If you already have a feed, you can skip to the next section. Otherwise, create a new feed as follows:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed, select the **Visibility** to define who can view your packages, and choose the feed **Scope**. If you want to include packages from public registries such as Maven Central or Google Maven Repository, check **Include packages from common public sources**.

1. Select **Create** when you're done.

## Connect to a feed

Now that you have a feed, you need to set up your configuration file to authenticate with your feed, you'll also need to create a personal access token to authenticate with Azure DevOps. Follow the steps below to authenticate and connect to your feed:

1. Generate a [Personal Access Token](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope. Copy your PAT and save it in a secure location as you'll need in the next steps.

1. Sign in to Azure DevOps, and then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Maven** from the left navigation pane.

1. If this is the first time using Azure Artifacts with Maven on this machine, make sure you've installed the prerequisites.

1. Open your *pom.xml* file and add the provided snippet in the **Project setup** section inside both the `<repositories>` and `<distributionManagement>` sections. Your *pom.xml* should look similar to the following:

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

1. Open your user-level *settings.xml* and add your PAT in the `<password>` tag. This file should be kept locally so make sure not to commit this into your source code to not expose your credentials. Your *settings.xml* file should look similar to the following:
    
    ```xml
        <servers>
            <server>
                <id>MavenDemo</id>
                <username><ORGANIZATION_NAME></username>
                <password>[PERSONAL_ACCESS_TOKEN]</password>
            </server>
        </servers>
    ```

## Publish packages

Now that you've authenticated with your feed, you’re ready to publish and restore packages:

1. If you haven't build your package yet, open a command prompt window and navigate to your project directory where your *pom.xml* file is located, then run the following command to package your project. This command compiles your code, runs tests included, and packages your project into a distributable format (such as a JAR file).

    ```
    mvn package
    ```

1. Run the following command from your project directory to publish your package to your feed:

    ```
    mvn deploy
    ```

1. After successfully publishing your package, it will shortly be available in your Azure Artifacts feed.

    :::image type="content" source="media/get-started-maven/maven-package-published-to-feed-contracted.png" alt-text="A screenshot that shows a Maven package deployed to a feed." lightbox="media/get-started-maven/maven-package-published-to-feed.png":::

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Restore packages

To restore packages from your feed, run the `mvn install` command from your project directory to install all the dependecies listed in your *pom.xml*. If the package you want to install from your feed is not in your *pom.xml*, here's how to add it and restore from your feed:

1. Sign in to Azure DevOps, and then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you want to install, navigate to **Overview** > **Maven**, then copy the dependency snippet. It should look similar to this:

    ```xml
    <dependency>
      <groupId>MyGroup</groupId>
      <artifactId>MavenQuickStartDemo</artifactId>
      <version>1.0-SNAPSHOT</version>
    </dependency>
    ```

1. Open your *pom.xml* file and paste the snippet inside the `<dependencies>` tag.

1. Run the following command from the directory where your *pom.xml* file is located to restore your packages:

    ```
    mvn install
    ```

## Related content

- [Publish Maven artifacts with Azure Pipelines (Classic/YAML)](../pipelines/artifacts/publish-maven-artifacts.md)

- [Use packages from Maven Central](maven/upstream-sources.md)

- [Use upstream sources in a public feed](how-to/public-feeds-upstream-sources.md)
