---
title: Build and deploy a Java web app to Azure Functions
description: Learn about continuous integration and deployment (CI/CD) to a Java web app on Linux.
ms.topic: tutorial
ms.assetid: 3156B628-1DEA-4F92-84E5-6C3E18B4DAC1
ms.date: 04/27/2021
monikerRange: 'azure-devops'
---

# Build and deploy Java to Azure Functions

[!INCLUDE [include](../includes/version-team-services.md)]

You can use Azure Functions to run small pieces of code in the cloud without the overhead of running a server. In this step-by-step guide you'll learn how to create a pipeline that continuously builds and deploys a your Java function app. Your team can then automatically build each commit in GitHub, and if you want, automatically deploy the change to Azure Functions.

## Prerequisites

[!INCLUDE [include](../includes/prerequisites.md)]
[!INCLUDE [include](../includes/azure-prerequisites.md)]

## Get the code

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-java-function
```

## Create an Azure Functions app

[!INCLUDE [include](includes/sign-in-azure-cli.md)]

Create an Azure App Service on Linux. Select the runtime you want to use.

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create a storage account
az storage account create --name mystorage --location westeurope --resource-group myapp-rg --sku Standard_LRS

# Create an Azure Functions app
az functionapp create --resource-group myapp-rg --consumption-plan-location westeurope \
--name my-app-name --storage-account mystorage --runtime java
```

## Update pom.xml

Update `pom.xml` to reflect your application. Edit the `pom.xml` file in your forked repository with your values for `FUNCTION_APP_NAME`, `REGION`, and `RESOURCE_GROUP`.

```xml
        <functionAppName>FUNCTION_APP_NAME</functionAppName>
        <functionAppRegion>REGION</functionAppRegion>
        <stagingDirectory>${project.build.directory}/azure-functions/${functionAppName}</stagingDirectory>
        <functionResourceGroup>RESOURCE_GROUP</functionResourceGroup>
```

## Sign in to Azure Pipelines and connect to Azure

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

[!INCLUDE [include](includes/create-service-connection.md)]

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Maven**. Your new pipeline appears.

[!INCLUDE [include](includes/create-pipeline-after-maven-template-selected.md)]

## Edit the pipeline

After the pipeline has run, select the vertical ellipses in the upper-right corner of the window and then select **Edit pipeline**.

### Set some variables for your deployment

[!INCLUDE [include](includes/deployment-variables.md)]

### Deploy to Azure Functions

```yaml
# ...
# add these as the last steps
# to deploy to your app service
- task: CopyFiles@2
  displayName: Copy Files
  inputs:
    SourceFolder: $(system.defaultworkingdirectory)/target/azure-functions/$(functionAppName)/
    Contents: '**'
    TargetFolder: $(build.artifactstagingdirectory)   

- task: PublishBuildArtifacts@1
  displayName: Publish Artifact
  inputs:
    PathtoPublish: $(build.artifactstagingdirectory)    

- task: AzureFunctionApp@1
  displayName: Azure Function App deploy
  inputs:
    azureSubscription: $(serviceConnectionToAzure)
    appType: functionApp
    appName: $(appName)
    package: $(build.artifactstagingdirectory)/$(appName)
```

## Run the pipeline and check out your site

[!INCLUDE [include](includes/run-pipeline.md)]

After the pipeline has run, test the function app running on Azure. For example, in bash or from a command prompt enter:

`curl -w '\n' https://my-app-name-00000000000000000.azurewebsites.net/api/HttpTrigger-Java -d fromYourPipeline`

Your function then returns:

`Hello PipelineCreator`

[!INCLUDE [include](includes/clean-up-resources.md)]
