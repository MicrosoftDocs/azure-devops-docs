---
title: Push an image
description: Push container images
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 3ce59600-a7f8-4a5a-854c-0ced7fdaaa82
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---

# Push an image

[!INCLUDE [include](../../_shared/version-team-services.md)]

Azure Pipelines can be used to push images to container registries such as Azure Container Registry (ACR), Docker Hub, Google Container Registries, and others.

## Push step in pipeline

The following YAML snippet showcases the usage of [Docker registry service connection](../../library/service-endpoints.md#sep-docreg) along with a Docker task to login and push to a container registry. Instances of Docker registry service connection serve as secure options for storing credentials needed to login to the container registry before pushing the image. These service connections can be directly referenced in Docker task to login to the registry without the need to add a script task for docker login and setting up of secret variables for username and password.

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

## Azure Container Registry

Under Azure Container Registry option of [Docker registry service connection](../../library/service-endpoints.md#sep-docreg), the subscription (associated with the AAD identity of the user signed into Azure DevOps) and container registry within the subscription can be chosen to create the service connection. These service connection can  be subsequently referenced from a pipeline task as shown in the YAML snippet above.

For creating a new pipeline for a repository containing Dockerfile, the [Build and Push to Azure Container Registry document](acr-template.md) describes the Docker template automatically recommended by Azure Pipelines upon detecting of Dockerfile in the repository. The Azure subscription and Azure Container Registry inputs provided for template configuration are used by Azure Pipelines to automatically create the Docker registry service connection and even construct a functioning build and push pipeline by referencing the created service connection.

## Docker Hub

Choose the Docker Hub option under [Docker registry service connection](../../library/service-endpoints.md#sep-docreg) and provide the username and password required for verifying and creating the service connection.

## Google Container Registry

The following steps walk through the creation of Docker registry service connection associated with Google Container Registry:
1. Open your project in the GCP Console and then open Cloud Shell
2. To save time typing your project ID and Compute Engine zone options, set default configuration values by running the following commands:

   ```
   gcloud config set project [PROJECT_NAME]
   gcloud config set compute/zone [ZONE]
   ```

3. Replace `[PROJECT_NAME]` with the name of your GCP project and replace `[ZONE]` with the name of the zone that you're going to use for creating resources. If you're unsure about which zone to pick, use `us-central1-a`. For example:

   ```
   gcloud config set project azure-pipelines-test-project-12345
   gcloud config set compute/zone us-central1-a
   ```

4. Enable the Container Registry API for your project:

   ```
   gcloud services enable containerregistry.googleapis.com
   ```

5. Create a service account for Azure Pipelines to publish Docker images:

   ```
   gcloud iam service-accounts create azure-pipelines-publisher --display-name "Azure Pipelines Publisher"
   ```

6. Assign the Storage Admin IAM role to the service account:

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

7. Generate a service account key:

   ```
   gcloud iam service-accounts keys create \
   azure-pipelines-publisher.json --iam-account $AZURE_PIPELINES_PUBLISHER

   tr -d '\n' < azure-pipelines-publisher.json > azure-pipelines-publisher-oneline.json
   ```
   Launch Code Editor by clicking the button in the upper-right corner of Cloud Shell:

   > [!div class="mx-imgBorder"]
   > ![Badge](../_shared/_img/gcp-code-editor.png "GCP code editor")

8. Open the file `named azure-pipelines-publisher-oneline.json`. You'll need the content of this file in one of the following steps:

9. In your Azure DevOps organization, select **Project settings** and then select **Pipelines -> Service connections**.

10. Click **New service connection** and choose **Docker Registry**

11. In the dialog, enter values for the following fields:

- **Docker Registry:** `https://gcr.io/[PROJECT-ID]`, where `[PROJECT-ID]` is the name of your GCP project.
- ****Docker ID:** `_json_key`
- **Docker Password:** Paste the contents of `azure-pipelines-publisher-oneline.json`
- **Service connection name:** `gcrServiceConnection`

12. Click **Save** to create the service connection

