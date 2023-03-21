---
title: Upstream sources overview
description: Understand upstream sources
ms.assetid: 7cb70122-7c5b-46c1-b07e-1382cfc7d62b
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/16/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Upstream sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using upstream sources, you can conveniently store packages from various sources in a single feed - including those that you publish, as well as those you consume from other feeds and public registries such as NuGet.org, npmjs.com, Maven Central, and PyPI. Once upstream sources enabled, a copy of any package installed from upstream will be automatically saved to your feed

> [!NOTE]
> You must be a **Collaborator** or higher to install packages from upstream sources.

::: moniker range="azure-devops"

> [!NOTE]
> Custom upstream sources are only supported for npm packages.

::: moniker-end

## Advantages

Upstream sources enable you to manage all of your product's dependencies in a single feed. Publishing all your packages to a single feed has a few benefits:

- **Simplicity:** your config file such as NuGet.config, npmrc, or settings.xml will contain only one feed so it less prone to mistakes and bugs.
- **Determinism:** your feed resolves package requests in order, so rebuilding your code will be more consistent.
- **Provenance:** your feed knows the provenance of the packages it saved from upstream sources, so you can verify that you're using the original package and not a copy or malicious package.
- **Peace of mind:** a copy will be saved to your feed for any package installed from upstream sources. So if the upstream source is disabled, removed, or undergoing maintenance, you can still continue to develop and build because you have a copy of that package in your feed.

## Best practices - package consumers

To take full advantage of the benefits of upstream sources as a package consumer, follow these best practices:

#### Use a single feed in your config file

