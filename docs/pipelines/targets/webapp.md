---
title: Azure web app deployment | Microsoft Docs
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

# Azure web app deployment

You can automatically deploy your web app to an Azure App Services web app after every successful build.
Before you read this topic, you should understand the type of pipeline that you're creating: [designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and later.

::: moniker-end

::: moniker range="vsts"

> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](/vsts/project/navigation/preview-features) enabled on your account.

::: moniker-end

## Example

If you want some sample code that works with this guidance, import (into VSTS or TFS) or fork (into GitHub) this repo:

```
https://github.com/adventworks/dotnetcore-sample

```

Follow the guidance in [.NET Core](../languages/dotnet-core.md) to build the sample code.

# [Designer](#tab/designer)

After you have a build, create a release definition and select the **Azure App Service Deployment** template for your environment.
This automatically adds the necessary tasks. Link the build as an artifact to this release definition. Save the definition and create a release to see it in action.
Then read through the rest of this topic to learn some of the more common changes that people make to customize an Azure web app deployment.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The sample code above includes a `.vsts-ci.yml` file at the root of the repository. This file includes some additional instructions in comments to deploy
the build to an Azure web app. Read through this to learn how to edit the YAML file in order to deploy the sample app.

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Azure App Service Deploy task

# [Designer](#tab/designer)

The simplest way to deploy to an Azure web app is to use the **Azure App Service Deploy** task. 
This task is automatically added to the release definition when you select one of the pre-built deployment templates for Azure app service deployment.
Templates exist for apps developed in various programming languages. If you cannot find a template for your language, select the generic **Azure App Service Deployment** template.

When you link the artifact in your release definition to a build that compiles and publishes the web package,
it is automatically downloaded and placed into the `$(System.ArtifactsDirectory)` folder on the agent as part of the release.
This is where the task picks up the web package for deployment.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The simplest way to deploy to an Azure web app is to use the **Azure App Service Deploy** (`AzureRmWebAppDeployment`) task.

### Deploy a web deploy package (ASP.NET)

To deploy a .zip web deploy package (for example, from an [ASP.NET web app](../apps/aspnet/build-aspnet-4.md)) to an Azure web app,
add the following snippet to your .vsts-ci.yml file:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: $(System.ArtifactsDirectory)/**/*.zip
```

The above snippet assumes that the build steps in your YAML file produce the zip archive in the `$(System.ArtifactsDirectory)` folder on your agent.

For information on Azure service endpoints, see the [following section](#endpoint).

### Deploy a Java app

If you are building a [Java app](../apps/java/build-gradle.md), use the following snippet to deploy the web archive (.war):

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)/**/*.war'
```

The snippet above assumes that the build steps in your YAML file produce the .war archive in one of the folders in your source code folder structure;
for example, under `<project root>/build/libs`. If your build steps copy the .war file to `$(System.ArtifactsDirectory)`
instead, change the last line in the snippet above to `$(System.ArtifactsDirectory)/**/*.war`.

For information on Azure service endpoints, see the [following section](#endpoint).

### Deploy a JavaScript Node.js app

If you are building a [JavaScript Node.js app](../apps/nodejs/build-gulp.md), you publish the entire contents of your
working directory to the web app. The following snippet also generates a web.config file during deployment and starts
iisnode handler on the Azure web app:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: '<Azure service endpoint>'
    WebAppName: '<Name of web app>'
    Package: '$(System.DefaultWorkingDirectory)'
    GenerateWebConfig: true
    WebConfigParameters: '-Handler iisnode -NodeStartFile server.js -appType node'
```

For information on Azure service endpoints, see the [following section](#endpoint).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

<a name="endpoint"></a>

## Azure service endpoint

The **Azure App Service Deploy** task, similar to other built-in Azure tasks, requires an Azure service endpoint as an
input. The Azure service endpoint stores the credentials to connect from VSTS or TFS to Azure. 

# [Designer](#tab/designer)

::: moniker range="vsts"

The easiest way to get started with this task is to be signed in as a user that owns both the VSTS account and the Azure subscription.
In this case, you won't have to manually create the endpoint.
Otherwise, to learn how to create an Azure service endpoint, see [Create an Azure service endpoint](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< vsts"

To learn how to create an Azure service endpoint, see [Create an Azure service endpoint](../library/connect-to-azure.md).

::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="vsts"

You must supply an Azure service endpoint to the `AzureRmWebAppDeployment` task. The Azure service endpoint stores the credentials to connect from VSTS to Azure. See [Create an Azure service endpoint](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Deploy to a virtual application

# [Designer](#tab/designer)

By default, your deployment happens to the root application in the Azure web app. If you want to deploy to a specific virtual application,
type its name in the **Virtual Application** property of the **Azure App Service Deploy** task.

# [YAML](#tab/yaml)

::: moniker range="vsts"

By default, your deployment happens to the root application in the Azure web app. You can deploy to a specific virtual application using the following:

```yaml
- task: AzureRmWebAppDeployment@3
  inputs:
    VirtualApplication: '<name of virtual application>'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Deploy to a slot

# [Designer](#tab/designer)

You can configure the Azure web app to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.
Use the option **Deploy to Slot** in the **Azure App Service Deploy** task to specify the slot to deploy to. You can swap the slots by using the **Azure App Service Manage** task.

# [YAML](#tab/yaml)

::: moniker range="vsts"

You can configure the Azure web app to have multiple slots. Slots allow you to safely deploy your app and test it before making it available to your customers.

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
::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Deploy to multiple web apps

# [Designer](#tab/designer)

If you want to deploy to multiple web apps, add environments to your release definition.
You can control the order of deployment. To learn more, see [Environments](../release/environments.md).

# [YAML](#tab/yaml)

::: moniker range="vsts"

You can use [phases](../process/phases.md) in your YAML file to set up a pipeline of deployments.
Using phases, you can control the order of deployment to multiple web apps.

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

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Configuration changes

You may want to apply a specific configuration for your web app target before deploying to it.
This is particularly useful when you deploy the same build to multiple web apps in a pipeline.
For example, if your **Web.config** file contains a connection string named `connectionString`,
you can change its value before deploying to each web app. You can do this either by applying
a web config transformation or by substituting variables in your Web.config file. 

# [Designer](#tab/designer)

To change the `connectionString` using variable substitution:

1. Create a release definition with two environments.
1. Link the artifact of the release to the build that produces the web package.
1. Define `connectionString` as a variable in each of the environments. Set the appropriate value.
1. Select the **XML variable substitution** option under the **File Transforms and Variable Substitution Options** of the **Azure App Service Deploy** task.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The following snippet shows an example of variable substitution:

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

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Deploying conditionally

You may choose to deploy only certain builds to your Azure web app. 

# [Designer](#tab/designer)

In your release definition you can implement various checks and conditions to control the deployment.

* Set **branch filters** to configure the **continuous deployment trigger** on the artifact of the release pipeline.
* Set **pre-deployment approvals** as a pre-condition for deployment to an environment.
* Configure **gates** as a pre-condition for deployment to an environment.
* Specify conditions for a task to run.

To learn more, see [Release, branch, and environment triggers](../release/triggers.md), [Release deployment control using approvals](../release/approvals/approvals.md), [Release deployment control using gates](../release/approvals/gates.md), and [Specify conditions for running a task](../process/conditions.md).

# [YAML](#tab/yaml)

::: moniker range="vsts"

To do this in YAML, you can use one of these techniques:

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

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

[!INCLUDE [include](_shared/webapp/deploy-options.md)]
