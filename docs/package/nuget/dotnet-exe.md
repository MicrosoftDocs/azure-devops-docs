---
title: Use dotnet with VSTS feeds
description: Authenticating to feeds with NuGet in VSTS
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Use dotnet with VSTS feeds

[!INCLUDE [](../_shared/availability-nuget.md)]

> [!NOTE]
> This page covers interactive scenarios. In Team Build, use the [.NET Core step](../../build-release/tasks/build/dotnet-core.md). 

To use `dotnet` with VSTS NuGet feeds, you'll need to specify a [Personal Access Token](../../accounts/use-personal-access-tokens-to-authenticate.md) in plain text. 

On Windows, [NuGet 4](nuget-exe.md) is functionally equivalent to dotnet, and we recommend using that instead.

## Add a feed to dotnet
[!INCLUDE [generate-pat](../_shared/generate-pat.md)]

Then, create or edit a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File#config-file-reference) at the solution root, next to the project.json file.

Add your VSTS feed(s) to your solution by running the following command (replacing {values} where applicable):

```
nuget.exe sources add -name {feed name} -source {feed URL} -username {username} -password {your PAT} -StorePasswordInClearText
```