---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Service Hook Consumers | REST API Reference for Team Foundation Server
description: Work with service hook consumers programmatically using the REST APIs for Team Foundation Server.
ms.assetid: B05297FC-F542-42FD-ACDA-E9734974ACBC
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook consumers
[!INCLUDE [API_version](../_data/version.md)]

A service hook consumer is the external service targeted by a subscription. Consumers, their supported actions, and the descriptors that define the inputs required for those actions are the primary resources in the Consumer APIs.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of consumers

[!code-REST [GET__hooks_consumers_json](./_data/consumers/GET__hooks_consumers.json)]

## Get a consumer

| Parameter | Type | Required | Notes |
|:----------|:-----|:---------|:------------|
| URL
| consumerId | String | Yes | Identifier of the consumer. |
| Query
| api-version| string |     | [Version](../../concepts/rest-api-versioning.md) of the API to use. |

[!code-REST [GET__hooks_consumers__consumerId__json](./_data/consumers/GET__hooks_consumers__consumerId_.json)]

## Get a list of consumer actions

[!code-REST [GET__hooks_consumers__consumerId__actions_json](./_data/consumers/GET__hooks_consumers__consumerId__actions.json)]

## Get a consumer action

[!code-REST [GET__hooks_consumers__consumerId__actions__consumerActionId__json](./_data/consumers/GET__hooks_consumers__consumerId__actions__consumerActionId_.json)]

