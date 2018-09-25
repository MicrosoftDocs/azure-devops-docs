---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Team Room Messages | REST API Reference for Team Foundation Server
description: Work with messages in team rooms programmatically using the REST APIs for Team Foundation Server.
ms.assetid: FBA6437B-1A08-4762-A91C-B1F7777366E8
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team room messages
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

[!code-REST [POST__chat_rooms__roomId__messages_json](./_data/messages/POST__chat_rooms__roomId__messages.json)]

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

[!code-REST [GET__chat_rooms__roomId__messages_json](./_data/messages/GET__chat_rooms__roomId__messages.json)]

### In a date range

[!code-REST [GET__chat_rooms__roomId__messages__filter-_filter__json](./_data/messages/GET__chat_rooms__roomId__messages__filter-_filter_.json)]

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

[!code-REST [GET__chat_rooms__roomId__messages__messageId__json](./_data/messages/GET__chat_rooms__roomId__messages__messageId_.json)]

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

[!code-REST [PATCH__chat_rooms__roomId__messages__messageId__json](./_data/messages/PATCH__chat_rooms__roomId__messages__messageId_.json)]

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

[!code-REST [DELETE__chat_rooms__roomId__messages__messageId__json](./_data/messages/DELETE__chat_rooms__roomId__messages__messageId_.json)]

