---
title: Publish and restore npm packages CLI
description: How to publish and restore npm packages from the command line
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 03/25/2024
monikerRange: '>= azure-devops-2019'
---

# Publish and restore npm packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can easily manage the publication and retrieval of npm packages from various sources, including feeds and public registries like npmjs.com. This article will walk you through setting up your project, and publishing and restoring your npm packages from your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Download Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Project setup

1. Navigate to your project,and then select **Artifacts** then select **Connect to feed**.

1. Select **npm** from the left navigation panel, and then follow the instructions under **Project setup** to configure your .npmrc file and connect to your feed. If this is your first time using Azure Artifacts with npm on your machine, make sure you select **Get the tools** to download and install the prerequisites.

    :::image type="content" source="../npm/media/project-setup-npm.png" alt-text="Screenshot showing how to set up your project":::

[!INCLUDE [](../includes/npm/publish-restore.md)]

## Related articles

- [Use packages from npmjs.com](../npm/upstream-sources.md)
- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use npm audit](../npm/npm-audit.md)