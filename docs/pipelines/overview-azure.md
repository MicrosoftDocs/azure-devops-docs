---
title: Deploy to Azure index to content
ms.custom: seodec18
description: Learn how to deploy to Azure using Azure Pipelines. Tutorials, references, and other documentation.  
ms.assetid: BC7FACEF-6E79-4BBA-BF53-07BD27EEB235  
ms.author: jukullam
author: juliakm
ms.date: 06/22/2021
ms.type: reference
monikerRange: '>= tfs-2015'
---

# Deploy to Azure

[!INCLUDE [version-tfs-2015-rtm](includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"


::: moniker-end

Azure Pipelines is Microsoft's DevOps solution for Azure. Azure Pipelines gives you a way to quickly deploy your application to Azure.

You can use Pipelines to deploy to most Azure services. To learn more about selecting an Azure service for hosting your application code, see [Choose an Azure compute service for your application](/azure/architecture/guide/technology-choices/compute-decision-tree).




- Web Apps (.NET, .NET Core, NodeJS, Java, Python) with App Service
- Web App for Containers with App Service
- Azure DevOps Starter
- Azure Functions
- Azure Databases (SQL, MySQL, Postgres)
- App Configuration
- Azure Kubernetes Service
- Azure Machine Learning
- Azure Resource Manager templates
- Azure Container Registry and Container Instances
- Azure IoT Edge
- Static Web Apps
- Azure Blob Storage


| Service                                             | Description                                                                                                                                           | Resources                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Azure Web App Service / App Service for Containers  | A managed service for hosting web apps, mobile app back ends, RESTful APIs, or automated business processes                                           | [Azure App Service Deploy task](tasks/deploy/azure-rm-web-app-deployment.md), [Azure App Service Manage task](tasks/deploy/azure-app-service-manage.md), [Azure App Service Settings task](tasks/deploy/azure-app-service-settings.md)
                                 |
| Azure Static Web Apps                               | Automatically builds and deploys full stack web apps to Azure from a code repository                                                                  | [Tutorial: Publish Azure Static Web Apps with Azure DevOps](/azure/static-web-apps/publish-devops)                                                           |
| Azure Functions                                     | Serverless solution for hosting applications                                                                                                          |  [Azure Function App task](tasks/deploy/azure-function-app.md), [Deploy an Azure Function](targets/azure-functions.md)                                                           |
| Azure Databases (SQL, MySQL, Postgres)              | Managed database solutions                                                                                                                            |                                                              |
| Azure DevOps Starter                                | Azure Portal tool for quickly setting up a CI/CD pipeline                                                                                             | [Overview of DevOps Starter](/azure/devops-project/overview) |
| Azure App Configuration                             | Service to centrally manage application settings and feature flags                                                                                    |                                                              |
| Azure Blog Storage                                  | Object storage solution for storing large amounts of unstructured data in the cloud                                                                   |                                                              |
| Azure Kubernetes Service                            | Managed Kubernetes service for running containerized applications                                                                                     |                                                              |
| Azure Machine Learning                              | Cloud-based environment for working with machine learning models                                                                                      |                                                              |
| Azure Resource Manager                              | Deployment and management service for Azure. Azure Resource Manager templates (ARM templates) are a way of quickly deploying infrastructure as code.  |                                                              |
| Azure Container Registry                            | Managed, private Docker registry service                                                                                                              |                                                              |
| Azure Service Fabric                                | Distributed systems platform that can run in many environments, including Azure or on premises                                                        |                                                              |
| Azure Container Instance                            | Option for running a container in Azure, without having to provision any virtual machines and without having to adopt a higher-level service          |                                                              |
| Azure IoT Edge                                      | Managed service built on Azure IoT Hub.                                                                                                               |                                                              |




