---
title: Xamarin.iOS build and release task
ms.custom: seodec18
description: Xamarin.iOS build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 00000000-0000-0000-0000-000000000000
ms.author: vijayma
author: vijayma
ms.date: 12/23/2019
monikerRange: '>= tfs-2015'
---

# Xamarin.iOS task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task in a pipeline to build an iOS app with Xamarin on macOS. For more information, see the [Xamarin guidance](../../ecosystems/xamarin.md) and [Sign your app during CI](../../apps/mobile/app-signing.md).

## Demands

Xamarin.iOS

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/XamariniOSV2.md)]

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
      <td>(Required) Relative path from the repository root of the Xamarin.iOS solution or csproj project to build. May contain wildcards. <br/>Default value: **/*.sln <br/>Argument aliases: <code>solutionFile</code></td>
   </tr>
   <tr>
      <td><code>configuration</code><br/>Configuration</td>
      <td>(Required) Standard configurations are Ad-Hoc, AppStore, Debug, Release. <br/>Default value: Release</td>
   </tr>
   <tr>
      <td><code>clean</code><br/>Clean</td>
      <td>(Optional) Run a clean build (/t:clean) prior to the build.<br/>Default value: false</td>
   </tr>
   <tr>
      <td><code>packageApp</code><br/>Create app package</td>
      <td>(Required) Indicates whether an IPA should be generated as a part of the build.<br/>Default value: true</td>
   </tr>
   <tr>
      <td><code>forSimulator</code><br/>Build for iOS Simulator</td>
      <td>(Optional) Optionally build for the iOS Simulator instead of physical iOS devices. <br/>Default value: false <br/>Argument aliases: <code>buildForSimulator</code></td>
   </tr>
   <tr>
      <td><code>runNugetRestore</code><br/>Run NuGet restore</td>
      <td>(Required) Optionally run <code>nuget restore</code> on the Xamarin iOS solution to install all referenced packages before build. The &#39;nuget&#39; tool in the PATH of the build agent machine will be used. To use a different version of NuGet or set additional arguments, use the <a href="/azure/devops/pipelines/tasks/tool/nuget" data-raw-source="[NuGet Tool Installer](../tool/nuget.md)">NuGet Tool Installer</a> task. <br/>Default value: false</td>
   </tr>
   <tr>
      <td><code>args</code><br/>Arguments</td>
      <td>(Optional) Additional command line arguments that should be used to build.</td>
   </tr>
   <tr>
      <td><code>cwd</code><br/>Working directory</td>
      <td>(Optional) Working directory in which builds will run. When empty, the root of the repository is used. <br/>Argument aliases: <code>workingDirectory</code></td>
   </tr>
   <tr>
      <td><code>buildToolLocation</code><br/>Build tool path</td>
      <td>(Optional) Optionally supply the full path to MSBuild (the Visual Studio for Mac build tool). When empty, the default MSBuild path is used. <br/>Argument aliases: <code>mdtoolFile</code>, <code>mdtoolLocation</code></td>
   </tr>
   <tr>
      <td><code>iosSigningIdentity</code><br/>Signing identity</td>
      <td>(Optional) Optionally override the signing identity that will be used to sign the build. If nothing is entered, the setting in the project will be used. <br/>Argument aliases: <code>signingIdentity</code></td>
   </tr>
   <tr>
      <td><code>provProfileUuid</code><br/>Provisioning profile UUID</td>
      <td>(Optional) Optional UUID of an installed provisioning profile to be used for this build. <br/>Argument aliases: <code>signingProvisioningProfileID</code></td>
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