---
title: Rows for Kanban Boards | REST API Reference for Team Foundation Server
description: Work with Kanban board rows programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 01F3FEF0-DCCA-4CB0-B723-A546CE0935B0
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Rows on a Kanban board
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get rows on a board
<a name="getrowsonaboard" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/rows?api-version={api-version}
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

[!code-REST [GET__work_boards__boardId__rows_json](./_data/GET__work_boards__boardId__rows.json)]

### By name

[!code-REST [GET__work_boards__boardName__rows_json](./_data/GET__work_boards__boardName__rows.json)]

## Update rows on a board
<a name="updaterowsonaboard" />
Allow user to update or delete an existing board row, or add a new row to the board.

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/rows?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |   | TFS server name ({server:port}).
| project   | string  |  | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| board	| string  |  | Name or ID of the specific board.
| Query
| api-version | string  |  |[Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| rows.id	| string	| null | ID of a row, required for update. For default row, this value must be an empty GUID("00000000-0000-0000-0000-000000000000"). The new rows have ID of null. (Optional for non-default rows.)
| rows.name	| string	|  | Name of a row.


Assumption:
1. Row order is determined by the order of element presenting in post data.
2. If a row ID is null, we treat it as a new row.
3. Any existing row that is NOT on the post data will be deleted.

For each row, all applicable parameters are required even if no change. If any of the field values are not valid, the board will not be updated.

When update fails, it will return bad request. Following exceptions can be thrown depending on the errors:
1. DeletedBoardRowIsNotEmptyException
2. BoardValidationFailureException
3. BoardValidatorInvalidCharException
4. BoardValidatorRowNameLengthInvalidException
5. BoardValidatorDuplicateRowNameException
6. BoardValidatorRowCountInvalidException
7. BoardUpdateFailureException
8. NoPermissionUpdateBoardRowsException

Status code: 400
```json
{
	"$id":"1",
	"innerException":null,
	"message":"Error on row Expedite: Another row has the same name. Row names must be unique.",
	"typeName":"Microsoft.TeamFoundation.Agile.Common.Exceptions.BoardValidatorDuplicateRowNameException, Microsoft.TeamFoundation.Agile.Common, Version=14.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
	"typeKey":"BoardValidatorDuplicateRowNameException",
	"errorCode":0,
	"eventId":3000
}
```

[!code-REST [PUT__work_boards__boardName__rows_json](./_data/PUT__work_boards__boardName__rows.json)]

## Get available board rows

```no-highlight
GET https://{instance}/defaultcollection/[{project}/]_apis/work/boardrows/?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.

### For a project

[!code-REST [GET__work_boards__boardId__columns_json](./_data/boardSuggestedValues/project/GET__work_boardRows_.json)]

### For a collection

[!code-REST [GET__work_boards__boardName__columns_json](./_data/boardSuggestedValues/collection/GET__work_boardRows_.json)]
