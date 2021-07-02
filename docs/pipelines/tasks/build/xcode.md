---
title: Xcode build and release task
ms.custom: seodec18
description: Xcode build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 130B3990-0B64-41AE-9330-75AD7228B5C4
ms.author: vijayma
author: vijayma
ms.date: 02/11/2021
monikerRange: '>=azure-devops-2019'
---

# Xcode task

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | [TFS 2018](xcode-build.md?view=tfs-2018&preserve-view=true) | [TFS 2017](xcode-build.md?view=tfs-2017&preserve-view=true) | [TFS 2015](xcode-build.md?view=tfs-2015&preserve-view=true)**

Use this task to build, test, or archive an Xcode workspace on macOS, and optionally package an app.

## Demands

xcode

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/XcodeV5.md)]

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
      <td><code>actions</code><br/>Actions</td>
      <td>
         (Required) Enter a space-delimited list of actions. Valid options are <code>build</code>, <code>clean</code>, <code>test</code>, <code>analyze</code>, and <code>archive</code>. For example, <code>clean build</code> will run a clean build. See <a href="https://developer.apple.com/library/archive/technotes/tn2339/_index.html" data-raw-source="[Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)">Apple: Building from the command line with Xcode FAQ</a>. <br/>Default value: build
      </td>
   </tr>
   <tr>
      <td><code>configuration</code><br/>Configuration</td>
      <td>
         (Optional) Enter the Xcode project or workspace configuration to be built. The default value of this field is the variable <code>$(Configuration)</code>. When using a variable, make sure to specify a value (for example, <code>Release</code>) on the <a href="../../build/variables.md" data-raw-source="[Variables](../../build/variables.md)">Variables</a> tab. <br/>Default  value: $(Configuration)
      </td>
   </tr>
   <tr>
      <td><code>sdk</code><br/>SDK</td>
      <td>
         (Optional) Specify an SDK to use when building the Xcode project or workspace. From the macOS Terminal application, run <code>xcodebuild -showsdks</code> to display the valid list of SDKs. The default value of this field is the variable <code>$(SDK)</code>. When using a variable, make sure to specify a value (for example, <code>iphonesimulator</code>) on the <a href="../../build/variables.md" data-raw-source="[Variables](../../build/variables.md)">Variables</a> tab. <br/>Default value: $(SDK)
      </td>
   </tr>
   <tr>
      <td><code>xcWorkspacePath</code><br/>Workspace or project path</td>
      <td>
         (Optional) Enter a relative path from the root of the repository to the Xcode workspace or project. For example, <code>MyApp/MyApp.xcworkspace</code> or <code>MyApp/MyApp.xcodeproj</code>. <br/>Default value: **/*.xcodeproj/project.xcworkspace
      </td>
   </tr>
   <tr>
      <td><code>scheme</code><br/>Scheme</td>
      <td>
         (Optional) Enter a scheme name defined in Xcode. It must be a shared scheme, with its <strong>Shared</strong> checkbox enabled under <strong>Managed Schemes</strong> in Xcode. If you specify a <strong>Workspace or project path</strong> above without specifying a scheme, and the workspace has a single shared scheme, it will be automatically used.
      </td>
   </tr>
   <tr>
      <td><code>xcodeVersion</code><br/>Xcode version</td>
      <td>
         (Optional) Specify the target version of Xcode. Select <code>Default</code> to use the default version of Xcode on the agent machine. Selecting a version number (e.g. <code>Xcode 10</code>) relies on environment variables being set on the agent machine for the version&#39;s location (e.g. <code>XCODE_10_DEVELOPER_DIR=/Applications/Xcode_10.0.0.app/Contents/Developer</code>). Select <code>Specify path</code> to provide a specific path to the Xcode developer directory. <br/>Default value: default
      </td>
   </tr>
   <tr>
      <td><code>xcodeDeveloperDir</code><br/>Xcode developer path</td>
      <td>
         (Optional) Enter a path to a specific Xcode developer directory (e.g. <code>/Applications/Xcode_10.0.0.app/Contents/Developer</code>). This is useful when multiple versions of Xcode are installed on the agent machine.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">(Optional) Signing &amp; provisioning</th>
   </tr>
   <tr>
      <td><code>signingOption</code><br/>Signing style</td>
      <td>
         (Optional) Choose the method of signing the build. Select <code>Do not code sign</code> to disable signing. Select <code>Project defaults</code> to use only the project&#39;s signing configuration. Select <code>Manual signing</code> to force manual signing and optionally specify a signing identity and provisioning profile. Select <code>Automatic signing</code> to force automatic signing and optionally specify a development team ID. If your project requires signing, use the &quot;Install Apple...&quot; tasks to install certificates and provisioning profiles prior to the Xcode build. <br/>Default value: nosign
      </td>
   </tr>
   <tr>
      <td><code>signingIdentity</code><br/>Signing identity</td>
      <td>
         (Optional) Enter a signing identity override with which to sign the build. This may require unlocking the default keychain on the agent machine. If no value is entered, the Xcode project&#39;s setting will be used.
      </td>
   </tr>
   <tr>
      <td><code>provisioningProfileUuid</code><br/>Provisioning profile UUID</td>
      <td>
         (Optional) Enter the UUID of an installed provisioning profile to be used for this build. Use separate build tasks with different schemes or targets to specify separate provisioning profiles by target in a single workspace (iOS, tvOS, watchOS).
      </td>
   </tr>
   <tr>
      <td><code>provisioningProfileName</code><br/>Provisioning profile name</td>
      <td>
         (Optional) Enter the name of an installed provisioning profile to be used for this build. If specified, this takes precedence over the provisioning profile UUID. Use separate build tasks with different schemes or targets to specify separate provisioning profiles by target in a single workspace (iOS, tvOS, watchOS).
      </td>
   </tr>
   <tr>
      <td><code>teamId</code><br/>Team ID</td>
      <td>
         (Optional, unless you are a member of multiple development teams.) Specify the 10-character development team ID.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Package options</th>
   </tr>
   <tr>
      <td><code>packageApp</code><br/>Create app package</td>
      <td>
         Indicate whether an IPA app package file should be generated as a part of the build. <br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>archivePath</code><br/>Archive path</td>
      <td>
         (Optional) Specify a directory where created archives should be placed.
      </td>
   </tr>
   <tr>
      <td><code>exportPath</code><br/>Export path</td>
      <td>
         (Optional) Specify the destination for the product exported from the archive. <br/>Default value: output/$(SDK)/$(Configuration)
      </td>
   </tr>
   <tr>
      <td><code>exportOptions</code><br/>Export options</td>
      <td>
         (Optional) Select a way of providing options for exporting the archive. When the default value of <code>Automatic</code> is selected, the export method is automatically detected from the archive. Select <code>plist</code> to specify a plist file containing export options. Select <code>Specify</code> to provide a specific <strong>Export method</strong> and <strong>Team ID</strong>. <br/>Default value: auto
      </td>
   </tr>
   <tr>
      <td><code>exportMethod</code><br/>Export method</td>
      <td>
         (Required) Enter the method that Xcode should use to export the archive. For example: <code>app-store</code>, <code>package</code>, <code>ad-hoc</code>, <code>enterprise</code>, or <code>development</code>.
         <br/>Default value: development
      </td>
   </tr>
   <tr>
      <td><code>exportTeamId</code><br/>Team ID</td>
      <td>
         (Optional) Enter the 10-character team ID from the Apple Developer Portal to use during export.
      </td>
   </tr>
   <tr>
      <td><code>exportOptionsPlist</code><br/>Export options plist</td>
      <td>
         (Required) Enter the path to the plist file that contains options to use during export.
      </td>
   </tr>
   <tr>
      <td><code>exportArgs</code><br/>Export arguments</td>
      <td>
         (Optional) Enter additional command line arguments to be used during export.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Devices &amp; simulators</th>
   </tr>
   <tr>
      <td><code>destinationPlatformOption</code><br/>Destination platform</td>
      <td>
         (Optional) Select the destination device&#39;s platform to be used for UI testing when the generic build device isn&#39;t valid. Choose <code>Custom</code> to specify a platform not included in this list. When <code>Default</code> is selected, no simulators nor devices will be targeted. <br/>Default value: default
      </td>
   </tr>
   <tr>
      <td><code>destinationPlatform</code><br/>Custom destination platform</td>
      <td>
         (Optional) Select the destination device&#39;s platform to be used for UI testing when the generic build device isn&#39;t valid. Choose <code>Custom</code> to specify a platform not included in this list. When <code>Default</code> is selected, no simulators nor devices will be targeted. <br/>Default value: default
      </td>
   </tr>
   <tr>
      <td><code>destinationTypeOption</code><br/>Destination type</td>
      <td>
         (Optional) Choose the destination type to be used for UI testing. Devices must be connected to the Mac performing the build via a cable or network connection. See <strong>Devices and Simulators</strong> in Xcode. <br/>Default value: simulators
      </td>
   </tr>
   <tr>
      <td><code>destinationSimulators</code><br/>Simulators</td>
      <td>
         (Optional) Enter an Xcode simulator name to be used for UI testing. For example, enter <code>iPhone X</code> (iOS and watchOS) or <code>Apple TV 4K</code> (tvOS). A target OS version is optional and can be specified in the format &#39;OS=<i>versionNumber</i>&#39;, such as <code>iPhone X,OS=11.1</code>. A list of simulators installed on the <strong>Hosted macOS</strong> agent can be <a href="https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#installed-sdks" data-raw-source="[found here](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#installed-sdks)">found here</a>. <br/>Default value: iPhone8 for Xcode 11 and iPhone 7 for other iOS projects; Apple TV for tvOS projects.
      </td>
   </tr>
   <tr>
      <td><code>destinationDevices</code><br/>Devices</td>
      <td>
         (Optional) Enter the name of the device to be used for UI testing, such as <code>Raisa&#39;s iPad</code>. Only one device is currently supported. Note that Apple does not allow apostrophes (<code>&#39;</code>) in device names. Instead, right single quotation marks (<code>&#39;</code>) can be used.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>args</code><br/>Arguments</td>
      <td>
         (Optional) Enter additional command line arguments with which to build. This is useful for specifying <code>-target</code> or <code>-project</code> arguments instead of specifying a workspace/project and scheme. See <a href="https://developer.apple.com/library/archive/technotes/tn2339/_index.html" data-raw-source="[Apple: Building from the command line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)">Apple: Building from the command line with Xcode FAQ</a>.
      </td>
   </tr>
   <tr>
      <td><code>cwd</code><br/>Working directory</td>
      <td>
         (Optional) Enter the working directory in which to run the build. If no value is entered, the root of the repository will be used. <br/>Argument aliases: <code>workingDirectory</code>
      </td>
   </tr>
   <tr>
      <td><code>useXcpretty</code><br/>Use xcpretty</td>
      <td>
         (Optional) Specify whether to use xcpretty to format xcodebuild output and generate JUnit test results. Enabling this requires xcpretty to be installed on the agent machine. It is preinstalled on Microsoft-hosted build agents. See <a href="https://github.com/supermarin/xcpretty" data-raw-source="[xcpretty](https://github.com/supermarin/xcpretty)">xcpretty</a> on GitHub. <br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>xcprettyArgs</code><br/>Arguments for xcpretty</td>
      <td>
         (Optional) If xcpretty is enabled above, specify arguments for xcpretty. See <a href="https://github.com/supermarin/xcpretty" data-raw-source="[xcpretty](https://github.com/supermarin/xcpretty)">xcpretty</a> on GitHub for a list of xcpretty arguments.
      </td>
   </tr>
   <tr>
      <td><code>publishJUnitResults</code><br/>Publish test results to Azure Pipelines/TFS</td>
      <td>
         (Optional) If xcpretty is enabled above, specify whether to publish JUnit test results to Azure Pipelines/TFS. <br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>testRunTitle</code><br/>Test run title</td>
      <td>
         (Optional) If xcpretty and publishJUnitResults are enabled above, you can specify test run title.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Example

[Build your Xcode app](../../ecosystems/xcode.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.


## Using multiple provisioning profiles

Currently there's no support of multiple provisioning profiles for Xcode task (for example for iOS App Extension)

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

<!-- ENDSECTION -->
