---
title: Xamarin.Android build and release task
ms.custom: seodec18
description: Xamarin.Android build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: F9D118B6-BA56-406C-8223-6934F6BCBEA1
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Xamarin.Android task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build an Android app with .

## Demands

AndroidSDK, MSBuild, Xamarin.Android

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/XamarinAndroidV1.md)]
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
<p>If you want to build a single Xamarin.Android project, click the <strong>...</strong> button and select the project.</p>
<p>If you want to build multiple projects, specify search criteria. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```). For example, ```**/*.Android.csproj``` searches for all Android.csproj files in all subdirectories in your repo.</p>
<p>Note: The projects must have a PackageForAndroid target.</p>
</td>
</tr>
<tr>
<td>Target</td>
<td>
(Optional) Specify the project targets you want to build. Use a semicolon to separate multiple targets.
</td>
</tr>
<tr>
<td>Output Directory</td>
<td>
Use a [variable](../../build/variables.md) to specify the folder where you want the output files to go. For example: ```$(build.binariesdirectory)/$(BuildConfiguration)```
</td>
</tr>
<tr>
<td>Configuration</td>
<td><p>Specify the configuration you want to build such as ```debug``` or ```release```.</p>
<p>Tip: Declare a build variable such as ```BuildConfiguration``` on the Variables tab (selecting Allow at Queue Time) and reference it here as ```$(BuildConfiguration)```. This way you can modify the platform when you queue the build and enable building multiple configurations.</p>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">MSBuild Options</th>
</tr>
<tr>
<td>MSBuild Location</td>
<td>
(Optional) Path to MSBuild (on Windows) or xbuild (on macOS).  Default behavior is to search for the latest version.
</td>
</tr>
<tr>
<td>Additional Arguments</td>
<td>
You can pass additional arguments to MSBuild (on Windows) or xbuild (on macOS). For syntax, see [MSBuild Command-Line Reference](https://msdn.microsoft.com/library/ms164311.aspx).
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">JDK Options</th>
</tr>
<tr>
<td>Select JDK to use for the build</td>
<td>
Pick the JDK to be used during the build by selecting a JDK version that will be discovered during builds or by manually entering a JDK path.
<ul>
<li>JDK Version: Select the JDK version you want to use.</li>
<li>JDK Path: Specify the path to the JDK you want to use.</li>
</ul>
</td>
</tr>
<tr>
<td>JDK Architecture</td>
<td>
Select x86 or x64.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

[Build your Xamarin app](../../apps/mobile/xamarin.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
