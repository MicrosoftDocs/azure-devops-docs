---
title: Deploy a web app to App Services
description: Set up CD of an ASP.NET or Node.js web deploy package to Azure App Services in Azure Pipelines and TFS
ms.assetid: 449254BF-EAC1-466E-B10C-85C2DE086F30
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Deploy a web app to Azure App Services

**Azure Pipelines | TFS 2018 | TFS 2017.2**

We'll show you how to set up continuous deployment of your ASP.NET or Node.js app to an Azure Web App using
Azure Pipelines or Team Foundation Server (TFS). You can use the steps in this quickstart
as long as your continuous integration pipeline publishes a Web Deploy package.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../aspnet/build-aspnet-4.md)

* [Build your ASP.NET Core app](../../languages/dotnet-core.md)

* [Build your Node.js app with gulp](../../languages/javascript.md)

You'll also need an Azure Web App where you will deploy the app.

[!INCLUDE [create-release](../_shared/create-release.md)]

## Next step

* [Customize web app deployment](../../targets/webapp.md)
