---
title: Use packages from the npm registry
description: Learn how to consume packages from the npm registry with Azure Artifacts upstream sources.
ms.assetid: E2DB1217-7113-4A75-A66D-3CADDB07AD37
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 10/08/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Use packages from the npm registry

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts upstream sources enable developers to consume packages from public registries like *npmjs.com*. Once upstream sources are enabled in your feed, Azure Artifacts automatically saves a copy of any package installed from an upstream source to your feed. This setup offers the greatest flexibility, allowing you to use a mix of scoped and non-scoped packages, including those from public registries, all within a single feed. This setup also ensures continued access to those packages even if the upstream source becomes temporarily unavailable.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).|

## Create a feed

If you already have an Azure Artifacts feed, skip to the next section. Otherwise, create a new one as follows:
 
1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Enter a **Name** for your feed, set the **Visibility** to define who can view your packages, and choose the feed **Scope**. Be sure to check the **Include packages from common public sources** box to enable upstream sources and allow consumption of packages from public registries.

1. Select **Create** when you're done.

## Add npmjs upstream

If you've checked the upstream sources checkbox during the creation of your feed, npmjs will be added automatically to the list of upstream sources in your feed. If not, you can add it manually as follows:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to open **Feed settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Public source**, then select **npmjs (https://registry.npmjs.org/)** from the dropdown menu.

1. Select **Add** when you're done.

1. Select **Save** in the top-right corner to apply your changes.

## Install packages from npmjs

Before you save packages from npmjs, make sure your project is set up to connect to your feed. If you haven't done this yet, follow the provided instructions to [set up your npm project](npmrc.md#connect-to-a-feed) and connect to your feed. In this example, we'll install the *Axios* library for making HTTP requests:

1. Navigate to npmjs at `https://www.npmjs.com//`.

1. Search for the *Axios* package, and then select it to navigate to the details page.

1. Copy the install command to your clipboard. 

1. In a command prompt window, navigate to your project's directory and run your install command.

    ```Command
    npm install axios
    ```

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## View saved packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **npmjs** from the source menu. The *Axios* package we installed earlier is now available in our feed. Azure Artifacts automatically saved a copy to our feed upon executing the install command.

    :::image type="content" source="media/saved-package-from-upstream.png" alt-text="A screenshot showing the axios package that was saved from upstream.":::

## Related articles

- [Publish and restore npm packages (CLI)](./publish.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Npm scopes](scopes.md)
