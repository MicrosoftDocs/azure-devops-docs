---
title: Work tracking, process, and project limits
titleSuffix: Azure DevOps Services
description: Limits placed on the number of objects that can be specified for work tracking objects, queries and more  
ms.custom: "inherited-process, linked-from-support, cross-project"
ms.service: azure-devops-boards
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: "<= azure-devops"
ms.date: 07/07/2022
---

# Work tracking, process, and project limits

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article defines operational and object limits placed on work tracking operations and work tracking customization. In addition to the specified hard limits on select objects, certain practical limits apply. When you customize work item types (WITs), consider the limits placed on objects.

## Work items and queries

When defining work items or running queries, the following operational limits apply.

::: moniker range="azure-devops"

| Object | Limit |
|--------|-------|
| Attachments added to a work item | 100 |
| Attachment size | 60 MB |
| Long text field | 1 M characters |
| Query execution time  |  30 seconds |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries under a folder | 999 queries |
| Work item links assigned to a work item | 1,000 |
| Work item tags assigned to a work item | 100 |
| Work item revisions (REST API) | 10,000 | 

A work item revision limit of 10,000 is in effect for updates made through the REST API for Azure DevOps Services. This limit restricts updates from the REST API, however, updates from the web portal are not affected.  



::: moniker-end

::: moniker range="< azure-devops"

| Object | Limit |
|--------|-------|
| Long text field | 1 M characters |
| Work item tags assigned to a work item | 100 |
| Work item links assigned to a work item | 1,000 |
| Attachments added to a work item | 100 |
| Attachment size | 4 MB to 2 GB |
| Query execution time  |  6 minutes |
| Query results | 20,000 items |
| Query length | 32,000 characters |
| Shared queries under a folder | 999 queries |

The default maximum attachment size is 4 MB. You can [change the maximum size up to 2 GB](/previous-versions/azure/devops/reference/xml/change-maximum-attachment-size-work-items).
::: moniker-end

