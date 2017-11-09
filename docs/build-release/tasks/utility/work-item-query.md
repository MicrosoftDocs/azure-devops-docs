---
title: Work item query task 
description: Build and release task to ensure the number of matching items returned by a work item query in within the configured threshold in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: F24517BD-FEA2-4EFF-8030-EF441B9C7F67
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Utility: Work item query

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![](_img/query-work-items.png) Ensure the number of matching items returned by a work item query in within the configured threshold.

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

None

## Arguments

| Parameter | Comments |
| --- | --- |
| **Project Name** | Required. List all projects in the current VSTS account. Defaults to current project. |
| **Query** | Required. Show all WIT queries saved in the project. Same control as that used in the dashboard widget. |
| **Threshold (max) number of results** | Required. Default value = 0 |
| **Threshold (min) number of results** | Required. Default value = 0 |
| **Tags to filter results on** | Optional. List of tags that should be present on the resulting workitems. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if _minimum-threshold_ **&lt;=** _#-matching-workitems_ **&lt;=** _maximum-threshold_

For more information about using this task, see [Release approvals and gates](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/QueryWorkItems).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
