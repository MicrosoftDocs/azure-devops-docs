---
title: VSS/WebApi/Contracts ServiceEvent API | Extensions for Azure DevOps Services
ms.assetid: 8bae4734-8da6-c9c0-d93e-babeb0900aa1
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ServiceEvent

Module path: `VSS/WebApi/Contracts`


### Members

* `eventType`: string. This is the ID of the type. Constants that will be used by subscribers to identify/filter events being published on a topic.

* `publisher`: [Publisher](../../../VSS/WebApi/Contracts/Publisher.md). This is the service that published this event.

* `resource`: any. The resource object that carries specific information about the event. The object must have the ServiceEventObject applied for serialization/deserialization to work.

* `resourceContainers`: {[key: string]: any}. This dictionary carries the context descriptors along with their ids.

* `resourceVersion`: string. This is the version of the resource.

