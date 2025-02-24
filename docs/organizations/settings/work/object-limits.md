---
title: Work tracking, process, and project limits
titleSuffix: Azure DevOps Services
description: Limits placed on the number of objects that can be specified for work tracking objects, queries, and more.  
ms.custom: "inherited-process, linked-from-support, cross-project"
ms.service: azure-devops-boards
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: "<= azure-devops"
ms.date: 09/10/2024
---

# Work tracking, process, and project limits

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article defines operational and object limits placed on work tracking operations and work tracking customization. In addition to the specified hard limits on specific objects, some practical limits apply. When you customize work item types (WITs), consider the limits placed on objects.

## Work items and queries

When you define work items or running queries, keep the following operational limits in mind:

::: moniker range="azure-devops"

| Object | Limit |
|--------|-------|
| Attachments added to a work item | 100 |
| Attachment size | 60 MB |
| Long text field | 1-M characters |
| Query execution time  |  30 seconds |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries under a folder | 999 queries |
| Work item links assigned to a work item | 1,000 |
| Work item tags assigned to a work item | 100 |
| Work item revisions (REST API) | 10,000 | 
| Favorite queries per project | 200 queries |

The REST API for Azure DevOps Services enforces a work item revision limit of 10,000 updates. This limit restricts updates made through the REST API, but updates from the web portal aren't affected.

::: moniker-end

::: moniker range="< azure-devops"

| Object | Limit |
|--------|-------|
| Long text field | 1-M characters |
| Work item tags assigned to a work item | 100 |
| Work item links assigned to a work item | 1,000 |
| Attachments added to a work item | 100 |
| Attachment size | 4 MB to 2 GB |
| Query execution time  |  6 minutes |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries under a folder | 999 queries |
| Favorite queries per project | 200 queries |

The default maximum attachment size is 4 MB. You can [change the maximum size up to 2 GB](/previous-versions/azure/devops/reference/xml/change-maximum-attachment-size-work-items).
::: moniker-end

