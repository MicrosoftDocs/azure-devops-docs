---
title: VSS/WebApi/Contracts ApiResourceVersion API | Extensions for Azure DevOps Services
description: Represents version information for a REST Api resource
ms.assetid: 614bd240-8560-63ff-c1cf-f450f8590cd7
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ApiResourceVersion

Module path: `VSS/WebApi/Contracts`


### Members

* `apiVersion`: string. String representation of the Public API version. This is the version that the public sees and is used for a large group of services (e.g. the TFS 1.0 API)

* `isPreview`: boolean. Is the public API version in preview

* `resourceVersion`: number. Internal resource version. This is defined per-resource and is used to support build-to-build compatibility of API changes within a given (in-preview) public api version. For example, within the TFS 1.0 API release cycle, while it is still in preview, a resource&#x27;s data structure may be changed. This resource can be versioned such that older clients will still work (requests will be sent to the older version) and new/upgraded clients will talk to the new version of the resource.

