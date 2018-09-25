---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Updates | REST API Reference for Team Foundation Server
description: Work with updates to work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: B4C07EF4-535A-4479-803D-C181553613EE
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item updates
[!INCLUDE [API_version](../_data/version.md)]

Updates represent changes made to work items over time.

To get the entire work item at a point in time, use [revisions](./revisions.md).

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work items updates

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/updates?api-version={version}[&$top={int}&$skip={int}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | integer | 200     | Number of updates to return, up to 200.
| $skip     | integer | 0       | Number of updates to skip.

[!code-REST [GET__wit_workitems__taskId__updates_json](./_data/updates/GET__wit_workitems__taskId__updates.json)]

#### Sample code

* [C# (GetListofWorkItemUpdates method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L19)

### A page at a time

[!code-REST [GET__wit_workitems__taskId__updates__skip-1__top-2_json](./_data/updates/GET__wit_workitems__taskId__updates__skip-1__top-2.json)]

#### Sample code

* [C# (GetListofWorkItemUpdatesPaged method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L43)

## Get a work item update

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/updates/{revisionId}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the work item.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workitems__taskId__updates_2_json](./_data/updates/GET__wit_workitems__taskId__updates_2.json)]

#### Sample code

* [C# (GetWorkItemUpdate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L68)

If the update included changes to the links or attachments, those are included, too.

[!code-REST [GET__wit_workitems__taskId__updates_4_json](./_data/updates/GET__wit_workitems__taskId__updates_4.json)]