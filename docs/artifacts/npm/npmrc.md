---
title: Connect to Azure Artifacts with npm projects
description: How to set up your npm project and connect to Azure Artifacts feeds
ms.assetid: A5364E3A-3918-4318-AAE0-430EA91AD5F1
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 04/02/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Connect your npm project to Azure Artifacts feeds

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and install various package types from feeds and public registries like npmjs.com. To authenticate with Azure Artifacts, it's necessary to configure your npm config file. 
This file contains feed URLs and credentials used by npm, offering options to customize your npm client behavior, such as setting up proxies, defining default package locations, or configuring private package feeds. The .npmrc file is typically located in the user's home directory but can also be created at the project level to override default settings. By modifying the .npmrc file, users can personalize their npm experience to meet their specific requirements.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-npm.md#create-a-feed) if you don't have one already.

- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Project setup

For best practices, it's recommended to use two separate configuration files. The first one is used for authenticating with Azure Artifacts, while the second one is stored locally and holds your credentials.

To set up the second file, simply place it in your home directory on your development machine and include all of your registry credentials. This way, the npm client can easily access your credentials for authentication, allowing you to share your configuration file while keeping your credentials secure.

The following steps will guide you through setting up the first configuration file:

::: moniker range="< azure-devops"

> [!NOTE]
> `vsts-npm-auth` is not supported in Azure DevOps Server.

::: moniker-end

::: moniker range="azure-devops"   

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/npm-connect-to-feed-azure-devops.png" alt-text="A screenshot showing how to connect to a feed.":::

1. Select **npm** from the left navigation pane.

1. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

1. Follow the instructions in **Project setup** to connect to your feed.

    :::image type="content" source="../media/npm-project-setup-azure-devops.png" alt-text="A screenshot showing how to set up your npm project.":::

### [Other](#tab/other/)

1. Add a *.npmrc* file in your project's directory, in the same directory as your package.json file, and copy the following snippet into it. 

    ```Cli
    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/ 
                        
    always-auth=true
    ```
### Setup credentials

1. Copy the following snippet into your user-level *npmrc* file:

    - **Organization-scoped feed**:

        ```Cli
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

        ```Cli
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

1. Encode your newly generated personal access token as follows:

    1. Run the following command in a command prompt window, and then paste your personal access token when prompted:

        ```Cli
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

        You can also use the following command to convert your personal access token to Base 64. 

        - **Linux/Mac**:
            ```Command
            echo -n "YOUR_PERSONAL_ACCESS-TOKEN" | base64
            ```
    1. Copy the Base 64 encoded value.

1. Replace both *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* values in your user .npmrc file with your personal access token from Step 3.

* * *

::: moniker-end

::: moniker range="azure-devops-2022"

### [Windows](#tab/windows/)

1. Select your collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/server-2022-1-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in Azure DevOps Server 2022.1.":::

1. Select **npm** from the left navigation pane.

1. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

1. Follow the instructions in **Project setup** to set up your config file.

   :::image type="content" source="../media/npm-project-setup-server-2022-1.png" alt-text="A screenshot showing how to set up your npm project in Azure DevOps Server 2022.1.":::

### [Other](#tab/other/)

1. Add a *.npmrc* file in your project's directory, in the same directory as your package.json file, and copy the following snippet into it. 

    ```Cli
    registry=http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
                        
    always-auth=true
    ```
### Setup credentials

1. Copy the following snippet into your user-level *.npmrc* file:

    - **Collection-scoped feed**:

        ```Cli
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

        ```Cli
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

1. Encode your newly generated personal access token as follows:

    1. Run the following command in a command prompt window, and then paste your personal access token when prompted:

        ```Cli
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

    1. Copy the Base 64 encoded value.

1. Replace both *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* values in your user .npmrc file with your personal access token from Step 3.

* * *

::: moniker-end

::: moniker range="azure-devops-2020"

### [Windows](#tab/windows/)

1. Select your collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/server-2020-1-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in Azure DevOps Server 2020.1.":::

1. Select **npm** from the left navigation pane.

1. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

1. Follow the instructions in **Project setup** to set up your config file.

   :::image type="content" source="../media/npm-project-setup-server-2020-1.png" alt-text="A screenshot showing how to set up your npm project in Azure DevOps Server 2020.1.":::

### [Other](#tab/other/)

1. Add a *.npmrc* file in your project's directory, in the same directory as your package.json file, and copy the following snippet into it. 

    ```Cli
    registry=http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
                        
    always-auth=true
    ```
### Setup credentials

1. Copy the following snippet into your user-level *.npmrc* file:

    - **Collection-scoped feed**:

        ```Cli
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

        ```Cli
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

