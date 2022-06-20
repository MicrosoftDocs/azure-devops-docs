---
title: Share Packages publicly with public feeds
description: Use Azure Artifacts public feeds to share NuGet, npm, Maven, and Python packages publicly
ms.technology: devops-artifacts
ms.date: 06/20/2022
monikerRange: 'azure-devops'
---

# Share packages publicly

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts provides an easy way to share packages to users outside your organization and even external customers using public feeds. Packages that are stored in public feeds can be restored and installed by anyone on the Internet.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.
- A public project. [Create a public project](../../organizations/public/create-public-project.md) if you don't have one already.

## Create a public feed

Public feeds are project-scoped feeds in a public project. Public feeds inherit the visibility settings of the hosting project.

1. Navigate to your project, and then select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="A screenshot showing how to access Artifacts from the Azure DevOps dashboard.":::

1. Select **Create Feed**.

    :::image type="content" source="../media/new-feed-devops.png" alt-text="A screenshot showing how to create a new feed.":::

1. Give your feed a **Name**, and then select **Project: PublicProject (Recommended)** for its scope.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot showing how to create a new public feed.":::

1. Select **Create** when you are done.

> [!NOTE]
> Organization-scoped feeds cannot be converted into project-scoped feeds.

## Publish packages

> [!IMPORTANT]
> Universal Packages are not supported in public feeds.

If you want to publish NuGet packages using the dotnet or nuget CLI, make sure you have the latest [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

### Publish packages using the command line

- [NuGet](../get-started-nuget.md)
- [Npm](../get-started-npm.md)
- [Maven](../get-started-maven.md)
- [Publish Maven packages with Gradle](../maven/publish-package-gradle.md)
- [Python](../quickstarts/python-packages.md)
- [Universal Packages](../quickstarts/universal-packages.md)

### Publish packages using Azure Pipelines

- [NuGet](../../pipelines/artifacts/nuget.md)
- [Npm](../../pipelines/artifacts/npm.md)
- [Python](../../pipelines/artifacts/pypi.md)
- [Maven](../../pipelines/artifacts/pull-package-gradle.md)
- [Universal Packages](../../pipelines/artifacts/universal-packages.md)

## Share packages

> [!IMPORTANT]
> Upstream sources are not supported in public feeds.

To share your packages publicly, you can simply post/share your feed URL (example: `https://dev.azure.com/<org_name>/<project_name>/_packaging?_a=feed&feed=<feed_name>`), or share individual packages with [package badges](../package-badges.md).

:::image type="content" source="../media/package-badge.png" alt-text="Screenshot showing a NuGet package badge.":::

As long as your project is kept public, anyone can view and download packages from your public feed. Anonymous users will not be able to create new feeds or access the recycle bin.

:::image type="content" source="../media/anonymous-public-feeds.png" alt-text="Screenshot showing packages in the public feed.":::

> [!NOTE]
> Package badges are only available for released versions. The criteria for what is considered a released version depends on the protocol type. Pre-released version numbers will not be displayed in badges, instead the badge will show the latest released version.

## Related articles

- [Limits on package sizes and counts](../reference/limits.md)
- [Package notifications](../how-to/follow-package-notifications.md)
- [Package badges](../package-badges.md)
