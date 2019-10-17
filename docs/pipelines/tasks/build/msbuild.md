---
title: MSBuild build and release task
ms.custom: seodec18
description: MSBuild build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A104BE40-2BFD-4E80-828B-F50944C12107
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
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
<p>If you want to build multiple projects, specify search criteria. You can use a single-folder wildcard (<code><em>*</em></code>) and recursive wildcards (<code><em>**</em></code>). For example, <code><em>**.*</em>proj</code> searches for all MSBuild project (.*proj) files in all subdirectories.</p>
<p>Make the sure the projects you specify are downloaded by this build pipeline. On the Repository tab:</p>
<ul>
<li>
If you use TFVC, make sure that the  project is a child of one of the mappings on the Repository tab.
</li>
<li>If you use Git, make sure that the project or project is in your Git repo, in a branch that you&#39;re building.</li>
</ul>
<p>Tip: If you are building a solution, we recommend you use the <a href="visual-studio-build.md" data-raw-source="[Visual Studio build task](visual-studio-build.md)">Visual Studio build task</a> instead of the MSBuild task.</p>
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
<th style="text-align: center" colspan="2">Advanced</th>
</tr>


<tr>
<td>Record Project Details</td>
<td>
Select this checkbox if you want details about how much time was needed to build each project. You can see these details when you select this build step in a completed build.
</td>
</tr>

<tr>
<td>MSBuild</td>
<td>
<p>In some cases you might need more control over the version of MSBuild that you are running.</p>

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

### Should I use the Visual Studio Build task or the MSBuild task?

If you are building a solution, in most cases you should use the [Visual Studio Build task](../build/visual-studio-build.md). This task automatically:

* Sets the ```/p:VisualStudioVersion``` property for you. This forces MSBuild to use a particular set of targets that increase the likelihood of a successful build.

* Specifies the MSBuild version argument.

In some cases you might need to use the MSBuild task. For example, you should use it if you are building code projects apart from a solution.

### Where can I learn more about MSBuild?

[MSBuild reference](https://msdn.microsoft.com/library/dd393574.aspx)

[MSBuild command-line reference](https://msdn.microsoft.com/library/ms164311.aspx)

<a name="multiconfiguration"></a>
### How do I build multiple configurations for multiple platforms?

<ol>
<li><p>
On the Variables tab, make sure you&#39;ve got variables defined for your configurations and platforms. To specify multiple values, separate them with commas.
</p>
<p>For example, for a .NET app you could specify:</p>
<table>
<thead>
<tr>
<td>Name</td>
<td>Value</td>
</tr>
</thead>
<tr>
<td>BuildConfiguration</td>
<td>debug, release</td>
</tr>
<tr>
<td>BuildPlatform</td>
<td>any cpu</td>
</tr>
</table>

<p>For example, for a C++ app you could specify:</p>
<table>
<thead>
<tr>
<td>Name</td>
<td>Value</td>
</tr>
</thead>
<tr>
<td>BuildConfiguration</td>
<td>debug, release</td>
</tr>
<tr>
<td>BuildPlatform</td>
<td>x86, x64</td>
</tr>
</table>
</li>
<li><p>On the Options tab select <strong>MultiConfiguration</strong> and specify the Multipliers, separated by commas. For example: <code>BuildConfiguration, BuildPlatform</code></p>
<p>Select Parallel if you want to distribute the jobs (one for each combination of values) to multiple agents in parallel if they are available.</p>
</li>
<li><p>On the Build tab, select this step and specify the Platform and Configuration arguments. For example:</p>
<ul>
<li>Platform: <code>$(BuildPlatform)</code></li>
<li>Configuration: <code>$(BuildConfiguration)</code></li>
</ul>
</li>
</ol>

### Can I build TFSBuild.proj files?

You cannot build TFSBuild.proj files. These kinds of files are generated by TFS 2005 and 2008.  These files contain tasks and targets are supported only using [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
