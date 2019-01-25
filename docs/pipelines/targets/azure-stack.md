---
title: Deploy to Azure Stack
description: Understand Azure Stack deployment in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Deploy apps to Azure Stack

**Azure Pipelines**

[Azure Stack](https://azure.microsoft.com/overview/azure-stack/)
is an extension of Azure that enables the agility and fast-paced innovation of cloud computing
through a hybrid cloud and on-premises environment.

> In addition to supporting Azure AD, Azure DevOps Server 2019 can be used to deploy to Azure stack with [Active Directory Federation Services](/azure/azure-stack/azure-stack-create-service-principals#create-service-principal-for-ad-fs) (AD FS) using a [service principal with certificate](https://docs.microsoft.com/en-us/tfs/release-notes/azuredevops2019#create-azure-service-connection-with-service-principal-that-authenticates-with-a-certificate).

To enable connection to an Azure Stack, you specify it as the **Environment** parameter when you create an
[Azure Resource Manager service connection](../library/connect-to-azure.md).
You must use the full version of the service connection dialog to manually define the connection.
Before you configure a service connection, you should also ensure you meet all relevant compliance requirements for your application.

You can then use the service connection in your [build and release pipeline tasks](../tasks/index.md).

### Next

* [Deploy an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
* [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
* [Azure Stack Operator Documentation](/azure/azure-stack/)

## Q&A

### Are all the Azure tasks supported?

The following Azure tasks are validated with Azure Stack:

* [Azure PowerShell](../tasks/deploy/azure-powershell.md)
* [Azure File Copy](../tasks/deploy/azure-file-copy.md)
* [Azure Resource Group Deployment](../tasks/deploy/azure-resource-group-deployment.md)
* [Azure App Service Deploy](../tasks/deploy/azure-rm-web-app-deployment.md)
* [Azure App Service Manage](../tasks/deploy/azure-app-service-manage.md) 
* [Azure SQL Database Deployment](../tasks/deploy/sql-azure-dacpac-deployment.md)

### How do I resolve SSL errors during deployment?

To ignore SSL errors, set a variable named `VSTS_ARM_REST_IGNORE_SSL_ERRORS` to the value `true` in the build or release pipeline.

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]

