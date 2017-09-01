---
title: Define a CI build process for your Git repo | VSTS Tutorial
description: Define a continuous integration (CI) build for your Git repo using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: alewis
manager: douge
editor: ''

ms.assetid: E9684A1D-8D2B-4D5E-808A-D3677D314DB6
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: get-started-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 08/07/2017
ms.custom: mvc
---

# Define a continuous integration (CI) build process for your Git repo

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a full-featured Git server for hosting your team's source code. To keep code quality high, add continuous integration (CI) builds to your team's process. CI builds automatically build and test code every time a team member pushes a commit to the server. You can take it a step further with pull request builds.

In this tutorial, you learn how to:

> [!div class="checklist"]
> * Set up CI for master and feature branches
> * Keep code quality high by building your pull requests
> * Run specialized tasks for master branch builds
> * Run specialized tasks for different repo folders
> * Use retention policies to tidy your completed builds

[!INCLUDE [include](_shared/build-prerequisites.md)]