1. Encode your newly generated personal access token as follows:

    1. Run the following command in a command prompt window, and then paste your personal access token when prompted:

        ```Cli
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

    1. Copy the Base 64 encoded value.

1. Replace both *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* values in your user .npmrc file with your personal access token from Step 3.

* * *

::: moniker-end

::: moniker range="azure-devops-2019"

1. Select your collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/server-2019-1-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in Azure DevOps Server 2019.1.":::

1. A new window will appear. From the left-hand navigation pane, select **npm**.

1. Follow the instructions to configure your **project** and **user** .npmrc files.

   :::image type="content" source="../media/npm-project-setup-server-2019-1.png" alt-text="A screenshot showing how to set up your project-level and user-level npmrc files in Azure DevOps Server 2019.1.":::

::: moniker-end

> [!TIP]
> Using multiple registries in .npmrc files is supported with [scopes](..//npm/scopes.md) and [upstream sources](../concepts/upstream-sources.md).

## Pipeline authentication

To authenticate with your pipeline, Azure Artifacts recommends using the [npm authenticate task](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0). 

When using task runners such as gulp or Grunt, it's important to include your npm authenticate task at the start of your pipeline. This action ensures that your credentials are injected into your project's .npmrc file and retained throughout the pipeline run, enabling subsequent steps to access the credentials in the configuration file.

### [Classic](#tab/classic)

::: moniker range="azure-devops-2020 || azure-devops-2022 || azure-devops"

1. Navigate to your project, select **Pipelines**, and then select your pipeline definition.

2. Select **Edit** to modify your pipeline.

3. Select `+` to add a new task to your pipeline.

    :::image type="content" source="../../pipelines/media/get-started-designer/builds-tab-add-task-azure-devops-newnavon.png" alt-text="Screenshot showing how to add the npm authenticate task to your pipeline.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. Navigate to your project, select **Pipelines** > **Builds**, and then select your build definition.

2. Select **Edit** to modify your build pipeline.

3. Select `+` to add a new task to your build pipeline.

    :::image type="content" source="../../pipelines/media/get-started-designer/builds-tab-add-task-azure-devops-newnavon.png" alt-text="Screenshot showing how to add the npm authenticate task to your pipeline.":::

::: moniker-end

::: moniker range=">= azure-devops-2019"

4. Search for the **npm Authenticate** task, and then select **Add**.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-phase-newnav.png" alt-text="Screenshot showing the npm authenticate task added to the pipeline.":::

5. Select your *.npmrc* file, and then select **Save & queue** when you're done.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-file.png" alt-text="Screenshot showing how to add your *.npmrc* file.":::

::: moniker-end

### [YAML](#tab/yaml)

```yaml
- task: npmAuthenticate@0
  inputs:
    workingFile: .npmrc                ## Path to the npmrc file
    customEndpoint: #Optional          ## Comma-separated list of npm service connection names for registries from external organizations. For registries in your org, leave this blank
```

* * *

> [!NOTE]
> For your pipeline to access your feed, ensure that the build service role is set to **Feed And Upstream Reader (Contributor)** in your feed settings.

:::image type="content" source="../media/project-collection-contributor.png" alt-text="A screenshot showing the build service roles in feed settings.":::

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow the appropriate domain URLs. See [Allowed IP addresses and domain URLs](../../organizations/security/allow-list-ip-url.md) for details.

## Troubleshoot

#### vsts-npm-auth is not recognized

If you encounter the following error during project execution:

- Cmd: `'vsts-npm-auth' is not recognized as an internal or external command, operable program or batch file.`

- PowerShell: `vsts-npm-auth : The term 'vsts-npm-auth' is not recognized as the name of a cmdlet, function, script file, or operable program.`

Then it's probable that the npm modules folder hasn't been added to your path. To address this, rerun the Node.js setup and make sure to select the `Add to PATH` option.

:::image type="content" source="./media/node-setup.png" alt-text="A Screenshot showing how to set up node.js.":::

Alternatively, you can add the npm modules folder to your path by modifying the PATH variable to `%APPDATA%\npm` in Command Prompt or `$env:APPDATA\npm` in PowerShell.

#### Unable to authenticate

If you're running into an E401 error: `code E401 npm ERR! Unable to authenticate`. Run the `vsts-npm-auth` command with **-F** flag to reauthenticate.

```Cli
vsts-npm-auth -config .npmrc -F
```

#### Reset vsts-npm-auth

Follow these steps to reset your vsts-npm-auth credentials:

1. Uninstall vsts-npm-auth:

    ```Cli
    npm uninstall -g vsts-npm-auth
    ```

1. Clear your npm cache:

    ```Cli
    npm cache clean --force
    ```

1. Delete your *.npmrc* file.

1. Reinstall vsts-npm-auth:

    ```Cli
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    ```

#### Unable to publish

If you encounter a 403 error, it may indicate a name conflict. In Azure Artifacts, packages are immutable, meaning that once you publish a package to your feed, its version number is permanently reserved. Even if you delete it, you cannot publish a new package with the same version number. To address this issue, update the package version in your *package.json* file, and then try again.

## Related articles

- [Publish and restore npm packages (CLI)](./publish.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./upstream-sources.md)
