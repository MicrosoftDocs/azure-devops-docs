---
title: Query by date or current iteration in Azure Boards 
titleSuffix: Azure Boards
description: Learn how to query for work items based on a date, a team's current iteration, or a sliding window of sprints in Azure Boards. 
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: 95D9F558-E3C4-4D5F-BB69-76A3BD7625D8
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
#customer intent: As a team member, I want to learn how to query work items in Azure Boards so I can find items based on when they were created, which iteration they belong to, or other factors.
---

# Query by date or current iteration

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows how to list work items by creation, change, resolution, or closed dates and how to use date macros (for example, `@Today`) and iteration macros for team sprints. For iteration path fundamentals and client/macro restrictions, see [Query by area or iteration path](query-by-area-iteration-path.md).

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

## Supported operators and date macros

Use the following operators and macros for DateTime and Iteration Path fields in Query Editor.

- DateTime operators: `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`
- Date macros: `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, `@StartOfYear`, `@Today`  
  You can combine `+/- n` with these macros (for example, `@Today - 7`).
- Iteration macros: `@CurrentIteration` and `@CurrentIteration +/- n` (see the following note and link for client restrictions and team-parameter behavior).

> [!NOTE]
> Iteration macros and client restrictions are covered in detail on the iteration page: [Query by area or iteration path](query-by-area-iteration-path.md). If you need queries to run in nonweb clients or via REST/WIQL outside the web UI, verify macro support in your environment and consider expanding macros to explicit paths.

## Quick date examples (common queries)

- Items created in the last 30 days:
  :::image type="content" source="media/q-by-date-last-30-days.png" alt-text="Screenshot that shows the Query Editor clause for finding items created in the last 30 days.":::

- Items modified on a specific date:
  :::image type="content" source="media/q-by-specific-date.png" alt-text="Screenshot that shows the Query Editor clause for finding items changed on a specific date.":::

- Items resolved today:
  :::image type="content" source="media/q-by-resolved-today.png" alt-text="Screenshot that shows the Query Editor clause for finding items resolved today.":::

- Items closed within a specified time period:
  :::image type="content" source="media/q-by-closed-time-period.png" alt-text="Screenshot that shows the Query Editor clause for finding items closed within a specified time period.":::

- Items whose Closed Date is null (not closed):
  :::image type="content" source="media/q-closed-date-null.png" alt-text="Screenshot that shows the Query Editor clause for finding items whose Closed Date is empty or null.":::

- Items whose status changed within the last week:
  :::image type="content" source="media/q-by-state-changed-within-last-week.png" alt-text="Screenshot that shows the Query Editor clause for items whose status was updated within the last week.":::

<a id="current-iteration"></a>

## Using the @CurrentIteration macros (short guide)

Use `@CurrentIteration` to target the team's current sprint and `@CurrentIteration +/- n` to create a sliding window of sprints (for example, last two, current, and next two sprints). Important points:

<a id="current-iteration-plus-minus-n"></a>

- `@CurrentIteration` returns items assigned to the current sprint for the team context used when running the query.
- `@CurrentIteration +/- n` shifts that window of sprints by n; useful for trend or carry-over analyses.
- Because macro behavior and client support vary, consult [Query by area or iteration path](query-by-area-iteration-path.md) for details about team parameters, which clients evaluate macros, and how macros are stored/expanded when saving queries.

<a id="create-queries-for-your-teams-current-iteration"></a>

Example images (web portal Query Editor):

:::image type="content" source="media/query-date-iteration/at-current-with-team-parameter.png" alt-text="Screenshot that shows the Query Editor filter using the CurrentIteration macro with a team parameter.":::

<a id="list-work-items-moved-out-sprint"></a>

:::image type="content" source="media//query-date-iteration/sliding-window-iterations.png" alt-text="Screenshot that shows CurrentIteration plus and minus clauses for a sliding window of sprints.":::

> [!TIP]
> If `@CurrentIteration` doesn't return expected results, confirm the team's selected iteration and the iteration date ranges in Team settings.

<a id="list-work-items-added-to-a-sprint-after-the-start-date"></a>

## Date macros: start of day/week/month/year

Start-of macros help build consistent relative date ranges:

- `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, `@StartOfYear`— use these macros with `+/- n` to build ranges such as "since start of week" or "last 3 months."
- These macros get evaluated by the web portal UI; their behavior in nonweb scenarios might differ—test in your target client.

Example queries:

:::image type="content" source="media/example-queries/changed-date-last-10-days.png" alt-text="Screenshot that shows the Query Editor clauses for finding items changed in the last 10 days.":::

:::image type="content" source="media/example-queries/start-month-target-date-3.png" alt-text="Screenshot that shows the Query Editor clauses for features scheduled to be completed in the next three months.":::

<a id="fields"></a>

## When to use WIQL directly

Use WIQL when:
- You need advanced operators such as `WAS EVER` for Iteration Path changes.
- Query Editor blocks or marks a clause as unsupported (for example, some `Was Ever` uses). The WIQL Editor extension lets you author those queries and save them.

See [Work Item Query Language (WIQL) syntax](../queries/wiql-syntax.md) and the WIQL Editor marketplace extension for examples.

## Related content

- [Query by area or iteration path](query-by-area-iteration-path.md)
- [Work Item Query Language (WIQL) syntax](../queries/wiql-syntax.md)
- [Query fields, operators, and macros](query-operators-variables.md)
- [Work item fields and attributes](../work-items/work-item-fields.md)

[!INCLUDE [rest api links](../includes/rest-apis-queries.md)]
