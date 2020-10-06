---
title: App Center Test task
description: Test app packages with Visual Studio App Center.
ms.topic: reference
ms.assetid: AD5CD22A-BE4E-48BB-ADCE-181A32432DA5
ms.custom: seodec18
ms.author: shashban
author: shashban
ms.date: 04/20/2020
monikerRange: '>= tfs-2017'
---

# App Center Test task

[!INCLUDE [version-tfs-2017-rtm](../../includes/version-tfs-2017-rtm.md)]

This task lets you run test suites against an application binary (`.apk` or `.ipa` file) using App Center Test.
- [Sign up with App Center](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) first.
- For details about using this task, see the App Center documentation article [Using Azure DevOps for UI Testing](/appcenter/test-cloud/vsts-plugin).

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AppCenterTestV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`app`<br/>Binary application file path|(Required) Relative path from the repo root to the APK or IPA file that you want to test. <br/>Argument alias: `appFile`|
|`artifactsDir`<br/>Artifacts directory|(Required) Where to place the artifacts produced by the prepare step and used by the run step. This directory will be created if it does not exist. <br/>Default value: `$(Build.ArtifactStagingDirectory)/AppCenterTest` <br/>Argument alias: `artifactsDirectory`|
|`enablePrepare`<br/>Prepare tests|(Optional) Specify whether to prepare tests. <br/>Default value: `true` <br/>Argument alias: `prepareTests`|
|`framework`<br/>Test framework|(Required) Options: appium, calabash, espresso, uitest (Xamarin UI Test), xcuitest. <br/>Default value: `appium` <br/>Argument alias: `frameworkOption`|
|`appiumBuildDir`<br/>Build directory (Appium)|(Required) Path to directory with Appium tests. <br/>Argument alias: `appiumBuildDirectory`|
|`espressoBuildDir` <br/>Build directory (Espresso)| (Optional) Path to Espresso output directory <br/>Argument alias: `espressoBuildDirectory`|
|`espressoTestApkPath`<br/>Test APK path (Espresso)| (Optional) Path to APK file with Espresso tests. If not set, build-dir is used to discover it. Wildcard is allowed. <br/>Argument alias: `espressoTestApkFile`|
|`calabashProjectDir`<br/>Project directory (Calabash)|(Required) Path to Calabash workspace directory. <br/>Argument alias: `calabashProjectDirectory`|
|`calabashConfigFile`<br/>Cucumber config file (Calabash)|(Optional) Path to Cucumber configuration file, usually cucumber.yml.|
|`calabashProfile`<br/>Profile to run (Calabash)|(Optional) Profile to run.  This value must exists in the Cucumber configuration file.|
|`calabashSkipConfigCheck`<br/>Skip Configuration Check (Calabash)|(Optional) Force running without Cucumber profile. <br/>Default value: `false`|
|`uitestBuildDir`<br/>Build directory (Xamarin UI Test)| (Required) Path to directory with built test assemblies <br/>Argument alias: `uiTestBuildDirectory`|
|`uitestStorePath`<br/>Store file (Xamarin UI Test)| (Optional) Path to the store file used to sign the app.|
|`uitestStorePass` <br/>Store password (Xamarin UI Test)| (Optional) Password of the store file used to sign the app. Use a new variable with its lock enabled on the Variables tab to encrypt this value.<br/>Argument alias: `uiTestStorePassword`|
|`uitestKeyAlias` <br/>Key alias (Xamarin UI Test)| (Optional) Enter the alias that identifies the public/private key pair used in the store file|
|`uitestKeyPass` <br/>Key password (Xamarin UI Test)| (Optional) Enter the key password for the alias and store file. Use a new variable with its lock enabled on the Variables tab to encrypt this value. <br/>Argument alias: `uiTestKeyPassword`|
|`uitestToolsDir` <br/>Test tools directory (Xamarin UI Test)| (Optional) Path to directory with Xamarin UI test tools that contains `test-cloud.exe` <br/>Argument alias: `uiTestToolsDirectory`|
|`signInfo`<br/>Signing information (Calabash/Xamarin UI Test|(Optional) Use Signing Information for signing the test server.|
|`xcuitestBuildDir`<br/>Build directory (XCUITest)|(Optional) Path to the build output directory, usually `$(ProjectDir)/Build/Products/Debug-iphoneos)`. <br/>Argument alias: `xcUITestBuildDirectory`|
|`xcuitestTestIpaPath`<br/>Test IPA path (XCUITest)|(Optional) Path to the *.ipa file with the XCUITest tests. <br/>Argument alias: `xcUITestIpaFile`|
|`prepareOpts`<br/>Additional options (for preparing tests)|(Optional) Additional arguments passed to the App Center test prepare step. <br/>Argument alias: `prepareOptions`|
|`enableRun` <br/>Run tests|(Optional) Specify whether to run the tests. <br/>Default value: `true` <br/>Argument alias: `runTests`|
|`credsType`<br/>Authentication method|(Required) Use App Center service connection or enter credentials to connect to App Center. <br/>Default value: `serviceEndpoint` <br/>Argument alias: `credentialsOption`|
|`serverEndpoint`<br/>App Center service connection|(Required) Select the service connection for App Center. Create a new App Center service connection in Azure DevOps project settings.|
|`username`<br/>App Center username (when not using a service connection)|(Required) Visit https://appcenter.ms/settings/profile to get your username.|
|`password`<br/>App Center password  (when not using a service connection)|(Required) Visit https://appcenter.ms/settings/profile to set your password. It can accept a variable defined in build or release pipelines as `$(passwordVariable)`. You may mark variable type as `secret` to secure it.|
|`appSlug`<br/>App slug|(Required) The app slug is in the format of `{username}/{app_identifier}`.  To locate `{username}` and `{app_identifier}` for an app, click on its name from https://appcenter.ms/apps, and the resulting URL is in the format of https://appcenter.ms/users/{username}/apps/{app_identifier}.|
|`devices`<br/>Devices|(Required) String to identify what devices this test will run against. Copy and paste this string when you define a new test run from App Center Test beacon.|
|`series`<br/>Test series|(Optional) The series name for organizing test runs (e.g. master, production, beta). <br/>Default value: `master`|
|`dsymDir`<br/>dSYM directory|(Optional) Path to iOS symbol files. <br/>Argument alias: `dsymDirectory`|
|`locale`<br/>System language|(Required) Options: da_DK, de_DE, en_GB, en_US, es_ES, es_MX, fr_FR, ja_JP, nl_NL, ru_RU, user. If your language isn't an option, use `user/Other` and enter its locale below, such as `en_US`. <br/>Default value: `en_US` <br/>Argument alias: `localeOption`|
|`userDefinedLocale`<br/>Other locale|(Optional) Enter any two-letter ISO-639 language code along with any two-letter ISO 3166 country code in the format `[language]_[country]`, such as en_US.|
|`loginOpts`<br/>Additional options for login|(Optional) Additional arguments passed to the App Center login step. <br/>Argument alias: `loginOptions`|
|`runOpts`<br/>Additional options for run|(Optional) Additional arguments passed to the App Center test run. <br/>Argument alias: `runOptions`|
|`async`<br/>Do not wait for test result|(Optional) Specify whether to execute tests asynchronously, exiting just after tests are uploaded, without waiting for test results. <br/>Default value: `false` <br/>Argument alias: `skipWaitingForResults`|
|`cliLocationOverride`<br/>App Center CLI location|(Optional) Path to the App Center CLI on the build or release agent. <br/>Argument alias: `cliFile`|
|`debug`<br/>Enable debug output|(Optional) Add --debug to the App Center CLI for verbose output. <br/>Argument alias: `showDebugOutput`|

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

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
