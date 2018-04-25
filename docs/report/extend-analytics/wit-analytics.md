---
title: Query work tracking data using the OData Analytics service
titleSuffix: VSTS
description: How to generate work item tracking reports for Visual Studio Team Services (VSTS) using the OData Analytics service  
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# Query your work tracking data using the OData Analytics service

**VSTS**  


Using the Analytics Service for Visual Studio Team Services (VSTS), you can construct basic and filtered queries to return work items of interest. You can run these queries directly in your browser.

In this topic, the base root URL is scoped to a project as shown:  

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0
``` 

All additional URL parts are specified as an additional part of the query string.

[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Prerequisites

- You will need to have a VSTS account and team project. If you don't have one, see [Sign up for a free VSTS account](../../user-guide/sign-up-invite-teammates.md).
- You will have to have defined several work items. See [Plan and track work](../../user-guide/plan-track-work.md). 
- Install the [Analytics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). To learn more about extensions, see [Install VSTS extensions](../../marketplace/install-vsts-extension.md). 

## Construct a basic query 

You construct a basic query by entering the OData URL into a [supported web browser](../../tfs-server/requirements.md#supported-browsers). In the examples provided, replace `{account}` and `{project}` with your account name and  the name of a team project that you want to query. 

### Query a single entity set
To query a single entity set, such as Work Items or Areas or Projects, simply add the name of the entity: `/Areas`, `/Projects`,  or `/WorkItems`. For full list of entity sets, see [Data model for the Analytics service](data-model-analytics-service.md).

For example, you query Areas by adding `/Areas`. The full URL is:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/Areas 
```

This is equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of work items, this may take several seconds. If you have more than 10000 work items [server-side paging will be enforced](#server-force-paging).
 
### Select specific columns  
Return specific field data by adding a ```$select``` clause. 

For example, to return only the Work Item ID, Work Item Type, Title, and State of work items, add this clause to your query:  

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State`	

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$select=WorkItemId,WorkItemType,Title,State
```

This is equivalent to selecting all rows in the entity, but returning only these specific fields.  

> [!NOTE]  
> Field names don't contain any spaces. Your query will fail if you add spaces. OData queries require attention is paid to both spacing and casing.   

## Filter your data 
You can filter data by providing a query filter clause. Building on the last query, you would add the following filter clause to only return those work items to return the state "In Progress". 

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'
```

Alternatively, you can exclude the ```$select``` clause altogether and just filter the results as follows:

`/WorkItems?$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$filter=State eq 'In Progress'
```

Also, you can apply multiple filters by concatenating two or more filters. For example, here we filter for In Progress tasks.

`/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'
```

Additionally, you can apply various functions such as `contains`, `startswith`, `endswith` and more. See the [Supported OData features and clauses, Supported functions](odata-supported-features.md#supported-functions). 

## Filter using related entities such as Area Path, Iteration Path, and more 
Querying work items is helpful, but you will eventually want to filter by other data such as the Iteration Path, Area Path,  or Team Project. To do this, you need to understand the navigation properties of the entity model. You can get metadata using `/$metadata` URL. For details, see [Explore Analytics OData metadata](analytics-metadata.md) 

Here is a partial view of the metadata for the Work Items entity:

> [!div class="tabbedCodeSnippets"]
```XML
    <Property ...>
    <Property Name="RequirementType" Type="Edm.String"/>
    <Property Name="RequiresReview" Type="Edm.String"/>
    <Property Name="RequiresTest" Type="Edm.String"/>
    <Property Name="RootCause" Type="Edm.String"/>
    <Property Name="SubjectMatterExpert1" Type="Edm.String"/>
    <Property Name="SubjectMatterExpert2" Type="Edm.String"/>
    <Property Name="SubjectMatterExpert3" Type="Edm.String"/>
    <Property Name="TargetResolveDate" Type="Edm.DateTimeOffset"/>
    <Property Name="TaskType" Type="Edm.String"/>
    <Property Name="UserAcceptanceTest" Type="Edm.String"/>
    <Property Name="Count" Nullable="false" Type="Edm.Int32"/>
    <NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemRevision)"/>
    <NavigationProperty Name="BoardLocations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.BoardLocation)"/>
    <NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project"/>
    <NavigationProperty Name="Area" Type="Microsoft.VisualStudio.Services.Analytics.Model.Area"/>
    <NavigationProperty Name="Iteration" Type="Microsoft.VisualStudio.Services.Analytics.Model.Iteration"/>
```

The navigation properties appear towards the bottom of the metadata, which include `Revisions`, `BoardLocations` (Kanban metadata), `Project```, `Area`, and `Iteration`. 

## Filter by a navigation property

How do you use navigation properties to filter results? 

Use the following clause to filter work items based on a specific iteration, for example Iteration 1: 

`/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'
```

In this example, `Iteration` is the navigation property name and `IterationPath` corresponds to the full path for the iteration. To use another entity as a filter, put the navigation property followed by a slash followed by the name of the field to filter on.  

## Return data from related entities

How do you use navigation properties to select related fields?

The username for Custom fields based on an Identity is not directly accessible using a `$select` statement. The following query uses a `$expand` statement to retrieve the user name:

`/WorkItems?$expand=MyIdentityField($select=UserName)`

> [!NOTE]  
> You can't use the navigation property directly in a `$select` statement. Instead, you will need to use `$expand`.  

The previous filtering example for the Iteration Path doesn't return the iteration path  in the results because it is contained in a related entity. To return data in a related entity, add an `$expand` statement:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration`

