---
title: Deploy to Azure Stack Hub
description: Understand Azure Stack Hub deployment in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.topic: conceptual
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 2/9/2021
monikerRange: '> tfs-2018'
---

# Deploy apps to Azure Stack Hub

**Azure Pipelines**

[Azure Stack Hub](https://azure.microsoft.com/overview/azure-stack/)
is an extension of Azure that enables the agility and fast-paced innovation of cloud computing
through a hybrid cloud and on-premises environment.

> In addition to supporting Azure AD, Azure DevOps Server 2019 can be used to deploy to Azure Stack Hub with [Active Directory Federation Services](/azure/azure-stack/azure-stack-create-service-principals#create-a-service-principal-that-uses-a-client-secret-credential) (AD FS) using a [service principal with certificate](/azure/devops/release-notes/2018/sprint-141-update#create-azure-service-connection-with-service-principal-that-authenticates-with-a-certificate).

**Prerequisites**

To deploy to Azure Stack Hub using Azure Pipelines, ensure the following:

Azure Stack Hub requirements:

* Use an Azure Stack Hub integrated system or deploy the [Azure Stack Development Kit (ASDK)](/azure-stack/asdk/asdk-install)
* Use the [ConfigASDK.ps1](https://github.com/esache/Azure-Stack/blob/master/Scripts/ConfigASDK.ps1) PowerShell script to automate ASDK post-deployment steps.
* Create a [tenant subscription](/azure-stack/operator/azure-stack-subscribe-plan-provision-vm) in Azure Stack Hub.
* Deploy a Windows Server 2012 Virtual Machine in the tenant subscription. You'll use this server as your build server and to run Azure DevOps Services.
* Provide a Windows Server 2016 image with .NET 3.5 for a virtual machine (VM). This VM will be built on your Azure Stack Hub as a private build agent.

Azure Pipelines agent requirements:

* Create a new service principal name (SPN) or use an existing one. 
* Validate the Azure Stack Hub Subscription via Role-Based Access Control(RBAC) to allow the Service Principal Name (SPN) to be part of the Contributor's role. Azure DevOps Services must have the Contributor role to provision resources in an Azure Stack Hub subscription.
* Create a new Service connection in Azure DevOps Services using the Azure Stack Hub endpoints and SPN information.
  Specify Azure Stack Hub in the **Environment** parameter when you create an [Azure Resource Manager service connection](../library/connect-to-azure.md).
You must use the full version of the service connection dialog to manually define the connection.

You can then use the service connection in your [build and release pipeline tasks](../tasks/index.md).

For more details, refer to [Tutorial: Deploy apps to Azure and Azure Stack Hub](/azure-stack/user/azure-stack-solution-pipeline)

### Next

* [Deploy an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
* [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
* [Azure Stack Hub Operator Documentation](/azure/azure-stack/)

## FAQ

### Are all the Azure tasks supported?

The following Azure tasks are validated with Azure Stack Hub:

* [Azure PowerShell](../tasks/deploy/azure-powershell.md)
* [Azure File Copy](../tasks/deploy/azure-file-copy.md)
* [Azure Resource Group Deployment](../tasks/deploy/azure-resource-group-deployment.md)
* [Azure App Service Deploy](../tasks/deploy/azure-rm-web-app-deployment.md)
* [Azure App Service Manage](../tasks/deploy/azure-app-service-manage.md) 
* [Azure SQL Database Deployment](../tasks/deploy/sql-azure-dacpac-deployment.md)

### How do I resolve SSL errors during deployment?

To ignore SSL errors, set a variable named `VSTS_ARM_REST_IGNORE_SSL_ERRORS` to the value `true` in the build or release pipeline.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]