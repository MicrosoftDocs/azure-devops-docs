---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Room Messages | REST API Reference for Team Foundation Server
description: Work with messages in team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: FBA6437B-1A08-4762-A91C-B1F7777366E8
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team room messages

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Create a message
<a name="createamessage" />

```no-highlight
POST https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/messages?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  content: {message}
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| content     | string | Message to post to the team room.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages?api-version=1.0
```
```json
{
  "content": "Here's a new message"
}
```

#### Sample response

```json
{
  "id": 118943,
  "content": "Here's a new message",
  "messageType": "normal",
  "postedTime": "2014-10-27T16:42:06.073Z",
  "postedRoomId": 305,
  "postedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  }
}
```


## Get a list of messages

```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/messages?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $filter     | string | OData filter can be applied to the PostedTime field to return messages from a different timespan. The timespan can be up to 30 days. No more than 100,000 messages will be returned. If no filter is applied, messages from the last 24 hours are returned.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages?api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 118940,
      "content": "Normal Paulk entered the room",
      "messageType": "system",
      "postedTime": "2014-10-27T16:36:02.28Z",
      "postedRoomId": 305,
      "postedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      }
    },
    {
      "id": 118942,
      "content": "My second message!",
      "messageType": "normal",
      "postedTime": "2014-10-27T16:41:42.28Z",
      "postedRoomId": 305,
      "postedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    }
  ]
}
```


### In a date range

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages?$filter=PostedTime ge 10/25/2014 and PostedTime lt 10/28/2014&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 118940,
      "content": "Normal Paulk entered the room",
      "messageType": "system",
      "postedTime": "2014-10-27T16:36:02.28Z",
      "postedRoomId": 305,
      "postedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775"
      }
    },
    {
      "id": 118942,
      "content": "My second message!",
      "messageType": "normal",
      "postedTime": "2014-10-27T16:41:42.28Z",
      "postedRoomId": 305,
      "postedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    }
  ]
}
```


## Get a message

```no-highlight
GET https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/messages/{messageId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| messageId   | int    | ID of the message.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages/118943?api-version=1.0
```

#### Sample response

```json
{
  "id": 118943,
  "content": "Updated message",
  "messageType": "normal",
  "postedTime": "2014-10-27T16:42:06.073Z",
  "postedRoomId": 305,
  "postedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  }
}
```


## Update message

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/messages/{messageId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  content: {message}
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| messageId   | int    | ID of the message.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| content     | string | Message to post to the team room.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages/118943?api-version=1.0
```
```json
{
  "content": "Updated message"
}
```

#### Sample response

```json
{
  "id": 118943,
  "content": "Updated message",
  "messageType": "normal",
  "postedTime": "2014-10-27T16:42:06.073Z",
  "postedRoomId": 305,
  "postedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  }
}
```


## Delete message

```no-highlight
DELETE https://{instance}/DefaultCollection/_apis/chat/rooms/{roomId}/messages/{messageId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| roomId      | int    | ID of the team room.
| messageId   | int    | ID of the message.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/chat/rooms/305/messages/118943?api-version=1.0
```


