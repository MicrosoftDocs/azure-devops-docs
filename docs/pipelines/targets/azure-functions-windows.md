---
title: Deploy a function app to Azure Functions windows
description: Deploy to Azure Functions windows from Azure Pipelines or TFS
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.assetid: CF5192EB-3505-4E87-8F73-77DD75B57C93
ms.custom: seodec18
ms.author: puagarw
author: pulkitaggarwl
ms.date: 9/11/2019
monikerRange: '>= tfs-2017'
---

# Deploy a Azure Function

You can automatically deploy your Azure Function after every successful build.

## Before you begin

Based on the desired runtime, [import](../../repos/git/import-git-repository.md) (into Azure DevOps) or fork (into GitHub) the following repository.

#### [.NET Core](#tab/dotnet-core/)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/microsoft/devops-project-samples/tree/master/dotnet/aspnetcore/functionApp
```

#### [Java](#tab/java)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/MicrosoftDocs/pipelines-java-function
```

#### [Nodejs](#tab/nodejs)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/microsoft/devops-project-samples/tree/master/node/plain/functionApp
```

* * *

## Build your app

#### [YAML](#tab/yaml)

::: moniker range="azure-devops"
 
Follow the guidance in [Create your first pipeline](../create-first-pipeline.md) to setup the build pipeline. When you're done, you'll have a YAML pipeline to build, test, and publish the source as an artifact.

::: moniker-end

::: moniker range="azure-devops-2019"

We aren't yet advising new users to use YAML pipelines to deploy from Azure DevOps Server 2019.
If you're an experienced pipeline user and already have a YAML pipeline to build your java function app, then you might find the examples below useful.

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic)

::: moniker range="< azure-devops"

> [!TIP] 
> If you're new to Azure DevOps Server or TFS, then see [Create your first pipeline](../create-first-pipeline.md) before you start.

::: moniker-end

To get started: 

1. Fork this repo in GitHub, or import it into Azure Repos:

   ```
   https://github.com/MicrosoftDocs/pipelines-java-function
   ```

2. Create a pipeline and select the **Maven** template. This selection automatically adds the tasks required to build the code in the sample repository.

3. Save the pipeline and queue a build to see it in action.

4. Create a release pipeline and select the **Deploy a function app to Azure Functions** template for your stage.
   This automatically adds the necessary tasks. 

5. Link the build pipeline as an artifact for this release pipeline. Save the release pipeline and create a release to see it in action.

* * *

Now you're ready to read through the rest of this topic to learn some of the more common configurations to customize the deployment of an Azure Function App.

<a name="endpoint"></a>

## Azure service connection

The [**Azure Function App Deploy**](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/AzureFunctionAppV1/README.md) task, similar to other built-in Azure tasks, requires an Azure service connection as an
input. The Azure service connection stores the credentials to connect from Azure Pipelines or Azure DevOps Server to Azure.

#### [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

You must supply an Azure service connection to the AzureFunctionApp task. Add the following YAML snippet to your existing **azure-pipelines.yaml** file. Make sure you add the service connection details in the variables section as shown below.

```yaml
variables: 
    ## Add this under variables section in the pipeline
    azureSubscription: <Name of the Azure subscription>
    appName: <Name of the Function App>

## Add the below snippet at the end of your pipeline
- task: AzureFunctionApp@1
  displayName: Azure Function App Deploy
  inputs:
    azureSubscription: $(azureSubscription)
    appType: functionApp
    appName: $(appName)
    package: $(System.ArtifactsDirectory)/**/*.zip
```

The snippet assumes that the build steps in your YAML file build and publishes the source as an artifact. The **Azure Function App Deploy** task will pull the artifact corresponding to the BuildId from the **Source type** specified, and then deploys the artifact to the Azure Function App Service.

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic)

::: moniker range="azure-devops"

The easiest way to get started with this task is to be signed in as a user who owns both the Azure DevOps Services organization and the Azure subscription.
In this case, you won't have to manually create the service connection.
Otherwise, to learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< azure-devops"

::: moniker-end

* * *

## Deploy with Azure Function App

#### [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

The simplest way to deploy to an Azure Function is to use the [**Azure Function App Deploy**](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/AzureFunctionAppV1/README.md) task.

To deploy to Azure Function, add the following snippet at the end of your **azure-pipelines.yml** file:

```yaml
trigger:
- master

variables:
  # Azure service connection established during pipeline creation
  azureSubscription: <Name of your Azure subscription>
  appName: <Name of the Function app>
  # Agent VM image name
  vmImageName: 'ubuntu-latest'

- task: AzureFunctionApp@1 # Add this at the end of your file
  inputs:
    azureSubscription: <Azure service connection>
    appType: functionApp
    appName: $(appName)
    package: $(System.ArtifactsDirectory)/**/*.zip
```

The snippet assumes that the build steps in your YAML file produce the zip archive in the `$(System.ArtifactsDirectory)` folder on your agent.

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic)

The simplest way to deploy to an Azure Function is to use the **Azure Function App Deploy** task.
This task is automatically added to the release pipeline when you select **Deploy a function app to Azure Functions** template for Azure Function App deployment.
Templates exist for apps developed in various programming languages. 

When you link the artifact in your release pipeline to a build that compiles and publishes the web package,
it's automatically downloaded and placed into the `$(System.ArtifactsDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

* * *

## Deploy to a slot

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops"

You can configure the Azure Function App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

The following YAML snippet shows how to deploy to a staging slot, and then swap to a production slot:

```yaml
- task: AzureFunctionApp@1
  inputs:
    azureSubscription: <Azure service connection>
    appType: functionApp
    appName: <Name of the Function app>
    package: $(System.ArtifactsDirectory)/**/*.zip
    deployToSlotOrASE: true
    resourceGroupName: <Name of the resource group>
    slotName: staging

- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: <Azure service connection>
    WebAppName: <name of the Function app>
    ResourceGroupName: <name of resource group>
    SourceSlot: staging
    SwapWithProduction: true
```

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)

You can configure the Azure Function App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.
Use the option **Deploy to Slot** in the **Azure Function App Deploy** task to specify the slot to deploy to. You can swap the slots by using the **Azure App Service Manage** task.

* * *
