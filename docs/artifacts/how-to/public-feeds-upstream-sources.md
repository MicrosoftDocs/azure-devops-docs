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

1. Select **Artifacts**, then select your public feed from the dropdown menu.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open your **Feed Settings**.

1. Select **Upstream Sources**, then select **Add Upstream**.

1. Select the upstream source **Type**. In this example, you add *NuGet.org* as an upstream source, so select **Public source**.

1. Select the **NuGet Gallery** from the dropdown menu, then select **Add**. 

1. Select **Save** on the right to save your new upstream source.

> [!IMPORTANT]
> [Package lock files](https://devblogs.microsoft.com/nuget/enable-repeatable-package-restores-using-a-lock-file/) are required to save NuGet and Dotnet packages from upstream sources to a public feed.

## Restore packages

Run the following command in your project directory to restore your packages:

> [!NOTE]
> You must have **Feed and Upstream Reader (Collaborator)** or higher permissions to install new package versions from upstream sources. Anonymous users can only install packages that already exist in the feed.

#### [NuGet](#tab/nuget)

```
nuget.exe restore
```

#### [Dotnet](#tab/dotnet)

```
dotnet restore --interactive
```

#### [Npm](#tab/npm)

```
npm install
```

#### [Maven](#tab/maven)

```
mvn install
```

#### [Gradle](#tab/gradle)

```
gradle build
```

#### [Python](#tab/python)

```
pip install
```

#### [Cargo](#tab/cargo)

Users with the **Feed and Upstream Reader (Collaborator)** role or higher must include an additional flag to authenticate with their public feed when installing packages. If you haven’t authenticated yet, follow the steps in [Cargo - Connect to your feed](../cargo/cargo-upstream-source.md#connect-to-your-feed), then run the following command in your project directory to restore your packages: 

```
cargo build
```

- - -

## Q&A

#### Q: I'm trying to restore my packages but I keep getting a 401 unauthorized error. Why?

The contents of a feed can only be changed by an authenticated and authorized identity with the appropriate permissions. This includes saving packages from an upstream source.

- **Anonymous users** can download packages already saved in a feed, but cannot save new packages from upstream sources.
	
- **Project maintainers** should ensure all required package versions are saved in the public feed. This can be done by restoring the project using an identity that can provide credentials when prompted and has *Feed and Upstream Reader (Collaborator)* or higher permissions.
	
If anonymous users repeatedly encounter credential prompts (401 errors), try these approaches:
	
1. Avoid using package version ranges in your project configuration. Specify explicit package versions to ensure that clients only request the exact version required.
	
1. Use lock files (where supported) so package clients only request the exact versions needed during restore or install operations.

#### Q: I'm restoring packages in Visual Studio, but they're coming from a different source. Why?

A: Ensure Visual Studio uses the source specified in your nuget.config file, not the local NuGet package manager. See [Package sources](/nuget/consume-packages/install-use-packages-visual-studio#package-sources) for more details. 

You can also use the NuGet CLI to force NuGet to use the source in your config file by running the following command:

```Command
nuget restore -config <PATH_TO_NUGET_CONFIG_FILE>
```

## Related content

- [Search for packages in upstream sources](search-upstream.md)

- [Set up upstream sources](set-up-upstream-sources.md)

- [Configure upstream behavior](../concepts/upstream-behavior.md)
