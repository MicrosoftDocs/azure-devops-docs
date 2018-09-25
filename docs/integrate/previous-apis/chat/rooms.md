---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Team Rooms | REST API Reference for Team Foundation Server
description: Work with team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6E6370DD-6E61-4F56-BCAD-8A66CC45965A
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team rooms
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

[!code-REST [GET__chat_rooms_json](./_data/rooms/GET__chat_rooms.json)]

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

[!code-REST [GET__chat_rooms__roomId__json](./_data/rooms/GET__chat_rooms__roomId_.json)]

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

[!code-REST [POST__chat_rooms_json](./_data/rooms/POST__chat_rooms.json)]

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

[!code-REST [PATCH__chat_rooms__roomId__json](./_data/rooms/PATCH__chat_rooms__roomId_.json)]

## Delete room ##

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

 
[!code-REST [DELETE__chat_rooms__roomId__json](./_data/rooms/DELETE__chat_rooms__roomId_.json)]
