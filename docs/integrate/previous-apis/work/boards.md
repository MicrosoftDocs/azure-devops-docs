---
title: Kanban boards | REST API Reference for Team Foundation Server
description: Work with Kanban boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: B7F1D3A8-8D3D-4538-945A-9D45EB81885D
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Kanban boards
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of boards
<a name="getalistofboards" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By project default team

[!code-REST [GET__work_boards__defaultTeam_json](./_data/GET__work_boards__defaultTeam.json)]

### By team

[!code-REST [GET__work_boards_json](./_data/GET__work_boards_.json)]

## Get a board

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| board	| string  || Name or ID of the specific board.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By ID

[!code-REST [GET__work_boards__boardId_json](./_data/GET__work_boards__boardId_.json)]

### By name

[!code-REST [GET__work_boards__boardName_json](./_data/GET__work_boards__boardName_.json)]
