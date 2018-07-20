---
title: Deploy a Docker container app to an Azure web app
description: Set up continuous deployment (CD) of a Docker-enabled app to an Azure web app from Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Deploy to an Azure Web App for Containers

We'll show you how to set up continuous deployment of your Docker-enabled app to an Azure web app using
Visual Studio Team Services (VSTS).

For example, you can continuously deliver your app to a Windows VM hosted in Azure.

![A typical release pipeline for web applications](azure/_shared/_img/vscode-git-ci-cd-to-azure.png)

After you commit and push a code change, it is automatically built and then deployed. The results will automatically show up on your site.

## Define your CI build process

You'll need a continuous integration (CI) build process that publishes a Docker container image.
To set up a CI build process, see:

* [Build and push a Docker image](../../languages/docker.md).

## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

[!INCLUDE [create-azure-webapp-to-host-container](../_shared/create-azure-webapp-to-host-container.md)]

[!INCLUDE [create-release-azure-webapp-container](../_shared/create-release-azure-webapp-container.md)]

## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
