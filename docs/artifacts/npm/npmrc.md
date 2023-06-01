---
title: Set up your client's npmrc
description: How to set up your project and connect to Azure Artifacts feeds
ms.assetid: A5364E3A-3918-4318-AAE0-430EA91AD5F1
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 04/04/2023
monikerRange: '<= azure-devops'
---

# Set up your project and connect to Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables you to publish various package types to your feeds and install packages from both feeds and public registries like npmjs.com. Before we can authenticate with Azure Artifacts, we need to configure our .npmrc file, which stores the feed URLs and credentials that Npm uses. This file can be used to customize the behavior of the Npm client, such as setting up proxies, specifying default package locations, or configuring private package feeds. The .npmrc file is located in the user's home directory and can also be created at the project level to override the default settings. By editing the .npmrc file, users can customize their Npm experience and make it more tailored to their needs.

## Project setup

For best practice, we suggest using two separate configuration files. The first file is used to authenticate with Azure Artifacts, while the second file is stored locally and contains your credentials. To set up the second file, place it in your home directory on your development machine and include all of your registry credentials. By using this approach, the Npm client can easily retrieve your credentials for authentication, allowing you to share your configuration file while keeping your credentials secure. These steps will walk you through the process of setting up the first configuration file:

### [Windows](#tab/windows/)

::: moniker range="azure-devops"   

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

1. Select **npm** from the left navigation pane.

1. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

1. Follow the instructions in **Project setup** to set up your config file.

    :::image type="content" source="../media/npm-azure-devops-newnav.png" alt-text="Screenshot showing the steps to set up the project and publish and restore packages.":::

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

1. Select **npm** from the left navigation pane.

1. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

1. Follow the instructions in **Project setup** to set up your config file.

   :::image type="content" source="../media/connect-to-feed-devops-server.png" alt-text="Screenshot showing the steps to set up the project and restore packages.":::

::: moniker-end

### [Linux/Mac](#tab/linux/)

`vsts-npm-auth` is not supported in Linux/Mac. Follow the steps below to set up your credentials:

1. Copy the following snippet into your user-level .npmrc file (~/.npmrc). Make sure that you don't add it to the .npmrc file in your source repository:

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

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Encode your newly generated personal access token as follows:

    1. Run the following command in a command prompt window, and then paste your personal access token when prompted:

        ```Command
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

        You can also use the following command to convert your personal access token to Base64. Use `-w 0` to disable line wrapping.

        - **LinuxMac**:
            ```Command
            echo -n "YOUR_PERSONAL_ACCESS-TOKEN" | base64 -w 0
            ```
    1. Copy the Base64 encoded value.

1. Open your .npmrc file and replace the placeholder *[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]* with your encoded personal access token that you created in the previous step.

* * *

> [!NOTE]
> `vsts-npm-auth` is not supported in TFS and Azure DevOps Server.

## Pipeline authentication

For authentication with your pipeline, Azure Artifacts recommends using the [npm authenticate task](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0). When using a task runner like gulp or Grunt, it's important to add the npm authenticate task to the beginning of your pipeline. By doing so, your credentials will be injected into your project's .npmrc file and persisted for the duration of the pipeline run, enabling subsequent steps to use the credentials in the configuration file.

### [Classic](#tab/classic)

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Azure Pipelines**, and then select your pipeline definition.

1. Select **Edit** to modify your pipeline.

1. Select `+` to add a task to your pipeline.

    :::image type="content" source="../../pipelines/media/get-started-designer/builds-tab-add-task-azure-devops-newnavon.png" alt-text="Screenshot showing how to add the npm authenticate task to your pipeline.":::

1. Search for the **npm Authenticate** task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-phase-newnav.png" alt-text="Screenshot showing the npm authenticate task added to the pipeline.":::

1. Select your .npmrc file.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-file.png" alt-text="Screenshot showing how to add your .npmrc file.":::

1. Select **Save & queue** when you're done.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release**, and then select **Builds**.

    :::image type="content" source="../../pipelines/media/get-started-designer/navigate-to-builds-tab-tfs-2018-2.png" alt-text="Screenshot showing how to access your builds in TFS.":::

1. Select your pipeline, and then select **Edit**.

1. Select `+` to add a task to your pipeline.

    :::image type="content" source="../../pipelines/media/get-started-designer/builds-tab-add-task-tfs-2018-2.png" alt-text="Screenshot showing how to add a new task to your pipeline.":::

1. Search for the **npm Authenticate** task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-phase.png" alt-text="Screenshot showing the npm authenticate task.":::

1. Select your .npmrc file.

    :::image type="content" source="../media/build-definition/build-definition-npm-auth-task-file.png" alt-text="Screenshot showing how to add your .npmrc file to the npm authenticate task.":::

1. Select **Save & queue** when you're done.

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
> To grant your pipeline access to your feed, make sure you set the build service role to **Contributor** in your feed settings.

:::image type="content" source="../media/project-collection-contributor.png" alt-text="A screenshot showing the build service roles in feed settings.":::

## Troubleshoot

##### vsts-npm-auth is not recognized

If you encounter the following error while running your project:

- Cmd: `'vsts-npm-auth' is not recognized as an internal or external command, operable program or batch file.`
- PowerShell: `vsts-npm-auth : The term 'vsts-npm-auth' is not recognized as the name of a cmdlet, function, script file, or operable program.`

Then it's likely that the npm modules folder is not added to your path. To resolve this issue, rerun the Node.js setup and make sure to select the `Add to PATH` option.

:::image type="content" source="./media/node-setup.png" alt-text="A Screenshot showing how to set up node.js.":::

As an alternative solution, you can add the npm modules folder to your path by editing the PATH variable `%APPDATA%\npm` in Command Prompt or `$env:APPDATA\npm` in PowerShell.

##### Unable to authenticate

If you're running into a E401 error: `code E401 npm ERR! Unable to authenticate`. Run the `vsts-npm-auth` command with **-F** flag to reauthenticate.

```Command
vsts-npm-auth -config .npmrc -F
```

##### Reset vsts-npm-auth

Follow the steps below to modify/reset your vsts-npm-auth credentials:

- Uninstall vsts-npm-auth.

    ```command
    npm uninstall -g vsts-npm-auth
    ```

- Clear your npm cache.

    ```command
    npm cache clean --force
    ```

- Delete your .npmrc file.

- Reinstall vsts-npm-auth.

    ```command
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    ```

## Related articles

- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use npm scopes](./scopes.md)
- [Use npm audit](./npm-audit.md)
