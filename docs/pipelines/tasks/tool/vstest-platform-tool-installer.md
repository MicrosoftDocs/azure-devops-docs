---
title: Visual Studio Test Platform Installer
description: Acquires the test platform from nuget.org or the tools cache. Satisfies the ‘vstest’ demand and can be used for running tests and collecting diagnostic data using the Visual Studio Test task.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2C65196A-54FD-4A02-9BE8-D9D1837B7111
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Tool: Visual Studio Test Platform Installer

![](_img/visualstudiotestplatforminstaller.png) Acquires the test platform from nuget.org or the tools cache. Satisfies the ‘vstest’ demand and can be used for running tests and collecting diagnostic data using the Visual Studio Test task.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/VsTestPlatformToolInstallerV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Version</td><td>(Required) Pick whether to install the latest version or a specific version of the Visual Studio Test Platform.</td></tr>
<tr><td>Test Platform Version</td><td>(Required) Specify the version of Visual Studio Test Platform to install on the agent. Available versions can be viewed on <a href="https://www.nuget.org/packages/Microsoft.TestPlatform/">nuget</a>.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
