---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Sessions| REST API Reference for Team Foundation Server
description: Work with test sessions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 98502210-26d4-4b47-9d42-087c8e62782f
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Test sessions
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


[!code-REST [GET_testmanagement_testsession_json](./_data/sessions/GET__test_session.json)]


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

[!code-REST [POST_testmanagement_testsession_json](./_data/sessions/POST__test_session.json)]


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
[!code-REST [PATCH_testmanagement_testsession_update_json](./_data/sessions/PATCH__test_session.json)]


