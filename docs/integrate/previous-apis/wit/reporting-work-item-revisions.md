---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Reporting Work Item Revisions | REST API Reference for Team Foundation Server
description: Report on work item revisions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 4BE2F320-EF74-11E4-B774-1AF21D5D46B0
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item revisions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-2.md)]

This API provides access to all work item revisions in your project or collection and allows you to build a warehouse.

The response of the API contains a batch of work item revisions ("values"), a URL to the next batch of work item revisions ("nextLink") and a boolean that tells you whether you have read all currently available work item revisions ("isLastBatch").

> The results of this API are impacted when using Move Work Item and/or Change Work Item Type features in conjunction with "project" in the url and/or "types" in the query string.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Project-scoped requests will only return work item revisions from the specified project.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Types-scoped requests will only return work item revisions of the specified type(s).

The workflow for building your warehouse is as follows:
  1. Make a request to the API without providing a continuationToken parameter
  2. Process the work item revisions returned by the API
  3. Persist "nextLink" and check "isLastBatch"
     * If "isLastBatch" is true, pause for a period of time (varies depending on your target latency)
  4. Make the next request using the URL from "nextLink"
  5. Go to step 2

## Sample Projects
[C# Example](https://github.com/sferg-msft/vsts-wit-reporting-example)

## Get a batch of work item revisions

```no-highlight
GET https://{instance}/DefaultCollection/[{project}/]_apis/wit/reporting/workItemRevisions?[continuationToken={string}]&[fields={string}]&[types={string}]&[includeIdentityRef={boolean}]&api-version={string}
```

| Property           | Type     | Description
|:-------------------|:---------|:----------------------------
| URL
| instance           | string   | TFS server name ({server:port}).
| project            | string   | Filters the results to work items in the specified project. The project can be specified by name or ID.
| Query
| continuationToken  | string   | Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of revisions.
| fields             | string   | A comma-separated list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
| types              | string   | A comma-separated list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
| includeIdentityRef | boolean  | Return an identity reference instead of a string value for identity fields.
| includeDeleted     | boolean  | Include deleted work items in the results.
| includeTagRef      | boolean  | Return a tag reference instead of a string value for the System.Tags field.
| includeLatestOnly  | boolean  | Return only the latest revision of work items.  
| startDateTime      | datetime | Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'continuationToken' parameter.
| $expand            | enum { fields, none } | Fields will return all fields.  Cannot be used in conjunction with the 'fields' parameter.
| api-version        | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Example: get the first batch of work item revisions

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?api-version=2.0
```

#### Sample response

```json
{
  "values": [
    {
      "id": 1,
      "rev": 1,
      "fields": {
        "System.Id": 1,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.Rev": 1,
        "System.RevisedDate": "2014-03-18T17:17:05.76Z",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "New",
        "System.Reason": "New backlog item",
        "System.CreatedDate": "2014-03-18T17:16:56.25Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-03-18T17:16:56.25Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.BoardColumn": "New",
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
        "System.Title": "Technician can check on parts orders on Windows Phone"
      }
    },
    {
      "id": 1,
      "rev": 2,
      "fields": {
        "System.Id": 1,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.Rev": 2,
        "System.RevisedDate": "2014-03-18T17:19:02.093Z",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "New",
        "System.Reason": "New backlog item",
        "System.CreatedDate": "2014-03-18T17:16:56.25Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-03-18T17:17:05.76Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.BoardColumn": "New",
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
        "System.Title": "Technician can check on parts orders on Windows Phone",
        "Microsoft.VSTS.Common.BacklogPriority": 1000000000
      }
    },
    {
      "id": 2,
      "rev": 1,
      "fields": {
        "System.Id": 2,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.Rev": 1,
        "System.RevisedDate": "2014-03-18T17:17:06.343Z",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "New",
        "System.Reason": "New backlog item",
        "System.CreatedDate": "2014-03-18T17:17:06.01Z",
        "System.CreatedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.ChangedDate": "2014-03-18T17:17:06.01Z",
        "System.ChangedBy": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "System.BoardColumn": "New",
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "New",
        "System.Title": "Technician can look for closest hardware store from Windows Phone"
      }
    }
  ],
  "nextLink": "https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?continuationToken=3;2;1&api-version=2.0",
  "isLastBatch": true
}
```


### Example: get a batch of work item revisions with identity references

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?includeIdentityRef=true&watermark=794&api-version=2.0
```

#### Sample response

```json
{
  "values": [
    {
      "id": 3,
      "rev": 8,
      "fields": {
        "System.Id": 3,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.Rev": 8,
        "System.RevisedDate": "9999-01-01T00:00:00Z",
        "System.IterationPath": "Fabrikam-Fiber-Git\\Release 1\\Sprint 1",
        "System.WorkItemType": "Product Backlog Item",
        "System.State": "Done",
        "System.Reason": "Work finished",
        "System.CreatedDate": "2014-03-18T17:17:06.857Z",
        "System.CreatedBy": {
          "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
          "uniqueName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.ChangedDate": "2015-06-23T18:25:16.137Z",
        "System.ChangedBy": {
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "uniqueName": "Normal Paulk <fabrikamfiber16@hotmail.com>"
        },
        "System.Title": "Technician can submit invoices on Windows Phone",
        "System.BoardColumn": "Done",
        "Microsoft.VSTS.Common.ClosedDate": "2014-03-18T17:19:02.093Z",
        "Microsoft.VSTS.Common.Priority": 3,
        "Microsoft.VSTS.Common.BacklogPriority": 1000063244,
        "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column": "Done"
      }
    },
    {
      "id": 350,
      "rev": 1,
      "fields": {
        "System.Id": 350,
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.TeamProject": "Fabrikam-Fiber-Git",
        "System.Rev": 1,
        "System.RevisedDate": "9999-01-01T00:00:00Z",
        "System.IterationPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Epic",
        "System.State": "New",
        "System.Reason": "New epic",
        "System.CreatedDate": "2015-08-25T21:54:46.06Z",
        "System.CreatedBy": {
          "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
          "uniqueName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.ChangedDate": "2015-08-25T21:54:46.06Z",
        "System.ChangedBy": {
          "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
          "uniqueName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.Title": "Mobile Experiences",
        "System.BoardColumn": "New",
        "System.BoardColumnDone": false,
        "Microsoft.VSTS.Common.Priority": 2,
        "WEF_DF2CD50AB7B849C795850408B629AB43_Kanban.Column": "New",
        "WEF_DF2CD50AB7B849C795850408B629AB43_Kanban.Column.Done": false
      }
    }
  ],
  "nextLink": "https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?continuationToken=813;350;1&includeIdentityRef=true&api-version=2.0",
  "continuationToken": "813;350;1",
  "isLastBatch": true
}
```


## Get a batch of work item revisions with a POST

This request may be used if your list of fields is large enough that it may run the URL over the length limit

```no-highlight
POST https://{instance}/DefaultCollection/[{project}/]_apis/wit/reporting/workItemRevisions?[continuationToken={string}]&api-version={string}
```
```http
Content-type: Application/json
```
```json
{
	"types": [ string ],
	"fields": [ string ],
	"includeIdentityRef": [ boolean ]
}
```

| Property           | Type             | Description 
|:-------------------|:-----------------|:----------------------------
| URL
| instance           | string           | TFS server name ({server:port}).
| project            | string           | Filters the results to work items in the specified project.
| Query
| continuationToken  | string           | Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of revisions.
| startDateTime      | datetime         | Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'continuationToken' parameter.
| $expand            | enum { fields, none } | Fields will return all fields.  Cannot be used in conjunction with the 'fields' parameter.
| api-version        | string           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| fields             | array of strings | Fields to return in work item revisions. Omit this parameter to get all reportable fields.
| types              | array of strings | Types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
| includeIdentityRef | boolean          | Return an identity reference instead of a string value for identity fields.
| includeDeleted     | boolean  | Include deleted work items in the results.
| includeTagRef      | boolean  | Return a tag reference instead of a string value for the System.Tags field.
| includeLatestOnly  | boolean  | Return only the latest revision of work items.  

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?continuationToken=813;350;1&api-version=2.0
```
```json
{
  "types": [
    "Bug",
    "Task",
    "Product Backlog Item"
  ],
  "fields": [
    "System.WorkItemType",
    "System.Title",
    "System.AreaPath"
  ],
  "includeIdentityRef": true
}
```

#### Sample response

```json
{
  "values": [
    {
      "id": 3,
      "rev": 8,
      "fields": {
        "System.AreaPath": "Fabrikam-Fiber-Git",
        "System.WorkItemType": "Product Backlog Item",
        "System.Title": "Technician can submit invoices on Windows Phone"
      }
    }
  ],
  "nextLink": "https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemRevisions?continuationToken=842;5;3&api-version=2.0",
  "isLastBatch": true
}
```

