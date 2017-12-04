---
title: Xamarin.iOS build and release task
description: Xamarin.iOS build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 00000000-0000-0000-0000-000000000000
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Build: Xamarin.iOS

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/xamarin-ios.png) Build an iOS app with Xamarin on macOS


## Demands

Xamarin.iOS


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
<blockquote><strong>Important: </strong> Use a [secret variable](../../concepts/definitions/build/variables.md) to avoid exposing this value.</blockquote>
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


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
