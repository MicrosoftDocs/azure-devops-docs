---
title: Deploy to Azure Stack Hub App Service using Azure Pipelines
description: Understand how to deploy to Azure Stack Hub App Service using Azure Pipelines
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.topic: how-to
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/01/2022
monikerRange: '> tfs-2018'
---

# Deploy to Azure Stack Hub App Service using Azure Pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article walks you through setting up a CI/CD pipeline for deploying an application to app services in an Azure Stack Hub instance using Azure Pipelines.

In this article you can learn to create or validate:
- Azure Stack Hub service principal (SPN) credentials for the pipeline.
- A web app in your Azure Stack Hub instance.
- A service connection to your Azure Stack Hub instance.
- A repo with your app code to deploy to your app
## Prerequisites

- Access to [Azure Stack Hub](https://azure.microsoft.com/products/azure-stack/hub/) instance with the App Service RP enabled.
- An [Azure DevOps solution](https://azure.microsoft.com/solutions/devops) associated with your Azure Stack Hub tenant.

## Create or validate your SPN

An SPN provides role-based credentials so that processes outside of Azure can connect to and interact with resources. You’ll need an SPN with contributor access and the attributes specified in these instructions to use with your Azure DevOps pipeline.

As a user of Azure Stack Hub you don’t have the permission to create the SPN. You’ll need to request this principal from your cloud operator. The instructions are being provided here so you can create the SPN if you’re a cloud operator, or you can validate the SPN if you’re a developer using an SPN in your workflow provided by a cloud operator.

The cloud operator will need to create the SPN using Azure CLI.

The following code snippets are written for a Windows machine using the PowerShell prompt with [Azure CLI for Azure Stack Hub](/azure-stack/user/azure-stack-version-profiles-azurecli2). If you’re using CLI on a Linux machine and bash, either remove the line extension or replace them with a `\`.

1. Prepare the values of the following parameters used to create the SPN:

    | Parameter | Example | Description |
    | --- | --- | --- |
    endpoint-resource-manager | "https://management.orlando.azurestack.corp.microsoft.com"  | The resource management endpoint. |
    suffix-storage-endpoint | "orlando.azurestack.corp.microsoft.com"  | The endpoint suffix for storage accounts. |
    suffix-keyvault-dns | ".vault.orlando.azurestack.corp.microsoft.com"  | The Key Vault service dns suffix. |
    endpoint-active-directory-graph-resource-id | "https://graph.windows.net/"  | The Active Directory resource ID. |
    endpoint-sql-management | https://notsupported  | The sql server management endpoint. Set this to `https://notsupported` |
    profile | 2019-03-01-hybrid | Profile to use for this cloud. |

2. Open your command-line tool such as Windows PowerShell or Bash and sign in. Use the following command:

    ```azurecli  
    az login
    ```

3. Use the `register` command for a new environment or the `update` command if you’re using an existing environment. Use the following command.

    ```azurecli  
    az cloud register `
        -n "AzureStackUser" `
        --endpoint-resource-manager "https://management.<local>.<FQDN>" `
        --suffix-storage-endpoint ".<local>.<FQDN>" `
        --suffix-keyvault-dns ".vault.<local>.<FQDN>" `
        --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" `
        --endpoint-sql-management https://notsupported  `
        --profile 2019-03-01-hybrid
    ```

4. Get your subscription ID and resource group that you want to use for the SPN.

5. Create the SPN with the following command with the subscription ID and resource group:

    ```azurecli  
    az ad sp create-for-rbac --name "myApp" --role contributor `
        --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} `
        --sdk-auth
    ```

    If you don’t have cloud operator privileges, you can also sign in with the SPN provided to you by your cloud operator. You’ll need the client ID, the secret, and your tenant ID. With these values, you can use the following Azure CLI commands to create the JSON object that contains the values you’ll need to create your service connection.

    ```azurecli  
    az login --service-principal -u "<client-id>" -p "<secret>" --tenant "<tenant-ID>" --allow-no-subscriptions
    az account show
    ```

6. Check the resulting JSON object. You’ll use the JSON object to create your service connection. The JSON object should have the following attributes:

    ```json
    {
      "environmentName": "<Environment name>",
      "homeTenantId": "<Tenant ID for the SPN>",
      "id": "<Application ID for the SPN>",
      "isDefault": true,
      "managedByTenants": [],
      "name": "<Tenant name>",
      "state": "Enabled",
      "tenantId": "<Tenant ID for the SPN>",
      "user": {
        "name": "<User email address>",
        "type": "user"
      }
    }
    ```

## Create the web app target

1. Sign in to your Azure Stack Hub portal.
1. Select **Create a resource** > **Web + Mobile** > **Web App**.
1. Select your **Subscription**.
1. Create or select a **Resource Group**.
1. Type the **Name** of your app. The name of the app will appear in the URL for your app, for example, `yourappname.appservice.<region>.<FQDN>`
1. Select the **Runtime stack** for your app. The runtime must match the code you plan to use for your web app.
1. Select the **Operating System** (OS) that will host your runtime and app.
1. Select or type the **Region** for your Azure Stack Hub instance.
1. Select the plan based on your Azure Stack Hub instance, region, and app OS.
1. Select **Review + Create**.
1. Review your web app. Select **Create**.
1. Select **Go to resource**.
1. Make note of your app name. You’ll add the name to the yml document that defines your pipeline in your repository.

## Create a service connection

Create a service connection. You’ll need the values from your SPN and the name of your Azure Stack Hub subscription.

1. Sign in to your [Azure DevOps organization](https://dev.azure.com/), and then navigate to your project.
1. Select **Project settings**, and then select **Service connections**.
1. Select **Service connections** > **New service connection**.
1. Select **Azure Resource Manager**, and then select **Next**.
1. Select **Service principal (manual)**.
1. Select **Azure Stack** from **Environment**.
1. Fill out the form, and then select **Verify and save**.
1. Give your service connection a name. (You will need the service connection name to create your yaml pipeline).

    :::image type="content" source=".\media\azure-stack\create-service-connection-for-azure-stack-hub.png" alt-text="Create a service connection for Azure Stack Hub":::

## Create your repository and add pipeline

1. If you haven’t added your web app code to the repository, add it now.
2. Open the repository. Select the repo and select **Browse**.
3. Select **Pipelines**
4. Select **New pipeline**.
5. Select **Azure Repos Git**.
6. Select your repository.
7. Select **Starter pipeline**.
8. Navigate back to the repo and open the `azure-pipelines.yml`.
9. Add the following yaml:
    ```yaml  
    # Starter pipeline
    # Start with a minimal pipeline that you can customize to build and deploy your code.
    # Add steps that build, run tests, deploy, and more:
    # https://aka.ms/yaml
    trigger:
    - main
    variables:
      azureSubscription: '<your connection name>'
      VSTS_ARM_REST_IGNORE_SSL_ERRORS: true
    steps:
    - task: AzureWebApp@1
      displayName: Azure Web App Deploy
      inputs:
        azureSubscription: $(azureSubscription)
        appName: <your-app-name>
        package: '$(System.DefaultWorkingDirectory)'
    ```
    
   > [!NOTE]  
   > To ignore SSL errors, set a variable named `VSTS_ARM_REST_IGNORE_SSL_ERRORS` to the value `true` in the build or release pipeline, as in this example.

10. Update the `azureSubscription` value with the name of your service connection.
11. Update the `appName` with your app name. You’re now ready to deploy.

## Notes about using Azure tasks with Azure Stack Hub

The following Azure tasks are validated with Azure Stack Hub:

* [Azure PowerShell](/azure/devops/pipelines/tasks/reference/azure-powershell-v5)
* [Azure File Copy](/azure/devops/pipelines/tasks/reference/azure-file-copy-v4)
* [Azure Resource Group Deployment](/azure/devops/pipelines/tasks/reference/azure-resource-group-deployment-v2)
* [Azure App Service Deploy](/azure/devops/pipelines/tasks/reference/azure-rm-web-app-deployment-v4)
* [Azure App Service Manage](/azure/devops/pipelines/tasks/reference/azure-app-service-manage-v0) 
* [Azure SQL Database Deployment](/azure/devops/pipelines/tasks/reference/sql-azure-dacpac-deployment-v1)

## Next steps

- [Deploy an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
- [Azure Stack Hub User Documentation](/azure-stack/user/)
