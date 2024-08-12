---
title: Use a Docker template pipeline to build and push images to Azure Container Registry
description: Learn how to use the Azure Pipelines Docker template to create a YAML pipeline that builds and pushes a Docker image to Azure Container Registry.
ms.topic: tutorial
ms.assetid: 2ae9bd01-22ff-4147-a5bb-24d884812635
ms.author: ericvan
author: geekzter
ms.date: 08/09/2024
monikerRange: 'azure-devops'
---
# Build and push Docker images to Azure Container Registry

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

This tutorial shows you how to use the Azure Pipelines Docker template to build a containerized application and push it to Azure Container Registry. The template sets up a continuous integration YAML pipeline. New code repository changes trigger the pipeline to build and publish updated Docker images to the registry.

The Docker template-based pipeline uses Microsoft-hosted agents and creates a service connection to connect to Azure Container Registry. For a tutorial that does the same process using self-hosted agents and a managed service identity, see [Build and push Docker images to Azure Container Registry](publish-to-acr.md).

## Prerequisites

- An Azure account where you have permission to create and configure resources. If you don't have an Azure account, [sign up for a free account](https://azure.microsoft.com/free/).
- An Azure DevOps organization and project where you have permission to create pipelines and deploy apps. To create an organization or project, see [Create a new organization](../../../organizations/accounts/create-organization.md) or [Create a project in Azure DevOps](../../../organizations/projects/create-project.md).
- A GitHub account.

  >[!IMPORTANT]
  >When you use GitHub in the following procedures, you might be prompted to create a [GitHub service connection](../../library/service-endpoints.md#github-service-connection), sign in to GitHub, authenticate to GitHub organizations, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../../repos/github.md#access-to-github-repositories).

## Get the sample app

In GitHub, fork or clone the [Sample Docker and Kubernetes Node.JS app](https://github.com/MicrosoftDocs/pipelines-javascript-docker) repository.

## Create a container registry

1. From the [Azure portal](https://portal.azure.com) sign in to Azure Cloud Shell by selecting the icon at upper-right. Make sure to use the **Bash** shell.

   :::image type="content" source="../media/azure-cloud-shell.png" alt-text="Azure Cloud Shell button":::

1. In the Cloud Shell, run the following commands to create a resource group and an Azure container registry by using the Azure CLI. A Container Registry name must be lowercase.

   ```azurecli
   az group create --name myapp-rg --location eastus
   az acr create --resource-group myapp-rg --name mycontainerregistry --sku Basic
   ```

1. To deploy a Docker image to the Azure container registry, you must enable the admin user account for the registry, which is disabled by default. To enable the admin user for your registry, use the `--admin-enabled` parameter of the `az acr update` command.

   ```azurecli
   az acr update -n <acrName> --admin-enabled true
   ```

   For more information and instructions, see [Admin account](/azure/container-registry/container-registry-authentication#admin-account).

Alternatively, you can use the Azure portal UI to create your Azure container registry. For instructions, see [Create a container registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry).

## Create the pipeline

1. In your Azure DevOps project, select **Pipelines** > **New pipeline**, or **Create pipeline** if this is the first pipeline in the project.

   :::image type="content" source="../media/new-pipeline.png" alt-text="Screenshot that shows the Create a new pipeline screen.":::
   
1. Select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your sample code repository.
1. On the **Configure your pipeline** screen, select the **Docker: Build and push an image to Azure Container Registry** pipeline.

   :::image type="content" source="../media/docker-task.png" alt-text="Screenshot that shows the Build and push Docker image to Azure Container Registry pipeline selection.":::

1. On the **Docker** screen, select your Azure subscription and then select **Continue**.
1. Select your **Container registry** from the dropdown menu, provide an **Image Name**, and then select **Validate and configure**.

   :::image type="content" source="../media/docker-container-registry.png" alt-text="Screenshot showing how to configure a Docker pipeline to build and publish an image to Azure Container Registry.":::

   Azure Pipelines generates an *azure-pipelines.yml* file that defines your pipeline.

1. Review the code in *azure-pipelines.yml*, and then select **Save and run**.

   :::image type="content" source="../media/review-your-pipeline.png" alt-text="Screenshot of the Save and run button in a new YAML pipeline.":::

1. Optionally edit the **Commit message** and provide a description, then select **Save and run** again to commit the *azure-pipelines.yml* file to your repository and start a build.

1. The build run page shows build details and progress. To watch your pipeline in action, select **Job** on the lower part of the page.

   :::image type="content" source="../media/jobs-build.png" alt-text="Monitor builds":::

## Pipeline details

The pipeline is generated from the [Docker container template](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/docker-container.yml). The build stage uses the [Docker v2 task](/azure/devops/pipelines/tasks/reference/docker-v2) to build and push your Docker image to the container registry.

The Docker task uses a Docker registry [service connection](../../library/service-endpoints.md) to enable your pipeline to push images to your container registry. Azure Pipelines generates this service connection when it creates this pipeline.

```yaml
- stage: Build
  displayName: Build and push stage
  jobs:  
  - job: Build
    displayName: Build job
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: Docker@2
      displayName: Build and push an image to container registry
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)
```

## Clean up resources

When you finish using the resources you created in this tutorial, you can delete them to avoid incurring further charges. Run the following Cloud Shell command to delete your resource group.

```azurecli
az group delete --name myapp-rg
```

## Related articles

- [Deploy a custom container to Azure App Service with Azure Pipelines](../../apps/cd/deploy-docker-webapp.md)
- [Docker Content Trust](./content-trust.md)
