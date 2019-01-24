---
title: TFS/VersionControl/Contracts GitMediaObjectRef API | Extensions for Azure DevOps Services
description: Encapsulates the reference metadata of a Git media object.
ms.assetid: 00720d1a-2cfa-6461-fc4b-8167df5f2013
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitMediaObjectRef

Module path: `TFS/VersionControl/Contracts`


### Members

* `_links`: any. Gets or sets the reference links of the Git media object.

* `id`: string. Gets or sets the Git media object identifier. This property duplicates the Oid property, but is required by the Azure DevOps Services REST specification.

* `oid`: string. Gets or sets the Git media object identifier. This property exists for adherence to the GitHub Git Media contract.

* `size`: number. Gets or sets the size of the Git media object in bytes. This property exists for adherence to the GitHub Git Media contract.

* `url`: string. Gets or sets the URL for the Git media object.

