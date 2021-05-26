---
title: Deploy containerized applications to Web App for Containers
description: Deploy container base web apps to Web App for Containers
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
ms.topic: quickstart
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/08/2021
monikerRange: '> tfs-2018'
"recommendations": "true"
---

# Deploy to Azure Web App for Containers

**Azure Pipelines**

With Azure Web App for Containers, you can easily deploy and run container-based web apps on Windows and Linux. In this quickstart, we will use Azure Pipelines to build and deploy our sample application to Web App for Containers App service.

With Azure Pipelines, you can implement a CI/CD workflow to automatically generate build Artifacts and trigger deployment to specific environments. 

:::image type="content" source="azure/media/vscode-git-ci-cd-to-azure.png" alt-text="CI/CD workflow":::

## Prerequisites

- Azure DevOps account. Create a free [Azure DevOps account](https://azure.microsoft.com/services/devops/) if you don't have one already.
- GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
- Azure subscription. Create a free [Azure account](https://azure.microsoft.com/free/) if you don't have one already.
- [Create an Azure container registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry) if you don't have one already.

## Get the code

[Fork](../../../repos/git/forks.md) or [clone](../../../repos/git/clone.md) the sample app to follow along with this tutorial.

#### [Java](#tab/java)

```
https://github.com/spring-guides/gs-spring-boot-docker.git
```
#### [JavaScript](#tab/java-script)

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```
#### [Python](#tab/python)

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial/
```
#### [.NET Core](#tab/dotnet-core)

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```
* * *

## Build and publish a Docker image to an Azure Container Registry

To complete this section successfully, you must have an [Azure Container Registry](#prerequisites). Refer to the prerequisites section for details. 
 
1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Pipelines**, and then **New Pipeline**.

1. Select **GitHub** when prompted for the location of your source code, and then select your repository.

1. Select the **Docker: build and push an image to Azure Container Registry** pipeline template.

    :::image type="content" source="media/docker-template.png" alt-text="Select Docker pipeline template":::

1. Select your Azure Subscription, and then select **Continue**.

1. Select your **Container registry** from the drop-down menu, and then select **Validate and configure**.

    :::image type="content" source="media/validate-and-configure.png" alt-text="Validate and configure Docker":::

1. Review the pipeline YAML template, and then select **Save and run** to build and publish the Docker image to your Azure Container Registry. 

    ```YAML
    trigger:
    - master
    
    resources:
    - repo: self
    
    variables:
        # Container registry service connection established during pipeline creation
        dockerRegistryServiceConnection: '{{ containerRegistryConnection.Id }}'
        imageRepository: 'javascriptdocker'
        containerRegistry: 'sampleappcontinerregistry.azurecr.io'
        dockerfilePath: '$(Build.SourcesDirectory)/app/Dockerfile'
        tag: '$(Build.BuildId)'
    
        # Agent VM image name
        vmImageName: 'ubuntu-latest'
    
    stages:
    - stage: Build
        displayName: Build and push stage
        jobs:
        - job: Build
        displayName: Build
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
1. To view the published docker image after your pipeline run has been completed, navigate to your container registry in Azure portal, and then select **Repositories**.

    :::image type="content" source="media/docker-image-in-azure-portal.png" alt-text="Docker image published to Azure Container Registry":::

1. To deploy your image from the container registry, you must enable the admin user account. Navigate to your container registry in Azure portal, and select **Access keys**. Next, select the toggle button to **Enable Admin user**.

    :::image type="content" source="media/enable-admin-user.png" alt-text="Enable Admin user":::

## Create an Azure Web App for Containers

1. Sign into Azure at [https://portal.azure.com](https://portal.azure.com).

1. In the Azure portal, choose **Create a resource** > **Containers**, and then choose **Web App for Containers**. 

    :::image type="content" source="media/create-web-app-container.png" alt-text="Create a web app for containers resource":::

1. Enter a name for your new web app, and select or create a new Resource Group. Select **Linux** for the **Operating System**.

    :::image type="content" source="media/configure-web-app.png" alt-text="Configure the web app":::

1. In the **SKU and Size** section, select **Change** to specify the pricing tier. Select the **Dev/Test** plan, and then choose the **F1 Free plan**. Select **Apply** when you are done.

    :::image type="content" source="media/pricing-tier.png" alt-text="Change pricing tier to free":::

1. Select **Review and create**. Review your configuration, and select **Create** when you are done.

## Create a release pipeline

1. From within your project, select **Pipelines** then **Release**.

1. Select **New pipeline** to create a new release pipeline.

1. Select the **Azure App Service deployment** template

    :::image type="content" source="media/app-service-template.png" alt-text="Azure App Service template":::

1. Select **Tasks**, then **Unlink all** in **stage 1** to unlink all the pipeline parameters. 

    :::image type="content" source="media/unlink-parameters.png" alt-text="Unlink pipeline parameters":::

1. Select the **Deploy Azure App Service** task, and fill out the required fields. Select **Save** when you are done.

    :::image type="content" source="media/deploy-task.png" alt-text="Deploy Azure App Service task":::

1. Select **Create release**, and then choose **Stage 1** from the dropdown menu. Select **Create** when you are done.

    :::image type="content" source="media/create-release.png" alt-text="Create a release pipeline":::

1. Hover over **Stage 1** in your pipeline, and select **Deploy** to queue and start the deployment.

    :::image type="content" source="media/deploy-docker-image.png" alt-text="Queue and deploy Docker image":::

1. Your pipeline logs should look similar to the screenshot below. 

    :::image type="content" source="media/pipeline-logs.png" lightbox="media/pipeline-logs.png" alt-text="Pipeline logs":::

1. Navigate to your newly deployed web app to verify your deployment.

    :::image type="content" source="media/deployed-web-app.png" alt-text="Web app deployed. Hello World message":::

## Next steps

- [Set up multi-stage release](../../release/define-multistage-release-process.md)
- [Stage templates in Azure Pipelines](../../release/env-templates.md)
- [Deploy from multiple branches using Azure Pipelines](../../release/deploy-multiple-branches.md)