---
title: Work Items | REST API Reference for Team Foundation Server
description: Work with work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 2762B459-BD46-493C-998F-A14EE1DA4C94
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Work items

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

The Work Items API is used to create, update, or delete work items in Team Services and Team Foundation Server. There are multiple different 
work item types (bug, task, etc.) that can be accessed.

#### Common Tasks
This API is often used in combination with other work item tracking APIs for many end-to-end scenarios, check out the 
[work item tracking common tasks](./overview.md#common-tasks) to see popular use cases. 

## C# and .NET Samples

<div name="row">
    <div class ="col-sm-1 col-md-1 col-lg-1" style="padding:10px;">
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:109px;">
            <div class="index-button" style="padding-top:25px; text-align:center">
                <a href="./samples.md#create-bug">
                    <h5>Create a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:20px; text-align:center">
                <a href="./samples.md#migrating-work-items">
                    <h5>Migrating work items</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:25px; text-align:center">
                <a href="./samples.md#update-bug">
                    <h5>Update a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:7px; text-align:center">
                <a href="./samples.md#add-comment-to-bug">
                    <h5>Add a comment to a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:7px; text-align:center">
                <a href="./samples.md#change-bug-to-a-user-story">
                    <h5>Change a bug to a user story</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-1 col-lg-1" style="padding:10px;">
    </div>
</div>

<div style="clear:both"></div>

For all of the work items samples, check out the [samples page](./samples.md).

##	Get a list of work items

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems?api-version={version}&ids={string}[&fields={string}&asOf={DateTime}&$expand={enum{relations}&ErrorPolicy={string}]
```

| Parameter         | Type 	                                                            | Default | Notes
|:------------------|:------------------------------------------------------------------|:--------|:-------------------------------------------------------------------
| URL
| instance          | string                                                            |         | TFS server name ({server:port}).
| Query
| api-version       | string                                                            |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| ids				| string                                                            |         | A comma-separated list of up to 200 IDs of the work items to get.
| fields	    	| string                                                            |         | A comma-separated list of up to 100 fields to get with each work item.<br/>If not specified, all fields with values are returned. Calculated fields such as Attached File Count must be specifically queried for using this parameter.
| asOf				| [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) |         | Gets the work items as they existed at this time.
| $expand			| enum { all, relations, none }										| none    | Gets work item relationships (work item links, hyperlinks, file attachments, etc.).
| ErrorPolicy		| string { throw, omit }                                            | throw   | Determines if the call will throw an error when encountering a work item (default behavior) that doesn't exist or simply omit it.

###	By IDs
<a name="byids" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems?ids=297,299,300&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 297,
      "rev": 1,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "New",
        "System.Reason": "New backlog item",
        "System.CreatedDate": "2014-12-29T20:49:20.77Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:20.77Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "Customer can sign in using their Microsoft Account",
        "Microsoft.VSTS.Scheduling.Effort": 8,
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
        "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297"
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
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    {
      "id": 300,
      "rev": 1,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.CreatedDate": "2014-12-29T20:49:22.103Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:22.103Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.Title": "Unit Testing for MSA login",
        "Microsoft.VSTS.Scheduling.RemainingWork": 3,
        "System.Description": "We need to ensure we have coverage to prevent regressions"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300"
    }
  ]
}
```


### Sample code

* [C# (GetWorkItemsByIDs method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L20)


###	With specific fields
<a name="withspecificfields" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems?ids=297,299,300&fields=System.Id,System.Title,System.WorkItemType,Microsoft.VSTS.Scheduling.RemainingWork&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 297,
      "rev": 1,
      "fields": {
        "System.Id": 297,
        "System.WorkItemType": "Product Backlog Item",
        "System.Title": "Customer can sign in using their Microsoft Account"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297"
    },
    {
      "id": 299,
      "rev": 7,
      "fields": {
        "System.Id": 299,
        "System.WorkItemType": "Task",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    {
      "id": 300,
      "rev": 1,
      "fields": {
        "System.Id": 300,
        "System.WorkItemType": "Task",
        "System.Title": "Unit Testing for MSA login",
        "Microsoft.VSTS.Scheduling.RemainingWork": 3
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300"
    }
  ]
}
```


#### Sample code

* [C# (GetWorkItemsWithSpecificFields method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L38)


###	As of a date
<a name="asofdate" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems?ids=297,299,300&fields=System.Id,System.Title,System.WorkItemType,Microsoft.VSTS.Scheduling.RemainingWork&asOf=2014-12-29T20:49:22.103Z&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 297,
      "rev": 1,
      "fields": {
        "System.Id": 297,
        "System.WorkItemType": "Product Backlog Item",
        "System.Title": "Customer can sign in using their Microsoft Account"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297"
    },
    {
      "id": 299,
      "rev": 1,
      "fields": {
        "System.Id": 299,
        "System.WorkItemType": "Task",
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    {
      "id": 300,
      "rev": 1,
      "fields": {
        "System.Id": 300,
        "System.WorkItemType": "Task",
        "System.Title": "Unit Testing for MSA login",
        "Microsoft.VSTS.Scheduling.RemainingWork": 3
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300"
    }
  ]
}
```


#### Sample code

* [C# (GetWorkItemsAsOfDate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L67)


###  With links and attachments
<a name="withlinksandattachments" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems?ids=297,299,300&$expand=all&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 297,
      "rev": 1,
      "fields": {
        "System.Id": 297,
        "System.AreaId": 3570,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.NodeName": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.AreaLevel1": "Fabrikam-Fiber-Git",
        "System.Rev": 1,
        "System.AuthorizedDate": "2014-12-29T20:49:20.77Z",
        "System.RevisedDate": "9999-01-01T00:00:00Z",
        "System.IterationId": 3570,
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.IterationLevel1": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "New",
        "System.Reason": "New backlog item",
        "System.CreatedDate": "2014-12-29T20:49:20.77Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:20.77Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.AuthorizedAs": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.PersonId": 77331,
        "System.Watermark": 607,
        "System.Title": "Customer can sign in using their Microsoft Account",
        "Microsoft.VSTS.Scheduling.Effort": 8,
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_System.ExtensionMarker": true,
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
        "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
      },
      "relations": [
        {
          "rel": "System.LinkTypes.Hierarchy-Forward",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299",
          "attributes": {
            "isLocked": false,
            "comment": "decomposition of work"
          }
        },
        {
          "rel": "System.LinkTypes.Hierarchy-Forward",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
          "attributes": {
            "isLocked": false
          }
        },
        {
          "rel": "AttachedFile",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/098a279a-60b9-40a8-868b-b7fd00c0a439",
          "attributes": {
            "authorizedDate": "2014-12-29T20:49:20.77Z",
            "id": 65273,
            "resourceCreatedDate": "2014-12-29T20:49:20.77Z",
            "resourceModifiedDate": "2014-12-29T20:49:20.77Z",
            "revisedDate": "9999-01-01T00:00:00Z",
            "comment": "Spec for the work",
            "name": "Spec.txt"
          }
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297"
        },
        "workItemUpdates": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297/updates"
        },
        "workItemRevisions": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297/revisions"
        },
        "workItemHistory": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297/history"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=297"
        },
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
        },
        "fields": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297"
    },
    {
      "id": 299,
      "rev": 7,
      "fields": {
        "System.Id": 299,
        "System.AreaId": 4486,
        "System.AreaPath": "Fabrikam-Fiber-Git\\Website",
        "System.NodeName": "Website",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.AreaLevel1": "Fabrikam-Fiber-Git",
        "System.AreaLevel2": "Website",
        "System.Rev": 7,
        "System.AuthorizedDate": "2014-12-29T20:49:28.74Z",
        "System.RevisedDate": "9999-01-01T00:00:00Z",
        "System.IterationId": 3570,
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.IterationLevel1": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.AssignedTo": "Johnnie McLeod <fabrikamfiber2@hotmail.com>",
        "System.CreatedDate": "2014-12-29T20:49:21.617Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:28.74Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.AuthorizedAs": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.PersonId": 77331,
        "System.Watermark": 616,
        "System.Title": "JavaScript implementation for Microsoft Account",
        "Microsoft.VSTS.Scheduling.RemainingWork": 4,
        "System.Description": "Follow the code samples from MSDN",
        "System.Tags": "Tag1; Tag2"
      },
      "relations": [
        {
          "rel": "System.LinkTypes.Hierarchy-Reverse",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
          "attributes": {
            "isLocked": false,
            "comment": "decomposition of work"
          }
        },
        {
          "rel": "System.LinkTypes.Related",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
          "attributes": {
            "isLocked": false,
            "comment": "adding another task"
          }
        },
        {
          "rel": "Hyperlink",
          "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx",
          "attributes": {
            "authorizedDate": "2014-12-29T20:49:27.98Z",
            "id": 65275,
            "resourceCreatedDate": "2014-12-29T20:49:27.98Z",
            "resourceModifiedDate": "2014-12-29T20:49:27.98Z",
            "revisedDate": "9999-01-01T00:00:00Z"
          }
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
        },
        "workItemUpdates": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
        },
        "workItemRevisions": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
        },
        "workItemHistory": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
        },
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
        },
        "fields": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    {
      "id": 300,
      "rev": 1,
      "fields": {
        "System.Id": 300,
        "System.AreaId": 3570,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.NodeName": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.AreaLevel1": "Fabrikam-Fiber-Git",
        "System.Rev": 1,
        "System.AuthorizedDate": "2014-12-29T20:49:22.103Z",
        "System.RevisedDate": "9999-01-01T00:00:00Z",
        "System.IterationId": 3570,
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.IterationLevel1": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Task",
        "System.State": "To Do",
        "System.Reason": "New task",
        "System.CreatedDate": "2014-12-29T20:49:22.103Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-12-29T20:49:22.103Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.AuthorizedAs": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.PersonId": 77331,
        "System.Watermark": 610,
        "System.Title": "Unit Testing for MSA login",
        "Microsoft.VSTS.Scheduling.RemainingWork": 3,
        "System.Description": "We need to ensure we have coverage to prevent regressions"
      },
      "relations": [
        {
          "rel": "System.LinkTypes.Hierarchy-Reverse",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
          "attributes": {
            "isLocked": false
          }
        },
        {
          "rel": "System.LinkTypes.Related",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299",
          "attributes": {
            "isLocked": false,
            "comment": "adding another task"
          }
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300"
        },
        "workItemUpdates": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300/updates"
        },
        "workItemRevisions": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300/revisions"
        },
        "workItemHistory": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300/history"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=300"
        },
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
        },
        "fields": {
          "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300"
    }
  ]
}
```


#### Sample code

* [C# (GetWorkItemsWithLinksAndAttachments method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L98)


##	Get a work item
<a name="getaworkitem" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}?api-version={version}[&$expand={enum{relations}]
```

