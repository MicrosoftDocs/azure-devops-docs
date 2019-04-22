---
title: Node.js Tool Installer task
description: Find, download, and cache a specified version of Node.js and add it to the PATH
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 546DE4F0-79B7-43F0-AD1F-BCD20FEB2B37
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Node.js Tool Installer task

**Azure Pipelines**

**Build**

Use this task in a build or release pipeline to find, download, and cache a specified version of [Node.js](https://nodejs.org/) and add it to the PATH.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/NodeToolV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Version Spec | Specify which [Node.js version](https://nodejs.org/en/download/releases/) you want to use. Examples: `7.x`, `6.x`, `6.10.0`, `>=6.10.0` |
| Check for Latest Version | Select if you want the agent to check for the latest available version that satisfies the version spec. For example, you select this option because you run this build on your [self-hosted agent](../../agents/agents.md#install) and you want to always use the latest `6.x` version. <div class="tip"><h5>TIP</h5><p>If you're using [the Microsoft-hosted agents](../../agents/hosted.md), you should leave this check box cleared. We update the Microsoft-hosted agents on a regular basis, but they're often slightly behind the latest version. So selecting this box will result in your build spending a lot of time updating to a newer minor version.</p></div>|
| Control options | See [Control options](../../process/tasks.md#controloptions). |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
