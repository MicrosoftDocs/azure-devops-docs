---
title: What are upstream sources?
description: Learn what is Azure Artifacts upstream sources, their benefits for package management, and recommended best practices.
ms.assetid: 7cb70122-7c5b-46c1-b07e-1382cfc7d62b
ms.service: azure-devops-artifacts
ms.topic: overview
ms.date: 09/11/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# What are upstream sources?

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts upstream sources allow developers to store packages from various origins in a single feed, including packages published to the feed and those installed from public registries like *NuGet.org* or *npmjs.com*. Once upstream sources are enabled, any package installed from an upstream source is automatically saved to your feed.

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## Why use upstream sources?

Enabling upstream sources offers several advantages for managing your product’s dependencies within a single feed:

- **Simplicity**: Storing all your packages in a single feed simplifies your configuration files like *NuGet.config*, *npmrc*, or *settings.xml*. With just one feed in your config file, you reduce setup complexity and minimize errors.

- **Consistent Builds**: Your feed resolves package requests in a defined order, helping ensure predictable and reliable builds across environments.

- **Package Integrity**: Your feed retains metadata about packages saved from upstream sources, allowing you to verify their authenticity and ensure you're using the original versions, not copies or potentially malicious versions.

- **Reliability**: Packages installed from upstream sources are automatically saved to your feed. This ensures continued access even if the upstream source becomes temporarily unavailable due to maintenance or other issues so you can continue developing and building with confidence.

## Best practices for package consumers

To take full advantage of the benefits of upstream sources as a package consumer, follow these best practices:

#### Use a single feed in your configuration file

In order for your feed to provide a [deterministic restore](#search-order), make sure that your configuration file (such as *nuget.config* or *npmrc*) references **only one feed** with upstream sources enabled. 

- **Examples**:

    ```.npmrc
    registry=https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/npm/registry/
    always-auth=true
    ```

    ```nuget.config
    <packageSources>
      <clear />
      <add key="FabrikamFiber" value="https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/nuget/v3/index.json" />
    </packageSources>
    ```

    > [!NOTE]
    > NuGet compiles several [configuration files](/nuget/consume-packages/configuring-nuget-behavior) to determine the complete set of options to apply. Using `<clear />` ensures that all other package sources specified in higher-level configuration files are ignored.

#### Order your upstream sources intentionally

If you're using only public registries like *NuGet.org* or *npmjs.com*, the order of upstream sources doesn’t affect behavior. Requests to the feed follow the sequence outlined in the [search order](#search-order) section.

However, when managing multiple sources, such as a combination of feeds and public registries, each upstream source is searched in the order defined in the feed’s configuration settings. In these cases, we recommend placing the public registries first in the list of upstream sources.

In some unique scenarios, some organizations modify open-source software (OSS) packages to address security concerns, enhance functionality, or meet specific internal requirements that require rebuilding the package internally rather than obtaining it directly from a public repository. 
If your organization follows this practice, place the upstream source containing these customized OSS packages before other public registries. This ensures your customized versions are used instead of the public ones.

## Best practices for feed owners and package publishers

To ensure your feed can be easily configured as an upstream source, follow these best practices:

#### Use the default view

All newly created feeds use the `@Local` view by default. This view includes:

- Packages published directly to the feed.
- Packages saved from upstream sources.

If you want to use other views such as a view for newly released package versions, you can promote your packages to the `@Release` view and then make that view available to your target consumers. See [Feed views](views.md) for more details.

#### Construct a package graph

To construct a package graph, simply connect to the feed's default view and install the package you want to share. Once a package is saved to the default view, users who want to consume it will be able to resolve the package graph and install the desired version. Packages from upstream sources are displayed based on the configured view for the corresponding upstream source. See [How upstreams construct the set of available packages](package-graph.md#how-upstreams-construct-the-set-of-available-packages) for more details.

## Search order

For public package managers that support multiple feeds, such as NuGet and Maven, the order in which feeds are queried can sometimes be unclear or nondeterministic. For example, NuGet sends parallel queries to all the feeds in the configuration file and processes responses in a first-in, first-out (FIFO) manner, which can lead to inconsistent results.

Azure Artifacts upstream sources eliminate this uncertainty by enforcing a structured search order, by searching the feed and its upstream sources in the following order:

1. Packages that have been published directly to the feed.

1. Packages that have been saved from an upstream source.

1. Packages available from upstream sources. Each upstream source is searched in the order it's listed in the feed's configuration.

> [!NOTE]
> Azure Artifacts does not support searching for packages in upstream sources using the **NuGet Package Explorer** in Visual Studio.

## Save packages from upstream sources

When an upstream source is enabled on your feed, Azure Artifacts automatically saves a copy of any package installed by a collaborator or higher from that upstream source.

For example, you can install packages directly from the upstream source using a command like *npm install express*. Alternatively, packages might be installed as part of dependency resolution, so installing *express* would also save its dependencies, such as *accepts*.

Upstream sources offer a critical safeguard for your consumers and infrastructure. If the public registry experiences downtime, maintenance, or becomes temporarily unavailable, you can still retrieve the necessary packages from your feed and continue your development.

::: moniker range="azure-devops"

> [!NOTE]
> Custom upstream sources are only supported for npm packages.

::: moniker-end

## Override packages from upstream sources

When upstream sources are enabled in your feed, you **cannot publish a package version that already exists** in one of those upstream sources. For example, if the *NuGet.org* upstream is enabled, you won’t be able to publish *Newtonsoft.Json 10.0.3* to your feed, since that version is already available on *NuGet.org*.

To override a package version from an upstream source:

1. Disable the relevant upstream source.

1. Publish your desired package version to the feed.

1. Re-enable the upstream source.

This workflow ensures you can publish the desired version while maintaining the integrity of your upstream sources.

> [!NOTE]
> Package versions are immutable. Saved packages remain in the feed even if the upstream source is disabled or removed.

## Upstream sources health status

If a feed has a failing upstream source, metadata for packages using the same protocol can no longer be refreshed. To check the health status of your upstream sources, follow these steps:

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open **Feed settings**, then select **Upstream sources**.

    :::image type="content" source="media/last-sync-upstreams.png" alt-text="A screenshot showing the upstream sources last sync up status.":::

1. If any failures occur, a warning message will be displayed. Select the *Failed* status to view detailed information, including the cause of the failure and steps to resolve it.

    :::image type="content" source="media/last-sync-upstreams-details.png" alt-text="A screenshot displaying details of the sync up failure.":::

> [!NOTE]
> For public registries like *NuGet.org*, there is typically a 3-6 hour delay between when a package is pushed to the public registry and when it becomes available for download. This delay depends on job timing and data propagation. However, when the upstream source is an Azure Artifacts feed, the latency is usually no more than a few minutes.

## Related content

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)

- [Use upstream sources in a public feed](../how-to/public-feeds-upstream-sources.md)

- [Manage permissions](../feeds/feed-permissions.md)
