---
title: Deploy an Azure Web App
description: Deploy to Azure Web Apps from Azure Pipelines or TFS
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
manager: douge
ms.assetid:
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Deploy an Azure Web App

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can automatically deploy your web app to an Azure App Service web app after every successful build.
Before you read this topic, you should understand the type of pipeline that you're creating: [designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to Team Foundation Server (TFS) version 2017.3 and later.

::: moniker-end

## Example

If you want some sample code that works with this guidance, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core

```

Follow the guidance in [.NET Core](../languages/dotnet-core.md) to build the sample code.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The preceding sample code includes an `azure-pipelines.yml` file at the root of the repository.
This file contains code to build, test, and publish the source as an artifact.
To learn more about building .NET Core apps, see [Build .NET Core projects with Azure Pipelines or Team Foundation Server](../languages/dotnet-core.md).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

After you have a build, create a release pipeline and select the **Azure App Service Deployment** template for your stage.
This automatically adds the necessary tasks. Link the build as an artifact to this release pipeline. Save the pipeline and create a release to see it in action.
Then read through the rest of this topic to learn some of the more common changes that people make to customize an Azure Web App deployment.

---

## Azure App Service Deploy task

# [YAML](#tab/yaml)

::: moniker range="vsts"

The simplest way to deploy to an Azure Web App is to use the **Azure App Service Deploy** (`AzureRmWebAppDeployment`) task.

### Deploy a Web Deploy package (ASP.NET)

To deploy a .zip Web Deploy package (for example, from an [ASP.NET web app](../apps/aspnet/build-aspnet-4.md)) to an Azure Web App,
add the following snippet to your azure-pipelines.yml file:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<Name of web app>'
    Package: $(System.ArtifactsDirectory)/**/*.zip
```

The snippet assumes that the build steps in your YAML file produce the zip archive in the `$(System.ArtifactsDirectory)` folder on your agent.

For information on Azure service connections, see the [following section](#endpoint).

### Deploy a Java app

If you're building a [Java app](../apps/java/build-gradle.md), use the following snippet to deploy the web archive (.war):

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)/**/*.war'
```

The snippet assumes that the build steps in your YAML file produce the .war archive in one of the folders in your source code folder structure;
for example, under `<project root>/build/libs`. If your build steps copy the .war file to `$(System.ArtifactsDirectory)`
instead, change the last line in the snippet to `$(System.ArtifactsDirectory)/**/*.war`.

For information on Azure service connections, see the [following section](#endpoint).

### Deploy a JavaScript Node.js app

If you're building a [JavaScript Node.js app](../languages/javascript.md), you publish the entire contents of your
working directory to the web app. The following snippet also generates a Web.config file during deployment and starts
the iisnode handler on the Azure Web App:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service connections>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)'
    GenerateWebConfig: true
    WebConfigParameters: '-Handler iisnode -NodeStartFile server.js -appType node'
```

For information on Azure service connections, see the [following section](#endpoint).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

The simplest way to deploy to an Azure Web App is to use the **Azure App Service Deploy** task.
This task is automatically added to the release pipeline when you select one of the prebuilt deployment templates for Azure App Service deployment.
Templates exist for apps developed in various programming languages. If you can't find a template for your language, select the generic **Azure App Service Deployment** template.

When you link the artifact in your release pipeline to a build that compiles and publishes the web package,
it's automatically downloaded and placed into the `$(System.ArtifactsDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

---

<a name="endpoint"></a>

## Azure service connection

The **Azure App Service Deploy** task, similar to other built-in Azure tasks, requires an Azure service connection as an
input. The Azure service connection stores the credentials to connect from Azure Pipelines or TFS to Azure.

# [YAML](#tab/yaml)

::: moniker range="vsts"

You must supply an Azure service connection to the `AzureRmWebAppDeployment` task. The Azure service connection stores the credentials to connect from Azure Pipelines to Azure. See [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

::: moniker range="vsts"

The easiest way to get started with this task is to be signed in as a user who owns both the Azure DevOps Services organization and the Azure subscription.
In this case, you won't have to manually create the service connection.
Otherwise, to learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< vsts"

To learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

---

## Deploy to a virtual application

# [YAML](#tab/yaml)

::: moniker range="vsts"

By default, your deployment happens to the root application in the Azure Web App. You can deploy to a specific virtual application by using the following:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    VirtualApplication: '<name of virtual application>'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

By default, your deployment happens to the root application in the Azure Web App. If you want to deploy to a specific virtual application,
enter its name in the **Virtual Application** property of the **Azure App Service Deploy** task.

---

## Deploy to a slot

# [YAML](#tab/yaml)

::: moniker range="vsts"

You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

The following example shows how to deploy to a staging slot, and then swap to a production slot:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<name of web app>'
    DeployToSlotFlag: true
    ResourceGroupName: '<name of resource group>'
    SlotName: staging

- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<name of web app>'
    ResourceGroupName: '<name of resource group>'
    SourceSlot: staging
```
::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

You can configure the Azure Web App to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.
Use the option **Deploy to Slot** in the **Azure App Service Deploy** task to specify the slot to deploy to. You can swap the slots by using the **Azure App Service Manage** task.

---

## Deploy to multiple web apps

# [YAML](#tab/yaml)

::: moniker range="vsts"

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

  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Test stage Azure service connection>'
      WebAppName: '<name of test stage web app>'

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

  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Prod stage Azure service connection>'
      WebAppName: '<name of prod stage web app>'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

If you want to deploy to multiple web apps, add stages to your release pipeline.
You can control the order of deployment. To learn more, see [Stages](../release/environments.md).

---

## Configuration changes

You might want to apply a specific configuration for your web app target before deploying to it.
This is particularly useful when you deploy the same build to multiple web apps in a pipeline.
For example, if your Web.config file contains a connection string named `connectionString`,
you can change its value before deploying to each web app. You can do this either by applying
a Web.config transformation or by substituting variables in your Web.config file.

# [YAML](#tab/yaml)

::: moniker range="vsts"

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

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

To change `connectionString` by using variable substitution:

1. Create a release pipeline with two stages.
1. Link the artifact of the release to the build that produces the web package.
1. Define `connectionString` as a variable in each of the stages. Set the appropriate value.
1. Select the **XML variable substitution** option under **File Transforms and Variable Substitution Options** for the **Azure App Service Deploy** task.

---

## Deploying conditionally

You can choose to deploy only certain builds to your Azure Web App.

# [YAML](#tab/yaml)

::: moniker range="vsts"

To do this in YAML, you can use one of these techniques:

* Isolate the deployment steps into a separate job, and add a condition to that job.
* Add a condition to the step.

The following example shows how to use step conditions to deploy only builds that originate from the master branch:

```yaml
- task: AzureRmWebAppDeployment@3
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
  inputs:
    azureSubscription: '<Azure service connection>'
    WebAppName: '<Name of web app>'
```

To learn more about conditions, see [Specify conditions](../process/conditions.md).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

In your release pipeline, you can implement various checks and conditions to control the deployment:

* Set *branch filters* to configure the *continuous deployment trigger* on the artifact of the release pipeline.
* Set *pre-deployment approvals* as a pre-condition for deployment to a stage.
* Configure *gates* as a pre-condition for deployment to a stage.
* Specify conditions for a task to run.

To learn more, see [Release, branch, and stage triggers](../release/triggers.md), [Release deployment control using approvals](../release/approvals/approvals.md), [Release deployment control using gates](../release/approvals/gates.md), and [Specify conditions for running a task](../process/conditions.md).

---

[!INCLUDE [include](_shared/webapp/deploy-options.md)]
