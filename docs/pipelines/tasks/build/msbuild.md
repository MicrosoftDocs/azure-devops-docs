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
ms.date: 12/23/2019
monikerRange: '>= tfs-2015'
---

# MSBuild task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

Use this task in a build or release pipeline to build with MSBuild.

## Demands

msbuild

> **Azure Pipelines:** If your team uses Visual Studio 2017 and you want to use the Microsoft-hosted agents, make sure you select as your default pool the **Hosted VS2017**. See [Microsoft-hosted agents](../../agents/hosted.md).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/MSBuildV1.md)]

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
      <td><code>solution</code><br/>Project</td>
      <td>
         <p>(Required) If you want to build a single project, click the <strong>...</strong> button and select the project.</p>
         <p>If you want to build multiple projects, specify search criteria. You can use a single-folder wildcard (<code><em>*</em></code>) and recursive wildcards (<code><em>**</em></code>). For example, <code><em>**.*</em>proj</code> searches for all MSBuild project (.*proj) files in all subdirectories.</p>
         <p>Make the sure the projects you specify are downloaded by this build pipeline. On the Repository tab:</p>
         <ul>
            <li>
               If you use TFVC, make sure that the  project is a child of one of the mappings on the Repository tab.
            </li>
            <li>If you use Git, make sure that the project or project is in your Git repo, in a branch that you&#39;re building.</li>
         </ul>
         <p>Tip: If you are building a solution, we recommend you use the <a href="visual-studio-build.md" data-raw-source="[Visual Studio build task](visual-studio-build.md)">Visual Studio build task</a> instead of the MSBuild task.</p><br/>Default value: **/*.sln
      </td>
   </tr>
   <tr>
      <td><code>msbuildLocationMethod</code><br/>MSBuild</td>
      <td>(Optional) <br/>Default value: version</td>
   </tr>
   <tr>
      <td><code>msbuildVersion</code><br/>MSBuild Version</td>
      <td>(Optional) If the preferred version cannot be found, the latest version found will be used instead. On an macOS agent, xbuild (Mono) will be used if version is lower than 15.0<br/>Default value: latest</td>
   </tr>
   <tr>
      <td><code>msbuildArchitecture</code><br/>MSBuild Architecture</td>
      <td>(Optional) Optionally supply the architecture (x86, x64) of MSBuild to run<br/>Default value: x86</td>
   </tr>
   <tr>
      <td><code>msbuildLocation</code><br/>Path to MSBuild</td>
      <td>(Optional) Optionally supply the path to MSBuild</td>
   </tr>
   <tr>
      <td><code>platform</code><br/>Platform</td>
      <td>
         <p>(Optional) Specify the platform you want to build such as <code>Win32</code>, <code>x86</code>, <code>x64</code> or <code>any cpu</code>.</p>
         <p>Tips:</p>
         <ul>
            <li>If you are targeting an MSBuild project (.&#42;proj) file instead of a solution, specify <code>AnyCPU</code> (no whitespace).</li>
            <li>Declare a build variable such as <code>BuildPlatform</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildPlatform)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td><code>configuration</code><br/>Configuration</td>
      <td>
         <p>(Optional) Specify the configuration you want to build such as <code>debug</code> or <code>release</code>.</p>
         <p>Tip: Declare a build variable such as <code>BuildConfiguration</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildConfiguration)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</p>
      </td>
   </tr>
   <tr>
      <td><code>msbuildArguments</code><br/>MSBuild Arguments</td>
      <td>(Optional) Additional arguments passed to MSBuild (on Windows) and xbuild (on macOS)</td>
   </tr>
   <tr>
      <td><code>clean</code><br/>Clean</td>
      <td>
         <p>Set to False if you want to make this an incremental build. This setting might reduce your build time, especially if your codebase is large. This option has no practical effect unless you also set Clean repository to False.</p>
         <p>Set to True if you want to rebuild all the code in the code projects. This is equivalent to the MSBuild <code>/target:clean</code> argument.</p>
         <p>See, <a href="../../repos/pipeline-options-for-git.md#clean-the-local-repo-on-the-agent">repo options</a></p>
         <br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>maximumCpuCount</code><br/>Build in Parallel</td>
      <td>(Optional) If your MSBuild target configuration is compatible with building in parallel, you can optionally check this input to pass the /m switch to MSBuild (Windows only). If your target configuration is not compatible with building in parallel, checking this option may cause your build to result in file-in-use errors, or intermittent or inconsistent build failures. <br/>Default value: false</td>
   </tr>
   <tr>
      <td><code>restoreNugetPackages</code><br/>Restore NuGet Packages</td>
      <td><strong>(Important)</strong> This option is deprecated. Make sure to clear this checkbox and instead use the <a href="../package/prev-versions/nuget-installer-0.md" data-raw-source="[NuGet Installer](../package/prev-versions/nuget-installer-0.md)">NuGet Installer</a> build task. <br/>Default value: false</td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>logProjectEvents</code><br/>Record Project Details</td>
      <td>
         Optionally record timeline details for each project (Windows only) <br/>Default value: false
      </td> 
   </tr>
   <tr>
      <td><code>createLogFile</code><br/>Create Log File</td>
      <td>
         <p>Optionally create a log file (Windows only)</p><br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>logFileVerbosity</code><br/>Log File Verbosity</td>
      <td>
         <p>Optional log file verbosity</p> <br/>Default value: normal
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

In some cases, you might need to use the MSBuild task. For example, you should use it if you are building code projects apart from a solution.

### Where can I learn more about MSBuild?

[MSBuild reference](https://msdn.microsoft.com/library/dd393574.aspx)

[MSBuild command-line reference](https://msdn.microsoft.com/library/ms164311.aspx)

<a name="multiconfiguration"></a>
### How do I build multiple configurations for multiple platforms?

<ol>
   <li>
      <p>
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
   <li>
      <p>On the Options tab, select <strong>MultiConfiguration</strong> and specify the Multipliers, separated by commas. For example: <code>BuildConfiguration, BuildPlatform</code></p>
      <p>Select Parallel if you want to distribute the jobs (one for each combination of values) to multiple agents in parallel if they are available.</p>
   </li>
   <li>
      <p>On the Build tab, select this step and specify the Platform and Configuration arguments. For example:</p>
      <ul>
         <li>Platform: <code>$(BuildPlatform)</code></li>
         <li>Configuration: <code>$(BuildConfiguration)</code></li>
      </ul>
   </li>
</ol>

### Can I build TFSBuild.proj files?

You cannot build TFSBuild.proj files. These kinds of files are generated by TFS 2005 and 2008.  These files contain tasks and targets are supported only using [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
