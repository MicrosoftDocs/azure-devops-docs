---
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
title: Deploy a Docker container app to an Azure web app
description: Set up continuous deployment (CD) of a Docker-enabled app to an Azure web app from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.manager: douge
ms.author: ahomer
ms.date: 01/02/2017
---

# Deploy a Docker-enabled app to an Azure web app

**VSTS | TFS 2017 Update 2**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure web app using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). 
Your build or continuous integration process must publish a Docker container image
in order to use the steps in this quickstart.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Docker-enabled package.
To set up CI for your specific type of app, see:

* [Build your Docker-enabled ASP.NET Core app](../aspnet/build-aspnet-core-docker.md)

You'll need an Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [create-azure-webapp-to-host-container](../_shared/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../_shared/create-release-azure-webapp-container.md)]

## Next steps

* [Deploy to a staging slot and then swap to production](howto-webdeploy-webapps.md#swapslots)
* [Deploy multiple apps in the same release](howto-webdeploy-webapps.md#multipleapps)
* [Apply environment-specific configurations](howto-webdeploy-webapps.md#configenvir)
* [Deploy to a Government cloud instead of a public cloud](howto-webdeploy-webapps.md#govtcloud)

