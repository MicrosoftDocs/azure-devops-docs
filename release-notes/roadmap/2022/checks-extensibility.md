---
title: Checks extensibility
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Checks extensibility
hide_comments: true
---

# Checks extensibility

With classic release management, you can author [custom gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md) and publish them as an extension in the [Marketplace](https://marketplace.visualstudio.com/search?term=gate&target=AzureDevOps&category=Azure%20Pipelines&sortBy=Relevance&preserve-view=true). The same is not possible with checks in YAML pipelines. While you can run custom logic in a check by writing your own [Azure function](/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-azure-function&preserve-view=true) or [REST API](/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-rest-api&preserve-view=true) check, the experience is not as ideal as it would be with a custom check. We will bridge this gap and make checks extensible in Azure Pipelines.