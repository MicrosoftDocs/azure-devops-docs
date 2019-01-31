---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Discussion History (deprecated) | REST API Reference for Team Foundation Server
description: Work with work item discussion history programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 572C9AF7-91A1-41F9-80A5-905AD9C39464
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item discussion history (deprecated)

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

> This resource has been deprecated as of [!INCLUDE [API_version](../_data/version3-preview.md)].
> Please use the [comments](./comments.md) API instead.

[!INCLUDE [API_version](../_data/version.md)]

Discussion history is a list of comments provided by user on a work item.  These are stored as part of [revisions](./revisions.md) but this endpoint is a short-hand way to view the complete discussion of a work item.

[!INCLUDE [GET_STARTED](../..//api/_data/get-started.md)]

## Get a list of all discussion history
<a name="getalistofalldiscussionhistory" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/history?api-version={version}[&$top={int}&$skip={int}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | [VS Team Services account](../../get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](../../get-started/rest/basics.md) ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version| string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | integer | 200     | Number of discussion history entries to return, up to 200.
| $skip     | integer | 0       | Number of discussion history entries to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/history?api-version=1.0
```

#### Sample response

```json
{
  "count": 5,
  "value": [
    {
      "rev": 1,
      "value": "Jim has the most context around this.",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:23.933Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/1"
    },
    {
      "rev": 2,
      "value": "Moving to the right area path",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:24.67Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/2"
    },
    {
      "rev": 3,
      "value": "Johnnie is going to take this work over.",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:26.99Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/3"
    },
    {
      "rev": 4,
      "value": "Adding the necessary spec",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:27.48Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/4"
    },
    {
      "rev": 6,
      "value": "Linking to a blog article for context",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:28.74Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/6"
    }
  ]
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/history?$skip=1&$top=2&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "rev": 2,
      "value": "Moving to the right area path",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:24.67Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/2"
    },
    {
      "rev": 3,
      "value": "Johnnie is going to take this work over.",
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:26.99Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/3"
    }
  ]
}
```


## Get the discussion history of a work item revision

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/history/{revision}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:--------------------------------------
| URL
| instance  | string  | [VS Team Services account](../../get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](../../get-started/rest/basics.md) ({server:port}).
| id        | int     | ID of the work item.
| revision  | int     | Revision of the work item to view discussion history.
| Query
| api-version| string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/history/2?api-version=1.0
```

#### Sample response

```json
{
  "rev": 2,
  "value": "Moving to the right area path",
  "revisedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "revisedDate": "2014-12-29T20:49:24.67Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/history/2"
}
```


