---
title: publish and download npm packages
description: How to set up your .npmrc config file to publish and download npm packages
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.date: 10/16/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with npm packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts, you can publish and download npm packages from feeds and public registries like npmjs.com. This quickstart will walk you through the process of creating your feed, configuring your project, and publishing and downloading npm packages to and from your Azure Artifacts feed.



## Create a feed

A feed is an organizational construct that allows users to store their packages and control who can access them. Azure Artifacts support storing several package types in a single feed such as NuGet, npm, Maven, Python, Cargo, and Universal packages.

[!INCLUDE [](includes/create-feed.md)]

::: moniker range=">= azure-devops-2019"

## Set up your .npmrc files

> [!NOTE]
> `vsts-npm-auth` is not supported in TFS and Azure DevOps Server.

We recommend using two .npmrc files. The first one should be located in the same directory as your package.json file. The second should be placed in the *$home* directory (Linux/macOS) or *$env.HOME* (Windows) to securely store your credentials. The npm client will then be able to look up this file and fetch your credentials for authentication. This enables you to share your config file while keeping your credentials secure.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **npm** from the left navigation pane. If this is your first time using Azure Artifacts with npm, select **Get the tools** and follow the steps to download Node.js and set up your machine.

1. Insert the following snippet into your .npmrc file, the one located in the same directory as your package.json file. Replace the placeholders with the appropriate values.

    - **Organization-scoped feed**:
    
    ```npmrc
    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/ 
                            
    always-auth=true
    ```

    - **Project-scoped feed**:   
    
    ```npmrc
    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/ 
                            
    always-auth=true
    ```

## Setup credentials

> [!IMPORTANT]
> npm supports a single `registry` in your .npmrc file. Multiple registries are possible with [scopes](npm/scopes.md) and [upstream sources](npm/upstream-sources.md).

#### [Windows](#tab/Windows/)

If you're developing on Windows, we recommend using *vsts-npm-auth* to authenticate with Azure Artifacts. Make sure you have *vsts-npm-auth* installed from **Get the tools** and then run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file:

```Command
vsts-npm-auth -config .npmrc
```

#### [Other](#tab/Other/)

If you're developing on a non-Windows platform and need to authenticate with Azure Artifacts, you'll need to create a personal access token, encode it in Base64, and then add it to your user-level .npmrc file.

1. Generate a [personal access token](../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Encode your newly generated personal access token as follows:

    1. Run the following command in a command prompt window to encode your PAT: 
        
        ```Command
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

    1. Paste your personal access token, and then press **Enter**.
 
    1. Copy the Base64 encoded personal access token.


1. Copy the following code snippet to your user-level .npmrc file and replace the `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` placeholder with your Base64 personal access token: 

    - **Organization-scoped feed**:

        ```Command
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:username=[ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```
    
    - **Project-scoped feed**:

        ```Command
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

::: moniker-end

* * * 



## Publish packages

To publish your npm package, run the following command in your project directory:

```Command
npm publish
```

> [!IMPORTANT]
> Using the `publishConfig` property to override the registry config param at publish-time is not supported. 

## Restore packages

To restore an npm package, run the following command in your project directory:

```Command
npm install --save <package>
```

To restore all your npm packages, run the following command from your project directory:

```Command
npm install
```

## Related articles

- [Publish npm packages (YAML/Classic)](../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./npm/upstream-sources.md)
- [Use npm scopes](npm/scopes.md)
