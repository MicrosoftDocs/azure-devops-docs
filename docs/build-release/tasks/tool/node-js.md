---
title: Node Tool Installer
description: Node Tool Installer for VSTS and TFS 
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 546DE4F0-79B7-43F0-AD1F-BCD20FEB2B37
ms.manager: douge
ms.author: alewis
ms.date: 4/17/2017
---

# Tool: Node Tool Installer

**VSTS**

**Build**

![icon](_img/node.png) Finds or downloads and caches the specified version of [Node.js](https://nodejs.org/) and adds it to the PATH

## Demands

None

## Arguments

| Argument | Description |
|----------|-------------|
| Version Spec | Specify which [Node.js version](https://nodejs.org/en/download/releases/) you want to use. Examples: `7.x`, `6.x`, `6.10.0`, `>=6.10.0` |
| Check for Latest Version | Select if you want the agent to check for the latest available version that satisfies the version spec. For example, you select this option because you run this build on your [private agent](../../concepts/agents/agents.md#install) and you want to always use the latest `6.x` version. <div class="tip"><h5>TIP</h5><p>If you're using [our hosted agents](../../concepts/agents/hosted.md), you should leave this check box cleared. We update the hosted agents on a regular basis, but they're often slightly behind the latest version. So selecting this box will result in your build spending a lot of time updating to a newer minor version.</p></div>|
| Control options | See [Control options](../../concepts/process/tasks.md#controloptions). |


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../concepts/process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
