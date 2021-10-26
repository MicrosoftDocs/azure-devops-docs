---
title: Build and deploy to a Java web app on Linux
description: Continuous integration and deployment (CI/CD) to a Java web app on Linux
ms.topic: tutorial
ms.assetid: 49253EA0-9CD6-4082-A303-95F78C7599C2
ms.date: 08/17/2021
monikerRange: 'azure-devops'
---

# Build and deploy to a Java web app

[!INCLUDE [include](../includes/version-team-services.md)]

A web app is a lightweight way to host a web application. In this step-by-step guide you'll learn how to create a pipeline that continuously builds and deploys a Java app. Your team can then automatically build each commit in GitHub and automatically deploy the change to an Azure App Service. You can use whatever runtime your prefer: Tomcat, or Java SE. Learn more about [Java for Azure App Service](/azure/app-service/configure-language-java). 

If you only want to build a Java app, see [Build Java apps](java.md).

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

## Sign in to Azure Pipelines and connect to Azure

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

7. When the **Configure** tab appears, select **Show more**, and then select **Maven package Java project Web App to Linux on Azure**. 

8. You can automatically create an [Azure Resource Manager service connection](../library/connect-to-azure.md) while creating your pipeline. To get started, Select your Azure subscription where you created a resource group.

9. Select **Validate and configure**. The new pipeline includes a new Azure Resource Manager service connection. 

    As Azure Pipelines creates an azure-pipelines.yml file, which defines your CI/CD pipeline, it:

    * Includes a Build stage, which builds your project, and a Deploy stage, which deploys it to Azure as a Linux web app.
    * As part of the Deploy stage, it also creates an [Environment](../process/environments.md) with default name same as the Web App. You can choose to modify the environment name. 

10. Take a look at the pipeline to see what it does. Make sure that all the default inputs are appropriate for your code.

11. After you've looked at what the pipeline does, select **Save and run**, after which you're prompted for a commit message because Azure Pipelines adds the *azure-pipelines.yml* file to your repository. After editing the message, select **Save and run** again to see your pipeline in action.
 

## See the pipeline run, and your app deployed

As your pipeline runs, watch as your build stage, and then your deployment stage, go from blue (running) to green (completed). You can select the stages and jobs to watch your pipeline in action.


# [Tomcat](#tab/java-tomcat)

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net/petclinic`
# [Java SE](#tab/java-se)

After the pipeline has run, check out your site!

`https://my-app-name.azurewebsites.net`

---

Also explore deployment history for the App by navigating to the "Environment". From the pipeline summary:

1. Select the **Environments** tab.
1. Select **View environment**.

[!INCLUDE [include](includes/clean-up-resources.md)]

## Next steps

* [Azure for Java developer documentation](/azure/developer/java)
* [Quickstart: Create a Java app on Azure App Service](/azure/app-service/quickstart-java)
 