---
title: Xamarin.iOS build and release task
ms.custom: seodec18
description: Xamarin.iOS build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 00000000-0000-0000-0000-000000000000
ms.manager: douge
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
Click the <strong>...</strong> button and select your solution.
</td>
</tr>
<tr>
<td>Configuration</td>
<td>
Specify a configuration such as `Ad-Hoc`, `AppStore`, `Debug`, or `Release`
</td>
</tr>
<tr>
<td>Create App Package</td>
<td>
Select if you want to create an .IPA app package file.
</td>
</tr>
<tr>
<td>Build for iOS Simulator</td>
<td>
Select if you want to build for the iOS Simulator instead of for physical iOS devices.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">(Optional) Signing &amp; Provisioning</th>
</tr>
<tr>
<td>Override Using (Optional)</td>
<td>
<p>If the build should use a signing or provisioning method that is different than the default, choose that method here.</p>
<p>Choose **File Contents** to use a P12 certificate and provisioning profile.
Choose **Identifiers** to retrieve signing settings from the default Keychain and pre-installed profiles.</p>
<p>Leave the corresponding fields blank if you do not wish to override default build settings.</p>
</td>
</tr>
<tr>
<td>P12 Certificate File</td>
<td>
Relative path to a PKCS12-formatted .p12 certificate file that contains a signing certificate to be used for this build.
</td>
</tr>
<tr>
<td>P12 Password</td>
<td>
Password to the .p12 file.
<blockquote><strong>Important: </strong> Use a [secret variable](../../build/variables.md) to avoid exposing this value.</blockquote>
</td>
</tr>
<tr>
<td>Provisioning Profile File</td>
<td>
Relative path to .mobileprovision file that contains the provisioning profile override to be used for this build.
</td>
</tr>
<tr>
<td>Remove Profile After Build</td>
<td>
Select if you want the contents of the provisioning profile file to be removed from the build agent after the build is complete.
<blockquote><strong>Important: </strong> Select only if you are running one agent per user.</blockquote>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td>
(Optional) Specify additional command-line arguments for this build.
</td>
</tr>
<tr>
<td>Working Directory</td>
<td>
Working directory for the build. If you leave it blank, it is the root of the repo.
</td>
</tr>
<tr>
<td>Xbuild Path</td>
<td>
(Optional) Specify the path to [xbuild](http://www.mono-project.com/docs/tools+libraries/tools/xbuild/). If you leave it blank, the default xbuild path is used.
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

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
