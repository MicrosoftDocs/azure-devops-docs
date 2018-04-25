---
title: Azure monitor task for Microsoft VSTS and TFS
description: Build and release task to observe the configured Azure monitor rules for active alerts in VSTS and TFS
ms.assetid: FF2CCF1C-0237-451F-AA1F-654DB8C72089
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Utility: Azure monitor

**VSTS**

![icon](_img/azure-monitor.png) &nbsp; Observe the configured Azure monitor rules for active alerts.

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

None

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure subscription** | Required. Select an Azure Resource Manager service endpoint. |
| **Resource group name** | Required. The resource group in the subscription containing the monitor functions. |
| **Resource type(s)** | Optional. Select the resource type in the selected group. Leave empty to use all the resource types in the resource group. |
| **Resource(s)** | Optional. Select the resources of the chosen types in the selected group. Leave empty to use all matching resources. |
| **Select alert rules** | Required. Select from the currently configured alert rules in the resource group. Filter the displayed list for selected resource types and resources. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if none of the alert rules are activated at the time of sampling.

For more information about using this task, see [Approvals and gates overview](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureMonitor).

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: AzureMonitor@0
  inputs:
    connectedServiceNameARM:
    ResourceGroupName:
#   ResourceType: Microsoft.Insights/components # Microsoft.Insights/components (default), Microsoft.Web/sites, Microsoft.Storage/storageAccounts, Microsoft.Compute/virtualMachines
    resourceName:
    alertRules:
```

::: moniker-end
