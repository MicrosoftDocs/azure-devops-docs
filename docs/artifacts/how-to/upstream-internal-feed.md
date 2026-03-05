---
title: Set up an internal feed as an upstream source
description: Learn how to set up an internal feed as an upstream source in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 02/26/2026
monikerRange: "<=azure-devops"
---

# Set up an internal feed as an upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts upstream sources simplify package management by enabling developers to store packages from multiple sources in a single feed.
When a package is installed for the first time from an upstream source, Azure Artifacts automatically saves a copy to your feed to ensure continued access, even if the upstream source becomes temporarily unavailable. This tutorial walks you through how to set up an internal feed from the same organization as an upstream source in Azure Artifacts.

## Prerequisites

|     **Product**    |     **Requirements**      |
|--------------------|---------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md). |

## Create a feed  

If you don’t already have a feed, follow these steps to create one and add common public registries as upstream sources:

1. Sign in to Azure DevOps and go to your project.

1. Select **Artifacts**, then select **Create feed**.

1. Enter a **Name** for the feed and choose the appropriate **Visibility** and **Scope** settings.  
   
1. Select **Include packages from common public sources** to add common public registries as upstream sources.

1. Select **Create** when you're done.

## Connect to your feed

Use the following steps to configure your project and authenticate with your feed. This example uses a Rust project. For other technologies, see the project setup links in the following section.

1. Sign in to Azure DevOps, and go to your project.

1. Select **Artifacts**, choose your feed from the dropdown menu, and then select **Connect to feed**.

1. From the left navigation pane, select **Cargo**.

1. In the **Project setup** section, copy the first snippet and add it to the *cargo/config.toml* file in your source repository. Your *config.toml* file should resemble the following:

    ```
    [registries]
    FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/Cargo/index/" }
    ```

1. [Configure a credential provider](../cargo/project-setup-cargo.md#configure-a-credential-provider)

1. [Log in to the registry](../cargo/project-setup-cargo.md#log-in-to-the-registry)

#### Project setup for other package types

If you’re using a different technology, use the links below to follow the appropriate project setup guidance to connect to your feed:

::: moniker range="azure-devops"

- [NuGet](../nuget/nuget-exe.md) 
- [Npm](../npm/npmrc.md)
- [Maven](../maven/project-setup-maven.md)
- [Python](../python/project-setup-python.md)
- [Universal Packages](../universal-packages/project-setup-universal-packages.md)

::: moniker-end

::: moniker range="azure-devops-2022"

- [NuGet](../nuget/nuget-exe.md) 
- [Npm](../npm/npmrc.md)
- [Maven](../maven/project-setup-maven.md)
- [Python](../python/project-setup-python.md)

::: moniker-end

## Set up the upstream feed

In this section, you set up an internal feed from the same organization as an upstream source.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select Artifacts, then select the feed you created earlier from the feed dropdown menu.

1. Select the gear icon button![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. On the **Type** tab, select **Azure Artifacts feed in this organization**.

1. On the **Configuration** tab, from the **Feed** dropdown menu, select the feed you want to add as an upstream source. Select the desired **View**, then choose the **Package type(s)** to include, and optionally update the **Upstream source name**.

1. Select **Add** when you're done.

1. Select **Save** to apply your changes.

    :::image type="content" source="../media/new-internal-feed-upstream-source.png" alt-text="A screenshot showing how to add a new internal feed as an upstream source in Azure Artifacts.":::

## Install packages from upstream

The following example illustrates a scenario where *Test_Feed* has *CargoDemoFeed* configured as an upstream source. For domonstration purposes *Test_Feed* is empty and contains no packages.

When a collaborator (or higher) installs a package from *CargoDemoFeed*, Azure Artifacts automatically saves a copy of that package to *Test_Feed*. That package can then be consumed by all readers of *Test_Feed*.

1. Sign in to Azure DevOps, then navigate to the project that hosts the upstream feed (in this example, CargoDemoFeed).

1. Select Artifacts, then from the dropdown menu, select the upstream feed (CargoDemoFeed).

1. Select the package you want to install. On the **Overview** tab, copy the install command.

     :::image type="content" source="../media/install-package-from-internal-upstream.png" alt-text="A screenshot showing how to install a package from an internal feed in Azure Artifacts.":::

1. Open a local command prompt, navigate to the root of your project, paste the command, and run it.

1. After the package is installed, return to **Azure DevOps** > **Artifacts** and select your consuming feed (in this example Test_Feed).

1. Verify that the package you installed locally now appears in your consuming feed. Azure Artifacts automatically saved a copy of the package when it was installed from the upstream source.

## Related content

- [Safeguard against malicious public packages](../concepts/upstream-behavior.md)

- [Use packages from Maven Central](../maven/upstream-sources.md)

- [Manage permissions](../feeds/feed-permissions.md)