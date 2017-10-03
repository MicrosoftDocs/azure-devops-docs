---
title: Guidelines and best practices for developing extensions for Visual Studio Team Services or Team Foundation Server
description: Discover the best practices for developing your own extensions for VSTS or TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
ms.assetid: 209d4863-3918-4c99-93cc-60fffa5ec219
ms.manager: douge
ms.author: elbatk
ms.date: 10/02/2017
robots: NOINDEX, NOFOLLOW
---

# Extension development best practices

## Custom tables in TFS databases

If your extension needs to create a custom table in the TFS database, do not create it using the '**dbo**' schema. Instead, custom tables should be created in a seperate schema. For example, '**YourExtensionName**'.