---
title: Use Azure Pipelines to build and push container images to registries
description: Use Azure Pipelines to build and push container images to Docker Hub and Google Artifact Registry.
ms.topic: conceptual
ms.assetid: 3ce59600-a7f8-4a5a-854c-0ced7fdaaa82
ms.author: v-catherbund
author: cebundy
ms.date: 08/11/2024
monikerRange: '<= azure-devops'
---

# Use Azure Pipelines to build and push container images to registries

[!INCLUDE [version-gt-eq-2022](../../../includes/version-gt-eq-2020.md)] 

::: moniker range="azure-devops"

This article guides you through the setup and configuration for using Azure Pipelines to build and push a Docker image to an Azure Container Registry, Docker Hub, and Google Artifact Registry. Additionally, it details the use of the `System.AccessToken` for secure authentication within your pipeline.

::: moniker-end
::: moniker range="< azure-devops"

This article guides you through the setup and configuration for using Azure Pipelines to build and push a Docker image to a Docker Hub and Google Artifact Registry. Additionally, it details the use of the `System.AccessToken` for secure authentication within your pipeline.

::: moniker-end

You learn how to create a YAML pipeline to build and push a Docker image to a container registry. The Docker@2 task is used to build and push the image to the container registry.

## Prerequisites

::: moniker range="azure-devops"

- An Azure DevOps project
- A container registry (Docker Hub, Google Artifact Registry, or Azure Container Registry)
- A GitHub repository with a Dockerfile. If you don't have one, you can use the [sample repository]( https://github.com/MicrosoftDocs/pipelines-javascript-docker)  In your browser, go the sample repository and fork it to your GitHub account.
- Docker. If using a self-hosted agent, ensure Docker is installed and the Docker engine running with elevated privileges. Microsoft-hosted agents have Docker preinstalled.

::: moniker-end
::: moniker range="< azure-devops"

- An Azure DevOps project
- A container registry (Docker Hub or Google Artifact Registry)
- A GitHub repository with a Dockerfile. If you don't have one, you can use the [sample repository]( https://github.com/MicrosoftDocs/pipelines-javascript-docker)  In your browser, go the sample repository and fork it to your GitHub account.
- Docker. If using a self-hosted agent, ensure Docker is installed and the Docker engine running with elevated privileges. Microsoft-hosted agents have Docker preinstalled.
- 
::: moniker-end

## Create a Docker Service Connection

Before pushing container images to a registry, you need to create a service connection in Azure DevOps. This service connection stores the credentials required to securely authenticate with the container registry. Go to the [Service connections](../../library/service-endpoints.md) page in your Azure DevOps project to create a new service connection and select the **Docker Registry** connection type.

There are different processes to create a service connection for a Docker Hub and a Google Artifact Registry. 

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

## [Google Artifact Registry](#tab/google)

To create a Docker service connection associated with Google Artifact Registry:

1. Open your project in the Google Cloud Platform (GCP) Console and then open Cloud Shell
1. To save time typing your project ID and Compute Engine zone options, set default configuration values by running the following commands:

   ```console
   gcloud config set project [PROJECT_NAME]
   gcloud config set compute/zone [ZONE]
   ```

1. Replace `[PROJECT_NAME]` with the name of your GCP project and replace `[ZONE]` with the name of the zone that you're going to use for creating resources. If you're unsure about which zone to pick, use `us-central1-a`. For example:

   ```console
   gcloud config set project azure-pipelines-test-project-12345
   gcloud config set compute/zone us-central1-a
   ```

