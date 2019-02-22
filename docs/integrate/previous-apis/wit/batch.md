---
title: WIT Batch | REST API Reference for Team Foundation Server
description: Edit or change multiple work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 0f4a6185-6518-4bda-a5b6-2eddf0319afe
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item batch operations

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

This api is designed to be used when multiple calls to create or modify work items should be made in one "batch" call.  For example, if a large number of work items are all being updated at once, or if two work items are being created and linked together. 

This API wraps multiple PATCH calls in one POST call. The body of this POST call contains all the information that would be necessary for each individual PATCH call: method, url, header, and body. 

When making multiple calls in the body of a batch call, you must specify temporary work item IDs so that the resulting work items can be referenced by other calls.  Negative numbers are used for this as seen in [the second example](#createtwoworkitemsandlinkthemtogether).

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Create and edit multiple work items in a single call 

Multiple calls using the [work item apis](work-items.md) can be made simultaneously by wrapping them in a batch call.

```no-highlight
POST https://{instance}/defaultcollection/_apis/wit/$batch 
```

| Parameter | Type		| Notes	
|:----------|:----------|:------------------------------
| URL
| instance  | string	| TFS server name ({server:port}).
| project   | string	| Name or ID of a project.
| Body
| method	| string	| API Verb: PATCH (Currently only create/update requests are supported)
| uri		| string	| The url you would use for the call if it were being made independently. 
| headers	| JSON dictionary | The header you would include in the call if it were being made independently. At a minimum, this must include `"Content-Type": "application/json-patch+json"`.
| body		| JSON		| The JSON body you would include in the call if it were being made independently. 

```http
Content-Type: application/json
```
```json
[
	{
		"method": { string },
		"uri": { string },
		"headers": { "Content-Type": "application/json-patch+json" },
		"body":[{ JSON }]
	},
	{
		"method": { string },
		"uri": { string },
		"headers": { "Content-Type": "application/json-patch+json" },
		"body":[{ JSON }]
	}
]
```

### Create two work items and link them together
<a name="createtwoworkitemsandlinkthemtogether" />

Using the work item apis for [creating a work item](work-items.md#create-work-item) and [a work item link](work-items.md#withaworkitemlink) we can create two new work items and make one the child of the other.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=1.0
```
```json
[
  {
    "method": "PATCH",
    "uri": "/Fabrikam-Fiber-Git/_apis/wit/workItems/$Product Backlog Item?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "add",
        "path": "/fields/System.Title",
        "value": "Customer can sign in using their Microsoft Account"
      },
      {
        "op": "add",
        "path": "/id",
        "value": "-1"
      }
    ]
  },
  {
    "method": "PATCH",
    "uri": "/Fabrikam-Fiber-Git/_apis/wit/workItems/$Task?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "add",
        "path": "/fields/System.Title",
        "value": "JavaScript implementation for Microsoft Account"
      },
      {
        "op": "add",
        "path": "/id",
        "value": "-2"
      },
      {
        "op": "add",
        "path": "/relations/-",
        "value": {
          "rel": "System.LinkTypes.Hierarchy-Reverse",
          "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workItems/-1"
        }
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
      "body": "{\"id\":283,\"rev\":1,\"fields\":{\"System.AreaPath\":\"Fabrikam-Fiber-Git\",\"System.TeamProject\":\"Fabrikam-Fiber-Git\",\"System.IterationPath\":\"Fabrikam-Fiber-Git\",\"System.WorkItemType\":\"Product Backlog Item\",\"System.State\":\"New\",\"System.Reason\":\"New backlog item\",\"System.CreatedDate\":\"2014-12-01T19:10:23.307Z\",\"System.CreatedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.ChangedDate\":\"2014-12-01T19:10:23.307Z\",\"System.ChangedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.Title\":\"Customer can sign in using their Microsoft Account\",\"WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column\":\"New\"},\"relations\":[{\"rel\":\"System.LinkTypes.Hierarchy-Forward\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\",\"attributes\":{\"isLocked\":false}}],\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=283\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\"}"
    },
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":284,\"rev\":1,\"fields\":{\"System.AreaPath\":\"Fabrikam-Fiber-Git\",\"System.TeamProject\":\"Fabrikam-Fiber-Git\",\"System.IterationPath\":\"Fabrikam-Fiber-Git\",\"System.WorkItemType\":\"Task\",\"System.State\":\"To Do\",\"System.Reason\":\"New task\",\"System.CreatedDate\":\"2014-12-01T19:10:23.307Z\",\"System.CreatedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.ChangedDate\":\"2014-12-01T19:10:23.307Z\",\"System.ChangedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.Title\":\"JavaScript implementation for Microsoft Account\"},\"relations\":[{\"rel\":\"System.LinkTypes.Hierarchy-Reverse\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\",\"attributes\":{\"isLocked\":false}}],\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=284\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\"}"
    }
  ]
}
```


### Edit multiple work items
<a name="editmultipleworkitems" />

Using the Work Item api for [updating a field](work-items.md#updateafield), we can update two work items to change their status to "Removed".

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=1.0
```
```json
[
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/284?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "add",
        "path": "/fields/System.State",
        "value": "Removed"
      }
    ]
  },
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/283?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
      {
        "op": "add",
        "path": "/fields/System.State",
        "value": "Removed"
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
      "body": "{\"id\":284,\"rev\":2,\"fields\":{\"System.AreaPath\":\"Fabrikam-Fiber-Git\",\"System.TeamProject\":\"Fabrikam-Fiber-Git\",\"System.IterationPath\":\"Fabrikam-Fiber-Git\",\"System.WorkItemType\":\"Task\",\"System.State\":\"Removed\",\"System.Reason\":\"Removed from the backlog\",\"System.CreatedDate\":\"2014-12-01T19:10:23.307Z\",\"System.CreatedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.ChangedDate\":\"2014-12-01T19:10:25.283Z\",\"System.ChangedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.Title\":\"JavaScript implementation for Microsoft Account\"},\"relations\":[{\"rel\":\"System.LinkTypes.Hierarchy-Reverse\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\",\"attributes\":{\"isLocked\":false}}],\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=284\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\"}"
    },
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":283,\"rev\":2,\"fields\":{\"System.AreaPath\":\"Fabrikam-Fiber-Git\",\"System.TeamProject\":\"Fabrikam-Fiber-Git\",\"System.IterationPath\":\"Fabrikam-Fiber-Git\",\"System.WorkItemType\":\"Product Backlog Item\",\"System.State\":\"Removed\",\"System.Reason\":\"Removed from the backlog\",\"System.CreatedDate\":\"2014-12-01T19:10:23.307Z\",\"System.CreatedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.ChangedDate\":\"2014-12-01T19:10:25.283Z\",\"System.ChangedBy\":\"Jamal Hartnett <fabrikamfiber4@hotmail.com>\",\"System.Title\":\"Customer can sign in using their Microsoft Account\"},\"relations\":[{\"rel\":\"System.LinkTypes.Hierarchy-Forward\",\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/284\",\"attributes\":{\"isLocked\":false}}],\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=283\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/283\"}"
    }
  ]
}
```


