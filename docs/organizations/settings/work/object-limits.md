---
title: Work tracking, process, and project limits
titleSuffix: Azure DevOps
description: See limits on numbers of objects and operations you can specify for work items, queries, backlogs, boards, and other work tracking objects in Azure DevOps.
ms.custom: "inherited-process, linked-from-support, cross-project, support-driven-update"
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: reference
monikerRange: "<= azure-devops"
ms.date: 07/22/2026
#customer intent: As an Azure DevOps administrator, I want to understand the operational and practical limits on objects and operations so I can manage my projects, teams, and tools effectively.
---

# Work tracking, process, and project limits

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes operational and object limits that Azure DevOps places on work tracking operations and customizations. Some practical limits also apply. Consider these limits when you customize work item types (WITs).

> [!TIP]
> Use the **Object Limit Tracker** for real-time visibility into your organization's resource usage across all limit categories. For more information, see [Introducing Object Limit Tracker in Azure DevOps](https://devblogs.microsoft.com/devops/introducing-object-limit-tracker-in-azure-devops/).

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

\*The REST API for Azure DevOps Services enforces a work item revision limit of 10,000 updates. This limit applies only to REST API updates and doesn't affect updates made through the web portal. If you're automating work item updates via the API and encounter this limit, consider creating a new work item to continue tracking instead of updating the existing one.

**What happens when you reach a limit:**
- **Query execution time:** The query stops and returns a timeout error. Add more specific filter conditions or date ranges to reduce scope.
- **Query results:** Results are truncated at 20,000 items - no error is shown. Refine your filter conditions or split the query into multiple saved queries.
- **Attachment size:** The attachment is rejected at upload time with an error message. Compress or split the file before attaching.
- **Work item links:** New links are blocked when the limit is reached. Consider consolidating related links or archiving older work items.

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

If a query times out or returns too many results, see [Best practices to define a query](../../../boards/queries/using-queries.md#best-practices) for guidance on optimizing query performance.

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

**What happens when you reach a limit:**
- **Backlog display:** Work items beyond the display limit are hidden from the backlog but aren't deleted. Use a query to find and manage hidden items.
- **Board cards:** Cards beyond the limit are hidden from board view. Items in the **Proposed** and **Completed** state categories don't count toward the 1,000-card limit.
- **Dashboard limit:** New dashboards can't be created once the limit is reached. Review and remove unused dashboards to free space.

> [!TIP]
> If you're approaching the dashboard limits, take the following actions to reduce their number.
> - Review the last accessed date or check with team members, and then remove dashboards that are duplicates or unused.
> - Export the data and then archive old dashboards.
> - Combine and consolidate similar dashboards by adding more widgets to dashboards.

### Additional considerations

- Backlogs and boards don't show completed or closed work items if their **Changed Date** is older than a year. This behavior is expected, not a bug. You can still find these work items by running a query. To make a work item reappear on a backlog or board, make any minor update to reset its **Changed Date** - for example, add a comment or update a field value.
- Avoid nesting backlog items of the same type. For more information, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to more than one team. For more information, see [Limitations of multiteam board views](../../../boards/boards/kanban-overview.md).

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
| Work item tags per project organization or collection | 150,000 |
| Work item tags per work item | 100 |
| Templates per work item type | 100 |

\*Each backlog can display up to 999 work items. If your backlog exceeds this limit, consider creating a new team and moving some of the work items to the new team's backlog.

### Additional considerations

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

\*For more information, see [GitHub Connections - Get GitHub Connections](/rest/api/azure/devops/wit/github-connections/get-github-connections?view=azure-devops-rest-latest&tabs=HTTP&preserve-view=true).

**What happens when you reach a limit:** When a connection reaches its repository limit, you can't add more repositories to that connection. Create a new GitHub connection to add additional repositories.

## Projects

::: moniker range="azure-devops"

Azure DevOps Services limits each organization to 1,000 projects. When you go beyond 300 projects, certain experiences, like connecting to a project from Visual Studio, might degrade. If you're experiencing performance problems in an organization with many projects, consider consolidating projects or distributing work across multiple organizations.

::: moniker-end

::: moniker range="< azure-devops"

For on-premises Azure DevOps Server, there are no hard limits on projects per collection, but performance problems might arise as the number of projects nears 300. Certain experiences, like connecting to a project from Visual Studio, might degrade.

When migrating to Azure DevOps Services, observe a maximum limit of 1,000 projects. If your collection exceeds this limit, split the collection or delete older projects. For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md).

