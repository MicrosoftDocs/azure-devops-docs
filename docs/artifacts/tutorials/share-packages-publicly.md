---
title: Share Packages publicly with public feeds
description: Use Azure Artifacts public feeds to share NuGet, npm, Maven, and Python packages publicly
ms.service: azure-devops-artifacts
ms.date: 11/22/2022
monikerRange: 'azure-devops'
---

# Share packages publicly

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts provides an easy way to share packages to users outside your organization and even external customers using public feeds. Packages that are stored in public feeds can be restored and installed by anyone on the Internet.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.
- A public project. [Create a public project](../../organizations/projects/create-project.md) if you don't have one already.

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

If you want to publish NuGet packages, make sure you have the latest [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

### Publish packages (CLI)

- [NuGet - NuGet.ext](../nuget/publish.md#publish-packages)
- [NuGet - dotnet](../nuget/dotnet-exe.md#publish-packages)
- [Npm](../npm/publish.md)
- [Maven](../get-started-maven.md#publish-artifacts)
- [Python](../quickstarts/python-cli.md#publish-python-packages)

### Publish packages with Azure Pipelines

- [NuGet](../../pipelines/artifacts/nuget.md#publish-a-package)
- [Npm](../../pipelines/artifacts/npm.md#publish-to-azure-artifacts-feeds)
- [Maven](../../pipelines/artifacts/publish-maven-artifacts.md)
- [Python](../../pipelines/artifacts/pypi.md#publish-python-packages-to-azure-artifacts-feeds)

## Share packages

To share your packages publicly, you can simply share your feed URL E.g. `https://dev.azure.com/<ORGANIZATION_NAME>/<PROJECT-NAME>/_artifacts/feed/<FEED_NAME>` or share individual packages with [package badges](../package-badges.md).

As long as your project is kept public, anyone can view and download packages from your public feed. Anonymous users won't be able to create new feeds or access the recycle bin.

:::image type="content" source="../media/public-feeds-access.png" alt-text="A screenshot showing packages in a public feed.":::

## Related articles

- [Get started with NuGet packages in Azure Artifacts](../get-started-nuget.md)
- [Package sizes and count limits](../reference/limits.md)
- [Package notifications](../how-to/follow-package-notifications.md)
- [Package badges](../package-badges.md)
