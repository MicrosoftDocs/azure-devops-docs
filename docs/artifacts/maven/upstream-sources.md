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

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts upstream sources allows you to use a single feed for hosting both the packages you produce and those from public registries such as Maven Central. By enabling upstream sources in your feed, Azure Artifacts will automatically save a copy of any package installed from upstream. This ensures continued accessibility for your development, even in the event of a public registry outage. Additionally, Azure Artifacts supports various other Maven upstream sources, including the Google Maven Repository, Gradle Plugins, and JitPack.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Enable upstream sources

If you don't have a feed already, follow the instructions below to create one, and make sure that you check the *upstream sources* checkbox to enable them. If you already have a feed, move to the [next step](#add-maven-central-upstream) to add Maven Central as an upstream source.

[!INCLUDE [](../includes/create-feed.md)]

## Add Maven Central upstream

If you checked the *upstream sources* checkbox when creating your feed, Maven Central should already be added as an upstream source. If not, you can add it manually using the following steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the ![gear icon](../../media/icons/gear-icon.png) in the top right corner to navigate to your **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Public source**, select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu, and then select **Save** when you're done.

    :::image type="content" source="../media/maven-add-upstream.png" alt-text="A screenshot showing how to add Maven central upstream source.":::

1. Select **Save** in the top right corner to save your changes.

    :::image type="content" source="media/save-upstream-sources.png" alt-text="A screenshot showing how to save upstream sources.":::

## View saved packages

You can view the packages you saved from upstreams by selecting the **Maven Central** source from the dropdown menu.

:::image type="content" source="media/maven-central-packages.png" alt-text="A screenshot showing how to filter for packages from Maven Central.":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project's files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related articles

- [Install Maven Artifacts](./install.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)