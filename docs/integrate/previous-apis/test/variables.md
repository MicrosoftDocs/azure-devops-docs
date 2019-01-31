---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Variables | REST API Reference for Team Foundation Server
description: Work with test variables programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 0ac1da87-798b-47cf-8426-8fc08d230e7f
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Test variables

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test variables

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/variables?api-version={version}[&$skip={int}&$top={int}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | Version of the API to use.
| $skip				 | int     |         | Number of test variables to skip.
| $top               | int     |         | Number of test variables to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "Operating System",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/1",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Default operating systems",
      "revision": 1,
      "values": [
        "Windows 10",
        "Windows 7",
        "Windows 8",
        "Windows 8.1"
      ]
    },
    {
      "id": 2,
      "name": "Browser",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/2",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Default browsers",
      "revision": 1,
      "values": [
        "Chrome",
        "Edge",
        "FireFox",
        "Internet Explorer 11.0",
        "Safari"
      ]
    },
    {
      "id": 3,
      "name": "Renamed Language",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/3",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Language for testing",
      "revision": 2,
      "values": [
        "English - UK",
        "English - US",
        "Japanese"
      ]
    }
  ],
  "count": 3
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables?$top=2&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "value": [
    {
      "id": 2,
      "name": "Browser",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/2",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Default browsers",
      "revision": 1,
      "values": [
        "Chrome",
        "Edge",
        "FireFox",
        "Internet Explorer 11.0",
        "Safari"
      ]
    },
    {
      "id": 3,
      "name": "Renamed Language",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/3",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Language for testing",
      "revision": 2,
      "values": [
        "English - UK",
        "English - US",
        "Japanese"
      ]
    }
  ],
  "count": 2
}
```


## Get a test variable

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| variableId               | int     | ID of the test variable to get.
| Query
| api-version        | string  | Version of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables/1?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": 1,
  "name": "Operating System",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/1",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "Default operating systems",
  "revision": 1,
  "values": [
    "Windows 10",
    "Windows 7",
    "Windows 8",
    "Windows 8.1"
  ]
}
```


## Create a test variable

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/variables?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {Array of string}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the new test variable.
| description | string   |                             | Description of the new test variable.
| values      | string   |                             | List of values allowed for the test variable.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables?api-version=3.0-preview.1
```
```json
{
  "name": "Language",
  "description": "Language for testing",
  "values": [
    "English - US",
    "English - UK"
  ]
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "Language",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/3",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "Language for testing",
  "revision": 1,
  "values": [
    "English - UK",
    "English - US"
  ]
}
```


## Update a test variable

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {Array of string}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| variableId               | int     |                 | ID of the test variable to update.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the test variable.
| description | string   |                             | Description of the test variable.
| values      | string   |                             | List of values allowed for the test variable.


#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables/3?api-version=3.0-preview.1
```
```json
{
  "values": [
    "English - US",
    "English - UK",
    "Japanese"
  ]
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "Renamed Language",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Variables/3",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "Language for testing",
  "revision": 2,
  "values": [
    "English - UK",
    "English - US",
    "Japanese"
  ]
}
```


## Delete a test variable

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| variableId               | int     | ID of the test variable to delete.
| Query
| api-version        | string  | Version of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/variables/1?api-version=3.0-preview.1
```

