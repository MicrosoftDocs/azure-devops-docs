---
title: Xcode build and release task
ms.custom: seodec18
description: Xcode build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 130B3990-0B64-41AE-9330-75AD7228B5C4
ms.manager: jillfra
ms.author: dastahel
ms.date: 04/18/2018
monikerRange: 'azure-devops'
---

# Xcode task

**Azure Pipelines | [TFS 2018](xcode-build.md) | [TFS 2017](xcode-build.md) | [TFS 2015](xcode-build.md)**

Use this task in a build or release pipeline to build, test, or archive an Xcode workspace on macOS, and optionally package an app.

## Demands

xcode

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/XcodeV5.md)]
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
<td>Actions</td>
<td>
Enter a space-delimited list of actions. Valid options are `build`, `clean`, `test`, `analyze`, and `archive`. For example, `clean build` will run a clean build. See [Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html).
</td>
</tr>
<tr>
<td>Configuration</td>
<td>
Enter the Xcode project or workspace configuration to be built. The default value of this field is the variable `$(Configuration)`. When using a variable, make sure to specify a value (for example, `Release`) on the [Variables](../../build/variables.md) tab.
</td>
</tr>
<tr>
<td>SDK</td>
<td>
Specify an SDK to use when building the Xcode project or workspace. From the macOS Terminal application, run `xcodebuild -showsdks` to display the valid list of SDKs. The default value of this field is the variable `$(SDK)`. When using a variable, make sure to specify a value (for example, `iphonesimulator`) on the [Variables](../../build/variables.md) tab.
</td>
</tr>
<tr>
<td>Workspace or project path</td>
<td>
(Optional) Enter a relative path from the root of the repository to the Xcode workspace or project. For example, `MyApp/MyApp.xcworkspace` or `MyApp/MyApp.xcodeproj`.
</td>
</tr>
<tr>
<td>Scheme</td>
<td>
(Optional) Enter a scheme name defined in Xcode. It must be a shared scheme, with its <strong>Shared</strong> checkbox enabled under <strong>Managed Schemes</strong> in Xcode. If you specify a <strong>Workspace or project path</strong> above without specifying a scheme, and the workspace has a single shared scheme, it will be automatically used.
</td>
</tr>
<tr>
<td>Xcode version</td>
<td>
Specify the target version of Xcode. Select `Default` to use the default version of Xcode on the agent machine. Selecting a version number (e.g. `Xcode 10`) relies on environment variables being set on the agent machine for the version's location (e.g. `XCODE_10_DEVELOPER_DIR=/Applications/Xcode_10.0.0.app/Contents/Developer`). Select `Specify path` to provide a specific path to the Xcode developer directory.
</td>
</tr>
<tr>
<td>Xcode developer path</td>
<td>
(Optional) Enter a path to a specific Xcode developer directory (e.g. `/Applications/Xcode_10.0.0.app/Contents/Developer`). This is useful when multiple versions of Xcode are installed on the agent machine.
</td>
</tr>

<tr>
<th style="text-align: center" colspan="2">(Optional) Signing &amp; provisioning</th>
</tr>
<tr>
<td>Signing style</td>
<td>
Choose the method of signing the build. Select `Do not code sign` to disable signing. Select `Project defaults` to use only the project's signing configuration. Select `Manual signing` to force manual signing and optionally specify a signing identity and provisioning profile. Select `Automatic signing` to force automatic signing and optionally specify a development team ID. If your project requires signing, use the "Install Apple..." tasks to install certificates and provisioning profiles prior to the Xcode build.
</td>
</tr>
<tr>
<td>Signing identity</td>
<td>
(Optional) Enter a signing identity override with which to sign the build. This may require unlocking the default keychain on the agent machine. If no value is entered, the Xcode project's setting will be used.
</td>
</tr>
<tr>
<td>Provisioning profile UUID</td>
<td>
(Optional) Enter the UUID of an installed provisioning profile to be used for this build. Use separate build tasks with different schemes or targets to specify separate provisioning profiles by target in a single workspace (iOS, tvOS, watchOS).
</td>
</tr>
<tr>
<td>Team ID</td>
<td>
(Optional, unless you are a member of multiple development teams.) Specify the 10-character development team ID.
</td>
</tr>

