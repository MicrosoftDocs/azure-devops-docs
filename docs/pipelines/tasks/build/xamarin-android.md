---
title: Xamarin.Android build and release task
ms.custom: seodec18
description: Xamarin.Android build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: F9D118B6-BA56-406C-8223-6934F6BCBEA1
ms.author: vijayma
author: vijayma
ms.date: 12/23/2019
monikerRange: '>= tfs-2015'
---

# Xamarin.Android task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to build an Android app with Xamarin.

## Demands

AndroidSDK, MSBuild, Xamarin.Android

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/XamarinAndroidV1.md)]

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
      <td><code>project</code><br/>Project</td>
      <td>
         (Required) Relative path from repo root of Xamarin.Android project(s) to build.  Wildcards can be used <a href= "/azure/devops/pipelines/tasks/file-matching-patterns">more information</a>. <br/> For example, <code>**/*.csproj</code> for all csproj files in all subfolders. The project must have a PackageForAndroid target if <code>Create App Package</code> is selected.
         <br/>Default value: **/*.csproj
         <br/>Argument aliases: <code>projectFile</code>
      </td>
   </tr>
   <tr>
      <td><code>target</code><br/>Target</td>
      <td>
         (Optional) Build these targets in this project. Use a semicolon to separate multiple targets.
      </td>
   </tr>
   <tr>
      <td><code>outputDir</code><br/>Output Directory</td>
      <td>
         Optionally provide the output directory for the build. <br/> Example: <b>$(build.binariesDirectory)/bin/Release</b> <br/>Argument aliases: <code>outputDirectory</code>
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
      <td><code>createAppPackage</code><br/>Create app package</td>
      <td>
         (Optional) Passes the target (/t:PackageForAndroid) during build to generate an APK. <br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>clean</code><br/>Clean</td>
      <td>
         (Optional) Passes the clean target (/t:clean) during build <br/>Default value: false
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">MSBuild Options</th>
   </tr>
   <tr>
      <td><code>msbuildLocationMethod</code><br/>MSBuild</td>
      <td>
         (Optional) Path to MSBuild (on Windows) or xbuild (on macOS).  Default behavior is to search for the latest version. <br/>Default value: version
         <br/>Argument aliases: <code>msbuildLocationOption</code>
      </td>
   </tr>
   <tr>
      <td><code>msbuildVersion</code><br/>MSBuild version</td>
      <td>
         (Optional) If the preferred version cannot be found, the latest version found will be used instead. On macOS, xbuild (Mono) or MSBuild (Visual Studio for Mac) will be used.<br/>Default value: 15.0
         <br/>Argument aliases: <code>msbuildVersionOption</code>
      </td>
   </tr>
   <tr>
      <td><code>msbuildLocation</code><br/>MSBuild location</td>
      <td>
         (Required) Optionally supply the path to MSBuild (on Windows) or xbuild (on macOS)<br/>Default value: version
         <br/>Argument aliases: <code>msbuildFile</code>
      </td>
   </tr>
   <tr>
      <td><code>msbuildArchitecture</code><br/>MSBuild architecture</td>
      <td>
         Optionally supply the architecture (x86, x64) of MSBuild to run<br/>Default value: x86
         <br/>Argument aliases: <code>msbuildArchitectureOption</code>
      </td>
   </tr>
   <tr>
      <td><code>msbuildArguments</code><br/>Additional Arguments</td>
      <td>
         (Optional) Additional arguments passed to MSBuild (on Windows) or xbuild (on macOS).
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">JDK Options</th>
   </tr>
   <tr>
      <td><code>jdkSelection</code><br/>Select JDK to use for the build</td>
      <td>
         (Required) Pick the JDK to be used during the build by selecting a JDK version that will be discovered during builds or by manually entering a JDK path.
         <ul>
            <li>JDK Version: Select the JDK version you want to use.</li>
            <li>JDK Path: Specify the path to the JDK you want to use.</li>
         </ul>
         <br/>Default value: JDKVersion
         <br/>Argument aliases: <code>jdkOption</code>
      </td>
   </tr>
   <tr>
      <td><code>jdkVersion</code><br/>JDK version</td>
      <td>
         (Optional) Use the selected JDK version during build.
         <br/>Default value: default
         <br/>Argument aliases: <code>jdkVersionOption</code>
      </td>
   </tr>
   <tr>
      <td><code>jdkUserInputPath</code><br/>JDK path</td>
      <td>
         (Required) Use the selected JDK version during build.
         <br/>Default value: default
         <br/>Argument aliases: <code>jdkDirectory</code>
      </td>
   </tr>
   <tr>
      <td><code>jdkArchitecture</code><br/>JDK Architecture</td>
      <td>
         Optionally supply the architecture (x86, x64) of JDK
         <br/>Default value: x64
         <br/>Argument aliases: <code>jdkArchitectureOption</code>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Example

[Build your Xamarin app](../../ecosystems/xamarin.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->