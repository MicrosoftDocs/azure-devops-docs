---
title: Kanban boards | REST API Reference for Team Foundation Server
description: Work with Kanban boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: B7F1D3A8-8D3D-4538-945A-9D45EB81885D
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Kanban boards

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/_apis/work/boards/?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "41688c28-a3fc-4811-977d-247a33f18a00",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00",
      "name": "Backlog items"
    },
    {
      "id": "eab834bb-a382-4527-90ea-af1624ccae72",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/eab834bb-a382-4527-90ea-af1624ccae72",
      "name": "Epics"
    },
    {
      "id": "4e8ec49c-40eb-466a-bba9-eb82eb43ab86",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/4e8ec49c-40eb-466a-bba9-eb82eb43ab86",
      "name": "Features"
    }
  ]
}
```


### By team

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "41688c28-a3fc-4811-977d-247a33f18a00",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00",
      "name": "Backlog items"
    },
    {
      "id": "eab834bb-a382-4527-90ea-af1624ccae72",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/eab834bb-a382-4527-90ea-af1624ccae72",
      "name": "Epics"
    },
    {
      "id": "4e8ec49c-40eb-466a-bba9-eb82eb43ab86",
      "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/4e8ec49c-40eb-466a-bba9-eb82eb43ab86",
      "name": "Features"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00?api-version=2.0
```

#### Sample response

```json
{
  "id": "41688c28-a3fc-4811-977d-247a33f18a00",
  "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00",
  "name": "Backlog items",
  "revision": 0,
  "columns": [
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
  ],
  "rows": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null
    },
    {
      "id": "5282c473-3829-47c5-8fa3-0149052900fe",
      "name": "New Expedite"
    },
    {
      "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
      "name": "Live Site"
    }
  ],
  "isValid": true,
  "allowedMappings": {
    "Incoming": {
      "Bug": [
        "New"
      ],
      "Product Backlog Item": [
        "New"
      ]
    },
    "InProgress": {
      "Bug": [
        "Committed",
        "Approved",
        "New"
      ],
      "Product Backlog Item": [
        "Approved",
        "Committed",
        "New"
      ]
    },
    "Outgoing": {
      "Bug": [
        "Done"
      ],
      "Product Backlog Item": [
        "Done"
      ]
    }
  },
  "canEdit": true,
  "fields": {
    "columnField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column"
    },
    "rowField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Lane",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Lane"
    },
    "doneField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done"
    }
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams/185d185a-33c3-4196-845d-96c46d6a505b"
    },
    "charts": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/charts"
    },
    "columns": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/columns"
    },
    "rows": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/rows"
    }
  }
}
```


### By name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/Fabrikam%20Team/_apis/work/boards/Backlog%20items?api-version=2.0
```

#### Sample response

```json
{
  "id": "41688c28-a3fc-4811-977d-247a33f18a00",
  "url": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00",
  "name": "Backlog items",
  "revision": 0,
  "columns": [
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
  ],
  "rows": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null
    },
    {
      "id": "5282c473-3829-47c5-8fa3-0149052900fe",
      "name": "New Expedite"
    },
    {
      "id": "41c6173f-13a2-42b8-ab75-d96eca02b0bc",
      "name": "Live Site"
    }
  ],
  "isValid": true,
  "allowedMappings": {
    "Incoming": {
      "Bug": [
        "New"
      ],
      "Product Backlog Item": [
        "New"
      ]
    },
    "InProgress": {
      "Bug": [
        "Committed",
        "Approved",
        "New"
      ],
      "Product Backlog Item": [
        "Approved",
        "Committed",
        "New"
      ]
    },
    "Outgoing": {
      "Bug": [
        "Done"
      ],
      "Product Backlog Item": [
        "Done"
      ]
    }
  },
  "canEdit": true,
  "fields": {
    "columnField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column"
    },
    "rowField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Lane",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Lane"
    },
    "doneField": {
      "referenceName": "WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9DCD9224F6E466499435017DB7D2D07_Kanban.Column.Done"
    }
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams/185d185a-33c3-4196-845d-96c46d6a505b"
    },
    "charts": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/charts"
    },
    "columns": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/columns"
    },
    "rows": {
      "href": "https://mytfsserver/DefaultCollection/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/185d185a-33c3-4196-845d-96c46d6a505b/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/rows"
    }
  }
}
```

