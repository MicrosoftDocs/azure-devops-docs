---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---


After you select the **ASP.NET Core (PREVIEW)** template, instances of the .NET Core task are added to your build pipeline to [restore](/dotnet/articles/core/tools/dotnet-restore), [build](/dotnet/articles/core/tools/dotnet-build), [test](/dotnet/articles/core/tools/dotnet-test), and [publish](/dotnet/articles/core/tools/dotnet-publish) the app.

 A publish build artifacts task is also added. This task publishes your web deploy package as an artifact. Your CD release pipeline uses this package to deploy your app.
