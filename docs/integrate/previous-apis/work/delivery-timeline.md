---
title: Delivery Timeline | REST API Reference for Team Foundation Server
description: Work with delivery timeline plans programmatically using the REST APIs for Team Foundation Server. 
ms.contentid: D7B8FEC4-75F9-432E-8140-091C535C514B
---

# Delivery timeline

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

> **Prerequisite**: You need to install [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans) extension to be able to access these endpoints.

## Get a list of workitems included in the given timeline window

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}/deliverytimeline?revision={revision}&startDate={startDate}&endDate={endDate}&api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  | | ID of the specific plan.
| Query
| revision  | string  | Latest revision of the plan | Current revision of the plan
| startDate | string  | 2 weeks prior to the current date | Start date of the snapshot for which the data is to be requested. The date is expected to be in the UTC format (YYYY-MM-DD). Only the date component is respected, the time component will be ignored.
| endDate   | string  | 7 weeks after the current date | End date of the snapshot for which the data is to be requested. The date is expected to be in the UTC format (YYYY-MM-DD). Only the date component is respected, the time component will be ignored.
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/b19a4a8e-5d28-4398-8eaf-64e2d6dffd0d/deliverytimeline?revision=8&startDate=2016-10-03T00%3A00%3A00.000Z&endDate=2016-12-05T00%3A00%3A00.000Z&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "startDate": "2016-10-03T00:00:00+00:00",
  "endDate": "2016-12-05T00:00:00+00:00",
  "teams": [
    {
      "id": "8bd35c5e-30bb-4834-a0c4-d576ce1b8df7",
      "name": "Fabrikam-Fiber-Git Team",
      "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "orderByField": "Microsoft.VSTS.Common.BacklogPriority",
      "teamFieldName": "System.AreaPath",
      "teamFieldDefaultValue": "Fabrikam-Fiber-Git",
      "teamFieldValues": [
        {
          "value": "Fabrikam-Fiber-Git",
          "includeChildren": true
        }
      ],
      "fieldReferenceNames": [
        "System.Id",
        "System.IterationPath",
        "System.WorkItemType",
        "System.AssignedTo",
        "System.Title",
        "System.State",
        "System.Tags",
        "System.TeamProject",
        "System.Rev",
        "System.AreaPath",
        "Microsoft.VSTS.Common.BacklogPriority"
      ],
      "workItemTypeColors": [
        {
          "workItemTypeName": "Product Backlog Item",
          "primaryColor": "009CCC"
        },
        {
          "workItemTypeName": "Bug",
          "primaryColor": "CC293D"
        }
      ],
      "iterations": [
        {
          "name": "Sprint 1",
          "path": "Fabrikam-Fiber-Git\\Release 2\\Sprint 1",
          "startDate": "2016-11-28T00:00:00Z",
          "finishDate": "2016-12-16T00:00:00Z",
          "workItems": [
            [
              410,
              "Fabrikam-Fiber-Git\\Release 2\\Sprint 1",
              "Product Backlog Item",
              null,
              "Sample product backlog 2",
              "New",
              null,
              "Fabrikam-Fiber-Git",
              4,
              "Fabrikam-Fiber-Git",
              999936756
            ],
            [
              409,
              "Fabrikam-Fiber-Git\\Release 2\\Sprint 1",
              "Product Backlog Item",
              null,
              "Sample product backlog 1",
              "New",
              null,
              "Fabrikam-Fiber-Git",
              3,
              "Fabrikam-Fiber-Git",
              999968378
            ]
          ],
          "partiallyPagedWorkItems": [],
          "status": {}
        }
      ],
      "isExpanded": true,
      "status": {},
      "backlog": {
        "categoryReferenceName": "Microsoft.RequirementCategory",
        "pluralName": "Backlog items",
        "workItemTypes": [
          "Product Backlog Item",
          "Bug"
        ],
        "workItemStates": [
          "New",
          "Approved",
          "Committed",
          "Done"
        ]
      }
    }
  ],
  "childIdToParentIdMap": {},
  "criteriaStatus": {
    "type": "ok"
  },
  "id": "b19a4a8e-5d28-4398-8eaf-64e2d6dffd0d",
  "revision": 1
}
```

