---
title: Use packages from npmjs.com
description: Use packages from npmjs.com using scopes or upstream sources
ms.assetid: E2DB1217-7113-4A75-A66D-3CADDB07AD37
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/14/2022
monikerRange: '<= azure-devops'
---

# Use packages from npmjs.com

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The npm client is designed to work with a single primary *registry* (what Azure Artifacts calls a *feed*). It also supports secondary *scoped* registries. Scoped registries can only be used to install packages whose names begin with the scope prefix, so their usage is more restrictive. If you want to use both private packages you've created **and** public packages from npmjs.com, we recommend using upstream sources. 

The npmjs.com upstream source allows you to merge the contents of npmjs.com into your feed such that the npm client can install packages from both locations.  Enabling upstream sources also automatically enables saving of packages you use from the upstream source. **This is the recommended way to use Azure Artifacts with npm.** Upstreams give you the most flexibility to use a combination of scoped- and nonscoped packages in your feed, as well as scoped- and nonscoped packages from npmjs.com.

## Enable npmjs.com as an upstream

You can use npmjs.com as an upstream source with new and existing feeds.

### On a new feed

- [Create a new feed](../get-started-npm.md#create-a-feed). Make sure you check the **Include packages from common public sources** checkbox.

    :::image type="content" source="media/include-upstream-sources.png" alt-text="Screenshot showing how to enable upstream sources":::

### On an existing feed

1. Select **Artifacts**, and then select your feed.

1. Navigate to **Feed settings** by selecting the gear icon ![gear icon](../../media/icons/gear-icon.png) button.

1. Select **Upstream sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/npm-new-upstream.png" alt-text="A screenshot showing how to add an upstream source.":::

1. Select **Public source**, and then select **npmjs** from the dropdown menu.

1. Select **Save** when you are done.

1. Select **Save** to save your changes.

    :::image type="content" source="../media/save-upstream-source.png" alt-text="A screenshot showing how to save changes in upstream sources":::

## Filter to saved packages

You can view the packages you saved from upstreams by selecting your **Source** from the dropdown menu.

::: moniker range=">= azure-devops-2019"  

:::image type="content" source="media/view-cached-packages-newnav.png" alt-text="Screenshot of the filtered npm packages":::

::: moniker-end

::: moniker range="tfs-2018"


:::image type="content" source="media/view-cached-packages.png" alt-text="Screenshot of the filtered npm packages in TFS":::

::: moniker-end

## Scopes

Using scopes instead of upstream sources limits your private package consumption to those with the `@scope` prefix e.g. `@fabrikam/core` but enables you to consume public packages **directly** from npmjs.com, see [npm scopes](scopes.md) for more details.

## Related articles

- [Publish npm packages (CLI)](./publish.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
-  [Use npm audit](./npm-audit.md)
