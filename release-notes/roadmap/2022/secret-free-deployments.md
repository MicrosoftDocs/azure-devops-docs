---
title: Secret-free deployments from Azure Pipelines
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Secret-free deployments from Azure Pipelines
hide_comments: true
---

# Secret-free deployments from Azure Pipelines

Pipelines often depend on service connections that store secrets. A common use case for Pipelines is to deploy applications to Azure resources using an ARM service connection. Each connection stores either the Azure service principal's password or certificate in Azure DevOps. The main drawbacks of storing these credentials in Azure DevOps are (a) You will have to update the service connections in Azure DevOps every time you update them in Azure (b) Tasks in a pipeline will have access to these secrets. Many customers would like to avoid storing secrets in Azure DevOps. They do not want the trouble of rotating these secrets on a regular basis. And, they want to reduce the risk of these secrets getting exposed.

Azure now supports [workload identity federation](https://learn.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation) using Open ID Connect protocol. This allows us to create secret-free service connections in Azure Pipelines that are backed by service principals with federated credentials in Azure Active Directory. As part of its execution, a pipeline can exchange its own internal token with an AAD token, thereby gaining access to Azure resources. Once implemented, this mechanism will be recommended in the product over [other types of Azure service connections](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure?view=azure-devops) that exist today. This mechanism can also be used to set up secret-free deployments with any other OIDC compliant service provider. 

When we are ready with this feature, we will first invite a few customers for private preview, followed by a public preview in 2023 Q2.