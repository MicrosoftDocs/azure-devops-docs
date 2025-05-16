---
title: Query for Linked Work Items 
titleSuffix: Azure DevOps 
description: Find out how to create OData queries against Analytics for Azure DevOps to retrieve information about linked work items.
ms.subservice: azure-devops-analytics
ms.topic: tutorial
ms.assetid: BF30FE4E-0370-4C9B-A660-51207D816F8B
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 05/09/2025
# customer intent: As a developer, I want to find out how to create OData queries against Analytics for Azure DevOps so that I can retrieve information about linked work items.
---

# Tutorial: Query for linked work items 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

When you run Open Data Protocol (OData) queries against Analytics for Azure DevOps, you can retrieve information about work items. You can also query linked work items. Work items can be linked hierarchically, such as in parent or child relationships. Work items can also be linked nonhierarchically, such as when work items are related or are duplicates.

The way you query linked work items is similar to the way you use navigation properties to filter queries of entity sets. But links are entities, so there's some extra complexity. There are two ways to query linked work items:

- By using the `Parent` or `Children` navigation properties
- By using the `Links` navigation property

In this tutorial you:

> [!div class="checklist"]
> * Construct queries to return hierarchically linked work items.
> * Construct queries to return nonhierarchically linked work items.

[!INCLUDE [Analytics preview](../includes/analytics-preview.md)]

## Prerequisites

[!INCLUDE [Basic prerequisites](../includes/analytics-prerequisites-simple.md)]

::: moniker range=" < azure-devops"

> [!NOTE]
> The examples in this article use an Azure DevOps Services URL in the following format:
> 
> `https://analytics.dev.azure.com/{organization-name}/{project-name}/_odata/{version}`
>
> For Azure DevOps Server, use the following format instead, which includes the on-premises server:
> 
> `https://{server-name}:{port}/tfs/{organization-name}/{project-name}/_odata/{version}`

::: moniker-end

## Query for parent or children work items

You can query items related through parent-child links by using the `$expand` option on the `Parent` and `Children` navigation properties.

### Example: Request an item's children

To return information about an item's children, use `$expand` on the `Children` navigation property. The following OData code queries the Fabrikam Fiber project in the fabrikam organization. It returns the children of the work item with ID 359.

**Request**

```odata
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 359&$select=WorkItemId, Title, WorkItemType, State&$expand=Children($select=WorkItemId,Title, WorkItemType, State)
```

The response lists information about the feature work items with IDs 479 and 480. These features are children of the epic work item with ID 359.

[!INCLUDE [Note about the work item link warning](../includes/note-work-item-link-warning.md)]

**Response**

```json
{
    "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Children(WorkItemId,Title,WorkItemType,State))",
    "vsts.warnings@odata.type": "#Collection(String)",
    "@vsts.warnings": [
        "VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
    ],
    "value": [{
        "WorkItemId": 359,
        "Title": "Phase 1 - Customer access and engagement 5",
        "WorkItemType": "Epic",
        "State": "In Progress",
        "Children": [{
            "WorkItemId": 480,
            "Title": "Customer Phone - Phase 1",
            "WorkItemType": "Feature",
            "State": "In Progress"
        },
        {
            "WorkItemId": 479,
            "Title": "Customer Web - Phase 1",
            "WorkItemType": "Feature",
            "State": "In Progress"
        }]
    }]
}
```

### Example: Request an item's parent

By replacing `Children` with `Parent` in the `$expand` option, you can retrieve an item's ancestry.  

The following code queries the parent of the work item with ID 1048 in the Fabrikam Fiber project and the fabrikam organization. 

**Request**

```odata
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$expand=Parent($select=WorkItemId,Title,WorkItemType, State)&$filter=WorkItemId eq 1048
```

The response lists information about the feature with ID 480, which is the parent of the product backlog item with ID 1048.  

**Response**

```json
{
    "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Parent(WorkItemId,Title,WorkItemType,State))",
    "vsts.warnings@odata.type": "#Collection(String)",
    "@vsts.warnings": [
        "VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
    ],
    "value": [{
        "WorkItemId": 1048,
        "Title": "Support reset",
        "WorkItemType": "Product Backlog Item",
        "State": "New",
        "Parent": {
                "WorkItemId": 480,
                "Title": "Customer Phone - Phase 1",
                "WorkItemType": "Feature",
                "State": "In Progress"
        }
    }]
}
```
 
