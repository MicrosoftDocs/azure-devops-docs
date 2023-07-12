---
title: 'Tutorial: Automate Node.js deployments with Azure Pipelines'
description: Tutorial that shows how to create an Azure Pipeline that builds and deploys a basic Node.js application to Azure App Service.
ms.topic: tutorial 
ms.date: 07/12/2023
---

# Tutorial: Automate Node.js deployments with Azure Pipelines

In this tutorial, you'll learn how Azure and Azure DevOps support Node.js applications by building an Azure DevOps pipeline that deploys a Node.js app to Azure App Service. With Azure Pipelines, you'll be able to deploy your Node.js app automatically and reduce the risk of errors and downtime with continuous integration and continuous delivery. 

In this tutorial, you learn how to:

> [!div class="checklist"]
> * [Fork a sample application in GitHub](#fork-the-sample-application)
> * [Create Azure App Service resources](#create-azure-app-service-resources)
> * [Select the Azure Pipelines Node.js Express Web App to Linux on Azure Azure DevOps template](#create-the-pipeline-from-a-template)
> * [Deploy a basic Node.js application to Azure App Service](#deploy-the-nodejs-app-to-azure-app-service)


## Prerequisites

- An [Azure subscription](https://azure.microsoft.com/free/?azure-portal=true). You need your own Azure subscription to complete this tutorial.
- A GitHub account where you can create a repository. [Create one for free](https://github.com).
- An [Azure DevOps organization](/azure/devops/pipelines/get-started/pipelines-sign-up) with access to [parallel jobs](/azure/devops/pipelines/licensing/concurrent-jobs). If your organization doesn't have access to parallel jobs, you can request parallel jobs for free for public or private projects using [this form](https://aka.ms/azpipelines-parallelism-request). Your request takes 2-3 business days.
- Familiarity with [Azure App Service](/azure/app-service/) and [Azure DevOps](/azure/devops/). 


## Fork the sample application

To fork the sample application, you'll need to sign in to GitHub, go to the sample repository, and create a fork.

1. Go to [GitHub](https://github.com), and sign in.

1. Navigate to the [Node.js sample](https://github.com/Azure-Samples/nodejs-docs-hello-world) project.

1. Select **Fork**.

    :::image type="content" source="media/nodejs-tutorial/select-fork.png" alt-text="Screenshot of GitHub to select the Node.js project to fork. ":::
    
1. Select **Create fork** to create a fork in your repository.

    :::image type="content" source="media/nodejs-tutorial/create-fork.png" alt-text="Screenshot of create fork in GitHub. ":::

1. Verify that you now have a version of the repository in your GitHub account by checking the URL path in a browser. Your URL should be `https://github.com/{GitHub User}/nodejs-docs-hello-world`.


## Create Azure App Service resources

Use the Azure CLI to add the resources needed to deploy and run an App Service instance. You'll access Azure CLI from Azure Cloud Shell. 

1. Go to the [Azure portal][https://portal.azure.com?azure-portal=true] and sign in.

1. From the menu, select **Cloud Shell**. When prompted, select the **Bash** experience.

    :::image type="content" source="../apps/cd/azure/media/azure-portal-menu-cloud-shell.png" alt-text="A screenshot of the Azure portal showing the Cloud Shell menu item. ":::

   > [!NOTE]
   > Cloud Shell requires an Azure storage resource to persist any files that you create in Cloud Shell. When you first open Cloud Shell, you're prompted to create a resource group, storage account, and Azure Files share. This setup is automatically used for all future Cloud Shell sessions.

1. From Cloud Shell, run the following [az account list-locations](/cli/azure/account#az-account-list-locations) command to list the regions that are available from your Azure subscription.

   ```azurecli
   az account list-locations \
     --query "[].{Name: name, DisplayName: displayName}" \
     --output table
   ```
1. From the `Name` column in the output, choose a region that's close to you. For example, choose `eastasia` or `westus2`.

1. Run [az configure](/cli/azure/reference-index#az-configure) to set your default region. Replace `<REGION>` with the name of the region you chose. This example sets `westus2` as the default region:

   ```azurecli
   az configure --defaults location=westus2
   ```

1. Generate a random number to make your resource names unique. The advantage of having a unique value is that your App Service instance won't have a name conflict with other learners completing this tutorial. 


   ```bash
   resourceSuffix=$RANDOM
   ```

1. Create globally unique names for your App Service Web App, resource group, and App Service plan.

   ```bash
   webName="helloworld-nodejs-${resourceSuffix}"
   rgName='hello-world-nodejs-rg'
   planName='helloworld-nodejs-plan'
   ```

1. Run the following [az group create](/cli/azure/group#az-group-create) command to create a resource group using the name defined earlier.

   ```azurecli
   az group create --name $rgName
   ```

1. Run the following [az appservice plan create](/cli/azure/appservice/plan#az-appservice-plan-create) command to create an App Service plan using the name defined earlier.

   ```azurecli
   az appservice plan create \
     --name $planName \
     --resource-group $rgName \
     --sku B1 \
     --is-linux
   ```

   The `--sku` argument specifies the B1 plan. This plan runs on the Basic tier. The `--is-linux` argument specifies to use Linux workers.

   > [!IMPORTANT]
   > If the B1 SKU isn't available in your Azure subscription, [choose a different plan](https://azure.microsoft.com/pricing/details/app-service/linux/?azure-portal=true), such as S1 (Standard).

1. Run the following [az webapp create](/cli/azure/webapp#az-webapp-create) command to create the App Service instance.

   ```azurecli
   az webapp create \
     --name $webName \
     --resource-group $rgName \
     --plan $planName \
     --runtime "node|16-lts"
   ```

1. Run the following [az webapp list](/cli/azure/webapp#az-webapp-list) command to list the host name and state of the App Service instance.

   ```azurecli
   az webapp list \
     --resource-group $rgName \
     --query "[].{hostName: defaultHostName, state: state}" \
     --output table
   ```

## Create the pipeline from a template

This process generates a pipelines configuration file named *azure-pipelines.yml*, which lives in the root directory of your Git repository.


1. Sign into your account at [dev.azure.com](https://dev.azure.com?azure-portal=true).

1. Select **+ New project**.

   The **Create new project** dialog box opens.

1. Create a new project with the following options.

   | Field                              | Description  |
   |:-----------------------------------|:-------------|
   | **Project name**                   | Enter a name such as *nodejs-hello-world*. |
   | **Visibility**                     | Choose whether to make your project public or private. |
   | **Advanced** > **Version control** | Select **Git**. |


1. Go to your ***nodejs-hello-world*** project.

1. Go to **Pipelines**, and then select **Create pipeline**.

1. Complete the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When you see the list of repositories, select your repository.

1. You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve & install**.

1. On the **Select** tab, select your ***nodejs-docs-hello-world*** repository.

1. On the **Configure** tab, select **Node.js Express Web App to Linux on Azure**.

    When prompted:

    1. Select the Azure subscription from which you created the resources earlier.
    1. Select **Continue**.
    1. Select the app name you created earlier, for example **helloworld-nodejs-16353**.
    1. Select **Validate and configure**.

1. On the **Review** tab, review the code for your pipeline configuration. 

1. Select **Save** to save your changes.
1. 

## Deploy the Node.js app to Azure App Service

Once you run your pipeline, the code deploys to Azure App Service. The pipeline is configured to run whenever a change is committed to the `main` branch. 

1. Make a small, insignificant change to your pipeline YAML such as adding a space. Select **Save and run** again to commit git changes and trigger the pipeline to run.

1. In Azure DevOps, go to **Pipelines** > **Pipelines** and select your pipeline. 

1. Watch your pipeline run and trace its build. 

1. After the build succeeds, select the deploy task, and select the URL to view the deployed website.

   :::image type="content" source="media/nodejs-tutorial/deploy-url.png" alt-text="Screenshot of the web site URL location in Azure Pipelines.":::

1. Go to the deployed website URL and verify that you see the site running on App Service.

    :::image type="content" source="media/nodejs-tutorial/hello-world-site.png" alt-text="Screenshot of the Node.js application running in a web browser.":::


## Clean up resources

If you're not going to continue to use this application, delete the resource group in Azure portal and the project in Azure DevOps with the following steps:

To clean up your resource group:

1. Go to the [Azure portal](https://portal.azure.com?azure-portal=true) and sign in.
1. From the menu bar, select Cloud Shell. When prompted, select the **Bash** experience.

    :::image type="content" source="../apps/cd/azure/media/azure-portal-menu-cloud-shell.png" alt-text="A screenshot of the Azure portal showing selecting the Cloud Shell menu item. ":::

1. Run the following [az group delete](/cli/azure/group#az-group-delete) command to delete the resource group that you used, `hello-world-nodejs-rg`.

    ```azurecli
    az group delete --name hello-world-nodejs-rg
    ```
To delete your Azure DevOps project, including the build pipeline:

1. In Azure DevOps, navigate to your project. 
1. Select **Project settings**.
1. In the **Project details**, select **Delete**.


## Related content

- [Customize JavaScript](customize-javascript.md)
- [Deploy to App Service using Azure Pipelines](/azure/app-service/deploy-azure-pipelines)
