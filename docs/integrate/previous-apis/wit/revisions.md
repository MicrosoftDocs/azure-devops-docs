---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Revisions | REST API Reference for Team Foundation Server
description: Work with work item revisions programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 19599ABC-A720-43DA-9CDA-FA8C91CD687E
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item revisions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

A revision is a complete work item as it appeared at one point in time. By contrast, [updates](./updates.md) just contain the changes that occurred in a particular revision.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work items revisions

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/revisions?api-version={version}[&$top={int}&$skip={int}&$expand={enum{relations}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version | string |        | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | integer | 200     | Number of revisions to return, up to 200.
| $skip     | integer | 0       | Number of revisions to skip.
| $expand   | enum { all, relations, none }		| none    | Gets work item relationships (work item links, hyperlinks and file attachments).

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/revisions?api-version=1.0
```

#### Sample response

```json
{
  "count": 7,
  "value": [
    {
      "id": 299,
      "rev": 1,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:21.617Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Jim has the most context around this.",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/1"
    },
    {
      "id": 299,
      "rev": 2,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:23.933Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Moving to the right area path",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
    },
    {
      "id": 299,
      "rev": 3,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:24.67Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Johnnie is going to take this work over.",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/3"
    },
    {
      "id": 299,
      "rev": 4,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:26.99Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Adding the necessary spec",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/4"
    },
    {
      "id": 299,
      "rev": 5,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:27.48Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/5"
    },
    {
      "id": 299,
      "rev": 6,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:27.98Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Linking to a blog article for context",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/6"
    },
    {
      "id": 299,
      "rev": 7,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:28.74Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.Tags": "Tag1; Tag2"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/7"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfWorkItemRevisions method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L19)

### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/revisions?$skip=1&$top=2&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 299,
      "rev": 2,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:23.933Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Moving to the right area path",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
    },
    {
      "id": 299,
      "rev": 3,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:24.67Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.History": "Johnnie is going to take this work over.",
        "System.Tags": ""
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/3"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfWorkItemRevisionsPaged method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L48)

## Get a work item revision

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/revisions/{revision}?api-version={version}[&$expand={enum{relations}]
```

| Parameter | Type    | Notes	
|:----------|:--------|:--------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the work item.
| revision  | int     | Revision of the work item.<br/>When a work item is created, the revision is 0, and each time it's updated, the revision is incremented.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand	| enum { all, relations, none }	| Gets work item relationships (work item links, hyperlinks and file attachments).

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/revisions/2?api-version=1.0
```

#### Sample response

```json
{
  "id": 299,
  "rev": 2,
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.WorkItemType": "Task",
    "System.State": "To Do",
    "System.Reason": "New task",
    "System.CreatedDate": "2014-12-29T20:49:21.617Z",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.ChangedDate": "2014-12-29T20:49:23.933Z",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.Title": "JavaScript implementation for Microsoft Account",
    "Microsoft.VSTS.Scheduling.RemainingWork": 4,
    "System.Description": "Follow the code samples from MSDN",
    "System.History": "Moving to the right area path",
    "System.Tags": ""
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
}
```


#### Sample code

* [C# (GetWorkItemRevision method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L78)

###  With links and attachments

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/revisions/2?$expand=all&api-version=1.0
```

#### Sample response

```json
{
  "id": 299,
  "rev": 2,
  "fields": {
    "System.Id": 299,
    "System.AreaId": 4486,
    "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
    "System.NodeName": "Website",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.AreaLevel1": "Fabrikam-Fiber-Git",
    "System.AreaLevel2": "Website",
    "System.Rev": 2,
    "System.AuthorizedDate": "2014-12-29T20:49:23.933Z",
    "System.RevisedDate": "2014-12-29T20:49:24.67Z",
    "System.IterationId": 3570,
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.IterationLevel1": "Fabrikam-Fiber-Git",
    "System.WorkItemType": "Task",
    "System.State": "To Do",
    "System.Reason": "New task",
    "System.CreatedDate": "2014-12-29T20:49:21.617Z",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.ChangedDate": "2014-12-29T20:49:23.933Z",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.AuthorizedAs": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.PersonId": 77331,
    "System.Watermark": 611,
    "System.Title": "JavaScript implementation for Microsoft Account",
    "Microsoft.VSTS.Scheduling.RemainingWork": 4,
    "System.Description": "Follow the code samples from MSDN",
    "System.History": "Moving to the right area path",
    "System.Tags": ""
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions/2"
}
```


