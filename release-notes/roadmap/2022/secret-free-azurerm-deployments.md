---
title: Workload identity federation for Azure service connection
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload identity federation for Azure service connection
hide_comments: true
---

# Workload identity federation for Azure service connection

Pipelines often depend on service connections that store secrets. A common use case for Pipelines is to deploy applications to Azure using an ARM service connection. Each connection stores either the Azure Service Principal's password or certificate in Azure DevOps. The main drawbacks of storing these credentials in Azure DevOps are (a) the service connections have to be updated in Azure DevOps every time you update them in Azure, and (b) Tasks in pipelines that consume these service connections will have access to these secrets. Many customers would like to avoid storing secrets in Azure DevOps. They do not want the trouble of rotating these secrets on a regular basis, and they want to reduce the risk of these secrets getting exposed and stolen.

Workload identity federation for the Azure service connection is [generally available](https://devblogs.microsoft.com/devops/workload-identity-federation-for-azure-deployments-is-now-generally-available/).