This returns the following:  

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)",
  "value":[
    {
      "WorkItemId":10000,
      "WorkItemType":"Task",
      "Title":"Some title",
      "State":"Completed",
      "Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46",
        "Name":"Sprint 55",
        "Number":13021,
        "IterationPath":"Fabrikam\\Sprints\\Sprint 55",
        "StartDate":"2013-09-23T00:00:00Z",
        "EndDate":"2013-10-11T00:00:00Z",
        "IterationLevel1":"Fabrikam",
        "IterationLevel2":"Sprints",
        "IterationLevel3":"Sprint 55",
        "Level":2,
        "IsDeleted":false
      }
    }
  ]
}
```

As you can see, the Iteration Path is expanded in the JSON result and all of the iteration data is returned. This is probably more data than you want.  

To return less data, add a `$select` statement against the iteration as well:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration($select=Name,IterationPath)`

Which returns the following:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration,Iteration(Name,IterationPath))",
  "value":[
    {
      "WorkItemId":10000,
      "WorkItemType":"Task",
      "Title":"Some title",
      "State":"Completed",
      "Iteration":{
        "Name":"Sprint 55",
        "IterationPath":"Fabrikam\\Sprints\\Sprint 55"
      }
    }
  ]
}
```

In OData, you can nest `$expand` statements. For example, you can write the previous query statement to display the project the iteration is part of:

`/WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($expand=Project)`

This results in:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItems",
  "value":[
    {
      "WorkItemId":10000,
      "Revision":3,
      "Watermark":283397,
      "Title":"Production deployment and testing for Entitlement API v2 and Subscriber database",
      "WorkItemType":"Task",
      "ChangedDate":"2014-07-10T19:29:58.41Z",
      "CreatedDate":"2014-04-19T22:44:58.31Z",
      "State":"Completed",
      "Reason":"Completed",
      "Priority":2,
      "CompletedWork":10.0,
      "OriginalEstimate":20.0,
      "Count":1,
      "Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46",
        "Name":"Sprint 55",
        "Number":13021,
        "IterationPath":"Fabrikam\\Sprints\\Sprint 55",
        "StartDate":"2013-09-23T00:00:00Z",
        "EndDate":"2013-10-11T00:00:00Z",
        "IterationLevel1":"Fabrikam",
        "IterationLevel2":" Sprints",
        "IterationLevel3":"Sprint 55",
        "Level":2,
        "IsDeleted":false,
        "Project":{
          "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544",
          "ProjectName":"Fabrikam",
          "IsDeleted":false
        }
      }
    }
  ]
}
```

You can also combine `$expand` and `$select` statements. For example, you can change the previous query to only return the Iteration Name and Iteration Path:

`/WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($select=IterationId,IterationPath;$expand=Project)`

This results in:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItems(Iteration(IterationId,IterationPath,Project))",
  "value":[
    {
      "WorkItemId":10000,
      "Revision":3,
      "Watermark":283397,
      "Title":"Production deployment and testing for Entitlement API v2 and Subscriber database","WorkItemType":"Task",
      "ChangedDate":"2014-07-10T19:29:58.41Z",
      "CreatedDate":"2014-04-19T22:44:58.31Z",
      "State":"Completed",
      "Reason":"Completed",
      "Priority":2,
      "CompletedWork":10.0,
      "OriginalEstimate":20.0,
      "Count":1,
      "Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46","IterationPath":"Fabrikam\\Sprints\\Sprint 55",
        "Project":{
          "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544",
          "ProjectName":"Fabrikam",
          "IsDeleted":false
        }
      }
    }
  ]
}
```

Notice that the result here shows only the IterationId and IterationPath and that the Project is a nested object within the JSON result. Another key item to note is the URL itself. When using a `$select` statement and an `$expand` clause you must use a semi-colon (;) before the `$expand`. Anything else will result in an error.

## Sort results

You can sort OData results using the `$orderby` clause. You can apply this clause to any OData query as shown:

`/WorkItems?$orderby=WorkItemId`

You can sort in ascending or descending order using keywords `asc` or `desc` correspondingly:

`/WorkItems?&$orderby=WorkItemId desc`

And, you can order by multiple items:

`/WorkItems?$orderby=WorkItemType,State`

<a id="server-force-paging"></a>
## Server-side enforced paging

The Analytics Service forces paging when query results exceed 10000 records. In that case, you will get first page of data and link to follow to get next page. Link (`@odata.nextLink`) can be found at the end of the JSON output. It will look like an original query followed by `$skip` or `$skiptoken`. For example:


> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItems",
  "value":[
   // 10000 values here
  ],
  "@odata.nextLink":"https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItems?$skiptoken=10000"
}
``` 

> [!NOTE]  
> When pulling data into client tools such as Power BI Desktop or Excel, tools will automatically follow next link and load all required records. 


## Try this next
> [!div class="nextstepaction"]
> [Project & account-scoped queries](account-scoped-queries.md)

 
## Related articles
- [Query guidelines](odata-query-guidelines.md) 
- [Supported OData features](odata-supported-features.md)
- [OData v4.0 specification](http://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)  

