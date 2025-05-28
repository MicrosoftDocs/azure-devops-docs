---
title: Use packages from Google Maven Repository upstream source
description: How to consume packages from Google Maven Repository upstream source
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 11/14/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use packages from Google Maven Repository

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

With Azure Artifacts, developers can enable upstream sources to consume packages from different public registries such as Google Maven Repository. Once enabled, Azure Artifacts will automatically save a copy of any package installed from the upstream. Additionally, Azure Artifacts supports other Maven upstream sources such as Maven Central, Gradle Plugins, and JitPack. In this article, you'll learn how to:

> [!div class="checklist"]    
> * Add Google Maven Repository as an upstream source 
> * Consume a package from upstream 
> * Find saved packages in your feed

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

## Enable upstream sources

If you don't have a feed already, follow the instructions below to create a new feed, and make sure to check the *upstream sources* checkbox to enable them. If you already have a feed, jump to the [next step](#add-google-maven-repository-upstream) to add Google Maven Repository as an upstream source:

[!INCLUDE [](../includes/create-feed.md)]

## Add Google Maven Repository upstream

If you checked the *upstream sources* checkbox when creating your feed, Google Maven Repository should already be added as an upstream source. If not, you can add it manually using the following steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the gear icon ![gear icon](../../media/icons/gear-icon.png) in the top right corner to navigate to your **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Public source**, and then select **Google Maven Repository (https://maven.google.com/web/index.html)** from the dropdown menu.

1. Select **Add** when you're done, and then select **Save** again in the top right corner to save your changes.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Save packages from Google Maven Repository

Before saving packages from Google Maven Repository, make sure you have set up your project to connect to your feed. If you haven't done so already, follow the instruction in the [project setup](project-setup-maven.md) to set up your Maven project and connect to your feed. The following example illustrates how to save the Zipflinger Library from Google Maven Repository.

If you want to save/restore your packages using Azure Pipelines instead, follow the steps in the [Restore Maven packages with Azure Pipelines (YAML/Classic)](../../pipelines/packages/maven-restore.md) tutorial. 

1. Navigate to Google Maven Repository at `https://mvnrepository.com/`.

1. Search for the Zipflinger library. Select the **Zipflinger** package, and then select the version you wish to install.

1. Copy the `<dependency>` snippet from the **Maven** tab. 

    ```xml
    <dependency>
        <groupId>com.android</groupId>
        <artifactId>zipflinger</artifactId>
        <version>8.3.0-alpha13</version>
    </dependency>
    ```

1. Open your *pom.xml* file and paste the snippet inside your `<dependencies>` tag, and then save your file.

1. Run the following command from the same path as your *pom.xml* file to install your dependencies:

    ```command
    mvn install
    ```

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## View saved packages

To view the packages you installed from upstream, select the **Google Maven Repository** source from the dropdown menu.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the **Google Maven Repository** source from the dropdown menu to find packages from this upstream.

1. The *Zipflinger* package that we saved in the previous step is now available in our feed, as Azure Artifacts automatically saved a copy when we executed the mvn install command.
 
    :::image type="content" source="media/saved-zipflinger-package-from-google-maven-repository.png" alt-text="A screenshot showing packages from Google Maven Repository." lightbox="media/saved-zipflinger-package-from-google-maven-repository.png":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project's files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related articles

- [Use packages from Maven Central](./upstream-sources.md)
- [Search for packages in upstream sources](../how-to/search-upstream.md)
- [Configure permissions](../feeds/feed-permissions.md)
