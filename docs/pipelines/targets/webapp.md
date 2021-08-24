---
title: Deploy an Azure Web App
description: Deploy to Azure Web Apps from Azure Pipelines or TFS
services: vsts
ms.topic: conceptual
ms.assetid:
ms.custom: seodec18
ms.author: jukullam
author: juliakm
ms.date: 08/23/2021
monikerRange: '>= tfs-2017'
---

# Deploy an Azure Web App

[!INCLUDE [version-tfs-2017-rtm](../includes/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

You can use Azure Pipelines to continuously deploy your web app to [Azure App Service](/azure/app-service/overview) on every successful build. 

Azure App Service is a managed environment for hosting web applications, REST APIs, and mobile back ends. You can develop in your favorite languages, including .NET, Python, and JavaScript. 

You'll use the [Azure Web App task](../tasks/deploy/azure-rm-web-app.md) to deploy to Azure App Service in your pipeline. For more complicated scenarios such as needing to use XML parameters in your deploy, you can use the [Azure App Service Deploy task](../tasks/deploy/azure-rm-web-app-deployment.md).  

To learn how to deploy to an Azure Web App for Linux Containers, see [Deploy an Azure Web App Container](webapp-on-container-linux.md). 

::: moniker range="tfs-2017"

> [!NOTE]
> This guidance applies to Team Foundation Server (TFS) version 2017.3 and later.

::: moniker-end

## Prerequisites

* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
[!INCLUDE [include](../includes/prerequisites.md)]


## Create an Azure App Service in the Azure portal

Create an Azure App Service on Linux or Windows with Azure Cloud Shell. To get started:

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. Launch the Cloud Shell from the upper navigation pane of the portal.
    :::image type="content" source="media/deploy-to-azure/portal-launch-icon.png" alt-text="Open the Cloud Shell.":::

For more information, see [Overview of Azure Cloud Shell](/azure/cloud-shell/overview).


# [Linux](#tab/linux)

Create an Azure App Service on Linux.

```azurecli
# Create a resource group
az group create --location eastus2 --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan 
az webapp create -g myapppipeline-rg -p myapp-service-plan -n my-app-dotnet --runtime "DOTNETCORE|3.1" 
```
# [Windows](#tab/windows)

Create an Azure App Service on Linux.

```azurecli
# Create a resource group
az group create --location eastus2 --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan

# Create an App Service from the plan 
az webapp create -g myapppipeline-rg -p myapp-service-plan -n my-app-dotnet-win --runtime "DOTNETCORE|3.1" 
```
---

## Build your app with Azure Pipelines
#### [YAML](#tab/yaml/)

::: moniker range="azure-devops"

To get started, fork the following repository into your GitHub account.

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

### Create your pipeline

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Go to **Pipelines**, and then select **New Pipeline**.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your repository.

1. You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve & install**.

1.  When the **Configure** tab appears, select **ASP.NET Core**.

1. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

###  Add the Azure Web App task

1. Use the Task assistant to add the [Azure Web App](../tasks/deploy/azure-rm-web-app.md) task. 
   
   :::image type="content" source="media/deploy-to-azure/azure-web-app-task.png" alt-text="Azure web app task.":::

1. Select **Azure Resource Manager** for the **Connection type** and choose your **Azure subscription**. Make sure to **Authorize** your connection. 

1. Select  **Web App on Linux** and enter your `azureSubscription`, `appName`, and `package`. Your complete YAML should look like this. 

    ```yaml
    variables:
      buildConfiguration: 'Release'
    
    steps:
    - script: dotnet build --configuration $(buildConfiguration)
      displayName: 'dotnet build $(buildConfiguration)'
    - task: DotNetCoreCLI@2
      inputs:
        command: 'publish'
        publishWebProjects: true
    - task: AzureWebApp@1
      inputs:
        azureSubscription: '<Azure service connection>'
        appType: 'webAppLinux'
        appName: '<Name of web app>'
        package: '$(System.DefaultWorkingDirectory)/**/*.zip'
    ```

    * **azureSubscription**: your Azure subscription.
    * **appName**: the name of your existing app service.
    * **package**: the file path to the package or a folder containing your app service contents. Wildcards are supported.
    

::: moniker-end

::: moniker range="azure-devops-2019"

We aren't yet advising new users to use YAML pipelines to deploy from Azure DevOps Server 2019.
If you're an experienced pipeline user and already have a YAML pipeline to build your .NET Core app, then you might find the examples below useful.

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
::: moniker range="< azure-devops"

> [!TIP] 
> If you're new to Azure DevOps Server or TFS, then see [Create your first pipeline](../create-first-pipeline.md) before you start.

::: moniker-end

To get started: 

1. Fork this repo in GitHub, or import it into Azure Repos:

   ```
   https://github.com/MicrosoftDocs/pipelines-dotnet-core
   ```

2. Create a pipeline and select the **ASP.NET Core** template. This selection automatically adds the tasks required to build the code in the sample repository.

3. Save the pipeline and queue a build to see it in action.

4. Create a release pipeline and select the **Azure App Service Deployment** template for your stage.
   This automatically adds the necessary tasks. 

5. Link the build pipeline as an artifact for this release pipeline. Save the release pipeline and create a release to see it in action.

---
Now you're ready to read through the rest of this topic to learn some of the more common changes that people make to customize an Azure Web App deployment.

## Use the Azure Web App task

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

The simplest way to deploy to an Azure Web App is to use the **Azure Web App** (`AzureWebApp`) task.

### Deploy a Web Deploy package (ASP.NET)

To deploy a .zip Web Deploy package (for example, from an [ASP.NET web app](../apps/aspnet/build-aspnet-4.md)) to an Azure Web App,
add the following snippet to your azure-pipelines.yml file:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connection>'
    appName: '<Name of web app>'
    package: $(System.DefaultWorkingDirectory)/**/*.zip    
```

* **azureSubscription**: your Azure subscription.
* **appName**: the name of your existing app service.
* **package**: the file path to the package or a folder containing your app service contents. Wildcards are supported.

The snippet assumes that the build steps in your YAML file produce the zip archive in the `$(System.DefaultWorkingDirectory)` folder on your agent.

For information on Azure service connections, see the [following section](#endpoint).


### Deploy a .NET app

if you're building a [.NET Core app](../ecosystems/dotnet-core.md), use the following snipped to deploy the build to an app. 

```yaml
variables:
  buildConfiguration: 'Release'

steps:
- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'dotnet build $(buildConfiguration)'
- task: DotNetCoreCLI@2
  inputs:
    command: 'publish'
    publishWebProjects: true
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connection>'
    appType: 'webAppLinux'
    appName: '<Name of web app>'
    package: '$(System.DefaultWorkingDirectory)/**/*.zip'
```

* **azureSubscription**: your Azure subscription.
* **appType**: your Web App type.
* **appName**: the name of your existing app service.
* **package**: the file path to the package or a folder containing your app service contents. Wildcards are supported.

### Deploy a JavaScript Node.js app

If you're building a [JavaScript Node.js app](../ecosystems/javascript.md), you publish the entire contents of your
working directory to the web app. This snippet also generates a Web.config file during deployment if the application does not have one and starts
the iisnode handler on the Azure Web App:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connections>'
    appName: '<Name of web app>'
    package: '$(System.DefaultWorkingDirectory)'
    customWebConfig: '-Handler iisnode -NodeStartFile server.js -appType node'
```

* **azureSubscription**: your Azure subscription.
* **appName**: the name of your existing app service.
* **package**: the file path to the package or a folder containing your app service contents. Wildcards are supported.
* **customWebConfig**: generate web.config parameters for Python, Node.js, Go, and Java apps. A standard `web.config` file will be generated and deployed to Azure App Service if the application does not have one.

For information on Azure service connections, see the [following section](#endpoint).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

# [Classic](#tab/classic)
::: moniker range=">= azure-devops-2019"
The simplest way to deploy to an Azure Web App is to use the **Azure Web App** task.
::: moniker-end

To deploy to any Azure App service (Web app for Windows, Linux, container, Function app or web jobs), use the **Azure App Service Deploy** task.
This task is automatically added to the release pipeline when you select one of the prebuilt deployment templates for Azure App Service deployment.
Templates exist for apps developed in various programming languages. If you can't find a template for your language, select the generic **Azure App Service Deployment** template.

When you link the artifact in your release pipeline to a build that compiles and publishes the web package,
it's automatically downloaded and placed into the `$(System.DefaultWorkingDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

* * *
<a name="endpoint"></a>

## Use a service connection

To deploy to Azure App Service, you'll need to use an Azure Resource Manager [service connection](../library/service-endpoints.md). The Azure service connection stores the credentials to connect from Azure Pipelines or Azure DevOps Server to Azure.

Learn more about [Azure Resource Manager service connections](../library/connect-to-azure.md). If your service connection is not working as expected, see [Troubleshooting service connections](../release/azure-rm-endpoint.md). 


#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

You'll need an Azure service connection for the `AzureWebApp` task. The Azure service connection stores the credentials to connect from Azure Pipelines to Azure. See [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
::: moniker range="azure-devops"

The easiest way to get started with this task is to be signed in as a user who owns both the Azure DevOps Services organization and the Azure subscription.
In this case, you won't have to manually create the service connection.
Otherwise, to learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< azure-devops"

To learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

---

## Deploy to a virtual application

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

By default, your deployment happens to the root application in the Azure Web App. You can deploy to a specific virtual application by using the `VirtualApplication` property of the `AzureRmWebAppDeployment` task:

```yaml
- task: AzureRmWebAppDeployment@4
  inputs:
    VirtualApplication: '<name of virtual application>'
```

* **VirtualApplication**: the name of the Virtual Application that has been configured in the Azure portal. See [Configure an App Service app in the Azure portal
](/azure/app-service/configure-common) for more details.

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
By default, your deployment happens to the root application in the Azure Web App. If you want to deploy to a specific virtual application,
enter its name in the **Virtual Application** property of the **Azure App Service Deploy** task.

* * *
## Deploy to a slot

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops"

You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

The following example shows how to deploy to a staging slot, and then swap to a production slot:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connection>'
    appType: webAppLinux
    appName: '<name of web app>'
    deployToSlotOrASE: true
    resourceGroupName: '<name of resource group>'
    slotName: staging

- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: '<Azure service connection>'
    appType: webAppLinux
    WebAppName: '<name of web app>'
    ResourceGroupName: '<name of resource group>'
    SourceSlot: staging
    SwapWithProduction: true
```

* **azureSubscription**: your Azure subscription.
* **appType**: (optional) Use `webAppLinux` to deploy to a Web App on Linux.
* **appName**: the name of your existing app service.
* **deployToSlotOrASE**: Boolean. Deploy to an existing deployment slot or Azure App Service Environment.
* **resourceGroupName**: Name of the resource group. Required if `deployToSlotOrASE` is true. 
* **slotName**: Name of the slot, defaults to `production`. Required if `deployToSlotOrASE` is true. 
* **SourceSlot**: Slot sent to production when `SwapWithProduction` is true. 
* **SwapWithProduction**: Boolean. Swap the traffic of source slot with production. 


::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

::: moniker range=">= azure-devops-2019"
Use the option **Deploy to Slot or App Service Environment** in the **Azure Web App** task to specify the slot to deploy to. 
::: moniker-end

::: moniker range="< azure-devops-2019"
Use the option **Deploy to Slot or App Service Environment** in the **Azure App Service Deploy** task to specify the slot to deploy to. 
::: moniker-end

You can swap the slots by using the **Azure App Service Manage** task.

* * *
## Deploy to multiple web apps

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

You can use [jobs](../process/phases.md) in your YAML file to set up a pipeline of deployments.
By using jobs, you can control the order of deployment to multiple web apps.

```yaml
jobs:

- job: buildandtest
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  # publish an artifact called drop
  - task: PublishBuildArtifacts@1
    inputs:
      artifactName: drop

  # deploy to Azure Web App staging
  - task: AzureWebApp@1
    inputs:
      azureSubscription: '<test stage Azure service connection>'
      appName: '<name of test stage web app>'

- job: deploy
  pool:
    vmImage: 'ubuntu-16.04'
  dependsOn: buildandtest
  condition: succeeded()
  steps:

  # download the artifact drop from the previous job
  - task: DownloadBuildArtifacts@0
    inputs:
      artifactName: drop
  
  # deploy to Azure Web App production
  - task: AzureWebApp@1
    inputs:
      azureSubscription: '<prod Azure service connection>'
      appName: '<name of prod web app>'
```

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
If you want to deploy to multiple web apps, add stages to your release pipeline.
You can control the order of deployment. To learn more, see [Stages](../process/stages.md).

* * *
## Configuration changes

For most language stacks, [app settings](/azure/app-service/configure-common?toc=%252fazure%252fapp-service%252fcontainers%252ftoc.json#configure-app-settings) and [connection strings](/azure/app-service/configure-common?toc=%252fazure%252fapp-service%252fcontainers%252ftoc.json#configure-connection-strings) can be set as environment variables at runtime. 
App settings can also be resolved from Key Vault using [Key Vault references](/azure/app-service/app-service-key-vault-references).

For ASP.NET and ASP.NET Core developers, setting app settings in App Service are like setting them in `<appSettings>` in Web.config.
You might want to apply a specific configuration for your web app target before deploying to it. 
This is useful when you deploy the same build to multiple web apps in a pipeline.
For example, if your Web.config file contains a connection string named `connectionString`,
you can change its value before deploying to each web app. You can do this either by applying
a Web.config transformation or by substituting variables in your Web.config file. 

**Azure App Service Deploy task** allows users to modify configuration settings in configuration files (*.config files) inside web packages and XML parameters files (parameters.xml), based on the stage name specified.

::: moniker range="> tfs-2018"

> [!NOTE]  
> File transforms and variable substitution are also supported by the separate [File Transform task](../tasks/utility/file-transform.md) for use in Azure Pipelines.
You can use the File Transform task to apply file transformations and variable substitutions on any configuration and parameters files.

::: moniker-end

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

The following snippet shows an example of variable substitution:

```yaml
jobs:
- job: test
  variables:
    connectionString: <test-stage connection string>
  steps:
  - task: AzureRmWebAppDeployment@4
    inputs:
      azureSubscription: '<Test stage Azure service connection>'
      WebAppName: '<name of test stage web app>'
      enableXmlVariableSubstitution: true

- job: prod
  dependsOn: test
  variables:
    connectionString: <prod-stage connection string>
  steps:
  - task: AzureRmWebAppDeployment@4
    inputs:
      azureSubscription: '<Prod stage Azure service connection>'
      WebAppName: '<name of prod stage web app>'
      enableXmlVariableSubstitution: true
```

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
To change `connectionString` by using variable substitution:

1. Create a release pipeline with two stages.
1. Link the artifact of the release to the build that produces the web package.
1. Define `connectionString` as a variable in each of the stages. Set the appropriate value.
1. Select the **XML variable substitution** option under **File Transforms and Variable Substitution Options** for the **Azure App Service Deploy** task.

* * *
## Deploying conditionally

You can choose to deploy only certain builds to your Azure Web App.

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

To do this in YAML, you can use one of these techniques:

* Isolate the deployment steps into a separate job, and add a condition to that job.
* Add a condition to the step.

The following example shows how to use step conditions to deploy only builds that originate from the main branch:

```yaml
- task: AzureWebApp@1
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  inputs:
    azureSubscription: '<Azure service connection>'
    appName: '<name of web app>'
```

To learn more about conditions, see [Specify conditions](../process/conditions.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
In your release pipeline, you can implement various checks and conditions to control the deployment:

* Set *branch filters* to configure the *continuous deployment trigger* on the artifact of the release pipeline.
* Set *pre-deployment approvals* as a pre-condition for deployment to a stage.
* Configure *gates* as a pre-condition for deployment to a stage.
* Specify conditions for a task to run.

To learn more, see [Release, branch, and stage triggers](../release/triggers.md), [Release deployment control using approvals](../release/approvals/approvals.md), [Release deployment control using gates](../release/approvals/gates.md), and [Specify conditions for running a task](../process/conditions.md).

* * *
[!INCLUDE [include](includes/webapp/deploy-options.md)]
