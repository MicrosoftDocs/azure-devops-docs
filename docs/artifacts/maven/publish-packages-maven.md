---
title: Publish Maven packages to an Azure Artifacts feed
description: Learn how to connect to a feed and publish your Maven packages.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.author: rabououn
author: ramiMSFT
ms.date: 05/14/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish Maven packages to an Azure Artifacts feed

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts provides a centralized way to host and manage your packages in a single feed. This article guides you through connecting to an Azure Artifacts feed and publishing your Maven packages.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Maven. |

## Create a feed

If you already have a feed, you can skip this section. Otherwise, follow the steps below to create a new feed:

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed, choose its **Visibility**, then select its **Scope**. To include packages from public registries, select the **Upstream sources** checkbox.

1. Select **Create** when you're done.

## Publish packages

1. If you haven’t already authenticated with your feed, follow the steps in [Project setup](project-setup-maven.md) to connect to your feed.

1. Run the following command in your project directory to publish your package:

    ```
    mvn deploy
    ```

1. Once published, navigate to your feed. You should see your packages listed, as shown in the example below:
    
    :::image type="content" source="media/publish-package-maven.png" alt-text="A screenshot displaying a Maven package successfully published to the feed.":::


## Related content

- [Publish packages - Gradle](publish-with-gradle.md)

- [Restore Maven packages](install.md)

- [Use packages from Maven Central](upstream-sources.md)

