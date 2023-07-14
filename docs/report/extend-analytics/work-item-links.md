---
title: Query for linked work items 
titleSuffix: Azure DevOps 
description: Learn how to create a query for linked work items using Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.topic: tutorial
ms.assetid: BF30FE4E-0370-4C9B-A660-51207D816F8B
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 10/26/2022
---

# Query for linked work items 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Querying work items across links is much like using typical navigation properties. Links themselves are entities though, so there's some extra complexity.

There are two ways to query for linked work items. The first is the Parent/Child hierarchy, and the second is the Links navigation property.  

In this article you'll learn: 

> [!div class="checklist"]
> * How to construct a query to return hierarchically (parent-child) linked work items
> * How to construct a query to return non-hierarchically (related, direct) linked work items 

[!INCLUDE [temp](../includes/analytics-preview.md)]

::: moniker range=">= azure-devops-2019 < azure-devops"

> [!NOTE]
> The examples shown in this article are based on a Azure DevOps Services URL. For Azure DevOps Server, you need to substitute the URL for the on-premises server.
> 
> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
> ```

::: moniker-end

 

## Parent-child hierarchy

You can include items related through Parent/Child links by using ```$expand``` on the Parent and Children properties.

### Example: Parent to child query

To return information about an item's children, use ```$expand``` on the **Children** navigation property. 
The following code snippet requests to return the children of work item ID 359 from the Fabrikam Fiber project. 

**Request**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 359&$select=WorkItemId, Title, WorkItemType, State&$expand=Children($select=WorkItemId,Title, WorkItemType, State)
> ```

The response returns features 479 and 480, which are children of the epic 359.  

[!INCLUDE [temp](../includes/note-work-item-link-warning.md)]

**Response**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Children(WorkItemId,Title,WorkItemType,State))"
> vsts.warnings@odata.type	"#Collection(String)"
> @vsts.warnings	
> 0	"VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
> value	
>  0	
>    WorkItemId	359
>    Title	"Phase 1 - Customer access and engagement 5"
>    WorkItemType	"Epic"
>    State	"In Progress"
>    Children	
>       0	
>         WorkItemId	480
>         Title	"Customer Phone - Phase 1"
>         WorkItemType	"Feature"
>         State	"In Progress"
>       1	
>         WorkItemId	479
>         Title	"Customer Web - Phase 1"
>         WorkItemType	"Feature"
>         State	"In Progress"
> ```

### Example: Child to parent query

By replacing **Children** with **Parent** in the ```$expand``` option, you can retrieve an item's ancestry.  

The following query requests to return the parent of work item ID 1048 from the Fabrikam Fiber project. 

**Request**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,State&$expand=Parent($select=WorkItemId,Title,WorkItemType, State)&$filter=WorkItemId eq 1048
> ```


The response returns feature 480, which is the parent to product backlog item 1048.  

**Response**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Parent(WorkItemId,Title,WorkItemType,State))"
> vsts.warnings@odata.type	"#Collection(String)"
> @vsts.warnings	
> 0	"VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
> value	
>   0	
>      WorkItemId	1048
>      Title	"Support reset"
>      WorkItemType	"Product Backlog Item"
>      State	"New"
>      Parent	
>         WorkItemId	480
>         Title	"Customer Phone - Phase 1"
>         WorkItemType	"Feature"
>         State	"In Progress"
> ```
 
## Query for non-hierarchical links

In addition to the Parent/Child hierarchy, items can be directly related to other items with link types like *Related* or *Duplicate*. The **Links** navigation property allows you to request these relationships.

### Example: Request an item's links

To retrieve the links associated with an item, you can ```$expand``` the **Links** navigation property. In this example the **SourceWorkItemId**, **TargetWorkItemId**, and **LinkTypeName** are retrieved for all links associated with the work item 363.

**Request**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20363&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName)
> ```

**Response**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>     "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName))",
>     "value": [{
>         "WorkItemId": 363,
>         "Title": "Welcome back page",
>         "WorkItemType": "Product Backlog Item",
>         "State": "Done",
>         "Links": [{
>             "SourceWorkItemId": 363,
>             "TargetWorkItemId": 400,
>             "LinkTypeName": "Related"
>         }, {
>             "SourceWorkItemId": 363,
>             "TargetWorkItemId": 470,
>             "LinkTypeName": "Tested By"
>         }, {
>             "SourceWorkItemId": 363,
>             "TargetWorkItemId": 501,
>             "LinkTypeName": "Related"
>         }, {
>             "SourceWorkItemId": 363,
>             "TargetWorkItemId": 1079,
>             "LinkTypeName": "Tested By"
>         }
>     }]
> }
> ```


### Example: Request details of linked items

You can include the details of your linked work items by using ```$expand``` on the **TargetWorkItem** or **SourceWorkItem** navigation properties. In this example, we retrieve the **WorkItemId**, **Title**, and **State** of the target work item for each link.

**Request**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$expand=TargetWorkItem($select=WorkItemId,Title,State))
> ```

**Response**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>     "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
>     "value": [{
>         "WorkItemId": 103,
>         "Title": "Feature Y",
>         "WorkItemType": "Feature",
>         "State": "New",
>         "Links": [{
>             "SourceWorkItemId": 103,
>             "TargetWorkItemId": 48,
>             "LinkTypeName": "Child",
>             "TargetWorkItem": {
>                 "WorkItemId": 48,
>                 "Title": "Story 15",
>                 "State": "Resolved"
>             }
>         }, {
>             "SourceWorkItemId": 103,
>             "TargetWorkItemId": 50,
>             "LinkTypeName": "Child",
>             "TargetWorkItem": {
>                 "WorkItemId": 50,
>                 "Title": "Story 17",
>                 "State": "Active"
>             }
>         }, {
>             "SourceWorkItemId": 103,
>             "TargetWorkItemId": 55,
>             "LinkTypeName": "Child",
>             "TargetWorkItem": {
>                 "WorkItemId": 55,
>                 "Title": "Story 22",
>                 "State": "New"
>             }
>         }, {
>             "SourceWorkItemId": 103,
>             "TargetWorkItemId": 112,
>             "LinkTypeName": "Related",
>             "TargetWorkItem": {
>                 "WorkItemId": 112,
>                 "Title": "Some issue",
>                 "State": "Active"
>             }
>         }]
>     }]
> }
> ```

### Example: Links of a specific type

You may also be interested in a particular type of link between items. Specify the **LinkTypeName** property in a `$filter` clause. The following query example expands all **Related** links and filters out all other link types for work item 103.

**Request**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId eq 103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$filter=LinkTypeName eq 'Related';$expand=TargetWorkItem($select=WorkItemId,Title,State))
> ```

**Response**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>     "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
>     "value": [{
>         "WorkItemId": 103,
>         "Title": "Feature Y",
>         "WorkItemType": "Feature",
>         "State": "New",
>         "Links": [{
>             "SourceWorkItemId": 103,
>             "TargetWorkItemId": 112,
>             "LinkTypeName": "Related",
>             "TargetWorkItem": {
>                 "WorkItemId": 112,
>                 "Title": "Some issue",
>                 "State": "Active"
>             }
>         }]
>     }]
> }
> ```


## Next steps

> [!div class="nextstepaction"]
> [Explore Analytics metadata](analytics-metadata.md) 

## Related articles

- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)  
- [Construct basic queries using OData Analytics](wit-analytics.md)
- [Work items with direct links sample reports](../powerbi/sample-boards-directlinks.md)
- [Requirements tracking sample report](../powerbi/sample-stories-overview.md)
