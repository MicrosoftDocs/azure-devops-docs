---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Sessions| REST API Reference for Team Foundation Server
description: Work with test sessions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 98502210-26d4-4b47-9d42-087c8e62782f
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test sessions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test sessions

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/test/session?api-version={version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name of a project.
| team	    | string  | Project's default team name| Name of a team within the project.
| version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/Fabrikam-Fiber-TFVC%20Team/_apis/test/session?api-version=1.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 10,
      "title": "Session - 6/30/2016, 3:41:41 PM",
      "startDate": "2016-06-30T10:11:41.357Z",
      "endDate": "2016-06-30T10:13:15.253Z",
      "revision": 2,
      "source": "xtWeb",
      "state": "completed",
      "owner": {
        "id": "6225fa20-adf2-42dc-851e-168c0d05a628",
        "displayName": "prabin"
      },
      "propertyBag": {
        "bag": {
          "AssociatedWorkItem": "[{\"id\":10,\"type\":\"Task\"},{\"id\":7,\"type\":\"Bug\"},{\"id\":8,\"type\":\"Task\"},{\"id\":9,\"type\":\"Test Case\"}]",
          "ExploredWorkItem": "[{\"startTime\":\"2016-06-30T10:13:04.393Z\",\"endTime\":\"2016-06-30T10:13:15.19Z\",\"id\":2,\"type\":\"Test Case\"}]"
        }
      }
    },
    {
      "id": 11,
      "title": "Session - 6/30/2016, 3:43:16 PM",
      "startDate": "2016-06-30T10:13:16.317Z",
      "endDate": "2016-06-30T10:13:33.297Z",
      "revision": 2,
      "source": "xtWeb",
      "state": "completed",
      "owner": {
        "id": "6225fa20-adf2-42dc-851e-168c0d05a628",
        "displayName": "prabin"
      },
      "propertyBag": {
        "bag": {
          "AssociatedWorkItem": "[{\"id\":11,\"type\":\"Test Case\"}]",
          "ExploredWorkItem": "[{\"startTime\":\"2016-06-30T10:13:29.957Z\",\"endTime\":\"2016-06-30T10:13:33.283Z\",\"id\":3,\"type\":\"Test Case\"}]"
        }
      }
    }
  ]
}
```



## Create a test session

```no-highlight
POST https://{instance}/DefaultCollection/{project}/{team}/_apis/test/session?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
    "Title": { string },
    "Area" : {
              "Name": { string }
             }
}


```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name of a project.
| team	    | string  | Project's default team name | Name of a team within the project.
| version   | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| Title     | string  | | Name of the session.
| Area.Name | string  | | Area path under which session needs to be created.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/Fabrikam-Fiber-TFVC%20Team/_apis/test/session?api-version=1.0-preview
```
```json
{
  "Title": "Sample TestSession",
  "Area": {
    "Name": "Fabrikam-Fiber-TFVC"
  }
}
```

#### Sample response

```json
{
  "id": 6,
  "title": "Sample TestSession",
  "project": {
    "id": "373c7a6d-2c84-42a2-8959-5bc5702876d5",
    "name": "agile"
  },
  "lastUpdatedBy": {
    "id": "6225fa20-adf2-42dc-851e-168c0d05a628",
    "displayName": "prabin"
  },
  "area": {
    "id": "43711",
    "name": "Agile"
  },
  "revision": 1,
  "state": "inProgress",
  "owner": {
    "id": "6225fa20-adf2-42dc-851e-168c0d05a628",
    "displayName": "prabin"
  },
  "propertyBag": {
    "bag": {}
  }
}
```



## Update a test session

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/test/session?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
   "Title"    : { string },
   "Area"    : {
                  "Name": { string }
                }
   "Id"       : { int },
   "Comment"  : { string },
   "State"    : { enum { NotStarted, InProgress, Paused, Completed } },
  
   "Revision" : { int },

   "PropertyBag": 
            
      { 
         "Bag" : 
                 {  "ExploredWorkItem"   : "[{  \"Id\":\"{ int }\", \"Type\": \"{ string }\", \"StartTime\":\"{ DateTime }\", \"EndTime\": \"{ DateTime }\" }
                                            ]",

                    "AssociatedWorkItem" : "[{ \"Id\":\"{ int }\",\"Type\": \"{ string }\" }
                                            ]"

                 }
 
      }
}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name of a project.
| team	    | string  | Project's default team Name| Name of a team within the project.
| version   | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| Title     | string  | | Name of the test session.
| Area.Name | string  | | Area path under which session needs to be created.
| Id	    | int     | | ID of the test session needs to update.
| Comment   | string  | | Comment for the session.
| State	    | enum { NotStarted, InProgress, Paused, Completed } | InProgress |	State of the test session
| Revision  | int     | | Revision of the test session needs to update.
| PropertyBag.Bag.ExploredWorkItem | string[] | | Explored workitem(s) details in the session.
| PropertyBag.Bag.ExploredWorkItem.Id | int | | Id of the explored work item
| PropertyBag.Bag.ExploredWorkItem.Type | string| | Type of the explored work item
| PropertyBag.Bag.ExploredWorkItem.StartTime | DateTime | | Start time of the explored workitem
| PropertyBag.Bag.ExploredWorkItem.EndTime | DateTime | | End time of the explored workitem
| PropertyBag.Bag.AssociatedWorkItem | string[] | | Associated workitem(s) details in the session.
| PropertyBag.Bag.AssociatedWorkItem.Id | int | | Id of the explored work item.
| PropertyBag.Bag.AssociatedWorkItem.Type | string| | Type of the explored work item.


### Name
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/Fabrikam-Fiber-TFVC%20Team/_apis/test/session?api-version=1.0-preview
```
```json
{
  "Title": "Sample TestSession",
  "Area": {
    "Name": "Fabrikam-Fiber-TFVC"
  },
  "id": 4,
  "Comment": "Test session comment",
  "State": 4,
  "Revision": 1
}
```

#### Sample response

```json
{
  "id": 4,
  "project": {
    "id": "373c7a6d-2c84-42a2-8959-5bc5702876d5",
    "name": "agile"
  },
  "lastUpdatedBy": {
    "id": "6225fa20-adf2-42dc-851e-168c0d05a628",
    "displayName": "prabin"
  },
  "revision": 2,
  "state": "completed",
  "comment": "Test session comment",
  "propertyBag": {
    "bag": {}
  }
}
```



