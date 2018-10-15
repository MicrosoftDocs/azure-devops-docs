---
title: Azure Stack deployment in Azure Pipelines and Team Foundation Server
titleSuffix: Azure Pipelines & TFS
description: Understand Azure Stack deployment in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: 'vsts'
---

# Deploy apps to Azure Stack

**Azure Pipelines**

[Azure Stack](https://azure.microsoft.com/overview/azure-stack/)
is an extension of Azure that enables the agility and fast-paced innovation of cloud computing
through a hybrid cloud and on-premises environment.

>At present, Team Foundation Server can be used to deploy to Azure Stack with Azure AD and cannot be used to deploy to
an [Azure Stack with Azure Directory Federated Services (AD FS)](/azure/azure-stack/azure-stack-identity-overview). Azure Stack with AD FS requires
a [service principal with certificate](/azure/azure-stack/azure-stack-create-service-principals#create-service-principal-for-ad-fs),
which is not currently supported in Azure Pipelines/TFS.

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

