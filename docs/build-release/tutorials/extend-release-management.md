---
title: Extend your CD release process | VSTS Tutorial
description: Extend your continuous deployment (CD) process using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: ahomer
manager: douge
editor: ''

ms.assetid: FDA82F19-07FA-4466-AD8C-0229ED1D876C
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Extend your continuous deployment (CD) process

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide
a highly customizable continuous deployment service for managing the release
of your applications. However, yuo can extend the capabilities of VSTS and
TFS by installing extensions that provide additional tasks and other artifacts
for more specialist types of deployment scenarios.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Extending a release definition by adding extensions
> * Adding task-specific service endpoints to a release definition
> * Configuring a release definition with extension tasks
> * Deploying an app using extension tasks
> * A summary and examples of some of the most useful extensions

<!--

[!INCLUDE [include](_shared/build-prerequisites.md)]

This tutorial requires you to have completed the tutorial 
[Define your continuous integration (CI) build process](define-ci-build-process.md)
first. This tutorial extends that one by using the same set of build artifacts
from the build definition. You also need an Azure App Services website where you will deploy the app.

[!INCLUDE [create-azure-web-app-portal](../apps/_shared/create-azure-web-app-portal.md)]

## Select and install an extension

## Use the extension

[TBD - Awaiting decision on which extension to use]

## Update your code to create a new release

[!INCLUDE [change-aspnet-core-code](../apps/_shared/change-aspnet-core-code.md)]

## Monitor the deployment

Open the **Releases** page from the **Build &amp; Release** hub.

Wait a few minutes for the build to complete and the release to start.

Refresh the page and, when it appears, select the new release

Open the release summary from the shortcut menu.

Open **Logs** tab and watch deployment of the release. 

Open **Summary** tab, view results

Choose environment name, drill down each environment.

-->
