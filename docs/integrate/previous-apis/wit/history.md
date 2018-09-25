---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Discussion History (deprecated) | REST API Reference for Team Foundation Server
description: Work with work item discussion history programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 572C9AF7-91A1-41F9-80A5-905AD9C39464
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item discussion history (deprecated)
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

[!code-REST [GET__wit_workitems__taskId__history_json](./_data/history/GET__wit_workitems__taskId__history.json)]

### A page at a time

[!code-REST [GET__wit_workitems__taskId__history__skip-1__top-2_json](./_data/history/GET__wit_workitems__taskId__history__skip-1__top-2.json)]

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

[!code-REST [GET__wit_workitems__taskId__history_2_json](./_data/history/GET__wit_workitems__taskId__history_2.json)]

