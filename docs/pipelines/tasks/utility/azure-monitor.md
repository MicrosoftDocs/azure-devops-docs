---
title: Query Azure Monitor Alerts task
description: Observe the configured Azure monitor rules for active alerts in Azure Pipelines and TFS in a build or release pipeline
ms.assetid: FF2CCF1C-0237-451F-AA1F-654DB8C72089
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Query Azure Monitor Alerts task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a release pipeline to observe the configured Azure monitor rules for active alerts.

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

None

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureMonitorV1.md)]
::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure subscription** | Required. Select an Azure Resource Manager service connection. |
| **Resource group** | Required. The resource group being monitored in the subscription. |
| **Resource type** | Required. Select the resource type in the selected group. |
| **Resource name** | Required. Select the resources of the chosen types in the selected group. |
| **Alert rules** | Required. Select from the currently configured alert rules to query for status. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Succeeds if none of the alert rules are activated at the time of sampling.

For more information about using this task, see [Approvals and gates overview](../../release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureMonitorV0).
