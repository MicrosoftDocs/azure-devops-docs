---
title: Build Xamarin apps
description: Build Xamarin projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 2bf80a9f-3f37-4582-8226-4a1d7e519265
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 03/27/2018
monikerRange: 'azure-devops'
---

# Build Xamarin apps

**Azure Pipelines**

This guidance explains how to automatically build Xamarin apps for Android and iOS.

## Example

For a working example of how to build a Xamarin app, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-xamarin
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository. You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample app.

## Build environment

You can use Azure Pipelines to build your Xamarin apps without needing to set up any infrastructure of your own. Xamarin tools are preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use macOS or Windows agents to run Xamarin.Android builds, and macOS agents to run Xamarin.iOS builds. If you are using a self-hosted agent, you must install [Visual Studio Tools for Xamarin](https://visualstudio.microsoft.com/xamarin/) for Windows agents or [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/) for macOS agents.

For the exact versions of Xamarin that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/xamarin
pool:
  vmImage: 'macOS-10.13' # For Windows, use 'vs2017-win2016'
```

## Build a Xamarin.Android app

To build a Xamarin.Android app, add the following snippet to your `azure-pipelines.yml` file. Change values to match your project configuration. See the [Xamarin.Android](../tasks/build/xamarin-android.md) task for more about these options.

```yaml
variables:
  buildConfiguration: 'Release'
  outputDirectory: '$(build.binariesDirectory)/$(buildConfiguration)'

steps:
- task: NuGetToolInstaller@0

- task: NuGetCommand@2
  inputs:
    restoreSolution: '**/*.sln'

- task: XamarinAndroid@1
  inputs:
    projectFile: '**/*Droid*.csproj'
    outputDirectory: '$(outputDirectory)'
    configuration: '$(buildConfiguration)'
```

### Sign a Xamarin.Android app

See [Sign your mobile Android app during CI](../apps/mobile/app-signing.md#sign-your-android-app) for information about signing your app.

### Next steps

See [Android](android.md) guidance for information about:

* Signing and aligning an Android APK
* Testing on the Android Emulator
* Testing on Azure-hosted devices
* Retaining build artifacts with the build record
* Distributing through App Center
* Distributing through Google Play

## Build a Xamarin.iOS app

To build a Xamarin.iOS app, add the following snippet to your `azure-pipelines.yml` file. Change values to match your project configuration. See the [Xamarin.iOS](../tasks/build/xamarin-ios.md) task for more about these options.

```yaml
variables:
  buildConfiguration: 'Release'

steps:
- task: XamariniOS@2
  inputs:
    solutionFile: '**/*iOS.csproj'
    configuration: '$(buildConfiguration)'
    packageApp: false
    buildForSimulator: true
```

### Sign and provision a Xamarin.iOS app - The PackageApp option

To generate a signed and provisioned Xamarin.iOS app .ipa package, set `packageApp` to `true` and make sure prior to this task you installed the right Apple Provisioning Profile and Apple Certificates that match your App Bundle ID into the agent running the job.

To fulfill these mandatory requisites use the Microsoft Provided tasks for [installing an Apple Provisioning Profile](../tasks/utility/install-apple-provisioning-profile.md) and [installing Apple Certificates](../tasks/utility/install-apple-certificate.md).

```yaml
- task: XamariniOS@2
    inputs:
      solutionFile: '**/*iOS.csproj'
      configuration: 'AppStore'
      packageApp: true
```
> [!TIP]
> The Xamarin.iOS build task will <u>only</u> generate an .ipa package if the agent running the job has the [appropriate provisioning profile and Apple certificate installed](../apps/mobile/app-signing.md?view=azure-devops&tabs=apple-install-during-build#sign-your-apple-ios-macos-tvos-or-watchos-app). If you enable the packageApp option and the agent does not have the appropriate apple provisioning profile(.mobileprovision) and apple certificate(.p12) the build may report succeeded but there will be no .ipa generated.

For Microsoft Hosted agents the .ipa package is by default located under path:  
`{iOS.csproj root}/bin/{Configuration}/{iPhone/iPhoneSimulator}/`

You can configure the output path by adding an argument to the Xamarin.iOS task as following:

# [YAML](#tab/yaml)
```yaml
- task: XamariniOS@2
    inputs:
      solutionFile: '**/*iOS.csproj'
      configuration: 'AppStore'
      packageApp: true
      args: /p:IpaPackageDir="/Users/vsts/agent/2.153.2/work/1/a"
```

This example locates the .ipa in the Build Artifact Staging Directoy ready to be pushed into Azure DevOps as an artifact to each build run.To push it into Azure DevOps simply add a [Publish Artifact task](../tasks/utility/publish-build-artifacts.md) to the end of your pipeline.

See [Sign your mobile iOS app during CI](../apps/mobile/app-signing.md?view=azure-devops&tabs=apple-install-during-build#sign-your-apple-ios-macos-tvos-or-watchos-app) for more information about signing and provisioning your iOS app.

# [Classic](#tab/classic)
Expand menu Advanced for the Xamarin.iOS build task and add **/p:IpaPackageDir="/Users/vsts/agent/2.153.2/work/1/a"** in the input field Arguments to place the generated .ipa package in the Build Artifact Staging Directory. To push it into Azure DevOps simply add a [Publish Artifact task](../tasks/utility/publish-build-artifacts.md) to the end of your pipeline. 

### Set the Xamarin SDK version on macOS

To set a specific Xamarin SDK version to use on the Microsoft-hosted macOS agent pool, add the following snippet before the `XamariniOS` task in your `azure-pipelines.yml` file. For details on properly formatting the version number (shown as **5_4_1** below), see [How can I manually select versions of tools on the Hosted macOS agent?](../agents/hosted.md#how-can-i-manually-select-versions-of-tools-on-the-hosted-macos-agent).

```yaml
- script: sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1
  displayName: 'Select Xamarin SDK version'
```

## Build Xamarin.Android and Xamarin.iOS apps with one pipeline

You can build and test your Xamarin.Android app, Xamarin.iOS app, and related apps in the same pipeline by defining multiple [jobs](../process/phases.md) in `azure-pipelines.yml`. These jobs can run in parallel to save time. The following complete example builds a Xamarin.Android app on Windows, and a Xamarin.iOS app on macOS, using two jobs.

```yaml
# https://docs.microsoft.com/vsts/pipelines/languages/xamarin
jobs:
- job: Android
  pool:
    vmImage: 'vs2017-win2016'
  variables:
    buildConfiguration: 'Release'
    outputDirectory: '$(build.binariesDirectory)/$(buildConfiguration)'
  steps:
  - task: NuGetToolInstaller@0
  - task: NuGetCommand@2
    inputs:
      restoreSolution: '**/*.sln'
  - task: XamarinAndroid@1
    inputs:
      projectFile: '**/*droid*.csproj'
      outputDirectory: '$(outputDirectory)'
      configuration: '$(buildConfiguration)'

- job: iOS
  pool:
    vmImage: 'macOS-10.13'
  variables:
    buildConfiguration: 'Release'
  steps:
  - task: NuGetToolInstaller@0
  - task: NuGetCommand@2
    inputs:
      restoreSolution: '**/*.sln'
  - task: XamariniOS@2
    inputs:
      solutionFile: '**/*iOS.csproj'
      configuration: '$(buildConfiguration)'
      buildForSimulator: true
      packageApp: false
```

### Next steps

See [Xcode](xcode.md) guidance for information about:

* Testing on Azure-hosted devices
* Retaining build artifacts with the build record
* Distributing through App Center
* Distributing through the Apple App Store
