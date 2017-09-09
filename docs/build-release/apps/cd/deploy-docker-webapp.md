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

# Deploy to an Azure web app for containers

**VSTS**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure web app using
Visual Studio Team Services (VSTS).
Your build or continuous integration process must publish a Docker container image
in order to use the steps in this quickstart.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Docker-enabled package.
To set up CI for your specific type of app, see:

* [Build your ASP.NET Core Container app](../aspnet/build-aspnet-core-docker.md)

You'll need an Azure subscription. If you don't have one, you can [create one for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

[!INCLUDE [create-azure-webapp-to-host-container](../_shared/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../_shared/create-release-azure-webapp-container.md)]

## Next steps

* [Set up multi-stage release(actions/define-multistage-release-process)
