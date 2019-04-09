---
title: Build, test, and deploy Xcode apps
description: Automatically build Xcode projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 02/14/2019
monikerRange: '>= tfs-2017'
---

# Build, test, and deploy Xcode apps

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

This guidance explains how to automatically build Xcode projects.

## Example

For a working example of how to build an app with Xcode, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-xcode
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository. You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample app.

## Build environment

You can use Azure Pipelines to build your apps with Xcode without needing to set up any infrastructure of your own. Xcode is preinstalled on [Microsoft-hosted macOS agents](../agents/hosted.md) in Azure Pipelines. You can use the macOS agents to run your builds.

For the exact versions of Xcode that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/xcode
pool:
  vmImage: 'macOS-10.13'
```

## Build an app with Xcode

To build an app with Xcode, add the following snippet to your `azure-pipelines.yml` file. This is a minimal snippet for building an iOS project using its default scheme, for the Simulator, and without packaging. Change values to match your project configuration. See the [Xcode](../tasks/build/xcode.md) task for more about these options.

```yaml
variables:
  scheme: ''
  sdk: 'iphoneos'
  configuration: 'Release'

steps:
- task: Xcode@5
  inputs:
    sdk: '$(sdk)'
    scheme: '$(scheme)'
    configuration: '$(configuration)'
    xcodeVersion: 'default' # Options: default, 10, 9, 8, specifyPath
    exportPath: '$(agent.buildDirectory)/output/$(sdk)/$(configuration)'
    packageApp: false
```

### Signing and provisioning

An Xcode app must be signed and provisioned to run on a device or be published to the App Store. The signing and provisioning process needs access to your P12 signing certificate and one or more provisioning profiles. The [Install Apple Certificate](../tasks/utility/install-apple-certificate.md) and [Install Apple Provisioning Profile](../tasks/utility/install-apple-provisioning-profile.md) tasks make these available to Xcode during a build.

The following snippet installs an Apple P12 certificate and provisioning profile in the build agent's Keychain. Then, it builds, signs, and provisions the app with Xcode. Finally, the certificate and provisioning profile are automatically removed from the Keychain at the end of the build, regardless of whether the build succeeded or failed. For more details, see [Sign your mobile app during CI](../apps/mobile/app-signing.md).

```yaml
# The `certSecureFile` and `provProfileSecureFile` files are uploaded to the Azure Pipelines secure files library where they are encrypted.
# The `P12Password` variable is set in the Azure Pipelines pipeline editor and marked 'secret' to be encrypted.
steps:
- task: InstallAppleCertificate@2
  inputs:
    certSecureFile: 'chrisid_iOSDev_Nov2018.p12'
    certPwd: $(P12Password)

- task: InstallAppleProvisioningProfile@1
  inputs:
    provProfileSecureFile: '6ffac825-ed27-47d0-8134-95fcf37a666c.mobileprovision'

- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: 'default' # Options: 8, 9, 10, default, specifyPath
    signingOption: 'default' # Options: nosign, default, manual, auto
    useXcpretty: 'false' # Makes it easier to diagnose build failures
```

### CocoaPods

If your project uses CocoaPods, you can run CocoaPods commands in your pipeline using a script, or with the [CocoaPods](../tasks/package/cocoapods.md) task. The task optionally runs `pod repo update`, then runs `pod install`, and allows you to set a custom project directory. Following are common examples of using both.

```yaml
- script: /usr/local/bin/pod install
  displayName: 'pod install using a script'

- task: CocoaPods@0
  displayName: 'pod install using the CocoaPods task with defaults'

- task: CocoaPods@0
  inputs:
    forceRepoUpdate: true
    projectDirectory: '$(system.defaultWorkingDirectory)'
  displayName: 'pod install using the CocoaPods task with a forced repo update and a custom project directory'
```

### Testing on Azure-hosted devices

Add the [App Center Test](../tasks/test/app-center-test.md) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required which must later be converted to paid.

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterTestV1.md)]

### Retain artifacts with the build record

Add the [Copy Files](../tasks/utility/copy-files.md) and [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) tasks
to store your IPA with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../artifacts/pipeline-artifacts.md).

```yaml
- task: CopyFiles@2
  inputs:
    contents: '**/*.ipa'
    targetFolder: '$(build.artifactStagingDirectory)'
- task: PublishBuildArtifacts@1
```

## Deploy

### App Center

Add the [App Center Distribute](../tasks/deploy/app-center-distribute.md) task to distribute an app to a group of testers or beta users,
or promote the app to Intune or the Apple App Store. A free [App Center](https://appcenter.ms) account is required (no payment is necessary).

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterDistributeV1.md)]

### Apple App Store

Install the [Apple App Store extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store)
and use the following tasks to automate interaction with the App Store. By default, these tasks authenticate to Apple
using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [App Store Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#user-content-app-store-release)
task to automate the release of updates to existing iOS TestFlight beta apps or production apps in the App Store.

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
