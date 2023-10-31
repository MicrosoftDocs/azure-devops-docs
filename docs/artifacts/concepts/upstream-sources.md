---
title: Upstream sources overview
description: Understand Azure Artifacts upstream sources
ms.assetid: 7cb70122-7c5b-46c1-b07e-1382cfc7d62b
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/31/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Azure Artifacts Upstream Sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using upstream sources, you can conveniently store packages from various sources in a single feed. This includes packages you publish and those you consume from external feeds and public registries like NuGet.org, npmjs.com, Maven Central, and PyPI. Once you've enabled upstream sources, any package installed from these upstream sources, a copy will be automatically saved to your feed.

> [!NOTE]
> To save packages from upstream sources, you must be a **Collaborator** or higher. See [Permissions](../feeds/feed-permissions.mds#permissions-table) for more details.

## Advantages

Enabling upstream sources offers several advantages for managing your product's dependencies within a single feed:

- **Simplicity:** When you publish all your packages to a single feed, it simplifies your configuration files like NuGet.config, npmrc, or settings.xml. YWith just one feed in your config file, you reduce the chances of errors and bugs, streamlining your setup.

- **Determinism:** your feed resolves package requests in order, resulting in more consistency when rebuilding your code.

- **Provenance:** Your feed retains information about the packages it saved from upstream sources. This allows you to verify that you're using the original package and not a copy or a potentially malicious version.

- **Peace of mind:** Every package installed from upstream sources is automatically saved to your feed. This means that even if the upstream source is disabled, removed, or undergoing maintenance, you can continue developing and building with confidence because you have a copy of that package in your feed.

## Best practices - package consumers

To take full advantage of the benefits of upstream sources as a package consumer, follow these best practices:

1. **Use a single feed in your config file**:

In order for your feed to provide a [deterministic restore](#search-order), make sure that your configuration file such as nuget.config or .npmrc references only one feed with the upstream sources enabled. See the example below:

```nuget.config
<packageSources>
  <clear />
  <add key="FabrikamFiber" value="https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/nuget/v3/index.json" />
</packageSources>
```

> [!NOTE]
> NuGet compiles several [configuration files](/nuget/consume-packages/configuring-nuget-behavior) to determine the complete set of options to apply. By using `<clear />`, you can effectively ignore all other package sources specified in higher-level configuration files.

```.npmrc
registry=https://pkgs.dev.azure.com/fabrikam/_packaging/FabrikamFiber/npm/registry/
always-auth=true
```

2. **Order your upstream sources intentionally**:

If you're exclusively using public registries like nuget.org or npmjs.com, the order of your upstream sources is irrelevant. Requests to the feed follow the sequence detailed in the [search order](#search-order) section.

However, when you're managing multiple sources, which may include a combination of feeds and public registries, each upstream source is searched in the order it's listed in the feed's configuration settings. In this case, we recommend placing the public registries first in the list of upstream sources.

In some unique scenarios, certain organizations choose to customize open-source software (OSS) packages. This could involve addressing security concerns, enhancing functionality, or meeting specific requirements that necessitate internally rebuilding the package rather than directly obtaining it from a public repository. 
If your organization follows this practice, it's advisable to position the upstream source containing these modified OSS packages ahead of the public package managers. This arrangement ensures the use of your organization's customized versions.

3. **Use the suggested default view**:

When you add a remote feed as an upstream source, you must select its feed's view. This enables the upstream sources to construct a set of available packages. See [How upstreams construct the set of available packages](package-graph.md#how-upstreams-construct-the-set-of-available-packages) for more details.

## Best practices: feed owners/package publishers

To make sure your feed is easily configured as an upstream source, consider applying the following best practices:

1. **Use the default view**:

The default view for all newly created feeds is the `@local` view, which contains all the packages published to your feed or saved from upstream sources.

If you want to use other views such as a view for newly released package versions, you can promote your package to the `@release` view and then make that view available for your package consumers.

2. **Construct a package graph**:

To construct a package graph, simply connect to the feed's default view and install the package you wish to share. When the package is saved to the default view, users who want to consume it will be able to resolve the package graph and install the desired package. Packages from upstream sources are displayed based on the configured view for the corresponding upstream source.

## Search order

For public package managers that support multiple feeds like NuGet and Maven, the order in which feeds are queried can sometimes be unclear or non-deterministic. For example, in NuGet, parallel queries are sent to all the feeds in the configuration file, and the responses are processed in a first-in, first-out (FIFO) manner.

Upstream sources address this non-deterministic behavior by searching the feed and its upstream sources in the following order:

1. Packages that have been published directly to the feed.

1. Packages that have been saved from an upstream source.

1. Packages available from upstream sources. Each upstream source is searched in the order it's listed in the feed's configuration.

To take full advantage of the fast lookup feature, we recommend that you include only one feed in your configuration file.

> [!NOTE]
> Searching for packages in upstream sources using the NuGet Package Explorer is not supported.

## Save packages from upstream sources

When you enable upstream sources for your feed, packages installed from upstream sources will be automatically saved to your feed. These packages could be installed directly from the upstream as follows `npm install express` or they could be installed as part of a dependency resolution (installing `express` would also save dependencies like `accepts`).

Saving packages can improve download performance and save network bandwidth especially for TFS servers in internal networks.

::: moniker range="azure-devops"

> [!NOTE]
> Custom upstream sources are only supported for npm packages.

::: moniker-end

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
