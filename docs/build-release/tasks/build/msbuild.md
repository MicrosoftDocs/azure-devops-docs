---
title: MSBuild build and release task
description: MSBuild build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A104BE40-2BFD-4E80-828B-F50944C12107
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Build: MSBuild

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/msbuild.png) Build with MSBuild

## Demands

msbuild

> **VSTS:** If your team uses Visual Studio 2017 and you want to use our hosted agents, make sure you select as your default queue the **Hosted VS2017**. See [Hosted agents](../../concepts/agents/hosted.md).

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>

<tr>
<td>Project</td>
<td>
<p>If you want to build a single project, click the <strong>...</strong> button and select the project.</p>
<p>If you want to build multiple projects, specify search criteria. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```). For example, ```**\*.*proj``` searches for all MSBuild project (.&#42;proj) files in all subdirectories.</p>
<p>Make the sure the projects you specify are downloaded by this build definition. On the Repository tab:</p>
<ul>
<li>
If you use TFVC, make sure that the  project is a child of one of the mappings on the Repository tab.
</li>
<li>If you use Git, make sure that the project or project is in your Git repo, in a branch that you're building.</li>
</ul>
<p>Tip: If you are building a solution, we recommend you use the [Visual Studio build step](visual-studio-build.md) instead of the MSBuild step.</p>
</td>
</tr>

[!INCLUDE [temp](../_shared/msbuild_args.md)]

<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>

[!INCLUDE [temp](../_shared/msbuild_record_project_details_arg.md)]

<tr>
<td>MSBuild</td>
<td>
<p>In some cases you might need more control over the version of MSBuild that you are running.</p>

</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: MSBuild@1
  inputs:
#   solution: **/*.sln
#   msbuildLocationMethod: version # version (default), location
#   msbuildVersion: latest # latest (default), 15.0, 14.0, 12.0, 4.0
#   msbuildArchitecture: x86 # x86 (default), x64
    msbuildLocation:
    platform:
    configuration:
    msbuildArguments:
#   clean: false
#   maximumCpuCount: false
#   restoreNugetPackages: false
#   logProjectEvents: false
#   createLogFile: false
```

::: moniker-end

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/msbuild_qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
