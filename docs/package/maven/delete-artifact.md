---
title: Delete or recover a Maven artifact
description: Delete or recover a deleted Maven artifact from Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.assetid: f10cc6ca-b5d7-4de7-b625-b7c11bd92e8e
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: '>= tfs-2018'
---

# Delete or recover a Maven artifact

**VSTS** | **TFS 2018**

Deleting a version of an artifact makes it unavailable for install. After deleting, an artifact can be [restored from the _Recycle Bin_](#recover-a-deleted-maven-artifact) within 30 days of deletion. After 30 days, it is permanently unavailable to restore. Deleting an artifact will cause others that depend on it to break.

## Delete a Maven artifact in VSTS

You must be an **owner** to delete an artifact.

Choose the artifact from the **Packages** hub in the **Build and Release** hub group and select the appropriate option from the menu:

![Delete Maven artifact Visual Studio Team Services](../_img/delete/delete-maven-package.png)

## Recover a deleted Maven artifact

[!INCLUDE [](../_shared/recover-deleted-package.md)]


