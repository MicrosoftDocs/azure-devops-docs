---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Columns for Kanban boards | REST API Reference for Team Foundation Server
description: Work with the columns on boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: D2B3A527-C95C-4E56-ADC5-D53FEF16025D
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Columns on a Kanban board
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get columns on a board
<a name="getcolumnsonaboard" />

```no-highlight
GET https://{instance}/defaultcollection/{project}/{team}/_apis/work/boards/{board}/columns?api-version={api-version}
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

[!code-REST [GET__work_boards__boardId__columns_json](./_data/GET__work_boards__boardId__columns.json)]

### By name

[!code-REST [GET__work_boards__boardName__columns_json](./_data/GET__work_boards__boardName__columns.json)]

## Update columns on a board
<a name="updatecolumnsonaboard" />
Allow user to update or delete an existing board column, or add a new column to the board.

```no-highlight
PUT https://{instance}/defaultcollection/{project}/{team}/_apis/work/boards/{board}/columns?api-version={api-version}
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
| columns.id	| string	| null | ID of a column, required for update. The new columns have ID of null. (Optional)
| columns.name	| string	|  | Name of a column.
| columns.itemLimit		| int | 0 | For first and last column, this indicates the max number of items we display on the board. For other columns, this indicates the WIP limit.
| columns.stateMappings	| name/value pair |  | The state of the item that should be mapping to the column.
| columns.isSplit		| boolean | false | Indicates if the column should be split, not applicable for first and last columns.
| columns.description	| string  | empty string | Definition of done for a column, not applicable for first and last columns.


Assumption:
1. Column order is determined by the order of element presenting in post data.
2. If a column ID is null, we treat it as a new column.
3. Any existing column that is NOT on the post data will be deleted.

For each column, all applicable parameters are required even if no change. If any of the field values are not valid, the board will not be updated.

When update fails, it will return bad request. Four exceptions can be thrown depending on the errors:
1. DeletedBoardColumnIsNotEmptyException
2. BoardValidationFailureException
3. BoardUpdateFailureException
4. NoPermissionUpdateBoardColumnsException

Status code: 400
```json
{
    "$id": "1",
    "innerException": null,
    "message": "TF401017: You cannot delete column: InProgress.  This column has 1 items in it. You must first move the items to another column, then try deleting the column again..",
    "typeName": "Microsoft.TeamFoundation.Agile.Server.Exceptions.DeletedBoardColumnIsNotEmptyException, MMicrosoft.TeamFoundation.Agile.Server, Version=14.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
    "typeKey": "DeletedBoardColumnIsNotEmptyException",
    "errorCode": 0,
    "eventId": 3000
}
```

[!code-REST [PUT__work_boards__boardName__columns_json](./_data/PUT__work_boards__boardName__columns.json)]

## Get available board columns

```no-highlight
GET https://{instance}/defaultcollection/[{project}/]_apis/work/boardcolumns/?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.

### For a project

[!code-REST [GET__work_boards__boardId__columns_json](./_data/boardSuggestedValues/project/GET__work_boardColumns_.json)]

### For a collection

[!code-REST [GET__work_boards__boardName__columns_json](./_data/boardSuggestedValues/collection/GET__work_boardColumns_.json)]
