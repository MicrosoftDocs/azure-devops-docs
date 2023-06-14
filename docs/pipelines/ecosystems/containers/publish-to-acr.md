---
title: Create a service connection and build and publish Docker images to Azure Container Registry
description: How to create service connections and build and publish Docker images with Azure Pipelines
ms.topic: tutorial
ms.author: rabououn
author: ramiMSFT
ms.date: 06/14/2023
monikerRange: 'azure-devops'
---

# Build and publish Docker images to Azure Container Registry

Using Azure Pipelines, you can set up a pipeline workflow to build and publish your Docker images to Azure Container Registry. In this article, you will learn how to:

> [!div class="checklist"]
>
> - Create an Azure Container Registry  
> - Set up a self-hosted agent on an Azure VM
> - Set up the managed service identity
> - Create a Docker Registry service connection
> - Build and publish your image to Azure Container Registry

## Prerequisites

- A GitHub account. [sign up for free](https://github.com), if you don't have one already.

- [An Azure DevOps organization](../../../organizations/accounts/create-organization.md).

- [An Azure DevOps project](../../..//organizations/projects/create-project.md).

- An Azure account with an active subscription. [Sign up for free](https://azure.microsoft.com/free/) if you don't have one already.

## Get the code

Fork or clone the sample app to follow along with this tutorial.

### [JavaScript](#tab/javascript)

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```

### [.NET Core](#tab/dotnet-core)

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```

* * *

## Create an Azure Container Registry

### [Portal](#tab/portal)

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select **Create a resource** from the left navigation panel, and then select **Containers** then **Container Registry**.

1. Select your **Subscription** and then select your **Resource group** or create a new one.

1. Enter a **Registry name** for your container registry. The registry name must be unique within Azure and must contain at least 5 characters.

1. Select your preferred **Location** and **SKU** and then select **Review + create**.

1. Review your settings and then select **Create** when you're done.

### [CLI](#tab/cli)

1. Navigate to [Azure portal](https://portal.azure.com/), and then open the Azure CLI by selecting the **Azure Cloud Shell** button from the toolbar.

1. Create a new resource group.

    ```azurecli-interactive
    az group create --name myapp-rg --location eastus
    ```
1. Create a new container registry.

    ```azurecli-interactive
    az acr create --resource-group myapp-rg --name mycontainerregistry --sku Basic
    ```

* * *

## Set up a self-hosted agent VM

To use Managed Service Identity with Azure Pipelines to publish Docker images to Azure Container Registry, we must set up our own self-hosted agent on an Azure VM.

### Create a VM

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select **Create a resource** from the left navigation panel, and then select **Virtual machine** -> **Create**.

1. Select your **Subscription** and then select the **Resource group** you used to create your container registry.

1. Give your virtual machine a name and choose an **Image**.

1. Enter your **Username** and **Password**, and then select **Review + create**.

1. Review your settings, and then select **Create** when you're done.
 
1. Select **Go to resource** when the deployment is complete.

### Create an agent pool

1. From your Azure DevOps project, select the gear icon ![gear icon](../../../media/icons/gear-icon.png) to navigate to your **Project settings**.

1. Select **Agent pools**, and then select **Add pool**.

1. Select **New**, and then select *Self-hosted* from the **Pool type** dropdown menu.

1. Give your pool a name, and then check **Grant access permission to all pipelines** checkbox.

1. Select **Create** when you're done.

1. Now select the pool you just created, and then select **New agent**.

1. We will be using the instructions in this window to set up your agent in the VM you created earlier. Select the **Copy** button to copy the download link to your clipboard.

    :::image type="content" source="../media/agent-setup-instructions.png" alt-text="A screenshot showing how to set up an agent.":::

### Create a personal access token 

1. From your Azure DevOps project, select **User Settings**, and then select **Personal Access Tokens**.

1. Select **New Token** to create a new Personal Access Token.

1. Enter a name for your PAT, and then choose an expiration date.

1. Select **Custom defined** in **Scopes**, and then select **Show all scopes**.

1. Select **Agent Pools** -> **Read & manage**, and **Deployment Groups** -> **Read & manage**.

1. Select **Create** when you're done, and save your PAT in a safe location.

### Set up a self-hosted agent

1. In Azure portal, connect to your VM.

1. In an elevated PowerShell command prompt, run the following command to download the agent.

    ```PowerShell
    Invoke-WebRequest -URI <YOUR_AGENT_DOWNLOAD_LINK> -UseBasicParsing  -OutFile <FILE_PATH> 
    ##Example: Invoke-WebRequest -URI https://vstsagentpackage.azureedge.net/agent/2.213.2/vsts-agent-win-x64-2.213.2.zip -OutFile C:\vsts-agent-win-x64-2.213.2.zip
    ```

1. Run the following command to extract and create your agent.
    
    ```PowerShell
    mkdir agent ; cd agent
    Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("<FILE_PATH>", "$PWD")
    ```

1. Run the following command to start configuring your agent.

    ```powershell
    .\config.cmd
    ```

1. Enter your server URL when asked for input. Example: https://dev.azure.com/fabrikamFiber

1. Press **Enter** when prompted for the authentication type to choose **PAT** authentication.

1. Paste your personal access token that you created earlier and then press enter.

1. Enter the name of your agent pool, and then enter your agent name.

1. Leave the default value for *work folder*, and then enter *Y* if you want to run your agent as a service.

    :::image type="content" source="../media/configure-agent.png" alt-text="A screenshot showing how to set up an agent on an Azure VM.":::

1. Now that the agent is ready to start listening for jobs, let's install Docker on our VM. Run the following command to download Docker.

    ```powershell
    Invoke-WebRequest -URI https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe -OutFile <DOWNLOAD_PATH>
    ```

1. Navigate to your download path, and then run the following command to install and start Docker.

    ```powershell
    Start-Process 'Docker%20Desktop%20Installer.exe' -Wait install
    ```

1. Now navigate back to your agent folder, and run the cmd file to run the agent on your Azure VM.

    ```powershell
    .\run.cmd
    ```

1. Your agent should be listed now in your Agent pool -> **Agents** in the Azure DevOps portal.

    :::image type="content" source="../media/agent-available.png" alt-text="A screenshot showing the agent available in the agents tab.":::

## Set up the managed identity

1. In Azure portal, navigate to the VM you created earlier.

1. Select **Identity** from the left navigation panel, and then enable the **System assigned** identity.

1. Select **Save** when you're done and then confirm your choice.

    :::image type="content" source="../media/system-assigned-id.png" alt-text="A screenshot showing how to enable system-assigned identity.":::

1. Select **Azure role assignments**, and then select **Add role assignment**.

1. Select **Resource group** from the **Scope** dropdown menu.

1. Select your **Subscription** and your **Resource group**, and then select the **AcrPush** role.

1. Repeat the steps 5 & 6 to add the **AcrPull** role.

    :::image type="content" source="../media/acrpull-push-roles.png" alt-text="A screenshot showing how to set up acrpull and push roles.":::

## Create a Docker registry service connection

### [Managed Service Identity](#tab/msi)

1. From your Azure DevOps project, select the gear icon ![gear icon](../../../media/icons/gear-icon.png) to navigate to your **Project settings**.

1. Select **Service connections** from the left pane.

1. Select **New service connection**, and then select **Docker Registry** then **Next**.

1. Select **Azure Container Registry**, and then select *Managed Service Identity* as your **Authentication Type**.

1. Enter your [Subscription ID](/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription) **Subscription name**, and your [Azure container registry login server](/azure/container-registry/container-registry-get-started-portal?tabs=azure-cli#create-a-container-registry). Paste your VM's system assigned Object ID that you created in the previous step in the **Tenant ID** text field.

1. Enter a name for your service connection, and then check the **Grant access permission to all pipelines** checkbox.

1. Select **Save** when you are done.

    :::image type="content" source="../media/acr-service-connection-msi.png" alt-text="A screenshot showing how to set up a docker registry service connection MSI.":::

### [Service Principal](#tab/sp)

1. From your project, select the gear icon ![gear icon](../../../media/icons/gear-icon.png) to navigate to your **Project settings**.

1. Select **Service connections** from the left pane.

1. Select **New service connection**, and then select **Docker Registry** then **Next**.

1. Select **Azure Container Registry**, and then select *Service Principal* as your **Authentication Type**.

1. Select your **Subscription** from the dropdown menu.

1. Select your **Azure container registry** from the list.

1. Enter a name for your service connection.

1. Select **Save** when you are done.

    :::image type="content" source="../media/acr-service-connection.png" alt-text="A screenshot showing how to set up a docker registry service connection.":::

* * *

## Build and publish to Azure Container Registry

1. From your Azure DevOps project, select **Pipelines** and then select **Create Pipeline**.

1. Select the service hosting your source code (Azure Repos, GitHub etc.).

1. Select your repository, and then select **Starter pipeline**.

1. Delete the default yaml pipeline and use the following snippet:

    ```yml
    trigger:
    - main

    variables:
      dockerRegistryServiceConnection: '<SERVICE_CONNECTION_NAME>'
      imageRepository: '<IMAGE_NAME>'
      dockerfilePath: '$(Build.SourcesDirectory)/app/Dockerfile'
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build and publish stage
      jobs:
      - job: Build
        displayName: Build job
        pool:
          name: '<YOUR_AGENT_POOL_NAME>'
        steps:
        - task: DockerInstaller@0
          inputs:
            dockerVersion: '17.09.0-ce'

        - task: Docker@2
          displayName: Build and publish image to Azure Container Registry
          inputs:
            command: buildAndPush
            containerRegistry: $(dockerRegistryServiceConnection)
            repository: $(imageRepository)
            dockerfile: $(dockerfilePath)
            tags: |
              $(tag)
    ```

1. Once the pipeline run is complete, you can verify your image in Azure. Navigate to your Azure Container Registry in Azure portal, and then select **Repositories**.

    :::image type="content" source="../media/acr-image.png" alt-text="A screenshot showing the image in Azure portal.":::

## Clean up resources

If you don't plan to continue using this application, delete the resource group to avoid incurring ongoing charges.

```azurecli-interactive
az group delete --name myapp-rg
```

## Related articles

- [Build and push images to Azure Container Registry with Docker templates](./acr-template.md)
- [Build and deploy to Azure Kubernetes Service](/azure/aks/devops-pipeline)
