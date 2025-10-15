---
title: Use packages from Maven Central
description: Learn how to use packages from Maven Central upstream source in Azure Artifacts feeds.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 10/14/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Use packages from Maven Central

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Using Azure Artifacts upstream sources allows you to use a single feed to host both your own packages and packages from public registries such as Maven Central. When upstream sources are enabled, Azure Artifacts automatically saves a copy of any package installed from an upstream source. This ensures your development process can continue seamlessly even if a public registry experiences an outage.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven. |

## Create a feed

If you already have an Azure Artifacts feed, skip to the next section. Otherwise, follow these steps to create one:
 
1. Sign in to Azure DevOps and navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed, set the **Visibility** to control who can access your packages, and choose the feed **Scope**. Make sure to check **Include packages from common public sources** to enable upstream sources and allow consumption of packages from public registries.

1. Select **Create** to finish creating the feed.

## Add Maven Central upstream

If you selected the *upstream sources* checkbox when setting up your feed, Maven Central should already be added as an upstream source. Otherwise, you can manually add it by following these steps:

1. Sign in to your Azure DevOps, and navigate to your project.

1. Select **Artifacts**, then select the ![gear icon](../../media/icons/gear-icon.png) button in the top right corner to navigate to your **Feed Settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Public source**, select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu, and then select **Add** when you're done.

1. Select **Save** in the top right corner to save your changes.

    :::image type="content" source="media/save-upstream-sources.png" alt-text="A screenshot showing how to save upstream sources.":::

## Connect to your feed

Before you can start saving packages from upstream sources, you must first set up your project and connect to your feed.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select **Connect to Feed**, then select **Maven** from the left panel.

1. Make sure you've installed the prerequisites, then follow the steps in the **Project setup** section to set up your *pom.xml* and *settings.xml* files and connect to your feed. See [Project setup - Maven](project-setup-maven.md) for more details.

## Use packages from Maven Central

The following example illustrates how to consume the *Apache HttpClient* package from Maven Central using the command line.

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

1. Navigate to Maven Central `https://mvnrepository.com/`.

1. Search for *Apache HttpClient*. Select the package, then select the version you wish to install.

1. Under the **Maven** tab, copy the `<dependency>` snippet:

    ```xml
    <dependency>
      <groupId>org.apache.httpcomponents.client5</groupId>
      <artifactId>httpclient5</artifactId>
      <version>5.5.1</version>
    </dependency>
    ```

1. Open your *pom.xml* file and paste the snippet inside the `<dependencies>` tag, then save your file.

1. Run the following command from the same directory as your *pom.xml* file to install your dependencies:

    ```
    mvn install
    ```

## View saved packages

Now that you've installed a package from Maven Central, you can see how Azure Artifacts automatically saved a copy of that package to your feed. You can filter your feed view to see packages saved from different upstream sources.

1. Sign in to Azure DevOps, and navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. From the source dropdown, select **Maven Central** to filter for packages from this upstream.

1. The *Apache HttpClient** package that you saved in the previous step is now available in your feed.
 
    :::image type="content" source="media/apache-http-client-saved-from-maven-central.png" alt-text="A screenshot displaying the Apache HttpClient package that was saved from Maven Central.":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related content

- [Publish Maven packages to an Azure Artifacts feed](publish-packages-maven.md)

- [Search for packages in upstream sources](../how-to/search-upstream.md)

- [Publish Maven artifacts with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/publish-maven-artifacts.md)
