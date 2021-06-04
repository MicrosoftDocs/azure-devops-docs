---
title: Build and deploy Python web apps
description: Use CI/CD with Azure Pipelines to automatically build, test, and deploy Python web apps to Azure App Service on Linux
ms.topic: tutorial
ms.assetid: 6f79a177-702f-4fb4-b714-bfdd0ecf1d84
ms.manager: barbkess
ms.author: kraigb
author: kraigb
ms.date: 06/04/2021
monikerRange: 'azure-devops'
ms.custom: devx-track-python, devx-track-azurecli
---

# Use CI/CD to deploy a Python web app to Azure App Service on Linux

[!INCLUDE [include](../includes/version-team-services.md)]

In this article, you use Azure Pipelines continuous integration and continuous delivery (CI/CD) to deploy a Python web app to Azure App Service on Linux. You begin by running app code from a GitHub repository locally. You then provision a target App Service through the Azure portal. Finally, you create an Azure Pipelines CI/CD pipeline that automatically builds the code and deploys it to the App Service whenever there's a commit to the repository.

## Create a repository for your app code

If you already have a Python web app to use, make sure it's committed to a GitHub repository. 

> [!NOTE]
> If your app uses Django and a SQLite database, it won't work for this walkthrough. For more information, see [considerations for Django](#considerations-for-django) later in this article. If your Django app uses a separate database, you can use it with this walkthrough.

