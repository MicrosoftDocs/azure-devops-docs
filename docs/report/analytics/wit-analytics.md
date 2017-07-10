---
title: Work item tracking analytics | Team Services  
description: How to query the OData Analytics service to generate work item tracking reports for Visual Studio Team Services (VSTS)  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2016
---

#Analytics - Work Item Tracking OData queries 

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

Using the OData service provided by the Analytics Marketplace extension, you can construct basic and filtered queries to return work items of interest. With basic querying capabilities you can query data directly from your browser.

In this topic, the basic root URL is constructed as follows:

```https://[collection name].analytics.visualstudio.com/DefaultCollection/_odata``` 


All additional URL parts are specified as an additional part of the query string as shown in the examples below.   


##Construct a basic query  

###Query a single entity
To query a single entity, such as Work Items or Areas or Projects, simply add the name of the entity: ```/Areas```, ```/Projects```,  or ```/WorkItems```.

For example, you query Areas by adding ```/Areas```. The full URL is:

```https://[collection name].analytics.visualstudio.com/DefaultCollection/_odata/Areas```

This is equivalent to performing a select statement on the entity and returning everything, all columns and all rows. If you have a large number of work items, this may take several seconds.
 
### Select specific columns  
Return specific field data by adding a ```select``` clause. 

For example, to return only the Work Item ID, Work Item Type, Title, and State of work items, enter:   

	/WorkItems?$select=WorkItemId,WorkItemType,Title,State	

This is equivalent to selecting all rows in the entity, but returning only these specific fields.  

>[!NOTE]
>There are no spaces in the field names. The query fails when you add spaces. Both spacing and casing are critical in OData.  


### Target a specific project  

Because team projects are an integral part of Team Services, we have added the ability to specify the project scope in the URL. By specifying the project, you automatically filter for any entities that are related to the project entity.

For example, the following project-scoped query will return the count of work items for a specific project:  

    https://[collection].analytics.visualstudio.com/DefaultCollection/ProjectName/_odata/WorkItems/$count


Likewise, this query string will return the areas for a specific project:

    https://[collection].analytics.visualstudio.com/DefaultCollection/ProjectName/_odata/Areas


This is equivalent to the following filter on a collection-scoped query:

    https://[collection].analytics.visualstudio.com/DefaultCollection/_odata/Areas?$filter=Project/ProjectName eq 'project name'   


When using a collection-scoped query with an ```expand``` you must provide an additional filter:

The following query, which uses an ```expand``` to retrieve the children of all work items:
	
	https://[collection].analytics.visualstudio.com/_odata/WorkItems?$expand=Children&$filter=Project/ProjectName eq ‘x’


 Requires an additional filter to verify the children are limited to the specified project:
	
	https://[collection].analytics.visualstudio.com/_odata/WorkItems?$expand=Children($filter=Project/ProjectName eq ‘x’)&$filter=Project/ProjectName eq ‘x’


Without the additional filter, the request will fail if the child of any work item references work items in a project that you do not have read access to.


This query, which is expanding to parents:

	https://[collection].analytics.visualstudio.com/_odata/WorkItems?$expand=Parent&$filter=Project/ProjectName eq ‘x’


requires the following filter on the ```expand```:

	https://[collection].analytics.visualstudio.com/_odata/WorkItems?$expand=Parent&$filter=Project/ProjectName eq ‘x’ and Parent/Project/ProjectName eq ‘x’


>[!NOTE]
>If you don't have access to all projects in an account, apply a project filter to your query. When pulling data into client tools such as
>Power BI Desktop or Excel, use the project path form of the URL to ensure your data is constrained by a project, unless you need to report on more than one project.

###Filter results  

You can filter data by providing a query filter clause.  

Building on the last query, what if you wanted to filter the work items so that only items with the state "In Progress" were returned? To do that, use the following:

    /WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'

Alternatively, you can exclude the ```select``` clause altogether and just filter the results as follows:

    /WorkItems?$filter=State eq 'In Progress'

You can apply multiple filters by concatenating the filters:  

    /WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'