## Query for nonhierarchical links

Besides parent-child links, other types like `Related` or `Duplicate` can also link work items. You can use the `Links` navigation property to request information about work items linked through nonhierarchical relationships.

### Example: Request an item's links

To retrieve the links associated with an item, you use the `$expand` option on the `Links` navigation property. The following query retrieves the `SourceWorkItemId`, `TargetWorkItemId`, and `LinkTypeName` values for all links associated with work item 363.

**Request**

```odata
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20363&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName)
```

**Response**

```json
{
    "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName))",
    "value": [{
        "WorkItemId": 363,
        "Title": "Welcome back page",
        "WorkItemType": "Product Backlog Item",
        "State": "Done",
        "Links": [{
            "SourceWorkItemId": 363,
            "TargetWorkItemId": 400,
            "LinkTypeName": "Related"
        },
        {
            "SourceWorkItemId": 363,
            "TargetWorkItemId": 470,
            "LinkTypeName": "Tested By"
        },
        {
            "SourceWorkItemId": 363,
            "TargetWorkItemId": 501,
            "LinkTypeName": "Related"
        },
        {
            "SourceWorkItemId": 363,
            "TargetWorkItemId": 1079,
            "LinkTypeName": "Tested By"
        }]
    }]
}
```

### Example: Request detailed information about linked items

You can query detailed information about linked work items by using the `$expand` option on the `TargetWorkItem` or `SourceWorkItem` navigation properties.

Like the previous query, the following query retrieves the `SourceWorkItemId`, `TargetWorkItemId`, and `LinkTypeName` values for all links associated with a work item. But this query also retrieves the `WorkItemId`, `Title`, and `State` values of each link's target work item.

**Request**

```odata
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$expand=TargetWorkItem($select=WorkItemId,Title,State))
```

**Response**

```json
{
    "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
    "value": [{
        "WorkItemId": 103,
        "Title": "Feature Y",
        "WorkItemType": "Feature",
        "State": "New",
        "Links": [{
            "SourceWorkItemId": 103,
            "TargetWorkItemId": 48,
            "LinkTypeName": "Child",
            "TargetWorkItem": {
                "WorkItemId": 48,
                "Title": "Story 15",
                "State": "Resolved"
            }
        }, {
            "SourceWorkItemId": 103,
            "TargetWorkItemId": 50,
            "LinkTypeName": "Child",
            "TargetWorkItem": {
                "WorkItemId": 50,
                "Title": "Story 17",
                "State": "Active"
            }
        }, {
            "SourceWorkItemId": 103,
            "TargetWorkItemId": 55,
            "LinkTypeName": "Child",
            "TargetWorkItem": {
                "WorkItemId": 55,
                "Title": "Story 22",
                "State": "New"
            }
        }, {
            "SourceWorkItemId": 103,
            "TargetWorkItemId": 112,
            "LinkTypeName": "Related",
            "TargetWorkItem": {
                "WorkItemId": 112,
                "Title": "Issue 10",
                "State": "Active"
            }
        }]
    }]
}
```

### Example: Request links of a specific type

If you're interested in a particular type of link between items, you can use the `LinkTypeName` property in a `$filter` clause. The following query expands all `Related` links and filters out all other link types for work item 103.

**Request**

```odata
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId eq 103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$filter=LinkTypeName eq 'Related';$expand=TargetWorkItem($select=WorkItemId,Title,State))
```

**Response**

```json
{
    "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
    "value": [{
        "WorkItemId": 103,
        "Title": "Feature Y",
        "WorkItemType": "Feature",
        "State": "New",
        "Links": [{
            "SourceWorkItemId": 103,
            "TargetWorkItemId": 112,
            "LinkTypeName": "Related",
            "TargetWorkItem": {
                "WorkItemId": 112,
                "Title": "Issue 10",
                "State": "Active"
            }
        }]
    }]
}
```

## Related content

- [Analytics OData metadata](analytics-metadata.md)
- [Construct OData queries for Analytics in Azure DevOps](../analytics/analytics-query-parts.md)  
- [List linked work items sample queries and reports](../powerbi/sample-boards-directlinks.md)
