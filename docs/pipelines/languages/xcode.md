---
title: Building apps with Xcode with Azure Pipelines or TFS
titleSuffix: Azure Pipelines & TFS
description: Building Xcode projects using Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 08/31/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Build apps with Xcode using Azure Pipelines or Team Foundation Server

**Azure Pipelines | TFS 2018 | TFS 2017**

This guidance explains how to use Azure Pipelines or Team Foundation Server (TFS) to automatically build Xcode projects with CI/CD pipelines.

## Example

For a working example of how to build an app with Xcode, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-xcode
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository. You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample app.

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

To sign and provision your app, see [Sign your mobile app during CI](../apps/mobile/app-signing.md).

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
