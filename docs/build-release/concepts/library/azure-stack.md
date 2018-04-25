---
title: Azure Stack deployment in Visual Studio Team Services and Team Foundation Server
description: Understand Azure Stack deployment in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 76C2080A-C1D9-44AF-AA76-1953BA4C2837
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Deploy apps to Azure Stack

**VSTS**

[Azure Stack](https://azure.microsoft.com/en-in/overview/azure-stack/)
is an extension of Azure that enables the agility and fast-paced innovation of cloud computing
through a hybrid cloud and on-premises environment.

>At present, Team Foundation Server can be used to deploy to Azure Stack with Azure AD and cannot be used to deploy to
an [Azure Stack with Azure Directory Federated Services (AD FS)](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-identity-overview). Azure Stack with AD FS requires
a [service principal with certificate](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-create-service-principals#create-service-principal-for-ad-fs),
which is not currently supported in VSTS/TFS.

To enable connection to an Azure Stack, you specify it as the **Environment** parameter when you create an
[Azure Resource Manager service endpoint](service-endpoints.md#sep-azure-rm).
You must use the full version of the endpoint dialog to manually define the connection.
Before you configure a service endpoint, you should also ensure you meet all relevant compliance requirements for your application.

You can then use the service endpoint in your [build and release definition tasks](../../tasks/index.md).

### Next

* [Deploy an Azure web app](../../apps/cd/deploy-webdeploy-webapps.md)
* [Troubleshoot Azure Resource Manager service endpoints](../../actions/azure-rm-endpoint.md)
* [Azure Stack Operator Documentation](https://docs.microsoft.com/en-us/azure/azure-stack/)

## Q&A

### Are all the Azure tasks supported?

The following Azure tasks are validated with Azure Stack:

* [Azure PowerShell](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzurePowerShell)
* [Azure File Copy](https://www.visualstudio.com/en-us/docs/build/steps/deploy/azure-file-copy)
* [Azure Resource Group Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureResourceGroupDeployment)
* [Azure App Service Deploy](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment)
* [Azure App Service Manage](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureAppServiceManage) 
* [Azure SQL Database Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/SqlAzureDacpacDeployment)

### How do I resolve SSL errors during deployment?

To ignore SSL errors, set a variable named `VSTS_ARM_REST_IGNORE_SSL_ERRORS` to the value `true` in the build or release definition.

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]

