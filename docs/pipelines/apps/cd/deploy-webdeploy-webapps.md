---
title: Deploy a web app from VSTS or TFS to Azure App Services
description: Set up CD of an ASP.NET or Node.js web deploy package to Azure App Services from Microsoft Release Management in VSTS and TFS
ms.assetid: 449254BF-EAC1-466E-B10C-85C2DE086F30
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Deploy a web app to Azure App Services

**VSTS | TFS 2018 | TFS 2017.2**

We'll show you how to set up continuous deployment of your ASP.NET or Node app to an Azure web app using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Web Deploy package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../aspnet/build-aspnet-4.md)

* [Build your ASP.NET Core app](../../languages/dotnet-core.md)

* [Build your Node app with Gulp](../nodejs/build-gulp.md)

You'll also need an Azure web app where you will deploy the app.

[!INCLUDE [create-release](../_shared/create-release.md)]

## Next step

* [Customize web app deployment](../../targets/webapp.md)