1. Enable the Artifact Registry API for your project:

   ```console
   gcloud services enable artifactregistry.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

1. Create a service account for Azure Pipelines to publish Docker images:

   ```console
   gcloud iam service-accounts create azure-pipelines-publisher --display-name "Azure Pipelines Publisher"
   ```

1. Assign the Storage Admin identity and access management (IAM) role to the service account:

   ```console
   PROJECT_NUMBER=$(gcloud projects describe \
   $(gcloud config get-value core/project) \
   --format='value(projectNumber)')

   AZURE_PIPELINES_PUBLISHER=$(gcloud iam service-accounts list \
       --filter="displayName:Azure Pipelines Publisher" \
       --format='value(email)')
    
   gcloud projects add-iam-policy-binding \
       $(gcloud config get-value core/project) \
       --member serviceAccount:$AZURE_PIPELINES_PUBLISHER \
       --role roles/storage.admin
   ```

1. Generate a service account key:

   ```console
   gcloud iam service-accounts keys create \
   azure-pipelines-publisher.json --iam-account $AZURE_PIPELINES_PUBLISHER

   tr -d '\n' < azure-pipelines-publisher.json > azure-pipelines-publisher-oneline.json
   ```

   Launch Code Editor by clicking the button in the upper-right corner of Cloud Shell:

   :::image type="content" source="../media/gcp-code-editor.png" alt-text="GCP code editor":::


1. Open the file `named azure-pipelines-publisher-oneline.json`. You need the content of this file in one of the following steps:

1. In your Azure DevOps organization, select **Project settings** and then select **Pipelines -> Service connections**.

1. Select **New service connection** and choose **Docker Registry**

1. In the dialog, enter values for the following fields:

   - **Docker Registry:** `https://gcr.io/[PROJECT-ID]`, where `[PROJECT-ID]` is the name of your GCP project.
   - **Docker ID:** `_json_key`
   - **Docker Password:** Paste the contents of `azure-pipelines-publisher-oneline.json`
   - **Service connection name:** `gcrServiceConnection`

1. Select **Save** to create the service connection

---

## Create an Azure Pipeline to build and push a Docker image

The [Docker@2 task](/azure/devops/pipelines/tasks/reference/docker-v2) is designed to streamline the process of building, pushing, and managing Docker images within your Azure Pipelines. This task supports a wide range of Docker commands, including build, push, login, logout, start, stop, and run.

The following steps outline how to create a YAML pipeline that uses the Docker@2 task to build and push the image.  
::: moniker range="azure-devops"

1. Navigate to your Azure DevOps project and select **Pipelines** from the left-hand menu.

1. Select **New pipeline** to create a new pipeline.
1. Select the GitHub repository containing your Dockerfile.
    - If you're redirected to GitHub to sign in, enter your GitHub credentials.
    - If you're redirected to GitHub to install the Azure Pipelines app, select **Approve and install**.
1. Select the **Starter pipeline** template to create a basic pipeline configuration.
1. Replace the contents of **azure-pipelines.yml** with the following code. 
    1. Based on whether you're deploying a Linux or Windows app, make sure to respectively set `vmImage` to either `ubuntu-latest` or `windows-latest`. If you're using a self-hosted agent, set `vmImage` to the name of the pool that contains the self-hosted agent with Docker capability. You can add the `demands: docker` property to ensure an agent with Docker installed is selected.
    1. Replace `<docker connection>` with the name of the Docker service connection you created earlier.
    1. Replace `<target repository name>` with the name of the repository in the container registry where you want to push the image. For example, to push to a Docker Hub repository, use `<your-docker-hub-username>/<repository-name>`, to push to a Google repository, use `<your-project-id>/<your-image-name>`.

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

1. When you're done, select **Save and run**.

1. When you save the **azure-pipelines.yml** file to your repository, you're prompted to add a commit message. Enter a message, and then select **Save and run**.

When using self-hosted agents, be sure that Docker is installed on the agent's host, and the Docker engine/daemon is running with elevated privileges.  

::: moniker-end

::: moniker range="< azure-devops"

To build the image, Docker must be installed on the agent's host and the Docker engine/daemon must be running with elevated privileges. Use the following steps to create your pipeline using the YAML pipeline editor.

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
1. In the YAML pipeline editor, replace the contents of the YAML file with the following code. Replace the pool name with the name of the pool that contains your self-hosted agent with Docker capability.
    1. Based on whether you're deploying a Linux or Windows app, make sure to respectively set `vmImage` to either `ubuntu-latest` or `windows-latest`.
    1. Replace `<target repository name>` with the name of the repository in the container registry where you want to push the image. For example, to push to a Docker Hub repository, use `<your-docker-hub-username>/<repository-name>`.
    1. Replace `<docker connection>` with the name of the Docker service connection you created earlier.

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

1. Select **Save and run**.
1. On the **Save and run** page, select **Save and run** again.

::: moniker-end

You can watch the pipeline run and view the logs to see the Docker image being built and pushed to the container registry.


## Using System.AccessToken for Authentication in Docker@2 Task

You can authenticate with a container registry using the `System.AccessToken` provided by Azure DevOps. This token allows secure access to resources within your pipeline without exposing sensitive credentials.

The following YAML pipeline example, the Docker@2 task is used to sign in to the container registry and push the Docker image. The System.AccessToken is set as an environment variable to authenticate the Docker commands.

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