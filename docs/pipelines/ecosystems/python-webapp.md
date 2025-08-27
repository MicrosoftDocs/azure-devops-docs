---
title: Build and deploy Python web apps
description: Use CI/CD with Azure Pipelines to automatically build, test, and deploy Python web apps to Azure App Service on Linux.
ms.topic: tutorial
ms.assetid: 6f79a177-702f-4fb4-b714-bfdd0ecf1d84
ms.author: jukullam
ms.date: 08/27/2025
monikerRange: "<=azure-devops"
ms.custom:
  - devx-track-python
  - freshness-fy22q2
  - arm2024
  - linux-related-content
  - sfi-image-nochange
---

# Use Azure Pipelines to build and deploy a Python web app to Azure App Service

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This tutorial shows you how to use Azure Pipelines for continuous integration and continuous delivery (CI/CD) to build and deploy a Python web app to Azure App Service on Linux. Your pipeline automatically builds and deploys your Python web app to App Service whenever there's a commit to your app code repository.

In this tutorial, you:

> [!div class="checklist"]
> - Create a Python web app and upload it to Azure App Service.
> - Connect your Azure DevOps project to Azure.
> - Create an Azure Pipelines Python-specific build and deployment pipeline for your app.
> - Run the pipeline to build, test, and deploy to your Azure App Service web app.
> - Set a trigger to run the pipeline whenever you commit to your repository.

To understand more about Azure Pipelines concepts, watch the following video:

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=20e737aa-cadc-4603-9685-3816085087e9]

## Prerequisites

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

## Prepare the sample app

