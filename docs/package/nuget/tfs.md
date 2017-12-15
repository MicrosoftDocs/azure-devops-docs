---
title: Use NuGet or dotnet with Team Foundation Server feeds
description: Authenticating to feeds with NuGet in VSTS
ms.assetid: 1BB88A4E-C40E-48CD-B44A-25C90B935E5B
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Use NuGet or dotnet with Team Foundation Server feeds

[!INCLUDE [](../_shared/availability-nuget.md)]

Authentication from command-line clients like `nuget` and `dotnet` is a little different for Team Foundation Server users.

## Domain users on domain-joined machines

You can use [consume packages with Visual Studio](consume.md), [publish with nuget](publish.md), and use [nuget](nuget-exe.md) and [dotnet](dotnet-exe.md). Ignore any content about the Credential Provider or Personal Access Tokens&mdash;everything will work using your domain credentials.

## Non-domain users (e.g. service accounts, users on non-domain-joined machines)

> This workflow is **not recommended**, because it requires that you store **your encrypted domain password** on disk. Please consider the security implications before continuing.

[!INCLUDE [](../_shared/nuget/nuget-consume-endpoint.md)]

Then, run the following command (replacing {values} where applicable):

```no-highlight
nuget sources add -name {your feed name} -source {your feed URL} -username {your domain username} -password {your domain password}
```