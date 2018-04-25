---
title: Work item query task for Microsoft VSTS and TFS 
description: Build and release task to ensure the number of matching items returned by a work item query in within the configured threshold in VSTS and TFS
ms.assetid: F24517BD-FEA2-4EFF-8030-EF441B9C7F67
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Utility: Query Work Items

**VSTS**

![icon](_img/query-work-items.png) &nbsp; Ensure the number of matching items returned by a work item query in within the configured thresholds.

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

None

## Arguments

| Parameter | Comments |
| --- | --- |
| **Project Name** | Required. Select the project in the current VSTS or TFS account. Defaults to the current project. |
| **Query** | Required. Select a work item query within the project. Can be a built-in or custom query. |
| **Threshold (max) number of results** | Required. Default value = 0 |
| **Threshold (min) number of results** | Required. Default value = 0 |
| **Tags to filter results on** | Optional. A list of tags that must be present on the work items. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if _minimum-threshold_ **&lt;=** _#-matching-workitems_ **&lt;=** _maximum-threshold_

For more information about using this task, see [Approvals and gates overview](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/QueryWorkItems).

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: queryWorkItems@0
  inputs:
    queryId:
#   maxThreshold: 0
#   minThreshold: 0
```

::: moniker-end
