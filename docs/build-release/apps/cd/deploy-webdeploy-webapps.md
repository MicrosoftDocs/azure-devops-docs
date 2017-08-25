---
ms.assetid: 449254BF-EAC1-466E-B10C-85C2DE086F30
title: CD to Azure App Services
description: Set up continuous deployment (CD) of an ASP.NET or Node.js web deploy package to a Microsoft Azure App Services website from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.manager: douge
ms.author: ahomer
ms.date: 01/02/2017
---

# CD to Azure App Services

Continuous deployment (CD) means starting an automated deployment process whenever a new successful build is available.
We'll show you how to set up continuous deployment of your ASP.NET or Node app to an Azure App Services website using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS) 2017 Update 2.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../aspnet/ci/build-aspnet-4.md)

* [Build your ASP.NET Core app](../aspnet/build-aspnet-core.md)

* [Build your Node app with Gulp](../nodejs/nodejs-to-azure.md)

You'll also need an Azure App Services website where you will deploy the app.
If you don't have one already, create one now. If you need help, follow the
steps in [this example](../../../deploy-azure/aspnet-core-to-azure-webapp.md#create-webapp-portal).

[!INCLUDE [create-release](../_shared/create-release.md)]

## Next steps

* [Deploy to a staging slot and then swap to production](howto-webdeploy-webapps.md#swapslots)
* [Deploy multiple apps in the same release](howto-webdeploy-webapps.md#multipleapps)
* [Apply environment-specific configurations](howto-webdeploy-webapps.md#configenvir)
* [Deploy to a Government cloud instead of a public cloud](howto-webdeploy-webapps.md#govtcloud)
