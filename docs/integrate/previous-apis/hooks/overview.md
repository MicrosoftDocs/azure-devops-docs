---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Hook Overview | REST API Reference for Team Foundation Server
description: Work with service hooks programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 9AFC70D7-D27B-45EF-A374-4A7283BF1E4C
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hooks

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]



The service hook [publishers](./publishers.md) define a set of events. You create [subscriptions](./subscriptions.md) based on an event and select the 
service hook [consumer](./consumers.md) and action to take in response to that event from the publisher.

![service hook resources](./_img/service-hook-resources.png)

* [Consumers](./consumers.md)
* [Publishers](./publishers.md)
* [Subscriptions](./subscriptions.md)

## Common tasks

### Get a list of publishers

Get the list of event [publishers](./publishers.md#getalistofpublishers) for VSTS.
