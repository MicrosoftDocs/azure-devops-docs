---
title: NuGet Tool Installer task
description: Find, download, and cache a specified version of NuGet and add it to the PATH
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 740DA69C-E173-46AD-BA6F-0F138285AC39
ms.manager: jillfra
ms.custom: seodec18
ms.author: amullans
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# NuGet Tool Installer task

**Azure Pipelines**

**Build**

Use this task in a build or release pipeline to find, download, and cache a specified version of [NuGet](https://nuget.org/) and add it to the PATH.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/NuGetToolInstallerV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Version Spec | Specify which [NuGet version](https://dist.nuget.org/tools.json) you want to use. Examples: `4.1.0`, `3.x`, `>2.x`, `>=3.5` |
| Check for Latest Version | Select if you want the agent to check for the latest available version that satisfies the version spec. For example, you select this option because you run this build on your [self-hosted agent](../../agents/agents.md#install) and you want to always use the latest `3.x` version. <div class="tip"><h5>TIP</h5><p>If you're using [the Microsoft-hosted agents](../../agents/hosted.md), you should leave this check box cleared. We update the Microsoft-hosted agents on a regular basis, but they're often slightly behind the latest version. So selecting this box will result in your build spending a lot of time updating to a newer minor version.</p></div>|
| Control options | See [Control options](../../process/tasks.md#controloptions). |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
