---
title: Deploy to Azure Stack Hub App Service using Azure Pipelines
description: Understand how to deploy to Azure Stack Hub App Service using Azure Pipelines
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.topic: how-to
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 3/16/2021
monikerRange: '> tfs-2018'
---

# Deploy to Azure Stack Hub App Service using Azure Pipelines

This article walks you through setting up a CI/CD pipeline for deploying an application to app services in an Azure Stack Hub instance using Azure Pipelines.

In this article you can learn to create or validate:
- Azure Stack Hub service principle (SPN) credentials for the pipeline.
- A web app in your Azure Stack Hub instance.
- A service connection to your Azure Stack Hub instance.
- A repo with your app code to deploy to your app
## Prerequisites

- Access to [Azure Stack Hub](https://azure.microsoft.com/products/azure-stack/hub/) instance with the App Service RP enabled.
- An [Azure DevOps solution](https://azure.microsoft.com/solutions/devops) associated with your Azure Stack Hub tenant.

## Create or validate your SPN

An SPN provides role-based credentials so that processes outside of Azure can connect to and interact with resources. You will need an SPN with contributor access and the attributes specified in these instructions to use with your Azure DevOps pipeline.

As a user of Azure Stack Hub you do not have the permission to create the SPN. You will need to request this principle from your cloud operator. The instructions are being provided here so you can create the SPN if you are a cloud operator, or you can validate the SPN if you are a developer using an SPN in your workflow provided by a cloud operator.

The cloud operator will need to create the SPN using Azure CLI.

The following code snippets are written for a Windows machine using the PowerShell prompt with [Azure CLI for Azure Stack Hub](/azure-stack/user/azure-stack-version-profiles-azurecli2). If you are using CLI on a Linux machine and bash, either remove the line extension or replace them with a `\`.

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

3. Use the `register` command for a new environment or the `update` command if you are using an existing environment. Use the following command.

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

    If you do not have cloud operator privileges, you can also sign in with the SPN provided to you by your cloud operator. You will need the client ID, the secret, and your tenant ID. With these values, you can use the following Azure CLI commands to create the JSON object that contains the values you will need to create your service connection.

    ```azurecli  
    az login --service-principal -u "<client-id>" -p "<secret>" --tenant "<tenant-ID>" --allow-no-subscriptions
    az account show --sdk-auth
    ```

6. Check the resulting JSON object. You will use the JSON object to create your service connection. The JSON object should have the following attributes:

    ```json
    {
      "clientId": <Application ID for the SPN>,
      "clientSecret": <Client secret for the SPN>,
      "subscriptionId": <Subscription ID for the SPN>,
      "tenantId": <Tenant ID for the SPN>,
      "activeDirectoryEndpointUrl": "https://login.microsoftonline.com/",
      "resourceManagerEndpointUrl": "https://management.<FQDN>",
      "activeDirectoryGraphResourceId": "https://graph.windows.net/",
      "sqlManagementEndpointUrl": "https://notsupported",
      "galleryEndpointUrl": "https://providers.<FQDN>:30016/",
      "managementEndpointUrl": "https://management.<FQDN>"
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
1. Make note of your app name. You will add the name to the yml document that defines your pipeline in your repository.

## Create an Azure DevOps instance

You will need an Azure DevOps instance associated with your Azure Stack Hub instance.

## Create a service connection

Create a service connection. You will need the values from your SPN and the name of your Azure Stack Hub subscription.

1. Sign in to [Azure DevOps](https://dev.azure.com/). 
2. Select **Service connections** > **New service connection**.
1. Select **Azure Resource Manager** and select **Next**.
2. Select **Service principal (manual)**.

    ![Create a service connection for Azure Stack Hub](.\media\azure-stack\create-service-connection-for-azure-stack-hub.png)

1. Select **Azure Stack** for **Environment**.
1. Add the value for `managementEndpointUrl` for the **Server URL**.
1. Select **Subscription** for **Scope Level**.
1. Add `subscriptionId` and type the name.
1. Add the name of your subscription for **Subscription Name**.
1. Add `clientId` for **Service Principal Id**.
1. Select **Service principal key**.
1. Add `clientSecret` for the **Service principal key**.
1. Add `tenantId` for **Tenant ID**.
1. Select **Verify**.
1. Add the name of the connection and make a note of it. You will add the name of the connection to the yaml document that defines your pipeline in your repository.

## Create your repository and add pipeline

1. If you have not added your web app code to the repository, add it now.
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
    - master
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
11. Update the `appName` with your app name. You are now ready to deploy.

## Notes about using Azure tasks with Azure Stack Hub

The following Azure tasks are validated with Azure Stack Hub:

* [Azure PowerShell](../tasks/deploy/azure-powershell.md)
* [Azure File Copy](../tasks/deploy/azure-file-copy.md)
* [Azure Resource Group Deployment](../tasks/deploy/azure-resource-group-deployment.md)
* [Azure App Service Deploy](../tasks/deploy/azure-rm-web-app-deployment.md)
* [Azure App Service Manage](../tasks/deploy/azure-app-service-manage.md) 
* [Azure SQL Database Deployment](../tasks/deploy/sql-azure-dacpac-deployment.md)

## Next steps

- [Deploy an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
- [Azure Stack Hub User Documentation](/azure-stack/user/)
