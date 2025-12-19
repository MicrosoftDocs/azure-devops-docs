---
title: Query By Area Or Iteration Path
titleSuffix: Azure Boards
description: Learn how to query for work items based on their area or iteration path in Azure Boards.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: 65066197-F5BE-45F3-898E-1BA3C7BFDCA3
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/27/2025 
---

# Query by area or iteration path 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Area Path and Iteration Path fields appear on all work item forms for every work item type. You define these paths for your project—[area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)—and then select the ones you want to associate with a team. 

To understand how to work with area and iteration paths, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).  

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

[!INCLUDE [temp](../includes/note-macro-web-portal.md)] 

## Supported operators and macros 

When you create queries and specify Area Path and Iteration Path fields, you can use the following operators: 

> [!div class="mx-tdCol2BreakAll"]  
> |Operator     | Use when you want to...| 
> |-------------|--------------|
> | `=`           | Specify one specific area or iteration path  |
> | `<>`          | Filter out one specific area or iteration path |
> | `In`          | Filter for a set of area or iteration paths  |
> | `Not In`      | Exclude items assigned to a set of area or iteration paths |
> | `Under`       | Specify all paths under a selected area or iteration path |
> | `Not Under`   | Exclude items assigned under a specific area or iteration path  |

You can use the following macros when you select the Iteration Path field. For examples, see the query examples on this page.

> [!div class="mx-tdCol2BreakAll"]  
> 
> |            Macro      |               Use when you want to...                              |
> |----------------------|---------------------------------------------------------------|
> |  `@CurrentIteration`  | Specify the current iteration associated with the selected team context |
> | `@CurrentIteration +/- n` | Filter items based on assignment to a sliding window of sprints associated with the selected team context |
> | `@TeamAreas`       | Filter items based on area path(s) assigned to a specific team |

> [!NOTE]
> The Azure DevOps web portal evaluates macros such as `@CurrentIteration`, `@CurrentIteration +/- n`, and `@TeamAreas` (Services and Server). Non-web clients (Visual Studio/Team Explorer, Excel, Project) and direct WIQL/REST calls require explicit area/iteration paths and don't accept raw macro tokens. When you save a query in the web UI, the portal typically expands macros to concrete values in the stored WIQL—verify this behavior in your environment if you need to use queries outside the web UI.

## Area path queries 

You can filter for work items assigned to several area paths by using the **In** operator as shown in the following example.  

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query on Area Path for several areas.](media/query-area-iteration/query-with-in-operator.png)

## Node Name and keyword-based queries  

Use the **Node Name** field to filter work items assigned to area paths based on a keyword using the **Contains** operator. The **Node Name** specifies the last node of an **Area Path**, which corresponds to the last node in the tree hierarchy.  

The following query produces the same result as the previous example.  

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query on Node Name for several areas.](media/query-area-iteration/query-with-in-operator-node-name.png)

In this example, the filter returns work items assigned to an area path whose last node contains the word "Azure."

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query for several sprints.](media/query-area-iteration/query-filter-contains-node-name.png)

Here's another example that uses the **Node Name** and the **In** operator. 

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query on Node Name for several areas.](media/query-area-iteration/query-with-in-operator-node-name.png)

::: moniker range="<=azure-devops"
<a id="team-area-path"></a> 

## Team area path queries  

Use the <strong>@TeamAreas</strong> macro to find items assigned to the area paths that a specific team uses. Specify the **=** operator. The Query Editor prompts you to enter the team name; select the team from the suggested list.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query on area paths assigned to a team.](media/query-area-iteration/teamareas-macro-example.png)

::: moniker-end

<a name="field-reference"></a>
<a id="fields"></a>

## Classification field reference 

> [!div class="mx-tdCol2BreakAll"]  
> |**Field name**|**Description**|**Reference name**|
> |---|---|---|
> |**Area Path**|Groups work items into product feature or team areas. The area must be a valid node in the project hierarchy.|System.AreaPath |
> |**Iteration Path**|Groups work items by named sprints or time periods. The iteration must be a valid node in the project hierarchy.|System.IterationPath |

For each field, data path=```TreePath```, reportable type=```Dimension```, index attribute=```True```. 

If you define a path name longer than 256 characters, you can't specify it in Microsoft Project. To avoid this problem, define path names of no more than 10 characters, and don't nest nodes more than 14 levels deep.

You can't apply most field rules to system fields, such as System.AreaPath and System.IterationPath fields. For more information, see [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md).

The following fields don't appear on work item forms but Azure DevOps tracks them for each work item type. These fields provide a numeric value for each classification value that you define for a project. You can use these fields to filter queries and create reports.

> [!div class="mx-tdCol2BreakAll"]  
> |**Field name**|**Description**|**Reference name**|**Data type**|
> |---|---|---|---|
> |Area ID|The unique ID of the area where you assign this work item.|System.AreaId|Integer|
> |Iteration ID|The unique ID of the iteration where you assign this work item.|System.IterationId|Integer|
> |Node Name|The name of the last node of an area path. For example, if the area path is Project\A1\B2\C3, the node name is C3.|System.NodeName|String|

The default reportable type is none. Area ID and Iteration ID have indexes. Node Name doesn't. To learn more about field attributes, see [Work item fields and attributes](../work-items/work-item-fields.md).

## Related content 

- [Query quick reference](query-index-quick-ref.md)
- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
- [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) 

[!INCLUDE [temp](../includes/rest-apis-queries.md)]

