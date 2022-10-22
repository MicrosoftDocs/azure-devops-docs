---
title: Custom variables in checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Custom variables in checks
hide_comments: true
---

# Custom variables in checks

With classic release management, you can pass output variables from a previous stage as part of the header to an [Azure functions gate](https://learn.microsoft.com/azure/devops/pipelines/tasks/utility/azure-function?view=azure-devops) or [REST API gate](https://learn.microsoft.com/azure/devops/pipelines/tasks/utility/http-rest-api?view=azure-devops). The same is not possible with [Azure functions](https://learn.microsoft.com/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-azure-function) or [REST API](https://learn.microsoft.com/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#invoke-rest-api) checks in YAML pipelines. We will bridge this gap. A common scenario is to pass some information such as a change management system ticket number into the Azure function or REST API. Without this, the Azure function or REST server has to call back into Azure DevOps to obtain that information from the pipeline. Besides reducing the back-and-forth traffic, supporting passing output variables directly into checks will make it easier to create Azure functions and REST API checks.
