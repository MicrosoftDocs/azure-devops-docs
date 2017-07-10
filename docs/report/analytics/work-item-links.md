---
title: Linked work item queries | Team Services  
description: How to query for linked work items using the Analytics service for Visual Studio Team Services (VSTS)  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: BF30FE4E-0370-4C9B-A660-51207D816F8B
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2016
---

#Query for linked work items 

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

Querying work items across links is similar to any other operation across related entities in OData, but
because of the different link types there can be some added complexities.

There are two ways to query links - the first is using the hierarchichal navigation capabilities provided
by Children and Parent.

## Parent to child queries

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,State&$expand=Children($select=WorkItemId,Title,State)&$filter=WorkItemId eq [ID #]
```

This query is querying the work items, and expanding the children (and work items linked to the work item being filtered with a parent/child
relationships). It filters the query so only one root work item is returned. The query result looks like this:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,State,Children,Children(WorkItemId,Title,State))","value":[
    {
      "WorkItemId":103,"Title":"Feature Y","State":"New","Children":[
        {
          "WorkItemId":48,"Title":"Story 15","State":"Resolved"
        },{
          "WorkItemId":50,"Title":"Story 17","State":"New"
        },{
          "WorkItemId":55,"Title":"Story 22","State":"New"
        }
      ]
    }
  ]
}
```

However, as you might be wondering - a hierarchy can have multiple leves - how do I get all of them?
Modify the query above so that it looks like this:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,State&$expand=Children($select=WorkItemId,Title,State;$levels=max)&$filter=WorkItemId eq 103
```

There is only one change in this query - **;$levels=max** in the children clause. This will cause the entire hieararchy to
be returned (**max** actually equates to $levels=5 in this case). This means that you can control how many levels of data are
returned. The results of this query look like the following:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,State,Children,Children(WorkItemId,Title,State,Children,Children(WorkItemId,Title,State)))","value":[
    {
      "WorkItemId":103,"Title":"Feature Y","State":"New","Children":[
        {
          "WorkItemId":48,"Title":"Story 15","State":"Resolved","Children":[
            {
              "WorkItemId":104,"Title":"Task A","State":"New"
            }
          ]
        },{
          "WorkItemId":50,"Title":"Story 17","State":"New","Children":[
            
          ]
        },{
          "WorkItemId":55,"Title":"Story 22","State":"New","Children":[
            {
              "WorkItemId":105,"Title":"Task B","State":"New"
            }
          ]
        }
      ]
    }
  ]
}

```

Notice that two of the stories now have child tasks being shown.

**Note** that $levels only works for recursive relationships and not flat or directed work item links.**

##Child to parent queries

Modify the previous query to this:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,State&$expand=Parent($select=WorkItemId,Title,State;$levels=max)&$filter=WorkItemId eq 105
```

See the difference? Change **Children** to **Parent** and replace the ID with the ID of a task. The results are as follows:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,State,Parent,Parent(WorkItemId,Title,State,Parent,Parent(WorkItemId,Title,State)))","value":[
    {
      "WorkItemId":105,"Title":"Task B","State":"New","Parent":{
        "WorkItemId":55,"Title":"Story 22","State":"New","Parent":{
          "WorkItemId":103,"Title":"Feature Y","State":"New"
        }
      }
    }
  ]
}
```

##Non-hierarchical link query

The Parent/Child hierarchy is one way to bring back information. The analytics serivce also provides the ability to return
directed links and to mix and match the data that is returned using the **Links** navigation property.

##Get link info query 

This query will return all of the links (not work items on the other end of those links) for a work item:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links
```

This results in the following:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links)","value":[
    {
      "WorkItemId":103,"Title":"Feature Y","WorkItemType":"Feature","State":"New","Links":[
        {
          "SourceWorkItemId":103,"TargetWorkItemId":48,"CreatedDate":"2016-01-14T16:30:56.287Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":50,"CreatedDate":"2016-01-14T16:30:50.277Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":55,"CreatedDate":"2016-01-14T16:30:53.867Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":112,"CreatedDate":"2016-03-03T17:17:46.023Z","DeletedDate":null,"Comment":"","LinkTypeId":1,"LinkTypeReferenceName":"System.LinkTypes.Related-Forward","LinkTypeName":"Related","LinkTypeIsAcyclic":false,"LinkTypeIsDirectional":false
        }
      ]
    }
  ]
}
```

This is probably not exactly what you need or wanted, but it's a start that can be built upon. In order to get the work items on the
other end of those links, you can expand the links one more level by doing the following:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($expand=TargetWorkItem($select=WorkItemId,Title,State))
```

By expanding the Links on the TargetWorkItem navigation property you end up with this result:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links,Links(TargetWorkItem(WorkItemId,Title,State)))","value":[
    {
      "WorkItemId":103,"Title":"Feature Y","WorkItemType":"Feature","State":"New","Links":[
        {
          "SourceWorkItemId":103,"TargetWorkItemId":48,"CreatedDate":"2016-01-14T16:30:56.287Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true,"TargetWorkItem":{
            "WorkItemId":48,"Title":"Story 15","State":"Resolved"
          }
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":50,"CreatedDate":"2016-01-14T16:30:50.277Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true,"TargetWorkItem":{
            "WorkItemId":50,"Title":"Story 17","State":"Active"
          }
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":55,"CreatedDate":"2016-01-14T16:30:53.867Z","DeletedDate":null,"Comment":"","LinkTypeId":2,"LinkTypeReferenceName":"System.LinkTypes.Hierarchy-Forward","LinkTypeName":"Child","LinkTypeIsAcyclic":true,"LinkTypeIsDirectional":true,"TargetWorkItem":{
            "WorkItemId":55,"Title":"Story 22","State":"New"
          }
        },{
          "SourceWorkItemId":103,"TargetWorkItemId":112,"CreatedDate":"2016-03-03T17:17:46.023Z","DeletedDate":null,"Comment":"","LinkTypeId":1,"LinkTypeReferenceName":"System.LinkTypes.Related-Forward","LinkTypeName":"Related","LinkTypeIsAcyclic":false,"LinkTypeIsDirectional":false,"TargetWorkItem":{
            "WorkItemId":112,"Title":"Some issue","State":"Active"
          }
        }
      ]
    }
  ]
}
```

Next, is the ability to query only on specific links. To do this, modify the above query as follows:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$select=WorkItemId,Title,WorkItemType,State&$filter=WorkItemId%20eq%20103&$expand=Links($filter=LinkTypeName eq 'Related';$expand=TargetWorkItem($select=WorkItemId,Title,State))
```

This query returns only the work items linked with the **Related** link type as shown here:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/$metadata#WorkItems(WorkItemId,Title,WorkItemType,State,Links,Links(TargetWorkItem(WorkItemId,Title,State)))","value":[
    {
      "WorkItemId":103,"Title":"Feature Y","WorkItemType":"Feature","State":"New","Links":[
        {
          "SourceWorkItemId":103,"TargetWorkItemId":112,"CreatedDate":"2016-03-03T17:17:46.023Z","DeletedDate":null,"Comment":"","LinkTypeId":1,"LinkTypeReferenceName":"System.LinkTypes.Related-Forward","LinkTypeName":"Related","LinkTypeIsAcyclic":false,"LinkTypeIsDirectional":false,"TargetWorkItem":{
            "WorkItemId":112,"Title":"Some issue","State":"Active"
          }
        }
      ]
    }
  ]
}
```