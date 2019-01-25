---
title: VSS/References/SDK.Interfaces ExtensionStateFlags API | Extensions for Azure DevOps Services
description: States of an extension
ms.assetid: 2591929e-6a57-94d8-6b7e-d63e7d767f72
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

# ExtensionStateFlags

Defined in vss.d.ts

### Values

* `None` No flags set

* `Disabled` Extension is disabled

* `BuiltIn` Extension is a built in

* `MultiVersion` Extension has multiple versions

* `UnInstalled` Extension is not installed.  This is for builtin extensions only and can not otherwise be set.

* `VersionCheckError` Error performing version check

* `Trusted` Trusted extensions are ones that are given special capabilities. These tend to come from Microsoft and can&#x27;t be published by the general public.  Note: BuiltIn extensions are always trusted.

