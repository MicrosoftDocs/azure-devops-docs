---
title: Query work tracking data using Analytics 
titleSuffix: Azure DevOps  
description: Learn how to create queries of work item tracking from Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.assetid: 1320852A-5C62-4954-9E9D-508D670777A4
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 11/04/2022
---

# Query work tracking data using Analytics  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

You can query your Azure DevOps work tracking data using the basic queries provided in this article. These queries address everyday needs while demonstrating various capabilities of Analytics. You can adapt most of these queries to meet your needs.

This article builds off information provided in [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).  


[!INCLUDE [temp](../includes/analytics-preview.md)] 
 

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

All examples are scoped to a project on Azure DevOps. For examples of organization-level scoping or Azure DevOps Server, see [Project and organization-scoped queries](account-scoped-queries.md). 

::: moniker range="azure-devops"
> [!TIP] 
> You can use the [WIQL to OData Azure DevOps](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) Marketplace extension to quickly generate an OData query based on a work item query from the **Queries** page. This extension supports conversion of **Flat list of work items** and **Work items and direct links**. Extensions are not supported features of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using these extensions, visit their corresponding extension page.
::: moniker-end

<a id="changed-date" /> 



## Filter work items based on a Changed Date    

You query the `WorkItems` entity set to list work items that meet your field criteria. 

The following query returns Product Backlog Items, Bugs, and Features that have a **Changed Date** greater than December 12, 2021.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/WorkItems?
  $select=WorkItemId, WorkItemType, Title, State 
  &$expand=AssignedTo($select=UserEmail)
  &$filter=(Project/ProjectName eq 'Fabrikam Fiber'
    AND (WorkItemType eq 'Product Backlog Item' or WorkItemType eq 'Bug' or WorkItemType eq 'Feature')
    AND ChangedOn/Date ge 2021-12-16T23:44:15.619Z)
  &$orderby=WorkItemType desc 
```


<a id="area" />

## Filter work items based on Area 

You can modify the following query to list all work items under a specific Area Path. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Area/AreaPath eq '{area path}'
  &$select=WorkItemId, Title, State
```

**Example query:**

For example, the following syntax queries the work item count for each project defined for the **fabrikam** organization.  

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/WorkItems?$apply=groupby((Project/ProjectName), aggregate($count as Count))
```
 
**Example response:**

And the response returns data for the following five projects.
 
> [!div class="tabbedCodeSnippets"]
```OData
{
   "@odata.context":"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#WorkItems(Project(ProjectName),Count)",
   "value":[
      {
         "@odata.id":null,
         "Count":2,
         "Project":{
            "@odata.id":null,
            "ProjectName":"Basic Fabrikam"
         }
      },
      {
         "@odata.id":null,
         "Count":19,
         "Project":{
            "@odata.id":null,
            "ProjectName":"Demo 11"
         }
      },
      {
         "@odata.id":null,
         "Count":188,
         "Project":{
            "@odata.id":null,
            "ProjectName":"Fabrikam Fiber"
         }
      },
      {
         "@odata.id":null,
         "Count":89,
         "Project":{
            "@odata.id":null,
            "ProjectName":"MyFirstProject"
         }
      },
      {
         "@odata.id":null,
         "Count":2,
         "Project":{
            "@odata.id":null,
            "ProjectName":"MyPublicProject"
         }
      }
   ]
}
```


<a id="iteration" />

## Filter work items based on Iteration 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}'
  &$select=WorkItemId, Title, State
```

**Example query:**

For example, the following syntax queries work items for the **Fabrikam Fiber** project under the **Iteration Path=Fabrikam Fiber\Release 1\Sprint 6**.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/WorkItems?$select=WorkItemId, WorkItemType, Title, State&$expand=Iteration($select=IterationPath)&$filter=(Project/ProjectName eq 'Fabrikam Fiber' AND WorkItemType ne '' AND Iteration/IterationPath eq 'Fabrikam Fiber\Release 1\Sprint 6')
```
 
**Example response:**

And the response returns data for the following four work items. 

> [!div class="tabbedCodeSnippets"]
```OData
{
   "@odata.context":"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration(IterationPath))",
   "value":[
      {
         "WorkItemId":361,
         "Title":"Hello World Web Site",
         "WorkItemType":"Product Backlog Item",
         "State":"New",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 6"
         }
      },
      {
         "WorkItemId":1126,
         "Title":"web site task",
         "WorkItemType":"Task",
         "State":"To Do",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 6"
         }
      },
      {
         "WorkItemId":1136,
         "Title":"Add a new task with two new tags",
         "WorkItemType":"Task",
         "State":"To Do",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 6"
         }
      },
      {
         "WorkItemId":1140,
         "Title":"New task - test for Blocked",
         "WorkItemType":"Task",
         "State":"To Do",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 6"
         }
      }
   ]
}
```


### Retrieve items for an iteration

You can retrieve all work items for a given iteration that fall between the first day of the iteration and the last day of the iteration. Here, your query is constrained by data contained within the work tracking data.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}' 
    and ChangedDate ge Iteration/StartDate 
    and ChangedDate le Iteration/EndDate
  &$select=WorkItemId, Title, State
```

<a id="tag" />





## Filter work items containing specific tags 

The **any** operator is used here because there are a collection of tags that can be associated with a work item.
From a usage perspective, the format is: `{Navigation Property}/any(d:d/{Field Name} {operator} {expression})`. Any item not surrounded by curly brackets ({}) is a literal. There are some variations. For example, you don't have to use "d" as used in the expression above.
Following this format keeps it simple.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Tags/any(d:d/TagName eq '{tag name}')
  &$select=WorkItemId, Title, State
