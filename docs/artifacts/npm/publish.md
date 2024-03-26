---
title: Publish and restore npm packages CLI
description: How to publish and restore npm packages from the command line
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 03/25/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and restore npm packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can easily manage the publication and retrieval of npm packages from various sources, including feeds and public registries like npmjs.com. This article will walk you through setting up your project, and publishing and restoring your npm packages from your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Download Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Connect to feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1.  Select **Connect to feed**, and then select **npm** from the left.

1. In the **Project setup** section, choose **Windows** if your operating system is Windows; otherwise, select **Other**. Follow the provided instructions to configure your .npmrc file and connect to your feed. If this is the first time using Azure Artifacts with npm, make sure you **Get the tools** at the top right corner of the page.

    :::image type="content" source="../npm/media/project-setup-npm.png" alt-text="A screenshot showing how to connect to your feed." lightbox="../npm/media/project-setup-npm.png":::

## Publish packages

Run the following command in your project directory to publish the npm packages listed in your *package.json*:

```Cli
npm publish
```

## Restore packages

Run the following command in your project directory to restore all your npm packages:
   
```Cli
npm install
```

If you want to restore a specific package, run the following command in your project directory:

```Cli
npm install --save <PACKAGE_NAME>
```

## Related articles

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](../npm/upstream-sources.md)
- [Use npm audit](../npm/npm-audit.md)