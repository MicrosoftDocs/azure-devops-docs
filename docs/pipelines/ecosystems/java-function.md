---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.assetid: 3156B628-1DEA-4F92-84E5-6C3E18B4DAC1
ms.manager: jillfra
ms.author: jukullam
author: juliakm
ms.date: 4/23/2019
monikerRange: 'azure-devops'
---

# Build and deploy Java to Azure Functions

[!INCLUDE [include](../_shared/version-team-services.md)]

You can use Azure Functions to run small pieces of code in the cloud with the overhead of running a server. In this step-by-step guide you'll learn how to create a pipeline that continuously builds and deploys a your Java function app. Your team can then automatically build each commit in GitHub, and if you want, automatically deploy the change to Azure Functions.

## Prerequisites

[!INCLUDE [include](../_shared/prerequisites.md)]
[!INCLUDE [include](../_shared/azure-prerequisites.md)]

## Get the code

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-java-function
```

## Create an Azure Functions app

[!INCLUDE [include](_shared/sign-in-azure-cli.md)]

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

## Sign in to Azure Pipelines and connect to Azure

[!INCLUDE [include](_shared/sign-in-azure-pipelines.md)]

[!INCLUDE [include](_shared/create-project.md)]

[!INCLUDE [include](_shared/create-service-connection.md)]

## Create the pipeline

[!INCLUDE [include](_shared/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Maven**. Your new pipeline appears.

[!INCLUDE [include](_shared/create-pipeline-after-maven-template-selected.md)]

## Edit the pipeline

After the pipeline has run, select the vertical ellipses in the upper-right corner of the window and then select **Edit pipeline**.

### Set some variables for your deployment

[!INCLUDE [include](_shared/deployment-variables.md)]

### Deploy to Azure Functions

```yaml
# ...
# add these as the last steps
# to deploy to your app service
- task: CopyFiles@2
  displayName: Copy Files
  inputs:
    SourceFolder: $(system.defaultworkingdirectory)/target/azure-functions/
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
    package: $(build.artifactstagingdirectory)/javafunctions
```

## Run the pipeline and check out your site

[!INCLUDE [include](_shared/run-pipeline.md)]

After the pipeline has run, test the function app running on Azure. For example, in bash or from a command prompt enter:

`curl -w '\n' https://my-app-name-00000000000000000.azurewebsites.net/api/HttpTrigger-Java -d fromYourPipeline`

Your function then returns:

`Hello PipelineCreator`

[!INCLUDE [include](_shared/clean-up-resources.md)]