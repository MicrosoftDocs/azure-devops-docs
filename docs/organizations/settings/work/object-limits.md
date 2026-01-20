---
title: Work tracking, process, and project limits
titleSuffix: Azure DevOps
description: See limits on numbers of objects and operations you cn specify for work items, queries, backlogs, boards, and other work tracking objects in Azure DevOps.
ms.custom: "inherited-process, linked-from-support, cross-project"
ms.service: azure-devops-boards
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A
ms.author: chcomley
author: chcomley
ms.topic: reference
monikerRange: "<= azure-devops"
ms.date: 11/06/2025
#customer intent: As an Azure DevOps administrator, I want to understand the operational and practical limits on objects and operations so I can manage my projects, teams, and tools effectively.
---

# Work tracking, process, and project limits

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes operational and object limits that Azure DevOps places on work tracking operations and customizations. Some practical limits also apply. Consider these limits when you customize work item types (WITs).

## Work items and queries

The following limits apply to work item and query definitions.

::: moniker range="azure-devops"

| Object | Limit |
|--------|-------|
| Attachments per work item | 100 |
| Attachment size | 60 MB |
| Long text field | 1M characters |
| Query execution time  |  30 seconds |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries per folder | 999 queries |
| Work item links per work item | 1,000 |
| Work item tags per work item | 100 |
| Work item revisions (REST API)\* | 10,000 | 
| Favorite queries per project | 200 queries |

\*The REST API for Azure DevOps Services enforces a work item revision limit of 10,000 updates. This limit restricts updates made through the REST API, but doesn't apply to updates from the web portal.

::: moniker-end

::: moniker range="< azure-devops"

| Object | Limit |
|--------|-------|
| Long text field | 1M characters |
| Work item tags per work item | 100 |
| Work item links per work item | 1,000 |
| Attachments per work item | 100 |
| Attachment size\*| 4 MB to 2 GB |
| Query execution time  |  6 minutes |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries per folder | 999 queries |
| Favorite queries per project | 200 queries |

\*The default maximum attachment size is 4 MB. You can [change the maximum size up to 2 GB](/previous-versions/azure/devops/reference/xml/change-maximum-attachment-size-work-items).

::: moniker-end

