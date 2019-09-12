---
title: Deploy an Azure Web App
description: Deploy to Azure Web Apps on Linux from Azure Pipelines 
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.assetid:
ms.custom: seodec18
ms.author: atulmal
author: azooinmyluggage
ms.date: 09/09/2019
monikerRange: '>= tfs-2017'
---

# Deploy an Azure Web App

[!INCLUDE [version-Azure DevOps Services-rtm](../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

You can automatically deploy your web app to an Azure App Service Linux on every successful build.

::: moniker range="azure-devops"

> [!NOTE]
 
> This guidance applies to Azure DevOps Services.

::: moniker-end

## Before you begin

Based on the desired runtime, [import](../../repos/git/import-git-repository.md) (into Azure DevOps) or fork (into GitHub) the following repository.

#### [.NET Core](#tab/dotnet-core/)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

#### [Java](#tab/java)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/MicrosoftDocs/pipelines-java
```

#### [Nodejs](#tab/nodejs)

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
    https://github.com/MicrosoftDocs/pipelines-javascript
```

* * *

## Build your app

#### [YAML](#tab/yaml/)

::: moniker range="azure-devops"

#### [.NET Core](#tab/dotnet-core/)

Follow the [Build, test, and deploy .NET Core apps](../ecosystems/dotnet-core.md) till **Create your first pipeline** section to set up the build pipeline. When you're done, you'll have a YAML pipeline to build, test, and publish the source as an artifact.

#### [Java](#tab/java)

Setup a CI pipeline for [building and deploying](../ecosystems/java.md) the source as an artifact to a Linux App Service.

#### [Nodejs](#tab/nodejs)

Setup a CI pipeline for [building and deploying](../ecosystems/javascript.md) the source as an artifact to a Linux App Service.

::: moniker-end

::: moniker range="= azure-devops-2019"

We advise new users to use Classic Editor and not use YAML pipelines to deploy from Azure DevOps Services.
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

4. Create a release pipeline and select the **Empty job** for your stage.Search for the **AzureWebAppDeploy** task and configure accordingly. 

5. Link the build pipeline as an artifact for this release pipeline. Save the release pipeline and create a release to see it in action.

* * *

Now you're ready to read through the rest of this topic to learn some of the more common configurations to customize the deployment of the Azure Web App.

<a name="endpoint"></a>

## Azure service connection

The **Azure Web App** task, similar to other built-in Azure tasks, requires an Azure service connection as an
input. The Azure service connection stores the credentials to connect from Azure Pipelines or Azure DevOps Server to Azure.

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

You must supply an Azure service connection to the `AzureWebApp` task. Add the following YAML snippet to your existing **azure-pipelines.yaml** file. Make sure you add the service connection details in the variables section as shown below.

```yaml
variables: 
    ## Add this under variables section in the pipeline
    azureSubscription: <Name of the Azure subscription>
    appName: <Name of the Web App>

## Add the below snippet at the end of your pipeline
- task: AzureWebApp@1
  displayName: 'Azure Web App Deploy'
  inputs:
    azureSubscription: $(azureSubscription)
    appType: webAppLinux
    appName: $(appName)
    package: $(System.ArtifactsDirectory)/**/*.zip
```    

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

* * *

## Deploy with Azure Web App

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

The simplest way to deploy to an Azure Web App is to use the [**Azure Web App**](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/AzureWebAppV1/README.md) task.

To deploy to an Azure Web App, add the following snippet at the end of your **azure-pipelines.yml** file:

```yaml
trigger:
- master

variables:
  # Azure service connection established during pipeline creation
  azureSubscription: <Name of your Azure subscription>
  appName: <Name of the web app>
  # Agent VM image name
  vmImageName: 'ubuntu-latest'

- task: AzureWebApp@1 # Add this at the end of your file
  inputs:
    azureSubscription: <Azure service connection>
    appType: webAppLinux
    appName: $(appName)
    package: $(System.ArtifactsDirectory)/**/*.zip
```

The snippet assumes that the build steps in your YAML file build and publishes the source as an artifact. The **Azure Web App Deploy** task will pull the artifact corresponding to the BuildId from the **Source type** specified, and then deploys the artifact to the Linux App Service.

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)

The simplest way to deploy to an Azure Web App on Linux is to use the **Azure Web App Deploy** task.
This task is added to the release pipeline when you select the deployment task for Azure Web App deployment.
Templates exist for apps developed in various programming languages. If you can't find a template for your language, select the generic **Azure App Service Deployment** template.

When you link the artifact in your release pipeline to a build that compiles and publishes the web package,
it's automatically downloaded and placed into the `$(System.ArtifactsDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

* * *

## Deploy to a slot

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops"

You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

The following YAML snippet shows how to deploy to a staging slot, and then swap to a production slot:

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

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)

You can configure the Azure Web App on Linux to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.
Use the option **Deploy to Slot** in the **Azure Web App** task to specify the slot to deploy to. You can swap the slots by using the **Azure App Service Manage** task.

* * *

