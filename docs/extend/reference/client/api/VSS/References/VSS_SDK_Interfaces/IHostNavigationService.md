---
title: VSS/References/VSS.SDK.Interfaces IHostNavigationService API | Extensions for Azure DevOps Services
description: Service which allows interaction with the browser location and navigation of the host frame
ms.assetid: 10705042-bb97-0b97-7985-f1a00f81ea40
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

# IHostNavigationService

Defined in vss.d.ts


Service which allows interaction with the browser location and navigation of the host frame 

### Members

* `reload`: (): any. Reloads the parent frame

* `onHashChanged`: (callback: (hash: string): void): any. Add a callback to be invoked each time the hash navigation has changed

* `getHash`: (): IPromise&lt;string&gt;. Gets the current hash.

* `setHash`: (hash: string): any. Sets the provided hash from the hosted content.

