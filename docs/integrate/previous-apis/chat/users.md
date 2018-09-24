---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Team Room Users | REST API Reference for Team Foundation Server
description: Work with users in team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6452FEDA-E518-4983-B37B-C50BB17E0047
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team room users
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

[!code-REST [GET__chat_rooms__roomId__users_json](./_data/users/GET__chat_rooms__roomId__users.json)]

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

[!code-REST [GET__chat_rooms__roomId__users__userId__json](./_data/users/GET__chat_rooms__roomId__users__userId_.json)]   

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

[!code-REST [PUT__chat_rooms__roomId__users__userId__json](./_data/users/PUT__chat_rooms__roomId__users__userId_.json)]

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

[!code-REST [DELETE__chat_rooms__roomId__users__userId__json](./_data/users/DELETE__chat_rooms__roomId__users__userId_.json)]
