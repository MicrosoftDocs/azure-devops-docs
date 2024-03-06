---
title: Build and deploy Python web apps with Azure Pipelines
description: Use CI/CD with Azure Pipelines to automatically build, test, and deploy Python web apps to Azure App Service on Linux.
ms.topic: how-to
ms.assetid: 6f79a177-702f-4fb4-b714-bfdd0ecf1d84
ms.author: jukullam
author: juliakm
ms.date: 03/15/2024
monikerRange: '<= azure-devops'
ms.custom: devx-track-python, devx-track-azurecli, freshness-fy22q2, arm2024

---

# Use Azure Pipelines to build and deploy a Python web app to Azure App Service on Linux

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use Azure Pipelines' for continuous integration and continuous delivery (CI/CD) to build and deploy a Python web app to Azure App Service on Linux. Your pipeline automatically builds and deploys your Python web app to App Service whenever there's a commit to the repository.

In this article, you learn how to:

> [!div class="checklist"]
> * Create an Azure App Service instance to host your Python web app.
> * Create an Azure DevOps project and connect it to Azure.
> * Create a Python-specific pipeline to deploy your app to the App Service.
> * Run the pipeline and view the deployed app.

## Prerequisites

::: moniker range=">=azure-devops"

* An Azure subscription, create a [free account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 

::: moniker-end

::: moniker range="< azure-devops"

* An Azure subscription, create a [free account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps collection. 
* An ability to run pipelines on a self-hosted agent. 

::: moniker-end

## Create a repository for your app code

Fork the sample repository at [https://github.com/Microsoft/python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) to your GitHub account.

### Test your app locally

Build and run the app locally to make sure it works.

On your local host, clone your GitHub repository. Use the following command, replacing `<repository-url>` with the URL of your forked repository.

   ```git
   git clone <repository-url>
   ```

To build and run the sample app, run the following commands.

# [Linux](#tab/linux)

```bash
python3 -m venv .env
source .env/bin/activate
pip install --upgrade pip
pip install -r ./requirements.txt
export set FLASK_APP=hello_app.webapp
python3 -m flask run
```

# [Windows PowerShell](#tab/windows-powershell)

```powershell
py -m venv .env
.env\scripts\activate
pip install -r ./requirements.txt
$env:FLASK_APP = "hello_app.webapp"
flask run
```

---

To view the app, open a browser window and go to *http://localhost:5000*. Verify that you see the title `Visual Studio Flask Tutorial`. 

When you're finished, close the browser windows and stop the Flask server with `Ctrl-C`.

### Open a Cloud Shell

1. Sign in to the Azure portal at [https://portal.azure.com](https://portal.azure.com).

1. Open the Azure CLI by selecting the Cloud Shell button on the portal's toolbar.

   ![Azure Cloud Shell button on the Azure portal toolbar](../media/python/azure-cloud-shell-button.png)

1. The Cloud Shell appears along the bottom of the browser. Select **Bash** from the dropdown.

   ![Azure Cloud Shell appearance](../media/python/azure-cloud-shell-interface.png)

### Create an Azure App Service web app

Create your Azure App Service web app from the Cloud Shell in the Azure portal. Use [az webapp up](/cli/azure/webapp#az-webapp-up) to both provision the App Service and do the first deployment of your app.

> [!TIP]
> To paste into the Cloud Shell, use **Ctrl-Shift-V**, or right-click and select **Paste** from the context menu.

1. Clone your repository with the following command, replacing `<repository-url>` with the URL of your forked repository.

   ```bash
   git clone <respository-url>
   ```

1. Change directory to the closed repository. folder that has your Python app, so the `az webapp up` command recognizes the app as Python.


   ```bash
   cd python-sample-vscode-flask-tutorial
   ```

1. Use `az webapp up` to create an App Service and initially deploy your app. Replace `<YOUR_WEB_APP_NAME>` with a name that is unique across Azure. Typically, you use a personal or company name along with an app identifier, such as `<your-name>-flaskpipelines`. The app URL becomes *\<your-appservice>.azurewebsites.net*.

   ```azurecli
   az webapp up --name <YOUR_WEB_APP_NAME>
   ```

   When the command completes, it shows JSON output in the Cloud Shell.

    > [!NOTE]
    > The `az webapp up` command does the following actions:
    >
    >* Create a default [resource group](/cli/azure/group#az-group-create).
    >
    >* Create a default [App Service plan](/cli/azure/appservice/plan#az-appservice-plan-create).
    >
    >* [Create an app](/cli/azure/webapp#az-webapp-create) with the specified name.
    >
    >* [Zip deploy](/azure/app-service/deploy-zip.md#deploy-a-zip-package) all files from the current working directory, [with build automation enabled](/azure/app-service/deploy-zip.md#enable-build-automation-for-zip-deploy).
    >
    >* Cache the parameters locally in the *.azure/config* file so that you don't need to specify them again when deploying later with `az webapp up` or other `az webapp` commands from the project folder. The cached values are used automatically by default.
    >
    > You can override the default action with your own values using the command parameters.  For more information, see [az webapp up](/cli/azure/webapp#az-webapp-up).

1. The *python-sample-vscode-flask-tutorial* app has a *startup.txt* file that contains the specific startup command for the web app. Set the `az webapp config` property to `startup.txt`.

    1. From the `az webapp up` command output, copy the `resourcegroup` value.

    1. Enter the following command, using the resource group, your app service name (`<YOUR_WEB_APP_NAME>`), and your startup file or command (`startup.txt`).  

      ```azurecli
      az webapp config set --resource-group <your-resource-group> --name <YOUR_WEB_APP_NAME> --startup-file <your-startup-file-or-command>
      ```

      When the command completes, it shows JSON output.

1. To see the running app, open a browser and go to `URL` shown in the `az webapp up` command output. If you see a generic page, wait a few seconds for the App Service to start, and refresh the page. Verify that you see the title `Visual Studio Flask Tutorial`. 

## Create an Azure DevOps Project and connect to Azure

### Create an Azure DevOps project

1. In a browser, go to [dev.azure.com](https://dev.azure.com) and sign in.
1. Select your organization.
1. Create a new project by selecting **New project** or **Create project** if creating the first project in the organization.
1. Enter a project name and select **Create**.
 
### Create a service connection

A service connection allows you to create a connection to provide authenticated access from Azure Pipelines to external and remote services. To deploy to your Azure App Service web app, create a service connection to the resource group containing the web app.

1. From the new project page, select **Project settings** from the left navigation.

   ![Project settings command on the project dashboard](../media/python/project-settings.png)

1. On the **Project Settings** page, select **Service connections** in the **Pipelines** section of the menu.
1. Select **Create service connection**.

   ![Select Azure Resource Manager service connection](../media/service-connection-type-devops-services.png)

1. Select **Azure Resource Manager** and select **Next**. 
1. If your organization uses an authentication method such as Microsoft Entra Workload identity federation or a service principal, you see a dialog to select the method. Select the **Authentication method** you want to use and select **Next**.
1. Enter the following information in the **Add an Azure Resource Manager service connection** dialog.
   1. For **Scope level**, select **Subscription**.
   1. Select the subscription for your App Service from the **Subscription** drop-down list. 
   1. If you're using username and password to authenticate, a browser window opens for you to sign in to your Microsoft account.
   1. Under **Resource Group**, select web apps's resource group from the dropdown. 
   1. Enter a descriptive connection name. Make note of the name to use later in the pipeline.
   1. Select **Grant access permissions to all pipelines** and select **Save**.

    ![New service connection dialog box](../media/azure-service-connection-settings-devops-services.png)

   The new connection appears in the **Service connections** list, and is ready for Azure Pipelines to use from the project.

## Create a pipeline

1. On the left navigation menu, select **Pipelines**.

   ![Selecting Pipelines on the project dashboard](../media/python/select-pipelines.png)

1. Select **Create Pipeline**.

    :::image type="content" source="media/create-first-pipeline.png" alt-text="New pipeline button on the pipelines list.":::

1. In the **Where is your code** dialog, select **GitHub**. You might be prompted to sign into GitHub.

   ::: image type="content" source="../media/python/where-is-your-code.png" alt-text="Screenshot of select GitHub as the location of your code." :::

1. On the **Select a repository** screen, select the forked sample repository. 

   ![Select a repository](../media/python/select-repository.png)

1. You might be prompted to enter your GitHub password again as a confirmation, and then GitHub prompts you to install the **Azure Pipelines** extension.

   ![Install Azure Pipelines extension on GitHub](../media/python/github-pipelines-install-01.png)

   On this screen, scroll down to the **Repository access** section, choose whether to install the extension on all repositories or only selected ones, and then select **Approve and install**:

   ![Install Azure Pipelines extension on GitHub approval](../media/python/github-pipelines-install-02.png)

1. In the **Configure your pipeline** dialog, select **Python to Linux Web App on Azure**.
1. Select your Azure subscription and select **Continue**.  
1. If you're using your username and password to authenticate, a browser opens for you to sign in to your Microsoft account.
1. Select your web app name from the dropdown list and select **Validate and configure**.

Azure Pipelines creates a **azure-pipelines.yml** file and displays it in the YAML pipelines editor. The pipeline file defines your CI/CD pipeline as a series of *stages*, *Jobs*, and *steps*, where each step contains the details for different *tasks* and *scripts*. Take a look at the pipeline to see what it does. Make sure all the default inputs are appropriate for your code.

### YAML pipeline explained

The YAML file contains the following key elements:

* The `trigger` at the top indicates the commits that trigger the pipeline, such as commits to the `main` branch.
* The `variables` parameterize the YAML template.   You use `$()` in a parameter value to reference variables. 

    > [!TIP]
    > To avoid hard-coding specific variable values in your YAML file, you can define variables in the pipeline's web interface instead. For more information, see [Variables](../process/variables.md#secret-variables).

* There are two stages.
  * The `Build` stage builds your project.
  * The `Deploy` stage` that deploys a `.zip` archive to your Azure Services web app.  

* Each stage contains `jobs` use the agents defined in the `pool` element to run a series of `steps`.
* The `steps` element contains tasks and scripts to perform the work for the job.

The following sections describe the key elements of the pipeline that is generated by the **Python to Linux Web App on Azure** template using the example repository.

#### Variables

The `variables` section contains the following variables:

```yml
variables:
# Azure Resource Manager connection created during pipeline creation
azureServiceConnectionId: 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

# Web app name
webAppName: '<YOUR_WEB_APP_NAME>'

# Agent VM image name
vmImageName: 'ubuntu-latest'

# Environment name
environmentName: '<YOUR_WEB_APP_NAME>'

# Project root folder. Point to the folder containing manage.py file.
projectRoot: $(System.DefaultWorkingDirectory)

# Python version: 3.10
pythonVersion: '3.10'

```
 
|**Variable**|**Description**|
|--|---|
|`azureServiceConnectionId`|The ID or name of the Azure Resource Manager service connection.|
|`webAppName`|The name of the web app.|
|`vmImageName`|The name of the operating system to use for the build agent.|
|`environmentName`|The name of the environment used in the deployment stage.|
|`projectRoot`|The folder containing the app code.|
|`pythonVersion`|The version of Python to use on the build agent. You should match the version with the runtime version of your web app shown in the output of the `az webapp up` command.|

#### Build stage

The build stage contains a single job that runs on the operating system defined in the vmImageName variable.

```yml
  - job: BuildJob
    pool:
      vmImage: $(vmImageName)
```


The job contains multiple steps:

1. Install the Python version using for the build. This step uses the [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0) task. The version is defined in the `pythonVersion` variable.

   ```yml
      - task: UsePythonVersion@0
         inputs:
           versionSpec: '$(pythonVersion)'
           displayName: 'Use Python $(pythonVersion)'
    ```

1. This step uses a script to create a virtual Python environment and installs the app's dependencies. The `requirements.txt` file contains the dependencies. The `--target` parameter specifies the location to install the dependencies. The `workingDirectory` parameter specifies the location of the app code.

    ```yml
      - script: |
           python -m venv antenv
           source antenv/bin/activate
           python -m pip install --upgrade pip
           pip install setup
           pip install --target="./.python_packages/lib/site-packages" -r ./requirements.txt
         workingDirectory: $(projectRoot)
         displayName: "Install requirements"
   ```

1. The [ArchiveFiles](/azure/devops/pipelines/tasks/reference/archive-files-v2) task the *.zip* archive containing the web app. The `.zip` file is uploaded to the pipeline as an artifact named `drop`. The `.zip` file is used in the deployment stage to deploy the app to the web app.

    ```yml
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
    ```


   |**Parameter**|**Description**|
   |---|---|
   |`rootFolderOrFile`|The location of the app code.|
   |`includeRootFolder`|Indicates whether to include the root folder in the *.zip* file. Set this parameter to `false` otherwise, the contents of the *.zip* file are put in a folder named *s* and App Service on Linux container can't find the app code|
   |`archiveType`|The type of archive to create.|
   |`archiveFile`|The location of the *.zip* file to create.|
   |`replaceExistingArchive`|Indicates whether to replace an existing archive if the file already exists.|
   |`upload`|The location of the *.zip* file to upload.|
   |`artifact`|The name of the artifact to create.|

#### Deployment stage

In the generated pipeline file, the deployment stage is run if the build stage completes successfully. The following keywords define this behavior:

```yml
  dependsOn: Build
  condition: succeeded()
```

The deployment stage contains a single deployment job configured with the following keywords:

```yml
  - deployment: DeploymentJob
    pool:
      vmImage: $(vmImageName)
    environment: $(environmentName)
```


|**Keyword**|**Description**|
|--|---|
|`deployment`|Indicates that the job is a [deployment job](../process/deployment-jobs.md) targeting an [environment](../process/environments.md).|
|`pool`|Specifies deployment agent. The `vmImage` keyword identifies the operating system for the agent's VM image|
|`environment`|Specifies the environment to deploy to.|


The `startegy` keyword is used to define the deployment strategy. The `runOnce` keyword specifies that the deployment job runs once. The `deploy` keyword specifies the steps to run in the deployment job.

```yml
  strategy:
    runOnce:
      deploy:
        steps:
```

The `steps` in the generated pipeline are:

1. Use the [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0) task to specify the version of Python to use on the build agent. The version is defined in the `pythonVersion` variable.

   ```yml
    - task: UsePythonVersion@0
      inputs:
        versionSpec: '$(pythonVersion)'
      displayName: 'Use Python version'
   ```

1. Deploy the web app using the [AzureWebApp@1](/azure/devops/pipelines/tasks/reference/azure-web-app-v1). This task deploys the pipeline artifact `drop` to your web app.

   ```yml
             - task: AzureWebApp@1
            displayName: 'Deploy Azure Web App : <YOUR_WEB_APP_NAME>'
            inputs:
              azureSubscription: $(azureServiceConnectionId)
              appName: $(webAppName)
              package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
    ```

   |**Parameter**|**Description**|
   |--|---|
   |`azureSubscription`|The Azure Resource Manager service connection ID or name to use.|
   |`appName`|The name of the web app.|
   |`package`|The location of the *.zip* file to deploy.|

    Also, because the *python-vscode-flask-tutorial* repository contains the same startup command in a file named *startup.txt*, you could specify that file in the `StartupCommand` parameter: `StartupCommand: 'startup.txt'`. 

## Run the pipeline

You're now ready to try it out! 

1. Select **Save and run** at upper right in the editor.
1. In the **Save and run** dialog, add a commit message then select **Save and run**.

You can watch the pipeline as it runs by selected the Stages or Jobs link in the pipeline run summary. There are green check marks next to each stage and job as it completes successfully. If errors occur, they're displayed in the summary or in the job view. You can quickly return to the YAML editor by selecting the vertical dots at upper right and selecting **Edit pipeline**:

   ![Edit pipeline comment from a build report](../media/python/edit-pipeline-command.png)

1. From the build page, select the **Azure Web App task** to display its output. To visit the deployed site, hold down the **Ctrl** key and select the URL after **App Service Application URL**.

   If you're using the Flask example, the app should appear as follows:

   ![View of the Flask example code running on App Service](../media/python/app-results.png)

## Trigger a pipeline run

To trigger a pipeline run, you can commit a change to the repository. For example, you can add a new feature to the app, or update the app's dependencies.

1. Go to your GitHub repository.
1. Make a change to the code, such as changing the title of the app.
1. Commit the change to your repository.
1. Go to your pipeline and verify a new run is created.
1. When the run completes, verify the app is updated by visiting the URL of the app service.

> [!IMPORTANT]
> If your app fails because of a missing dependency, then your *requirements.txt* file was not processed during deployment. This behavior happens if you created the web app directly on the portal rather than using the `az webapp up` command as shown in this article.
> 
> The `az webapp up` command specifically sets the build action `SCM_DO_BUILD_DURING_DEPLOYMENT` to `true`. If you provisioned the app service through the portal, however, this action is not automatically set.
> 
> The following steps set the action:
>
> 1. Open the [Azure portal](https://portal.azure.com), select your App Service, then select **Configuration**.
> 1. Under the **Application Settings** tab, select **New Application Setting**.
> 1. In the popup that appears, set **Name** to `SCM_DO_BUILD_DURING_DEPLOYMENT`, set **Value** to `true`, and select **OK**.
> 1. Select **Save** at the top of the **Configuration** page.
> 1. Run the pipeline again. Your dependencies should be installed during deployment.

## Run a post-deployment script

A post-deployment script can, for example, define environment variables expected by the app code. Add the script as part of the app code and execute it using startup command. 

To avoid hard-coding specific variable values in your YAML file, you can define variables in the pipeline's web interface and refer to the variable name in the script. For more information, see [Variables](../process/variables.md).

## Considerations for Django

As noted earlier in this article, you can use Azure Pipelines to deploy Django apps to Azure App Service on Linux, if you're using a separate database. You can't use a SQLite database, because App Service locks the *db.sqlite3* file, preventing both reads and writes. This behavior doesn't affect an external database.

As described in [Configure Python app on App Service - Container startup process](/azure/app-service/containers/how-to-configure-python#container-startup-process), App Service automatically looks for a *wsgi.py* file within your app code, which typically contains the app object. If you want to customize the startup command in any way, use the `StartupCommand` parameter in the `AzureWebApp@1` step of your YAML pipeline file, as described in the previous section.

When using Django, you typically want to migrate the data models using `manage.py migrate` after deploying the app code. You can add `startUpCommand` with post-deployment script for this purpose:

```yml
startUpCommand:  python3.7 manage.py migrate
```

## Run tests on the build agent

As part of your build process, you might want to run tests on your app code. Tests run on the build agent, so you probably need to first install your dependencies into a virtual environment on the build agent computer. After the tests run, delete the virtual environment before you create the *.zip* file for deployment. The following script elements illustrate this process. Place them before the `ArchiveFiles@2` task in the *azure-pipelines.yml* file. For more information, see [Run cross-platform scripts](../scripts/cross-platform-scripting.md?tabs=yaml). 

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

You can also use a task like [PublishTestResults@2](../tasks/test/publish-test-results.md?tabs=yaml) to make test results appear in the pipeline results screen. For more information, see [Build Python apps - Run tests](customize-python.md#run-tests).

## Clean up resources

To avoid incurring charges on the Azure resources created in this tutorial, delete the resource group that contains the App Service and the App Service Plan. To delete the resource group from the Azure portal, select **Resource groups** in the left navigation. In the resource group list, select the **...** to the right of the resource group you want to delete, select **Delete resource group**, and follow the prompts.

You can also use the Cloud Shell to delete resource groups.

```azurecli
az group delete --name <RESOURCE_GROUP> --no-wait --yes
```

To delete the storage account that maintains the file system for Cloud Shell, which incurs a small monthly charge, delete the resource group that begins with **cloud-shell-storage-**.

To list your resource groups for your subscriptions:

```azurecli
az group list 
```

## Next steps

* [Build Python apps](python.md)
* [Learn about build agents](../agents/agents.md)
* [Configure Python app on App Service](/azure/app-service/containers/how-to-configure-python)

## Related articles

If you encounter an error, see [Troubleshoot Python apps](../troubleshooting/python.md) for help.
