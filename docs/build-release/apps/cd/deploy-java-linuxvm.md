---
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
title: Deploy a Java app to a Linux VM
description: Set up continuous deployment (CD) of a Java app to a Linux Virtual Machine from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Deploy a Java app to a Linux VM

**VSTS | TFS 2018 | TFS 2017 Update 2**

We'll show you how to set up continuous deployment of your Java app to Tomcat server running on an Azure Linux VM using
Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration process publishes a Java package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Java package.
To set up CI for your specific type of app, see:

* [Build your Java app with Maven](../java/build-maven.md)

You'll also need an Azure Linux VM with Tomcat installed where you will deploy the app.
If you don't have one already, create one now. If you need help, follow the
steps in [this example](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/setup-tomcat).

## Create a release

{Use a bash script like the one in [https://gist.github.com/geowa4/1428257](https://gist.github.com/geowa4/1428257)}

## Next steps
