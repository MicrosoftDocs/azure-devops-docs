---
title: What is Azure Artifacts?
description: Learn how to get started with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: overview
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.author: rabououn
author: ramiMSFT
ms.date: 08/22/2025
ms.custom: peer-review-program
monikerRange: '>= azure-devops-2020'
---

# What is Azure Artifacts?

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Azure Artifacts provides developers with a streamlined way to manage all their dependencies from a single feed. These feeds serve as repositories for storing, managing, and sharing packages, whether within your team, across organizations, or publicly online. Azure Artifacts supports multiple package types, including NuGet, npm, Python, Maven, Cargo, and Universal Packages.

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. This free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization begins handling more critical tasks, [increase artifacts storage limit](artifact-storage.md#increase-artifacts-storage-limit) to ensure you have the appropriate resources.

## Create a new feed

Azure Artifacts feeds are organizational constructs that let you store, manage, and control access to packages. Azure Artifacts feeds support multiple package types such as npm, NuGet, Maven, Python, Cargo, and Universal Packages. See [What are feeds](concepts/feeds.md) for more details. If you don’t have a feed yet, here’s how to create one:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (who can use your feed). Specify the **Scope** of your feed, and if you wish to include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

## Get started

Azure Artifacts enables teams to seamlessly store, manage, and share packages from a centralized feed. You can publish your packages to a feed, consume packages from internal or external feeds, and install packages from public registries such as *nuget.org*, *npmjs.com*, *Maven Central*, etc. Select the technology relevant to your scenario to get started:

::: moniker range="azure-devops"

| Package Type           | Articles                                                                         |
|------------------------|----------------------------------------------------------------------------------|
| **NuGet**              | - [Publish NuGet packages - (NuGet.exe)](nuget/publish.md)                       |
| **Dotnet**             | - [Publish NuGet packages - (dotnet)](nuget/dotnet-exe.md)                       |
| **Npm**                | - [Publish npm packages](npm/publish.md)                                         |
| **Maven**              | - [Publish Maven Artifacts](maven/publish-packages-maven.md)                     |  
| **Gradle**             | - [Publish packages - Gradle](maven/publish-with-gradle.md)                      |
| **Python**             | - [Publish Python packages](quickstarts/python-cli.md)                           |
| **Cargo**              | - [Publish Cargo packages](get-started-cargo.md)                                 |
| **Universal Packages** | - [Publish Universal Packages](quickstarts/universal-packages.md)                |

---

::: moniker-end

::: moniker range="azure-devops-2022"

| Package Type           | Articles                                                                         |
|------------------------|----------------------------------------------------------------------------------|
| **NuGet**              | - [Publish NuGet packages - (NuGet.exe)](nuget/publish.md)                       |
| **Dotnet**             | - [Publish NuGet packages - (dotnet)](nuget/dotnet-exe.md)                       |
| **Npm**                | - [Publish npm packages](npm/publish.md)                                         |
| **Maven**              | - [Publish Maven Artifacts](maven/publish-packages-maven.md)                     |  
| **Gradle**             | - [Publish packages - Gradle](maven/publish-with-gradle.md)                      |
| **Python**             | - [Publish Python packages](quickstarts/python-cli.md)                           |
| **Cargo**              | - [Publish Cargo packages](get-started-cargo.md)                                 |

---

::: moniker-end

::: moniker range="azure-devops-2020"

| Package Type           | Articles                                                                         |
|------------------------|----------------------------------------------------------------------------------|
| **NuGet**              | - [Publish NuGet packages - (NuGet.exe)](nuget/publish.md)                       |
| **Dotnet**             | - [Publish NuGet packages - (dotnet)](nuget/dotnet-exe.md)                       |
| **Npm**                | - [Publish npm packages](npm/publish.md)                                         |
| **Maven**              | - [Publish Maven Artifacts](maven/publish-packages-maven.md)                     |  
| **Gradle**             | - [Publish packages - Gradle](maven/publish-with-gradle.md)                      |
| **Python**             | - [Publish Python packages](quickstarts/python-cli.md)                           |

---

::: moniker-end

## Feature availability

|      Packages          | Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020 |
|------------------------|-----------------------|--------------------------|--------------------------|
| **NuGet**              | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **dotnet**             | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **npm**                | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **Maven**              | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **Gradle**             | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **Python**             | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::     |
| **Cargo**              | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::   |
| **Universal Packages** | :::image type="icon" source="../media/icons/checkmark.png" border="false":::    | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::  | :::image type="icon" source="../media/icons/delete-icon.png" border="false":::   |


::: moniker range="azure-devops"

## Monitor storage usage

You can track artifact storage consumption through the UI available in your organization or project settings. It provides visibility into usage at both the organization and project levels:

- [Project-level storage](./artifact-storage.md#project-level-storage): Displays total storage usage and breakdown by artifact type.

- [Organization-level storage](./artifact-storage.md#organization-level-storage): Provides an overview of total storage usage including consumption details by project and artifact type.

::: moniker-end

## Related content

- [Limits on package sizes and counts](reference/limits.md)

- [Manage permissions](feeds/feed-permissions.md)

- [Set up upstream sources](how-to/set-up-upstream-sources.md)
