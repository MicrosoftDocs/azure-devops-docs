---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Room Users | REST API Reference for Team Foundation Server
description: Work with users in team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6452FEDA-E518-4983-B37B-C50BB17E0047
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team room users

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of users

```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/users?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/users?api-version=1.0
```

#### Sample response

```json
{
  "count": 6,
  "value": [
    {
      "roomId": 305,
      "user": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastActivity": "2014-10-27T16:36:02.28Z",
      "joinedDate": "2014-10-27T16:36:02.203Z",
      "isOnline": true
    },
    {
      "roomId": 305,
      "user": {
        "id": "3b5f0c34-4aec-4bf4-8708-1d36f0dbc468",
        "displayName": "Christie Church",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/3b5f0c34-4aec-4bf4-8708-1d36f0dbc468",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=3b5f0c34-4aec-4bf4-8708-1d36f0dbc468"
      },
      "lastActivity": "0001-01-01T00:00:00",
      "joinedDate": "0001-01-01T00:00:00",
      "isOnline": false
    },
    {
      "roomId": 305,
      "user": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastActivity": "0001-01-01T00:00:00",
      "joinedDate": "0001-01-01T00:00:00",
      "isOnline": false
    },
    {
      "roomId": 305,
      "user": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastActivity": "0001-01-01T00:00:00",
      "joinedDate": "0001-01-01T00:00:00",
      "isOnline": false
    },
    {
      "roomId": 305,
      "user": {
        "id": "19d9411e-9a34-45bb-b985-d24d9d87c0c9",
        "displayName": "Johnnie McLeod",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=19d9411e-9a34-45bb-b985-d24d9d87c0c9"
      },
      "lastActivity": "0001-01-01T00:00:00",
      "joinedDate": "0001-01-01T00:00:00",
      "isOnline": false
    },
    {
      "roomId": 305,
      "user": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "lastActivity": "0001-01-01T00:00:00",
      "joinedDate": "0001-01-01T00:00:00",
      "isOnline": false
    }
  ]
}
```


## Get a user
```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/users/{userId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| userId      | int    | ID of the user.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/users/d6245f20-2af8-44f4-9451-8107cb2767db?api-version=1.0
```

#### Sample response

```json
{
  "roomId": 305,
  "user": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "lastActivity": "2014-10-27T16:36:02.28Z",
  "joinedDate": "2014-10-27T16:36:02.203Z",
  "isOnline": true
}
```
   

## Join a room
<a name="joinaroom" />

```no-highlight
PUT https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/users/{userId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	userId: {int}
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| userId      | int    | ID of the user.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/users/d6245f20-2af8-44f4-9451-8107cb2767db?api-version=1.0
```
```json
{
  "userId": "d6245f20-2af8-44f4-9451-8107cb2767db"
}
```


## Leave a room

```no-highlight
DELETE https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/users/{userId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| userId      | int    | ID of the user.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/users/d6245f20-2af8-44f4-9451-8107cb2767db?api-version=1.0
```

