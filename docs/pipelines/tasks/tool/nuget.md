---
title: NuGet Tool Installer task
description: Find, download, and cache a specified version of NuGet and add it to the PATH
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 740DA69C-E173-46AD-BA6F-0F138285AC39
ms.manager: mijacobs
ms.custom: seodec18
ms.author: phwilson
author: chasewilson
ms.date: 12/10/2019
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

[!INCLUDE [temp](../includes/yaml/NuGetToolInstallerV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td><code>versionSpec</code><br/>Version Spec</td><td>A version or version range that specifies the NuGet version to make available on the path. Use x as a wildcard. See the <a href=http://dist.nuget.org/tools.json>list of available NuGet versions</a>. If you want to match a pre-release version, the specification must contain a major, minor, patch, and pre-release version from the list above. Examples: 5.x, 5.4.x, 5.3.1, >=5.0.0-0. If unspecified, a version will be chosen automatically</td></tr>
<tr><td><code>checkLatest</code><br/>Always check for new versions</td><td> Always check for and download the latest available version of NuGet.exe which satisfies the version spec. Enabling this option could cause unexpected build breaks when a new version of NuGet is released</td></tr>
</table>

> [!TIP]
> If you're using [the Microsoft-hosted agents](../../agents/hosted.md), you should leave this check box cleared. We update the Microsoft-hosted agents on a regular basis, but they're often slightly behind the latest version. So selecting this box will result in your build spending a lot of time updating to a newer minor version.
> 

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../includes/qa-agents.md)]

<!-- ENDSECTION -->
