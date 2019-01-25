---
title: VSS/References/VSS.SDK.Interfaces IDocumentOptions API | Extensions for Azure DevOps Services
description: Interface for options that can be supplied with document actions
ms.assetid: c6508b2d-6e58-5e26-552a-052ab2a99279
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

# IDocumentOptions

Defined in vss.d.ts


Interface for options that can be supplied with document actions 

### Members

* `scopeType`: string. The scope of where the document is stored. Can be Default or User.

* `scopeValue`: string. Optional. The value of the scope where the document is stored. Can be Current or Me.

* `defaultValue`: any. Optional. The default value to return when using getValue(). If the document has no value,
this value will be used instead.

