---
title: Xamarin.iOS build and release task
ms.custom: seodec18
description: Xamarin.iOS build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 00000000-0000-0000-0000-000000000000
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Xamarin.iOS task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build an iOS app with Xamarin on macOS.

## Demands

Xamarin.iOS

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/XamariniOSV2.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Solution</td><td>(Required) Relative path from the repository root of the Xamarin.iOS solution to build. May contain wildcards.</td></tr>
<tr><td>Configuration</td><td>(Required) Standard configurations are Ad-Hoc, AppStore, Debug, Release.</td></tr>
<tr><td>Clean</td><td>(Optional) Run a clean build (/t:clean) prior to the build.</td></tr>
<tr><td>Create app package</td><td>(Required) Indicates whether an IPA should be generated as a part of the build.</td></tr>
<tr><td>Build for iOS Simulator</td><td>(Optional) Optionally build for the iOS Simulator instead of physical iOS devices.</td></tr>
<tr><td>Run NuGet restore</td><td>(Required) Optionally run `nuget restore` on the Xamarin iOS solution to install all referenced packages before build. The 'nuget' tool in the PATH of the build agent machine will be used. To use a different version of NuGet or set additional arguments, use the [NuGet Tool Installer](https://go.microsoft.com/fwlink/?linkid=852538) task.</td></tr>
<tr><td>Arguments</td><td>(Optional) Additional command line arguments that should be used to build.</td></tr>
<tr><td>Working directory</td><td>(Optional) Working directory in which builds will run. When empty, the root of the repository is used.</td></tr>
<tr><td>Build tool path</td><td>(Optional) Optionally supply the full path to MSBuild (the Visual Studio for Mac build tool). When empty, the default MSBuild path is used.</td></tr>
<tr><td>Signing identity</td><td>(Optional) Optionally override the signing identity that will be used to sign the build. If nothing is entered, the setting in the project will be used.</td></tr>
<tr><td>Provisioning profile UUID</td><td>(Optional) Optional UUID of an installed provisioning profile to be used for this build.</td></tr>
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
