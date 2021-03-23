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

If you don't have a package but want to try publishing, you can install a NuGet sample package from the public NuGet gallery.

1. Install the sample NuGet package:

   ```Command
   nuget install HelloWorld -ExcludeVersion
   ```

1. Publish the sample NuGet package to your feed.

   Run these two commands in an elevated command prompt to add the source to your nuget.config file and push your package to your feed. Replace the placeholders with the respective values.

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
   ```

### Create and publish your own NuGet package

1. Create your own NuGet package by following the steps in [Create NuGet packages](/nuget/create-packages/creating-a-package).

1. Publish your package to your feed.

   Run these two commands in an elevated command prompt to add the source to your nuget.config file and push your package to your feed. Replace the placeholders with the respective values.

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
   ```
