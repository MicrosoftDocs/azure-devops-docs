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

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article guides you through authenticating with your Azure Artifacts feed and publishing npm packages from the command line.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed).<br> - [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

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

1. If you haven't authenticated with your feed yet, follow the steps in the [Project setup](npmrc.md#connect-to-a-feed) to connect to your feed and then proceed with the next step once you're done.

1. Run the following command in your project directory to publish the npm packages listed in your *package.json*:

    ```
    npm publish
    ```

::: moniker range="azure-devops"   

## Troubleshooting

If you're experiencing any of the following errors, follow the steps in this section to troubleshoot and resolve the issue:

#### vsts-npm-auth is not recognized

This error indicates that the npm modules folder hasn't been added to your path. Rerun the *Node.js* setup and make sure to select the **Add to PATH** option. Alternatively, you can manually add the npm modules folder to your path by modifying the PATH variable to `%APPDATA%\npm` (Command Prompt) or `$env:APPDATA\npm` (PowerShell).
 
#### Unable to authenticate

If you encounter an authentication error such as *code E401 npm ERR! Unable to authenticate*, run the *vsts-npm-auth* command with *-F* flag to reauthenticate:

```
vsts-npm-auth -config .npmrc -F
```

#### Reset vsts-npm-auth

If authentication continues to fail, follow these steps to reset your *vsts-npm-auth* configuration:

1. Uninstall vsts-npm-auth:
   
     ```
    npm uninstall -g vsts-npm-auth
    ```

1. Clear your npm cache:

    ```
    npm cache clean --force
    ```

1. Delete your *.npmrc* file.

1. Reinstall vsts-npm-auth:
    
    ```
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    ```

#### Unable to publish

If you get a 403 error when publishing, it may be due to a version conflict. Azure Artifacts packages are immutable; once a version is published to your feed, its version number is permanently reserved, even if you delete it. To address this issue, update the version number in your *package.json* and publish again.

::: moniker-end

## Related content

- [Restore npm packages (CLI)](restore-npm-packages.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](../npm/upstream-sources.md)
