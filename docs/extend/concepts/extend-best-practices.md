---
title: Guidelines and best practices for developing extensions for Azure DevOps Services or Team Foundation Server
description: Discover the best practices for developing your own extensions for Azure DevOps Services or TFS
ms.prod: devops
ms.technology: devops-ecosystem
ms.assetid: 209d4863-3918-4c99-93cc-60fffa5ec219
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 10/02/2017
robots: NOINDEX, NOFOLLOW
---

# Extension development best practices

## Custom tables in TFS databases

If your extension needs to create a custom table in the TFS database, do not create it using the '**dbo**' schema. Instead, custom tables should be created in a separate schema. For example, '**YourExtensionName**'.