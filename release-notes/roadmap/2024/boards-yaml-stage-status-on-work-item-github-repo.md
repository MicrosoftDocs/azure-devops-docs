---
title: Support YAML stage status on Deployment control in work item form with GitHub repository
author: danhellem
ms.author: dahellem
ms.date: 10/31/2024
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support YAML stage status on Deployment control in work item form with GitHub repository
hide_comments: true
---

# Support YAML stage status on Deployment control in work item form with GitHub repository

Like how classic release pipelines report deployment status, we want to add support for YAML pipelines to show the stage status on the **Deployment** control of the work item form when your code is in a GitHub repository. 

> [!div class="mx-imgBorder"]
> ![screen shot example of deployment control on work item form](media\boards-yaml-stage-status-on-work-item.png)

> [!NOTE] 
> This work is dependent on the [Support YAML stage status on Deployment control in work item form](/boards-yaml-stage-status-on-work-item) and will only be supported in the [new Azure Boards experience](../../../release-notes/2024/sprint-237-update#new-boards-hub-on-by-default).