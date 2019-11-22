---
title: Plans | REST API Reference for Team Foundation Server
description: Work with agile plans programmatically using the REST APIs for Team Foundation Server. 
ms.contentid: D7B8FEC4-75F9-432E-8140-091C535C514B
ms.prod: devops
---

# Plans

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

> **Prerequisite**: You need to install [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans) extension to be able to access these endpoints.

## Get a list of plans for the project

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "27af220a-2293-4030-9e95-a7c54dabf947",
      "revision": 1,
      "name": "My delivery timeline view",
      "type": "deliveryTimelineView",
      "createdDate": "2017-01-26T20:57:13.93Z",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "modifiedDate": "2017-01-26T20:57:13.93Z",
      "modifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/27af220a-2293-4030-9e95-a7c54dabf947",
      "userPermissions": 255
    },
    {
      "id": "b19a4a8e-5d28-4398-8eaf-64e2d6dffd0d",
      "revision": 8,
      "name": "Sample delivery timeline view",
      "type": "deliveryTimelineView",
      "createdDate": "2017-01-26T19:39:01.503Z",
      "createdByIdentity": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "modifiedDate": "2017-01-26T20:49:28.833Z",
      "modifiedByIdentity": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/b19a4a8e-5d28-4398-8eaf-64e2d6dffd0d",
      "userPermissions": 255
    }
  ]
}
```


## Get a plan associated with the project

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/27af220a-2293-4030-9e95-a7c54dabf947?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": "27af220a-2293-4030-9e95-a7c54dabf947",
  "revision": 1,
  "name": "My delivery timeline view",
  "type": "deliveryTimelineView",
  "properties": {
    "teamBacklogMappings": [
      {
        "teamId": "88e54d5a-cd6a-4c08-ad90-a55dcd51ff0c",
        "categoryReferenceName": "Microsoft.RequirementCategory"
      }
    ],
    "criteria": [
      {
        "fieldName": "System.Tags",
        "logicalOperator": "AND",
        "operator": "CONTAINS",
        "value": "Accessibility"
      }
    ],
    "cardSettings": {
      "fields": {
        "showAssignedTo": true,
        "assignedToDisplayFormat": "avatarAndFullName",
        "showTags": true,
        "showState": true,
        "coreFields": [
          {
            "referenceName": "System.AssignedTo",
            "displayName": "Assigned To",
            "fieldType": "string",
            "isIdentity": true
          },
          {
            "referenceName": "System.State",
            "displayName": "State",
            "fieldType": "string",
            "isIdentity": false
          },
          {
            "referenceName": "System.Tags",
            "displayName": "Tags",
            "fieldType": "plainText",
            "isIdentity": false
          }
        ]
      }
    }
  },
  "createdDate": "2017-01-26T20:57:13.93Z",
  "createdByIdentity": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett"
  },
  "modifiedDate": "2017-01-26T21:09:17.697Z",
  "modifiedByIdentity": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett"
  },
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/27af220a-2293-4030-9e95-a7c54dabf947",
  "userPermissions": 255
}
```


## Add a plan for the project

```httprequest
POST https://{instance}/DefaultCollection/{project}/_apis/work/plans?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Add a new "Delivery Plan"



## Update an existing plan

```httprequest
PUT https://{instance}/DefaultCollection/{project}/_apis/work/plans{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/27af220a-2293-4030-9e95-a7c54dabf947?api-version=3.0-preview.1
```
```json
{
  "id": "27af220a-2293-4030-9e95-a7c54dabf947",
  "revision": 1,
  "name": "My delivery timeline view",
  "type": "deliveryTimelineView",
  "properties": {
    "teamBacklogMappings": [
      {
        "teamId": "88e54d5a-cd6a-4c08-ad90-a55dcd51ff0c",
        "categoryReferenceName": "Microsoft.RequirementCategory"
      }
    ],
    "criteria": [
      {
        "fieldName": "System.Tags",
        "logicalOperator": "AND",
        "operator": "CONTAINS",
        "value": "Accessibility"
      }
    ],
    "cardSettings": {
      "fields": {
        "showAssignedTo": true,
        "assignedToDisplayFormat": "avatarAndFullName",
        "showTags": true,
        "showState": true,
        "showId": true
      },
      "additionalFields": [
        {
          "referenceName": "System.AreaPath"
        }
      ]
    }
  }
}
```

#### Sample response

```json
{
  "id": "27af220a-2293-4030-9e95-a7c54dabf947",
  "revision": 2,
  "name": "My delivery timeline view",
  "type": "deliveryTimelineView",
  "properties": {
    "teamBacklogMappings": [
      {
        "teamId": "88e54d5a-cd6a-4c08-ad90-a55dcd51ff0c",
        "categoryReferenceName": "Microsoft.RequirementCategory"
      }
    ],
    "criteria": [
      {
        "fieldName": "System.Tags",
        "logicalOperator": "AND",
        "operator": "CONTAINS",
        "value": "Accessibility"
      }
    ],
    "cardSettings": {
      "fields": {
        "showId": true,
        "showAssignedTo": true,
        "assignedToDisplayFormat": "avatarAndFullName",
        "showTags": true,
        "showState": true,
        "additionalFields": [
          {
            "referenceName": "System.AreaPath",
            "displayName": "Area Path",
            "fieldType": "treePath",
            "isIdentity": false
          }
        ],
        "coreFields": [
          {
            "referenceName": "System.Id",
            "displayName": "Id",
            "fieldType": "string",
            "isIdentity": false
          },
          {
            "referenceName": "System.AssignedTo",
            "displayName": "Assigned To",
            "fieldType": "string",
            "isIdentity": true
          },
          {
            "referenceName": "System.State",
            "displayName": "State",
            "fieldType": "string",
            "isIdentity": false
          },
          {
            "referenceName": "System.Tags",
            "displayName": "Tags",
            "fieldType": "plainText",
            "isIdentity": false
          }
        ]
      }
    }
  },
  "createdDate": "2017-01-26T20:57:13.93Z",
  "createdByIdentity": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett"
  },
  "modifiedDate": "2017-01-26T21:09:17.697Z",
  "modifiedByIdentity": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett"
  },
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/27af220a-2293-4030-9e95-a7c54dabf947",
  "userPermissions": 255
}
```


## Delete a plan associated with the project

```httprequest
DELETE https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/work/plans/3a43ac93-a474-416f-b30a-430bed6734dc?api-version=3.0-preview.1
```