For information about improving query performance, see [Best practices to define a query](../../../boards/queries/using-queries.md#best-practices).

## Backlogs, boards, dashboards, and teams

::: moniker range="azure-devops"

The following operational and object limits apply to teams, work item tags, backlogs, and boards.

| Component |  Limit |
|--------|-------|
| Backlogs | 10,000 displayed work items\*|
| Boards | 1,000 cards excluding cards in the **Proposed** and **Completed** [state categories](../../../boards/work-items/workflow-and-state-categories.md) |
| Taskboard | 1,000 tasks  |
| Area paths per project | 10,000 |
| Area paths per team | 300 |
| Area path depth | 14 levels |
| Iteration paths per project | 10,000 |
| Iteration paths per team | 300 |
| Iteration path depth | 14 levels |
| Project dashboards per project | 500, accessible at the project level to anyone with project access |
| Team dashboards per team | 500, specific to the team and used to track team-specific metrics and data |
| Teams per project | 5,000 |
| Work item tags per work item | 100 |
| Work item tags per organization or collection | 150,000 |
| Delivery plans per project | 1,500 |
| Templates per work item type | 100 |

\*Each backlog can display up to 10,000 work items, but there's no specific limit on the number of work items you can define. If your backlog exceeds 10,000 items, consider adding a team and moving some work items to the new team's backlog.

> [!TIP]
> If you're approaching the dashboard limits, you can take the following actions to reduce their number.
> - Review the last accessed date or check with team members, then remove dashboards that are duplicates or unused.
> - Export the data and then archive old dashboards.
> - Combine and consolidate similar dashboards by adding more widgets to dashboards.
> - Use the Object Limit Tracker for real-time visibility into resource usage, including dashboards. This feature can help you proactively manage your limits and avoid potential issues. For more information, see [Introducing Object Limit Tracker in Azure DevOps](https://devblogs.microsoft.com/devops/introducing-object-limit-tracker-in-azure-devops/).

#### Other limits

- Completed or closed work items don't display on backlogs and boards if their **Changed Date** is older than a year. You can still list these items using a query. To make the items appear on a backlog or board, make a minor change to reset the display clock.
- Avoid nesting backlog items of the same type. For more information, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to more than one team. For more information, see [Limitations of multiteam board views](../../../boards/boards/kanban-overview.md).
- By default, work item limits might be set to lower values initially.

::: moniker-end

::: moniker range="< azure-devops"

The following operational display and object limits apply to teams, work item tags, backlogs, and boards.

| Component |  Limit |
|--------|-------|
| Backlogs\*| 999 work items |
| Boards | 400 cards  |
| Dashboards per project | 500 |
| Taskboard | 800 work items |
| Teams per project | 5,000 |
| Work item tags per project | 150,000 |
| Work item tags per work item | 100 |
| Templates per work item type | 100 |

\*Each backlog can display up to 999 work items. If your backlog exceeds this limit, consider creating a new team and moving some of the work items to the new team's backlog.

#### Other limits

- Avoid nesting backlog items of the same type. For more information, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to multiple teams. For more information, see [Limitations of multiteam board views](../../../boards/boards/kanban-overview.md).
- For the On-premises XML process model, you can modify the backlog and board limits by editing the *ProcessConfiguration.xml* file. For more information, see [Process configuration XML element reference](../../../reference/xml/process-configuration-xml-element.md).

::: moniker-end

## GitHub integration

If you [integrate your project with GitHub](../../../cross-service/github-integration.md), the following limits apply.

| Integration |  Limit |
|--------|-------|
| Azure Boards web UI | 1,000 connected GitHub repositories per connection |
| Azure Boards API\*| 2,000 connected GitHub repositories per connection |

\*For more information, see [GitHub Connections - Get GitHub Connections](/rest/api/azure/devops/wit/github-connections/get-github-connections?view=azure-devops-rest-7.2&tabs=HTTP&preserve-view=true).

## Projects

::: moniker range="azure-devops"

Azure DevOps Services limits each organization to 1,000 projects, an increase over the previous limit of 300 projects. Above 300 projects, certain experiences, like connecting to a project from Visual Studio, might degrade.

::: moniker-end

::: moniker range="< azure-devops"

For on-premises Azure DevOps Server, there are no hard limits on projects per collection, but performance issues might arise as the number of projects nears 300. Certain experiences, like connecting to a project from Visual Studio, might degrade.

When migrating to Azure DevOps Services, observe a maximum limit of 1,000 projects. If your collection exceeds this limit, split the collection or delete older projects. For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md).

::: moniker-end

## Process customization

There are many limits on the number of objects you can define for a process. For more information, see [Customize your work tracking experience](../../../reference/customize-work.md).

::: moniker range="azure-devops"

The following table lists the maximum number of objects you can define for the Inheritance and Hosted XML process models. Practical limits might also apply.

| Object                                              | Inheritance | Hosted XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes per organization |          128|         64 |
| Work item types per process               |          64 |         64 |
| Fields per organization                  |        8192 |       8192 |
| Fields per process                        |        1024 |       1024 |
| Fields per work item type                 |        1024 |       1024 |
| Picklists per organization |        2048 |          - |
| Picklist items per list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |          - |
| Workflow states per work item type        |          32 |         16 |
| Pages (tabs) per work item type        |          16 |         16 |
| Groups per page        |          32 |         32 |
| Rules per work item type                  |        1024 |       1024 |
| Actions per work item type                |        1024 |       1024 |
| Actions per rule                          |          10 |         10 |
| Portfolio backlog levels per process      |           5 |          5 |
| Categories per process                    |           - |         32 |
| Work item attachment size                           |       60 MB |      60 MB |


> [!NOTE]
> For the Hosted XML process model, you can define approximately 10,000 items across all global lists specified in all WITs. For other restrictions and conformance requirements of the Hosted XML process model, see [Customize a process when using Hosted XML](../../../organizations/settings/work/import-process/customize-process.md).

::: moniker-end

::: moniker range="<azure-devops"

The following table lists the maximum number of objects you can define for the Inheritance and On-premises XML process models. Practical limits might also apply.

| Object                                              | Inheritance | On-premises XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes per collection |          64 |         64 |
| Work item types per process               |          64 |         64 |
| Fields per collection                     |        8192 |       1024 |
| Fields per process                        |        1024 |       1024 |
| Fields per work item type                 |        1024 |       1024 |
| Picklists per collection                  |        1024 |        N/A |
| Picklist items per list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |        N/A |
| Workflow states per work item type        |          32 |         16 |
| Rules per work item type                  |        1024 |       1024 |
| Portfolio backlog levels per process      |           5 |          5 |
| Categories per process                    |         N/A |         32 |
| Global lists per process                  |         N/A |        256 |
| List items per global list             |         N/A |       1024 |

> [!NOTE]
> For the On-premises XML process model, you can define an approximate total of 10,000 items for all global lists specified across all WITs.

::: moniker-end

## Practical limits

To minimize performance issues, follow this guidance:

- Limit the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. You can specify different behaviors, such as rules and picklists, for the same field in different WITs.

- Limit the number of rules you define for a WIT. While you can create multiple rules for a WIT, other rules can negatively affect performance when users add or modify work items.

- Limit the number of custom WITs you define.

::: moniker range="< azure-devops"

- Limit the number of reportable fields you define. Reportable fields can affect the performance of your data warehouse.

::: moniker-end

### Work Item Rules Validation Exceeds SQL Limits

A single SQL expression is defined per project to validate work items whenever they're created or updated. This expression grows with the number of rules specified for all work item types in the project.

Each behavioral qualifier for a field increases the number of subexpressions. Nested rules, rules that apply only on a transition, or rules conditioned on the value of another field add more conditions to an `IF` statement.

When users save work items, the system validates all rules associated with the fields for that work item type. Once the expression reaches a certain size or complexity, SQL can no longer evaluate it efficiently and may generate an error. To resolve this error, remove some WITs or eliminate some rules.

::: moniker range="azure-devops"

## Rate limits

Azure DevOps Services, like many Software-as-a-Service solutions, uses multitenancy to reduce costs and enhance scalability and performance. To ensure good performance and minimize the risk of outages, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests might be delayed or blocked.

Most rate limits are reached through REST API calls or nonoptimized queries. For more information, see [Rate limits](../../../integrate/concepts/rate-limits.md) and [Best practices to avoid hitting rate limits](../../../integrate/concepts/integration-bestpractices.md).

::: moniker-end

::: moniker range=" < azure-devops"

## Migration and import limits

When you migrate from on-premises Azure DevOps Server to Azure DevOps Services, you might encounter the following size issues:

- Database size exceeding the recommended size
- Largest table size exceeding the recommended size
- Database metadata size exceeding the supported size

For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md) and [Troubleshoot import and migration errors](../../../migrate/migration-troubleshooting.md).
::: moniker-end

## Related content

::: moniker range="azure-devops"
- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Follow naming restrictions and conventions](../naming-restrictions.md)
- [Create an inheritance process](manage-process.md)
- [Follow best practices](../../../integrate/concepts/integration-bestpractices.md)

::: moniker-end

::: moniker range=" < azure-devops"

- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Follow naming restrictions and conventions](../naming-restrictions.md)
- [Customize your work tracking experience](../../../reference/customize-work.md)
- [Customize on-premises XML processes](../../../reference/on-premises-xml-process-model.md)
- [Understand rules and rule evaluation](../../../organizations/settings/work/rule-reference.md)

::: moniker-end

