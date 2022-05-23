---
title: Build and deploy to a PHP web app on Linux
description: Continuous integration and deployment (CI/CD) to a PHP web app on Linux.
ms.topic: tutorial
ms.custom: freshness-fy22q2, devx-track-azurecli
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.date: 12/22/2021
monikerRange: 'azure-devops'
---

# Build & deploy to PHP web app

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide, learn how to create a pipeline that continuously builds and deploys your PHP app. Your team can then automatically build each commit at GitHub and deploy the change to an Azure App Service.

## Prerequisites

[!INCLUDE [include](../includes/prerequisites.md)]
[!INCLUDE [include](../includes/azure-prerequisites.md)]

## Get the code

If you already have an app at GitHub that you want to deploy, you can create a pipeline for that code. But, if you're a new user, you might get a better start by using our sample code. In that case, fork the following repo at GitHub:

```
https://github.com/Azure-Samples/basic-php-composer
```

## Create an Azure App Service

[!INCLUDE [include](includes/sign-in-azure-cli.md)]

Create an Azure App Service on Linux.

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with PHP as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "PHP|7.0"
```

[!INCLUDE [include](includes/create-service-connection.md)]

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

7. When you see the **Configure** tab, select **PHP**. Your new pipeline appears.

8. Check out your pipeline, and then select **Save and run** to see the pipeline in action.

9. Select **Save and run**, after which you're prompted for a commit message because the *azure-pipelines.yml* file gets added to your repository. After editing the message, select **Save and run** again.

We automatically created this pipeline because your code appeared to be a good match for the [PHP Azure Pipelines template](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/php.yml).

## Edit the pipeline

After the pipeline has run, select the vertical ellipses in the upper-right corner of the window and then select **Edit pipeline**.

### Set some variables for your deployment

[!INCLUDE [include](includes/deployment-variables.md)]

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

[!INCLUDE [include](includes/run-pipeline.md)]

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net/`

[!INCLUDE [include](includes/clean-up-resources.md)]

