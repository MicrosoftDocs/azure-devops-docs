---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Service Hook Publishers | REST API Reference for Team Foundation Server
description: Work with service hook publishers programmatically using the REST APIs for Team Foundation Server.
ms.assetid: F61EDE31-0F8D-4C4E-AE03-B4480C51C5FD
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook publishers
[!INCLUDE [API_version](../_data/version.md)]

A publisher is a service that publishes events to service hooks. For example, Team Foundation Server is a publisher which sends code, build, work item, and other events.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of publishers
<a name="getalistofpublishers" />

[!code-REST [GET__hooks_publishers_json](./_data/publishers/GET__hooks_publishers.json)]

## Get supported events

[!code-REST [GET__hooks_publishers__publisherId__eventTypes_json](./_data/publishers/GET__hooks_publishers__publisherId__eventTypes.json)]


