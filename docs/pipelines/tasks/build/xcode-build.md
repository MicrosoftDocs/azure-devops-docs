---
title: Xcode Build build and release task
ms.custom: seodec18
description: Xcode Build build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 37B7092E-9205-4050-BBC8-E35C3A4B0A8A
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.date: 08/10/2016
monikerRange: '>= tfs-2015 <= tfs-2018'
---

# Xcode Build task

**[Azure Pipelines](xcode.md) | TFS 2018 | TFS 2017 | TFS 2015**

Use this task in a build or release pipeline to build an Xcode workspace on macOS.

## Demands

xcode

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Actions</td>
<td>
Space-delimited list of actions.  Valid options are <code>build</code>, <code>clean</code>, <code>test</code>, <code>analyze</code>, and <code>archive</code>.  For example: <code>clean build</code> would run a clean build.  See <a href="https://developer.apple.com/library/archive/technotes/tn2339/_index.html" data-raw-source="[Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)">Apple: Building from the command line with Xcode FAQ</a>.
</td>
</tr>
<tr>
<td>Configuration</td>
<td>
The default value is <code>$(Configuration)</code>. Make sure to specify a value (for example, <code>Release</code>) on the <a href="../../build/variables.md" data-raw-source="[variables tab](../../build/variables.md)">variables tab</a>.
</td>
</tr>
<tr>
<td>SDK</td>
<td>
The default value is <code>$(SDK)</code>. Make sure to specify a value (for example, <code>iphonesimulator</code>) on the <a href="../../build/variables.md" data-raw-source="[variables tab](../../build/variables.md)">variables tab</a>.
</td>
</tr>
<tr>
<td>Workspace Path</td>
<td>
(Optional) Relative path from repo root to where the xcworkspace folder exists. If you specify a value, you must also specify the Scheme. Do not specify a value if you are specifying the <strong>-target</strong> flag in Advanced, Arguments (described below).
</td>
</tr>
<tr>
<td>Scheme</td>
<td>
(Optional, unless you specify the Workspace Path, described above.) Scheme name in Xcode. Must be a shared scheme (with shared check box under managed schemes in Xcode selected).
</td>
</tr>
<tr>
<td>Create App Package</td>
<td>
Select if you want to create an .IPA app package file.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">(Optional) Signing &amp; Provisioning</th>
</tr>
<tr>
<td>Xcode 8 Automatic Signing</td>
<td>
Select this if you have an Xcode 8 project setup for Automatic Signing.
</td>
</tr>
<tr>
<td>Team ID</td>
<td>
(Optional) Specify the 10 digit developer Team ID. This is required if you are a member of multiple development teams.
</td>
</tr>
<tr>
<td>Override Using (Optional)</td>
<td>
<p>If the build should use a signing or provisioning method that is different than the default, choose that method here.</p>
<p>Choose <strong>File Contents</strong> to use a P12 certificate and provisioning profile.
Choose <strong>Identifiers</strong> to retrieve signing settings from the default Keychain and pre-installed profiles.</p>
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
<blockquote><strong>Important: </strong> Use a <a href="../../build/variables.md" data-raw-source="[secret variable](../../build/variables.md)">secret variable</a> to avoid exposing this value.</blockquote>
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
<th style="text-align: center" colspan="2">Package Options</th>
</tr>
<tr>
<td>Archive Path</td>
<td>
Optionally specify a directory where created archives should be placed.
</td>
</tr>
<tr>
<td>Export Path</td>
<td>
Optionally specify the destination for the product exported from the archive.
</td>
</tr>
<tr>
<td>Export Options</td>
<td>
Pick a way to pass in Export Options when exporting the archive. The task automatically detects the export method from the archive when the default <code>Auto</code> is selected.
You can specify the export method and Team ID in the task by selecting <code>Specify</code> or provide the export options via a plist file by choosing <code>Plist</code>.
</td>
</tr>
<tr>
<td>Export Method</td>
<td>
Method for how Xcode should export the archive. E.g. app-store, package, ad-hoc, enterprise, development.
</td>
</tr>
<tr>
<td>Team ID</td>
<td>
The 10 digit Team ID from the Apple Developer Portal to use for this export.
</td>
</tr>
<tr>
<td>Export Options Plist</td>
<td>
Path to a plist file that configures archive exporting.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td>
(Optional) Specify additional command-line arguments for this build. See <a href="https://developer.apple.com/library/archive/technotes/tn2339/_index.html" data-raw-source="[Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)">Apple: Building from the command line with Xcode FAQ</a>.
</td>
</tr>
<tr>
<td>Working Directory</td>
<td>
Working directory for the build. If you leave it blank, it is the root of the repo.
</td>
</tr>
<tr>
<td>Output Directory</td>
<td>
Relative path where build output (binaries) will be placed. The default value includes build variables. Make sure to specify values on the <a href="../../build/variables.md" data-raw-source="[variables tab](../../build/variables.md)">variables tab</a>.
</td>
</tr>
<tr>
<td>Xcode Developer Path</td>
<td>
(Optional) Path to Xcode Developer folder if you are not using the system default. Specify this argument when you&#39;ve got multiple versions of Xcode installed your build agent. For example: <code>/Applications/Xcode 7.app/Contents/Developer</code>
</td>
</tr>
<tr>
<td>Use xcpretty</td>
<td>
Use <a href="https://github.com/supermarin/xcpretty/blob/master/README.md" data-raw-source="[xcpretty](https://github.com/supermarin/xcpretty/blob/master/README.md)">xcpretty</a> to format xcodebuild output and generate JUnit test results report. You must have xcpretty installed on the agent.
<blockquote>If you select this option, make sure that <strong>Use xctool</strong> is cleared.</blockquote>
</td>
</tr>
<tr>
<td>Publish to Azure Pipelines/TFS</td>
<td>
If you have selected Use xcpretty (described above), select this option if you want to publish JUnit Test results to Azure Pipelines/TFS.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">xctool (deprecated)</th>
</tr>
<tr>
<td>Use xctool</td>
<td>
Select if you want to run <a href="https://github.com/facebook/xctool/blob/master/README.md" data-raw-source="[xctool](https://github.com/facebook/xctool/blob/master/README.md)">xctool</a> instead of <a href="https://developer.apple.com/library/archive/technotes/tn2339/_index.html" data-raw-source="[xcodebuild](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)">xcodebuild</a>. You must have xctool installed on the agent.
<blockquote>If you select this option, make sure that <strong>Use xcpretty</strong> is cleared.</blockquote>
</td>
</tr>
<tr>
<td>xctool Test Reporter Format</td>
<td>
You can specify this argument if you have selected Use xctool and included <code>test</code> in Actions (arguments described above). Specify <code>junit:output-file-path-here.xml</code> to generate a file that you can publish using the <a href="https://github.com/Microsoft/vso-agent-tasks/tree/master/Tasks/PublishTestResults" data-raw-source="[Publish Test Results](https://github.com/Microsoft/vso-agent-tasks/tree/master/Tasks/PublishTestResults)">Publish Test Results</a> task. When specified, <code>plain</code> is automatically added as well.
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Example

[Build and test Xcode projects](../../ecosystems/xcode.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
