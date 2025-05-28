---
title: Use packages from Maven Central
description: How to use packages from Maven Central upstream source
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 11/10/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use packages from Maven Central

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Using Azure Artifacts upstream sources allows you to use a single feed for hosting both the packages you produce and packages from public registries such as Maven Central. When you add upstream sources to your feed, Azure Artifacts saves a copy of any package installed from upstream. This ensures continued accessibility for your development, even if a public registry suffers an outage. Additionally, Azure Artifacts supports various other Maven upstream sources, including the Google Maven Repository, Gradle Plugins, and JitPack.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Enable upstream sources

If you don't have a feed already, follow these instructions to create one, and make sure that you check the *upstream sources* checkbox to enable them. If you already have a feed, move to the [next step](#add-maven-central-upstream) to add Maven Central as an upstream source.

[!INCLUDE [](../includes/create-feed.md)]

## Add Maven Central upstream

If you checked the *upstream sources* checkbox when creating your feed, Maven Central should already be added as an upstream source. If not, you can add it manually using the following steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the ![gear icon](../../media/icons/gear-icon.png) in the top right corner to navigate to your **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Public source**, select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu, and then select **Add** when you're done.

    :::image type="content" source="../media/maven-add-upstream.png" alt-text="A screenshot showing how to add Maven central upstream source.":::

1. Select **Save** in the top right corner to save your changes.

    :::image type="content" source="media/save-upstream-sources.png" alt-text="A screenshot showing how to save upstream sources.":::

## Save package from Maven Central

Before saving packages from Maven Central, make sure you have set up your project to connect to your feed. If you haven't done so already, follow the instruction in the [project setup](project-setup-maven.md) to set up your Maven project and connect to your feed. The following example illustrates how to save the Kotlin Datetime Library from Maven Central using the command line.

If you want to save/restore your packages using Azure Pipelines instead, follow the steps in the [Restore Maven packages with Azure Pipelines (YAML/Classic)](../../pipelines/packages/maven-restore.md) tutorial. 

1. Navigate to Maven Central at `https://mvnrepository.com/`.

1. Search for the Kotlin Datetime Library. Select the **Kotlinx Datetime** package, and then select the version you wish to install.

1. Copy the `<dependency>` snippet from the **Maven** tab. 

    ```xml
    <dependency>
        <groupId>org.jetbrains.kotlinx</groupId>
        <artifactId>kotlinx-datetime-jvm</artifactId>
        <version>0.4.1</version>
        <scope>runtime</scope>
    </dependency>
    ```

1. Open your *pom.xml* file and paste the snippet inside your `<dependencies>` tag, and then save your file.

1. Run the following command from the same path as your *pom.xml* file to install your dependencies:

    ```command
    mvn install
    ```

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## View saved packages

You can view the packages you saved from upstreams by selecting the **Maven Central** source from the dropdown menu.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Maven Central** from the source dropdown menu to filter for packages from this upstream.

1. The *Kotlinx Datetime* package that we saved in the previous step, is now available in our feed. Azure Artifacts automatically saved a copy to our feed when we executed the mvn install command.
 
:::image type="content" source="media/saved-kotlin-package-from-upstream.png" alt-text="A screenshot showing a package that was saved from Maven Central.":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project's files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related articles

- [Search for packages in upstream sources](../how-to/search-upstream.md)
- [Promote packages and manage feed views](../feeds/views.md)
- [Configure permissions](../feeds/feed-permissions.md)
