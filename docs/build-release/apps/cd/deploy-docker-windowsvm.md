---
ms.assetid: 73E26BEF-B983-4314-8171-5BE1DB2C0111
title: Deploy a Docker container app to a Windows VM
description: Set up continuous deployment (CD) of a Docker-enabled app to a Microsoft Azure Virtual Machine from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Deploy a Docker-enabled app to a Windows VM

**VSTS | TFS 2018 | TFS 2017 Update 2**

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure VM using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Docker-enabled package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Docker-enabled package.
To set up CI for your app, see:

* [Build and push your container app](../containers/build.md)

You'll also need an Azure VM where you will deploy the app.

[!INCLUDE [create-azure-windows-vm](../_shared/create-azure-windows-vm.md)]

## Create a release

## Next steps
