---
title: Publish and restore npm packages using the command line
description: How to publish and restore npm packages from the command line
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 01/24/2023
monikerRange: '<= azure-devops'
---

# Publish and restore npm packages from the command line

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Follow this quick tutorial to learn how to connect your npm client to your feed and publish your packages using the command line. If you don't have a feed yet, you can follow the steps in the quickstart to [Create your own feed](../get-started-npm.md#create-a-feed). 

## Project setup

1. Navigate to your project,and then select **Artifacts** then select **Connect to feed**.

1. Select **npm** from the left navigation panel, and then follow the instructions under **Project setup** to configure your .npmrc file and connect to your feed. If this is your first time using Azure Artifacts with npm on your machine, make sure you select **Get the tools** to download and install the prerequisites.

    :::image type="content" source="../npm/media/project-setup-npm.png" alt-text="Screenshot showing how to set up your project":::

[!INCLUDE [](../includes/npm/publish-restore.md)]

## Related articles

- [Use packages from npmjs.com](../npm/upstream-sources.md)
- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use npm audit](../npm/npm-audit.md)