---
title: Use Azure Pipelines to build and push container images to registries
description: Use Azure Pipelines to build and push container images to Docker Hub and Azure Container Registry.
ms.topic: conceptual
ms.assetid: 3ce59600-a7f8-4a5a-854c-0ced7fdaaa82
ms.author: v-catherbund
author: cebundy
ms.date: 11/25/2024
monikerRange: '<= azure-devops'
---

# Use Azure Pipelines to build and push container images to registries

[!INCLUDE [version-gt-eq-2022](../../../includes/version-gt-eq-2020.md)] 

::: moniker range="azure-devops"

This article guides you through the setup and configuration in Azure Pipelines to build and push a Docker image to an Azure Container Registry and Docker Hub. Additionally, it details the use of the `System.AccessToken` for secure authentication within your pipeline.

::: moniker-end
::: moniker range="< azure-devops"

This article guides you through the setup and configuration for using Azure Pipelines to build and push a Docker image to a Docker Hub. Additionally, it details the use of the `System.AccessToken` for secure authentication within your pipeline.

::: moniker-end

You learn how to create a YAML pipeline to build and push a Docker image to a container registry using he Docker@2 task.

## Prerequisites

::: moniker range="azure-devops"

- **Azure DevOps:** 
    - An [Azure DevOps project](../../../organizations/projects/create-project.md).
      - **Permissions:** 
          - To grant access to all pipelines in the project: You must be a member of the [Project Administrators group](../../../organizations/security/change-project-level-permissions.md).
          - To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../../library/add-resource-protection.md). 
    - If you're using a self-hosted agent, ensure Docker is installed and the Docker engine is running with elevated privileges. Microsoft-hosted agents have Docker preinstalled.
