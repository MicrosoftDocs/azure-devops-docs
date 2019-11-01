---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 7/23/2019
monikerRange: 'azure-devops'
---

# Build and deploy to a Java web app

[!INCLUDE [include](../_shared/version-team-services.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide you'll learn how to  create a pipeline that continuously builds and deploys a your Java app. Your team can then automatically build each commit in GitHub, and if you want, automatically deploy the change to an Azure App Service. You can use whatever runtime your prefer: Tomcat, Wildfly, or Java SE.

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
https://github.com/agoncal/agoncal-application-petstore-ee7
```

# [Java SE](#tab/java-se)

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-projects/spring-petclinic
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

# [Java SE](#tab/java-se)

```azurecli-interactive
# Create a resource group
az group create --location westus --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with Java SE as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "JAVA|8-jre8"
```

---

## Sign in to Azure Pipelines and connect to Azure

[!INCLUDE [include](_shared/sign-in-azure-pipelines.md)]

[!INCLUDE [include](_shared/create-project.md)]

[!INCLUDE [include](_shared/create-service-connection.md)]

## Create the pipeline

[!INCLUDE [include](_shared/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Show more**, and then select **Maven package Java project Web App to Linux on Azure**. Your new pipeline appears.

[!INCLUDE [include](_shared/create-pipeline-after-template-selected.md)]

## See the pipeline run, and your app deployed

As your pipeline runs, watch as your build stage, and then your deployment stage, go from blue (running) to green (completed). You can select the stages and jobs to watch your pipeline in action.

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net`

Also explore deployment history for the App by navigating to the "Environment". From the pipeline summary:

1. Select the **Environments** tab.
1. Select **View environment**.

[!INCLUDE [include](_shared/clean-up-resources.md)]