Additionally, you can apply various functions such as ```contains```, ```startswith```, ```endswith``` and more. See the [Filter and order by canonical functions](#canonical-functions) section later in this topic. 

## Query with filters  
Querying work items is helpful, but you will eventually want to be able to filter by other data such as the Iteration Path
or Area Path or Team Project. To do this, you need to understand the navigation properties of the entity model.  

Here is a partial view of the Work Items entity metadata:


```
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
    <NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.WebApi.WorkItemRevision)"/>
    <NavigationProperty Name="BoardLocations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.WebApi.BoardLocation)"/>
    <NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.WebApi.Project"/>
    <NavigationProperty Name="Area" Type="Microsoft.VisualStudio.Services.Analytics.WebApi.Area"/>
    <NavigationProperty Name="Iteration" Type="Microsoft.VisualStudio.Services.Analytics.WebApi.Iteration"/>
</EntityType>
```

The navigation properties appear towards the bottom of the metadata, which includes ```Revisions```,  ```BoardLocations``` (Kanban metadata), ```Project```, ```Area```, and ```Iteration```. 

How do you use this information to filter results?  

This query returns all of the work items in a specific iteration:

    /WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'

In this example, ```Iteration``` is the navigation property name and ```IterationPath``` is the full path for the iteration. To use another entity as a filter, put the navigation property followed by a slash followed by the name of the field to filter on.  

>[!NOTE]
>You can't use the navigation property in a ```select``` statement. Instead, you can use ```expand```.


##Return data from related entities

In the previous query, the filter was on the iteration path but the iteration path is not returned in the results because it is contained in a related entity.  

To return data in a related entity, add an ```expand``` statement:

    /WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration

This returns the following:  

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)","value":[
    {
      "WorkItemId":10000,"WorkItemType":"Task","Title":"Some title","State":"Completed","Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46","Name":"Sprint 55","Number":13021,"IterationPath":"Fabrikam\\Sprints\\Sprint 55","StartDate":"2013-09-23T00:00:00Z","EndDate":"2013-10-11T00:00:00Z","IterationLevel0":"VSOnline","IterationLevel1":"OneVS","IterationLevel2":"Previous Sprints","IterationLevel3":"Sprint 55","IterationLevel4":null,"IterationLevel5":null,"IterationLevel6":null,"IterationLevel7":null,"IterationLevel8":null,"IterationLevel9":null,"IterationLevel10":null,"IterationLevel11":null,"IterationLevel12":null,"IterationLevel13":null,"Level":3,"IsDeleted":false
      }
    }
  ]
}
```

Iteration is expanded in the JSON result and all of the iteration data is returned. This is probably more data than you want.  

To return less data, add a ```select``` statement against the iteration as well:

    /WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration($select=Name,IterationPath)

Which returns the following:
```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration,Iteration(Name,IterationPath))","value":[
    {
      "WorkItemId":10000,"WorkItemType":"Task","Title":"Some title","State":"Completed","Iteration":{
        "Name":"Sprint 55","IterationPath":"Fabrikam\\Sprints\\Sprint 55"
      }
    }
  ]
}
```

In OData, you can nest ```expand``` statements. For example, you can write the previous query statement to display the project the iteration is part of:

    /WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($expand=Project)

This results in:
```
{
  "@odata.context":"https://[collection].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems","value":[
    {
      "WorkItemId":10000,"Revision":3,"Watermark":283397,"Title":"Production deployment and testing for Entitlement API v2 and Subscriber database","WorkItemType":"Task","ChangedDate":"2014-07-10T19:29:58.41Z","CreatedDate":"2014-04-19T22:44:58.31Z","State":"Completed","Reason":"Completed","FoundIn":null,"IntegrationBuild":null,"ActivatedDate":null,"Activity":null,"BacklogPriority":null,"BusinessValue":null,"ClosedDate":null,"Discipline":null,"Issue":null,"Priority":2,"Rating":null,"ResolvedDate":null,"ResolvedReason":null,"Risk":null,"Severity":null,"StackRank":null,"TimeCriticality":null,"Triage":null,"ValueArea":null,"CompletedWork":10.0,"DueDate":null,"Effort":null,"FinishDate":null,"OriginalEstimate":20.0,"RemainingWork":null,"Size":null,"StartDate":null,"StoryPoints":null,"TargetDate":null,"Blocked":null,"Committed":null,"Escalate":null,"FoundInEnvironment":null,"HowFound":null,"Probability":null,"RequirementType":null,"RequiresReview":null,"RequiresTest":null,"RootCause":null,"SubjectMatterExpert1":null,"SubjectMatterExpert2":null,"SubjectMatterExpert3":null,"TargetResolveDate":null,"TaskType":null,"UserAcceptanceTest":null,"Count":1,"Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46","Name":"Sprint 55","Number":13021,"IterationPath":"Fabrikam\\Sprints\\Sprint 55","StartDate":"2013-09-23T00:00:00Z","EndDate":"2013-10-11T00:00:00Z","IterationLevel0":"VSOnline","IterationLevel1":"OneVS","IterationLevel2":"Previous Sprints","IterationLevel3":"Sprint 55","IterationLevel4":null,"IterationLevel5":null,"IterationLevel6":null,"IterationLevel7":null,"IterationLevel8":null,"IterationLevel9":null,"IterationLevel10":null,"IterationLevel11":null,"IterationLevel12":null,"IterationLevel13":null,"Level":3,"IsDeleted":false,"Project":{
          "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544","ProjectName":"Fabrikam","IsDeleted":false
        }
      }
    }
  ]
}
```

You can also combine ```expand``` and ```select``` statements. For example, you can change the previous query to only return the Iteration Name and Iteration Path:

    /WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($select=IterationId,IterationPath;$expand=Project)

This results in:
```
{
  "@odata.context":"https://[collection].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems(Iteration(IterationId,IterationPath,Project))","value":[
    {
      "WorkItemId":10000,"Revision":3,"Watermark":283397,"Title":"Production deployment and testing for Entitlement API v2 and Subscriber database","WorkItemType":"Task","ChangedDate":"2014-07-10T19:29:58.41Z","CreatedDate":"2014-04-19T22:44:58.31Z","State":"Completed","Reason":"Completed","FoundIn":null,"IntegrationBuild":null,"ActivatedDate":null,"Activity":null,"BacklogPriority":null,"BusinessValue":null,"ClosedDate":null,"Discipline":null,"Issue":null,"Priority":2,"Rating":null,"ResolvedDate":null,"ResolvedReason":null,"Risk":null,"Severity":null,"StackRank":null,"TimeCriticality":null,"Triage":null,"ValueArea":null,"CompletedWork":10.0,"DueDate":null,"Effort":null,"FinishDate":null,"OriginalEstimate":20.0,"RemainingWork":null,"Size":null,"StartDate":null,"StoryPoints":null,"TargetDate":null,"Blocked":null,"Committed":null,"Escalate":null,"FoundInEnvironment":null,"HowFound":null,"Probability":null,"RequirementType":null,"RequiresReview":null,"RequiresTest":null,"RootCause":null,"SubjectMatterExpert1":null,"SubjectMatterExpert2":null,"SubjectMatterExpert3":null,"TargetResolveDate":null,"TaskType":null,"UserAcceptanceTest":null,"Count":1,"Iteration":{
        "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46","IterationPath":"Fabrikam\\Sprints\\Sprint 55","Project":{
          "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544","ProjectName":"Fabrikam","IsDeleted":false
        }
      }
    }
  ]
}
```

Notice that the result here shows only the IterationId and IterationPath and that the Project is a nested object within the JSON result.  Another key item to note is the URL itself, when using a ```select``` statement and an ```expand``` clause you must use a semi-colon (;) before the ```$expand```. Anything else will result in an error.

###Sort results

You can sort OData results using the ```orderby``` clause. You can apply this clause to any OData query as shown:

    /WorkItems?$filter=WorkItemType eq 'User Story'&$orderby=WorkItemId

You can order by multiple items, but you can only order by columns that are returned. For example, the following entry will result in an error:  

    /WorkItems?$select=WorkItemId,WorkItemType,State&$orderby=Reason



##Related notes  

- [Aggregate data](aggregated-data-analytics.md)
- [OData Version 4.0 Part 2: URL Conventions Plus Errata 02](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)

<a id="canonical-functions"></a>
###Filter or order by canonical functions

You can use the following canonical functions with the ```$filter``` or ```$orderby``` system query options. For more information, see the [Odata specifications](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398116).

| Canonical function | Description |
| ------------------ | ----------- |  
| ```contains``` |  Returns true if the second parameter string value is a substring of the first parameter string value, otherwise it returns false.  |  
| ```endswith``` | Returns true if the first parameter string value ends with the second parameter string value, otherwise it returns false |  
| ```startswith``` |  Returns true if the first parameter string value starts with the second parameter string value, otherwise it returns false |  
| ```length``` | Returns the number of characters in the parameter value |  
| ```indexof``` | Returns the zero-based character position of the first occurrence of the second parameter value in the first parameter value |  
| ```substring``` | Returns a substring of the first parameter string value, starting at the Nth character and finishing at the last character (where N is the second parameter integer value) |  
| ```tolower``` |  Returns the input parameter string value with all uppercase characters converted to lowercase  |  
| ```toupper``` |  Returns  the input parameter string value with all lowercase characters converted to uppercase |  
| ```trim``` |  Returns the input parameter string value with all leading and trailing whitespace characters |  
| ```concat``` | Returns the year component of the Date or DateTimeOffset parameter value |  
| ```year``` |  Returns the year component of the Date or DateTimeOffset parameter value |  
| ```month``` | Returns the month component of the Date or DateTimeOffset parameter value |  
| ```day``` |  Returns the day component of the Date or DateTimeOffset parameter value |  
| ```second``` | Returns the second component (without the fractional part) of the DateTimeOffset or TimeOfDay parameter value |  
| ```fractionalseconds``` |  Returns the fractional seconds component of the DateTimeOffset or TimeOfDay parameter value as a non-negative decimal value less than 1 |  
| ```date``` | Returns the date part of the DateTimeOffset parameter value |  
| ```time``` |  Returns the time part of the DateTimeOffset parameter value |  
| ```totaloffsetminutes``` | Returns  the signed number of minutes in the time zone offset part of the DateTimeOffset parameter value |  
| ```now``` |  Returns the current point in time (date and time with time zone) as a DateTimeOffset value |  
| ``` maxdatetime``` | Returns  the latest possible point in time as a DateTimeOffset value |  
| ```mindatetime``` |  Returns the earliest possible point in time as a DateTimeOffset value |  
