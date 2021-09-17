---
title: Visual Studio Build build and release task
ms.custom: seodec18
description: Visual Studio Build build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 11E76804-BA67-4086-9CF1-8CB2887169BA
ms.author: vijayma
author: vijayma
ms.date: 12/23/2019
monikerRange: '>= tfs-2015'
---

# Visual Studio Build task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

Use this task to build with MSBuild and set the Visual Studio version property.

## Demands

msbuild, visualstudio

> **Azure Pipelines:** If your team wants to use Visual Studio 2017 with the Microsoft-hosted agents, select **vs2017-win2016** as your default build pool. See [Microsoft-hosted agents](../../agents/hosted.md).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/VSBuildV1.md)]

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
      <td><code>solution</code><br/>Solution</td>
      <td>
         <p>(Required) If you want to build a single solution, click the <strong>...</strong> button and select the solution.</p>
         <p>If you want to build multiple solutions, specify search criteria. You can use a single-folder wildcard (`*`) and recursive wildcards (`**`). For example, `**.sln` searches for all <em>.sln</em> files in all subdirectories.</p>
         <p>Make sure the solutions you specify are downloaded by this build pipeline. On the Repository tab:</p>
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
         <br/>Default value: **\*.sln
      </td>
   </tr>
   <tr>
      <td><code>vsVersion</code><br/>Visual Studio Version</td>
      <td>
         <p>To avoid problems overall, you must make sure this value matches the version of Visual Studio used to create your solution.</p>
         <p>The value you select here adds the <code>/p:VisualStudioVersion={numeric_visual_studio_version}</code> argument to the MSBuild command run by the build. For example, if you select <strong>Visual Studio 2015</strong>, <code>/p:VisualStudioVersion=14.0</code> is added to the MSBuild command.</p>
         <blockquote>
            <p><strong>Azure Pipelines:</strong>If your team wants to use Visual Studio 2017 with the Microsoft-hosted agents, select <strong>vs2017-win2016</strong> as your default build pool. See <a href="../../agents/hosted.md" data-raw-source="[Microsoft-hosted agents](../../agents/hosted.md)">Microsoft-hosted agents</a>.</p>
         </blockquote>
         <br/>Default value: latest
      </td>
   </tr>
   <tr>
      <td><code>msbuildArgs</code><br/>MSBuild Arguments</td>
      <td>(Optional) You can pass additional arguments to MSBuild. For syntax, see <a href="/visualstudio/msbuild/msbuild-command-line-reference" data-raw-source="[MSBuild Command-Line Reference](/visualstudio/msbuild/msbuild-command-line-reference)">MSBuild Command-Line Reference</a>.</td>
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
      <td><code>clean</code><br/>Clean</td>
      <td>
         <p>(Optional) Set to False if you want to make this an incremental build. This setting might reduce your build time, especially if your codebase is large. This option has no practical effect unless you also set Clean repository to False.</p>
         <p>Set to True if you want to rebuild all the code in the code projects. This is equivalent to the MSBuild <code>/target:clean</code> argument.</p>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>maximumCpuCount</code><br/>Build in Parallel</td>
      <td>(Optional) If your MSBuild target configuration is compatible with building in parallel, you can optionally check this input to pass the /m switch to MSBuild (Windows only). If your target configuration is not compatible with building in parallel, checking this option may cause your build to result in file-in-use errors, or intermittent or inconsistent build failures. <br/>Default value: false</td>
   </tr>
   <tr>
      <td><code>restoreNugetPackages</code><br/>Restore NuGet Packages</td>
      <td><strong>(Important)</strong> This option is deprecated. Make sure to clear this checkbox and instead use the <a href="~/pipelines/tasks/package/nuget.md" data-raw-source="[NuGet Installer](../package/nuget.md)">NuGet Installer</a> build task. <br/>Default value: false</td>
   </tr>
   <tr>
      <td><code>msbuildArchitecture</code><br/>MSBuild Architecture</td>
      <td>
         <p>Optionally supply the architecture (x86, x64) of MSBuild to run</p>
         <p>Tip: Because Visual Studio runs as a 32-bit application, you could experience problems when your build is processed by a build agent that is running the 64-bit version of Team Foundation Build Service. By selecting MSBuild x86, you might resolve these kinds of problems.</p>
         <br/>Default value: x86
      </td>
   </tr>
   <tr>
      <td><code>logProjectEvents</code><br/>Record Project Details</td>
      <td>
         Optionally record timeline details for each project
         <br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>createLogFile</code><br/>Create Log File</td>
      <td>
         Optionally create a log file (Windows only)
         <br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>logFileVerbosity</code><br/>Log File Verbosity</td>
      <td>
         Optional log file verbosity
         <br/>Default value: normal
      </td>
   </tr>
   <tr>
      <td><code>customVersion</code><br/>Custom Version</td>
      <td>
         <p>(Optional) Allows setting custom version of Visual Studio. Examples: <code>15.0</code>, <code>16.0</code>, <code>17.0</code>. </p>
         <p>Tip: Make sure that the required version of Visual Studio is installed in the system. </p>
         <blockquote>
            <p><strong>Azure Pipelines:</strong> If your team wants to use Visual Studio 2022 with the Microsoft-hosted agents, select <strong>windows-2022</strong> as your default build pool. For more info see <a href="../../agents/hosted.md" data-raw-source="[Microsoft-hosted agents](../../agents/hosted.md)">Microsoft-hosted agents</a>.</p>
         </blockquote>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/msbuild_qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->