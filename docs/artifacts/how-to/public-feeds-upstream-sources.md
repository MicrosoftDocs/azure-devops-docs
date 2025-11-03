---
title: Use upstream sources in a public feed
description: Learn how to enable and add upstream sources to a public feed in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 10/31/2025
monikerRange: 'azure-devops'
---

# Use upstream sources in a public feed

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts helps you to manage all your dependencies from a single feed. By setting up upstream sources, you can consume packages from feeds and public registries such as *NuGet.org*, and *npmjs.com*. This article walks you through setting up upstream sources in a public feed and restoring your packages.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Set your project visibility to [public](../../organizations/projects/make-project-public.md). |

## Create a public feed

A public feed is a project-scoped feed in a public project. Public feeds inherit the visibility settings of the hosting project. If you already have a public feed you can skip to the next section, otherwise create one as follows:

1. Sign in to Azure DevOps, then navigate to your public project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed, then choose *Project: <YourProjectName> (Recommended)* as the **Scope**.

1. Select **Create** when you're done.
    
    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot displaying how to create a new public feed in Azure Artifacts.":::

> [!IMPORTANT]
> Public feeds do not support upstreaming to private Artifacts feeds. You can only upstream to public registries or other **Public** Azure Artifacts feeds.

## Add an upstream source

Now that your public feed is set up, you can start adding upstream sources. For public feeds, you can only configure public registries or other public Azure Artifacts feeds as upstream sources. Follow these steps to add an upstream source:

1. Sign in to Azure DevOps, then navigate to your public project.

1. Select **Artifacts**, select your public feed from the dropdown menu.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open your **Feed Settings**.

1. Select **Upstream Sources**, then select **Add Upstream**.

1. Select your upstream source **Type**. In this example, you'll be adding *NuGet.org* as an upstream source. Select **Public source** for the type.

    :::image type="content" source="../media/public-feed-upstream-types.png" alt-text="A screenshot showing the different types of upstream sources.":::

1. Configure your source, and then select **Add** when you're done.

    :::image type="content" source="../media/public-feed-configure-upstream.png" alt-text="A screenshot showing how to configure your upstream source.":::

1. Select **Save** to save your new upstream source.

    :::image type="content" source="../media/save-upstream.png" alt-text="A screenshot showing how to save the newly added upstream source.":::

> [!IMPORTANT]
> [Package lock files](https://devblogs.microsoft.com/nuget/enable-repeatable-package-restores-using-a-lock-file/) are required to save NuGet and Dotnet packages from upstream sources to a public feed.

## Restore packages

Run the following command in your project directory to restore your packages:

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

#### [Cargo](#tab/cargo)

Feed and Upstream Reader (Collaborator) roles or higher must use an additional flag to authenticate with their public feed in order to install packages. Be sure to follow the instructions in [Cargo - Connect to a feed](../cargo/cargo-upstream-source.md#connect-to-your-feed) to properly authenticate with your feed, and then run the following command in your project directory to restore your packages. 

```Command
cargo build
```

- - -

> [!NOTE]
> You must be a **Feed and Upstream Reader (Collaborator)** or higher to install new package versions from upstream. Anonymous users can only install packages that exist in their feed.

## Q&A

#### Q: I'm trying to restore my packages but I keep getting a 401 unauthorized error?

The contents of a feed can only be changed by an authenticated and authorized identity who has appropriate permissions on the feed. This includes saving packages into the feed from an upstream source. Unauthenticated (anonymous) users can *download packages already saved* into a feed, but cannot save new packages from an upstream into the feed.
	
Maintainers of a project should save all needed versions of packages into the public feed. This can be done by restoring a project using an identity that *can* supply credentials to the feed when prompted, **and** ensuring that the identity used has **Feed and Upstream Reader (Collaborator)** or higher permissions on the public feed.
	
If anonymous users who are restoring packages for a project are repeatedly being blocked by requests for credentials (401 response), the following approaches will reduce or eliminate the issue:
	
1. Avoid using package version ranges in your project configuration. Explicit package versions will ensure that packaging clients only request the exact version needed.
	
1. Where supported, utilize lock files for your packaging ecosystem so that the packaging clients only request the specific versions needed for the project during a restore/install operation.

#### Q: I'm trying to restore my packages using Visual Studio, but I'm noticing that they're getting pulled from a different source?

A: Make sure that Visual Studio is using the source referenced in your *nuget.config* file and not from the local NuGet package manager. See [Package sources](/nuget/consume-packages/install-use-packages-visual-studio#package-sources) for more details. 

You can also use the NuGet CLI to force NuGet to use the source in your config file by running the following command:

```Command
nuget restore -config <PATH_TO_NUGET_CONFIG_FILE>
```

## Related content

- [Search for packages in upstream sources](search-upstream.md)
- [Set up upstream sources](set-up-upstream-sources.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
