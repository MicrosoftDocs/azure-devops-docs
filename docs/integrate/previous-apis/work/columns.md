---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Columns for Kanban boards | REST API Reference for Team Foundation Server
description: Work with the columns on boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: D2B3A527-C95C-4E56-ADC5-D53FEF16025D
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Columns on a Kanban board

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/columns?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": "12eed5fb-8af3-47bb-9d2a-058fbe7e1196",
      "name": "New",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "New",
        "Bug": "New"
      },
      "columnType": "incoming"
    },
    {
      "id": "5f72391d-af1c-4754-9459-23138eba13e3",
      "name": "Approved",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Approved",
        "Bug": "Approved"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "4ddb0875-547e-4d2c-b36a-4ea9a1f7be41",
      "name": "Committed",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Committed",
        "Bug": "Committed"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "1016c466-6cb6-4bf9-9a19-4e9cc88204df",
      "name": "Done",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "Done",
        "Bug": "Done"
      },
      "columnType": "outgoing"
    }
  ]
}
```


### By name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/Backlog%20items/columns?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": "12eed5fb-8af3-47bb-9d2a-058fbe7e1196",
      "name": "New",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "New",
        "Bug": "New"
      },
      "columnType": "incoming"
    },
    {
      "id": "5f72391d-af1c-4754-9459-23138eba13e3",
      "name": "Approved",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Approved",
        "Bug": "Approved"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "4ddb0875-547e-4d2c-b36a-4ea9a1f7be41",
      "name": "Committed",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Committed",
        "Bug": "Committed"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "1016c466-6cb6-4bf9-9a19-4e9cc88204df",
      "name": "Done",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "Done",
        "Bug": "Done"
      },
      "columnType": "outgoing"
    }
  ]
}
```


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

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/Backlog%20items/columns?api-version=2.0-preview
```
```json
[
  {
    "id": "12eed5fb-8af3-47bb-9d2a-058fbe7e1196",
    "name": "New",
    "itemLimit": 0,
    "stateMappings": {
      "Product Backlog Item": "New",
      "Bug": "New"
    },
    "columnType": "incoming"
  },
  {
    "id": "5f72391d-af1c-4754-9459-23138eba13e3",
    "name": "Approved",
    "itemLimit": 5,
    "stateMappings": {
      "Product Backlog Item": "Approved",
      "Bug": "Approved"
    },
    "isSplit": false,
    "description": "",
    "columnType": "inProgress"
  },
  {
    "id": "4ddb0875-547e-4d2c-b36a-4ea9a1f7be41",
    "name": "Committed",
    "itemLimit": 5,
    "stateMappings": {
      "Product Backlog Item": "Committed",
      "Bug": "Committed"
    },
    "isSplit": false,
    "description": "",
    "columnType": "inProgress"
  },
  {
    "id": "1016c466-6cb6-4bf9-9a19-4e9cc88204df",
    "name": "Done",
    "itemLimit": 0,
    "stateMappings": {
      "Product Backlog Item": "Done",
      "Bug": "Done"
    },
    "columnType": "outgoing"
  }
]
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": "12eed5fb-8af3-47bb-9d2a-058fbe7e1196",
      "name": "New",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "New",
        "Bug": "New"
      },
      "columnType": "incoming"
    },
    {
      "id": "5f72391d-af1c-4754-9459-23138eba13e3",
      "name": "Approved",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Approved",
        "Bug": "Approved"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "4ddb0875-547e-4d2c-b36a-4ea9a1f7be41",
      "name": "Committed",
      "itemLimit": 5,
      "stateMappings": {
        "Product Backlog Item": "Committed",
        "Bug": "Committed"
      },
      "isSplit": false,
      "description": "",
      "columnType": "inProgress"
    },
    {
      "id": "1016c466-6cb6-4bf9-9a19-4e9cc88204df",
      "name": "Done",
      "itemLimit": 0,
      "stateMappings": {
        "Product Backlog Item": "Done",
        "Bug": "Done"
      },
      "columnType": "outgoing"
    }
  ]
}
```


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

#### Sample request

```
GET mytfsserver/defaultcollection/fabrikam/_apis/work/boardColumns/?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "name": "Active"
    },
    {
      "name": "Closed"
    },
    {
      "name": "New"
    },
    {
      "name": "Resolved"
    }
  ]
}
```


### For a collection

#### Sample request

```
GET mytfsserver/defaultcollection/_apis/work/boardColumns/?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 8,
  "value": [
    {
      "name": "Active"
    },
    {
      "name": "Closed"
    },
    {
      "name": "Development"
    },
    {
      "name": "Done"
    },
    {
      "name": "New"
    },
    {
      "name": "Ready"
    },
    {
      "name": "Resolved"
    },
    {
      "name": "Test"
    }
  ]
}
```

