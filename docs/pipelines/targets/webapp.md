---
title: Azure web apps deployment | Microsoft Docs
description: Deploy to Azure web apps from VSTS or TFS
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
manager: douge
ms.assetid:
ms.author: ahomer
author: alexhomer1
ms.date: 06/06/2018
monikerRange: '>= tfs-2017'
---

# Azure web apps deployment

You can automatically deploy your web application to an Azure web app after every successful build. Before this guidance, read the [web quickstart](../get-started-designer.md) or [YAML quickstart](../get-started-yaml.md).

# [Web](#tab/web)

The simplest way to deploy to an Azure web app is to create a release definition using the correct template. Templates exist for apps developed in various programming languages. If you cannot find a template for your language, then select the generic **Azure App Service Deployment** template.

## Azure service endpoint

Use the **Azure App Service Deploy** task to deploy your web app to Azure. This task, similar to other built-in Azure tasks, requires an Azure service endpoint as an input. The Azure service endpoint stores the credentials to connect from VSTS to Azure. 

::: moniker range="vsts"
The easiest way to get started with this task is to be signed in as a user that owns both the VSTS account and the Azure subscription. In this case, you won't have to manually create the endpoint.
Otherwise, to learn how to create an Azure service endpoint, see [Create an Azure service endpoint](../library/connect-to-azure.md).
::: moniker-end

::: moniker range="< vsts"
To learn how to create an Azure service endpoint, see [Create an Azure service endpoint](../library/connect-to-azure.md).
::: moniker-end

## Deploy to a virtual application

By default, your deployment happens to the root application in the Azure web app. If you want to deploy to a specific virtual application, type its name in the **Virtual Application** property of the **Azure App Service Deploy** task.

## Deploy to a slot

You can configure the Azure web app to have multiple slots. Slots allow you to safely deploy your app and test it, before making it available to your customers. Use the option to **Deploy to Slot** in the **Azure App Service Deploy** task to specify the slot to deploy to. You can swap the slots by using the **Azure App Service Manage** task.

## Release to multiple web apps

If you want to deploy to multiple web apps, add environments to your release definition. You can control the order of deployment. To learn more, see [Environments](../release/environments.md).

## Configuration changes

You may want to apply a specific configuration for your web app target before deploying to it. This is particularly useful when you deploy the same build to multiple web apps in a pipeline. For example, if your **Web.config** file contains a connection string named `connectionString` then, you can change its value prior to deploying to each web app. You can do this either by applying a web config transformation or by substituting variables in your Web.config file. To change the `connectionString` using variable substitution:

1. Create a release definition with two environments.
1. Link the artifact of the release to the build that produces the web package.
1. Define `connectionString` as a variable in each of the environments. Set the appropriate value.
1. Select the **XML variable substitution** option under the **File Transforms and Variable Substitution Options** of the **Azure App Service Deploy** task.

## Deploying conditionally

You may choose to deploy only certain builds to your Azure web app. In your release definition you can implement various checks and conditions to control the deployment.

* Set **branch filters** to configure the **continuous deployment trigger** on the artifact of the release pipeline.
* Set **pre-deployment approvals** as a pre-condition for deployment to an environment.
* Configure **gates** as a pre-condition for deployment to an environment.
* Specify conditions for a task to run.

To learn more, see [Release, branch, and environment triggers](../release/triggers.md), [Release deployment control using approvals](../release/approvals/approvals.md), [Release deployment control using gates](../release/approvals/gates.md), and [Specify conditions for running a task](../process/conditions.md).

[!INCLUDE [include](_shared/webapp/deploy-options.md)]

# [YAML](#tab/yaml)

::: moniker range="< vsts"

YAML is not supported in TFS.

::: moniker-end

::: moniker range="vsts"

Use the **Azure App Service Deploy** task (`AzureRmWebAppDeployment`) to deploy to an Azure web app.

## Deploy a web deploy package (ASP.NET)

