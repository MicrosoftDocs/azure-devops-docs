---
title: Deploy to Azure index to content
ms.custom: seodec18, contperfq4
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

 Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target. While you do not have to use Azure services with Pipelines, Pipelines can help you take advantage of Azure. You can use Pipelines to integrate your CI/CD process with most Azure services. 

To learn more about selecting an Azure service for hosting your application code, see [Choose an Azure compute service for your application](/azure/architecture/guide/technology-choices/compute-decision-tree).


| Service                                             | Description                                                                                                                                           | Resources                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Azure Web App Service / App Service for Containers  | A managed service for hosting web apps, mobile app back ends, RESTful APIs, or automated business processes                                           | [Deploy an Azure Web App](targets/webapp-linux.md), [Deploy an Azure Web App Container](targets/webapp-on-container-linux.md), [Deploy to Azure App Service using Visual Studio Code](targets/deploy-to-azure-vscode.md), [Azure App Service Deploy task](tasks/deploy/azure-rm-web-app-deployment.md), [Azure App Service Manage task](tasks/deploy/azure-app-service-manage.md), [Azure App Service Settings task](tasks/deploy/azure-app-service-settings.md) |
| Azure Static Web Apps                               | Automatically builds and deploys full stack web apps to Azure from a code repository                                                                  | [Tutorial: Publish Azure Static Web Apps with Azure DevOps](/azure/static-web-apps/publish-devops)                                                           |
| Azure Functions                                     | Serverless solution for hosting applications                                                                                                          |  [Deploy an Azure Function](targets/azure-functions.md), [Azure Function App task](tasks/deploy/azure-function-app.md), [Azure Function App for Containers task](tasks/deploy/azure-rm-functionapp-containers.md) |
| Azure Databases (SQL, MySQL)              | Managed database solutions | [Deploy to Azure SQL Database](targets/azure-sqldb.md), [Azure SQL Database Deployment task](tasks/deploy/sql-azure-dacpac-deployment.md), [Azure Database for MySQL Deployment task](tasks/deploy/azure-mysql-deployment.md)
| Azure DevOps Starter                                | Azure portal tool for quickly setting up a CI/CD pipeline   | [Overview of DevOps Starter](/azure/devops-project/overview) |
| Azure App Configuration   | Service to centrally manage application settings and feature flags | [Push settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/push-kv-devops-pipeline), [Pull settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/pull-key-value-devops-pipeline)                                                            |
| Azure Blob Storage                                  | Object storage solution for storing large amounts of unstructured data in the cloud  |     [Azure File Copy task](tasks/deploy/azure-file-copy.md)                                                         | 
| Azure Kubernetes Service                            | Managed Kubernetes service for running containerized applications |  [Build and deploy to Azure Kubernetes Service](ecosystems/kubernetes/aks-template.md)  |
| Azure Machine Learning                              | Cloud-based environment for working with machine learning models |  [Prepare data, train, deploy, and monitor machine learning models with Azure Pipelines](targets/azure-machine-learning.md)                                                            |
| Azure Resource Manager                              | Deployment and management service for Azure. Azure Resource Manager templates (ARM templates) are a way of quickly deploying infrastructure as code.  |    [Integrate ARM templates with Azure Pipelines](/azure/azure-resource-manager/templates/add-template-to-azure-pipelines), [Quickstart: Use an ARM template to deploy a Linux web app to Azure](apps/cd/azure/deploy-arm-template.md) |
| Azure Container Registry                            | Managed, private Docker registry service   |  [Build and push Docker images to Azure Container Registry](ecosystems/containers/acr-template.md)    |
| Azure Service Fabric                                | Distributed systems platform that can run in many environments, including Azure or on premises   |    [Tutorial: Deploy an application with CI/CD to a Service Fabric cluster](/azure/service-fabric/service-fabric-tutorial-deploy-app-with-cicd-vsts), [Service Fabric Application Deployment task](tasks/deploy/service-fabric-deploy.md)                                                         |
| Azure IoT Edge                                      | Managed service built on Azure IoT Hub.                                       |  [Continuous integration and continuous deployment to Azure IoT Edge devices](/azure/iot-edge/how-to-continuous-integration-continuous-deployment), [Create a CI/CD pipeline for IoT Edge with Azure DevOps Starter](/azure/iot-edge/how-to-devops-starter)                                                           |
| Azure Key Vault   | Managed service for storing secret data.    | [Use Azure Key Vault secrets in Azure Pipelines](release/azure-key-vault.md), [Azure Key Vault task](tasks/deploy/azure-key-vault.md)