::: moniker-end

## Process customization

Limits exist on the number of objects you can define for a process. For more information, see [Customize your work tracking experience](../../../reference/customize-work.md).

::: moniker range="azure-devops"

The following table lists the maximum number of objects you can define for the Inheritance and Hosted XML process models. Practical limits might also apply.

| Object                                              | Inheritance | Hosted XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes per organization |          256|         64 |
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

::: moniker range="< azure-devops"

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

Even when you're within the hard object limits, performance can degrade as the number of custom objects grows. The following guidance represents the Microsoft-recommended operating range for predictable performance. To minimize performance problems, follow this guidance:

- Limit the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. You can specify different behaviors, such as rules and picklists, for the same field in different WITs.

- Limit the number of rules you define for a WIT. While you can create multiple rules for a WIT, other rules can negatively affect performance when users add or modify work items.

- Limit the number of custom WITs you define.

::: moniker range="< azure-devops"

- Limit the number of reportable fields you define. Reportable fields can affect the performance of your data warehouse.

::: moniker-end

### Work item rules validation exceeds SQL limits

A single SQL expression is defined per project to validate work items whenever they're created or updated. This expression grows with the number of rules specified for all work item types in the project.

Each behavioral qualifier for a field increases the number of subexpressions. Nested rules, rules that apply only on a transition, or rules conditioned on the value of another field add more conditions to an `IF` statement.

When users save work items, the system validates all rules associated with the fields for that work item type. Once the expression reaches a certain size or complexity, SQL can no longer evaluate it efficiently and might generate an error. To resolve this error, remove some WITs or eliminate some rules.

> [!TIP]
> If users see errors when saving work items and you heavily customized rules, review the number of rules across all WITs in the project. Reducing conditional rules (such as those that apply only during state transitions or depend on another field's value) has the greatest impact on reducing expression complexity.

::: moniker range="azure-devops"

## Rate limits

Azure DevOps Services, like many software as a service solutions, uses multitenancy to reduce costs and enhance scalability and performance. To ensure good performance and minimize the risk of outages, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When users exceed these limits, the service might delay or block subsequent requests.

Most rate limits are reached through REST API calls or nonoptimized queries. For more information, see [Rate limits](../../../integrate/concepts/rate-limits.md) and [Best practices to avoid hitting rate limits](../../../integrate/concepts/integration-bestpractices.md).

::: moniker-end

::: moniker range=" < azure-devops"

## Migration and import limits

When you migrate from on-premises Azure DevOps Server to Azure DevOps Services, your collection must meet the following size requirements:

| Measure | Recommended limit |
|---|---|
| Total database size | 150 GB |
| Largest individual table | 30 GB |
| Database metadata size | 2 GB |

If your collection exceeds these limits, migration validation fails before any data is transferred. To resolve the issue, see [Troubleshoot import and migration errors](../../../migrate/migration-troubleshooting.md) for options including data clean-up and collection splitting. For the full migration process, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md).
::: moniker-end

## Related content

::: moniker range="azure-devops"
- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Follow naming restrictions and conventions](../naming-restrictions.md)
- [Create an inheritance process](manage-process.md)
- [Rate and usage limits](../../../integrate/concepts/rate-limits.md)
- [Best practices to avoid hitting rate limits](../../../integrate/concepts/integration-bestpractices.md)

::: moniker-end

::: moniker range=" < azure-devops"

- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Follow naming restrictions and conventions](../naming-restrictions.md)
- [Customize your work tracking experience](../../../reference/customize-work.md)
- [Customize on-premises XML processes](../../../reference/on-premises-xml-process-model.md)
- [Understand rules and rule evaluation](../../../organizations/settings/work/rule-reference.md)

::: moniker-end

