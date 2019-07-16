---
title: Visual Studio Build build and release task
ms.custom: seodec18
description: Visual Studio Build build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 11E76804-BA67-4086-9CF1-8CB2887169BA
ms.manager: jillfra
ms.author: vijayma
author: vijayma
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Visual Studio Build task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

Use this task in a build or release pipeline to build with MSBuild and set the Visual Studio version property.

## Demands

msbuild, visualstudio

> **Azure Pipelines:** If your team wants to use Visual Studio 2017 with the Microsoft-hosted agents, select **Hosted VS2017** as your default build pool. See [Microsoft-hosted agents](../../agents/hosted.md).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/VSBuildV1.md)]

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
<td>Solution</td>
<td>
<p>If you want to build a single solution, click the <strong>...</strong> button and select the solution.</p>
<p>If you want to build multiple solutions, specify search criteria. You can use a single-folder wildcard (<code><em></code>) and recursive wildcards (<code></em><em></code>). For example, <code></em>**.sln</code> searches for all <em>.sln</em> files in all subdirectories.</p>
<p>Make the sure the solutions you specify are downloaded by this build pipeline. On the Repository tab:</p>
<ul>
<li>
If you use TFVC, make sure that the solution is a child of one of the mappings on the Repository tab.
</li>
<li>If you use Git, make sure that the project or solution is in your Git repo, and in a branch that you&#39;re building.</li>
</ul>
<p>Tips:</p>
<ul>
<li>You can also build MSBuild project (.&#42;proj) files.</li>
<li>If you are building a customized MSBuild project file, we recommend you use the <a href="msbuild.md" data-raw-source="[MSBuild task](msbuild.md)">MSBuild task</a> instead of the Visual Studio Build task.</li>
</ul>
</td>
</tr>


<tr>
<td>MSBuild Arguments</td>
<td>You can pass additional arguments to MSBuild. For syntax, see <a href="https://msdn.microsoft.com/library/ms164311.aspx" data-raw-source="[MSBuild Command-Line Reference](https://msdn.microsoft.com/library/ms164311.aspx)">MSBuild Command-Line Reference</a>.</td>
</tr>
<tr>
<td>Platform</td>
<td><p>Specify the platform you want to build such as <code>Win32</code>, <code>x86</code>, <code>x64</code> or <code>any cpu</code>.</p>
<p>Tips:</p>
<ul>
<li>If you are targeting an MSBuild project (.&#42;proj) file instead of a solution, specify <code>AnyCPU</code> (no whitespace).</li>
<li>Declare a build variable such as <code>BuildPlatform</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildPlatform)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</li>
</ul>
</td>
</tr>
<tr>
<td>Configuration</td>
<td><p>Specify the configuration you want to build such as <code>debug</code> or <code>release</code>.</p>
<p>Tip: Declare a build variable such as <code>BuildConfiguration</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildConfiguration)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</p>
</td>
</tr>
<tr>
<td>Clean</td>
<td>
<p>Set to False if you want to make this an incremental build. This setting might reduce your build time, especially if your codebase is large. This option has no practical effect unless you also set Clean repository to False.</p>
<p>Set to True if you want to rebuild all the code in the code projects. This is equivalent to the MSBuild <code>/target:clean</code> argument.</p>
</td>
</tr>
<tr>
<td>Restore NuGet Packages</td>
<td><strong>(Important)</strong> This option is deprecated. Make sure to clear this checkbox and instead use the <a href="~/pipelines/tasks/package/nuget.md" data-raw-source="[NuGet Installer](../package/nuget.md)">NuGet Installer</a> build task.</td>
</tr>

<tr>
<td>Visual Studio Version</td>
<td><p>To avoid problems overall, you must make sure this value matches the version of Visual Studio used to create your solution.</p>
<p>The value you select here adds the <code>/p:VisualStudioVersion={numeric_visual_studio_version}</code> argument to the MSBuild command run by the build. For example, if you select <strong>Visual Studio 2015</strong>, <code>/p:VisualStudioVersion=14.0</code> is added to the MSBuild command.
</p>
<blockquote>
<p><strong>Azure Pipelines:</strong>If your team wants to use Visual Studio 2017 with the Microsoft-hosted agents, select <strong>Hosted VS2017</strong> as your default build pool. See <a href="../../agents/hosted.md" data-raw-source="[Microsoft-hosted agents](../../agents/hosted.md)">Microsoft-hosted agents</a>.</p>
</blockquote>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>


<tr>
<td>MSBuild Architecture</td>
<td><p>Select either MSBuild x86 or MSBuild x64.</p>
<p>Tip: Because Visual Studio runs as a 32-bit application, you could experience problems when your build is processed by a build agent that is running the 64-bit version of Team Foundation Build Service. By selecting MSBuild x86, you might resolve these kinds of problems.</p>
</td>
</tr>


<tr>
<td>Record Project Details</td>
<td>
Select this checkbox if you want details about how much time was needed to build each project. You can see these details when you select this build step in a completed build.
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>
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
