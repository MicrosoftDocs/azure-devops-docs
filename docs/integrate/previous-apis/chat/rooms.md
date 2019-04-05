---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Rooms | REST API Reference for Team Foundation Server
description: Work with team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6E6370DD-6E61-4F56-BCAD-8A66CC45965A
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team rooms

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of rooms

```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms?api-version=1.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": 305,
      "name": "Fabrikam-Fiber-Git Team Room",
      "description": "",
      "lastActivity": "2014-10-07T22:17:31.723Z",
      "createdBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      },
      "createdDate": "2014-01-24T19:19:00.21Z",
      "hasAdminPermissions": true,
      "hasReadWritePermissions": false
    },
    {
      "id": 306,
      "name": "Fabrikam-Fiber-TFVC Team Room",
      "description": "",
      "lastActivity": "2014-01-24T19:20:37.41Z",
      "createdBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      },
      "createdDate": "2014-01-24T19:20:37.41Z",
      "hasAdminPermissions": true,
      "hasReadWritePermissions": false
    },
    {
      "id": 307,
      "name": "Quality assurance Room",
      "description": "",
      "lastActivity": "2014-01-27T23:03:55.663Z",
      "createdBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      },
      "createdDate": "2014-01-27T23:03:55.663Z",
      "hasAdminPermissions": true,
      "hasReadWritePermissions": false
    },
    {
      "id": 2686,
      "name": "TestGit Team Room",
      "description": "",
      "lastActivity": "2014-05-15T14:00:36.443Z",
      "createdBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      },
      "createdDate": "2014-05-15T14:00:36.443Z",
      "hasAdminPermissions": true,
      "hasReadWritePermissions": false
    }
  ]
}
```


## Get a room

```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| roomId    | int    | ID of the room to update.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/12797?api-version=1.0
```

#### Sample response

```json
{
  "id": 12797,
  "name": "renamedRoom",
  "description": "updated room description",
  "lastActivity": "2014-10-27T16:32:36.553Z",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-10-27T16:32:36.553Z",
  "hasAdminPermissions": true,
  "hasReadWritePermissions": true
}
```


## Create a room
<a name="createaroom" />
```no-highlight
POST https://{instance}/DefaultCollection/_apis/chat/rooms?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  name: {name},
  description: {description}
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| Name        | string | Name of the new room.
| Description | string | Description of the new room.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/chat/rooms?api-version=1.0
```
```json
{
  "name": "newCreatedRoom",
  "description": "used for API doc generation"
}
```

#### Sample response

```json
{
  "id": 12797,
  "name": "newCreatedRoom",
  "description": "used for API doc generation",
  "lastActivity": "2014-10-27T16:32:36.553Z",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-10-27T16:32:36.553Z",
  "hasAdminPermissions": true,
  "hasReadWritePermissions": true
}
```


## Update room

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  [name: {name},]
  [description: {description}]
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the room to update.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| Name        | string | New name of the room.
| Description | string | Updated description of the room.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/chat/rooms/12797?api-version=1.0
```
```json
{
  "name": "renamedRoom",
  "description": "updated room description"
}
```

#### Sample response

```json
{
  "id": 12797,
  "name": "renamedRoom",
  "description": "updated room description",
  "lastActivity": "2014-10-27T16:32:36.553Z",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-10-27T16:32:36.553Z",
  "hasAdminPermissions": true,
  "hasReadWritePermissions": true
}
```


## Delete room

```no-highlight
DELETE https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the room to update.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

 
#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/chat/rooms/12797?api-version=1.0
```

