---
title: Support Flexible Orchestration mode in scale set agent pools
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support Flexible Orchestration mode in scale set agent pools
hide_comments: true
---

# Support Flexible Orchestration mode in scale set agent pools

A common complaint with scale set agent pools is that the time it takes to initiate scaling events is too long. In fact, Azure Pipelines checks if it needs to scale out a pool every few minutes. However, it cannot perform that task if there is a prior operation already in progress on the VM scale set. As an example, if the VM scale set is deleting VMs from an earlier request to scale in, then Azure Pipelines cannot issue a new request to scale out unless that previous operation is complete.

To address this problem, Azure Pipelines needs to rely on a new preview feature of VM scale sets called [Flexible Orchestration](/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes). As this feature comes out of preview in VM scale sets, Azure Pipelines will start making use of it and speed up its operations.