| Parameter         | Type 	                                                            | Default | Notes
|:------------------|:------------------------------------------------------------------|:--------|:-------------------------------------------------------------------
| URL
| instance          | string                                                            |         | TFS server name ({server:port}).
| id				| string                                                            |         | ID of the work item to retrieve.
| Query
| api-version       | string                                                            |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand			| enum { all, relations, none }										| none    | Gets work item relationships (work item links, hyperlinks and file attachments).

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/309?api-version=1.0
```

#### Sample response

```json
{
  "id": 309,
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
    "System.Title": "Customer can sign in using their Microsoft Account",
    "Microsoft.VSTS.Scheduling.Effort": 8,
    "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
    "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=309"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
}
```


#### Sample code

* [C# (GetWorkItemsByID method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L122)

<a name="getaworkitemwithlinksandattachments" />
###  With links and attachments

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/309?$expand=relations&api-version=1.0
```

#### Sample response

```json
{
  "id": 309,
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
    "System.Title": "Customer can sign in using their Microsoft Account",
    "Microsoft.VSTS.Scheduling.Effort": 8,
    "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
    "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/311",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/312",
      "attributes": {
        "isLocked": false
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=309"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
}
```


###  Fully expanded
<a name="fullyexpanded" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/309?$expand=all&api-version=1.0
```

#### Sample response

```json
{
  "id": 309,
  "rev": 1,
  "fields": {
    "System.Id": 309,
    "System.AreaId": 3570,
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.NodeName": "Fabrikam-Fiber-Git",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.AreaLevel1": "Fabrikam-Fiber-Git",
    "System.Rev": 1,
    "System.AuthorizedDate": "2015-01-07T18:13:01.807Z",
    "System.RevisedDate": "9999-01-01T00:00:00Z",
    "System.IterationId": 3570,
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.IterationLevel1": "Fabrikam-Fiber-Git",
    "System.WorkItemType": "Product Backlog Item",
    "System.State": "New",
    "System.Reason": "New backlog item",
    "System.CreatedDate": "2015-01-07T18:13:01.807Z",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.ChangedDate": "2015-01-07T18:13:01.807Z",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.AuthorizedAs": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.PersonId": 77331,
    "System.Watermark": 649,
    "System.Title": "Customer can sign in using their Microsoft Account",
    "Microsoft.VSTS.Scheduling.Effort": 8,
    "WEF_6CB513B6E70E43499D9FC94E5BBFB784_System.ExtensionMarker": true,
    "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
    "System.Description": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/311",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/312",
      "attributes": {
        "isLocked": false
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=309"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/309"
}
```


#### Sample code

* [C# (GetWorkItemFullyExpanded method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L140)


##  Get default values
<a name="getdefaultvalues" />

Get the default values that will be filled in automatically when you create a new work item of a specific type.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workitems/${workItemTypeName}?api-version={version}
```

| Parameter         | Type 		| Notes
|:------------------|:----------|:-------------------------------------------------------------------
| URL
| instance          | string	| TFS server name ({server:port}).
| project			| string	| Name or ID of a [project](../tfs/projects.md) where the work item type is defined.
| workItemTypeName	| string    | Name of the [work item type](./work-item-types.md).
| Query
| api-version       | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workitems/$Task?api-version=1.0
```

#### Sample response

```json
{
  "fields": {
    "System.WorkItemType": "Task",
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.State": "To Do",
    "System.Reason": "New task",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "_links": {
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems"
}
```


#### Sample code

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public void GetDefaultValues()
{
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));

    //use the httpclient
    using (var client = new HttpClient())
    {
        //set our headers
        client.BaseAddress = new Uri("https://accountname.visualstudio.com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        //send the request and content
        HttpResponseMessage response = client.GetAsync("Fabrikam-Fiber-Git/_apis/wit/workitems/$Task?api-version=2.2").Result;

        if (response.IsSuccessStatusCode)
        {
            var result = response.Content.ReadAsStringAsync().Result;
        }
    }
}

```

##	Create a work item
<a name="create-work-item" />

When you create a work item, you can provide values for any of the work item fields.

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/workitems/${workItemTypeName}?api-version={version}
```
```http
Content-Type: application/json-patch+json
```
```json
[
	{
		"op": "add",
		"path": { string }
		"value": { string or int, depending on the field }
	},
	{
		"op": "add",
		"path": "/relations/-",
		"value":
		{
			"rel": { string },
			"url": { string },
			"attributes":
			{
				{ name/value pairs }
			}
		}
	}
]
```

| Parameter         | Type 	                                |  Notes
|:------------------|:--------------------------------------|:-------------------------------------------------------------------
| URL
| instance          | string                                | TFS server name ({server:port}).
| project			| string								| Name or ID of a [project](../tfs/projects.md) where the work item should be created.
| workItemTypeName	| string                                | Name of the [work item type](./work-item-types.md).
| Query
| api-version       | string                                | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body - field
| op				| enum { add, replace, test }           | The operation to perform on the field.<br/>You can use add or replace to set the value of a field when you create a work item.<br/>Use test to verify that the value is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a field, use "/fields/{reference name}".
| value             | string or int, depending on the field | New value to set.
| Body - relation
| op				| enum { add, replace, remove, test }   | The operation to perform on the relation.<br/>Use test to verify that the relation is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a specific relation, use "relations/Id".<br/>For all relations, use "/relations/-".
| value.rel			| string								| Type of the relationship. Examples include, work-item/hierarchy-forward, changeset, or attachment.<br/>Get the list of relations that a work item type supports using [relation types](./relation-types.md).
| value.url			| string								| URL of the item you are relating to the current work item.
| value.attributes	| array of name/value pairs				| Additional attributes of the relationship (e.g. comment, isLocked, etc.)

If any of the new field values or relations are not valid, the work item will not be created.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workitems/$Task?api-version=1.0
```
```json
[
  {
    "op": "add",
    "path": "/fields/System.Title",
    "value": "JavaScript implementation for Microsoft Account"
  }
]
```

#### Sample response

```json
{
  "id": 298,
  "rev": 1,
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.WorkItemType": "Task",
    "System.State": "To Do",
    "System.Reason": "New task",
    "System.CreatedDate": "2014-12-29T20:49:21.21Z",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.ChangedDate": "2014-12-29T20:49:21.21Z",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.Title": "JavaScript implementation for Microsoft Account"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/298"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/298/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/298/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/298/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=298"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/298"
}
```


#### Sample code

* [C# (CreateWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L66)

<a name="withaworkitemlink" />
### With a work item link

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workitems/$Task?api-version=1.0
```
```json
[
  {
    "op": "add",
    "path": "/fields/System.Title",
    "value": "JavaScript implementation for Microsoft Account"
  },
  {
    "op": "add",
    "path": "/fields/Microsoft.VSTS.Scheduling.RemainingWork",
    "value": 4
  },
  {
    "op": "add",
    "path": "/fields/System.Description",
    "value": "Follow the code samples from MSDN"
  },
  {
    "op": "add",
    "path": "/fields/System.History",
    "value": "Jim has the most context around this."
  },
  {
    "op": "add",
    "path": "/relations/-",
    "value": {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "comment": "decomposition of work"
      }
    }
  }
]
```

#### Sample response

```json
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
    "System.History": "Jim has the most context around this."
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
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (CreateAndLinkToWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L198)
* [C# (ByPassRulesOnCreate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L271)

##	Update work items
<a name="updateworkitems" />

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/wit/workitems/{id}?api-version={version}
```
```http
Content-Type: application/json-patch+json
```
```json
[
	{
		"op": "add",
		"path": { string }
		"value": { string or int, depending on the field }
	},
	{
		"op": "add",
		"path": "/relations/-",
		"value":
		{
			"rel": { string },
			"url": { string },
			"attributes":
			{
				{ name/value pairs }
			}
		}
	}
]
```

| Parameter         | Type 	                                |  Notes
|:------------------|:--------------------------------------|:-------------------------------------------------------------------
| URL
| instance          | string                                | TFS server name ({server:port}).
| id				| string                               	| ID of the work item to retrieve.
| Query
| api-version       | string                                | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body - field
| op				| enum { add, replace, remove, test }   | The operation to perform on the field. <br/>You can use add or replace to set the value of a field.<br/>Use remove to clear the value of the field.<br/>Use test to verify that the value is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a field, use "/fields/{reference name}".
| value             | string or int, depending on the field | New value to set.
| Body - relation
| op				| enum { add, replace, remove, test }   | The operation to perform on the relation.<br/>Use test to verify that the relation is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a specific relation, use "relations/Id".<br/>For all relations, use "/relations/-".
| value.rel			| string								| Type of the relationship. Examples include, work-item/hierarchy-forward, changeset, or attachment.<br/>Get the list of relations that a work item type supports using [relation types](./relation-types.md).
| value.url			| string								| URL of the item you are relating to the current work item.
| value.attributes	| array of name/value pairs				| Additional attributes of the relationship (e.g. comment, isLocked, etc.)

If any of the new field values or relations are not valid, or if the work item has been saved by someone else since the revision was retrieved, the work item will not be updated.

### Update a field
<a name="updateafield" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 1
  },
  {
    "op": "add",
    "path": "/fields/System.AreaPath",
    "value": "Fabrikam-Fiber-Git\\Website"
  },
  {
    "op": "add",
    "path": "/fields/System.History",
    "value": "Moving to the right area path"
  }
]
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
    "System.History": "Moving to the right area path"
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
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (ChangeFieldValue method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L316)

### Move work item
<a name="moveworkitem" />

> **API Availability**: Team Services only (not TFS)

In order to move a work item, we need to update 3 fields (System.TeamProject, System.AreaPath and System.IterationPath). The below example shows that a work item was moved to a destination project (Fabrikam-Scrum). 

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/398?api-version=1.0
```
```json
[
  {
    "op": "add",
    "path": "/fields/System.TeamProject",
    "value": "Fabrikam-Scrum"
  },
  {
    "op": "add",
    "path": "/fields/System.AreaPath",
    "value": "Fabrikam-Scrum"
  },
  {
    "op": "add",
    "path": "/fields/System.IterationPath",
    "value": "Fabrikam-Scrum"
  }
]
```

#### Sample response

```json
{
  "id": 398,
  "rev": 2,
  "fields": {
    "System.AreaPath": "Fabrikam-Scrum",
    "System.TeamProject": "Fabrikam-Scrum",
    "System.IterationPath": "Fabrikam-Scrum",
    "System.WorkItemType": "Bug",
    "System.State": "New",
    "System.Reason": "New defect reported",
    "System.CreatedDate": "2016-04-07T16:42:06.55Z",
    "System.CreatedBy": "Chuck Reinhart <fabrikamfiber3@hotmail.com>",
    "System.ChangedDate": "2016-04-07T16:42:07.737Z",
    "System.ChangedBy": "Chuck Reinhart <fabrikamfiber3@hotmail.com>",
    "System.Title": "First bug",
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "Microsoft.VSTS.Common.StateChangeDate": "2016-04-07T16:42:06.55Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.Severity": "3 - Medium",
    "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column": "New",
    "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done": false,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column": "New",
    "WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done": false
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=398"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Bug"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398"
}
```


#### Sample code

* [C# (MoveToAnotherProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L356)


### Change work item type
<a name="changeworkitemtype" />

> **API Availability**: Team Services only (not TFS)

In order to change a work item type, we need to update the System.WorkItemType field as well as any required fields on the target work item type. In the sample request below a Bug work item was converted to a Task.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/398?api-version=1.0
```
```json
[
  {
    "op": "add",
    "path": "/fields/System.WorkItemType",
    "value": "Task"
  },
  {
    "op": "add",
    "path": "/fields/System.State",
    "value": "To Do"
  }
]
```

#### Sample response

```json
{
  "id": 398,
  "rev": 3,
  "fields": {
    "System.AreaPath": "Fabrikam-Scrum",
    "System.TeamProject": "Fabrikam-Scrum",
    "System.IterationPath": "Fabrikam-Scrum",
    "System.WorkItemType": "Task",
    "System.State": "To Do",
    "System.Reason": "New defect reported",
    "System.CreatedDate": "2016-04-07T16:42:06.55Z",
    "System.CreatedBy": "Chuck Reinhart <fabrikamfiber3@hotmail.com>",
    "System.ChangedDate": "2016-04-07T16:42:08.167Z",
    "System.ChangedBy": "Chuck Reinhart <fabrikamfiber3@hotmail.com>",
    "System.Title": "First bug",
    "Microsoft.VSTS.Common.StateChangeDate": "2016-04-07T16:42:08.167Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.Severity": "3 - Medium",
    "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column": "New",
    "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done": false,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column": "New",
    "WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done": false
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=398"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/398"
}
```


#### Sample code

* [C# (ChangeType method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L398)

### Add a tag
<a name="addatag" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 6
  },
  {
    "op": "add",
    "path": "/fields/System.Tags",
    "value": "Tag1; Tag2"
  }
]
```

#### Sample response

```json
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
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "Hyperlink",
      "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx",
      "attributes": {
        "authorizedDate": "2014-12-29T20:49:27.98Z",
        "id": 65275,
        "resourceCreatedDate": "2014-12-29T20:49:27.98Z",
        "resourceModifiedDate": "2014-12-29T20:49:27.98Z",
        "revisedDate": "9999-01-01T00:00:00Z"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (AddTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L429)

### Add a link
<a name="addalink" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 3
  },
  {
    "op": "add",
    "path": "/relations/-",
    "value": {
      "rel": "System.LinkTypes.Dependency-forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "comment": "Making a new link for the dependency"
      }
    }
  }
]
```

#### Sample response

```json
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
    "System.History": "Johnnie is going to take this work over."
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "System.LinkTypes.Dependency-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "Making a new link for the dependency"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (LinkToOtherWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L454)

### Update a link
<a name="updatealink" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 3
  },
  {
    "op": "replace",
    "path": "/relations/2/attributes/comment",
    "value": "Adding traceability to dependencies"
  }
]
```

#### Sample response

```json
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
    "System.History": "Johnnie is going to take this work over."
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "System.LinkTypes.Dependency-Forward",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "Adding traceability to dependencies"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (UpdateLinkComment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L487)

### Remove a link
<a name="removealink" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 3
  },
  {
    "op": "remove",
    "path": "/relations/2"
  }
]
```

#### Sample response

```json
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
    "System.History": "Johnnie is going to take this work over."
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (RemoveLink method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L517)

### Add an attachment
<a name="addanattachment" />

To attach a file to a work item,
[upload the attachment](./attachments.md#uploadanattachment) to the attachment store, then attach it to the work item.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 3
  },
  {
    "op": "add",
    "path": "/fields/System.History",
    "value": "Adding the necessary spec"
  },
  {
    "op": "add",
    "path": "/relations/-",
    "value": {
      "rel": "AttachedFile",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/098a279a-60b9-40a8-868b-b7fd00c0a439?fileName=Spec.txt",
      "attributes": {
        "comment": "Spec for the work"
      }
    }
  }
]
```

#### Sample response

```json
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
    "System.History": "Adding the necessary spec"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "AttachedFile",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/098a279a-60b9-40a8-868b-b7fd00c0a439",
      "attributes": {
        "authorizedDate": "2014-12-29T20:49:26.99Z",
        "id": 65274,
        "resourceCreatedDate": "2014-12-29T20:49:26.99Z",
        "resourceModifiedDate": "2014-12-29T20:49:26.99Z",
        "revisedDate": "9999-01-01T00:00:00Z",
        "comment": "Spec for the work",
        "name": "Spec.txt"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (AddAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L547)

### Remove an attachment
<a name="removeanattachment" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 4
  },
  {
    "op": "remove",
    "path": "/relations/2"
  }
]
```

#### Sample response

```json
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
    "System.Description": "Follow the code samples from MSDN"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (RemoveAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L598)

### Add a hyperlink
<a name="addhyperlink" />

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/299?api-version=1.0
```
```json
[
  {
    "op": "test",
    "path": "/rev",
    "value": 5
  },
  {
    "op": "add",
    "path": "/fields/System.History",
    "value": "Linking to a blog article for context"
  },
  {
    "op": "add",
    "path": "/relations/-",
    "value": {
      "rel": "Hyperlink",
      "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx"
    }
  }
]
```

#### Sample response

```json
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
    "System.History": "Linking to a blog article for context"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "Hyperlink",
      "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx",
      "attributes": {
        "authorizedDate": "2014-12-29T20:49:27.98Z",
        "id": 65275,
        "resourceCreatedDate": "2014-12-29T20:49:27.98Z",
        "resourceModifiedDate": "2014-12-29T20:49:27.98Z",
        "revisedDate": "9999-01-01T00:00:00Z"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=299"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
}
```


#### Sample code

* [C# (UpdateWorkItemAddHyperLink method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L631)

### Make an update bypassing rules
<a name="updatebypassingrules" />

For scenarios, such as migration or synchronization tools, when you want to make changes to a work item that otherwise would be invalid, you may optionally choose to bypass the rules engine on a work item update.  This allows you to modify the work item fields without any restrictions, for example you can assign a work item to a user no longer in the organization.

To modify the System.CreatedBy, System.CreatedDate, System.ChangedBy, or System.ChangedDate fields, you must be a member of the "Project Collection Service Accounts" group.

NOTE: System.CreatedBy and System.CreatedDate can only be modified using bypass rules on work item creation, i.e. the first revision of a work item.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workitems/335?bypassRules=true&api-version=1.0
```
```json
[
  {
    "op": "add",
    "path": "/fields/System.AssignedTo",
    "value": "Invalid Value"
  }
]
```

#### Sample response

```json
{
  "id": 335,
  "rev": 8,
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git\\Web",
    "System.TeamProject": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.WorkItemType": "Task",
    "System.State": "To Do",
    "System.Reason": "New task",
    "System.AssignedTo": "Invalid Value",
    "System.CreatedDate": "2015-03-06T21:34:17.777Z",
    "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.ChangedDate": "2015-03-06T21:34:23.167Z",
    "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "System.Title": "JavaScript implementation for Microsoft Account",
    "Microsoft.VSTS.Scheduling.RemainingWork": 4,
    "System.Description": "Follow the code samples from MSDN",
    "System.Tags": "Tag1; Tag2"
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/333",
      "attributes": {
        "isLocked": false,
        "comment": "decomposition of work"
      }
    },
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/336",
      "attributes": {
        "isLocked": false,
        "comment": "adding another task"
      }
    },
    {
      "rel": "Hyperlink",
      "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx",
      "attributes": {
        "authorizedDate": "2015-03-06T21:34:22.32Z",
        "id": 135231,
        "resourceCreatedDate": "2015-03-06T21:34:22.32Z",
        "resourceModifiedDate": "2015-03-06T21:34:22.32Z",
        "revisedDate": "9999-01-01T00:00:00Z"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/335"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/335/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/335/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/335/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=335"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/335"
}
```


#### Sample code

* [C# (UpdateWorkItemUsingByPassRules method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L711)

## Delete a work item
<a name="deleteaworkitem" />

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workitems/72?api-version=1.0
```


#### Sample code

* [C# (DeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L732)

