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

Before you begin, make sure your Maven project is configured to connect to your Azure Artifacts feed. If you haven’t done this yet, follow the instructions in the [project setup](project-setup-maven.md) to set up your Maven project and authenticate with your feed. 

The following example shows how to install *Multipaz*, an open-source identity framework, from the Google Maven Repository.

1. Navigate to the Google Maven Repository `https://maven.google.com`.

1. Search for the *Multipaz* package: *org.multipaz*, then select the package and the version you want to use.

1. Copy the **Group ID**, **Artifact ID**, and **Version** values for the package.

1. Replace the placeholders in the following snippet with the values you just copied: 

    ```xml
    <dependency>
        <groupId>GROUP_ID</groupId>
        <artifactId>ARTIFACT_ID</artifactId>
        <version>VERSION</version>
    </dependency>
    ```

1. Open your *pom.xml* file, paste the dependency snippet inside the `<dependencies>` section, then save your file.

1. Run the following command from the same path as your *pom.xml* file to install the dependency:

    ```
    mvn install
    ```

When the command completes, Maven resolves the dependency through your Azure Artifacts feed. If the package isn’t already present in the feed, Azure Artifacts retrieves it from the Google Maven Repository and saves a copy. Subsequent installs download the package directly from Azure Artifacts instead of the public registry.

> [!NOTE]
> You must have the **Feed and Upstream Reader (Collaborator)** role or higher to save packages from upstream. See [Feed roles and permissions](../feeds/feed-permissions.md#feed-roles-and-permissions) for more details.

## View saved packages

After installing a package from an upstream source, you can confirm that Azure Artifacts saved a copy to your feed:

1. Sign in to Azure DevOps and navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. From the **Source** dropdown menu, select **Google Maven Repository** to view packages saved from this upstream.

1. The *Multipaz* package that you installed in the previous section is now available in your feed. Azure Artifacts automatically saved a copy when you ran the mvn install command.
 
    :::image type="content" source="media/package-saved-from-google-maven-repository-upstream.png" alt-text="A screenshot showing the Multipaz package from the Google Maven Repository saved to the feed." lightbox="media/package-saved-from-google-maven-repository-upstream.png":::

> [!TIP]
> If Maven does not download all dependencies, run the following command from the project directory to regenerate project files and download sources and Javadocs:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related content

- [Upstream from internal feeds](../how-to/upstream-internal-feed.md)

- [Use upstream sources with public feeds](../how-to/public-feeds-upstream-sources.md)

- [Search for packages in upstream sources](../how-to/search-upstream.md)
