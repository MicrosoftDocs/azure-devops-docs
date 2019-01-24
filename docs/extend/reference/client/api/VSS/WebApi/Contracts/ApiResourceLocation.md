---
title: VSS/WebApi/Contracts ApiResourceLocation API | Extensions for Azure DevOps Services
description: Information about the location of a REST API resource
ms.assetid: 37361343-f0c8-b926-f488-9327d6f58edc
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ApiResourceLocation

Module path: `VSS/WebApi/Contracts`


### Members

* `area`: string. Area name for this resource

* `id`: string. Unique Identifier for this location

* `maxVersion`: string. Maximum api version that this resource supports (current server version for this resource)

* `minVersion`: string. Minimum api version that this resource supports

* `releasedVersion`: string. The latest version of this resource location that is in &quot;Release&quot; (non-preview) mode

* `resourceName`: string. Resource name

* `resourceVersion`: number. The current resource version supported by this resource location

* `routeTemplate`: string. This location&#x27;s route template (templated relative path)

