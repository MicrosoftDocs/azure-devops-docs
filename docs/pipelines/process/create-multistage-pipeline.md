---
title: 'Tutorial: Create a multistage pipeline with Azure DevOps'
description: Build an app pipeline for development and staging.
ms.topic: tutorial 
ms.date: 07/12/2023
ms.custom: template-how-to-pattern
---

# Tutorial: Create a multistage pipeline with Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use an Azure DevOps multistage pipeline to divide your CI/CD process into stages that represent different parts of your development cycle. Using a multistage pipeline gives you more visibility into your deployment process and makes it easier to integrate [approvals and checks](approvals.md). 

In this article, you'll create two App Service instances and build a YAML pipeline with three stages: 

> [!div class="checklist"]
> * [Build: build the source code and produce a package](#add-the-build-stage)
> * [Dev: deploy your package to a development site for testing](#add-the-dev-stage)
> * [Staging: deploy to a staging Azure App Service instance a [manual approval check](approvals.md)](#add-the-staging-stage)

In a real-world scenario, you may have another stage for deploying to production depending on your DevOps process. 

The example code in this exercise is for a .NET web application for a pretend space game that includes a leaderboard to show high scores. You'll deploy to both development and staging instances of Azure Web App for Linux. 


## Prerequisites

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/dotnet).
* An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 


## Fork the project

Fork the following sample repository at GitHub. 

```
https://github.com/MicrosoftDocs/mslearn-tailspin-spacegame-web-deploy
```

## Create the App Service instances

Before you can deploy your pipeline, you need to first create an App Service instance to deploy to. You'll use Azure CLI to create the instance. 

1. Sign in to the [Azure portal](https://portal.azure.com).  

1. From the menu, select **Cloud Shell** and the **Bash** experience.

1. Generate a random number that makes your web app's domain name unique. The advantage of having a unique value is that your App Service instance won't have a name conflict with other learners completing this tutorial. 

    ```code
    webappsuffix=$RANDOM    
    ```

1. Open a command prompt and use a `az group create` command to create a resource group named *tailspin-space-game-rg* that contains all of your App Service instances. Update the `location` value to use your closest region. 
    
    ```azurecli
    az group create --location eastus --name tailspin-space-game-rg
    ```

1. Use the command prompt to create an App Service plan.

    ```azurecli
    az appservice plan create \
      --name tailspin-space-game-asp \
      --resource-group tailspin-space-game-rg \
      --sku B1 \
      --is-linux
    ```

1. In the command prompt, create two App Service instances, one for each instance (Dev and Staging) with the `az webapp create` command. 

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

1. With the command prompt, list both App Service instances to verify that they're running with the `az webapp list` command. 

    ```azurecli
    az webapp list \
      --resource-group tailspin-space-game-rg \
      --query "[].{hostName: defaultHostName, state: state}" \
      --output table
    ```

1. Copy the names of the App Service instances to use as variables in the next section. 

## Create your Azure DevOps project and variables

Set up your Azure DevOps project and a build pipeline. You'll also add variables for your development and staging instances. 

Your build pipeline:

* Includes a trigger that runs when there's a code change to branch
* Defines two variables, `buildConfiguration` and `releaseBranchName`
* Includes a stage named Build that builds the web application
* Publishes an artifact you'll use in a later stage

#### Add the Build stage 

[!INCLUDE [include](../ecosystems/includes/create-pipeline-before-template-selected.md)]

7. When the **Configure** tab appears, select **Starter pipeline**.

8. Replace the contents of *azure-pipelines.yml* with this code. 

      :::code language="yml" source="~/../snippets/pipelines/multistage/multistage-example.yml" range="1-67":::

9. When you're ready, select **Save and run**.

#### Add instance variables

1. In Azure DevOps, go to **Pipelines** > **Library**. 

1. Select **+ Variable group**.

1. Under **Properties**, add *Release* for the variable group name.

1. Create a two variables to refer to your development and staging host names. Replace the value `1234` with the correct value for your instance. 

    
    |Variable name  |Example value  |
    |---------|---------|
    |WebAppNameDev     |    tailspin-space-game-web-dev-1234     |
    |WebAppNameStaging     |    tailspin-space-game-web-staging-1234     |
    
 
1. Select **Save** to save your variables. 

## Add the Dev stage

Next, you'll update your pipeline to promote your build to the *Dev* stage. 

1. In Azure Pipelines, go to **Pipelines** > **Pipelines**. 

1.  Select **Edit** in the contextual menu to edit your pipeline. 

    :::image type="content" source="media/mutistage-pipeline/multistage-pipeline-edit-contextual-menu.png" alt-text="Screenshot of select Edit menu item. ":::
    
1. Update *azure-pipelines.yml* to include a Dev stage. In the Dev stage, your pipeline will:

    * Run when the Build stage succeeds because of a condition
    * Download an artifact from `drop`
    * Deploy to Azure App Service with an [Azure Resource Manager service connection](../library/service-endpoints.md)

        :::code language="yml" source="~/../snippets/pipelines/multistage/multistage-example.yml" range="1-92" highlight="69-92":::

1. Change the `AzureWebApp@1` task to use your subscription. 

    1. Select **Settings** for the task. 

        :::image type="content" source="media/mutistage-pipeline/select-settings-azurewebapptask.png" alt-text="Screenshot of settings option in YAML editor task. ":::

    1. Update the `your-subscription` value for **Azure Subscription** to use your own subscription. You may need to authorize access as part of this process. If you run into a problem authorizing your resource within the YAML editor, an alternate approach is to [create a service connection](../library/service-endpoints.md#create-a-service-connection). 
    
        :::image type="content" source="media/mutistage-pipeline/edit-your-subscription-value.png" alt-text="Screenshot of Azure subscription menu item. ":::

    1. Set the **App type** to Web App on Linux. 
    
    1. Select **Add** to update the task. 

1. Save and run your pipeline. 

1. Verify that your app deployed by going to https://tailspin-space-game-web-dev-1234.azurewebsites.net in your browser. Substitute `1234` with the unique value for your site. 

## Add the Staging stage 

Last, you'll promote the Dev stage to Staging. Unlike the Dev environment, you want to have more control in the staging environment you'll add a manual approval. 


#### Create staging environment

1. From Azure Pipelines, select **Environments**.

1. Select **New environment**.

1. Create a new environment with the name *staging* and **Resource** set to *None*. 

1. On the staging environment page, select **Approvals and checks**.

    :::image type="content" source="media/mutistage-pipeline/pipeline-add-check-to-environment.png" alt-text="Screenshot of approvals and checks menu option. ":::

1. Select **Approvals**. 

1. In **Approvers**, select **Add users and groups**, and then select your account.

1. In **Instructions to approvers**, write  *Approve this change when it's ready for staging*.

1. Select **Save**. 

#### Add new stage to pipeline

You'll add new stage, `Staging` to the pipeline that includes a manual approval. 

1. Edit your pipeline file and add the `Staging` section.  

    :::code language="yml" source="~/../snippets/pipelines/multistage/multistage-example.yml" range="1-116" highlight="94-116":::

1. Change the `AzureWebApp@1` task in the Staging stage to use your subscription. 

    1. Select **Settings** for the task. 

        :::image type="content" source="media/mutistage-pipeline/select-settings-azurewebapptask.png" alt-text="Screenshot of settings option in YAML editor task. ":::

    1. Update the `your-subscription` value for **Azure Subscription** to use your own subscription. You may need to authorize access as part of this process. 
    
        :::image type="content" source="media/mutistage-pipeline/edit-your-subscription-value.png" alt-text="Screenshot of Azure subscription menu item. ":::

    1. Set the **App type** to Web App on Linux. 
    
    1. Select **Add** to update the task. 

1.  Go to the pipeline run. Watch the build as it runs. When it reaches `Staging`, the pipeline waits for manual release approval. You'll also receive an email that you have a pipeline pending approval. 

    :::image type="content" source="media/mutistage-pipeline/pipeline-wait-approval.png" alt-text="Screenshot of wait for pipeline approval.":::

1. Review the approval and allow the pipeline to run. 
 
    :::image type="content" source="media/mutistage-pipeline/pipeline-check-manual-validation.png" alt-text="Screenshot of manual validation check.":::
    
1. Verify that your app deployed by going to https://tailspin-space-game-web-staging-1234.azurewebsites.net in your browser. Substitute `1234` with the unique value for your site. 

## Clean up resources

Delete the resource group that you used, *tailspin-space-game-rg*,  with the `az group delete` command.

```azurecli
az group delete --name tailspin-space-game-rg
```

## Next steps

Advance to the next article to learn how to create...
> [!div class="nextstepaction"]
> [Next steps button](contribute-get-started-mvc.md)
