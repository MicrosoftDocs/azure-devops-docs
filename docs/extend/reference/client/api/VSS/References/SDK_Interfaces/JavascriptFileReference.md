---
title: VSS/References/SDK.Interfaces JavascriptFileReference API | Extensions for Azure DevOps Services
description: Reference to a javascript file to include on a page
ms.assetid: ad7fc48f-2880-f1cb-dcfd-c9aebf7ae5f0
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

# JavascriptFileReference

Defined in vss.d.ts


Reference to a javascript file to include on a page 

### Members

* `fallbackCondition`: string. Condition to check in the case that Url lives on a CDN. The fallback script will be included if this check fails.

* `fallbackUrl`: string. Fallback url to use in case Url lives on a CDN

* `identifier`: string. ID of the reference (JQuery, JQueryUI, MicrosoftAjax, etc.)

* `isCoreModule`: boolean. Is this a core javascript file that needs to be included on every page

* `url`: string. Url of the javascript reference

