---
title: Publish npm packages from the command line
description: Learn how to connect to your feed and publish npm packages from the command line.
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: tutorial
ms.date: 02/21/2025
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Publish npm packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article guides you through authenticating with your Azure Artifacts feed and publishing npm packages from the command line.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

## Get the tools

If this is your first time using Azure Artifacts with npm on your machine, follow the steps below to set up your environment:

### [Windows](#tab/windows/)

1. Download [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Run the following command to install `vsts-npm-auth`.

    ```
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    ```

### [Other](#tab/other/)

1. Download [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope.

---

## Publish packages

1. If you haven't authenticated with your feed yet, follow the steps in the [Project setup](npmrc.md#connect-to-feed) to connect to your feed and then proceed with the next step once you're done.

1. Run the following command in your project directory to publish the npm packages listed in your *package.json*:

    ```
    npm publish
    ```

## Related content

- [Restore npm packages (CLI)](restore-npm-packages.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](../npm/upstream-sources.md)
