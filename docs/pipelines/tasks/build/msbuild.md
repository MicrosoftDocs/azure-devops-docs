---
title: MSBuild build and release task
ms.custom: seodec18
description: MSBuild build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A104BE40-2BFD-4E80-828B-F50944C12107
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# MSBuild task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

Use this task in a build or release pipeline to build with MSBuild.

## Demands

msbuild

> **Azure Pipelines:** If your team uses Visual Studio 2017 and you want to use the Microsoft-hosted agents, make sure you select as your default pool the **Hosted VS2017**. See [Microsoft-hosted agents](../../agents/hosted.md).

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/MSBuildV1.md)]
::: moniker-end

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
<p>Make the sure the projects you specify are downloaded by this build pipeline. On the Repository tab:</p>
<ul>
<li>
If you use TFVC, make sure that the  project is a child of one of the mappings on the Repository tab.
</li>
<li>If you use Git, make sure that the project or project is in your Git repo, in a branch that you're building.</li>
</ul>
<p>Tip: If you are building a solution, we recommend you use the [Visual Studio build task](visual-studio-build.md) instead of the MSBuild task.</p>
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

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/msbuild_qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
