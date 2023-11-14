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

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, developers can enable upstream sources to consume packages from different public registries such as Google Maven Repository. Once enabled, Azure Artifacts will automatically save a copy of any package installed from the upstream. Additionally, Azure Artifacts supports other Maven upstream sources such as Maven Central, Gradle Plugins, and JitPack. In this article, you'll learn how to:

> [!div class="checklist"]    
> * Add Google Maven Repository as an upstream source 
> * Consume a package from upstream 
> * Find saved packages in your feed

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

## Add Google Maven Repository

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream sources**.

1. Select **Add Upstream**.

1. Select **Public source**, and then select **Google Maven Repository (https://maven.google.com/web/index.html)** from the dropdown menu.

    :::image type="content" source="../media/google-maven-repository.png" alt-text="A screenshot showing how to add Google Maven Repository.":::

1. Select **Save** when you are done.

1. Select **Save** at the top right corner to save your changes.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.


## View saved packages

To view the packages you installed from Google Maven Repository, select the appropriate source from the dropdown menu.

:::image type="content" source="media/google-maven-source.png" alt-text="A screenshot showing how to filter for packages from Google Maven Repository.":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project's files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related articles

- [Maven Central upstream source](./upstream-sources.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Upstream behavior](../concepts/upstream-behavior.md)
