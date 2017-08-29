---
ms.assetid: 
title: Deploy a Docker container app
description: Set up continuous deployment (CD) of a Docker-enabled app to a Microsoft Azure Virtual Machine from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.manager: douge
ms.author: ahomer
ms.date: 01/02/2017
---

# Deploy a Docker-enabled app

**VSTS | TFS 2017 Update 2**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure VM using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Docker-enabled package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Docker-enabled package.
To set up CI for your specific type of app, see:

* [Build your ASP.NET Core app as a container](../aspnet/build-aspnet-core-docker.md)

You'll also need an Azure VM where you will deploy the app.

[!INCLUDE [create-azure-windows-vm](../_shared/create-azure-windows-vm.md)

## Create a release

## Next steps