To improve query performance, see [Define a query/Best practices](../../../boards/queries/using-queries.md#best-practices).

## Backlogs, boards, dashboards, and teams

::: moniker range="azure-devops"

When you work with teams, work item tags, backlogs, and boards, the following operational display and object limits apply.

| User interface |  Limit |
|--------|-------|
| Backlogs | 10,000 work items |
| Boards | 1,000 cards (excluding those cards in the *Proposed* and *Completed* [workflow state categories](../../../boards/work-items/workflow-and-state-categories.md)) |
| Taskboard | 1,000 tasks  |
| Area Paths | 10,000 per project |
| Area Path Depth | 14 |
| Area Paths per team | 300 |
| Iteration Paths | 10,000 per project |
| Iteration Path Depth | 14 |
| Iteration Paths per team | 300 |
| Project Dashboards | 500 per project. Accessible at the project level and anyone with access to the project can use. |
| Team Dashboards | 500 per team. Specific to the team and used to track team-specific metrics and data. |
| Teams | 5,000 per project |
| Work item tags | 150,000 tag definitions per organization or collection |
| Delivery plans per project | 1,000 |
| Templates per work item type | 100 |

Each backlog can display up to 10,000 work items. This limit applies to what the backlog can display, not to the number of work items you can define, as there's no specific limit. If your backlog exceeds this limit, consider adding a team and moving some work items to the new team's backlog.

> [!TIP]
> If you're approaching the dashboards limits, see the following steps to manage and clean up your dashboards:
> - **Review usage:** Identify dashboards that are no longer in use or are duplicates. You can do this by checking the last accessed date or by consulting with team members.
> - **Consolidate dashboards:** Combine similar dashboards to reduce the total number. This can be done by adding multiple widgets to a single dashboard.
> - **Archive old dashboards:** If certain dashboards are no longer needed but you want to keep the data, consider exporting the data and archiving the dashboards.
> - **Use the Object Limit Tracker feature:** Provides real-time visibility into resource usage, including dashboards. This feature can help you [proactively manage your limits and avoid potential issues](https://devblogs.microsoft.com/devops/introducing-object-limit-tracker-in-azure-devops/).


#### Other notes:

- Completed or closed work items don't display on backlogs and boards once their **Changed Date** is older than a year. You can still list these items using a query. To make them show up on a backlog or board, make a minor change to reset the display clock.
- Avoid nesting backlog items of the same type. For more information, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to more than one team. For more information, see [Limitations of multi-team board views](../../../boards/boards/kanban-overview.md).
- By default, work item limits might be set to lower values initially.
::: moniker-end

::: moniker range="< azure-devops"

When you work with teams, work item tags, backlogs, and boards, the following operational limits apply. Default and maximum limits.

| User interface |  Limit |
|--------|-------|
| Backlogs | 999 work items |
| Boards | 400 cards  |
| Dashboards per project | 500 |
| Taskboard | 800 work items |
| Teams | 5,000 per project |
| Work item tags | 150,000 tag definitions per project |
| Templates per work item type | 100 |

Each backlog can display up to 999 work items. If your backlog exceeds this limit, consider creating a team and moving some of the work items to the new team's backlog.

#### Other notes:

- Avoid nesting backlog items of the same type. For more information, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to multiple teams. For more information, see [Limitations of multi-team board views](../../../boards/boards/kanban-overview.md).

For the On-premises XML process model, you can modify the backlog and Taskboard limits by editing the `ProcessConfiguration.xml` file. For details, see [Process configuration XML element reference](../../../reference/xml/process-configuration-xml-element.md).

::: moniker-end

## GitHub integration

If you [integrate your project with GitHub](../../../cross-service/github-integration.md), the following limits apply.

| Integration |  Limit |
|--------|-------|
| Azure Boards: Connected GitHub repositories (UX) | 1,000 repositories per connection. |
| Azure Boards: Connected GitHub repositories (API) | 2,000 repositories per connection. [Learn more](/rest/api/azure/devops/wit/github-connections/get-github-connections?view=azure-devops-rest-7.2&tabs=HTTP&preserve-view=true). |

## Projects

Azure DevOps Services limits each organization to 1,000 projects per organization, an increase over the previous limit of 300 projects.

> [!NOTE]
> Above 300 projects, certain experiences, like connecting to a project from Visual Studio, might degrade. For on-premises Azure DevOps Server, there are no hard limits, but performance issues may arise as the number of projects nears 300. When migrating to Azure DevOps Services, observe the maximum limit of 1,000 projects. If your collection exceeds this limit, split the collection or delete older projects.

For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md).

## Process customization

Many limits are imposed on the number of objects you can define for a process. For more information, see [Customize your work tracking experience](../../../reference/customize-work.md).

::: moniker range="azure-devops"

The following table lists the maximum number of objects you can define for the Inheritance and Hosted XML process models. While these limits are hard limits, practical limits might also apply.

| Object                                              | Inheritance | Hosted XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes you can have in an organization |          128|         64 |
| Work item types defined for a process               |          64 |         64 |
| Fields defined for an organization                  |        8192 |       8192 |
| Fields defined for a process                        |        1024 |       1024 |
| Fields defined for a work item type                 |        1024 |       1024 |
| Picklists defined for an organization or collection |        2048 |          - |
| Picklist items defined for a list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |          - |
| Workflow states defined for a work item type        |          32 |         16 |
| Rules defined for a work item type                  |        1024 |       1024 |
| Actions defined for a work item type                |        1024 |       1024 |
| Actions defined for a rule                          |          10 |         10 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |           - |         32 |
| Global lists defined for a process                  |           - |        256 |
| List items defined within a global list             |           - |       1024 |
| Work item attachment size                           |       60 MB |      60 MB |

For other restrictions and conformance requirements of the Hosted XML process model, see [Customize a process when using Hosted XML](../../../organizations/settings/work/import-process/customize-process.md).

> [!NOTE]
> For the Hosted XML process model, you can define approximately 10,000 items across all global lists specified in all WITs.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

The following table lists the maximum number of objects you can define for the Inheritance and On-premises XML process models. While these limits are hard limits, practical limits might also apply.

| Object                                              | Inheritance | On-premises XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes you can have in an organization |          64 |         64 |
| Work item types defined for a process               |          64 |         64 |
| Fields defined for a collection                     |        8192 |       1024 |
| Fields defined for a process                        |        1024 |       1024 |
| Fields defined for a work item type                 |        1024 |       1024 |
| Picklists defined for a collection                  |        1024 |        N/A |
| Picklist items defined for a list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |        N/A |
| Workflow states defined for a work item type        |          32 |         16 |
| Rules defined for a work item type                  |        1024 |       1024 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |         N/A |         32 |
| Global lists defined for a process                  |         N/A |        256 |
| List items defined within a global list             |         N/A |       1024 |

> [!NOTE]
> For the On-premises XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.
::: moniker-end

## Practical limits

To minimize performance issues, we recommend following this guidance:

::: moniker range="azure-devops"

- Limit the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. You can specify different behaviors, such as rules and picklists, for the same field in different WITs.
- Limit the number of rules you define for a WIT. While you can create multiple rules for a WIT, other rules can negatively affect performance when users add or modify work items. When users save work items, the system validates all rules associated with the fields for that work item type. In some cases, the rule validation expression might be too complex for SQL to evaluate efficiently.
- Limit the number of custom WITs you define.

::: moniker-end

::: moniker range="< azure-devops"

- Limit the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. You can specify different behaviors, such as rules and picklists, for the same field in different WITs.
- Limit the number of rules you define for a WIT. While you can create multiple rules for a WIT, other rules can negatively affect performance when users add or modify work items. When users save work items, the system validates all rules associated with the fields for that work item type. In some cases, the rule validation expression might be too complex for SQL to evaluate efficiently.
- Limit the number of custom WITs you define.
- Limit the number of reportable fields you define. Reportable fields can affect the performance of your data warehouse.

::: moniker-end

> [!NOTE]
> **Work Item Rules Validation Exceeds SQL Limits**: A single SQL expression is defined per project to validate work items whenever they are created or updated. This expression grows with the number of rules specified for all work item types in the project. Each behavioral qualifier for a field increases the number of sub-expressions. Nested rules, rules that apply only on a transition, or rules conditioned on the value of another field add more conditions to an IF statement. Once the expression reaches a certain size or complexity, SQL can no longer evaluate it and generates an error. To resolve this error, remove some WITs or eliminate some rules.

::: moniker range="azure-devops"

## Rate limits

To reduce costs and enhance scalability and performance, Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy. To ensure good performance and minimize the risk of outages, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests might be delayed or blocked.

Most rate limits are reached through REST API calls or nonoptimized queries. For more information, see [Rate limits](../../../integrate/concepts/rate-limits.md) and [Best practices (to avoid hitting rate limits)](../../../integrate/concepts/integration-bestpractices.md).

::: moniker-end

## Migrate and import limits

When migrating from on-premises to Azure DevOps Services, you might encounter several size limits, including:

- Database size exceeding the recommended size
- Largest table size exceeding the recommended size
- Database metadata size exceeding the supported size

For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md) and [Troubleshoot import and migration errors](../../../migrate/migration-troubleshooting.md).

## Related articles

::: moniker range="azure-devops"

- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Create an inheritance process](manage-process.md)
- [Follow best practices](../../../integrate/concepts/integration-bestpractices.md)
- [Adhere to naming restrictions and conventions](../naming-restrictions.md)

::: moniker-end

::: moniker range=" < azure-devops"

- [Customize your work tracking experience](../../../reference/customize-work.md)
- [Learn about process customization and inherited processes](inheritance-process-model.md)
- [Customize on-premises XML processes](../../../reference/on-premises-xml-process-model.md)
- [Understand rules and rule evaluation](../../../organizations/settings/work/rule-reference.md)
- [Follow naming restrictions and conventions](../naming-restrictions.md)

::: moniker-end

## Related resources

- [Tags Manager](https://marketplace.visualstudio.com/items?itemName=YodLabs.TagsManager2&ssr=false#overview)
- [WIQL Editor](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.wiql-editor)
