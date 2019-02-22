---
title: App Center Test task
description: Test app packages with Visual Studio App Center.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: AD5CD22A-BE4E-48BB-ADCE-181A32432DA5
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# App Center Test task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to test app packages with Visual Studio App Center.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AppCenterTestV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Binary application file path</td><td>(Required) Relative path from the repo root to the APK or IPA file you want to test.</td></tr>
<tr><td>Artifacts directory</td><td>(Required) Where to place the artifacts produced by the prepare step and used by the run step. This directory will be created if it does not exist.</td></tr>
<tr><td>Prepare tests</td><td>(Optional) undefined</td></tr>
<tr><td>Test framework</td><td>(Required) undefined</td></tr>
<tr><td>Build directory</td><td>(Required) Path to directory with Appium tests.</td></tr>
<tr><td>Build directory</td><td>(Optional) Path to Espresso output directory.</td></tr>
<tr><td>Test APK path</td><td>(Optional) Path to APK file with Espresso tests. If not set, build-dir is used to discover it. Wildcard is allowed.</td></tr>
<tr><td>Project directory</td><td>(Required) Path to Calabash workspace directory.</td></tr>
<tr><td>Cucumber config file</td><td>(Optional) Path to Cucumber configuration file, usually cucumber.yml.</td></tr>
<tr><td>Profile to run</td><td>(Optional) Profile to run.  This value must exists in the Cucumber configuration file.</td></tr>
<tr><td>Skip Configuration Check</td><td>(Optional) Force running without Cucumber profile.</td></tr>
<tr><td>Build directory</td><td>(Required) Path to directory with built test assemblies.</td></tr>
<tr><td>Store file</td><td>(Optional) undefined</td></tr>
<tr><td>Store password</td><td>(Optional) undefined</td></tr>
<tr><td>Key alias</td><td>(Optional) undefined</td></tr>
<tr><td>Key password</td><td>(Optional) undefined</td></tr>
<tr><td>Test tools directory</td><td>(Optional) Path to directory with Xamarin UI test tools that contains test-cloud.exe.</td></tr>
<tr><td>Signing information</td><td>(Optional) Use Signing Information for signing the test server.</td></tr>
<tr><td>Build directory</td><td>(Optional) Path to the build output directory (usually $(ProjectDir)/Build/Products/Debug-iphoneos).</td></tr>
<tr><td>Test IPA path</td><td>(Optional) Path to the *.ipa file with the XCUITest tests.</td></tr>
<tr><td>Additional options</td><td>(Optional) Additional arguments passed to the App Center test prepare step.</td></tr>
<tr><td>Run tests</td><td>(Optional) undefined</td></tr>
<tr><td>Authentication method</td><td>(Required) Use App Center service connection or enter credentials to connect to Visual Studio App Center.</td></tr>
<tr><td>App Center connection</td><td>(Required) Select the service connection for your Visual Studio App Center connection. To create one, click the Manage link and create a new service connection.</td></tr>
<tr><td>App Center username</td><td>(Required) Visit https://appcenter.ms/settings/profile to get your username.</td></tr>
<tr><td>App Center password</td><td>(Required) Visit https://appcenter.ms/settings/profile to set your password. It can accept variable defined in Build/Release pipelines as '$(passwordVariable)'. You may mark variable type as 'secret' to secure it.</td></tr>
<tr><td>App slug</td><td>(Required) The app slug is in the format of {username}/{app_identifier}.  To locate {username} and {app_identifier} for an app, click on its name from https://appcenter.ms/apps, and the resulting url is in the format of https://appcenter.ms/users/{username}/apps/{app_identifier}.</td></tr>
<tr><td>Devices</td><td>(Required) String to identify what devices this test will run against.  Copy and paste this string when you define a new test run from App Center Test beacon.</td></tr>
<tr><td>Test series</td><td>(Optional) The series name for organizing test runs (e.g. master, production, beta).</td></tr>
<tr><td>dSYM directory</td><td>(Optional) Path to iOS symbol files.</td></tr>
<tr><td>System language</td><td>(Required) If your language isn't displayed, select 'Other' and enter its locale below, such as en_US.</td></tr>
<tr><td>Other locale</td><td>(Optional) Enter any two-letter ISO-639 language code along with any two-letter ISO 3166 country code in the format [language]_[country], such as en_US.</td></tr>
<tr><td>Additional options for login</td><td>(Optional) Additional arguments passed to the App Center login step.</td></tr>
<tr><td>Additional options for run</td><td>(Optional) Additional arguments passed to the App Center test run.</td></tr>
<tr><td>Do not wait for test result</td><td>(Optional) Execute command asynchronously, exit when tests are uploaded, without waiting for test results.</td></tr>
<tr><td>App Center CLI location</td><td>(Optional) Path to the App Center CLI on the build or release agent.</td></tr>
<tr><td>Enable debug output</td><td>(Optional) Add --debug to the App Center CLI.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