1. Fork the sample repository at [https://github.com/Microsoft/python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) to your GitHub account.
1. Clone your fork to your local machine by using `git clone <your-forked-repository-url>.git`.
1. Go to your local clone by using `cd python-sample-vscode-flask-tutorial`, and build and run the app locally to make sure it works.

   ```bash
   python -m venv .env
   source .env/Scripts/activate
   pip install --upgrade pip
   pip install -r ./requirements.txt
   export set FLASK_APP=hello_app.webapp
   python3 -m flask run
   ```

1. To test the app, go to *http://localhost:5000* in a browser window, and verify that you see the title **Visual Studio Flask Tutorial**.
1. Close the browser window and stop the Flask server by using <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Create and deploy the App Service web app

Create your Azure App Service web app by using [Cloud Shell](/azure/cloud-shell/overview) in the Azure portal. To use Cloud Shell, sign in to the [Azure portal](https://portal.azure.com) and select the Cloud Shell button on the toolbar.

:::image type="content" source="../media/python/azure-cloud-shell-button.png" alt-text="Screenshot of Azure Cloud Shell button on the Azure portal toolbar.":::

The Cloud Shell appears along the bottom of the browser. Make sure **Bash** is selected as the environment in the dropdown menu. You can maximize the Cloud Shell window to give yourself more room.

:::image type="content" source="../media/python/azure-cloud-shell-interface.png" alt-text="Screenshot of Azure Cloud Shell.":::

> [!TIP]
> To paste into Cloud Shell, use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> or right-click and select **Paste** from the context menu.

### Create and deploy the web app

1. In Cloud Shell, clone your forked repository to Azure with the following command, replacing `<your-forked-repository-url>` with the URL of your forked repository.

   ```bash
   git clone <your-forked-repository-url>
   ```

1. Change directory to the cloned repository folder.

   ```bash
   cd python-sample-vscode-flask-tutorial
   ```

1. Run the [az webapp up](/cli/azure/webapp#az-webapp-up) command to provision the App Service web app and do the first deployment. Use the `--name <your-web-app-name>` parameter to assign a name that's unique across Azure, such as a personal or company name along with an app identifier, like `--name <your-name>-flaskpipelines`. Running `az webapp up` with no parameters assigns a randomly generated web app name that's unique in Azure.

   ```azurecli
   az webapp up --name <your-web-app-name>
   ```

The `az webapp up` command recognizes the app as a Python app, and takes the following actions:

- Creates a default [resource group](/cli/azure/group#az-group-create).
- Creates a default [App Service plan](/cli/azure/appservice/plan#az-appservice-plan-create).
- [Creates a web app](/cli/azure/webapp#az-webapp-create) with the assigned name. The app `URL` is `<your-web-app-name>.azurewebsites.net`.
- [Deploys](/azure/app-service/deploy-zip) all files from the current working directory to a ZIP archive, with build automation enabled.
- Caches the parameters locally in the *.azure/config* file so you don't need to specify them again when deploying from the project folder with `az webapp up` or other `az webapp` commands. The commands use the cached values automatically by default.

You can override the default action with your own values by using the command parameters. For more information, see [az webapp up](/cli/azure/webapp#az-webapp-up).

The `az webapp up` command produces the following JSON output:

```json
{
  "URL": <your-web-app-url>,
  "appserviceplan": <your-app-service-plan-name>,
  "location": <your-azure-region>,
  "name": <your-web-app-name>,
  "os": "Linux",
  "resourcegroup": <your-resource-group>,
  "runtime_version": "python|<runtime-version>",
  "runtime_version_detected": "-",
  "sku": <sku>,
  "src_path": <repository-source-path>
}
```

Note the `URL`, `resourcegroup`, and `runtime_version` values to use later in this tutorial.

### Set the startup command

The *python-sample-vscode-flask-tutorial* app has a *startup.txt* file that contains the specific startup command for the web app. Set the web app `startup-file` configuration property to `startup.txt` by entering the following command, using your resource group and web app names.

```azurecli
az webapp config set --resource-group <your-resource-group> --name <your-web-app-name> --startup-file startup.txt
```

When the command completes, the JSON output shows all the configuration settings for your web app.

To see the running app, open a browser and go to the `URL` shown in the `az webapp up` command output. If you see a generic page, wait a few seconds for the App Service to start, then refresh the page. Verify that you see the title **Visual Studio Flask Tutorial**.

## Connect your Azure DevOps project to your Azure subscription

To use Azure Pipelines to deploy to your Azure App Service web app, you need to connect your Azure DevOps project to your Azure resources.

::: moniker range="< azure-devops"

### Create a service principal

A service principal is an identity created for applications, hosted services, and automated tools to access Azure resources. This access is restricted to the roles assigned to the service principal, giving you control over which resources can be accessed at which level.

To create a service principal, run the following command in Bash Cloud Shell. Replace  `<service-principal-name>` with a name for your service principal, `<your-subscription-id>` with your Azure subscription ID, and `<your-resource-group>` with the resource group for the web app.

```azurecli
az ad sp create-for-rbac --display-name <service-principal-name> --role contributor --scopes /subscriptions/<your-subscription-id>/resourceGroups/<your-resource-group>
```

The command returns the following JSON object:

```json
{
  "appId": "<client GUID>",
  "displayName": "<service-principal-name">,
  "password": "<password-string>",
  "tenant": "<tenant GUID>"
  ...
}
```

Make a note of the `appId`, `password`, and `tenantId` values to use for creating a service connection in the next section.

::: moniker-end

### Create a service connection

A service connection provides authenticated access from Azure Pipelines to external and remote services. To deploy to your Azure App Service web app, create a service connection to the resource group for your web app.

::: moniker range=">=azure-devops"

1. On your Azure DevOps project page, select **Project settings**.
1. From **Project Settings**, select **Pipelines** > **Service connections**.
1. On the **Service connections** page, select **New service connection** or **Create service connection** for the first service connection in the project.

   :::image type="content" source="../media/python/project-settings.png" alt-text="Screenshot of selecting Pipeline Service connections in Project Settings.":::

1. On the **New service connection** screen, select **Azure Resource Manager** and then select **Next**. 

   :::image type="content" source="../media/python/service-connection-type-devops-services.png" alt-text="Screenshot of Azure Resource Manager service connection selection.":::

1. On the **New Azure service connection** screen, select your **Identity type**. This example uses **App registration (automatic)**, which is recommended. For more information about authentication methods, see [Connect to Azure by using an Azure Resource Manager service connection](../library/connect-to-azure.md).

1. For **Credential**, select **Workload identity federation (automatic)**.

1. Complete the following fields:

   - **Scope level**: Select **Subscription**.
   - **Subscription**: Select your Azure subscription.
   - **Resource group**: Select the resource group that contains your web app.
   - **Service Connection Name**: Enter a descriptive name for the connection.
   - **Grant access permissions to all pipelines**: Select this check box to grant access to all pipelines in the project.
 
1. Select **Save**.

   :::image type="content" source="../media/azure-service-connection-settings-devops-services.png" alt-text="Screenshot of New Azure service connection dialog box.":::

The new connection appears in the **Service connections** list, and is ready to use in your pipeline.

::: moniker-end

::: moniker range="< azure-devops"

1. On your Azure DevOps project page, select **Project settings**.
1. From **Project Settings**, select **Pipelines** > **Service connections**.

    :::image type="content" source="../media/python/project-settings.png" alt-text="Screenshot of project settings button on the project dashboard.":::

1. On the **Service connections** page, select **New service connection** or **Create service connection** for the first service connection in the project.
1. On the **New service connection** screen, select **Azure Resource Manager** and then select **Next**. 

   :::image type="content" source="../media/python/service-connection-type-devops-services.png" alt-text="Screenshot of Azure Resource Manager service connection selection.":::

1. On the **New Azure service connection** screen, under **Identity type**, select **App registration or managed identity (manual)**. For more information about authentication methods, see [Connect to Azure by using an Azure Resource Manager service connection](../library/connect-to-azure.md).

1. For **Credential**, select **Secret**.

1. Fill out the following fields:

   - **Environment**: Select **Azure Cloud**.
   - **Scope Level**: Select **Subscription**.
   - **Subscription ID**: Enter your Azure subscription ID.
   - **Subscription name**: Enter your Azure subscription name.

   :::image type="content" source="../media/azure-service-connection-settings-devops-server.png" alt-text="Screenshot of top part of the new service connection screen.":::

1. Under **Authentication**, complete the following fields:

   - **Application (client) ID**: Enter the `appId` value returned by the `az ad sp create-for-rbac` command.
   - **Directory (tenant) ID**: Enter the `tenant` value returned by the `az ad sp create-for-rbac` command.
   - **Credential**: Select **Service principal key**.
   - **Client secret**: Enter the `password` value returned by the `az ad sp create-for-rbac` command.
   - Select **Verify** to verify the connection.
1. Under **Service Connection Name**, enter a name for the service connection.
1. Under **Security**, select the check box for **Grant access permissions to all pipelines**.
1. Select **Verify and save**.

   :::image type="content" source="../media/azure-service-connection-devops-server.png" alt-text="Screenshot of bottom part of the new service connection screen.":::

The new connection appears in the **Service connections** list, and is ready to use in your pipeline.

::: moniker-end

## Create a pipeline

Create a pipeline to build and deploy your Python web app to Azure App Service.

::: moniker range=">=azure-devops"

1. On the left navigation menu for your project, select **Pipelines**.
1. On the **Pipelines** page, select **New pipeline**, or **Create pipeline** if this pipeline is the first in the project.

   :::image type="content" source="media/create-first-pipeline.png" alt-text="Screenshot of new pipeline button on the pipelines list.":::

1. On the **Where is your code** screen, select **GitHub**. You might be prompted to sign into GitHub.

   :::image type="content" source="../media/python/where-is-your-code.png" alt-text="Screenshot of selecting GitHub as the location of your code.":::

1. On the **Select a repository** screen, select your forked sample repository. You might be prompted to enter your GitHub password again as a confirmation.

   :::image type="content" source="../media/python/select-repository.png" alt-text="Screenshot of repository selection.":::

   GitHub might prompt you to install the [Azure Pipelines](https://github.com/apps/azure-pipelines) GitHub app. For more information, see [GitHub app authentication](../repos/github.md#github-app-authentication).

<!--   :::image type="content" source="../media/python/github-pipelines-install-01.png" alt-text="Install Azure Pipelines extension on GitHub.":::

   On this page, scroll down to the **Repository access** section, choose whether to install the extension on all repositories or only selected ones, and then select **Approve and install**.

   :::image type="content" source="../media/python/github-pipelines-install-02.png" alt-text="Screenshot of Approve and Install Azure Pipelines extension on GitHub.":::-->

1. On the **Configure your pipeline** page, select **Python to Linux Web App on Azure**.

1. On the next screen, select your Azure subscription and select **Continue**.

1. On the next screen, select your Azure web app and select **Validate and configure**.

Azure Pipelines creates an *azure-pipelines.yml* file and displays it in the YAML pipeline editor.

::: moniker-end

::: moniker range="< azure-devops"

1. On the left navigation menu for your project, select **Pipelines**.
1. On the **Pipelines** page, select **New pipeline**, or **Create pipeline** if this pipeline is the first in the project.

   :::image type="content" source="media/create-first-pipeline.png" alt-text="Screenshot of new pipeline button on the pipelines list.":::

1. On the **Where is your code** page, select **GitHub Enterprise Server**. You might be prompted to sign into GitHub.

   :::image type="content" source="../media/python/where-is-your-code-devops-server.png" alt-text="Screenshot of select GitHub as the location of your code.":::

1. On the **Select a repository** tab, select your forked sample repository. You might be prompted to enter your GitHub password again as a confirmation.

   :::image type="content" source="../media/python/select-repository.png" alt-text="Screenshot of repository selection.":::

   GitHub might prompt you to install the **Azure Pipelines** extension or app. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

<!--   :::image type="content" source="../media/python/github-pipelines-install-01.png" alt-text="Install Azure Pipelines extension on GitHub.":::

   On this page, scroll down to the **Repository access** section, choose whether to install the extension on all repositories or only selected ones, and then select **Approve and install**.

   :::image type="content" source="../media/python/github-pipelines-install-02.png" alt-text="Screenshot of Approve and Install Azure Pipelines extension on GitHub.":::-->

1. On the **Configure your pipeline** page, select **Starter pipeline**.
1. On the **Review your pipeline YAML** page, replace the contents of the starter *azure-pipelines.yml* file with the following YAML pipeline file. In the YAML file:

   - Replace the `<your-service-connection-name>` and `<your-web-app-name>` placeholders with your own values.
   - Replace `<your-pool-name>` with the name of the agent pool you want to use, and replace `<your-python-version>` with the version of Python running on your agent. This version should match the `runtime_version` from the JSON output of the `az webapp up` command.

::: moniker-end

## View the YAML pipeline file

On the **Review your pipeline YAML** page, look at the pipeline to see what it does. Make sure all the default inputs are appropriate for your code. To learn about the pipeline YAML file schema, see the [YAML schema reference](/azure/devops/pipelines/yaml-schema/pipeline).

::: moniker range=">=azure-devops"

The following complete example YAML pipeline file defines your CI/CD pipeline as a series of *stages*, *jobs*, and *steps*, where each step contains the details for different *tasks* and *scripts*. The generated YAML code automatically populates the placeholders with values for your app and connection.

```yml
trigger:
- main

variables:
  # Azure Resource Manager connection created during pipeline creation
  azureServiceConnectionId: '<GUID>'

  # Web app name
  webAppName: '<your-webapp-name>'

  # Agent VM image name
  vmImageName: 'ubuntu-latest'

  # Environment name
  environmentName: '<your-webapp-name>'

  # Project root folder. Point to the folder containing manage.py file.
  projectRoot: $(System.DefaultWorkingDirectory)

  pythonVersion: '3.11'

stages:
- stage: Build
  displayName: Build stage
  jobs:
  - job: BuildJob
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: UsePythonVersion@0
      inputs:
        versionSpec: '$(pythonVersion)'
      displayName: 'Use Python $(pythonVersion)'

    - script: |
        python -m venv antenv
        source antenv/bin/activate
        python -m pip install --upgrade pip
        pip install setuptools
        pip install -r requirements.txt
      workingDirectory: $(projectRoot)
      displayName: "Install requirements"

    - task: ArchiveFiles@2
      displayName: 'Archive files'
      inputs:
        rootFolderOrFile: '$(projectRoot)'
        includeRootFolder: false
        archiveType: zip
        archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
        replaceExistingArchive: true

    - upload: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
      displayName: 'Upload package'
      artifact: drop

- stage: Deploy
  displayName: 'Deploy Web App'
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeploymentJob
    pool:
      vmImage: $(vmImageName)
    environment: $(environmentName)
    strategy:
      runOnce:
        deploy:
          steps:

          - task: UsePythonVersion@0
            inputs:
              versionSpec: '$(pythonVersion)'
            displayName: 'Use Python version'

          - task: AzureWebApp@1
            displayName: 'Deploy Azure Web App : $(webAppName)'
            inputs:
              azureSubscription: $(azureServiceConnectionId)
              appName: $(webAppName)
              package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
```

::: moniker-end

::: moniker range="< azure-devops"

```yml
trigger:
- main

variables:
  # Azure Resource Manager connection created during pipeline creation
  azureServiceConnectionId: '<your-service-connection-name>'

  # Web app name
  webAppName: '<your-web-app-name>'

  # Environment name
  environmentName: '<your-web-app-name>'

  # Project root folder. 
  projectRoot: $(System.DefaultWorkingDirectory)

  # Python version: 
  pythonVersion: '<your-python-version>'

stages:
- stage: Build
  displayName: Build stage
  jobs:
  - job: BuildJob
pool:
      name: '<your-pool-name>'
      demands: python
    steps:
    - task: UsePythonVersion@0
      inputs:
        versionSpec: '$(pythonVersion)'
      displayName: 'Use Python $(pythonVersion)'

    - script: |
        python -m venv antenv
        source antenv/bin/activate
        python -m pip install --upgrade pip
        pip install -r requirements.txt
      workingDirectory: $(projectRoot)
      displayName: "Install requirements"

    - task: ArchiveFiles@2
      displayName: 'Archive files'
      inputs:
        rootFolderOrFile: '$(projectRoot)'
        includeRootFolder: false
        archiveType: zip
        archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
        replaceExistingArchive: true

    - task: PublishBuildArtifacts@1
      inputs:
        PathtoPublish: '$(Build.ArtifactStagingDirectory)'
        ArtifactName: 'drop'
        publishLocation: 'Container'

- stage: Deploy
  displayName: 'Deploy Web App'
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeploymentJob
    pool:
      name: '<your-pool-name'
    environment: $(environmentName)
    strategy:
      runOnce:
        deploy:
          steps:

          - task: UsePythonVersion@0
            inputs:
              versionSpec: '$(pythonVersion)'
            displayName: 'Use Python version'

          - task: AzureWebApp@1
            displayName: 'Deploy Azure Web App : <your-web-app-name>'
            inputs:
              azureSubscription: $(azureServiceConnectionId)
              appName: $(webAppName)
              package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
              startUpCommand: 'startup.txt'
```

::: moniker-end

### Variables

The `variables` section at the beginning of the YAML file defines the following variables:

::: moniker range=">=azure-devops"

|**Variable**|**Description**|
|--|---|
|`azureServiceConnectionId`|The ID of the Azure Resource Manager service connection.|
|`webAppName`|The name of the App Service web app.|
|`vmImageName`|The name of the operating system to use for the build agent.|
|`environmentName`|The name of the environment to deploy to, which is automatically created when the deployment job runs.|
|`projectRoot`|The root folder containing the app code.|
|`pythonVersion`|The version of Python to use on the build and deployment agents.|

::: moniker-end

::: moniker range="< azure-devops"

|**Variable**|**Description**|
|--|---|
|`azureServiceConnectionId`|The ID of the Azure Resource Manager service connection.|
|`webAppName`|The name of the App Service web app.|
|`environmentName`|The name of the environment to deploy to, which is automatically created when the deployment job runs.|
|`projectRoot`|The folder containing the app code. The value is an automatic system variable.|
|`pythonVersion`|The version of Python to use on the build and deployment agents.|

::: moniker-end

### Build and deployment stages

The pipeline consists of build and deployment stages.

#### Build stage

::: moniker range=">=azure-devops"

The build stage contains a single job that runs on the operating system defined in the `vmImageName` variable, in this case `ubuntu-latest`.

```yml
  - job: BuildJob
    pool:
      vmImage: $(vmImageName)
```

::: moniker-end

::: moniker range="< azure-devops"

The build stage contains a single job that runs on an agent in the `pool` identified by the `name` parameter.

You can specify the agent capabilities with the `demands` keyword. For example, `demands: python` specifies that the agent must have Python installed. To specify a self-hosted agent by name, you can use `demands: Agent.Name -equals <agent-name>`.

```yml
  - job: BuildJob
    pool:
      name: <your-pool-name>
      demands: python
```

::: moniker-end

The job contains multiple steps:

1. First, the [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0) task selects the version of Python to use, as defined in the `pythonVersion` variable.

   ```yml
      - task: UsePythonVersion@0
         inputs:
           versionSpec: '$(pythonVersion)'
           displayName: 'Use Python $(pythonVersion)'
   ```

1. The next step uses a script that creates a virtual Python environment and installs the app's dependencies from `requirements.txt`. The `workingDirectory` parameter specifies the location of the app code.

   ```yml
      - script: |
           python -m venv antenv
           source antenv/bin/activate
           python -m pip install --upgrade pip
           pip install setuptools
           pip install  -r ./requirements.txt
         workingDirectory: $(projectRoot)
         displayName: "Install requirements"
   ```

1. The [ArchiveFiles](/azure/devops/pipelines/tasks/reference/archive-files-v2) task creates a ZIP archive that contains the built web app.

   ```yml
       - task: ArchiveFiles@2
         displayName: 'Archive files'
         inputs:
           rootFolderOrFile: '$(projectRoot)'
           includeRootFolder: false
           archiveType: zip
           archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
           replaceExistingArchive: true
```

   The parameters are set as follows:

   |**Parameter**|**Description**|
   |---|---|
   |`rootFolderOrFile`|The location of the app code.|
   |`includeRootFolder`|Whether to include the root folder in the *.zip* file. Set to `false`. If set to `true`, the contents of the *.zip* file are put in a folder named *s* and the task can't find the app code.|
   |`archiveType`|The type of archive to create. Set to `zip`.|
   |`archiveFile`|The location of the *.zip* file to create.|
   |`replaceExistingArchive`|Indicates whether to replace an existing archive if the file already exists. Set to `true`.|

1. The `.zip` file then uploads to the pipeline as an artifact named `drop`. The deployment stage uses the *.zip* file to deploy the app.

   ```yml
       - upload: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
         displayName: 'Upload package'
         artifact: drop
    ```

   The parameters are set as follows:

   |**Parameter**|**Description**|
   |---|---|
   |`upload`|The location of the *.zip* file to upload.|
   |`artifact`|The name of the artifact to create. Set to `drop`.|

#### Deployment stage

The deployment stage runs if the build stage completes successfully. The `dependsOn` and `condition` keywords define this behavior.

```yml
  dependsOn: Build
  condition: succeeded()
```

The deployment stage contains a single deployment job configured as follows.

::: moniker range=">=azure-devops"

```yml
  - deployment: DeploymentJob
    pool:
      vmImage: $(vmImageName)
    environment: $(environmentName)
```

The `deployment` keyword indicates that the job is a [deployment job](../process/deployment-jobs.md) targeting an [environment](../process/environments.md) to deploy to. The `environment` is automatically created in your project when the job is run.

The `pool` parameter specifies the deployment agent pool and uses the default agent pool if a `name` isn't specified. The agent runs on the operating system defined in the `vmImageName` variable, in this case `ubuntu-latest`.

::: moniker-end

::: moniker range="< azure-devops"

```yml
  - deployment: DeploymentJob
    pool:
      name: <your-pool-name>
    environment: $(environmentName)
```

The `deployment` keyword indicates that the job is a [deployment job](../process/deployment-jobs.md) targeting an [environment](../process/environments.md) to deploy to. The `environment` is automatically created in your project when the job is run.

The `pool` parameter specifies the deployment agent pool and must contain an agent with the capability to run the Python version specified in the pipeline.

::: moniker-end

The `strategy` keyword defines the deployment strategy. The `runOnce` keyword specifies that the deployment job runs once. The `deploy` keyword specifies the steps to run in the deployment job.

```yml
  strategy:
    runOnce:
      deploy:
        steps:
```

The `steps` in this stage first run the [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0) task, same as in the [Build stage](#build-stage), and then deploy the web app using the [AzureWebApp@1](/azure/devops/pipelines/tasks/reference/azure-web-app-v1) task. This task deploys the pipeline artifact `drop` to your web app.

```yml
- task: AzureWebApp@1
    displayName: 'Deploy Azure Web App : <your-web-app-name>'
  inputs:
    azureSubscription: $(azureServiceConnectionId)
    appName: $(webAppName)
    package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
```

The `azureSubscription` parameter contains the `azureServiceConnectionId` specified in the pipeline variables. The `appName` contains the value of the `webAppName` variable, and the `package` specifies the name and location of the *.zip* file to deploy.

Also, because the *python-vscode-flask-tutorial* repository contains the app startup command in a file named *startup.txt*, you can specify the app startup command by adding the parameter: `startUpCommand: 'startup.txt'`.

::: moniker-end

## Run the pipeline

You're now ready to try out the pipeline.

::: moniker range="< azure-devops"

### Configure a self-hosted agent

To use your own self-hosted build agent, you need to configure the agent to run Python. Downloading Python versions isn't supported on self-hosted agents. You must preinstall the Python version. Use the full installer to get a pip-compatible version of Python.

To avoid compatibility issues, match the Python version with the runtime version in your Azure App Services web app, as shown in the JSON output of the `az webapp up` command.

The desired Python version needs to be added to the tool cache on the self-hosted agent so the pipeline task can use it. Normally, the tool cache is located under the _work/_tool directory of the agent. Alternatively, you can override the path with the environment variable `AGENT_TOOLSDIRECTORY`. Under the tools directory, create the following directory structure based on your Python version:

```console
$AGENT_TOOLSDIRECTORY/
    Python/
        {version number}/
            {platform}/
                {tool files}
            {platform}.complete
```

The version number should follow the format of 1.2.3. The platform should either be x86 or x64. The tool files should be the unzipped Python version files. The `{platform}.complete` should be a 0-byte file that looks like `x86.complete` or `x64.complete` and just signifies the tool is properly installed in the cache.

For example, to use Python 3.11 on a 64-bit Windows machine, create the following directory structure:

```console
$AGENT_TOOLSDIRECTORY/
    Python/
        3.11.4/
            x64/
                {python files}
            x64.complete
```

If the machine hosting your agent already has the Python version you want to use, you can copy the files to the tool cache. If you don't have the Python version, you can download it from the [Python website](https://www.python.org/downloads/).

::: moniker-end

1. In the pipeline editor, select **Save and run**.
1. On the **Save and run** screen, add a commit message if desired and then select **Save and run**.

   You can watch the pipeline run by selecting the **Stages** or **Jobs** on the pipeline **Summary** page.

   :::image type="content" source="../media/python/pipeline-summary-stages-section.png" alt-text="Screenshot of pipeline run summary stages section.":::

   You can quickly return to the YAML editor by selecting the vertical dots at the upper right of the **Summary** page and selecting **Edit pipeline**.

   :::image type="content" source="../media/python/edit-pipeline-command.png" alt-text="Screenshot of edit pipeline comment from a build report.":::

   Each job and stage displays a green check mark as it completes successfully. If errors occur, they appear in the summary or in the job steps.

1. From the deployment job, select the **Deploy Azure Web App** task to display its output. To visit the deployed site, hold down <kbd>Ctrl</kbd> and select the URL after **App Service Application URL**.

   :::image type="content" source="../media/python/pipeline-stages.png" alt-text="Screenshot of pipeline stage steps.":::

   The app should appear as follows:

   :::image type="content" source="../media/python/app-results.png" alt-text="Screenshot of view of the sample app running on App Service.":::

>[!NOTE]
>If an app deployment fails because of a missing dependency, the *requirements.txt* file wasn't processed during deployment. This issue can occur if you create the web app directly in the portal rather than using the `az webapp up` command.
>
>The `az webapp up` command specifically sets the build action `SCM_DO_BUILD_DURING_DEPLOYMENT` to `true`. If you provision an app service through the portal, this action isn't automatically set.
>
>To set this action:
>1. On the portal page for your web app, select **Configuration** from the left navigation menu.
>1. On the **Application Settings** tab, select **New Application Setting**.
>1. In the popup that appears, set **Name** to `SCM_DO_BUILD_DURING_DEPLOYMENT`, set **Value** to `true`, and select **OK**.
>1. Select **Save** at the top of the **Configuration** page.
>1. Run the pipeline again. The dependencies should now install during deployment.

## Trigger a pipeline run

This pipeline is set to run whenever a change checks in to the code repository. For example, you can add a new feature to the app, or update the app's dependencies. To trigger a pipeline run, commit a change to the repository.

1. Go to the GitHub repository for your app.
1. Make a change to the code, such as changing the title of the app.
1. Commit the change.
1. Go to your pipeline and verify that a new run is created and is running.
1. When the run completes, verify that the change deployed to your web app.
1. In the Azure portal, go to your web app and select **Deployment Center** from the left navigation menu.
1. Select the **Logs** tab and verify that the new deployment is listed.

## Deploy Django apps to App Service

You can use Azure Pipelines to deploy Django apps to App Service on Linux if you're using a separate database. You can't use a SQLite database, because App Service locks the *db.sqlite3* file, preventing both reads and writes. This behavior doesn't affect an external database.

As explained in [Container startup process](/azure/app-service/containers/how-to-configure-python#container-startup-process), App Service automatically looks for a *wsgi.py* file in your app code, which typically contains the app object. If you want to customize the startup command, use the `startUpCommand` parameter in the `AzureWebApp@1` step of your YAML pipeline file.

When you use Django, you typically want to migrate the data models using `manage.py migrate` after deploying the app code. You can add `startUpCommand` with a post-deployment script for this purpose. For example, here's the `startUpCommand` property in the AzureWebApp@1 task. 

```yml
  - task: AzureWebApp@1
      displayName: 'Deploy Azure Web App : $(webAppName)'
      inputs:
        azureSubscription: $(azureServiceConnectionId)
        appName: $(webAppName)
        package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
        startUpCommand: 'python manage.py migrate'
```

## Run tests on the build agent

As part of your build process, you might want to run tests on your app code. Tests run on the build agent, so you need to install your dependencies into a virtual environment on the build agent. After the tests run, delete the virtual environment before you create the *.zip* file for deployment.

The following script elements illustrate this process. Place them before the `ArchiveFiles@2` task in the *azure-pipelines.yml* file. For more information, see [Run cross-platform scripts](../scripts/cross-platform-scripting.md?tabs=yaml). 

```yml
# The | symbol is a continuation character, indicating a multi-line script.
# A single-line script can immediately follow "- script:".
- script: |
    python -m venv .env
    source .env/bin/activate
    pip install setuptools
    pip install -r requirements.txt

  # The displayName shows in the pipeline UI when a build runs
  displayName: 'Install dependencies on build agent'

- script: |
    # Put commands to run tests here
    displayName: 'Run tests'

- script: |
    echo Deleting .env
    deactivate
    rm -rf .env
  displayName: 'Remove .env before zip'
```

You can also use a task like [PublishTestResults@2](../tasks/test/publish-test-results.md?tabs=yaml) to publish the test results to your pipeline. For more information, see [Run tests](./customize-python.md#run-tests).

## Clean up resources

If you're finished with the Azure resources you created in this tutorial, delete them to avoid incurring further charges.

- Delete the Azure DevOps project you created. Deleting the project deletes the pipeline and service connection.
- Delete the Azure resource group that contains the App Service and the App Service Plan. In the Azure portal, go to the resource group, select **Delete resource group**, and follow the prompts.
- Delete the Azure storage account that maintains the Cloud Shell file system. Close Cloud Shell, then find the resource group that begins with **cloud-shell-storage-**. Select **Delete resource group**, and follow the prompts.

## Related content

- [Customize Python apps in Azure Pipelines](./customize-python.md)
- [Configure Python app on App Service](/azure/app-service/containers/how-to-configure-python)
