---
title: Azure monitor task 
description: Build and release task to observe the configured Azure monitor rules for active alerts in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: FF2CCF1C-0237-451F-AA1F-654DB8C72089
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Utility: Azure monitor

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![](_img/azure-monitor.png) Observe the configured Azure monitor rules for active alerts.

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

None

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure subscription** | Required. Select an Azure Resource Manager service endpoint. |
| **Resource group name** | Required. Automatically populated with a list of available resource groups in the subscription. |
| **Resource type(s)** | Optional. Lists available resource types in the selected group. Treats empty as all resource types in the resource group. |
| **Resource(s)** | Optional. Lists available resources of the chosen types in the selected group. Treats empty as all matching resources. |
| **Select alert rules** | Required. Lists the currently configured alert rules in the resource group. Filter the displayed list for selected resource types and resources. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if none of the alert rules are activated at the time of sampling.

For more information about using this task, see [Release approvals and gates](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureMonitor).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
