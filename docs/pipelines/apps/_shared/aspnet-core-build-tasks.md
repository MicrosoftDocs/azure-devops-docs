---
ms.topic: include
---

After you select the **ASP.NET Core (PREVIEW)** template, instances of the .NET Core task are added to your build pipeline to [restore](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-restore), [build](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-build), [test](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-test), and [publish](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-publish) the app. 

 A publish build artifacts task is also added. This task publishes your web deploy package as an artifact. Your CD release process uses this package to deploy your app.
