---
ms.assetid: 449254BF-EAC1-466E-B10C-85C2DE086F30
title: Deploy to Azure web app
description: Set up CD of an ASP.NET or Node.js web deploy package to Azure App Services from Release Management
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
ms.topic: get-started-article
---

# Deploy to Azure web app

**VSTS | TFS 2018 | TFS 2017.2**

We'll show you how to set up continuous deployment of your ASP.NET or Node app to an Azure web app using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Web Deploy package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../aspnet/build-aspnet-4.md)

* [Build your ASP.NET Core app](../aspnet/build-aspnet-core.md)

* [Build your Node app with Gulp](../nodejs/build-gulp.md)

You'll also need an Azure web app where you will deploy the app.
If you don't have one already, create one now. If you need help, follow the
steps in [this example](../../apps/cd/azure/aspnet-core-to-azure-webapp.md#create-webapp-portal).

[!INCLUDE [create-release](../_shared/create-release.md)]

## Next steps

* [Deploy to a staging slot and then swap to production](howto-webdeploy-webapps.md#swapslots)
* [Deploy multiple apps in the same release](howto-webdeploy-webapps.md#multipleapps)
* [Apply environment-specific configurations](howto-webdeploy-webapps.md#configenvir)
* [Deploy to a Government cloud instead of a public cloud](howto-webdeploy-webapps.md#govtcloud)
