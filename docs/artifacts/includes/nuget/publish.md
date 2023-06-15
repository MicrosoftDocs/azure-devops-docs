---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 02/18/2022
---

With Azure Artifacts, you can publish your NuGet packages to public or private feeds, and then share them with others, depending on your feed's visibility settings. 

Here's how to connect to your feed and set up your project.

[!INCLUDE [](nuget-publish-endpoint.md)]

## Install and publish a sample NuGet package  

If you don't have a NuGet package but want to practice the steps to publish NuGet packages to your feed, you can install the _HelloWorld_ sample package.

1. Install the sample NuGet package:

   ```Command
   nuget install HelloWorld -ExcludeVersion
   ```

1. Set up your nuget.config file and publish your package to your feed:

   ```Command
   nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
   nuget push -Source <SourceName> -ApiKey key <PackagePath> #example:(.\Get-Hello.1.0.0.nupkg)>
   ```