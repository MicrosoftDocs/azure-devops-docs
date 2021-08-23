---
title: Upstream sources 
description: Upstream sources concepts
ms.assetid: 7cb70122-7c5b-46c1-b07e-1382cfc7d62b
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 08/20/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Upstream sources

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Upstream sources enable you to use a single feed to store packages from different sources: the ones you publish and the ones you consume from feeds and public registries such as NuGet.org, npmjs.com, Maven Central, and PyPI. Once you enable an upstream source, any user connected to your feed can install a package from upstream and a copy will be saved to your feed.

::: moniker range="azure-devops"

> [!NOTE]
> Custom upstream sources are currently only supported for npm.

::: moniker-end

## Advantages

Upstream sources enable you to manage all of your product's dependencies in a single feed. Publishing all your packages to a single feed has a few benefits:

- **Simplicity:** your config file such as NuGet.config, .npmrc, or settings.xml will contain only one feed so it less prone to mistakes and bugs.
- **Determinism:** your feed resolves package requests in order, so rebuilding your code will be more consistent.
- **Provenance:** your feed knows the provenance of the packages it saved from upstream sources, so you can verify that you're using the original package and not a copy or malicious package.
- **Peace of mind:** a copy will be saved to your feed for any package installed from upstream sources. So if the upstream source is disabled, removed, or undergoing maintenance, you can still continue to develop and build because you have a copy of that package in your feed.

## Best practices - package consumers

To take full advantage of the benefits of upstream sources as a package consumer, follow these best practices:

<a name="single-feed"></a>

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
> The `<clear />` tag is required because NuGet composes [several configuration files](/nuget/consume-packages/configuring-nuget-behavior) to determine the full set of options to use. `<clear />` tells NuGet to ignore all other `<packageSources>` defined in higher-level configuration files.

- **.npmrc**:

    ```
    registry=https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/npm/registry/
    always-auth=true
    ```

#### Order your upstream sources intentionally

If you're only using public registries such as nuget.org or npmjs.com, the order of your upstream sources is irrelevant. Requests to the feed will follow the [search order](#search-order).

If you are using multiple sources such as a mixture of feeds and public registries, then each upstream is searched in the order it's listed in the feed's configuration settings. In this case, we recommend placing the public registries first in the list of upstream sources.

In rare cases, some organizations choose to modify OSS packages to fix security issues, to add functionality, or to satisfy requirements that the package is built from scratch internally, rather than consumed directly from the public repository.
If your organization does this, place the upstream source that contains these modified OSS packages before the public package managers to ensure you use your organization's modified versions.

#### Use the suggested default view

When you add a remote feed as an upstream source, you must select its feed's view. This enables the upstream sources to construct a set of available packages. See [complete package graphs](package-graph.md) for more details. 

## Best practices: feed owners/package publishers

To make sure your feed is easily configured as an upstream source, consider applying the following best practices:

<a name="local"></a>

#### Use the default view

The `@local` view is the default view for all newly created feeds. It contains all the packages published to your feed or saved from upstream sources.

If you want to use views to release new package versions, you can promote your package to a view such as `@release` and make it available to your consumers.

#### Construct a package graph

When a feed query its upstream source for a package, Azure Artifacts return the packages in the view that was configured for that specific upstream source. To construct a package graph, simply connect to the feed's default view and install the package you wish to share. When the package is installed correctly in the default view, users who want to consume it will be able to resolve the package graph and install the desired package.

<a name="search-order"></a>

## Search order

For public package managers that support multiple feeds (NuGet and Maven), the order in which feeds are queried is sometimes unclear or non-deterministic. For example in NuGet, parallel queries are made to all the feeds in the config file, and the responses are processed first-In, first-out FIFO.

Upstream sources prevent this non-deterministic behavior by searching the feed and its upstream sources using the following order:

1. Packages pushed to the feed.

1. Packages saved from an upstream source.

1. Packages available from upstream sources: each upstream is searched in the order it's listed in the feed's configuration

To take full advantage of the fast lookup feature, we recommend that you only include one feed in your config file.

<a name="saved-packages"></a>

## Save packages from upstream sources: continuity

When you enable upstream sources for your feed, packages installed from upstream sources will be automatically saved to your feed. These packages could be installed directly from the upstream as follows `npm install express` or they could be installed as part of a dependency resolution (installing `express` would also save dependencies like `accepts`).

Saving packages can improve download performance and save network bandwidth especially for TFS servers in internal networks.

<a name="overriding-packages"></a>

## Overriding a package from an upstream source

You can't publish any package-version that already exists in any upstream source enabled on your feed. For instance, if the nuget.org upstream source is enabled you cannot publish `Newtonsoft.Json 10.0.3` because that same package-version is already present on nuget.org.

If you must push a package-version that already exists on one of your upstream sources, you must disable the upstream source, push your package, then re-enable the upstream source. Note that you can only push a package-version that wasn't previously saved from the upstream, because saved packages remain in the feed even if the upstream source is disabled or removed. See the [immutability concept](../artifacts-key-concepts.md#immutability) for more info.

<a name="upstream-health-status"></a>

## Upstream sources health status

If a feed has a failing upstream source, the metadata can no longer be refreshed for packages of the same protocol. To view your upstream sources health status, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed settings**, then select **Upstream sources**. 

If there are any failures, a warning message will be displayed. The settings page will also indicate which one of the upstream sources is failing. Selecting the failing source will provide more details on the reason of failure and instructions on how to solve it.

> [!div class="mx-imgBorder"]
> ![Upstream health](media/upstream-health.png)

<a name="offline-upstreams"></a>

> [!NOTE]
> For feeds that have public package respositories such as nuget.org as upstream sources, there is a 3-6 hour delay between when a package is pushed to the public repository and when it is available for download by your feed. This delay depends on job timing and package data propagation. The delay doesn't apply when the upstream sources are Azure DevOps feeds.

## Offline upstream sources

Upstream sources are a great way to protect your CI/CD infrastructure from public package managers outages. When a package is ingested in the downstream feed, a copy of the package is created, so even when the upstream feed is not available, the package is still available in the downstream feed.

## FAQs

### Q: I can't see my package even though I can see it in one of my feed's upstreams?

A: Packages belonging to an upstream are available downstream soon after they are published, but will only show up in the feed's UI once they have been 'ingested,' which requires installing the package version for the first time in the downstream feed.

### Q: What are feed views?

A: Views enable developers to only share a subset of package versions that have been tested and validated and excluding any packages that are still under development and/or didn't meet the quality bar. See [What are feed views](./views.md) for more details.

### Q: I can't find the feed that I want to configure as an upstream?

A: It could be that the feed's owner has not shared a view to be available as an upstream source.

## Related articles

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Manage feed permissions](..//feeds/feed-permissions.md)
