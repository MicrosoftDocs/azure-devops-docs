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


## Get the tools

If this is your first time using Azure Artifacts with npm on your machine, follow the steps below to set up your environment:

### [Windows](#tab/windows/)

Make sure you've installed [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then run the following command to install `vsts-npm-auth`:

```
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
```

### [Other](#tab/other/)

Make sure you've installed [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope. Copy your PAT and store it in a secure location; you’ll need it to authenticate with your feed in a later step.

---

## Create a feed

If you already have an Azure Artifacts feed, skip to the next section. Otherwise, create a new one as follows:
 
1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Enter a **Name** for your feed, set the **Visibility** to define who can view your packages, and choose the feed **Scope**. Be sure to check the **Include packages from common public sources** box to enable upstream sources and allow consumption of packages from public registries.

1. Select **Create** when you're done.

## Add npmjs upstream

If you've checked the upstream sources checkbox during the creation of your feed, *npmjs* will be added automatically to the list of upstream sources in your feed. If not, you can add it manually as follows:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to open **Feed settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Public source**, then select **npmjs (https://registry.npmjs.org/)** from the dropdown menu.

1. Select **Add** when you're done.

1. Select **Save** in the top-right corner to apply your changes.

## Connect to a feed

Before you can start saving packages from upstream sources to your feed, you must first set up your project and connect to your feed.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select **Connect to Feed**, then select **npm** from the left panel.

1. Follow the steps in the **Project setup** section to configure your .npmrc file and authenticate with your feed. See [set up your npm project](npmrc.md#connect-to-a-feed) for details.

## Install packages from npmjs

Now that you've authenticated with your feed, you can start installing packages from public registries such as npmjs.com. When you install a package from an upstream source, Azure Artifacts automatically saves a copy of that package to your feed. In this example, you'll install *Mongoose*, a MongoDB Object Data Modeling (ODM) library that helps with schema definition, data validation, and object modeling in Node.js applications.

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

1. Go to `https://www.npmjs.com`.

1. Search for the *Mongoose* package, then select it to navigate to its details page.

1. Copy the install command to your clipboard. 

1. In a command prompt window, navigate to your project directory and run the install command.

    ```
    npm i mongoose
    ```

## View saved packages

Now that you've installed a package from the npm registry, you can see how Azure Artifacts automatically saves a copy of that package to your feed. Follow these steps to confirm the package was added to your feed:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. From the **Source** menu in the top-right corner, select **npmjs** to filter for packages from the npm registry.

1. The *mongoose* package you installed in the previous step should now appear in your feed. Azure Artifacts saved a copy automatically when you ran the install command.

## Related content

- [Publish npm packages (CLI)](publish.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Npm scopes](scopes.md)