If you need an app to work with, you can fork and clone the repository at [https://github.com/Microsoft/python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial). The code is from the tutorial [Flask in Visual Studio Code](https://code.visualstudio.com/docs/python/tutorial-flask).

To test the example app locally, from the folder containing the code, run the following appropriate commands for your operating system: 


```bash
# Mac/Linux
sudo apt-get install python3-venv  # If needed
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt
export set FLASK_APP=hello_app.webapp
python3 -m flask run
```

```powershell
# Windows
py -3 -m venv .env
.env\scripts\activate
pip install -r requirements.txt
$env:FLASK_APP = "hello_app.webapp"
python -m flask run
```

Open a browser and navigate to *http:\//localhost:5000* to view the app. When you're finished, close the browser, and stop the Flask server with **Ctrl**+**C**.

## Provision the target Azure App Service

The quickest way to create an App Service instance is to use the Azure command-line interface (CLI) through the interactive Azure Cloud Shell. In the following steps, you use [az webapp up](/cli/azure/webapp#az_webapp_up) to both provision the App Service and perform the first deployment of your app.

1. Sign in to the Azure portal at [https://portal.azure.com](https://portal.azure.com).

1. Open the Azure CLI by selecting the Cloud Shell button on the portal's toolbar:

   ![Azure Cloud Shell button on the Azure portal toolbar](../media/python/azure-cloud-shell-button.png)

1. The Cloud Shell appears along the bottom of the browser. Select **Bash** from the dropdown:

   ![Azure Cloud Shell appearance](../media/python/azure-cloud-shell-interface.png)

1. In the Cloud Shell, clone your repository using `git clone`. For the example app, use:

   ```bash
   git clone https://github.com/<your-alias>/python-sample-vscode-flask-tutorial
   ```
   
   Replace `<your-alias>` with the name of the GitHub account you used to fork the repository.
   

   > [!TIP]
   > To paste into the Cloud Shell, use **Ctrl**+**Shift**+**V**, or right-click and select **Paste** from the context menu.
   
    > [!NOTE]
    > The Cloud Shell is backed by an Azure Storage account in a resource group called *cloud-shell-storage-\<your-region>*. That storage account contains an image of the Cloud Shell's file system, which stores the cloned repository. There is a small cost for this storage. You can delete the storage account at the end of this article, along with other resources you create.

1. In the Cloud Shell, change directories into the repository folder that has your Python app, so the `az webapp up` command will recognize the app as Python.

   ```bash
   cd python-sample-vscode-flask-tutorial
   ```

1. In the Cloud Shell, use `az webapp up` to create an App Service and initially deploy your app. 

   ```azurecli
   az webapp up -n <your-appservice>
   ```

   Change `<your-appservice>` to a name for your app service that's unique across Azure. Typically, you use a personal or company name along with an app identifier, such as `<your-name>-flaskpipelines`. The app URL becomes *\<your-appservice>.azurewebsites.net*. 
   
   When the command completes, it shows JSON output in the Cloud Shell.


   > [!TIP]
   > If you encounter a "Permission denied" error with a *.zip* file, you may have tried to run the command from a folder that doesn't contain a Python app. The `az webapp up` command then tries to create a Windows app service plan, and fails. 

1. If your app uses a custom startup command, set the [az webapp config](/cli/azure/webapp/config?view=azure-cli-latest&preserve-view=true#az_webapp_config_set) property. For example, the *python-sample-vscode-flask-tutorial* app contains a file named *startup.txt* that contains its specific startup command, so you set the `az webapp config` property to `startup.txt`.

   1. From the first line of output from the previous `az webapp up` command, copy the name of your resource group, which is similar to **\<your-name>\_rg\_Linux\_\<your-region>**.

   1. Enter the following command, using your resource group name, your app service name (`<your-appservice>`), and your startup file or command (`startup.txt`).  

      ```azurecli
      az webapp config set -g <your-resource-group> -n <your-appservice> --startup-file <your-startup-file-or-command>
      ```
      
      Again, when the command completes, it shows JSON output in the Cloud Shell.

1. To see the running app, open a browser and go to *http:\//\<your-appservice>.azurewebsites.net*. If you see a generic page, wait a few seconds for the App Service to start, and refresh the page.

    > [!NOTE]
    > For a detailed description of the specific tasks performed by the `az webapp up` command, see [Provision an App Service with single commands](#provision-an-app-service-with-single-commands) at the end of this article.
    
## Create an Azure DevOps project and connect to Azure

To deploy to Azure App Service from Azure Pipelines, you need to establish a *service connection* between the two services.

1. In a browser, go to [dev.azure.com](https://dev.azure.com). If you don't yet have an account on Azure DevOps, select **Start free** and get a free account. If you have an account already, select **Sign in to Azure DevOps**.

    > [!IMPORTANT]
    > To simplify the service connection, use the same email address for Azure DevOps as you use for Azure.
    
1. Once you sign in, the browser displays your Azure DevOps dashboard, at the URL *https:\//dev.azure.com/\<your-organization-name>*. An Azure DevOps account can belong to one or more *organizations*, which are listed on the left side of the Azure DevOps dashboard. If more than one organization is listed, select the one you want to use for this walkthrough. By default, Azure DevOps creates a new organization using the email alias you used to sign in. 
   
   A project is a grouping for boards, repositories, pipelines, and other aspects of Azure DevOps. If your organization doesn't have any projects, enter the project name *Flask Pipelines* under **Create a project to get started**, and then select **Create project**. 

   ![First view of Azure DevOps dashboard](../media/python/azure-devops-dashboard.png)
   
   If your organization already has projects, select **New project** on the organization page. In the **Create new project** dialog box, enter the project name *Flask Pipelines*, and select **Create**.

1. From the new project page, select **Project settings** from the left navigation.

   ![Project settings command on the project dashboard](../media/python/project-settings.png)

1. On the **Project Settings** page, select **Pipelines** > **Service connections**, then select **New service connection**, and then select **Azure Resource Manager** from the dropdown. 

   ![Select Azure Resource Manager service connection](../media/python/service-connection-01.png)

1. In the **Add an Azure Resource Manager service connection** dialog box:
   1. Give the connection a name. Make note of the name to use later in the pipeline.
   1. For **Scope level**, select **Subscription**.
   1. Select the subscription for your App Service from the **Subscription** drop-down list. 
   1. Under **Resource Group**, select your resource group from the dropdown. 
   1. Make sure the option **Allow all pipelines to use this connection** is selected, and then select **OK**.

   ![New service connection dialog box](../media/python/service-connection-02.png)

   The new connection appears in the **Service connections** list, and is ready for Azure Pipelines to use from the project.

    > [!NOTE]
    > If you need to use an Azure subscription from a different email account, follow the instructions on [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-with-an-existing-service-principal).


## Create a Python-specific pipeline to deploy to App Service

1. From your project page left navigation, select **Pipelines**.

   ![Selecting Pipelines on the project dashboard](../media/python/select-pipelines.png)

1. Select **New pipeline**:

   ![New pipeline button on the pipelines list](../media/python/new-pipeline.png)

1. On the **Where is your code** screen, select **GitHub**. You may be prompted to sign into GitHub.

   ![Where is your code prompt](../media/python/where-is-your-code.png)

1. On the **Select a repository** screen, select the repository that contains your app, such as your fork of the example app. 

   ![Select a repository](../media/python/select-repository.png)

1. You may be prompted to enter your GitHub password again as a confirmation, and then GitHub prompts you to install the **Azure Pipelines** extension:

   ![Install Azure Pipelines extension on GitHub](../media/python/github-pipelines-install-01.png)

   On this screen, scroll down to the **Repository access** section, choose whether to install the extension on all repositories or only selected ones, and then select **Approve and install**:

   ![Install Azure Pipelines extension on GitHub approval](../media/python/github-pipelines-install-02.png)

1. On the **Configure your pipeline** screen, select **Python to Linux Web App on Azure**.

    Your new pipeline appears. When prompted, select the Azure subscription in which you created your Web App. 
   - Select the Web App
   - Select Validate and configure

    Azure Pipelines creates an **azure-pipelines.yml** file that defines your CI/CD pipeline as a series of *stages*, *Jobs*, and *steps*, where each step contains the details for different *tasks* and *scripts*. Take a look at the pipeline to see what it does. Make sure all the default inputs are appropriate for your code.


### YAML pipeline explained

The YAML file contains the following key elements:

- The `trigger` at the top indicates the commits that trigger the pipeline, such as commits to the `master` branch.
- The `variables` that parameterize the YAML template
   
   > [!TIP]
   > To avoid hard-coding specific variable values in your YAML file, you can define variables in the pipeline's web interface instead. For more information, see [Variables - Secrets](../process/variables.md#secret-variables).
- The `stages`
   - Build `stage`, which builds your project, and a Deploy stage, which deploys it to Azure as a Linux web app.
   - Deploy `stage` that also creates an Environment with default name same as the Web App. You can choose to modify the environment name.
- Each stage has a `pool` element that specifies one or more virtual machines (VMs) in which the pipeline runs the `steps`. By default, the `pool` element contains only a single entry for an Ubuntu VM. You can use a pool to run tests in multiple environments as part of the build, such as using different Python versions for creating a package.
- The `steps` element can contain children like `task`, which runs a specific task as defined in the Azure Pipelines [task reference](../tasks/index.md), and `script`, which runs an arbitrary set of commands. 

- The first task under Build stage is [UsePythonVersion](../tasks/tool/use-python-version.md), which specifies the version of Python to use on the build agent. The `@<n>` suffix indicates the version of the task. The `@0` indicates preview version.
Then we have script-based task that creates a virtual environment and installs dependencies from file (requirements.txt).

   ```yaml
      steps:
      - task: UsePythonVersion@0
         inputs:
           versionSpec: '$(pythonVersion)'
           displayName: 'Use Python $(pythonVersion)'
      - script: |
           python -m venv antenv
           source antenv/bin/activate
           python -m pip install --upgrade pip
           pip install setup
           pip install -r requirements.txt
         workingDirectory: $(projectRoot)
         displayName: "Install requirements"
   ```


- Next step creates the *.zip* file that the steps under deploy stage of the pipeline deploys. To create the *.zip* file, add an [ArchiveFiles](../tasks/utility/archive-files.md) task to the end of the YAML file:

   ```yaml
   - task: ArchiveFiles@2
     inputs:
       rootFolderOrFile: '$(Build.SourcesDirectory)'
       includeRootFolder: false
       archiveType: 'zip'
       archiveFile: '$(Build.ArtifactStagingDirectory)/Application$(Build.BuildId).zip'
       replaceExistingArchive: true
       verbose: # (no value); this input is optional
   - publish: $(Build.ArtifactStagingDirectory)/Application$(Build.BuildId).zip
     displayName: 'Upload package'
     artifact: drop
   ```

   You use `$()` in a parameter value to reference variables. The built-in `Build.SourcesDirectory` variable contains the location on the build agent where the pipeline cloned the app code. The `archiveFile` parameter indicates where to place the *.zip* file. In this case, the `archiveFile` parameter uses the built-in variable `Build.ArtifactsStagingDirectory`. 

   > [!IMPORTANT]
   > When deploying to Azure App Service, be sure to use `includeRootFolder: false`. Otherwise, the contents of the *.zip* file are put in a folder named *s*, for "sources," which is replicated on the App Service. The App Service on Linux container then can't find the app code.

- Then we have the task to upload the artifacts.

- In the Deploy stage, we use the `deployment` keyword to define a [deployment job](../process/deployment-jobs.md) targeting an [environment](../process/environments.md). By using the template, an environment with same name as the Web app is automatically created if it doesn't already exist. Alternatively you can pre-create the environment and provide the `environmentName`

- Within the deployment job, first task is [UsePythonVersion](../tasks/tool/use-python-version.md), which specifies the version of Python to use on the build agent. 
- We then use the [AzureWebApp](../tasks/deploy/azure-rm-web-app.md) task to deploy the *.zip* file to the App Service you identified by the `azureServiceConnectionId` and `webAppName` variables at the beginning of the pipeline file. Paste the following code at the end of the file:

    ```yaml
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
            displayName: 'Deploy Azure Web App : {{ webAppName }}'
            inputs:
              azureSubscription: $(azureServiceConnectionId)
              appName: $(webAppName)
              package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip

              # The following parameter is specific to the Flask example code. You may
              # or may not need a startup command for your app.

              startUpCommand: 'gunicorn --bind=0.0.0.0 --workers=4 startup:app'
    ```

    The `StartupCommand` parameter shown here is specific to the *python-vscode-flask-tutorial* example code, which defines the app in the *startup.py* file. By default, Azure App Service looks for the Flask app object in a file named *app.py* or *application.py*. If your code doesn't follow this pattern, you need to customize the startup command. Django apps may not need customization at all. For more information, see [How to configure Python on Azure App Service - Customize startup command](/azure/app-service/containers/how-to-configure-python#customize-startup-command).

    Also, because the *python-vscode-flask-tutorial* repository contains the same startup command in a file named *startup.txt*, you could specify that file in the `StartupCommand` parameter rather than the command, by using `StartupCommand: 'startup.txt'`. 

## Run the pipeline

You're now ready to try it out! 

1. Select **Save** at upper right in the editor, and in the pop-up window, add a commit message and select **Save**. 
   
1. Select **Run** on the pipeline editor, and select **Run** again in the **Run pipeline** dialog box. Azure Pipelines queues another pipeline run, acquires an available build agent, and has that build agent run the pipeline.
   
   The pipeline takes a few minutes to complete, especially the deployment steps. You should see green checkmarks next to each of the steps.
   
   If there's an error, you can quickly return to the YAML editor by selecting the vertical dots at upper right and selecting **Edit pipeline**:
   
   ![Edit pipeline comment from a build report](../media/python/edit-pipeline-command.png)
   
1. From the build page, select the **Azure Web App task** to display its output. To visit the deployed site, hold down the **Ctrl** key and select the URL after **App Service Application URL**.
   
   If you're using the Flask example, the app should appear as follows:

   ![View of the Flask example code running on App Service](../media/python/app-results.png)


> [!IMPORTANT]
> If your app fails because of a missing dependency, then your *requirements.txt* file was not processed during deployment. This behavior happens if you created the web app directly on the portal rather than using the `az webapp up` command as shown in this article.
> 
> The `az webapp up` command specifically sets the build action `SCM_DO_BUILD_DURING_DEPLOYMENT` to `true`. If you provisioned the app service through the portal, however, this action is not automatically set.
> 
> The following steps set the action:
> 1. Open the [Azure portal](https://portal.azure.com), select your App Service, then select **Configuration**.
> 1. Under the **Application Settings** tab, select **New Application Setting**.
> 1. In the popup that appears, set **Name** to `SCM_DO_BUILD_DURING_DEPLOYMENT`, set **Value** to `true`, and select **OK**.
> 1. Select **Save** at the top of the **Configuration** page.
> 1. Run the pipeline again. Your dependencies should be installed during deployment.

## Run a post-deployment script

A post-deployment script can, for example, define environment variables expected by the app code. Add the script as part of the app code and execute it using startup command. 

To avoid hard-coding specific variable values in your YAML file, you can instead define variables in the pipeline's web interface and then refer to the variable name in the script. For more information, see [Variables - Secrets](../process/variables.md#secret-variables).


## Considerations for Django

As noted earlier in this article, you can use Azure Pipelines to deploy Django apps to Azure App Service on Linux, provided that you're using a separate database. You can't use a SQLite database, because App Service locks the *db.sqlite3* file, preventing both reads and writes. This behavior doesn't affect an external database.

As described in [Configure Python app on App Service - Container startup process](/azure/app-service/containers/how-to-configure-python#container-startup-process), App Service automatically looks for a *wsgi.py* file within your app code, which typically contains the app object. If you need to customize the startup command in any way, use the `StartupCommand` parameter in the `AzureWebApp@1` step of your YAML pipeline file, as described in the previous section.

When using Django, you typically want to migrate the data models using `manage.py migrate` after deploying the app code. You can add `startUpCommand` with post-deployment script for this purpose:

```yaml
startUpCommand:  python3.6 manage.py migrate
```

## Run tests on the build agent

As part of your build process, you may want to run tests on your app code. Tests run on the build agent, so you probably need to first install your dependencies into a virtual environment on the build agent computer. After the tests run, delete the virtual environment before you create the *.zip* file for deployment. The following script elements illustrate this process. Place them before the `ArchiveFiles@2` task in the *azure-pipelines.yml* file. For more information, see [Run cross-platform scripts](../scripts/cross-platform-scripting.md?tabs=yaml). 

```yaml
# The | symbol is a continuation character, indicating a multi-line script.
# A single-line script can immediately follow "- script:".
- script: |
    python3.6 -m venv .env
    source .env/bin/activate
    pip3.6 install setuptools
    pip3.6 install -r requirements.txt

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

You can also use a task like [PublishTestResults@2](../tasks/test/publish-test-results.md?tabs=yaml) to make test results appear in the pipeline results screen. For more information, see [Build Python apps - Run tests](python.md#run-tests).

## Provision an App Service with single commands

The [az webapp up](/cli/azure/webapp#az_webapp_up) command used earlier in this article is a convenient method to provision the App Service and initially deploy your app in a single step. If you want more control over the deployment process, you can use single commands to accomplish the same tasks. For example, you might want to use a specific name for the resource group, or create an App Service within an existing App Service Plan.

The following steps perform the equivalent of the `az webapp up` command:

1. Create a resource group.
   
   A resource group is a collection of related Azure resources. Creating a resource group makes it easy to delete all those resources at once when you no longer need them. In the Cloud Shell, run the following command to create a resource group in your Azure subscription. Set a location for the resource group by specifying the value of `<your-region>`. JSON output appears in the Cloud Shell when the command completes successfully.

   ```azurecli
   az group create -l <your-region> -n <your-resource-group>
   ```

1. Create an App Service Plan.
   
   An App Service runs inside a VM defined by an App Service Plan. Run the following command to create an App Service Plan, substituting your own values for `<your-resource-group>` and `<your-appservice-plan>`. The `--is-linux` is required for Python deployments. If you want a pricing plan other than the default F1 Free plan, use the `sku` argument. The `--sku B1` specifies the lower-price compute tier for the VM. You can easily delete the plan later by deleting the resource group.

   ```azurecli
   az appservice plan create -g <your-resource-group> -n <your-appservice-plan> --is-linux --sku B1
   ```

   Again, you see JSON output in the Cloud Shell when the command completes successfully.

1. Create an App Service instance in the plan.
   
   Run the following command to create the App Service instance in the plan, replacing `<your-appservice>` with a name that's unique across Azure. Typically, you use a personal or company name along with an app identifier, such as `<your-name>-flaskpipelines`. The command fails if the name is already in use. By assigning the App Service to the same resource group as the plan, it's easy to clean up all the resources at once.

   ```azurecli
   az webapp create -g <your-resource-group> -p <your-appservice-plan> -n <your-appservice> --runtime "Python|3.6"
   ```

    > [!NOTE]
    > If you want to deploy your code at the same time you create the app service, you can use the `--deployment-source-url` and `--deployment-source-branch` arguments with the `az webapp create` command. For more information, see [az webapp create](/cli/azure/webapp?view=azure-cli-latest&preserve-view=true#az_webapp_create).

   > [!TIP]
   > If you see the error message "The plan (name) doesn't exist", and you're sure that the plan name is correct, check that the resource group specified with the `-g` argument is also correct, and the plan you identify is part of that resource group. If you misspell the resource group name, the command doesn't find the plan in that nonexistent resource group, and gives this particular error.
   
1. If your app requires a custom startup command, use the `az webapp config set` command, as described earlier in [Provision the target Azure App Service](#provision-the-target-azure-app-service). For example, to customize the App Service with your resource group, app name, and startup command, run:
   
    ```azurecli
   az webapp config set -g <your-resource-group> -n <your-appservice> --startup-file <your-startup-command-or-file>
   ```

    The App Service at this point contains only default app code. You can now use Azure Pipelines to deploy your specific app code.

## Clean up resources

To avoid incurring ongoing charges for any Azure resources you created in this walkthrough, such as a B1 App Service Plan, delete the resource group that contains the App Service and the App Service Plan. To delete the resource group from the Azure portal, select **Resource groups** in the left navigation. In the resource group list, select the **...** to the right of the resource group you want to delete, select **Delete resource group**, and follow the prompts.

You can also use [az group delete](/cli/azure/group?view=azure-cli-latest&preserve-view=true#az_group_delete) in the Cloud Shell to delete resource groups.

To delete the storage account that maintains the file system for Cloud Shell, which incurs a small monthly charge, delete the resource group that begins with **cloud-shell-storage-**.

## Next steps

- [Build Python apps](python.md)
- [Learn about build agents](../agents/agents.md)
- [Configure Python app on App Service](/azure/app-service/containers/how-to-configure-python)
