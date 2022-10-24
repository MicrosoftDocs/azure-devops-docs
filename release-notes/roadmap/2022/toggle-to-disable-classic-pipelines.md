---
title: Toggle to disable classic pipelines
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Toggle to disable classic pipelines
hide_comments: true
---

# Toggle to disable classic pipelines

Teams that start fresh with Azure Pipelines or even those that are creating new pipelines often want to use YAML instead of classic pipelines. This is because all of our investment in the past two years have been on YAML pipelines. Furthermore, YAML pipelines have better security than classic pipelines. 

To help customers prevent their own teams from fumbling into classic pipelines, we will introduce a toggle in organization and project settings to disable classic pipelines. For customers that do not have any classic pipelines, this toggle will completely hide the classic build and release features. For customers that have some assets in classic pipelines, this toggle will allow you to view and edit existing assets, but will prevent you from creating new ones.