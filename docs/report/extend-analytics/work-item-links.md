---
title: Query for linked work items 
titleSuffix: Azure DevOps 
description: How to guidance for creating a query for linked work items using the Analytics service for Azure DevOps   
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: BF30FE4E-0370-4C9B-A660-51207D816F8B
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 11/2/2018
---

# Query for linked work items 

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Querying work items across links is much like using typical navigation properties. Links themselves are entities though, so there is some additional complexity.

There are two ways to query for linked work items. The first is the Parent/Child hierarchy, and the second is the Links navigation property.  

In this article you'll learn: 

> [!div class="checklist"]
> * How to construct a query to return hierarchically (parent-child) linked work items
> * How to construct a query to return non-hierarchically (related, direct) linked work items 

[!INCLUDE [temp](../_shared/analytics-preview.md)]



> [!NOTE]
> The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL.

> [!div class="tabbedCodeSnippets"]
```OData
https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
```

[!INCLUDE [temp](../_shared/api-versioning.md)]



## Parent/Child hierarchy

You can include items related through Parent/Child links by using ```$expand``` on the Parent and Children properties.

### Example: Parent to child query

To return information about an item's children use ```$expand``` on the **Children** navigation property.


**Request**

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?$select=WorkItemId,Title,State&$expand=Children($select=WorkItemId,Title,State)&$filter=WorkItemId eq 103
```


**Response**

> [!div class="tabbedCodeSnippets"]
```JSON
{
	"@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//$metadata#WorkItems(WorkItemId,Title,State,Children,Children(WorkItemId,Title,State))",
	"value": [{
		"WorkItemId": 103,
		"Title": "Feature Y",
		"State": "New",
		"Children": [{
			"WorkItemId": 48,
			"Title": "Story 15",
			"State": "Resolved"
		}, {
			"WorkItemId": 50,
			"Title": "Story 17",
			"State": "New"
		}, {
			"WorkItemId": 55,
			"Title": "Story 22",
			"State": "New"
		}]
	}]
}
```

### Example: Child to parent query

By replacing **Children** with **Parent** in the ```$expand``` option you can retrieve an item's ancestry.

**Request**

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?$select=WorkItemId,Title,State&$expand=Parent($select=WorkItemId,Title,State;$levels=max)&$filter=WorkItemId eq 105
```

**Response**

> [!div class="tabbedCodeSnippets"]
```JSON
{
	"@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//$metadata#WorkItems(WorkItemId,Title,State,Parent,Parent(WorkItemId,Title,State,Parent,Parent(WorkItemId,Title,State)))",
	"value": [{
		"WorkItemId": 105,
		"Title": "Task B",
		"State": "New",
		"Parent": {
			"WorkItemId": 55,
			"Title": "Story 22",
			"State": "New",
			"Parent": {
				"WorkItemId": 103,
				"Title": "Feature Y",
				"State": "New"
			}
		}
	}]
}
```

## Query for non-hierarchical links
In addition to the Parent/Child hierarchy items can be directly related to other items with link types like *Related* or *Duplicate*. The **Links** navigation property allows you to request these relationships.

### Example: Request an item's links

To retrieve the links associated with an item you may ```$expand``` the **Links** navigation property. In this example the SourceWorkItemId, TargetWorkItemId, and LinkTypeName will be retrieved for all links associated with the work item.

**Request**

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName)
```

**Response**

> [!div class="tabbedCodeSnippets"]
```JSON
{
	"@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName))",
	"value": [{
		"WorkItemId": 103,
		"Title": "Feature Y",
		"WorkItemType": "Feature",
		"State": "New",
		"Links": [{
			"SourceWorkItemId": 103,
			"TargetWorkItemId": 48,
			"LinkTypeName": "Child"
		}, {
			"SourceWorkItemId": 103,
			"TargetWorkItemId": 50,
			"LinkTypeName": "Child"
		}, {
			"SourceWorkItemId": 103,
			"TargetWorkItemId": 55,
			"LinkTypeName": "Child"
		}, {
			"SourceWorkItemId": 103,
			"TargetWorkItemId": 112,
			"LinkTypeName": "Related"
		}]
	}]
}
```
### Example: Request details of linked items

You may include the details of your linked work items by using ```$expand``` on the **TargetWorkItem** or **SourceWorkItem** navigation properties. In this example we will retrieve the WorkItemId, Title, and State of the target work item for each link.

**Request**

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$expand=TargetWorkItem($select=WorkItemId,Title,State))
```

**Response**

> [!div class="tabbedCodeSnippets"]
```JSON
{
	"@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
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
				"Title": "Some issue",
				"State": "Active"
			}
		}]
	}]
}
```

### Example: Links of a specific type
You may also be interested in a particular type of link between items, in which case the **LinkTypeName** property can be used in a ```$filter```. This query expands all 'Related' links and filters out all other link types.

**Request**

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId eq 103&$expand=Links($select=SourceWorkItemId,TargetWorkItemId,LinkTypeName;$filter=LinkTypeName eq 'Related';$expand=TargetWorkItem($select=WorkItemId,Title,State))
```

**Response**

> [!div class="tabbedCodeSnippets"]
```JSON
{
	"@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links(SourceWorkItemId,TargetWorkItemId,LinkTypeName,TargetWorkItem(WorkItemId,Title,State)))",
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
				"Title": "Some issue",
				"State": "Active"
			}
		}]
	}]
}
```


## Try this next

> [!div class="nextstepaction"]
> [Explore Analytics metadata](analytics-metadata.md) 
