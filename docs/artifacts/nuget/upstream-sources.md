---
title: Use packages from nuget.org
description: How to use packages from nuget.org with Azure Artifacts
ms.assetid: 301f954f-a35a-4fe2-b7fd-c78e534d9b16
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 09/16/2021
monikerRange: '>= tfs-2018'
"recommendations": "true"
---

# NuGet.org upstream source

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Enabling upstream sources on your feed allow you to publish and consume packages from your feed and public registries. Adding the nuget.org upstream allows you to consume NuGet packages from the public registry.

<a name="existing-feed"></a>

## Add a new upstream source

1. Select **Artifacts**, and then select your feed.

1. Select the ![gear icon](../../media/icons/gear-icon.png) button in the top right of the page to open **Feed settings**.

1. Select the **Upstream sources** tab.

    :::image type="content" source="../media/upstreams-settings.png" alt-text="Screenshot showing how to access feed settings.":::

1. Select **Add upstream source**.

    :::image type="content" source="../media/add-upstream.png" alt-text="Screenshot showing the add a new upstream source button.":::

1. Select **Public source**, and then fill out the required fields.

    :::image type="content" source="../media/add-new-upstream.png" alt-text="Screenshot showing how to add a new upstream source.":::

1. Select **Add** when you are done.

<a name="update-nuget-configuration"></a>

## Update nuget.config

1. Select **Artifacts**, and then select your feed. 

1. Select **Connect to feed**, and then choose **NuGet.exe**.

    :::image type="content" source="../media/nuget-connect-to-feed.png" alt-text="Screenshot showing how to connect to NuGet feeds.":::

1. Copy the XML snippet in the **Project Setup** section.

1. Create a new file named *nuget.config* in the root of your project.

1. Paste the XML snippet in your config file.

## View saved packages

You can view the packages you saved in your feed by selecting the appropriate **Source** filter.

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/view-cached-packages-newnav.png" alt-text="Screenshot showing how to filter upstream sources.":::

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2019"

:::image type="content" source="media/view-cached-packages.png" alt-text="Screenshot showing how to filter upstream sources - TFS.":::

::: moniker-end

## Related articles

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Upstream sources overview](../concepts/upstream-sources.md)