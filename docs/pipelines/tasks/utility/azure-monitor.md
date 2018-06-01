---
title: Azure monitor task for Microsoft VSTS and TFS
description: Build and release task to observe the configured Azure monitor rules for active alerts in VSTS and TFS with a build or release definition
ms.assetid: FF2CCF1C-0237-451F-AA1F-654DB8C72089
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Utility: Query Azure Monitor Alerts

**VSTS**

![icon](_img/azure-monitor.png) &nbsp; Observe the configured Azure monitor rules for active alerts.

Can be used in only an [agentless phase](../../process/server-phases.md) of a release definition.

## Demands

None

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/AzureMonitorV0.0.md)]

::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure subscription** | Required. Select an Azure Resource Manager service endpoint. |
| **Resource group** | Required. The resource group being monitored in the subscription. |
| **Resource type** | Required. Select the resource type in the selected group. |
| **Resource name** | Required. Select the resources of the chosen types in the selected group. |
| **Alert rules** | Required. Select from the currently configured alert rules to query for status. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Succeeds if none of the alert rules are activated at the time of sampling.

For more information about using this task, see [Approvals and gates overview](../../release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureMonitor).
