---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Room Overview | REST API Reference for Team Foundation Server
description: Work with team rooms, users, and messages programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 8A15216E-A1DC-423A-939C-981C95648307
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team rooms (chat)

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]



You can create [team rooms](./rooms.md) where [users](./users.md) can post [messages](./messages.md) to one another.

![Team room resources](./_img/team-room-resources.png)

* [Messages](./messages.md)
* [Rooms](./rooms.md)
* [Users](./users.md)

## Common tasks

### Get a list of team rooms

Get the [team rooms](./rooms.md) in a VSTS organization.

### Create a room

[Create](./rooms.md#createaroom) a room. Get the ID of the room from the response so that you can use it later.

### Join a room

1. Get the ID of the user.
2. [Add the authenticated user](./users.md#joinaroom) to the room.

### Post a message to the room

[Create a message](./messages.md#createamessage) in the team room.

