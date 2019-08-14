---
title: Deploy an Azure Web App
description: Deploy to Azure Web Apps from Azure Pipelines or TFS
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.assetid:
ms.custom: seodec18
ms.author: sdanie
author: steved0x
ms.date: 4/4/2019
monikerRange: '>= tfs-2017'
---

# Deploy an Azure Web App

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

You can automatically deploy your web app to an Azure App Service web app after every successful build.

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to Team Foundation Server (TFS) version 2017.3 and later.

::: moniker-end

## Build your app

#### [YAML](#tab/yaml/)
::: moniker range="azure-devops"

Follow the guidance in [Create your first pipeline](../create-first-pipeline.md) and use the .NET Core sample offered there before you use this topic. When you're done, you'll have a YAML pipeline to build, test, and publish the source as an artifact.

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

* * *
Now you're ready to read through the rest of this topic to learn some of the more common changes that people make to customize an Azure Web App deployment.

## Azure App Service Deploy task

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

The simplest way to deploy to an Azure Web App is to use the **Azure Web App Deploy** (`AzureWebApp`) task.

### Deploy a Web Deploy package (ASP.NET)

To deploy a .zip Web Deploy package (for example, from an [ASP.NET web app](../apps/aspnet/build-aspnet-4.md)) to an Azure Web App,
add the following snippet to your azure-pipelines.yml file:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connection>'
    appName: '<Name of web app>'
    package: $(System.ArtifactsDirectory)/**/*.zip    
```

The snippet assumes that the build steps in your YAML file produce the zip archive in the `$(System.ArtifactsDirectory)` folder on your agent.

For information on Azure service connections, see the [following section](#endpoint).

### Deploy a Java app

If you're building a [Java app](../apps/java/build-gradle.md), use the following snippet to deploy the web archive (.war) to a Linux Webapp:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connection>'
    appType: webAppLinux
    appName: '<Name of web app>'
    package: '$(System.DefaultWorkingDirectory)/**/*.war'
```

The snippet assumes that the build steps in your YAML file produce the .war archive in one of the folders in your source code folder structure;
for example, under `<project root>/build/libs`. If your build steps copy the .war file to `$(System.ArtifactsDirectory)`
instead, change the last line in the snippet to `$(System.ArtifactsDirectory)/**/*.war`.

For information on Azure service connections, see the [following section](#endpoint).

### Deploy a JavaScript Node.js app

If you're building a [JavaScript Node.js app](../languages/javascript.md), you publish the entire contents of your
working directory to the web app. The following snippet also generates a Web.config file during deployment if the application does not have one and starts
the iisnode handler on the Azure Web App:

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: '<Azure service connections>'
    appName: '<Name of web app>'
    package: '$(System.DefaultWorkingDirectory)'
    customWebConfig: '-Handler iisnode -NodeStartFile server.js -appType node'
```

For information on Azure service connections, see the [following section](#endpoint).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

# [Classic](#tab/classic)
::: moniker range=">= azure-devops-2019"
The simplest way to deploy to an Azure Web App is to use the **Azure Web App Deploy** task.
::: moniker-end

To deploy to any Azure App service (Web app for Windows, Linux, container, Function app or web jobs), use the **Azure App Service Deploy** task.
This task is automatically added to the release pipeline when you select one of the prebuilt deployment templates for Azure App Service deployment.
Templates exist for apps developed in various programming languages. If you can't find a template for your language, select the generic **Azure App Service Deployment** template.

When you link the artifact in your release pipeline to a build that compiles and publishes the web package,
it's automatically downloaded and placed into the `$(System.ArtifactsDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

* * *
<a name="endpoint"></a>

## Azure service connection

All the built-in Azure tasks require an Azure service connection as an
input. The Azure service connection stores the credentials to connect from Azure Pipelines or TFS to Azure.

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

You must supply an Azure service connection to the `AzureWebApp` task. The Azure service connection stores the credentials to connect from Azure Pipelines to Azure. See [Create an Azure service connection](../library/connect-to-azure.md).

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
## Deploy to a virtual application

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

By default, your deployment happens to the root application in the Azure Web App. You can deploy to a specific virtual application by using the `VirtualApplication` property of the `AzureRmWebAppDeployment` task:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    VirtualApplication: '<name of virtual application>'
```

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
    appName: '<name of web app>'
    slotName: staging

- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<name of web app>'
    ResourceGroupName: '<name of resource group>'
    SourceSlot: staging
```
::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

::: moniker range=">= azure-devops-2019"
Use the option **Deploy to Slot or App Service Environment** in the **Azure Web App Deploy** task to specify the slot to deploy to. 
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

  # add steps here to build the app

  # the following will publish an artifact called drop
  - task: PublishBuildArtifacts@1

  - task: AzureWebApp@1
    inputs:
      azureSubscription: '<Test stage Azure service connection>'
      appName: '<name of test stage web app>'

- job: prod
  pool:
    vmImage: 'ubuntu-16.04'
  dependsOn: buildandtest
  condition: succeeded()
  steps:

  # step to download the artifacts from the previous job
  - task: DownloadBuildArtifacts@0
    inputs:
      artifactName: drop

  - task: AzureWebApp@1
    inputs:
      azureSubscription: '<Prod stage Azure service connection>'
      appName: '<name of prod stage web app>'
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

For most language stacks, [app settings](https://docs.microsoft.com/azure/app-service/configure-common?toc=%2fazure%2fapp-service%2fcontainers%2ftoc.json#configure-app-settings) and [connection strings](https://docs.microsoft.com/azure/app-service/configure-common?toc=%2fazure%2fapp-service%2fcontainers%2ftoc.json#configure-connection-strings) can be set as environment variables at runtime. 
App settings can also be resolved from Key Vault using [Key Vault references](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references).

For ASP.NET and ASP.NET Core developers, setting app settings in App Service are like setting them in <appSettings> in Web.config.
You might want to apply a specific configuration for your web app target before deploying to it. 
This is particularly useful when you deploy the same build to multiple web apps in a pipeline.
For example, if your Web.config file contains a connection string named `connectionString`,
you can change its value before deploying to each web app. You can do this either by applying
a Web.config transformation or by substituting variables in your Web.config file. 

**Azure App Service Deploy task version 3** allows users to modify configuration settings in configuration files (*.config files) inside web packages and XML parameters files (parameters.xml), based on the stage name specified.

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
  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Test stage Azure service connection>'
      WebAppName: '<name of test stage web app>'
      enableXmlVariableSubstitution: true

- job: prod
  dependsOn: test
  variables:
    connectionString: <prod-stage connection string>
  steps:
  - task: AzureRmWebAppDeployment@3
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

The following example shows how to use step conditions to deploy only builds that originate from the master branch:

```yaml
- task: AzureWebApp@1
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
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
[!INCLUDE [include](_shared/webapp/deploy-options.md)]