```

<a id="team" />

## Filter work items for a specific team 

Use the following query to list work items for a specific team. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Teams/any(d:d/TeamName eq '{team name}')
  &$select=WorkItemId, Title, State
```

<a id="was-ever" />

## Filter work items based on a field ever having a specific value 

The following query is similar to a work item query that uses the **Was Ever** operator.  

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=WorkItemType eq '{Type}'
     and Revisions/any(r:r/ResolvedBy/UserName eq '{User}') 
```

**Example query:**

The following query returns the work items that were ever assigned to Jamal Hartnett whose email is 'fabrikamfiber4@hotmail.com' for the *Fabrikam Fiber* project.
 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?
  $select=WorkItemType, Title, State, 
  &$expand=AssignedTo($select=UserEmail), Area($select=AreaPath)
  &$filter=(WorkItemType ne '' AND State ne '' AND Revisions/any(r:r/AssignedTo/UserEmail eq 'fabrikamfiber4@hotmail.com'))
  &$orderby=WorkItemType asc
```

**Example response:**

The response returns two work items. 

> [!div class="tabbedCodeSnippets"]
```OData
{
   "@odata.context":"https://analytics.dev.azure.com/fabrikam/Design%20Agile/_odata/v4.0-preview/$metadata#WorkItems(Priority,WorkItemType,Title,State,TagNames,AssignedTo(UserEmail),Area(AreaPath))",
   "value":[
      {
         "Title":"New home page design",
         "WorkItemType":"Feature",
         "State":"Closed",
         "AssignedTo":{
            "UserEmail":"fabrikamfiber4@hotmail.com"
         },
         "Area":{
            "AreaPath":"Design Agile"
         }
      },
      {
         "Title":"Check performance",
         "WorkItemType":"User Story",
         "State":"New",
         "AssignedTo":{
            "UserEmail":"fabrikamfiber4@hotmail.com"
         },
         "Area":{
            "AreaPath":"Design Agile"
         }
      }
   ]
}
```

## Retrieve the teams assigned under an Area Path 

The following query returns the names of teams assigned to area paths under the *Account Management* area for the *Fabrikam Fiber* project. 

> [!div class="tabbedCodeSnippets"]
```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/Areas?
>      $filter=startswith(AreaPath,'Fabrikam Fiber\Account Management')
>      &$select=AreaPath&$expand=Teams($select=TeamName)
>```
The response returns three area paths and the names of several teams assigned to each. 

> [!div class="tabbedCodeSnippets"]
```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Areas(AreaPath,Teams(TeamName))"
> value	
> 0	
>   AreaPath             "Fabrikam Fiber\\Account Management\\Customer Profile"
>   Teams	
>       0	
>           TeamName     "Organization Management"
>       1	
>           TeamName     "Fabrikam Team"
>       2	
>           TeamName     "Customer Profile"
> 1	
>   AreaPath             "Fabrikam Fiber\\Account Management\\Shopping Cart"
>   Teams	
>       0	
>           TeamName     "Organization Management"
>       1	
>           TeamName     "Shopping Cart"
>       2	
>           TeamName     "Fabrikam Team"
> 2	
>   AreaPath             "Fabrikam Fiber\\Account Management"
>   Teams	
>       0	
>           TeamName     "Organization Management"
>       1	
>           TeamName     "Fabrikam Team"
```


<a id="history" />

## Return the history of a specific work item


You query the `WorkItemRevisions` entity set to list work item history.  The following query returns the value of the **Title**, **State**, and **Iteration Path** for each revision for a specified work item. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItemRevisions?
  $filter=WorkItemId eq {Id}
  &$select=WorkItemId, Title, State, Iteration Path
```

> [!NOTE]   
> Anytime a change is made to a work item, including a change to it's stack rank value, a revision is created. To learn more about historical data, see [Applying filters to historical data](../powerbi/analytics-historical-filtering.md).

**Example query:**

For example, the following syntax queries revisions for **ID=1145** in the Fabrikam Fiber project. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v1.0/WorkItemRevisions?$select=WorkItemId, Title, State&$expand=Iteration($select=IterationPath)&$filter=(Project/ProjectName eq 'Fabrikam Fiber' AND WorkItemId eq 1145 AND State ne '' AND Revision gt 1)
```

**Example response:**

And the response returns data for the four revisions:

> [!div class="tabbedCodeSnippets"]
```OData
{
   "@odata.context":"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItemRevisions(WorkItemId,Title,State,Iteration(IterationPath))",
   "value":[
      {
         "WorkItemId":1145,
         "Title":"Sprint 2 work added in June",
         "State":"New",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Future"
         }
      },
      {
         "WorkItemId":1145,
         "Title":"Sprint 2 work added in June",
         "State":"New",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Future"
         }
      },
      {
         "WorkItemId":1145,
         "Title":"Sprint 2 work added in June",
         "State":"New",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 2"
         }
      },
      {
         "WorkItemId":1145,
         "Title":"Sprint 2 work added in June",
         "State":"Done",
         "Iteration":{
            "IterationPath":"Fabrikam Fiber\\Release 1\\Sprint 2"
         }
      }
   ]
}
```
 

## Related articles 

- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md) 
- [OData Analytics query guidelines](odata-query-guidelines.md)
