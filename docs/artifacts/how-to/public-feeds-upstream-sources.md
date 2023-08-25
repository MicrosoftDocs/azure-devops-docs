---
title: Enable and add upstream sources to a public feed
description: How to enable and add upstream sources to a public feed in Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 03/02/2023
monikerRange: '<= azure-devops'
---

# Use upstream sources in a public feed

Azure Artifacts enables developers to manage their dependencies from a single feed. Using upstream sources, you can consume packages from feeds and public registries such as NuGet.org, and npmjs.com. In this article, you'll learn how to:

> [!div class="checklist"]
>
> - Create a public feed 
> - Enable upstream sources
> - Add a new upstream source

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure DevOps project. [Create a new project](../../organizations/projects/create-project.md) if you don't have one already.

- Set your project visibility to [public](../../organizations/projects/make-project-public.md#2-make-a-private-project-public).

> [!IMPORTANT]
> Package lock files assist with reproducible builds and minimizing the scenarios where an anonymous user will be prompted for credentials when using public feeds.

## Create a public feed

A public feed is a project-scoped feed in a public project. Public feeds inherit the visibility settings of the hosting project.

1. Sign in to your Azure DevOps organization, and then select your public project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-devops.png" alt-text="A screenshot showing the create feed button in Azure Artifacts.":::

1. Give your feed a **Name**, and then select **Project: PublicProject (Recommended)** for its scope.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot showing how to create a new public feed.":::

1. Select **Create** when you're done.

## Add an upstream source

1. Sign in to your Azure DevOps organization, and then select your public project.

1. Select **Artifacts**, and then select your public feed.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="../media/public-feed-add-upstream.png" alt-text="A screenshot showing how to add an upstream source in a public feed.":::

1. Select your upstream source **Type**. In this example, we'll be adding NuGet.org as an upstream source.

    :::image type="content" source="../media/public-feed-upstream-types.png" alt-text="A screenshot showing the different types of upstream sources.":::

1. Configure your source, and then select **Save** when you're done.

    :::image type="content" source="../media/public-feed-configure-upstream.png" alt-text="A screenshot showing how to configure your upstream source.":::

1. Select **Save** to save your new upstream source.

    :::image type="content" source="../media/save-upstream.png" alt-text="A screenshot showing how to save the newly added upstream source.":::

> [!IMPORTANT]
> Public feeds do not support upstreaming to a private Artifacts feed. If you are using a public Azure Artifacts feed, you can only upstream to public registries (NuGet.org, npmjs) or other **Public** Azure Artifacts feeds.

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

The contents of a feed can only be changed by an authenticated and authorized identity who has appropriate permissions on the feed. This includes saving packages into the feed from an upstream source. Unauthenticated (anonymous) users can *download packages already saved* into a feed, but cannot save new packages from an upstream into the feed.
	
Maintainers of a project should save all needed versions of packages into the public feed. This can be done by restoring a project using an identity that *can* supply credentials to the feed when prompted, **and** ensuring that the identity used has **Collaborator** or higher permissions on the public feed.
	
If anonymous users who are restoring packages for a project are repeatedly being blocked by requests for credentials (401 response), the following approaches will reduce or eliminate the issue:
	
1. Avoid using package version ranges in your project configuration. Explicit package versions will ensure that packaging clients only request the exact version needed.
	
1. Where supported, utilize lock files for your packaging ecosystem so that the packaging clients only request the specific versions needed for the project during a restore/install operation.

#### Q: I'm trying to restore my packages using Visual Studio, but I'm noticing that they're getting pulled from a different source?

A: Make sure that Visual Studio is using the source referenced in your *nuget.config* file and not from the local NuGet package manager. See [Package sources](nuget/consume-packages/install-use-packages-visual-studio#package-sources) for more details. 

You can also use the NuGet CLI to force NuGet to use the source in your config file by running the following command:

```Command
nuget restore -config <PATH_TO_NUGET_CONFIG_FILE>
```

## Related articles

- [Search for packages in upstream sources](search-upstream.md)
- [Set up upstream sources](set-up-upstream-sources.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
