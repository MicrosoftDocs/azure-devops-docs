---
title: Enable and add upstream sources to a public feed
description: How to enable and add upstream sources to a public feed in Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 03/02/2023
monikerRange: '<= azure-devops'
---

# Use upstream sources in a public feed

Azure Artifacts enables developers to manage their dependencies from a single feed. Using upstream sources, you can consume packages from feeds and public registries such as NuGet.org, and npmjs.com. Packages saved from upstream sources are scanned for vulnerabilities to ensure that they're safe and comply with security policies. If a vulnerability is found, the package is flagged as "vulnerable", and a notification is sent to the feed owner(s).  

In this article, you'll learn how to:

> [!div class="checklist"]
>
> - Create a public feed 
> - Enable upstream sources
> - Add a new upstream source

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure DevOps project. [Create a new project](../../organizations/projects/create-project.md) if you don't have one already.

> [!IMPORTANT]
> Package lock files are required to ensure reproducible builds and eliminate the risk of version conflicts and compatibility issues.

## Create a public feed

A public feed is a project-scoped feed in a public project. Public feeds inherit the visibility settings of the hosting project.

1. Sign in to your Azure DevOps organization, and then select your project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-devops.png" alt-text="A screenshot showing the create feed button in Azure Artifacts.":::

1. Give your feed a **Name**, and then select **Project: PublicProject (Recommended)** for its scope.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot showing how to create a new public feed.":::

1. Select **Create** when you're done.

> [!NOTE]
> Upstream sources are enabled by default when you create a new public feed.

## Add an upstream source

1. Sign in to your Azure DevOps organization, and then select your project.

1. Select **Artifacts**, and then select your feed.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="../media/public-feed-add-upstream.png" alt-text="A screenshot showing how to add an upstream source in a public feed.":::

1. Select your upstream source **Type**. In this example, we'll be adding NuGet.org as an upstream source.

    :::image type="content" source="../media/public-feed-upstream-types.png" alt-text="A screenshot showing the different types of upstream sources.":::

1. Configure your source, and then select **Save** when you're done.

    :::image type="content" source="../media/public-feed-configure-upstream.png" alt-text="A screenshot showing how to configure your upstream source.":::

> [!IMPORTANT]
> Public feeds does not support upstreaming to a private Artifacts feed. If you are using a public Azure Artifacts feed, you can only upstream to public registries (NuGet.org, npmjs) or other **Public** Azure Artifacts feeds.

## Restore packages

Run the following command in an elevated command prompt:

#### [NuGet](#tab/nuget)

```Command
nuget.exe restore
```

#### [Dotnet](#tab/dotnet)

```Command
dotnet restore --interactive
```

#### [Npm](#tab/npm)

```Command
npm install
```

#### [Maven](#tab/maven)

```Command
mvn install
```

#### [Gradle](#tab/gradle)

```Command
gradle build
```

#### [Python](#tab/python)

```Command
pip install
```

- - -

> [!NOTE]
> You must be a **Collaborator** or higher to install new package versions from upstream. Anonymous users can only install packages that exist in their feed.

## Q&A

#### Q: I'm trying to restore my packages but I keep getting a 401 unauthorized error?

A: This error typically occurs when:

1. An anonymous user querying a package version: make sure you add a package-lock.json file to your project to generate the dependency tree and lock down the versions of your dependencies. 

Or

2. An anonymous user attempting to download a package version that doesn't exist in the feed: make sure the version you're trying to install exists in your feed. If the package is still in upstream, have someone in your team with **Collaborator** or higher permissions build your project to save the latest packages to your feed. 

#### Q: I'm trying to restore my packages using Visual Studio, but I'm noticing that they're getting pulled from a different source?

A: Make sure that Visual Studio is using the source referenced in your *nuget.config* file and not from the local NuGet package manager. You can force NuGet to use the source in your config file by running the following command:

```Command
nuget restore -config <PATH_TO_NUGET_CONFIG_FILE>
```

## Related articles

- [Search for packages in upstream sources](search-upstream.md)
- [Set up upstream sources](set-up-upstream-sources.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
