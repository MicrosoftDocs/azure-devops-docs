---
title: Service connections in checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Service connections in checks
hide_comments: true
---

# Service connections in checks

[Azure functions](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-azure-function) and [REST API](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-rest-api) checks require Azure or REST server credentials (app key) to be stored in Azure Pipelines. As we invest in mechanisms to reduce the storage of secrets in Azure DevOps, we would like your experience with checks to also benefit from those investments. For instance, if you create a [secret-free service connection](./secret-free-deployments.md) to Azure, you should be able to use that in order to interact with the Azure function. We will use the same service connectins to connect to external services from checks as we do from tasks running on an agent.
