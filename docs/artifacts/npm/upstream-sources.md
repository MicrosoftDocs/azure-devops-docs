---
title: Use packages from npmjs.com
description: How to consume packages from npmjs.com upstream source
ms.assetid: E2DB1217-7113-4A75-A66D-3CADDB07AD37
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 11/29/2023
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Use packages from npmjs.com

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

The npm client is designed to work with one main registry (known as a feed in Azure Artifacts) at a time. However, it does support additional scoped registries. If you plan to use both private packages and public packages from npmjs.com, it's recommended to use upstream sources.
Once you enable upstream sources in your feed, Azure Artifacts automatically saves a copy of any installed package to your feed. This offers the greatest flexibility, allowing you to use a mix of scoped and non-scoped packages in your feed, including both scoped and non-scoped packages from npmjs.com.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Enable upstream sources

If you haven't created a feed yet, follow these steps to create a new one and make sure to check the upstream sources checkbox to enable them. If you already have a feed, proceed to the [next step](#add-npmjs-upstream) to add npmjs as an upstream source.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a descriptive **Name** for your feed, set its **Visibility** and **Scope**. Check the **Upstream sources** checkbox to include packages from public registries.

1. Select **Create** when you're done.

## Add npmjs upstream

If you checked the upstream sources checkbox during the creation of your feed, npmjs should have been added automatically. If not, you can add it manually as follows:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Public source**, and then select **npmjs (https://registry.npmjs.org/)** from the dropdown menu.

1. Select **Add** when you're done, and then select **Save** at the top right corner to save your changes.

## Install packages from npmjs

Before you save packages from npmjs, make sure your project is set up to connect to your feed. If you haven't done this yet, follow the provided instructions to [set up your npm project](npmrc.md#connect-to-feed) and connect to your feed. In this example, we'll install the *Axios* library for making HTTP requests:

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