To improve query performance, see [Define a query/Best practices](../../../boards/queries/using-queries.md#best-practices).

## Backlogs, boards, dashboards, and teams

::: moniker range="azure-devops"

When working with teams, work item tags, backlogs, and boards, the following operational display and object limits apply.

| User interface |  Limit |
|--------|-------|
| Backlogs | 10,000 work items |
| Boards | 1,000 cards (excluding those cards in the *[Proposed](../../../boards/work-items/workflow-and-state-categories.md)*[ and ](../../../boards/work-items/workflow-and-state-categories.md)*[Completed](../../../boards/work-items/workflow-and-state-categories.md)*[ workflow state categories](../../../boards/work-items/workflow-and-state-categories.md)) |
| Taskboard | 1,000 tasks  |
| Area Paths | 10,000 per organization |
| Area Path Depth | 14 |
| Area Paths per team | 300 |
| Iteration Paths | 10,000 per organization |
| Iteration Path Depth | 14 |
| Iteration Paths per team | 300 |
| Project Dashboards | 500 per project |
| Team Dashboards | 500 per team |
| Teams | 5,000 per project |
| Work item tags | 150,000 tag definitions per organization or collection |
| Delivery plans per project | 1,000 |
| Templates per work item type | 100 |


Each backlog can display up to 10,000 work items. This is a limit on what the backlog can display, not a limit on the number of work items you can define. If your backlog exceeds this limit, then you may want to consider adding a team and moving some of the work items to the other team's backlog.

#### Additional notes:

- Completed or closed work items don't display on the backlogs and boards once their **Changed Date** is greater than a year old. You can still list these items using a query. If you want them to show up on a backlog or board, then you can make a minor change to them which resets the clock for display.
- Avoid nesting backlog items of the same type. To learn more, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to more than one team. To learn more, see [Limitations of multi-team Kanban board views](../../../boards/boards/kanban-overview.md#limitations-of-multi-team-kanban-board-views).
- By default, work item limits might be initially configured to lower values.

::: moniker-end

::: moniker range="< azure-devops"

When working with teams, work item tags, backlogs, and boards, the following operational limits apply.   Default and maximum limits.

| User interface |  Limit |
|--------|-------|
| Backlogs | 999 work items |
| Boards | 400 cards  |
| Dashboards per project | 500 |
| Taskboard | 800 work items |
| Teams | 5,000 per project |
| Work item tags | 150,000 tag definitions per project |
| Templates per work item type | 100 |

Each backlog can display up to 999 work items. If your backlog exceeds this limit, then you may want to consider adding a team and moving some of the work items to the other team's backlog.

#### Additional notes:

- Avoid nesting backlog items of the same type. To learn more, see [Fix reordering and nesting issues](../../../boards/backlogs/resolve-backlog-reorder-issues.md).
- Avoid assigning the same area paths to more than one team. To learn more, see [Limitations of multi-team Kanban board views](../../../boards/boards/kanban-overview.md#limitations-of-multi-team-kanban-board-views).

For the On-premises XML process model, you can modify the backlog and taskboard limits by editing the ProcessConfiguration.xml file. For details, see [Process configuration XML element reference](../../../reference/xml/process-configuration-xml-element.md).

::: moniker-end

## Projects

Azure DevOps Services limits each organization to 1000 projects per organization, an increase over the previous limit of 300 projects.

> [!NOTE]
> Above 300 projects certain experiences, such as connecting to a project from Visual Studio, may start to degrade. 
For on-premises Azure DevOps Server, there are no hard limits to the number of projects. However, you may find performance issues if the number of projects approaches 300. If you plan to migrate your on-premises collection to Azure DevOps Services, you'll need to observe the maximum limit of 1000 projects. If your collection has more than 1000 projects, you'll either need to split the collection or delete older projects.

For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md).

## Process customization

A number of limits are imposed on the number of objects that you can define for a process. To learn about process models, see [Customize your work tracking experience](../../../reference/customize-work.md).

::: moniker range="azure-devops"

The following table lists the maximum number of objects that you can define for the Inheritance and Hosted XML process models. While these represent hard limits, practical limits may also apply.

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
| Actions defined for a rule                          |          10 |         10 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |           - |         32 |
| Global lists defined for a process                  |           - |        256 |
| List items defined within a global list             |           - |       1024 |
| Work item attachment size                           |       60 MB |      60 MB |

For additional restrictions and conformance requirements of the Hosted XML process model, see [Customize a process when using Hosted XML](../../../organizations/settings/work/import-process/customize-process.md).

> [!NOTE]
> For the Hosted XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

The following table lists the maximum number of objects that you can define for the Inheritance and On-premises XML process models. While these represent hard limits, practical limits may also apply.

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

::: moniker range="tfs-2018"

The following table lists the maximum number of objects that you can define for the ON-premises XML process model. While these represent hard limits, practical limits may apply.

| Object                                              | On-premises XML |  
| --------------------------------------------------- |  ---------: |  
| Number of processes you can have in an organization |          64 |  
| Work item types defined for a process               |          64 |  
| Fields defined for a collection                     |        1024 |  
| Fields defined for a process                        |        1024 |  
| Fields defined for a work item type                 |        1024 |  
| Picklists defined for a collection                  |         N/A |  
| Picklist items defined for a list                   |        2048 |  
| Picklist item character length                      |         N/A |  
| Workflow states defined for a work item type        |          16 |  
| Rules defined for a work item type                  |        1024 |  
| Portfolio backlog levels defined for a process      |           5 |  
| Categories defined for a process                    |          32 |
| Global lists defined for a process                  |         256 |
| List items defined within a global list             |        1024 |
| Size of imported process template                   |        2 GB |

> [!NOTE]
> For the On-premises XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.
::: moniker-end

## Practical limits

We recommend that you consider the following guidance in order to minimize performance issues.

::: moniker range="azure-devops"

- Minimize the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. Note that you can specify different behavior for the same field in a different WIT. That is, you can specify different rules, picklists, and more.
- Minimize the number of rules you define for a WIT. While you can create multiple rules for a WIT, addition rules can negatively impact performance when a user adds and modifies work items. When users save work items, the system validates all rules associated with the fields for its work item type. Under certain conditions, the rule validation expression is too complex for SQL to evaluate.
- Minimize the number of custom WITs you define.

::: moniker-end

::: moniker range="< azure-devops"

- Minimize the number of custom fields you define. All custom fields contribute to the total allowed for a process, collection, or organization. Note that you can specify different behavior for the same field in a different WIT. That is, you can specify different rules, picklists, and more.
- Minimize the number of rules you define for a WIT. While you can create multiple rules for a WIT, addition rules can negatively impact performance when a user adds and modifies work items. When users save work items, the system validates all rules associated with the fields for its work item type. Under certain conditions, the rule validation expression is too complex for SQL to evaluate.
- Minimize the number of custom WITs you define.
- Minimize the number of reportable fields you define. Reportable fields impact performance of your data warehouse.

::: moniker-end

> [!NOTE]
> **Work Item Rules Validation Exceeds SQL Limits**: A single SQL expression is defined per project to validate work items whenever they are created or updated. This expression grows with the number of rules you specify for all work item types defined for the project. Each behavioral qualifier specified for a field results in an increase in the number of sub-expressions. Nested rules, rules that apply only on a transition or conditioned on the value of some other field, cause more conditions to be added to an IF statement. Once the expression reaches a certain size or complexity, SQL can't evaluate it any more and generates an error. Removing some WITs or eliminating some rules, can resolve the error. 


::: moniker range="azure-devops"

## Rate limits

To reduce costs and to enhance scalability and performance, Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy. To ensure good performance and reduce the likelihood of outages, Azure DevOps Services limits the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests may be either delayed or blocked.

Most rate limits are reached through REST API calls or non-optimized queries. To learn more, see the following articles:

- [Rate limits](../../../integrate/concepts/rate-limits.md)
- [Best practices (to avoid hitting rate limits)](../../../integrate/concepts/integration-bestpractices.md)

::: moniker-end

## Migrate and import limits

When determining to migrate from on-premises to Azure DevOps Services, there are several size limits that you may encounter. These limits include:

- Database size is above the recommended size
- Largest table size is above the recommended size
- The database metadata size is above the supported size

To learn more, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../../migrate/migration-overview.md) and [Troubleshoot import and migration errors](../../../migrate/migration-troubleshooting.md).

## Related articles

::: moniker range="azure-devops"

- [About process customization and inherited processes](inheritance-process-model.md)
- [Create an Inheritance process](manage-process.md)
- [Best practices](../../../integrate/concepts/integration-bestpractices.md)
- [Naming restrictions and conventions](../naming-restrictions.md)

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- [Customize your work tracking experience](../../../reference/customize-work.md)
- [About process customization and inherited processes](inheritance-process-model.md)
- [On-premises XML process customization](../../../reference/on-premises-xml-process-model.md)
- [Rules and rule evaluation](../../../organizations/settings/work/rule-reference.md)
- [Naming restrictions and conventions](../naming-restrictions.md)

::: moniker-end

::: moniker range="tfs-2018"

- [Customize your work tracking experience](../../../reference/customize-work.md)
- [On-premises XML process customization](../../../reference/on-premises-xml-process-model.md)
- [Rules and rule evaluation](../../../organizations/settings/work/rule-reference.md)
- [Naming restrictions and conventions](../naming-restrictions.md)

::: moniker-end

## Related resources

- [Tags Manager](https://marketplace.visualstudio.com/items?itemName=YodLabs.TagsManager2&ssr=false#overview)
- [WIQL Editor](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)
- [Process Template Editor](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.msdevlabs-pte)

