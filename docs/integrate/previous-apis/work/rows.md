---
title: Rows for Kanban Boards | REST API Reference for Team Foundation Server
description: Work with Kanban board rows programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 01F3FEF0-DCCA-4CB0-B723-A546CE0935B0
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Rows on a Kanban board

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/rows?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null
    },
    {
      "id": "6dc43426-d087-4047-b0b7-44c03afed8df",
      "name": "Expedite"
    },
    {
      "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
      "name": "Live Site"
    }
  ]
}
```


### By name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/Backlog%20items/rows?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null
    },
    {
      "id": "6dc43426-d087-4047-b0b7-44c03afed8df",
      "name": "Expedite"
    },
    {
      "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
      "name": "Live Site"
    }
  ]
}
```


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

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/Backlog%20items/rows?api-version=2.0-preview
```
```json
[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null
  },
  {
    "name": "New Expedite"
  },
  {
    "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
    "name": "Live Site"
  }
]
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null
    },
    {
      "id": "4ca9a913-9cf5-4c19-9935-f0e7dc347379",
      "name": "New Expedite"
    },
    {
      "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
      "name": "Live Site"
    }
  ]
}
```


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

#### Sample request

```
GET mytfsserver/defaultcollection/fabrikam/_apis/work/boardRows/?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "name": "Default"
    },
    {
      "name": "Expedite"
    }
  ]
}
```


### For a collection

#### Sample request

```
GET mytfsserver/defaultcollection/_apis/work/boardRows/?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "name": "Blocked"
    },
    {
      "name": "Default"
    },
    {
      "name": "Expedite"
    }
  ]
}
```