In order for your feed to provide [deterministic restore](#search-order), it's important to ensure that your configuration file such as nuget.config or .npmrc references only one feed with the upstream sources enabled.

Example:

- **nuget.config**

    ```
    <packageSources>
      <clear />
      <add key="FabrikamFiber" value="https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/nuget/v3/index.json" />
    </packageSources>
    ```

    > [!NOTE]
    > NuGet composes several [config files](/nuget/consume-packages/configuring-nuget-behavior) to determine the full set of options to use. Using `<clear />` allow us to ignore all other package sources defined in higher-level configuration files.

- **.npmrc**:

    ```
    registry=https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/npm/registry/
    always-auth=true
    ```

#### Order your upstream sources intentionally

If you're only using public registries such as nuget.org or npmjs.com, the order of your upstream sources is irrelevant. Requests to the feed will follow the [search order](#search-order).

If you're using multiple sources such as a mixture of feeds and public registries, then each upstream is searched in the order it's listed in the feed's configuration settings. In this case, we recommend placing the public registries first in the list of upstream sources.

In rare cases, some organizations choose to modify OSS packages to fix security issues, to add functionality, or to satisfy requirements that the package is built from scratch internally, rather than consumed directly from the public repository.
If your organization follows this pattern, place the upstream source that contains these modified OSS packages before the public package managers to ensure you use your organization's modified versions.

#### Use the suggested default view

When you add a remote feed as an upstream source, you must select its feed's view. This enables the upstream sources to construct a set of available packages. See [complete package graphs](package-graph.md) for more details. 

## Best practices: feed owners/package publishers

To make sure your feed is easily configured as an upstream source, consider applying the following best practices:

#### Use the default view

The `@local` view is the default view for all newly created feeds. It contains all the packages published to your feed or saved from upstream sources.

If you want to use views to release new package versions, you can promote your package to a view such as `@release` and make it available to your consumers.

#### Construct a package graph

To construct a package graph, simply connect to the feed's default view and install the package you wish to share. When the package is installed correctly in the default view, users who want to consume it will be able to resolve the package graph and install the desired package. Packages from upstream sources are displayed based on the configured view for the corresponding upstream source.

## Search order

For public package managers that support multiple feeds (NuGet and Maven), the order in which feeds are queried is sometimes unclear or non-deterministic. For example in NuGet, parallel queries are made to all the feeds in the config file, and the responses are processed first-In, first-out FIFO.

Upstream sources prevent this non-deterministic behavior by searching the feed and its upstream sources using the following order:

1. Packages pushed to the feed.

1. Packages saved from an upstream source.

1. Packages available from upstream sources: each upstream is searched in the order it's listed in the feed's configuration

To take full advantage of the fast lookup feature, we recommend that you only include one feed in your config file.

> [!NOTE]
> Searching for packages in upstreams with NuGet Package Explorer is not supported.

## Save packages from upstream sources

When you enable upstream sources for your feed, packages installed from upstream sources will be automatically saved to your feed. These packages could be installed directly from the upstream as follows `npm install express` or they could be installed as part of a dependency resolution (installing `express` would also save dependencies like `accepts`).

Saving packages can improve download performance and save network bandwidth especially for TFS servers in internal networks.

## Override packages from upstream sources

When you enable upstream sources, you must be aware that publishing a package version that already exists in upstream will not be possible. For instance, when you enable the NuGet.org upstream, you won't be able to publish the `Newtonsoft.Json 10.0.3` package because that same package version is already present in NuGet.org.

If you must publish a package version that already exists on one of your upstream sources, you must disable that upstream source, publish your package, and then re-enable the upstream source.

> [!Note]
> Package versions are immutable. Saved packages remain in the feed even if the upstream source is disabled or removed.

## Health status

If a feed has a failing upstream source, the metadata can no longer be refreshed for packages of the same protocol. To view your upstream source's health status, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed settings**, and then select **Upstream sources**.

:::image type="content" source="media/upstreams-last-sync.png" alt-text="A screenshot showing the upstream source failure status.":::

If there are any failures, a warning message will be displayed. Selecting the failed status provides more details such as the reason of failure and instructions on how to solve it.

:::image type="content" source="media/upstream-last-sync-details.png" alt-text="A screenshot showing details about the sync up failure.":::

> [!NOTE]
> For public registries such as NuGet.org, there is a 3-6 hour delay between when a package is pushed to the public registry and when it is available for download. This delay depends on job timing and data propagation. When the upstream source is an Azure Artifacts feed, the latency is typically no more than a few minutes.

## Offline upstream sources

Upstream sources are a great way to protect your consumers and infrastructure from unplanned outages. When you install a package from an upstream source, a copy of that package is saved to your feed. If the upstream source is down, undergoing maintenance, or not available, you can still access the packages you need from your feed.

## FAQs

##### Q: I can't find my package even though I can see it in one of my feed's upstreams?

A: Packages belonging to an upstream are available downstream soon after they are published. However the package will only show up in your feed's UI once it's ingested, which requires installing the package version for the first time in the downstream feed.

##### Q: What are feed views?

A: Views enable developers to only share a subset of package versions that have been tested and validated and excluding any packages that are still under development and/or did not meet the quality bar. See [What are feed views](./views.md) for more details.

##### Q: I can't find the feed that I want to configure as an upstream source?

A: Make sure that the feed's owner is sharing a view as an upstream source.

##### Q: Can a user with **Reader** role download packages from an upstream source?
A: No. A user with **Reader** role in an Azure Artifacts feed can only download packages that have been saved to the feed. Packages are saved to the feed when a **Collaborator**, a **Contributor**, or an **Owner** install those packages from upstream.

##### Q: What happens when a user deletes or unpublishes a package saved from an upstream source?
A: The package will not be available for download from the feed and the version number gets reserved permanently. The package also will no longer be saved from the upstream source. Earlier and later versions of the package will not be affected.

##### Q: What happens when a user deprecates a package saved from an upstream source?
A: A warning message gets added to the package's metadata and displayed whenever the package is viewed or installed from the feed.

## Related articles

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Manage dependencies](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Configure upstream behavior](./upstream-behavior.md)
- [Feed permissions](../feeds/feed-permissions.md)
- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
