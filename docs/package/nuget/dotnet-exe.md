---
title: Use dotnet with Team Services feeds
description: Authenticating to feeds with NuGet in Visual Studio Team Services
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 3/29/2017
---

# Use dotnet with Team Services feeds

**Availability**<br>
NuGet Package Management is available with **Visual Studio Team Services** and [**TFS 2017 and newer**TFS 2017](tfs.md).

To use `dotnet` with VSTS NuGet feeds, you'll need to specify a [Personal Access Token](../../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md) in plain text. 

On Windows, [NuGet 4](nuget-exe.md) is functionally equivalent to dotnet, and we recommend using that instead.

## Add a feed to dotnet
[!INCLUDE [generate-pat](../_shared/generate-pat.md)]

Then, create or edit a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File#config-file-reference) at the solution root, next to the project.json file.

Add your VSTS feed(s) to your solution by running the following command (replacing {values} where applicable):

```no-highlight
nuget.exe sources add -name {feed name} -source {feed URL} -username {username} -password {your PAT} -StorePasswordInClearText
```