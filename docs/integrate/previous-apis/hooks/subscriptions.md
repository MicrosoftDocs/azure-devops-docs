---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Service Hook Subscriptions | REST API Reference for Azure DevOps Services and Team Foundation Server
description: Work with service hook subscriptions programmatically using the REST APIs for Azure DevOps Services and Team Foundation Server.
ms.assetid: 249F8AEB-0E5C-41D5-9B67-C8AC6A22A98D
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook subscriptions
[!INCLUDE [API_version](../_data/version.md)]

A service hooks subscription defines the action to perform on a consumer service when an event occurs in a project. 
For example, a subscription can cause a card to be created on a Trello board when a work item is created. 


[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of subscriptions

[!code-REST [GET__hooks_subscriptions__json](./_data/subscriptions/GET__hooks_subscriptions_.json)]

## Get a subscription

[!code-REST [GET__hooks_subscriptions__subscriptionId__json](./_data/subscriptions/GET__hooks_subscriptions__subscriptionId_.json)]

## Create a subscription
<a name="createasubscription" />

[!code-REST [POST__hooks_subscriptions_json](./_data/subscriptions/POST__hooks_subscriptions.json)]

## Update a subscription

[!code-REST [PUT__hooks_subscriptions__newSubscriptionId__json](./_data/subscriptions/PUT__hooks_subscriptions__newSubscriptionId_.json)]

## Delete a subscription

[!code-REST [DELETE__hooks_subscriptions__newSubscriptionId__json](./_data/subscriptions/DELETE__hooks_subscriptions__newSubscriptionId_.json)]




