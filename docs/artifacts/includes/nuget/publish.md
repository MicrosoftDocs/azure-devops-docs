---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 04/06/2020
---

With Azure Artifacts you can publish your NuGet packages to public or private feeds and share them with your consumers depending on feed's visibility settings.

[!INCLUDE [](nuget-publish-endpoint.md)]

### Install and publish a sample NuGet package  

If you don't have a NuGet package but want to practice the steps to publish to your Artifacts feed, you can install a NuGet sample package from the public registry.

1. Install the sample NuGet package:

   ```Command
   nuget install HelloWorld -ExcludeVersion
   ```

1. Set up your nuget.config file and publish your package to your feed

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
   ```

### Create and publish your own NuGet package

1. Create your own NuGet package by following the steps here: [Create NuGet packages](/nuget/create-packages/creating-a-package).

1. Set up your nuget.config file and publish your package to your feed

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
   ```
