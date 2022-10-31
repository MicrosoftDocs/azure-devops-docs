---
title: Push an image
description: Push container images
ms.topic: conceptual
ms.assetid: 3ce59600-a7f8-4a5a-854c-0ced7fdaaa82
ms.author: atulmal
author: azooinmyluggage
ms.date: 10/31/2022
monikerRange: 'azure-devops'
---

# Push an image

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use Azure Pipelines to push your image to a container registry such as [Azure Container Registry](/azure/container-registry/), Docker Hub, or Google Container Registry. Azure Container Registry is a managed registry service based on the open-source Docker Registry 2.0. 

For a tutorial on building and pushing images to a container registry, see [Build and push Docker images to Azure Container Registry](/azure/devops/pipelines/ecosystems/containers/acr-template).

To learn how to build a container image to deploy with Azure Pipelines, see [Build container images to deploy apps](build-image.md). 

## About the Docker task

You can use the [Docker@2 task](/azure/devops/pipelines/tasks/reference/docker-v2) to build or push Docker images, login or logout, start or stop containers, or run a Docker command.

The task uses a [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection) along with a Docker task to log in and push to a container registry. 

The Docker registry service connection stores credentials to the container registry before pushing the image. You can also directly reference service connections in Docker without an additional script task.   

```YAML
- task: Docker@2
  displayName: Push image
  inputs:
    containerRegistry: |
      $(dockerHub)
    repository: $(imageName)
    command: push
    tags: |
      test1
      test2
```

## Create a Docker service connection

You'll need to follow a different process to create a service connection for Azure Container Registry, Docker Hub, and Google Container Registry. Once you have a service connection, you'll be able to use the Docker@2 task. 

#### [Azure Container Registry](#tab/azure)

With the Azure Container Registry option for [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection), the subscription (associated with the Azure Active Directory identity of the user signed into Azure DevOps) and container registry within the subscription can be chosen to create the service connection. These service connections can be later referenced from a pipeline task as shown in the YAML snippet above.

When creating a new pipeline for a repository containing Dockerfile, the [Build and Push to Azure Container Registry document](acr-template.md) describes the Docker template automatically recommended by Azure Pipelines upon detecting of Dockerfile in the repository. The Azure subscription and Azure Container Registry inputs provided for template configuration are used by Azure Pipelines to automatically create the Docker registry service connection and even construct a functioning build and push pipeline by referencing the created service connection.

#### [Docker Hub](#tab/docker)

Choose the Docker Hub option under [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection) and provide the username and password to create the service connection.

#### [Google Container Registry](#tab/google)

The following steps walk through the creation of Docker registry service connection associated with Google Container Registry:

1. Open your project in the GCP Console and then open Cloud Shell
1. To save time typing your project ID and Compute Engine zone options, set default configuration values by running the following commands:

   ```
   gcloud config set project [PROJECT_NAME]
   gcloud config set compute/zone [ZONE]
   ```

1. Replace `[PROJECT_NAME]` with the name of your GCP project and replace `[ZONE]` with the name of the zone that you're going to use for creating resources. If you're unsure about which zone to pick, use `us-central1-a`. For example:

   ```
   gcloud config set project azure-pipelines-test-project-12345
   gcloud config set compute/zone us-central1-a
   ```

1. Enable the Container Registry API for your project:

   ```
   gcloud services enable containerregistry.googleapis.com
   ```

1. Create a service account for Azure Pipelines to publish Docker images:

   ```
   gcloud iam service-accounts create azure-pipelines-publisher --display-name "Azure Pipelines Publisher"
   ```

1. Assign the Storage Admin IAM role to the service account:

   ```
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

   ```
   gcloud iam service-accounts keys create \
   azure-pipelines-publisher.json --iam-account $AZURE_PIPELINES_PUBLISHER

   tr -d '\n' < azure-pipelines-publisher.json > azure-pipelines-publisher-oneline.json
   ```
   Launch Code Editor by clicking the button in the upper-right corner of Cloud Shell:

   > [!div class="mx-imgBorder"]
   > ![Badge](../media/gcp-code-editor.png "GCP code editor")

1. Open the file `named azure-pipelines-publisher-oneline.json`. You'll need the content of this file in one of the following steps:

1. In your Azure DevOps organization, select **Project settings** and then select **Pipelines -> Service connections**.

1. Select **New service connection** and choose **Docker Registry**

1. In the dialog, enter values for the following fields:

   - **Docker Registry:** `https://gcr.io/[PROJECT-ID]`, where `[PROJECT-ID]` is the name of your GCP project.
   - **Docker ID:** `_json_key`
   - **Docker Password:** Paste the contents of `azure-pipelines-publisher-oneline.json`
   - **Service connection name:** `gcrServiceConnection`

1. Select **Save** to create the service connection

---