- **GitHub:**   
    - A [GitHub](https://github.com) account.
    - A GitHub repository with a Dockerfile. Use the [sample repository](https://github.com/MicrosoftDocs/pipelines-javascript-docker) if you don't have your own project.
    - A [GitHub service connection](../../library/service-endpoints.md#github-service-connection) to authorize Azure Pipelines.
- **Azure:** <br>If you're deploying to Azure:
    - An [Azure subscription](https://azure.microsoft.com/free/).
    - An [Azure Container Registry](/azure/container-registry/container-registry-get-started-portal).
- **Docker Hub:** <br>If you're deploying to Docker Hub:
    - A [Docker Hub](https://hub.docker.com/) account.
    - A [Docker Hub](https://hub.docker.com/) image repository.


| **Platform**    | **Requirements**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps** | - An [Azure DevOps project](../../../organizations/projects/create-project.md).<br>   - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: You must be a member of the [Project Administrators group](../../../organizations/security/change-project-level-permissions.md).<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../../library/add-resource-protection.md).<br>   - If you're using a self-hosted agent, ensure Docker is installed and the Docker engine is running with elevated privileges. Microsoft-hosted agents have Docker preinstalled. |
| **GitHub**       | - A [GitHub](https://github.com) account.<br>   - A GitHub repository with a Dockerfile. Use the [sample repository](https://github.com/MicrosoftDocs/pipelines-javascript-docker) if you don't have your own project.<br>   - A [GitHub service connection](../../library/service-endpoints.md#github-service-connection) to authorize Azure Pipelines.                                                                                                                                                  |
| **Azure**        | - An [Azure subscription](https://azure.microsoft.com/free/).<br>   - An [Azure Container Registry](/azure/container-registry/container-registry-get-started-portal).                                                                                                                                                                                                                                                                                                                                 |
| **Docker Hub**   | - A [Docker Hub](https://hub.docker.com/) account.<br>   - A [Docker Hub](https://hub.docker.com/) image repository.                                                                                                                                                                                                                                                                                                                                                                                 |


::: moniker-end
::: moniker range="< azure-devops"

- **Project requirements:** An [Azure DevOps project](../../../organizations/projects/create-project.md).
- **Permissions:**   
    - Be a member of the [**Project Administrators** group](../../../organizations/security/change-project-level-permissions.md).
    - The [**Administrator** role for service connections](../../library/add-resource-protection.md) in your Azure DevOps project. 
- **Subscriptions:** 
    - A GitHub account. If you don't have one, you can create one for free at [GitHub](https://github.com).
    - Docker Hub account: You need a Docker Hub account. If you don't have one, you can create one for free at [Docker Hub](https://hub.docker.com/).
- **Repository:** A GitHub repository with a Dockerfile. If you don't have one, you can use the [sample repository](https://github.com/MicrosoftDocs/pipelines-javascript-docker)
- **Service connection:** A GitHub Enterprise Server service connection. If you don't have one, you can create one in your Azure DevOps project settings. For more information to create a service connection, see [Service connections](../../library/service-endpoints.md#github-enterprise-server-service-connection).
- **Container registry:** A ([Docker Hub](https://hub.docker.com/) container registry 
- **Software requirements:** Docker must be is installed and the Docker engine running with elevated privileges on your self-hosted agent.


::: moniker-end

## Create a Docker service connection

Before pushing container images to a registry, you need to create a service connection in Azure DevOps. This service connection stores the credentials required to securely authenticate with the container registry. Go to [Service connections](../../library/service-endpoints.md) in your Azure DevOps project settings to create a new [Docker Registry](../../library/service-endpoints.md#docker-registry-service-connection) service connection.

# [Docker Hub](#tab/docker)

Choose the Docker Hub option under [Docker registry service connection](../../library/service-endpoints.md#docker-hub-or-others) and provide your username and password to create a Docker service connection.

# [Azure Container Registry](#tab/azure)

::: moniker range="azure-devops"
Choose the Azure Container Registry option under [Docker registry service connection](../../library/service-endpoints.md#azure-container-registry) and provide the information required by the authentication method you choose.

You can also create your pipeline using the Docker template to build and push an image to Azure Container Registry. This template automatically creates a service connection and a YAML pipeline for you. For more information, see [Use Docker YAML to build and push images to Azure Container Registry](./acr-template.md).

::: moniker-end

::: moniker range="< azure-devops"

Pushing a Docker image to Azure Container Registry isn't supported in Azure DevOps Server.

::: moniker-end

---

## Create a YAML pipeline to build and push a Docker image


# [Docker Hub](#tab/docker)

The [Docker@2 task](/azure/devops/pipelines/tasks/reference/docker-v2) is designed to streamline the process of building, pushing, and managing Docker images within your Azure Pipelines. This task supports a wide range of Docker commands, including build, push, login, logout, start, stop, and run.

Use following steps to create a YAML pipeline that uses the Docker@2 task to build and push the image.  

::: moniker range="azure-devops"

1. Go to your Azure DevOps project and select **Pipelines** from the left-hand menu.

1. Select **New pipeline**.
1. Select the location of your source repository.
1. Select **GitHub** as the location of your source code and select your repository.
    - If you're redirected to GitHub to sign in, enter your GitHub credentials.
    - If you're redirected to GitHub to install the Azure Pipelines app, select **Approve and install**.
1. Select the **Starter pipeline** template to create a basic pipeline configuration.
1. Replace the contents of **azure-pipelines.yml** with the following code:


   ```yaml

    trigger:
    - main
    
    pool:
      vmImage: 'ubuntu-latest' 
    
    variables:
      repositoryName: '<target repository name>'
    
    steps:
    - task: Docker@2
      inputs:
        containerRegistry: '<docker connection>'
        repository: $(repositoryName)
        command: 'buildAndPush'
        Dockerfile: '**/Dockerfile'

   ```

1. Edit the pipeline YAML file as follows:
    - Based on whether you're deploying a Linux or Windows app, make sure to respectively set `vmImage` to either `ubuntu-latest` or `windows-latest`. 
    
        If you're using a self-hosted agent, set `vmImage` to the name of the pool that contains the self-hosted agent with Docker capability. You can add the `demands:` property to ensure an agent with Docker installed is selected. For example:

        ```yaml
            pool:
              name: <your agent pool>
              demands: docker
        ```

    - Replace `<docker connection>` with the name of the Docker service connection you created earlier.
    - Replace `<target repository name>` with the name of the repository in the container registry where you want to push the image. For example, `<your-docker-hub-username>/<repository-name>`.
1. When you're done, select **Save and run**.

1. When you save the **azure-pipelines.yml** file to your repository, you're prompted to add a commit message. Enter a message, and then select **Save and run**.

When using self-hosted agents, be sure that Docker is installed on the agent's host, and the Docker engine/daemon is running with elevated privileges.  

::: moniker-end

::: moniker range="< azure-devops"

To build the image, Docker must be installed on the agent's host and the Docker engine/daemon must be running with elevated privileges. 

Use the following steps to create your pipeline using the YAML pipeline editor.

1. Go to your collection and create a project.
1. In your project, select **Pipelines**.
1. Select **Create Pipeline**.
1. Select **GitHub Enterprise Server** as the location for your source code.
1. If you haven't already, authorize Azure Pipelines to connect to your GitHub Enterprise Server account.
    1. Select **Connect to GitHub Enterprise Server**.
    1. Enter your account details, and then select **Verify and save**.
1. Select your repository.
   If you're redirected to GitHub to install the Azure Pipelines app, select **Approve and install**.
1. To configure your pipeline, select the **Build a Docker image** template.
1. In the YAML pipeline editor, replace the contents of the YAML file with the following code:

    ```yml

    trigger:
    - main
    
    pool:
      name: default
      demands: docker
    
    variables:
      repositoryName: '<target repository name>'
    
    steps:
    - task: Docker@2
      inputs:
        containerRegistry: '<docker connection>'
        repository: $(repositoryName)
        command: 'buildAndPush'
        Dockerfile: '**/Dockerfile'
    
    ```

1. Edit the pipeline YAML file as follows:
    - Replace the pool name with the name of the pool that contains your self-hosted agent with Docker capability.   
    - Replace `<target repository name>` with the name of the repository in the container registry where you want to push the image. For example, `<your-docker-hub-username>/<repository-name>`.
    - Replace `<docker connection>` with the name of the Docker service connection you created earlier.

1. Select **Save and run**.
1. On the **Save and run** page, select **Save and run** again.

::: moniker-end

You can watch the pipeline run and view the logs to see the Docker image being built and pushed to the container registry.


# [Azure Container Registry](#tab/azure)

::: moniker range="azure-devops"

You can create a YAML pipeline to build and push a Docker image to an Azure container registry using the Docker template as described in [Use Docker YAML to build and push Docker images to Azure Container Registry](build-image.md) or use the following steps.  

The Docker@2 task is used to build and push the image to the container registry.
The [Docker@2 task](/azure/devops/pipelines/tasks/build/docker) is designed to streamline the process of building, pushing, and managing Docker images within your Azure Pipelines. This task supports a wide range of Docker commands, including build, push, login, logout, start, stop, and run.

Use the following steps to create a YAML pipeline that uses the Docker@2 task to build and push the image.  


1. Go to your Azure DevOps project and select **Pipelines** from the left-hand menu.

1. Select **New pipeline**.
1. Select **GitHub** as the location of your source code and select your repository.
    - If you're redirected to GitHub to sign in, enter your GitHub credentials.
    - If you're redirected to GitHub to install the Azure Pipelines app, select **Approve and install**.
1. Select your repository.
1. Select the **Starter pipeline** template to create a basic pipeline configuration.
1. Replace the contents of **azure-pipelines.yml** with the following code: 

    ```yaml

    trigger:
    - main
    
    pool:
      vmImage: 'ubuntu-latest' 
    
    variables:
      repositoryName: '<target repository name>' 
    
    steps:
    - task: Docker@2
      inputs:
        containerRegistry: '<docker registry service connection>'
        repository: $(repositoryName)
        command: 'buildAndPush'
        Dockerfile: '**/Dockerfile'
    
    ```

1. Edit the pipeline YAML file as follows:
    - Replace `<target repository name>` with the name of the repository in the container registry where you want to push the image.
    - Replace `<docker registry service connection>` with the name of the Docker registry service connection you created earlier.

1. When you're done, select **Save and run**.

1. When you save the **azure-pipelines.yml** file to your repository, you're prompted to add a commit message. Enter a message, and then select **Save and run**.

When using self-hosted agents, be sure that Docker is installed on the agent's host, and the Docker engine/daemon is running with elevated privileges.  

::: moniker-end

::: moniker range="< azure-devops"

Pushing docker imaged to Azure Container Registry isn't supported in Azure DevOps Server.

::: moniker-end

---

## Using System.AccessToken for Authentication in Docker@2 Task

You can authenticate with a container registry using the `System.AccessToken` provided by Azure DevOps. This token allows secure access to resources within your pipeline without exposing sensitive credentials.

The following YAML pipeline example, the Docker@2 task is used to sign in to the container registry and push the Docker image. The `System.AccessToken` is set as an environment variable to authenticate the Docker commands.

Replace `<docker connection>` with your Docker registry service connection name.
Replace `<your repository>` with the name of your Docker repository.


```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  SYSTEM_ACCESSTOKEN: $(System.AccessToken)

steps:
- task: Docker@2
  inputs:
    command: login
    containerRegistry: '<docker connection>'
  env:
    SYSTEM_ACCESSTOKEN: $(System.AccessToken)

- task: Docker@2
  inputs:
    command: buildAndPush
    repository: '<your repository>'
    dockerfile: '**/Dockerfile'
    tags: |
      $(Build.BuildId)
  env:
    SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

## Related articles

- [Use Docker YAML to build and push images to Azure Container Registry](./acr-template.md)
- [Use Docker YAML to build and push images to Azure Container Registry (self-hosted agent)](./publish-to-acr.md)
