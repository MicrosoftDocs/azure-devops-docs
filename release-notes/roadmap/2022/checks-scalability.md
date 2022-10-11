---
title: Checks scalability
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Checks scalability
hide_comments: true
---

# Checks scalability

As more customers shifted their CD pipelines to YAML from classic release management, the first challenge we encountered is handling checks at large scale. Two of the most commonly used checks are [Azure functions check](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-azure-function) and [REST API check](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-azure-function). The default experience in Azure Pipelines results in creating sychronous calls from Azure Pipelines into Azure functions or your REST server. On top of that, these calls are retried frequently until the check passes. This design is simple and works well for small workloads. However, it does not scale when there are a large number of checks, when the function or REST server takes more time to respond, or when there are a large number of retries.

We will streamline our asynchrononous checks implementation, also known as [callback model](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/azure-function?view=azure-devops#is-there-an-example-of-an-azure-function-that-uses-the-callback-completion-mode), and change the experience in the product to recommend that over the synchronous model. Using the callback model, the Azure function or REST server can decide to fail or pass the check at any point thereby eliminating the need for retries altogether. This model also allows the Azure function or REST server to take as much time as it needs to evaluate the check without locking threads and other resources in Azure Pipelines.



