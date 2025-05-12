---
title: Publish artifacts with Gradle
description: Learn how to connect to a feed and publish your packages with Gradle.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 05/12/2025
ms.author: rabououn
author: ramiMSFT
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish packages - Gradle

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to manage all their dependencies in one place by storing multiple package types in a single feed. This article walks you through connecting to an Azure Artifacts feed and publishing packages using Gradle.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Gradle](https://docs.gradle.org/current/userguide/installation.html). |

## Create a feed

Azure Artifacts recommends using one feed for consuming packages and a separate one for publishing your internal packages. If you already have a feed, you can skip this step. Otherwise, follow these steps to create a new feed:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed and set its **Visibility**, then select a **Scope** for your feed. If you'd like to include packages from public registries, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

## Publish packages

1. If you haven't authenticated with your feed yet, follow the steps in [Project setup](project-setup-gradle.md) to set up your config files and authenticate with your feed.

1. In your project directory, run the following command to publish your package:

    ```
    gradle publish
    ```

1. Once published, navigate to your feed. You should see your packages listed, as shown in the example below:
    
    :::image type="content" source="media/publish-package-gradle.png" alt-text="A screenshot displaying a package successfully published to the feed.":::

## Related content

- [Restore Maven packages](./install.md)

- [Use packages from Maven Central](upstream-sources.md)

- [Use packages from Google Maven Repository](google-maven.md)
