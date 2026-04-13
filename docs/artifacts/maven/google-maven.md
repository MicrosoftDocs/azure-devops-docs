---
title: Use packages from Google Maven Repository upstream source
description: Learn how to consume packages from Google Maven Repository upstream source in Azure Artifacts feeds.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 04/12/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Use packages from Google Maven Repository

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, developers can enable upstream sources to consume packages from public registries such as the Google Maven Repository. When an upstream source is enabled, Azure Artifacts automatically saves a copy of any package installed to the feed by users with *Feed and Upstream Reader (Collaborator)* permissions or higher. Azure Artifacts also supports other Maven upstream sources, including Maven Central, Gradle Plugins, and JitPack.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md). |

## Create a feed

If you already have an Azure Artifacts feed, skip to the next section. Otherwise, create a new one by following these steps:
 
1. Sign in to Azure DevOps and navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Enter a **Name** for your feed, set the **Visibility** to control who can view packages, and choose the feed **Scope**. Select **Include packages from common public sources** to enable upstream sources and allow consumption from public registries.

1. Select **Create** to finish.

## Add the Google Maven Repository upstream source

If you selected *Include packages from common public sources* when creating your feed, the Google Maven Repository should already be added as an upstream source. If not, you can add it manually by following these steps:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, then select the gear icon ![gear icon](../../media/icons/gear-icon.png) in the upper-right corner to open **Feed Settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Public source**, then select **Google Maven Repository (https://maven.google.com/web/index.html)**.

1. Select **Add**, and then select **Save** in the upper-right corner to save your changes.

## Save packages from Google Maven Repository

Before saving packages from Google Maven Repository, make sure you have set up your project to connect to your feed. If you haven't done so already, follow the instruction in the [project setup](project-setup-maven.md) to set up your Maven project and connect to your feed. The following example illustrates how to save the Zipflinger Library from Google Maven Repository.

1. Navigate to the Google Maven Repository `https://maven.google.com`.

1. Search for the *Zipflinger* library, then select the package and the version you want to use.

1. Copy the **Group ID**, **Artifact ID**, and **Version** for the *Zipflinger* package.

1. Replace the placeholders in the following snippet with the values you just copied: 

    ```xml
    <dependency>
        <groupId>GROUP_ID</groupId>
        <artifactId>ARTIFACT_ID</artifactId>
        <version>VERSION</version>
    </dependency>
    ```

1. Open your *pom.xml* file, paste the snippet inside the `<dependencies>` section, then save your file.

1. Run the following command from the same path as your *pom.xml* file to install your dependencies:

    ```
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
