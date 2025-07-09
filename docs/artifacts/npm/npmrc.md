---
title: Connect to an Azure Artifacts feed - npm
description: Learn how to set up your npm project and connect to an Azure Artifacts feed.
ms.assetid: A5364E3A-3918-4318-AAE0-430EA91AD5F1
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 07/08/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Connect to an Azure Artifacts feed - npm

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to manage packages from various sources, including public registries like *npmjs.com* and private feeds. To authenticate with Azure Artifacts, you need to configure your *.npmrc* config file. This file stores feed URLs and credentials used by npm, and it allows you to customize client behavior such as setting up proxies, defining default package locations, or configuring access to private feeds. The *.npmrc* file is typically located in the user's home directory, but can also be created at the project level to override default settings.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br>- An Azure Artifacts [feed](../get-started-npm.md#create-a-feed)<br> - [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).|

## Connect to a feed

Azure Artifacts recommends using two separate *.npmrc* configuration files. One should be stored locally to store your credentials, while the other should be added to your project directory alongside your *package.json* to define your feed URL. This approach allows you to share your project-level configuration without exposing sensitive information.

To set up the credentials file, create or update the *.npmrc* file and include all necessary registry credentials. This enables the npm client to easily access your credentials for authentication.

The following steps guide you through setting up the project-level configuration file. Select the tab that corresponds to your development environment:

::: moniker range="< azure-devops"

> [!NOTE]
> `vsts-npm-auth` is not supported in Azure DevOps Server.

::: moniker-end

::: moniker range="azure-devops"   

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed** and then select **npm** from the left navigation pane. 

1. Add a *.npmrc* to your project, in the same directory as your *package.json* and paste the provided snippet from the **Project setup** section into the file.

    :::image type="content" source="../media/npm-project-setup-azure-devops.png" alt-text="A screenshot displaying how to set up your npm project and connect to a feed.":::

1. Run the following command to get an Azure Artifacts token added to your user-level *.npmrc* file. You don’t need to run this every time—npm will return a **401 Unauthorized** error when it’s time to refresh the token.

    ```
    vsts-npm-auth -config .npmrc
    ```

### [Other](#tab/other/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed** and then select **npm** from the left navigation pane. 

1. Add a *.npmrc* file to your project's directory. This should be the same directory where your *package.json* file is located. 

1. Paste the snippet provided in the **Project setup** section into your *.npmrc* file. Your file should look similar to the following:

    ```
    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/ 
                        
    always-auth=true
    ```

### Setup credentials

1. Copy the following snippet and paste it into your user-level *npmrc* file:

    - **Organization-scoped feed**:

        ```
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

        ```
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Run the following command in a command prompt window. When prompted, paste your personal access token (PAT) and press **Enter**. The script will return a Base64-encoded version of your PAT, copy that value to use in the next step.

    ```
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

1. If you're using Linux or macOS, you can run the following command in your terminal to convert your personal access token (PAT) to a Base64-encoded string. Copy the resulting value to use in the next step.

    ```
    echo -n "YOUR_PERSONAL_ACCESS-TOKEN" | base64
    ```

1. Replace the placeholders *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* in your user-level *.npmrc* file with the Base64-encoded personal access token you generated in the previous step.

* * *

::: moniker-end

::: moniker range="azure-devops-2022"

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to Feed**.
 
    :::image type="content" source="../media/server-2022-1-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in Azure DevOps Server 2022.1.":::

1. Select **npm** from the left, and then follow the steps in the **Project setup** section to configure your .npmrc. file and authenticate with your feed.

   :::image type="content" source="../media/npm-project-setup-server-2022-1.png" alt-text="A screenshot showing how to set up your npm project in Azure DevOps Server 2022.1.":::

### [Other](#tab/other/)

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed** and then select **npm** from the left navigation pane. 

1. Add a *.npmrc* file in your project's directory, in the same directory as your *package.json* file, and paste the snippet provided in the **Project setup** section into your *.npmrc* file. Your file should look similar to the following:

    ```
    registry=http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
                        
    always-auth=true
    ```

### Setup credentials

1. Copy the following snippet and paste it into your user-level *.npmrc* file:

    - **Collection-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

    - **Project-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Run the following command in a command prompt window. When prompted, paste your personal access token and press **Enter**. The script will return a Base64-encoded version of your PAT, copy that value to use in the next step.

    ```
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

1. Replace the placeholders *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* in your user-level *.npmrc* file with the Base64-encoded personal access token you generated in the previous step.

* * *

::: moniker-end

::: moniker range="azure-devops-2020"

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/server-2020-1-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in Azure DevOps Server 2020.1.":::

1. Select **npm** from the left, and then follow the steps in the **Project setup** section to configure your .npmrc. file and authenticate with your feed.

   :::image type="content" source="../media/npm-project-setup-server-2020-1.png" alt-text="A screenshot showing how to set up your npm project in Azure DevOps Server 2020.1.":::

### [Other](#tab/other/)

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed** and then select **npm** from the left navigation pane. 

1. Add a *.npmrc* file in your project's directory, in the same directory as your *package.json* file, and paste the snippet provided in the **Project setup** section into your *.npmrc* file. Your file should look similar to the following:

    ```
    registry=http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
                        
    always-auth=true
    ```

> [!NOTE]
> For Debian, Ubuntu, and other community or entreprise distributions such as Fedora or Redhat make sure you've installed the prerequisites from the [NodeSource distributions repository](https://github.com/nodesource/distributions).

### Setup credentials

1. Copy the following snippet and paste it into your user-level *.npmrc* file:

    - **Collection-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

    - **Project-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Run the following command in a command prompt window. When prompted, paste your personal access token and press **Enter**. The script will return a Base64-encoded version of your PAT, copy that value to use in the next step.

    ```
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

1. Replace the placeholders *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* in your user-level *.npmrc* file with the Base64-encoded personal access token you generated in the previous step.

* * *

::: moniker-end

> [!TIP]
> Using multiple registries in *.npmrc* files is supported with [scopes](..//npm/scopes.md) and [upstream sources](../concepts/upstream-sources.md).

::: moniker range="azure-devops"   

## Troubleshoot

#### vsts-npm-auth is not recognized

This error indicates that the npm modules folder hasn't been added to your path. Rerun the Node.js setup and make sure to select the `Add to PATH` option. Alternatively, you can add the npm modules folder to your path by modifying the PATH variable to `%APPDATA%\npm` in Command Prompt or `$env:APPDATA\npm` in PowerShell.

:::image type="content" source="./media/node-setup.png" alt-text="A Screenshot showing how to set up node.js.":::  

#### Unable to authenticate

- Error: *code E401 npm ERR! Unable to authenticate*: -> Run the `vsts-npm-auth` command with **-F** flag to reauthenticate:

    ```
    vsts-npm-auth -config .npmrc -F
    ```

#### Reset vsts-npm-auth

Follow these steps to reset your vsts-npm-auth credentials:

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

If you encounter a 403 error, it may indicate a name conflict. In Azure Artifacts, packages are immutable, meaning that once you publish a package to your feed, its version number is permanently reserved. Even if you delete it, you can't publish a new package with the same version number. To address this issue, update the package version in your *package.json* file, and then try again.

::: moniker-end

## Related content

- [Publish npm packages (CLI)](./publish.md)

- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](./upstream-sources.md)
