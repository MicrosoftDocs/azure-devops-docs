---
title: Create a multistage pipeline with Azure DevOps
description: Build an app pipeline for development and staging.
ms.topic: how-to 
ms.date: 05/30/2023
ms.custom: template-how-to-pattern
---

# Create a multistage pipeline with Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use a multistage pipeline to divide your CI/CD process into stages that represent different parts of your development cycle. In this article, we'll build a YAML pipeline with four stages: 

* Build: builds the source code and produces a package
* Dev: test changes before deploying to production
* Staging: deploy to a staging Azure App Service instance

We'll create a .NET web application for a pretend space game that includes a leaderboard to show high scores. 

## Prerequisites

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/dotnet).
    * An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 


## 1 - Fork the project

1. Fork the following sample repository at GitHub.

```
https://github.com/Azure-Samples/js-e2e-express-server
```

## 2 - Create the App Service environments

Before you can deploy your pipeline, you need to first create an App Service environment to deploy to. You'll use Azure CLI to create the environment. 

1. Go to [Azure portal](https://portal.azure.com) and sign in.  

1. From the menu, select **Cloud Shell** and the **Bash** experience.

1. Generate a random number that makes your web app's domain name unique.

    ```code
    webappsuffix=$RANDOM    
    ```

1. Use a `az group create` command to create a resource group named *tailspin-space-game-rg* that contains all of your App Service instances.
    
    ```azurecli
    az group create --name tailspin-space-game-rg
    ```

1. Create an App Service plan.

    ```azurecli
    az appservice plan create \
      --name tailspin-space-game-asp \
      --resource-group tailspin-space-game-rg \
      --sku B1 \
      --is-linux
    ```

1. Create two App Service instances, one for each environment (Dev and Staging) with the `az webapp create` command. 

    ```azurecli
    az webapp create \
      --name tailspin-space-game-web-dev-$webappsuffix \
      --resource-group tailspin-space-game-rg \
      --plan tailspin-space-game-asp \
      --runtime "DOTNET|6.0"
    
    az webapp create \
      --name tailspin-space-game-web-staging-$webappsuffix \
      --resource-group tailspin-space-game-rg \
      --plan tailspin-space-game-asp \
      --runtime "DOTNET|6.0"
    ```

1. List both App Service instances to verify that they are running with the `az webapp list` command. 

    ```azurecli
    az webapp list \
      --resource-group tailspin-space-game-rg \
      --query "[].{hostName: defaultHostName, state: state}" \
      --output table
    ```

## 3 - Add the Build stage


## 4 - Add the Dev stage


## 5 - Add the Deploy stage 


<!-- 5. Next steps ------------------------------------------------------------------------

Required: Provide at least one next step and no more than three. Include some context so the 
customer can determine why they would click the link.
Add a context sentence for the following links.

-->

## Next steps
TODO: Add your next step link(s)

<!--
Remove all the comments in this template before you sign-off or merge to the main branch.

-->