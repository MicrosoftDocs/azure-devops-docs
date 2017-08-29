---
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531 
title: Deploy a Docker container app to a Linux VM
description: Set up continuous deployment (CD) of a Docker-enabled app to a Linux Virtual Machine from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.manager: douge
ms.author: ahomer
ms.date: 01/02/2017
---

# Deploy a Docker-enabled app to a Linux VM

**VSTS | TFS 2017 Update 2**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure Linux VM using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Docker-enabled package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Docker-enabled package.
To set up CI for your specific type of app, see:

* [Build your ASP.NET Core app as a container](../aspnet/build-aspnet-core-docker.md)

You'll also need an Azure Linux VM where you will deploy the app.

[!INCLUDE [create-azure-linux-vm](../_shared/create-azure-linux-vm.md)]

## Create a release

## Next steps
