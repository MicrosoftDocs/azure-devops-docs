---
title: Use packages from npmjs.com
description: Use packages from npmjs.com using scopes or upstream sources
ms.assetid: E2DB1217-7113-4A75-A66D-3CADDB07AD37
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 10/19/2021
monikerRange: '>= tfs-2017'
---

# Use packages from npmjs.com

[!INCLUDE [version-gt-eq-2017](../../includes/version-gt-eq-2017.md)]

The npm client is designed to work with a single primary *registry* (what Azure Artifacts calls a *feed*). It also supports secondary *scoped* registries. Scoped registries can only be used to install packages whose names begin with the scope prefix, so their usage is more restrictive. If you want to use both private packages you've created **and** public packages from npmjs.com, we recommend using upstream sources. 

The npmjs.com upstream source allows you to merge the contents of npmjs.com into your feed such that the npm client can install packages from both locations.  Enabling upstream sources also automatically enables saving of packages you use from the upstream source. **This is the recommended way to use Azure Artifacts with npm.** Upstreams give you the most flexibility to use a combination of scoped- and non-scoped packages in your feed, as well as scoped- and non-scoped packages from npmjs.com.

## Enable npmjs.com as an upstream

You can use npmjs.com as an upstream source with new and existing feeds.

### On a new feed

- [Create a new feed](../get-started-npm.md#create-a-feed). Make sure you check the **Include packages from common public sources** checkbox.

    :::image type="content" source="media/include-upstream-sources.png" alt-text="Screenshot showing how to enable upstream sources":::

### On an existing feed

1. Navigate to your feed and then select the **gear icon** in the top right of the page to open the feed settings.
1. Select the **Upstream sources** tab, and then select **Add upstream source**.

    :::image type="content" source="media/add-upstream-source.png" alt-text="Screenshot showing how the add upstream source button":::

1. Select **Public source** and then select the **npmjs** public source from the dropdown menu.

    :::image type="content" source="media/npmjs-upstream.png" alt-text="Screenshot showing how the add the npmjs upstream":::

1. Select **Add** when you are done.

## Filter to saved packages

You can view the packages you saved in your feed by selecting a source from the dropdown menu.

::: moniker range=">= azure-devops-2019"  

:::image type="content" source="media/view-cached-packages-newnav.png" alt-text="Screenshot of the filtered npm packages":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"


:::image type="content" source="media/view-cached-packages.png" alt-text="Screenshot of the filtered npm packages in TFS":::

::: moniker-end

## Scopes

Using scopes instead of upstream sources limit your private package consumption to those with the `@scope` prefix e.g. `@fabrikam/core` but enable you to consume public packages **directly** from npmjs.com, see [npm scopes](scopes.md) for more details.

## Related articles

- [Publish npm packages (CLI)](./publish.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
-  [Use npm audit](./npm-audit.md)
