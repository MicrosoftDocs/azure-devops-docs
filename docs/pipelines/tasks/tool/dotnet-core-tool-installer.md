---
title: .NET Core Tool Installer
titleSuffix: Azure Pipelines & TFS
description: Acquires a specific version of .NET Core from internet or the tools cache and adds it to the PATH. Use this task to change the version of .NET Core used in subsequent tasks.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B0CE7256-7898-45D3-9CB5-176B752BFEA6
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Tool: .NET Core Tool Installer

![](_img/dotnetcoreinstaller.png) Acquires a specific version of .NET Core from internet or the tools cache and adds it to the PATH. Use this task to change the version of .NET Core used in subsequent tasks.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DotNetCoreInstallerV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Package to install</td><td>(Required) Please select whether to install only runtime or full SDK.</td></tr>
<tr><td>Version</td><td>(Required) Specify exact version of .NET Core SDK or runtime to install.<br/><br/>Examples:<br/>1. To install 1.0.4 SDK, use 1.0.4<br/>2. To install 1.1.2 runtime, use 1.1.2<br/>2. To install 2.0 preview 2 runtime, use 2.0.0-preview2-25407-01<br/><br/>For getting more details about exact version, refer [here](https://github.com/dotnet/core/blob/master/release-notes/releases.csv)</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
