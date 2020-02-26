---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/14/2020
---

##  Create an Azure Container Registry    

You can use [Azure Container Registry](/azure/container-registry/) to host the Docker image that is published by the CI pipeline.  Follow the steps below to create and configure a registry.  In later steps, you use Azure Pipelines to deploy the image to an Azure Web App for Containers.

1. Sign into Azure at [https://portal.azure.com](https://portal.azure.com).

1. In the Azure Portal, choose **New**, **Containers**, then choose **Azure Container Registry**.    

1. Enter a **Registry name**, **Resource Group**, and select a **Location**.    

   ![Container Registry settings](../media/createacr.png)

1. For **Admin user**, choose **Enable** and then choose **Create**.

1. Wait for the Azure Container Registry deployment to finish.
