---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 04/06/2020
---

With Azure Artifacts, you can publish your NuGet packages to public or private feeds, and then share them with others, depending on your feed's visibility settings. 

Here's how to connect to your feed and publish a package.

[!INCLUDE [](nuget-publish-endpoint.md)]

### Install and publish a sample NuGet package  

If you don't have a NuGet package but want to practice the steps to publish our packages to your feed, you can install the _HelloWorld_ sample package.

1. Install the sample NuGet package:

   ```Command
   nuget install HelloWorld -ExcludeVersion
   ```

1. Set up your nuget.config file and publish your package to your feed

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
   ```