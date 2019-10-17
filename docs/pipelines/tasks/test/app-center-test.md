---
title: App Center Test task
description: Test app packages with Visual Studio App Center.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: AD5CD22A-BE4E-48BB-ADCE-181A32432DA5
ms.manager: mijacobs
ms.custom: seodec18
ms.author: pbora
author: pboraMSFT
ms.date: 07/10/2019
monikerRange: '>= tfs-2017'
---

# App Center Test task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

This task lets you run test suites against an application binary (`.apk` or `.ipa` file) using App Center Test.
For details about using this task, see the App Center documentation topic [Using Azure DevOps for UI Testing](https://docs.microsoft.com/appcenter/test-cloud/vsts-plugin).

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AppCenterTestV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Binary application file path</td><td>(Required) Relative path from the repo root to the APK or IPA file that you want to test.</td></tr>
<tr><td>Artifacts directory</td><td>(Required) Where to place the artifacts produced by the prepare step and used by the run step. This directory will be created if it does not exist.</td></tr>
<tr><td>Prepare tests</td><td>(Optional) Specify whether to prepare tests. The default is <code>true</code>.</td></tr>
<tr><td>Test framework</td><td>(Required) Options: <code>appium</code>, <code>calabash</code>, <code>espresso</code>, <code>uitest</code> (Xamarin UI Test), <code>xcuitest</code></td></tr>
<tr><td>Build directory (Appium)</td><td>(Required) Path to directory with Appium tests.</td></tr>
<tr><td>Project directory (Calabash)</td><td>(Required) Path to Calabash workspace directory.</td></tr>
<tr><td>Cucumber config file (Calabash)</td><td>(Optional) Path to Cucumber configuration file, usually cucumber.yml.</td></tr>
<tr><td>Profile to run (Calabash)</td><td>(Optional) Profile to run.  This value must exists in the Cucumber configuration file.</td></tr>
<tr><td>Skip Configuration Check (Calabash)</td><td>(Optional) Force running without Cucumber profile.</td></tr>
<tr><td>Signing information (Calabash)</td><td>(Optional) Use Signing Information for signing the test server.</td></tr>
<tr><td>Build directory (Espresso)</td><td>(Optional) Path to Espresso output directory.</td></tr>
<tr><td>Test APK path (Espresso)</td><td>(Optional) Path to APK file with Espresso tests. If not set, build-dir is used to discover it. Wildcard is allowed.</td></tr>
<tr><td>Store file (Xamarin UI Test)</td><td>(Optional) Path to the store file used to sign the app.</td></tr>
<tr><td>Store password (Xamarin UI Test)</td><td>(Optional) Password of the store file used to sign the app. Use a new variable with its lock enabled on the Variables tab to encrypt this value.</td></tr>
<tr><td>Key alias (Xamarin UI Test)</td><td>(Optional) Enter the alias that identifies the public/private key pair used in the store file..</td></tr>
<tr><td>Key password (Xamarin UI Test)</td><td>(Optional) Enter the key password for the alias and store file. Use a new variable with its lock enabled on the Variables tab to encrypt this value.</td></tr>
<tr><td>Test tools directory (Xamarin UI Test)</td><td>(Optional) Path to directory with Xamarin UI test tools that contains test-cloud.exe.</td></tr>
<tr><td>Signing information (Xamarin UI Test)</td><td>(Optional) Use Signing Information for signing the test server.</td></tr>
<tr><td>Build directory (Xamarin UI Test)</td><td>(Optional) Path to the build output directory (usually $(ProjectDir)/Build/Products/Debug-iphoneos).</td></tr>
<tr><td>Build directory (XCUITest)</td><td>(Required) Path to directory with built test assemblies.</td></tr>
<tr><td>Test IPA path (XCUITest)</td><td>(Optional) Path to the *.ipa file with the XCUITest tests.</td></tr>
<tr><td>Additional options (for preparing tests)</td><td>(Optional) Additional arguments passed to the App Center test prepare step.</td></tr>
<tr><td>Run tests</td><td>(Optional) Specify whether to run the tests. The default is <code>true</code>.</td></tr>
<tr><td>Authentication method</td><td>(Required) Use App Center service connection or enter credentials to connect to App Center.</td></tr>
<tr><td>App Center service connection</td><td>(Required) Select the service connection for App Center. Create a new App Center service connection in Azure DevOps project settings.</td></tr>
<tr><td>App Center username (when not using a service connection)</td><td>(Required) Visit <a href="https://appcenter.ms/settings/profile" data-raw-source="https://appcenter.ms/settings/profile">https://appcenter.ms/settings/profile</a> to get your username.</td></tr>
<tr><td>App Center password  (when not using a service connection)</td><td>(Required) Visit <a href="https://appcenter.ms/settings/profile" data-raw-source="https://appcenter.ms/settings/profile">https://appcenter.ms/settings/profile</a> to set your password. It can accept a variable defined in build or release pipelines as &#39;$(passwordVariable)&#39;. You may mark variable type as &#39;secret&#39; to secure it.</td></tr>
<tr><td>App slug</td><td>(Required) The app slug is in the format of {username}/{app_identifier}.  To locate {username} and {app_identifier} for an app, click on its name from <a href="https://appcenter.ms/apps" data-raw-source="https://appcenter.ms/apps">https://appcenter.ms/apps</a>, and the resulting URL is in the format of https://appcenter.ms/users/{username}/apps/{app_identifier}.</td></tr>
<tr><td>Devices</td><td>(Required) String to identify what devices this test will run against.  Copy and paste this string when you define a new test run from App Center Test beacon.</td></tr>
<tr><td>Test series</td><td>(Optional) The series name for organizing test runs (e.g. <code>master</code>, <code>production</code>, <code>beta</code>).</td></tr>
<tr><td>dSYM directory</td><td>(Optional) Path to iOS symbol files.</td></tr>
<tr><td>System language</td><td>(Required) Options: <code>da_DK</code>, <code>de_DE</code>, <code>en_GB</code>, <code>en_US</code>, <code>es_ES</code>, <code>es_MX</code>, <code>fr_FR</code>, <code>ja_JP</code>, <code>nl_NL</code>, <code>ru_RU</code>, <code>user</code>. If your language isn&#39;t an option, use <code>user</code>/<code>Other</code> and enter its locale below, such as <code>en_US</code>.</td></tr>
<tr><td>Other locale</td><td>(Optional) Enter any two-letter ISO-639 language code along with any two-letter ISO 3166 country code in the format [language]_[country], such as <code>en_US</code>.</td></tr>
<tr><td>Additional options for login</td><td>(Optional) Additional arguments passed to the App Center login step.</td></tr>
<tr><td>Additional options for run</td><td>(Optional) Additional arguments passed to the App Center test run.</td></tr>
<tr><td>Do not wait for test result</td><td>(Optional) Specify whether to execute tests asynchronously, exiting just after tests are uploaded, without waiting for test results. The default is <code>false</code>.</td></tr>
<tr><td>App Center CLI location</td><td>(Optional) Path to the App Center CLI on the build or release agent.</td></tr>
<tr><td>Enable debug output</td><td>(Optional) Add <code>--debug</code> to the App Center CLI for verbose output.</td></tr>

[!INCLUDE [temp](../_shared/control-options-arguments.md)]

</table>

## Example

This example runs Espresso tests on an Android app using the App Center Test task.

```yaml
steps:
- task: AppCenterTest@1
  displayName: 'Espresso Test - Synchronous'
  inputs:
    appFile: 'Espresso/espresso-app.apk'
    artifactsDirectory: '$(Build.ArtifactStagingDirectory)/AppCenterTest'
    frameworkOption: espresso
    espressoBuildDirectory: Espresso
    serverEndpoint: 'myAppCenterServiceConnection'
    appSlug: 'xplatbg1/EspressoTests'
    devices: a84c93af
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
