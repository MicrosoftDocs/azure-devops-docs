---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Revisions | REST API Reference for Team Foundation Server
description: Work with work item revisions programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 19599ABC-A720-43DA-9CDA-FA8C91CD687E
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item revisions
[!INCLUDE [API_version](../_data/version.md)]

A revision is a complete work item as it appeared at one point in time. By contrast, [updates](./updates.md) just contain the changes that occurred in a particular revision.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work items revisions

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/revisions?api-version={version}[&$top={int}&$skip={int}&$expand={enum{relations}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version | string |        | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | integer | 200     | Number of revisions to return, up to 200.
| $skip     | integer | 0       | Number of revisions to skip.
| $expand   | enum { all, relations, none }		| none    | Gets work item relationships (work item links, hyperlinks and file attachments).

[!code-REST [GET__wit_workitems__taskId__revisions_json](./_data/revisions/GET__wit_workitems__taskId__revisions.json)]

#### Sample code

* [C# (GetListofWorkItemRevisions method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L19)

### A page at a time

[!code-REST [GET__wit_workitems__taskId__revisions__skip-1__top-2_json](./_data/revisions/GET__wit_workitems__taskId__revisions__skip-1__top-2.json)]

#### Sample code

* [C# (GetListofWorkItemRevisionsPaged method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L48)

## Get a work item revision

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/revisions/{revision}?api-version={version}[&$expand={enum{relations}]
```

| Parameter | Type    | Notes	
|:----------|:--------|:--------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the work item.
| revision  | int     | Revision of the work item.<br/>When a work item is created, the revision is 0, and each time it's updated, the revision is incremented.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand	| enum { all, relations, none }	| Gets work item relationships (work item links, hyperlinks and file attachments).

[!code-REST [GET__wit_workitems__taskId__revisions_2_json](./_data/revisions/GET__wit_workitems__taskId__revisions_2.json)]

#### Sample code

* [C# (GetWorkItemRevision method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RevisionsSample.cs#L78)

###  With links and attachments

[!code-REST [GET__wit_workitems__taskId__revisions_2__expand-all_json](./_data/revisions/GET__wit_workitems__taskId__revisions_2__expand-all.json)]

