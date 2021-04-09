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
---

# Deploy to Azure Web App for Containers

**Azure Pipelines**

With Azure Web App for Containers you can easily deploy and run container-based web apps on Windows and Linux. In this quickstart, we will use Azure Pipelines to build and deploy our sample application to Web App for Containers.

Azure Pipelines enables us to implement a CI/CD workflow to automatically generates build Artifacts and trigger deployment to specific environments. 

:::image type="content" source="azure/media/vscode-git-ci-cd-to-azure.png" alt-text="CI/CD workflow":::

## Prerequisites

- Azure DevOps account. Create an free [Azure DevOps account](https://azure.microsoft.com/services/devops/) if you don't have one already.
- GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
- Azure subscription. Create a free [Azure account](https://azure.microsoft.com/free/) if you don't have one already.
- [Create an Azure container registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal#create-a-container-registry).

## Get the code

Fork or clone the sample app to follow along with this tutorial.

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

## Build and publish Docker image to Azure Container Registry

To complete this section successfully you will need to have an Azure container registry. Make sure you finished the step outlined in the prerequisites.
 
1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Pipelines** then **New Pipeline**.

1. Select **GitHub** when prompted for the location of your source code then select your repository.

1. Select the **Docker: build and push an image to Azure Container Registry** pipeline template.

    :::image type="content" source="media/docker-template.png" alt-text="Select Docker pipeline template":::

1. Select your Azure Subscription then select **Continue**.

1. Select the **Container registry** you created earlier from the drop down menu then select **Validate and configure**.

    :::image type="content" source="media/validate-and-configure.png" alt-text="Validate and configure Docker":::

1. Review the pipeline YAML template then select **Save and run** to build and publish the Dockker image to your Azure Container Registry. 

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
1. To view your published docker image after your pipeline run has been completed, navigate to your container registry in Azure portal and select **Repositories**.

    :::image type="content" source="media/docker-image-in-azure-portal.png" alt-text="Validate and configure Docker":::

## Create an Azure Web App for Containers

1. Sign into Azure at [https://portal.azure.com](https://portal.azure.com).

1. In the Azure Portal, choose **Create a resource**, **Containers**, then choose **Web App for Containers**. 

    :::image type="content" source="media/create-web-app-container.png" alt-text="Create a web app for containers resource":::

1. Enter a name for your new web app, and select or create a new Resource Group. Select **Linux** for the **Operating System**.

    :::image type="content" source="media/configure-web-app.png" alt-text="Configure the web app":::

1. In the **Sku abd size** section, select **Change** to specify the pricing tier. Select the **Dev/Test** plan then choose the **F1 Free plan**. Select **Apply** when you are done.

    :::image type="content" source="media/pricing-tier.png" alt-text="Change pricing tier to free":::

1. Select **Review and create**. Review your configuration and select **Create** when you are done.

## Create a release pipeline

1. From within your project, select **Pipelines** then **Release**.

1. Select **New pipeline** to create a new release pipeline.

1. Select the **Azure App Service deployment** template

    :::image type="content" source="media/app-service-template.png" alt-text="Azure App Service template":::

1. Select **Tasks** then **Unlink all** in stage 1 to unlink all the pipeline parameters. 

    :::image type="content" source="media/unlink-parameters.png" alt-text="Unlink pipeline parameters":::

1. Select the **Deploy Azure App Service** task and fill out the required fields. Select **Save** when you are done.

    :::image type="content" source="media/deploy-task.png" alt-text="Deploy Azure App Service task":::

1. Select **Create release** then choose **Stage1** from the dropdown menu. Select **Create** when you are done.

    :::image type="content" source="media/create-release.png" alt-text="Create a release pipeline":::
 

## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
