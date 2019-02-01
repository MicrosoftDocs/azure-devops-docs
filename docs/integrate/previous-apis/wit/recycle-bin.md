---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Recycle Bin | REST API Reference for Team Foundation Server
description: Work with deleted work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: A4633743-4644-421E-9B4F-3C906F9D4D42
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Recycle bin

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

The recycle bin contains all work items that have been deleted.  They can be restored or permanently destroyed.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of ids for all deleted items in the recycle bin
<a name="getalistofdeleteditemsintherecyclebin" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}_apis/wit/recycleBin?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/recyclebin?api-version=3.0-preview
```

#### Sample response

```json
[
  {
    "id": "92",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/92"
  },
  {
    "id": "93",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/93"
  },
  {
    "id": "102",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/102"
  }
]
```


#### Sample code

* [C# (GetDeleteWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L15)

##	Get a deleted item in the recycle bin

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/recyclebin/{id}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/recyclebin/72?api-version=1.0
```

#### Sample response

```json
{
  "id": "72",
  "type": "WorkItem",
  "Name": "72:First Workitem",
  "Project": "Fabrikam-Fiber-Git",
  "DeletedDate": "2015-01-07T18:13:01.807Z",
  "DeletedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/72?api-version=1.0",
  "resource": {
    "id": 72,
    "rev": 1,
    "fields": {
      "System.AreaPath": "Fabrikam-Fiber-Git",
      "System.TeamProject": "Fabrikam-Fiber-Git",
      "System.IterationPath": "Fabrikam-Fiber-Git",
      "System.WorkItemType": "Product Backlog Item",
      "System.State": "New",
      "System.Reason": "New backlog item",
      "System.CreatedDate": "2015-01-07T18:13:01.807Z",
      "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
      "System.ChangedDate": "2015-01-07T18:13:01.807Z",
      "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
      "System.Title": "First Workitem",
      "Microsoft.VSTS.Scheduling.Effort": 8,
      "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
      "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
    },
    "_links": {
      "self": {
        "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/72"
      },
      "workItemUpdates": {
        "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/72/updates"
      },
      "workItemRevisions": {
        "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/72/revisions"
      },
      "workItemHistory": {
        "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/72/history"
      },
      "html": {
        "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=72"
      },
      "workItemType": {
        "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
      },
      "fields": {
        "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/72"
  }
}
```


#### Sample code

* [C# (GetDeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L28)

##	Get multiple deleted items in the recycle bin

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/recyclebin?ids={ids}&api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| ids       | string  | A comma-separated list of up to 200 IDs of the deleted work items to get.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/recyclebin?ids=92,93,102&api-version=3.0-preview
```

#### Sample response

```json
[
  {
    "id": "92",
    "code": 200,
    "type": "Bug",
    "name": "Bug 92",
    "project": "My Project",
    "deletedDate": "1/31/2017 9:21:14 PM",
    "deletedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/92"
  },
  {
    "id": "93",
    "code": 200,
    "type": "User Story",
    "name": "User Story 93",
    "project": "My Project",
    "deletedDate": "1/31/2017 9:31:00 PM",
    "deletedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/93"
  },
  {
    "id": "102",
    "code": 200,
    "type": "Bug",
    "name": "Bug 102",
    "project": "My Project",
    "deletedDate": "12/30/2016 8:25:15 PM",
    "deletedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/recycleBin/102"
  }
]
```



#### Sample code

* [C# (GetMultipleDeletedWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L41)

## Restore a work item
<a name="restoreaworkitem" />

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/wit/recyclebin/{id}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| IsDeleted | boolean | Value of the IsDeleted field (should be set to false for restoring work items.



#### Sample code

* [C# (RestoreWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L53)

## Restore multiple work items

The [batch apis](batch.md) can be leveraged to restore multiple work items at once.

```no-highlight
POST https://{instance}/DefaultCollection/_apis/wit/$batch
```

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=3.0-preview
```
```json
[
  {
    "method": "PATCH",
    "uri": "/_apis/wit/recyclebin/403?api-version=3.0-preview",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "replace",
        "path": "/IsDeleted",
        "value": "false"
      }
    ]
  },
  {
    "method": "PATCH",
    "uri": "/_apis/wit/recyclebin/404?api-version=3.0-preview",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "replace",
        "path": "/IsDeleted",
        "value": "false"
      }
    ]
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":403,\"code\":200,\"type\":\"Bug\",\"name\":\"Test bug to be deleted and then restored\",\"project\":\"Fabrikam-Fiber-Git\",\"deletedDate\":\"1/12/2017 1:18:19 AM\",\"deletedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/403\"}"
    },
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":404,\"code\":200,\"type\":\"Bug\",\"name\":\"Second work item to be restored\",\"project\":\"Fabrikam-Fiber-Git\",\"deletedDate\":\"1/12/2017 1:18:19 AM\",\"deletedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/404\"}"
    }
  ]
}
```


#### Sample code

* [C# (RestoreMultipleWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L70)

## Permanently delete a work item

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/wit/recycleBin/{id}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/wit/recyclebin/403?api-version=3.0-preview
```


#### Sample code

* [C# (PermanentlyDeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L90)

## Permanently delete multiple work items

The [batch apis](batch.md) can be leveraged to restore multiple work items at once.

```no-highlight
POST https://{instance}/DefaultCollection/_apis/wit/$batch
```

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=3.0-preview
```
```json
[
  {
    "method": "DELETE",
    "uri": "/_apis/wit/recyclebin/405?api-version=3.0-preview",
    "headers": {
      "Content-Type": "application/json-patch+json"
    }
  },
  {
    "method": "DELETE",
    "uri": "/_apis/wit/recyclebin/406?api-version=3.0-preview",
    "headers": {
      "Content-Type": "application/json-patch+json"
    }
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "code": 204
    },
    {
      "code": 204
    }
  ]
}
```


#### Sample code

* [C# (PermanentlyDeleteMultipleWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L101)
