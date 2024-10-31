---
title: Report YAML stage status to Deployment control on work item
author: danhellem
ms.author: dahellem
ms.date: 10/31/2024
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Report YAML stage status to Deployment control on work item
hide_comments: true
---

# Report YAML stage status to Deployment control on work item

Like how classic release pieplines report deployment status, we want to add support for YAML pipelines to show the stage status on the **Deployment** control of the work item form. This will provide a better experience for users who are using Azure Boards and YAML pipelines together.

> [!div class="mx-imgBorder"]
> ![screen shot example of YAML stage status on deployment control in work item form](media\boards-yaml-stage-status-on-work-item.png)

[Suggestion ticket](https://developercommunity.visualstudio.com/t/yaml-multistage-pipelines-link-workitems-to-deploy/1060361)