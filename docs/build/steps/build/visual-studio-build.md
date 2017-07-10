---
title: Visual Studio Build
description: Visual Studio Build
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 11E76804-BA67-4086-9CF1-8CB2887169BA
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Build: Visual Studio Build

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/visual-studio-build.png) Build with MSBuild and set the Visual Studio version property

## Demands

msbuild, visualstudio

> **Team Services and Team Foundation Server 2017:** If your team uses Visual Studio 2017 and you want to use our hosted agents, make sure you select as your default queue the **Hosted VS2017**. See [Hosted agents](../../concepts/agents/hosted.md).

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>

<tr>
<td>Solution</td>
<td>
<p>If you want to build a single solution, click the <strong>...</strong> button and select the solution.</p>
<p>If you want to build multiple solutions, specify search criteria. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```). For example, ```**\*.sln``` searches for all *.sln* files in all subdirectories.</p>
<p>Make the sure the solutions you specify are downloaded by this build definition. On the Repository tab:</p>
<ul>
<li>
If you use TFVC, make sure that the  solution is a child of one of the mappings on the Repository tab. 
</li>
<li>If you use Git, make sure that the project or solution is in your Git repo, in a branch that you're building.</li>
</ul>
<p>Tips:</p>
<ul>
<li>You can also build MSBuild project (.&#42;proj) files.</li>
<li>If you are building a customized MSBuild project file, we recommend you use the [MSBuild step](msbuild.md) instead of the Visual Studio Build step.</li>
</ul>
</td>
</tr>

[!INCLUDE [temp](../_shared/msbuild_args.md)]

<tr>
<td>Visual Studio Version</td>
<td><p>For some kinds of solutions, to avoid problems, you must make sure this value matches the version of Visual Studio used to create your solution.</p>
<p>The value you select here adds ```/p:VisualStudioVersion={numeric_visual_studio_version}``` argument to the MSBuild command run by the build. For example, if you select Visual Studio 2015, ```/p:VisualStudioVersion=14.0``` is added to the MSBuild command.
</p>
<blockquote>
<p><strong>Team Services and Team Foundation Server 2017:</strong> If you select **Visual Studio 2017** or **Latest** and you want to use our hosted agents, make sure you select as your default queue the **Hosted VS2017**. See [Hosted agents](../../concepts/agents/hosted.md).</p>
</blockquote>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>

[!INCLUDE [temp](../_shared/msbuild_architecture_arg.md)]

[!INCLUDE [temp](../_shared/msbuild_record_project_details_arg.md)]

[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/msbuild_qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
