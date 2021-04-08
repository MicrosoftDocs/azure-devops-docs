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

## Pipeline setup

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Pipelines** then **New Pipeline**.

1. Select **GitHub** when prompted for the location of your source code then select your repository.

1. Select the **Docker** pipeline template 

    :::image type="content" source="media/docker-template.png" alt-text="Select Docker pipeline template":::

1. Verify your Dockerfile then select **Validate and configure**.

    :::image type="content" source="media/validate-and-configure.png" alt-text="Validate and configure Docker":::

1. Review the pipeline YAML template then select **Save and run**. 

    ```YAML
    trigger:
    - master
    
    resources:
    - repo: self
    
    variables:
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build image
      jobs:
      - job: Build
        displayName: Build
        pool:
          vmImage: ubuntu-latest
        steps:
        - task: Docker@2
          displayName: Build an image
          inputs:
            command: build
            dockerfile: '$(Build.SourcesDirectory)/app/Dockerfile'
            tags: |
              $(tag)
    ```

[!INCLUDE [create-azure-webapp-to-host-container](../includes/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../includes/create-release-azure-webapp-container.md)]

## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
