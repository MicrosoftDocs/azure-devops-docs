---
title: Enable and add upstream sources to a public feed
description: How to enable and add upstream sources to a public feed in Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 03/02/2023
monikerRange: '<= azure-devops'
---

# Use upstream sources in a public feed

Azure Artifacts enables developers to manage their dependencies from a single feed. Using upstream sources, you can consume packages from feeds and public registries such as NuGet.org, and npmjs.com. Packages saved from upstreams are scanned for vulnerabilities to ensure that they are safe and comply with security policies. If a vulnerability is found, the package is flagged as "vulnerable" and a notification is sent to the feed owner(s).  

In this article, you will learn how to:

> [!div class="checklist"]
>
> - Create a public feed 
> - Enable upstream sources
> - Add a new upstream source

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure DevOps project. [Create a new project](../../organizations/projects/create-project.md) if you don't have one already.

> [!IMPORTANT]
> Package lock files are required to ensure reproducible builds and eliminate the risk of version conflicts and compatibility issues.

## Create a public feed

Public feeds are project-scoped feeds in a public project. Public feeds inherit the visibility settings of the hosting project.

1. Sign in to your Azure DevOps organization, and then select your project.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-devops.png" alt-text="A screenshot showing the create feed button in Azure Artifacts.":::

1. Give your feed a **Name**, and then select **Project: PublicProject (Recommended)** for its scope.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot showing how to create a new public feed.":::

1. Select **Create** when you are done.

> [!NOTE]
> Upstream sources are enabled by default when you create a new public feed.