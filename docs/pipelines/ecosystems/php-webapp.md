---
title: Build and deploy to a PHP web app on Linux
description: Continuous integration and deployment (CI/CD) to a PHP web app on Linux
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 4/30/2019
monikerRange: 'azure-devops'
---

# Build and deploy to a PHP web app

[!INCLUDE [include](../_shared/version-team-services.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide you'll learn how to  create a pipeline that continuously builds and deploys your PHP app. Your team can then automatically build each commit in GitHub, and if you want, automatically deploy the change to an Azure App Service. You can use whichever runtime your prefer: PHP|5.6 or PHP|7.0.

## Prerequisites

[!INCLUDE [include](../_shared/prerequisites.md)]
[!INCLUDE [include](../_shared/azure-prerequisites.md)]

## Get the code

If you already have an app in GitHub that you want to deploy, you can try creating a pipeline for that code.

However, if you are a new user, then you might get a better start by using our sample code. In that case, fork this repo in GitHub:

```
https://github.com/Azure-Samples/php-docs-hello-world
```

## Create an Azure App Service

[!INCLUDE [include](_shared/sign-in-azure-cli.md)]

Create an Azure App Service on Linux.

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with PHP as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "PHP|7.0"
```

## Sign in to Azure Pipelines and connect to Azure

[!INCLUDE [include](_shared/sign-in-azure-pipelines.md)]

[!INCLUDE [include](_shared/create-project.md)]

[!INCLUDE [include](_shared/create-service-connection.md)]

## Create the pipeline

[!INCLUDE [include](_shared/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **PHP**. Your new pipeline appears.

1. Take a look at the pipeline to see what it does.

1. After you've looked at what the pipeline does, select **Save and run** to see the pipeline in action.

1. Select **Save and run**, after which you're prompted for a commit message because Azure Pipelines adds the *azure-pipelines.yml* file to your repository. After editing the message, select **Save and run** again.

> You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [PHP Azure Pipelines template](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/php.yml).

## Edit the pipeline

After the pipeline has run, select the vertical ellipses in the upper-right corner of the window and then select **Edit pipeline**.

### Set some variables for your deployment

[!INCLUDE [include](_shared/deployment-variables.md)]

### Deploy to your app service

```yaml
# add these as the last steps (below all the other `task` items under `steps`)
# to deploy to your app service
- task: ArchiveFiles@1
  displayName: Archive files
  inputs:
    rootFolder: $(System.DefaultWorkingDirectory)
    includeRootFolder: false
    archiveType: zip

- task: PublishBuildArtifacts@1
  displayName: Publish Artifact
  inputs:
    PathtoPublish: $(build.artifactstagingdirectory)

- task: AzureWebApp@1
  displayName: Azure Web App Deploy
  inputs:
    azureSubscription: $(serviceConnectionToAzure)
    appType: webAppLinux
    appName: $(appName)
    package: $(build.artifactstagingdirectory)/**/*.zip
```

## Run the pipeline and check out your site

[!INCLUDE [include](_shared/run-pipeline.md)]

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net/`

[!INCLUDE [include](_shared/clean-up-resources.md)]

