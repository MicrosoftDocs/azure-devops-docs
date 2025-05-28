---
title: Restore npm packages from the command line
description: Learn how to authenticate with your Azure Artifacts feed and restore npm packages from the command line.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 02/21/2025
monikerRange: '>= azure-devops-2020'
---

# Restore npm packages from the command line

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article guides you through authenticating with your Azure Artifacts feed and restoring npm packages from the command line.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed). |

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

## Restore packages

1. If you haven't authenticated with your feed yet, follow the steps in the [Project setup](npmrc.md#connect-to-feed) to connect to your feed and then proceed with the next step once you're done.

1. Run the following command in your project directory to restore all your npm packages:
   
    ```
    npm install
    ```

1. If you want to restore a specific package, run the following command in your project directory:

    ```
    npm install --save <PACKAGE_NAME>
    ```

## Related content

- [Publish npm packages (CLI)](publish.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](../npm/upstream-sources.md)