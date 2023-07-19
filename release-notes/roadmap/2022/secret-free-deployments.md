---
title: Workload Identity federation for Azure Deployments
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload Identity federation for Azure Deployments
hide_comments: true
---

# Workload Identity federation for Azure Deployments

Pipelines often depend on service connections that store secrets. A common use case for Pipelines is to deploy applications to Azure using an ARM service connection. Each connection stores either the Azure Service Principal's password or certificate in Azure DevOps. The main drawbacks of storing these credentials in Azure DevOps are (a) the service connections have to be updated in Azure DevOps every time you update them in Azure, and (b) Tasks in pipelines that consume these service connections will have access to these secrets. Many customers would like to avoid storing secrets in Azure DevOps. They do not want the trouble of rotating these secrets on a regular basis, and they want to reduce the risk of these secrets getting exposed and stolen.

Azure now supports [workload identity federation](/azure/active-directory/develop/workload-identity-federation) using the Open ID Connect protocol. This allows us to create secret-free service connections in Azure Pipelines that are backed by service principals or managed identities with federated credentials in Azure Active Directory. As part of its execution, a pipeline can exchange its own internal token with an AAD token, thereby gaining access to Azure resources. Once implemented, this mechanism will be recommended in the product over [other types of Azure service connections](/azure/devops/pipelines/library/connect-to-azure?view=azure-devops&preserve-view=true) that exist today. This mechanism can also be used to set up secret-free deployments with any other OIDC compliant service provider. 

We have invited the first few customers for private preview, and will enter public preview in 2023 Q3.