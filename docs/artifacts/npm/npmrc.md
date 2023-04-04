---
title: Set up your client's npmrc
description: How to set up your project and authenticate to Azure Artifacts feeds
ms.assetid: A5364E3A-3918-4318-AAE0-430EA91AD5F1
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/04/2023
monikerRange: '<= azure-devops'
---

# Set up your project and connect to Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables you to publish various package types to your feeds and install packages from both feeds and public registries like npmjs.com. Before we can authenticate with Azure Artifacts, we need to configure our .npmrc file, which stores the feed URLs and credentials that Npm uses. This file can be used to customize the behavior of the Npm client, such as setting up proxies, specifying default package locations, or configuring private package feeds. The .npmrc file is located in the user's home directory and can also be created at the project level to override the default settings. By editing the .npmrc file, users can customize their Npm experience and make it more tailored to their needs.

## Project setup

For best practice, we suggest using two separate configuration files. The first file is used to authenticate with Azure Artifacts, while the second file is stored locally and contains your credentials. To set up the second file, place it in your home directory on your development machine and include all of your registry credentials. By using this approach, the Npm client can easily retrieve your credentials for authentication, allowing you to share your configuration file while keeping your credentials secure. The following steps will guide you through setting up the first configuration file:

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.
 
    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release**.

1. Select **Packages**, and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot showing how to connect to a feed in TFS.":::

::: moniker-end

2. Select **npm** from the left navigation pane.

3. If this is the first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites.

::: moniker range="azure-devops"   

4. Follow the instructions in **Project setup** to set up your config file.

    :::image type="content" source="../media/npm-azure-devops-newnav.png" alt-text="Screenshot showing the steps to set up the project and publish and restore packages.":::

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

4. Follow the instructions in **Project setup** to set up your config file.

   :::image type="content" source="../media/connect-to-feed-devops-server.png" alt-text="Screenshot showing the steps to set up the project and restore packages.":::

::: moniker-end

::: moniker range="tfs-2018"

4. Follow the instructions to set up your project.

    :::image type="content" source="../media/connect-to-feed-npm-registry.png" alt-text="Screenshot showing the steps to set up the project in TFS.":::

::: moniker-end

> [!NOTE]
> if your organization is using a firewall or a proxy server, make sure you allow the appropriate domain URLs. For more information, please refer to the list of [Allowed IP addresses and domain URLs](../../organizations/security/allow-list-ip-url.md).

## Credentials setup

> [!TIP]
> Multiple registries in .npmrc files are supported with [upstream sources](../concepts/upstream-sources.md) and [scopes](..//npm/scopes.md).

### [Windows](#tab/windows/)

If you're developing on Windows, we recommend that you use `vsts-npm-auth` to fetch the credentials and inject them into your *%USERPROFILE%\\.npmrc*.  The easiest way to set this up is to install `vsts-npm-auth` globally and then add a run script to your *package.json*.

- Install vsts-npm-auth globally:

    ```Command
    npm install -g vsts-npm-auth
    ```

- Add script to package.json:

    ```json
    "scripts": {
        "refreshVSToken" : "vsts-npm-auth -config ".\.npmrc\" -TargetConfig "$HOME\.npmrc\""
    }
    ```

### [Linux/Mac](#tab/linux/)

`vsts-npm-auth` is not supported in Linux/Mac. Follow the steps below to set up your credentials:

1. Copy the following snippet into your npmrc file.

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

    1. Run the following command in an elevated command prompt window, and then paste your personal access token when prompted:

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

Azure Artifacts recommend using the [npm authenticate task](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0) to authenticate with your pipeline. When using a task runner such as gulp or Grunt, you'll need to add the npm authenticate task at the beginning of your pipeline. This will inject your credentials into your project's *.npmrc* and persist them for the lifespan of the pipeline run. This allows subsequent steps to use the credentials in the config file.

### [Classic](#tab/classic)

::: moniker range=">= azure-devops-2019"

1. Select **Azure Pipelines**, and then select your pipeline definition.

1. Select **Edit** to modify your pipeline.

1. Select `+` to add a task to your pipeline.

   > [!div class="mx-imgBorder"] 
   > ![Screenshot showing how to add the npm authenticate task to your pipeline](../../pipelines/media/get-started-designer/builds-tab-add-task-azure-devops-newnavon.png)

1. Search for the **npm Authenticate** task, and then select **Add** to add it to your pipeline.

   > [!div class="mx-imgBorder"] 
   > ![Screenshot showing the npm authenticate task added to the pipeline](../media/build-definition/build-definition-npm-auth-task-phase-newnav.png)

1. Select your .npmrc file.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing how to add your .npmrc file](../media/build-definition/build-definition-npm-auth-task-file.png)

1. Select **Save & queue** when you're done.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release**, and then select **Builds**.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing how to access your builds in TFS](../../pipelines/media/get-started-designer/navigate-to-builds-tab-tfs-2018-2.png)

1. Select your pipeline, and then select **Edit**.

1. Select `+` to add a task to your pipeline.

    > [!div class="mx-imgBorder"]
    > ![Screenshot showing how to add a new task to your pipeline](../../pipelines/media/get-started-designer/builds-tab-add-task-tfs-2018-2.png)

1. Search for the **npm Authenticate** task, and then select **Add** to add it to your pipeline.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing the npm authenticate task](../media/build-definition/build-definition-npm-auth-task-phase.png)

1. Select your .npmrc file.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing how to add your .npmrc file to the npm authenticate task](../media/build-definition/build-definition-npm-auth-task-file.png)

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
> To grant permissions to your pipeline, make sure you set the build service role to **Contributor** in your feed settings.

:::image type="content" source="../media/project-collection-contributor.png" alt-text="A screenshot showing the build service roles in feed settings.":::

## Troubleshoot

#### vsts-npm-auth is not recognized

If you're running into the following error:

- Cmd: `'vsts-npm-auth' is not recognized as an internal or external command, operable program or batch file.`
- PowerShell: `vsts-npm-auth : The term 'vsts-npm-auth' is not recognized as the name of a cmdlet, function, script file, or operable program.`

Then it's likely that the npm modules folder is not in your path. To fix this issue, rerun the Node.js setup and make sure that the `Add to PATH` options are selected.

> [!div class="mx-imgBorder"]
> ![Screenshot showing how to set up node.js](./media/node-setup.png)

Alternatively, you can edit the PATH variable `%APPDATA%\npm` (Command Prompt) or `$env:APPDATA\npm` (PowerShell) to add it to your path.

#### Unable to authenticate

If you're running into a E401 error: `code E401 npm ERR! Unable to authenticate`. Run the `vsts-npm-auth` command with **-F** flag to reauthenticate.

```Command
vsts-npm-auth -config .npmrc -F
```

#### Reset vsts-npm-auth

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
