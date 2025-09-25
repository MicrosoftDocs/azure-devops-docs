---
title: 'Tutorial: Build and deploy a Node.js app'
description: Create a pipeline in Azure Pipelines that builds and deploys a Node.js application to an Azure App Service app.
ms.topic: tutorial 
ms.custom: devx-track-js
ms.date: 09/25/2025
monikerRange: "<=azure-devops"
#customer intent: As a Node.js web app developer, I want to learn how to create a pipeline to deploy my apps to Azure App Service so I can implement continuous integration and continuous delivery.
---

# Tutorial: Create a pipeline to build and deploy a Node.js app

In this tutorial, you learn how to create a pipeline in Azure Pipelines that builds and deploys a Node.js application to Azure App Service. You can deploy your Node.js app with continuous integration (CI) and continuous delivery (CD) to reduce the risk of errors and downtime. With CI and CD, your pipeline automatically builds and deploys your Node.js web app to App Service whenever there's a commit to your app code repository.

## Prerequisites

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

>[!NOTE]
>Procedures that use [GitHub](https://github.com) might require authentication, authorization, or sign in to GitHub organizations or specific repositories. Follow instructions to complete the required processes. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Fork the sample application

1. In GitHub, go to the [Node.js Hello World](https://github.com/Azure-Samples/nodejs-docs-hello-world) repository and select **Fork** in the top menu.

   :::image type="content" source="media/nodejs-tutorial/select-fork.png" alt-text="Screenshot of GitHub to select the Node.js project to fork. ":::

1. Select your organization as fork **Owner**, and then select **Create fork**.

   :::image type="content" source="media/nodejs-tutorial/create-fork.png" alt-text="Screenshot of create fork in GitHub. ":::

The browser goes to the new fork, which has the URL `https://github.com/<owner>/nodejs-docs-hello-world`.

## Create and deploy the App Service web app

Create your Azure App Service web app by using [Cloud Shell](/azure/cloud-shell/overview) in the Azure portal. To use Cloud Shell, sign in to the [Azure portal](https://portal.azure.com) and select the Cloud Shell button on the toolbar.

:::image type="content" source="../media/python/azure-cloud-shell-button.png" alt-text="Screenshot of Azure Cloud Shell button on the Azure portal toolbar.":::

The Cloud Shell appears along the bottom of the browser. Make sure **Bash** is selected as the environment in the dropdown menu.

:::image type="content" source="../media/python/azure-cloud-shell-interface.png" alt-text="Screenshot of Azure Cloud Shell.":::

> [!TIP]
> To paste into Cloud Shell, use **Ctrl**+**Shift**+**V** or right-click and select **Paste** from the context menu.

### Create and deploy the web app

1. In Cloud Shell, clone your forked repository to Azure with the following command, replacing `<your-forked-repository-url>` with the URL of your forked repository.

   ```bash
   git clone <your-forked-repository-url>.git
   ```

1. Change directory to the cloned repository folder.

   ```bash
   cd nodejs-docs-hello-world
   ```

1. Run the [az webapp up](/cli/azure/webapp#az-webapp-up) command to provision an App Service web app and do the first deployment. Running `az webapp up` with no parameters assigns a randomly generated web app name that's unique in Azure.

   You can also use the `--name <web-app-name>` parameter to assign any name that's unique in Azure, such as a personal or company name with an app identifier, like `--name <your-name>-nodeapp`. The `--sku F1` argument creates the web app on the Free pricing tier, which incurs no cost.

   ```azurecli
   az webapp up --sku F1 --name <app-name>
   ```

The `az webapp up` command recognizes the app as a Node.js app, and takes the following actions:

1. Creates a default [resource group](/cli/azure/group#az-group-create).
1. Creates a default [App Service plan](/cli/azure/appservice/plan#az-appservice-plan-create).
1. [Creates a web app](/cli/azure/webapp#az-webapp-create) with the assigned name. The app `URL` is `<your-web-app-name>.azurewebsites.net`.
1. [Deploys](/azure/app-service/deploy-zip) all files from the current working directory to a ZIP archive, with build automation enabled.
1. Caches the parameters locally in the *.azure/config* file so you don't need to specify them again when deploying from the project folder with `az webapp up` or other `az webapp` commands. The commands use the cached values automatically by default.

You can override the default actions with your own values by using the command parameters. For more information, see [az webapp up](/cli/azure/webapp#az-webapp-up).

The `az webapp up` command produces the following JSON output for the sample web app:

```json
{
  "URL": "<your-web-app-url>",
  "appserviceplan": "<your-app-service-plan-name>",
  "location": "<your-azure-region>",
  "name": "<your-web-app-name>",
  "os": "Linux",
  "resourcegroup": "<your-resource-group-name>",
  "runtime_version": "node|20-LTS",
  "runtime_version_detected": "10.0",
  "sku": "<sku>",
  "src_path": "<repository-source-path>"
}
```

   :::image type="content" source="../apps/cd/azure/media/azure-portal-menu-cloud-shell.png" alt-text="A screenshot of the Azure portal showing the Cloud Shell menu item.":::

## Create the pipeline from a template

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu, and then select **New pipeline** or **Create pipeline** if this pipeline is the first in the project.

1. On the **Where is your code** screen, select **GitHub**. 

1. On the **Select a repository** screen, select your forked **nodejs-docs-hello-world** repository.

1. On the **Configure your pipeline** page, select **Node.js Express Web App to Linux on Azure**.

1. On the next screen, select your Azure subscription and select **Continue**.

1. On the next screen, select your Azure web app and select **Validate and configure**. Azure Pipelines creates an *azure-pipelines.yml* file and displays it in the YAML pipeline editor.

1. On the **Review your pipeline YAML** screen, review the code for your pipeline configuration, and then select **Save and run** to run your pipeline. The *azure-pipelines.yml* file saves to your forked repository, and the code deploys to Azure App Service.

>[!NOTE]
>The first time the pipeline runs, it asks for permission to access the environment it creates. Select **Permit** to grant permission for the pipeline to access the environment.

## Deploy the Node.js app to Azure App Service

The pipeline is configured to run whenever a change is committed to the `main` branch of your forked code repository. To demonstrate a CI build:

1. In your forked GitHub repository, select the *azure-pipelines.yml* file and Go to your pipeline in Azure Pipelines and select **Edit** at upper right.
1. Make a small, insignificant change to your pipeline YAML, such changing a `diaplayName`. Select **Save and run** again to commit your changes to GitHub and trigger the pipeline to run.

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
To delete your Azure DevOps project, including the build pipeline, see [Delete project](../../organizations/projects/delete-project.md).

## Related content

- [Customize JavaScript](customize-javascript.md)
- [Deploy to App Service using Azure Pipelines](/azure/app-service/deploy-azure-pipelines)
