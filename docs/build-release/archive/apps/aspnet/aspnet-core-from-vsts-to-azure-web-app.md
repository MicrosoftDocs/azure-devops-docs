---
title: Quick Start - Build and Deploy a ASP.NET Core app | VSTS
description: Set up a continuous integration (CI) build for your ASP.NET Core app, and then a continuous deployment (CD) release to Azure using VSTS
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
services: vsts
documentationcenter: ''
author: alewis
manager: douge
editor: ''
ms.assetid: 4162F547-3E73-4B1E-970F-A26DFCA206E1
ms.workload: web
ms.tgt_pltfrm: na
ms.devlang: dotnetcore
ms.date: 06/24/2017
ms.author: alewis
author: andyjlewis
ms.custom: mvc
monikerRange: '>= tfs-2015 <= tfs-2018 || vsts'
---


# Implement a CI/CD process to build and deploy your ASP.NET Core app to Azure

VSTS provides a highly customizable continuous integration (CI) and deployment (CD) automation system for your 
ASP.NET Core apps. 
This quickstart shows how to set up CI and CD to deploy
an ASP.NET Core app
to an Azure web app. 
You create the web app using the Azure CLI, then set up CI/CD in VSTS.

![Screenshot showing ASP.NET Core web app](../../../apps/cd/azure/_img/aspnet-core-to-windows-vm/cicd-get-started-dotnetcore-sample.png)

[!INCLUDE [temp](../_shared/vsts-and-azure-setup.md)]

[!INCLUDE [temp](../_shared/create-azure-web-app.md)]

[!INCLUDE [temp](../_shared/import-code-1.md)]

```bash
https://github.com/adventworks/dotnetcore-sample
```

[!INCLUDE [temp](../_shared/import-code-2.md)]

[!INCLUDE [temp](../_shared/set-up-ci-1.md)]

In the right panel, select **ASP.NET Core**, and then click **Apply**.

![Screenshot showing dotnet core template](../../../apps/aspnet/_shared/_img/apply-aspnet-core-build-template.png)

[!INCLUDE [temp](../_shared/set-up-ci-2.md)]

[!INCLUDE [temp](../_shared/set-up-ci-3.md)]

[!INCLUDE [temp](../_shared/set-up-cd-1.md)]

![Screenshot showing release action on build summary](../../../apps/cd/azure/_shared/_img/cicd-get-started-dotnetcore-release.png)

[!INCLUDE [temp](../_shared/set-up-cd-2.md)]

[!INCLUDE [temp](../_shared/set-up-cd-3.md)]

## Update to redeploy the code

Navigate to the **Code** hub in the VSTS portal. Navigate to **Views/Home/Index.cshtml** file. Make the following simple change to that file by selecting the edit action.

![Screenshot showing update to code](../../../apps/cd/azure/_shared/_img/aspnet-core-code-change.png)

Add the following line of text above the carousel display in the page:
```
<h1>Demo of ASP.NET Core CI/CD!!</h1>
```

Commit your changes in Git. This change triggers a CI build, and when the build completes, it triggers an automatic deployment to Azure web app.

[!INCLUDE [temp](../_shared/browse-to-web-app.md)]

[!INCLUDE [temp](../_shared/clean-up-resources.md)]
