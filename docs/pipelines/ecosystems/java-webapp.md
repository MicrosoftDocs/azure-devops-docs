---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux.
ms.topic: tutorial
ms.custom: devx-track-extended-java
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.date: 12/22/2021
monikerRange: 'azure-devops'
---

# Build & deploy to Java web app

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide, learn how to create a pipeline that continuously builds and deploys a Java app. Each commit can automatically build at GitHub and deploy to an Azure App Service. You can use whatever runtime you prefer, Tomcat, or Java SE. 

For more information, see [Java for Azure App Service](/azure/app-service/configure-language-java). 

> [!TIP]
> If you only want to build a Java app, see [Build Java apps](java.md).

## Prerequisites

[!INCLUDE [include](../includes/prerequisites.md)]
[!INCLUDE [include](../includes/azure-prerequisites.md)]

## Get the code

Select the runtime you want to use.

# [Tomcat](#tab/java-tomcat)

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-petclinic/spring-framework-petclinic
```

# [Java SE](#tab/java-se)

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-projects/spring-petclinic
```

---

## Create an Azure App Service

[!INCLUDE [include](includes/sign-in-azure-cli.md)]

Create an Azure App Service on Linux.

# [Tomcat](#tab/java-tomcat)

```azurecli
# Create a resource group
az group create --location eastus2 --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with Tomcat and JRE 8 as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "TOMCAT|8.5-jre8"
```

# [Java SE](#tab/java-se)

```azurecli
# Create a resource group
az group create --location eastus2 --name myapp-rg

# Create an app service plan of type Linux
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create an App Service from the plan with Java SE as the runtime
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "JAVA|8-jre8"
```

---

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

7. When the **Configure** tab appears, select **Show more**, and then select **Maven package Java project Web App to Linux on Azure**. 

8. You can automatically create an [Azure Resource Manager service connection](../library/connect-to-azure.md) when you create your pipeline. To get started, select your Azure subscription where you created a resource group.

9. Select **Validate and configure**. The new pipeline includes a new Azure Resource Manager service connection. 

    As Azure Pipelines creates an azure-pipelines.yml file, which defines your CI/CD pipeline, it:

    * Includes a Build stage, which builds your project, and a Deploy stage, which deploys it to Azure as a Linux web app.
    * As part of the Deploy stage, it also creates an [Environment](../process/environments.md) with default name same as the Web App. You can choose to modify the environment name. 

10. Make sure that all the default inputs are appropriate for your code.

11. Select **Save and run**, after which you're prompted for a commit message because the *azure-pipelines.yml* file gets added to your repository. After editing the message, select **Save and run** again to see your pipeline in action.

## See the pipeline run, and your app deployed

As your pipeline runs, your build and deployment stages go from blue (running) to green (completed). To watch your pipeline in action, you can select stages and jobs.
# [Tomcat](#tab/java-tomcat)

After the pipeline runs, check out your site!

`https://my-app-name.azurewebsites.net/petclinic`
# [Java SE](#tab/java-se)

After the pipeline runs, check out your site!

`https://my-app-name.azurewebsites.net`

---

Also explore deployment history for the app by going to the "environment". From the pipeline summary:

1. Select the **Environments** tab.
2. Select **View environment**.

[!INCLUDE [include](includes/clean-up-resources.md)]

## Next steps

* [Azure for Java developer documentation](/azure/developer/java)
* [Create a Java app on Azure App Service](/azure/app-service/quickstart-java)
 
