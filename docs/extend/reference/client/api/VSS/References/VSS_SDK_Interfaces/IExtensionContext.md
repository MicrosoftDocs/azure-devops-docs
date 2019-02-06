---
title: VSS/References/VSS.SDK.Interfaces IExtensionContext API | Extensions for Azure DevOps Services
description: Context about the app that owns the content that is being hosted
ms.assetid: c4bd9815-17f9-9c4f-6240-c8549564fce7
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# IExtensionContext

Defined in vss.d.ts


Context about the app that owns the content that is being hosted 

### Members

* `publisherId`: string. Friendly unique ID of the publisher

* `extensionId`: string. Friendly ID of the extension (unique within the publisher)

* `version`: string. Version of the extension

* `baseUri`: string. The base uri to be used with relative urls in contribution properties

