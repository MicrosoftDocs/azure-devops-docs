---
title: Google Maven Repository upstream source
description: How to add Google Maven Repository upstream source
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/03/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Google Maven Repository upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, developers can enable upstream sources to store packages from different sources such as Google Maven Repository. Once enabled, Azure Artifacts will save a copy of all the packages installed from Google Maven Repository. Azure Artifacts also support other Maven upstream sources such as Maven Central, Gradle Plugins, and JitPack.

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
