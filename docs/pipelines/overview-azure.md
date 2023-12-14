---
title: Deploy to Azure index to content
ms.custom: seodec18, contperf-fy21q4
description: Learn how to deploy to Azure using Azure Pipelines. Tutorials, references, and other documentation.  
ms.assetid: BC7FACEF-6E79-4BBA-BF53-07BD27EEB235  
ms.author: jukullam
author: juliakm
ms.date: 01/24/2023
ms.topic: overview
monikerRange: '<= azure-devops'
---

# Deploy to Azure

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

 Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target. While you don't have to use Azure services with Pipelines, Pipelines can help you take advantage of Azure. You can use Pipelines to integrate your CI/CD process with most Azure services. 

Learn more about the Azure services that support continuous integration (CI) and continuous delivery (CD) with Azure Pipelines.

**Azure App Configuration**
 - [Push settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/push-kv-devops-pipeline)
- [Pull settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/pull-key-value-devops-pipeline)

**Azure App Service**
- [Deploy an Azure Web App](/azure/app-service/deploy-azure-pipelines)
- [Deploy an Azure Web App Container](apps/cd/deploy-docker-webapp.md)
- [Use CI/CD to deploy a Python web app to Azure App Service on Linux](ecosystems/python-webapp.md)

**Azure Container Registry**
- [Build and push Docker images to Azure Container Registry](ecosystems/containers/acr-template.md)

**Azure Cosmos DB**
- [Set up a CI/CD pipeline with the Azure Cosmos DB Emulator build task in Azure DevOps](/azure/cosmos-db/tutorial-setup-ci-cd)

**Azure Data Factory**
- [Build a data pipeline by using Azure Data Factory, DevOps, and machine learning; Configure Azure Databricks and Azure Data Factory](apps/cd/azure/build-data-pipeline.md#configure-azure-databricks-and-azure-data-factory)

**Azure Government**
-  [Deploy an app in Azure Government with Azure Pipelines](/azure/azure-government/connect-with-azure-pipelines)

**Azure IoT Edge**
[Continuous integration and continuous deployment to Azure IoT Edge devices](/azure/iot-edge/how-to-continuous-integration-continuous-deployment)

**Azure Kubernetes Service**
[Build and deploy to Azure Kubernetes Service](ecosystems/kubernetes/aks-template.md)

**Azure Monitor**
- [Define approvals and checks, Query Azure Monitor Alerts](process/approvals.md#query-azure-monitor-alerts)

**Azure MySQL Database**
- [Quickstart: Deploy to Azure MySQL](/azure/mysql/single-server/azure-pipelines-mysql-deploy)

**Azure Service Fabric**
- [Tutorial: Deploy an application with CI/CD to a Service Fabric cluster](/azure/service-fabric/service-fabric-tutorial-deploy-app-with-cicd-vsts)

**Azure Static Web Apps**
[Tutorial: Publish Azure Static Web Apps with Azure DevOps](/azure/static-web-apps/publish-devops)

**Azure SQL Database**
- [Deploy to Azure SQL Database](targets/azure-sqldb.md)

**Azure Virtual Machines**
- [Build an Azure virtual machine using an Azure RM template](./apps/cd/azure/deploy-arm-template.md)
- [Deploy to Azure VMs using deployment groups in Azure Pipelines](release/deployment-groups/deploying-azure-vms-deployment-groups.md)
- [Tutorial: Deploy a Java app to a Virtual Machine Scale Set](apps/cd/azure/deploy-virtual-scale-set-java.md) 


 For a complete list of Azure Pipelines tasks, see [Build and release tasks](tasks/index.md).






