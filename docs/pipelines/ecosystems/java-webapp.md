---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux.
ms.topic: quickstart
ms.custom: devx-track-extended-java, linux-related-content
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.date: 01/15/2026
ai-usage: ai-assisted
monikerRange: "<=azure-devops"
---

# Quickstart: Build and deploy to a Java web app

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

In this quickstart, you create an Azure Pipeline that builds and deploys a Java app to Azure App Service on Linux. When you finish, you have a working CI/CD pipeline that automatically builds and deploys your app whenever you push changes to your repository.

You can use Tomcat or Java SE as your runtime.

> [!TIP]
> If you only want to build a Java app, see [Build Java apps](java.md).

## Prerequisites

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

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

## Create an App Service plan and app

[!INCLUDE [include](includes/sign-in-azure-cli.md)]

Create an App Service plan and web app on Linux.

# [Tomcat](#tab/java-tomcat)

```azurecli
# Create a resource group to organize and manage related Azure resources
az group create --location eastus2 --name myapp-rg

# Create an App Service plan with Linux as the operating system
# The plan defines the compute resources for your web app
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create a web app using the App Service plan
# Configure Tomcat 10.1 with Java 17 as the runtime environment
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "TOMCAT|10.1-java17"
```

# [Java SE](#tab/java-se)

```azurecli
# Create a resource group to organize and manage related Azure resources
az group create --location eastus2 --name myapp-rg

# Create an App Service plan with Linux as the operating system
# The plan defines the compute resources for your web app
az appservice plan create -g myapp-rg -n myapp-service-plan --is-linux

# Create a web app using the App Service plan
# Configure Java SE 17 as the runtime environment
az webapp create -g myapp-rg -p myapp-service-plan -n my-app-name --runtime "JAVA|17-java17"
```

---

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

1. When the **Configure** tab appears, select **Show more**, and then select **Maven package Java project Web App to Linux on Azure**. 

1. You can automatically create an [Azure Resource Manager service connection](../library/connect-to-azure.md) when you create your pipeline. To get started, select your Azure subscription where you created a resource group.

1. Select **Validate and configure**. The new pipeline includes a new Azure Resource Manager service connection. 

    As Azure Pipelines creates an azure-pipelines.yml file, which defines your CI/CD pipeline, it:

    * Includes a Build stage, which builds your project, and a Deploy stage, which deploys it to Azure as a Linux web app.
    * As part of the Deploy stage, it also creates an [Environment](../process/environments.md) with default name same as the Web App. You can choose to modify the environment name. 

1. Make sure that all the default inputs are appropriate for your code.

1. Select **Save and run**. You're prompted for a commit message because the *azure-pipelines.yml* file gets added to your repository. After editing the message, select **Save and run** again to see your pipeline in action.

## Verify the deployment

As your pipeline runs, your build and deployment stages go from blue (running) to green (completed). To watch your pipeline in action, select stages and jobs.

# [Tomcat](#tab/java-tomcat)

After the pipeline runs, verify your app is running by navigating to your site:

`https://my-app-name.azurewebsites.net/petclinic`

# [Java SE](#tab/java-se)

After the pipeline runs, verify your app is running by navigating to your site:

`https://my-app-name.azurewebsites.net`

---

To explore the deployment history for the app, go to the environment. From the pipeline summary:

1. Select the **Environments** tab.
1. Select **View environment**.

[!INCLUDE [include](includes/clean-up-resources.md)]

## Summary

You successfully created an Azure Pipeline that automatically builds and deploys a Java application to App Service. Any changes you push to your repository now trigger the pipeline to build and deploy your updated app.

## Related content

* [Azure for Java developer documentation](/azure/developer/java)
* [Create a Java app on Azure App Service](/azure/app-service/quickstart-java)
* [Java for Azure App Service](/azure/app-service/configure-language-java)

