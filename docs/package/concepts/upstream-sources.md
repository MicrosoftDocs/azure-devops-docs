---
title: Upstream sources 
description: Upstream sources manage packages from public sources in a Visual Studio Team Services or Team Foundation Server feed
ms.assetid: 7cb70122-7c5b-46c1-b07e-1382cfc7d62b
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 2/1/2018
monikerRange: '>= tfs-2017'
---

 

# Upstream sources

**VSTS** | **TFS 2018** | **TFS 2017**

Check the ([availability note](../overview.md#versions-compatibility)) to ensure compatibility. 

Upstream sources enable you to use a single feed to store both the packages you produce and the packages you consume from "remote feeds": both public feeds (e.g. npmjs.com and nuget.org) and (in a future sprint) authenticated feeds (i.e. other VSTS feeds in your account or organization). Once you've enabled an upstream source, any user connected to your feed can install a package from the remote feed, and your feed will save a copy.

Already familiar with the concepts and want to jump right in? Start with these how-tos:

- [Use nuget.org as an upstream](../nuget/upstream-sources.md)
- [Use npmjs.com as an upstream](../npm/upstream-sources.md)

## Benefits of upstream sources

Upstream sources enable you to manage all of your product's dependencies in a single feed. We recommend publishing all of the packages for a given product to that product's feed, and managing that product's dependencies from remote feeds in the same feed, via upstream sources. This setup has a few benefits:

- **Simplicity:** your NuGet.config, .npmrc, or settings.xml contains exactly [one feed](#single-feed) (your feed).
- **Determinism:** your feed resolves package requests in [order](#search-order), so rebuilding the same codebase at the same commit or changeset uses the same set of packages
- **Provenance:** your feed knows the provenance of packages it saved via upstream sources, so you can verify that you're using the original package, not a custom or malicious copy published to your feed
- **Peace of mind:** packages used via upstream sources are guaranteed to be saved in the feed on first use; if the upstream source is disabled/removed, or the remote feed [goes down](#offline-upstreams) or deletes a package you depend on, you can continue to develop and build

## Best practices: feed consumers

To take full advantage of the benefits of upstream sources as a consumer of another feed, consider applying the following best practices to your project.

<a name="single-feed"></a>

### Use a single feed on the client

In order for your feed to provide [deterministic restore](#search-order), it's important to ensure that your package feed configuration file&mdash;your .npmrc or nuget.config&mdash;references only your Package Management feed with upstream sources enabled. For NuGet, the `<packageSources>` section should look like:

```xml
<packageSources>
  <clear />
  <add key="FabrikamFiber" value="https://fabrikam.pkgs.visualstudio.com/_packaging/FabrikamFiber/nuget/v3/index.json" />
</packageSources>
```

> [!NOTE]
>
> The `<clear />` tag is required because NuGet composes [several configuration files](https://docs.microsoft.com/en-us/nuget/consume-packages/configuring-nuget-behavior) to determine the full set of options to use. `<clear />` tells NuGet to ignore all other `<packageSources>` defined in higher-level configuration files.

For npm, you should have only one `registry` line, like:

```text
registry=https://fabrikam.pkgs.visualstudio.com/_packaging/FabrikamFiber/npm/registry/
always-auth=true
```

<a name="search-order"></a>

## Determining the package to use: search order

For package managers that support multiple feeds (like NuGet and Maven), the order in which feeds are consulted is sometimes unclear or non-deterministic (for example in NuGet, parallel requests are made to all feeds in the config file and the first response wins). Upstream sources prevent this non-determinism by searching the feed and its upstream sources using the following order:

1. Packages pushed to the feed
2. Packages saved via an upstream source
3. Packages available via upstream sources: each upstream is searched in the order it's listed in the feed's configuration

To take advantage of the determinism provided by upstream sources, you should ensure that your client's configuration file [only references your product feed](#single-feed), and not any other feeds like the public sources.

### Two feeds contain the same package-version: shadowing

Sometimes, two feeds can contain the same package-version. For instance, a user might push `Newtonsoft.Json@10.0.1` to your feed, and the same package already exists on nuget.org. When this happens, the shadowing rules apply.

Shadowing in upstream sources occurs at the package-version level. So, if a user pushes `Newtonsoft.Json@10.0.1` to the feed before the nuget.org upstream source is enabled, all subsequent requests for `Newtonsoft.Json@10.0.1` will receive the feed's copy of the package (regardless of whether the nuget.org upstream source is enabled or disabled or removed). Continuing the example, once the nuget.org upstream source is enabled, the first request for `Newtonsoft.Json@10.0.2` would retrieve that version from nuget.org via the upstream source. The feed will save a copy of version 10.0.2, and subsequent requests for `Newtonsoft.Json@10.0.2` would retrieve that saved copy.

If you're already using an upstream source and you need to push a package-version that already exists on one of your upstream sources, you must disable the upstream source, push your package, then re-enable the upstream source. Note that you can only push a package-version that wasn't previously saved from the upstream, because saved packages remain in the feed even if the upstream source is disabled or removed. Continuing the above example, pushing `Newtonsoft.Json 10.0.2` would not be possible, even if the nuget.org upstream source was disabled, because the feed already contains a saved copy of that package-version. See the [immutability doc](../feeds/immutability.md) for more info.

<a name="saved-packages"></a>

## Saving packages from upstream sources: continuity

When you enable an upstream source, packages installed from the upstream source via the feed will automatically be saved in the feed. These packages could be installed directly from the upstream (e.g. `npm install express`) or they could be installed as part of dependency resolution (e.g. the install of `express` would also save dependencies like `accepts`).

Saving can improve download performance and save network bandwidth, esp. for TFS servers located on internal networks.

<a name="upstream-metadata-cache"></a>

### Metadata cached from upstream sources

When you configure an upstream source and begin to query it through your feed, the feed will keep a cache of the metadata that you queried (most often, the package you asked for and its available versions) for 24 hours. This means that you may not be able to install a package that was published to the upstream source within the last 24 hours.

<a name="offline-upstreams"></a>

## Offline upstreams

Upstream sources protect you and your CI/CD infrastructure from outages in public sources. That protection works for both short and long outages.

For outages lasting less than 12 hours, you can continue to use the feed as normal thanks to the [metadata cache](#upstream-metadata-cache).

For outages lasting more than 12 hours, which are quite infrequent, you will experience issues listing and restoring packages, even if those packages have been installed into the feed. In these scenarios, you can disable either the offline upstream or all upstreams of the affected package type and continue developing and building as normal. If/when the upstream source returns, just re-enable it.

## Legacy upstream source information

Older Package Management feeds ("legacy feeds") use an older version of the npmjs.com upstream source and are also unable to use the nuget.org upstream source. 

You can check if your feed is using the legacy upstream sources feature by attempting to [add the nuget.org upstream source](../nuget/upstream-sources.md#existing-feed). If you're unable to do so, your feed is a legacy feed. You can also determine if your feed is a legacy feed using the criteria below:

- **TFS users:** all feeds created using TFS 2018 RTM and earlier are legacy feeds. 
- **VSTS users** who enabled the **nuget.org upstream source** preview feature: all feeds created before the preview feature was enabled are legacy feeds
- **VSTS users** who didn't enable the preview feature: all feeds created before the February update are legacy feeds

In a future sprint, you'll be able to upgrade legacy feeds to use the new upstream sources features.

### nuget.org upstream source

Legacy feeds are unable to use the nuget.org upstream source.

### Shadowing

In the legacy npmjs.com upstream source, when a feed with upstreams enabled receives a query (e.g. `npm install lodash`), it will first check for local packages with that package ID. If there is at least one local version of that package ID, the upstream source will not be used. So, for example, if you publish `lodash@1.0.0` and run `npm install lodash@2.0.0`, the request will fail, even if 2.0.0 exists on npmjs.com and upstream sources are enabled.

For the legacy upstream source, shadowing is permanent. So, in the example above, even if you later unpublish `lodash@1.0.0`, requests for any `lodash` version will only check the local feed. 

### Online requirement

When you run an `npm install` command, the feed will check to see if it has a cache of the package(s) requested by the `npm` client. If it does not, it will redirect the client to download the package from npmjs.com directly, and also cache the package in the background. The first client (where client is a developer machine or a build agent) to install a given npm package **will** need Internet access to successfully retrieve the package *or* they will have to run `npm install` twice. The first install will fail but cause the package to be cached; the second install will return the package from the cache.

If you host your own build agents, they do not need access to the Internet for this feature. However, per the limitation above, a developer machine will need to first run `npm install` to cache the package(s) so that they're available to the build agents.

For TFS users, the TFS server must be able to access the `https://registry.npmjs.org` domain in order to cache packages.
