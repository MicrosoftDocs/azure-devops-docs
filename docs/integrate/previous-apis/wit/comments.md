---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Comments | REST API Reference for Team Foundation Server
description: Work with work item comments programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: EF2796AF-2400-4396-ABFC-1903BA1581CC
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item comments
[!INCLUDE [API_version](../_data/version3-preview.md)]

Every work item comment is associated with a single [revision](./revisions.md). This endpoint provides a way to interact with one or more comments for a given work item.

[!INCLUDE [GET_STARTED](../../api/_data/get-started.md)]

## Get a single comment

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/comments/{revision}?api-version={version}
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | [VS Team Services account](../../get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](../../get-started/rest/basics.md) ({server:port}).
| id        | int     |         | ID of the work item.
| revision  | int     |         | Revision number of the comment.
| Query
| api-version| string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workitems__taskId__comments_1_json](./_data/comments/GET__wit_workitems__taskId__comments_1.json)]

#### Sample code

* [C# (GetSingleWorkItemComment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/CommentsSample.cs#L13)

## Get a page of comments

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/comments?api-version={version}[&fromRevision={int}&$top={int}&order={order}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |         | [VS Team Services account](../../get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](../../get-started/rest/basics.md) ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version   | string             |       | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| fromRevision  | integer            | 1     | Starting revision ID to fetch comments from.
| $top          | integer            | 200   | Number of comments to fetch.
| order         | enum { asc, desc}  | asc   | Revision number sort order.

[!code-REST [GET__wit_workitems__taskId__comments_2_json](./_data/comments/GET__wit_workitems__taskId__comments_2.json)]

#### Sample code

* [C# (GetPageOfWorkItemComments method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/CommentsSample.cs#L30)