### Moving multiple work items

> **API Availability**: Team Services only (not TFS)
 
Using the Work Item api for [moving a work item](work-items.md#moveworkitem), we can move two work items to project "Fabrikam-Scrum".

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=1.0
```
```json
[
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/399?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
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
  },
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/400?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
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
      "body": "{\"id\":399,\"rev\":2,\"fields\":{\"System.AreaPath\":\"Fabrikam-Scrum\",\"System.TeamProject\":\"Fabrikam-Scrum\",\"System.IterationPath\":\"Fabrikam-Scrum\",\"System.WorkItemType\":\"Bug\",\"System.State\":\"New\",\"System.Reason\":\"New defect reported\",\"System.CreatedDate\":\"2016-04-07T16:42:06.927Z\",\"System.CreatedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.ChangedDate\":\"2016-04-07T16:42:08.617Z\",\"System.ChangedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.Title\":\"Second bug\",\"System.BoardColumn\":\"New\",\"System.BoardColumnDone\":false,\"Microsoft.VSTS.Common.StateChangeDate\":\"2016-04-07T16:42:06.927Z\",\"Microsoft.VSTS.Common.Priority\":2,\"Microsoft.VSTS.Common.Severity\":\"3 - Medium\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column\":\"New\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done\":false,\"Microsoft.VSTS.Common.ValueArea\":\"Business\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column\":\"New\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done\":false},\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=399\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Bug\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399\"}"
    },
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":400,\"rev\":2,\"fields\":{\"System.AreaPath\":\"Fabrikam-Scrum\",\"System.TeamProject\":\"Fabrikam-Scrum\",\"System.IterationPath\":\"Fabrikam-Scrum\",\"System.WorkItemType\":\"Bug\",\"System.State\":\"New\",\"System.Reason\":\"New defect reported\",\"System.CreatedDate\":\"2016-04-07T16:42:07.313Z\",\"System.CreatedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.ChangedDate\":\"2016-04-07T16:42:08.617Z\",\"System.ChangedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.Title\":\"Third bug\",\"System.BoardColumn\":\"New\",\"System.BoardColumnDone\":false,\"Microsoft.VSTS.Common.StateChangeDate\":\"2016-04-07T16:42:07.313Z\",\"Microsoft.VSTS.Common.Priority\":2,\"Microsoft.VSTS.Common.Severity\":\"3 - Medium\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column\":\"New\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done\":false,\"Microsoft.VSTS.Common.ValueArea\":\"Business\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column\":\"New\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done\":false},\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=400\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Bug\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400\"}"
    }
  ]
}
```



### Change work item type for multiple work items

> **API Availability**: Team Services only (not TFS)

Using the Work Item api for [changing a work item type](work-items.md#changeworkitemtype), we can update two work items to change their work item type to "Task".

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/$batch?api-version=1.0
```
```json
[
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/399?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
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
  },
  {
    "method": "PATCH",
    "uri": "/_apis/wit/workItems/400?api-version=1.0",
    "headers": {
      "Content-Type": "application/json-patch+json"
    },
    "body": [
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
      "body": "{\"id\":399,\"rev\":3,\"fields\":{\"System.AreaPath\":\"Fabrikam-Scrum\",\"System.TeamProject\":\"Fabrikam-Scrum\",\"System.IterationPath\":\"Fabrikam-Scrum\",\"System.WorkItemType\":\"Task\",\"System.State\":\"To Do\",\"System.Reason\":\"New defect reported\",\"System.CreatedDate\":\"2016-04-07T16:42:06.927Z\",\"System.CreatedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.ChangedDate\":\"2016-04-07T16:42:09.087Z\",\"System.ChangedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.Title\":\"Second bug\",\"Microsoft.VSTS.Common.StateChangeDate\":\"2016-04-07T16:42:09.087Z\",\"Microsoft.VSTS.Common.Priority\":2,\"Microsoft.VSTS.Common.Severity\":\"3 - Medium\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column\":\"New\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done\":false,\"Microsoft.VSTS.Common.ValueArea\":\"Business\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column\":\"New\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done\":false},\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=399\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Task\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/399\"}"
    },
    {
      "code": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": "{\"id\":400,\"rev\":3,\"fields\":{\"System.AreaPath\":\"Fabrikam-Scrum\",\"System.TeamProject\":\"Fabrikam-Scrum\",\"System.IterationPath\":\"Fabrikam-Scrum\",\"System.WorkItemType\":\"Task\",\"System.State\":\"To Do\",\"System.Reason\":\"New defect reported\",\"System.CreatedDate\":\"2016-04-07T16:42:07.313Z\",\"System.CreatedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.ChangedDate\":\"2016-04-07T16:42:09.087Z\",\"System.ChangedBy\":\"Chuck Reinhart <fabrikamfiber3@hotmail.com>\",\"System.Title\":\"Third bug\",\"Microsoft.VSTS.Common.StateChangeDate\":\"2016-04-07T16:42:09.087Z\",\"Microsoft.VSTS.Common.Priority\":2,\"Microsoft.VSTS.Common.Severity\":\"3 - Medium\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column\":\"New\",\"WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done\":false,\"Microsoft.VSTS.Common.ValueArea\":\"Business\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column\":\"New\",\"WEF_F571AABFDCE945628B5E816FF5294898_Kanban.Column.Done\":false},\"_links\":{\"self\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400\"},\"workItemUpdates\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/updates\"},\"workItemRevisions\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/revisions\"},\"workItemHistory\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400/history\"},\"html\":{\"href\":\"https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=400\"},\"workItemType\":{\"href\":\"https://mytfsserver/DefaultCollection/b5c43ab0-20bb-44df-9690-7d3ea77c31cc/_apis/wit/workItemTypes/Task\"},\"fields\":{\"href\":\"https://mytfsserver/DefaultCollection/_apis/wit/fields\"}},\"url\":\"https://mytfsserver/DefaultCollection/_apis/wit/workItems/400\"}"
    }
  ]
}
```





