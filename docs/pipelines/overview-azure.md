---
title: Deploy to Azure services
description: See articles that describe how different Azure services support continuous integration (CI) and continuous delivery (CD) with Azure Pipelines.
ms.assetid: BC7FACEF-6E79-4BBA-BF53-07BD27EEB235
ms.author: jukullam
author: juliakm
ms.date: 07/15/2024
ms.topic: overview
monikerRange: '<= azure-devops'
---

# Deploy to Azure services

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target. While you don't have to use Azure services with Azure Pipelines, you can use Azure Pipelines to integrate your CI/CD process with most Azure services. Azure Pipelines CI/CD helps you take advantage of your Azure services.

The following articles describe how different Azure services support CI and CD with Azure Pipelines.

**Azure App Configuration**
- [Push settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/push-kv-devops-pipeline)
- [Pull settings from App Configuration with Azure Pipelines](/azure/azure-app-configuration/pull-key-value-devops-pipeline)

**Azure App Service**
- [Deploy to App Service using Azure Pipelines](/azure/app-service/deploy-azure-pipelines)
- [Deploy a custom container to Azure App Service with Azure Pipelines](apps/cd/deploy-docker-webapp.md)
- [Use Azure Pipelines to build and deploy a Python web app to Azure App Service](ecosystems/python-webapp.md)

**Azure Container Registry**
- [Build and push Docker images to Azure Container Registry](ecosystems/containers/acr-template.md)

**Azure Cosmos DB**
- [Set up a CI/CD pipeline with the Azure Cosmos DB Emulator build task in Azure DevOps](/azure/cosmos-db/tutorial-setup-ci-cd)

**Azure Data Factory**
- [Configure Azure Databricks and Azure Data Factory](apps/cd/azure/build-data-pipeline.md#configure-azure-databricks-and-azure-data-factory)

**Azure Government**
- [Deploy an app in Azure Government with Azure Pipelines](/azure/azure-government/connect-with-azure-pipelines)

**Azure IoT Edge**
- [Continuous integration and continuous deployment to Azure IoT Edge devices](/azure/iot-edge/how-to-continuous-integration-continuous-deployment)

**Azure Kubernetes Service**
- [Build and deploy to Azure Kubernetes Service with Azure Pipelines](ecosystems/kubernetes/aks-template.md)

**Azure Monitor**
- [Query Azure Monitor Alerts](process/approvals.md#query-azure-monitor-alerts)

**Azure MySQL Database**
- [Azure Pipelines for Azure Database for MySQL - Flexible Server](/azure/mysql/flexible-server/azure-pipelines-deploy-database-task)

**Azure Service Fabric**
- [Tutorial: Set up CI/CD for a Service Fabric application by using Azure Pipelines](/azure/service-fabric/service-fabric-tutorial-deploy-app-with-cicd-vsts)

**Azure Static Web Apps**
- [Quickstart: Build your first static web app](/azure/static-web-apps/get-started-portal?pivots=azure-devops)

**Azure SQL Database**
- [Deploy to Azure SQL Database](targets/azure-sqldb.md)

**Azure Virtual Machines**
- [Quickstart: Use an ARM template to deploy a Linux web app to Azure](./apps/cd/azure/deploy-arm-template.md)
- [Deploy to Azure VMs using deployment groups in Azure Pipelines](release/deployment-groups/deploying-azure-vms-deployment-groups.md)
- [Tutorial: Deploy a Java app to a virtual machine scale set](apps/cd/azure/deploy-virtual-scale-set-java.md) 

For a complete list of Azure Pipelines tasks, see [Build and release tasks](tasks/index.md) and the [Azure Pipelines task reference](/azure/devops/pipelines/tasks/reference).
