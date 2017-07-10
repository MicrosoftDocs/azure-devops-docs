---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Service Hook Overview | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with service hooks programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 9AFC70D7-D27B-45EF-A374-4A7283BF1E4C
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Service hooks
[!INCLUDE [API_version](../_data/version.md)]



The service hook [publishers](./publishers.md) define a set of events. You create [subscriptions](./subscriptions.md) based on an event and select the 
service hook [consumer](./consumers.md) and action to take in response to that event from the publisher.

![service hook resources](./_img/service-hook-resources.png)

* [Consumers](./consumers.md)
* [Publishers](./publishers.md)
* [Subscriptions](./subscriptions.md)

## Common tasks

### Set up a subscription

1. If you haven't already, set up your [consumer and actions](../../get-started/service-hooks/create-subscription.md).
2. Create a [subscription](./subscriptions.md#createasubscription) that invokes one of your actions when a particular event occurs.

### Get a list of publishers

Get the list of event [publishers](./publishers.md#getalistofpublishers) for Visual Studio Team Services.
