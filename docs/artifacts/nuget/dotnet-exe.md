---
title: Use dotnet with Azure DevOps Services feeds
description: Authenticating to feeds with NuGet in Azure DevOps Services
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: 'vsts'
---

# Use dotnet with Azure DevOps Services feeds

**Azure DevOps Services**

> [!NOTE]
> This page covers interactive scenarios. In Team Build, use the [.NET Core step](../../pipelines/tasks/build/dotnet-core.md). 

To use `dotnet` with Azure DevOps Services NuGet feeds, you'll need to specify a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) in plain text.

On Windows, [NuGet 4](nuget-exe.md) is functionally equivalent to dotnet, and we recommend using that instead.

## Add a feed to dotnet

[!INCLUDE [generate-pat](../_shared/generate-pat.md)]

Then, create or edit a NuGet.config file in the same directory as your csproj that contains your feed as a `packageSource` with an accompanying `packageSourceCredentials` section and a `ClearTextPassword` key. You can copy the example below. Replace `your-feed-name`, `http://your-feed`, and `your-pat` with appropriate values.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="your-feed-name" value="http://your-feed" />
  </packageSources>
  <packageSourceCredentials>
    <your-feed-name>
      <add key="Username" value="any-value-here" />
      <add key="ClearTextPassword" value="your-pat" />
    </your-feed-name>
  </packageSourceCredentials>
</configuration>
```

For more help with creating a NuGet.config, see the [config file reference](http://docs.nuget.org/Consume/NuGet-Config-File#config-file-reference).