---
title: Use packages from nuget.org
description: How to use packages from nuget.org with Azure Artifacts
ms.assetid: 301f954f-a35a-4fe2-b7fd-c78e534d9b16
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/14/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# NuGet.org upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Enabling upstream sources on your feed allow you to publish and consume packages from your feed and public registries. Adding the nuget.org upstream allows you to consume NuGet packages from the public registry.

## Add a new upstream source

1. Select **Artifacts**, and then select your feed.

1. Navigate to **Feed settings** by selecting the gear icon ![gear icon](../../media/icons/gear-icon.png) button.

1. Select **Upstream Sources**.

    :::image type="content" source="../media/upstream-sources.png" alt-text="A screenshot showing how to access upstream sources from feed settings.":::

1. Select **Add Upstream**.

    :::image type="content" source="../media/add-upstream.png" alt-text="A screenshot showing how to add an upstream source.":::

1. Select **Public source**, and then fill out the required fields.

    :::image type="content" source="../media/add-new-upstream.png" alt-text="Screenshot showing how to add a new upstream source.":::

1. Select **Add** when you are done.

## Update nuget.config

1. Select **Artifacts**, and then select your feed. 

1. Select **Connect to feed**, and then choose **NuGet.exe**.

    :::image type="content" source="../media/nuget-connect-to-feed.png" alt-text="Screenshot showing how to connect to NuGet feeds.":::

1. Copy the XML snippet in the **Project Setup** section.

1. Create a new file named *nuget.config* in the root of your project.

1. Paste the XML snippet in your config file.

## View saved packages

You can view the packages you saved from upstreams by selecting your **Source** from the dropdown menu.

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/view-cached-packages-newnav.png" alt-text="A screenshot showing how to filter packages by source.":::

::: moniker-end

::: moniker range="tfs-2018"

:::image type="content" source="media/view-cached-packages.png" alt-text="A screenshot showing how to filter packages by source in TFS":::

::: moniker-end

## Related articles

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Upstream sources overview](../concepts/upstream-sources.md)