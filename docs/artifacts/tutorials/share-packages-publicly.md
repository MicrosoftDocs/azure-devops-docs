---
title: Share packages publicly with public feeds
description: Learn how to use Azure Artifacts public feeds to share packages publicly.
ms.service: azure-devops-artifacts
ms.date: 07/30/2025
monikerRange: 'azure-devops'
---

# Share packages publicly with public feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts provides an easy way to share packages with users outside your organization, including external customers, by using public feeds. Packages stored in public feeds can be accessed and installed by anyone on the internet without requiring an Azure DevOps account.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md). |

> [!NOTE]
> Public feeds are only available in Azure DevOps Services.

## Create a public feed

Public feeds are project-scoped feeds in a public project. Public feeds inherit the visibility settings of the hosting project.

1. Sign in to your Azure DevOps organization, and then navigate to your public project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed, select *Project: PublicProject (Recommended)* for its **scope**, and then select **Create**.

    :::image type="content" source="../media/create-new-public-feed.png" alt-text="A screenshot displaying how to create a new public feed.":::

## Share packages

To share your packages publicly, you can simply share your feed URL, for example: `https://dev.azure.com/<ORGANIZATION_NAME>/<PROJECT-NAME>/_artifacts/feed/<FEED_NAME>` or share individual packages using [package badges](../package-badges.md). As long as your project remains public, anyone can access and download packages from your public feed without requiring an Azure DevOps account.

:::image type="content" source="../media/packages-public-feed.png" alt-text="A screenshot displaying a package in a public feed.":::

> [!NOTE]
> You must be a **Feed Administrator** to enable package badges. See [Manage permissions](feeds/feed-permissions.md) for more details.

## Publish packages (CLI)

| Package Type        | Articles                                                                 |
|---------------------|----------------------------------------------------------------------------------|
| **NuGet**           | - [Publish NuGet packages - (NuGet.exe)](../nuget/publish.md#publish-packages-to-a-feed-in-the-same-organization)  <br>- [Publish NuGet packages - (dotnet)](../nuget/dotnet-exe.md#publish-packages-to-a-feed-in-the-same-organization) |
| **Npm**             | - [Publish npm packages](../npm/publish.md)                                      |
| **Maven**           | - [Publish Maven Artifacts](../get-started-maven.md#publish-packages)            |
| **Gradle**          | - [Publish Artifacts using Gradle](../maven/publish-with-gradle.md)              |
| **Python**          | - [Publish Python packages](../quickstarts/python-cli.md#publish-packages)       |
| **Cargo**           | - [Publish Cargo packages](../get-started-cargo.md)                             |
| **Universal Packages** | - [Publish Universal Packages](../quickstarts/universal-packages.md#publish-universal-packages) |

## Publish packages with Azure Pipelines

| Package Type         | Articles                                                                                                                                                      |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **NuGet**            | - [Publish NuGet packages](../../pipelines/artifacts/nuget.md)                                                                                                |
| **Npm**              | - [Publish npm packages](../../pipelines/artifacts/npm.md)                                                                                                |
| **Maven**            | - [Publish Maven Artifacts](../../pipelines/artifacts/publish-maven-artifacts.md)                                                                             |
| **Gradle**           | - [Publish Artifacts with Gradle](../../pipelines/artifacts/build-publish-artifacts-gradle.md)                                                                |
| **Python**           | - [Publish Python packages](../../pipelines/artifacts/pypi.md#publish-python-packages-to-a-feed)                                                              |
| **Cargo**            | - [Publish Cargo packages (YAML/Classic)](../../pipelines/artifacts/cargo-pipelines.md)                                                                       |
| **Universal Packages** | - [Publish Universal Packages](../../pipelines/artifacts/universal-packages.md#publish-a-universal-package)                                                 |

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Related content

- [Package sizes and count limits](../reference/limits.md)

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)

- [Package notifications](../how-to/follow-package-notifications.md)
