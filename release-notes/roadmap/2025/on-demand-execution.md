---
title: On-demand out of order execution of stages
author: gloridelmorales
ms.author: glmorale
ms.date: 01/20/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: On-demand out of order execution of stages
hide_comments: true
---

# On-demand out of order execution of stages

Stages in a pipeline have dependencies and some stages are [un-skippable](/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml#mark-a-stage-as-unskippable). However, there are scenarios where one would want to start a future stage more quickly than wait for all its dependencies. Examples of such scenarios are (a) fast-track a hot fix and (b) ramp up the traffic to a service faster than the pipeline normally allows (in this case, each stage models a certain amount of ramp-up traffic). We will allow this provided (a) the stage you want to start does not have any un-skippable stages in its dependency chain and (b) you have the permission to start a stage out of order.