---
title: Build and Deploy an ASP.NET Core app
description: Set up a continuous integration (CI) build for your ASP.NET Core app, and then a continuous deployment (CD) release to Azure using Azure Pipelines
ms.topic: conceptual
ms.assetid: 4162F547-3E73-4B1E-970F-A26DFCA206E1
ms.custom: "mvc, seodec18"
ms.date: 06/24/2017
monikerRange: '>= tfs-2015'
---


# Implement a CI/CD pipeline to build and deploy your ASP.NET Core app to Azure

[!INCLUDE [version-tfs-2015-rtm](../../../includes/version-tfs-2015-rtm.md)]

Azure Pipelines provides a highly customizable continuous integration (CI) and deployment (CD) automation system for your 
ASP.NET Core apps.
This quickstart shows how to set up CI and CD to deploy
an ASP.NET Core app
to an Azure Web App.
You create the web app using the Azure CLI, then set up CI/CD using Azure Pipelines.

![Screenshot showing ASP.NET Core web app](../../../apps/cd/azure/media/aspnet-core-to-windows-vm/cicd-get-started-dotnetcore-sample.png)

[!INCLUDE [temp](../includes/vsts-and-azure-setup.md)]

[!INCLUDE [temp](../includes/create-azure-web-app.md)]

[!INCLUDE [temp](../includes/import-code-1.md)]

```bash
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

[!INCLUDE [temp](../includes/import-code-2.md)]

[!INCLUDE [temp](../includes/set-up-ci-1.md)]

In the right panel, select **ASP.NET Core**, and then click **Apply**.

![Screenshot showing dotnet core template](../../../apps/aspnet/media/apply-aspnet-core-build-template.png)

[!INCLUDE [temp](../includes/set-up-ci-2.md)]

[!INCLUDE [temp](../includes/set-up-ci-3.md)]

[!INCLUDE [temp](../includes/set-up-cd-1.md)]

![Screenshot showing release action on build summary](../../../apps/cd/azure/media/cicd-get-started-dotnetcore-release.png)

[!INCLUDE [temp](../includes/set-up-cd-2.md)]

[!INCLUDE [temp](../includes/set-up-cd-3.md)]

## Update to redeploy the code

Navigate to the **Code** hub in the Azure Repos portal. Navigate to **Views/Home/Index.cshtml** file. Make the following simple change to that file by selecting the edit action.

![Screenshot showing update to code](../../../apps/cd/azure/media/aspnet-core-code-change.png)

Add the following line of text above the carousel display in the page:
```html
<h1>Demo of ASP.NET Core CI/CD!!</h1>
```

Commit your changes in Git. This change triggers a CI build, and when the build completes, it triggers an automatic deployment to Azure Web App.

[!INCLUDE [temp](../includes/browse-to-web-app.md)]

[!INCLUDE [temp](../includes/clean-up-resources.md)]
