---
title: Get started with Cargo packages in Azure Artifacts
description: How to use Azure Artifacts to publish and download Cargo packages
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 07/11/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with Cargo packages in Azure Artifacts

Using Azure Artifacts, you can publish and download Cargo packages to feeds and public registries. This article will guide you through setting up your project and publishing and downloading your cargo packages to and from your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [rustup](https://rustup.rs/).

- Install [msrustup](https://aka.ms/msrustup-win).

## Create a feed

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Give your feed a **Name** and specify its **Visibility**. Check the **Upstream sources** checkbox if you wan to include packages from public registries and then select a **Scope** for your feed.

1. Select **Create** when you're done.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build & Release**, and then select **Packages**.

1. Select **+ New feed** to create a new feed.

1. Give your feed a **Name**, a **Description**, and choose **who can read** and **who can contribute** and if you want to **Include external packages**.

1. Select **Create** when you're done.

::: moniker-end