To deploy a .zip web deploy package (for example from an [ASP.NET web app](../apps/aspnet/build-aspnet-4.md)) to an Azure web app, add the following snippet to your .vsts-ci.yml file.

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: $(build.artifactstagingdirectory)/**/*.zip
```

## Deploy a Java app

If you are building a [Java app](../apps/java/build-gradle.md), use the following snippet to deploy the web archive (.war).
```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)/**/*.war'
```

## Deploy a JavaScript Node.js app

If you are building a [JavaScript Node.js app](../apps/nodejs/build-gulp.md), use the following snippet. It generates a web.config file during deployment and starts iisnode handler on the Azure web app.
```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)'
    GenerateWebConfig: true
    WebConfigParameters: '-Handler iisnode -NodeStartFile server.js -appType node'
```

## What about the Azure service endpoint?

You must supply an Azure service endpoint to the `AzureRmWebAppDeployment` task. The Azure service endpoint stores the credentials to connect from VSTS to Azure. See [Create an Azure service endpoint](../library/connect-to-azure.md).

## Deploying to a virtual application

By default, your deployment happens to the root application in the Azure web app. You can deploy to a specific virtual application using the following:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    VirtualApplication: '<name of virtual application>'
```

## Deploying to a slot

You can configure the Azure web app to have multiple slots. Slots allow you to safely deploy your app and test it, before making it available to your customers.

The following example shows how to deploy to a staging slot, and then swap to a production slot.

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<name of web app>'
    DeployToSlotFlag: true
    ResourceGroupName: '<name of resource group>'
    SlotName: staging

- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<name of web app>'
    ResourceGroupName: '<name of resource group>'
    SourceSlot: staging
```

## Multiple web apps in a pipeline

You can use [phases](../process/phases.md) in your YAML file to set up a pipeline of deployments. Using phases, you can control the order of deployment to multiple web apps.

```yaml
phases:

- phase: buildandtest
  queue: Hosted Linux Preview
  steps:

  # add steps here to build the app

  # the following will publish an artifact called drop
  - task: PublishBuildArtifacts@1

  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Test environment Azure service endpoint>'
      WebAppName: '<name of test environment web app>'

- phase: prod
  queue: Hosted Linux Preview
  dependsOn: buildandtest
  condition: succeeded()
  steps:

  # step to download the artifacts from the previous phase
  - task: DownloadBuildArtifacts@0
    inputs:
      artifactName: drop

  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Prod environment Azure service endpoint>'
      WebAppName: '<name of prod environment web app>'
```

## Configuration changes

You may want to apply a specific configuration for your web app before deploying to it. This is particularly useful when you deploy the same build to multiple web apps in a pipeline. For example, if your `Web.config` file contains a connection string named `connectionString` then, you can change its value prior to deploying to each web app. You can do this either by applying a web config transformation or by substituting variables the in Web.config file. The following snippet shows an example of variable substitution.

```yaml
phases:
- phase: test
  variables:
    connectionString: <test-environment connection string>
  steps:
  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Test environment Azure service endpoint>'
      WebAppName: '<name of test environment web app>'
      enableXmlVariableSubstitution: true

- phase: prod
  dependsOn: test
  variables:
    connectionString: <prod-environment connection string>
  steps:
  - task: AzureRmWebAppDeployment@3
    inputs:
      azureSubscription: '<Prod environment Azure service endpoint>'
      WebAppName: '<name of prod environment web app>'
      enableXmlVariableSubstitution: true
```

## Deploying conditionally

You may choose to deploy only certain builds to the Azure web app. To do this, you can use one of these techniques:

* Isolate the deployment steps into a separate phase, and add a condition to that phase.
* Add a condition to the step.

 The following example shows how to use step conditions to deploy only those builds that originate from master branch.

```yaml
- task: AzureRmWebAppDeployment@3
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
```

To learn more about conditions, see [Specify conditions](../process/conditions.md). 

[!INCLUDE [include](_shared/webapp/deploy-options.md)]

::: moniker-end
---
