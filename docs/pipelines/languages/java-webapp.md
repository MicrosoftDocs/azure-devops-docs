---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.manager: jillfra
ms.lead: alewis
ms.author: alewis
author: andyjlewis
ms.date: 4/23/2019
monikerRange: 'azure-devops'
---

# Build and deploy to a Java web app

[!INCLUDE [include](../_shared/version-team-services.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide you'll learn how to  create a pipeline that continuously builds and deploys a your Java app. Your team can then automatically build each commit in GitHub, and if you want, automatically deploy the change to an Azure App Service. You can use whichever runtime your prefer: Tomcat or Wildfly.

## Prerequisites

[!INCLUDE [include](../_shared/prerequisites.md)]
[!INCLUDE [include](../_shared/azure-prerequisites.md)]

## Get the code

Select the runtime you want to use.

# [Tomcat](#tab/java-tomcat)

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-petclinic/spring-framework-petclinic
```

# [Wildfly](#tab/java-wildfly)

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-petclinic/spring-framework-petclinic
```

---

## Create an Azure App Service

[!INCLUDE [include](_shared/sign-in-azure-cli.md)]

Create an Azure App Service on Linux.

# [Tomcat](#tab/java-tomcat)

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with Tomcat and JRE 8 as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "TOMCAT|8.5-jre8"
```

# [Wildfly](#tab/java-wildfly)

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with Wildfly as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "WILDFLY|14-jre8"
```

---

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

### Deploy to your app service

```yaml
# add these as the last steps (below all the other `task` items under `steps`)
# to deploy to your app service
- task: CopyFiles@2
  displayName: Copy Files
  inputs:
    SourceFolder: $(system.defaultworkingdirectory)
    Contents: '**'
    TargetFolder: $(build.artifactstagingdirectory)

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
    package: $(build.artifactstagingdirectory)/**/*.war
```

## Run the pipeline and check out your site

[!INCLUDE [include](_shared/run-pipeline.md)]

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net/petclinic`

[!INCLUDE [include](_shared/clean-up-resources.md)]