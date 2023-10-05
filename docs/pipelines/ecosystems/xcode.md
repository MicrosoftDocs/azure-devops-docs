---
title: Build, test, and deploy Xcode apps
description: Automatically build Xcode projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: quickstart
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.author: vijayma
author: vijayma
ms.date: 10/27/2021
monikerRange: '<= azure-devops'
---

# Build, test, and deploy Xcode apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to build and deploy Xcode projects with Azure Pipelines. 

## Prerequisites

* An Xcode 9+ project in a GitHub repository. If you do not have a project, see [Creating an Xcode Project for an App](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app)

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Xcode**. 

7. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

8. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Xcode](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/xcode.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

9. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

See the sections below to learn some of the more common ways to customize your pipeline.


> [!Tip]
> To make changes to the YAML file as described in this topic, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.


## Build environment

You can use Azure Pipelines to build your apps with Xcode without needing to set up any infrastructure of your own. Xcode is preinstalled on [Microsoft-hosted macOS agents](../agents/hosted.md) in Azure Pipelines. You can use the macOS agents to run your builds.

For the exact versions of Xcode that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://learn.microsoft.com/azure/devops/pipelines/ecosystems/xcode
pool:
  vmImage: 'macOS-latest'
```

## Build an app with Xcode

To build an app with Xcode, add the following snippet to your `azure-pipelines.yml` file. This is a minimal snippet for building an iOS project using its default scheme, for the Simulator, and without packaging. Change values to match your project configuration. See the [Xcode](/azure/devops/pipelines/tasks/reference/xcode-v5) task for more about these options.

```yaml
pool:
  vmImage: 'macos-latest'

steps:
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: 'default' # Options: 10, 11, 12, 13, 14, default, specifyPath
```

### Signing and provisioning

An Xcode app must be signed and provisioned to run on a device or be published to the App Store. The signing and provisioning process needs access to your P12 signing certificate and one or more provisioning profiles. The [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) and [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) tasks make these available to Xcode during a build. 

See [Sign your mobile app](../apps/mobile/app-signing.md) to learn more. 

### Carthage

If your project uses Carthage with a private Carthage repository,
you can set up authentication by setting an environment variable named
`GITHUB_ACCESS_TOKEN` with a value of a token that has access to the repository.
Carthage will automatically detect and use this environment variable.

Do not add the secret token directly to your pipeline YAML.
Instead, create a new pipeline variable with its lock enabled on the Variables pane to encrypt this value.
See [secret variables](../process/variables.md#secret-variables).

Here is an example that uses a secret variable named `myGitHubAccessToken` for the value of the `GITHUB_ACCESS_TOKEN` environment variable.

```yaml
- script: carthage update --platform iOS
  env:
    GITHUB_ACCESS_TOKEN: $(myGitHubAccessToken)
```

### Testing on Azure-hosted devices

Add the [App Center Test](/azure/devops/pipelines/tasks/reference/app-center-test-v1) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required which must later be converted to paid. 

[Sign up with App Center](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) first.

```yml
# App Center test v1
# Test app packages with Visual Studio App Center.
- task: AppCenterTest@1
  inputs:
    appFile: # string. Alias: app. Required. Binary application file path. 
    artifactsDirectory: '$(Build.ArtifactStagingDirectory)/AppCenterTest' # string. Alias: artifactsDir. Required. Artifacts directory. Default: $(Build.ArtifactStagingDirectory)/AppCenterTest.
  # Prepare Tests
    #prepareTests: true # boolean. Alias: enablePrepare. Prepare tests. Default: true.
    frameworkOption: 'appium' # 'appium' | 'espresso' | 'calabash' | 'uitest' | 'xcuitest'. Alias: framework. Required when enablePrepare = true. Test framework. Default: appium.
    #appiumBuildDirectory: # string. Alias: appiumBuildDir. Required when enablePrepare = true && framework = appium. Build directory. 
    #espressoBuildDirectory: # string. Alias: espressoBuildDir. Optional. Use when enablePrepare = true && framework = espresso. Build directory. 
    #espressoTestApkFile: # string. Alias: espressoTestApkPath. Optional. Use when enablePrepare = true && framework = espresso. Test APK path. 
    #calabashProjectDirectory: # string. Alias: calabashProjectDir. Required when enablePrepare = true && framework = calabash. Project directory. 
    #calabashConfigFile: # string. Optional. Use when enablePrepare = true && framework = calabash. Cucumber config file. 
    #calabashProfile: # string. Optional. Use when enablePrepare = true && framework = calabash. Profile to run. 
    #calabashSkipConfigCheck: false # boolean. Optional. Use when enablePrepare = true && framework = calabash. Skip Configuration Check. Default: false.
    #uiTestBuildDirectory: # string. Alias: uitestBuildDir. Required when enablePrepare = true && framework = uitest. Build directory. 
    #uitestStorePath: # string. Optional. Use when enablePrepare = true && framework = uitest. Store file. 
    #uiTestStorePassword: # string. Alias: uitestStorePass. Optional. Use when enablePrepare = true && framework = uitest. Store password. 
    #uitestKeyAlias: # string. Optional. Use when enablePrepare = true && framework = uitest. Key alias. 
    #uiTestKeyPassword: # string. Alias: uitestKeyPass. Optional. Use when enablePrepare = true && framework = uitest. Key password. 
    #uiTestToolsDirectory: # string. Alias: uitestToolsDir. Optional. Use when enablePrepare = true && framework = uitest. Test tools directory. 
    #signInfo: # string. Optional. Use when framework = calabash || framework = uitest. Signing information. 
    #xcUITestBuildDirectory: # string. Alias: xcuitestBuildDir. Optional. Use when enablePrepare = true && framework = xcuitest. Build directory. 
    #xcUITestIpaFile: # string. Alias: xcuitestTestIpaPath. Optional. Use when enablePrepare = true && framework = xcuitest. Test IPA path. 
    #prepareOptions: # string. Alias: prepareOpts. Optional. Use when enablePrepare = true. Additional options. 
  # Run Tests
    #runTests: true # boolean. Alias: enableRun. Run tests. Default: true.
    credentialsOption: 'serviceEndpoint' # 'serviceEndpoint' | 'inputs'. Alias: credsType. Required when enableRun = true. Authentication method. Default: serviceEndpoint.
    #serverEndpoint: # string. Required when enableRun = true && credsType = serviceEndpoint. App Center service connection. 
    #username: # string. Required when enableRun = true && credsType = inputs. App Center username. 
    #password: # string. Required when enableRun = true && credsType = inputs. App Center password. 
    appSlug: # string. Required when enableRun = true. App slug. 
    devices: # string. Required when enableRun = true. Devices. 
    #series: 'master' # string. Optional. Use when enableRun = true. Test series. Default: master.
    #dsymDirectory: # string. Alias: dsymDir. Optional. Use when enableRun = true. dSYM directory. 
    localeOption: 'en_US' # 'da_DK' | 'nl_NL' | 'en_GB' | 'en_US' | 'fr_FR' | 'de_DE' | 'ja_JP' | 'ru_RU' | 'es_MX' | 'es_ES' | 'user'. Alias: locale. Required when enableRun = true. System language. Default: en_US.
    #userDefinedLocale: # string. Optional. Use when enableRun = true && locale = user. Other locale. 
    #loginOptions: # string. Alias: loginOpts. Optional. Use when enableRun = true && credsType = inputs. Additional options for login. 
    #runOptions: # string. Alias: runOpts. Optional. Use when enableRun = true. Additional options for run. 
    #skipWaitingForResults: false # boolean. Alias: async. Optional. Use when enableRun = true. Do not wait for test result. Default: false.
  # Advanced
    #cliFile: # string. Alias: cliLocationOverride. App Center CLI location. 
    #showDebugOutput: false # boolean. Alias: debug. Enable debug output. Default: false.
```

### Retain artifacts with the build record

Add the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks
to store your IPA with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../artifacts/pipeline-artifacts.md).

```yaml
- task: CopyFiles@2
  inputs:
    contents: '**/*.ipa'
    targetFolder: '$(build.artifactStagingDirectory)'
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

## Deploy

### App Center

Add the [App Center Distribute](/azure/devops/pipelines/tasks/reference/app-center-distribute-v3) task to distribute an app to a group of testers or beta users,
or promote the app to Intune or the Apple App Store. A free [App Center](https://appcenter.ms) account is required (no payment is necessary).

```yml
# App Center distribute v3
# Distribute app builds to testers and users via Visual Studio App Center.
- task: AppCenterDistribute@3
  inputs:
    serverEndpoint: # string. Required. App Center service connection. 
    appSlug: # string. Required. App slug. 
    appFile: # string. Alias: app. Required. Binary file path. 
    #buildVersion: # string. Build version. 
    releaseNotesOption: 'input' # 'input' | 'file'. Alias: releaseNotesSelection. Required. Create release notes. Default: input.
    releaseNotesInput: # string. Required when releaseNotesSelection = input. Release notes. 
    #releaseNotesFile: # string. Required when releaseNotesSelection = file. Release notes file. 
    #isMandatory: false # boolean. Require users to update to this release. Default: false.
    destinationType: 'groups' # 'groups' | 'store'. Required. Release destination. Default: groups.
    #distributionGroupId: # string. Alias: destinationGroupIds. Optional. Use when destinationType = groups. Destination IDs. 
    #destinationStoreId: # string. Required when destinationType = store. Destination ID. 
    #isSilent: # boolean. Optional. Use when destinationType = groups. Do not notify testers. Release will still be available to install. 
  # Symbols
    #symbolsOption: 'Apple' # 'Apple' | 'Android' | 'UWP'. Alias: symbolsType. Symbols type. Default: Apple.
    #symbolsPath: # string. Optional. Use when symbolsType == AndroidNative || symbolsType = Windows. Symbols path. 
    #appxsymPath: # string. Optional. Use when symbolsType = UWP. Symbols path (*.appxsym). 
    #symbolsDsymFiles: # string. Alias: dsymPath. Optional. Use when symbolsType = Apple. dSYM path. 
    #symbolsMappingTxtFile: # string. Alias: mappingTxtPath. Optional. Use when symbolsType = Android. Mapping file. 
    #nativeLibrariesPath: # string. Optional. Use when symbolsType == Android. Native Library File Path. 
    #symbolsIncludeParentDirectory: # boolean. Alias: packParentFolder. Optional. Use when symbolsType = Apple. Include all items in parent folder.
```

### Apple App Store

Install the [Apple App Store extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store)
and use the following tasks to automate interaction with the App Store. By default, these tasks authenticate to Apple
using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [App Store Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#user-content-app-store-release)
task to automate the release of updates to existing iOS TestFlight beta apps or production apps in the App Store.

See [limitations](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store)
of using this task with Apple two-factor authentication,
since Apple authentication is region-specific and
fastlane session tokens expire quickly and must be recreated and reconfigured.

```yaml
- task: AppStoreRelease@1
  displayName: 'Publish to the App Store TestFlight track'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection' # This service connection must be added by you
    appIdentifier: com.yourorganization.testapplication.etc
    ipaPath: '$(build.artifactstagingdirectory)/**/*.ipa'
    shouldSkipWaitingForProcessing: true
    shouldSkipSubmission: true
```

#### Promote

Add the [App Store Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#user-content-app-store-promote)
task to automate the promotion of a previously submitted app from iTunes Connect to the App Store.

```yaml
- task: AppStorePromote@1
  displayName: 'Submit to the App Store for review'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection' # This service connection must be added by you
    appIdentifier: com.yourorganization.testapplication.etc
    shouldAutoRelease: false
```

## Related extensions

- [Apple App Store](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store) (Microsoft)
- [Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) (Codified Security)  
- [MacinCloud](https://marketplace.visualstudio.com/items?itemName=moboware.macincloud) (Moboware Inc.)
- [Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) (James Montemagno)  
- [Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) (Perfecto Mobile)
- [Raygun](https://marketplace.visualstudio.com/items?itemName=Raygun.vsts-extension) (Raygun)
- [React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) (Microsoft)  
- [Version Setter](https://marketplace.visualstudio.com/items?itemName=tomgilder.version-setter) (Tom Gilder)
