---
title: Use packages from npmjs.com
description: How to consume packages from npmjs.com upstream source
ms.assetid: E2DB1217-7113-4A75-A66D-3CADDB07AD37
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 11/29/2023
monikerRange: '<= azure-devops'
---

# Use packages from npmjs.com

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The npm client is designed to work with one main registry (known as a feed in Azure Artifacts) at a time. However, it does support additional scoped registries. If you plan to use both private packages and public packages from npmjs.com, it's recommended to use upstream sources.
Once you enable upstream sources in your feed, Azure Artifacts automatically saves a copy of any installed package to your feed. This offers the greatest flexibility, allowing you to use a mix of scoped and non-scoped packages in your feed, including both scoped and non-scoped packages from npmjs.com.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

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
