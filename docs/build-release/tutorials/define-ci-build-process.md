---
title: Define your CI build process | VSTS Tutorial
description: Define a continuous integration (CI) build for your ASP.NET Core app using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: alewis
manager: douge
editor: ''

ms.assetid: 92F4A827-F820-4689-AA9A-C2F4380DA5EF
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Define your continuous integration (CI) build process

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration service for building your applications. Your build definition is where you specify what gets built and when, the additional tasks you want to run, and what artifacts and other outcomes will result from the build.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Creating a build definition using templates
> * Tasks in your build definition
> * Queuing a build manually
> * Build triggers
> * Logs, artifacts, and other results of a build
> * Changes and work items in a build

[!INCLUDE [include](_shared/build-prerequisites.md)]