<tr>
<th style="text-align: center" colspan="2">Package options</th>
</tr>
<tr>
<td>Create app package</td>
<td>
Indicate whether an IPA app package file should be generated as a part of the build.
</td>
</tr>
<tr>
<td>Archive path</td>
<td>
(Optional) Specify a directory where created archives should be placed.
</td>
</tr>
<tr>
<td>Export path</td>
<td>
(Optional) Specify the destination for the product exported from the archive.
</td>
</tr>
<tr>
<td>Export options</td>
<td>
Select a way of providing options for exporting the archive. When the default value of `Automatic` is selected, the export method is automatically detected from the archive. Select `Plist` to specify a plist file containing export options. Select `Specify` to provide a specific <strong>Export method</strong> and <strong>Team ID</strong>.
</td>
</tr>
<tr>
<td>Export method</td>
<td>
Enter the method that Xcode should use to export the archive. For example: `app-store`, `package`, `ad-hoc`, `enterprise`, or `development`.
</td>
</tr>
<tr>
<td>Team ID</td>
<td>
(Optional) Enter the 10-character team ID from the Apple Developer Portal to use during export.
</td>
</tr>
<tr>
<td>Export options plist</td>
<td>
Enter the path to the plist file that contains options to use during export.
</td>
</tr>
<tr>
<td>Export arguments</td>
<td>
(Optional) Enter additional command line arguments to be used during export.
</td>
</tr>

<tr>
<th style="text-align: center" colspan="2">Devices &amp; simulators</th>
</tr>
<tr>
<td>Destination platform</td>
<td>
Select the destination device's platform to be used for UI testing when the generic build device isn't valid. Choose `Custom` to specify a platform not included in this list. When `Default` is selected, no simulators nor devices will be targeted.
</td>
</tr>
<tr>
<td>Destination type</td>
<td>
Choose the destination type to be used for UI testing. Devices must be connected to the Mac performing the build via a cable or network connection. See <strong>Devices and Simulators</strong> in Xcode.
</td>
</tr>
<tr>
<td>Simulators</td>
<td>
Enter an Xcode simulator name to be used for UI testing. For example, enter `iPhone X` (iOS and watchOS) or `Apple TV 4K` (tvOS). A target OS version is optional and can be specified in the format 'OS=<i>versionNumber</i>', such as `iPhone X,OS=11.1`. A list of simulators installed on the <strong>Hosted macOS</strong> agent can be [found here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.14-Readme.md#installed-sdks).
</td>
</tr>
<tr>
<td>Devices</td>
<td>
Enter the name of the device to be used for UI testing, such as `Raisa's iPad`. Only one device is currently supported. Note that Apple does not allow apostrophes (`'`) in device names. Instead, right single quotation marks (`'`) can be used.
</td>
</tr>

<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td>
(Optional) Enter additional command line arguments with which to build. This is useful for specifying `-target` or `-project` arguments instead of specifying a workspace/project and scheme. See [Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html).
</td>
</tr>
<tr>
<td>Working directory</td>
<td>
(Optional) Enter the working directory in which to run the build. If no value is entered, the root of the repository will be used.
</td>
</tr>
<tr>
<td>Output directory</td>
<td>
Enter a path relative to the working directory where build output (binaries) will be placed.
The default value includes variables. When these are used, make sure to specify values on the [Variables](../../build/variables.md) tab.
</td>
</tr>
<tr>
<td>Use xcpretty</td>
<td>
Specify whether to use xcpretty to format xcodebuild output and generate JUnit test results. Enabling this requires xcpretty to be installed on the agent machine. It is preinstalled on Microsoft-hosted build agents. See [xcpretty](https://github.com/supermarin/xcpretty) on GitHub.
</td>
</tr>
<tr>
<td>Publish test results to Azure Pipelines/TFS</td>
<td>
If xcpretty is enabled above, specify whether to publish JUnit test results to Azure Pipelines/TFS.
</td>
</tr>

[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

[Build your Xcode app](../../languages/xcode.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
