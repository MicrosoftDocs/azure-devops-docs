---
title: Build Xamarin apps
description: Build Xamarin projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: quickstart
ms.assetid: 2bf80a9f-3f37-4582-8226-4a1d7e519265
ms.reviewer: dastahel
ms.custom: seodec18,contperf-fy21q2
ms.date: 05/24/2021
monikerRange: 'azure-devops'
# Customer intent: As an Azure DevOps user, I want to build a pipeline that deploys a Xamarin app so that I can take advantage of automated builds.
---

# Quickstart: Build and deploy Xamarin apps with a pipeline

**Azure Pipelines**

Get started with [Xamarin](https://dotnet.microsoft.com/apps/xamarin) and Azure Pipelines by using building a pipeline to deploy a Xamarin app. You can deploy Android and iOS apps in the same or separate pipelines.  

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).

### Get code

[!INCLUDE [include](includes/get-code-before-sample-repo.md)]

```
https://github.com/MicrosoftDocs/pipelines-xamarin
```

This sample is the  `FirstApp` sample from the `https://github.com/xamarin/xamarin-forms-samples` repository. For more information on getting started with Xamarin, see [Build your first Xamarin.Forms App](/xamarin/get-started/first-app/?pivots=windows).

## Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

### Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

7. When the **Configure** tab appears, select **Xamarin.Android** to build an Android project or **Xamarin.iOS** to build an iOS project. If you want to use the included sample `.yml` files, choose **Existing Azure Pipelines YAML file** and choose from one of the included sample pipelines (Android, iOS, or a combined pipeline that builds both).

8. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

9. If you created a new YAML file, you're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.
   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

10. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

11. See the sections below to learn some of the more common ways to customize your pipeline.


## Set up Xamarin tools

You can use Azure Pipelines to build your Xamarin apps without needing to set up any infrastructure of your own. Xamarin tools are preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use macOS or Windows agents to run Xamarin.Android builds, and macOS agents to run Xamarin.iOS builds. If you are using a self-hosted agent, you must install [Visual Studio Tools for Xamarin](https://visualstudio.microsoft.com/xamarin/) for Windows agents or [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/) for macOS agents.

For the exact versions of Xamarin that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/xamarin
pool:
  vmImage: 'macOS-10.15' # For Windows, use 'windows-2019'
```

## Build a Xamarin.Android app

To build a Xamarin.Android app, add the following snippet to your `azure-pipelines.yml` file. Change values to match your project configuration. See the [Xamarin.Android](../tasks/build/xamarin-android.md) task for more about these options.

```yaml
variables:
  buildConfiguration: 'Release'
  outputDirectory: '$(build.binariesDirectory)/$(buildConfiguration)'

steps:
- task: NuGetToolInstaller@1

- task: NuGetCommand@2
  inputs:
    restoreSolution: '**/*.sln'

- task: XamarinAndroid@1
  inputs:
    projectFile: '**/*Droid*.csproj'
    outputDirectory: '$(outputDirectory)'
    configuration: '$(buildConfiguration)'
    msbuildVersionOption: '16.0'
```

### Sign a Xamarin.Android app

See [Sign your mobile Android app during CI](../apps/mobile/app-signing.md#sign-your-android-app) for information about signing your app.


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

To fulfill these mandatory requisites, use the Microsoft Provided tasks for [installing an Apple Provisioning Profile](../tasks/utility/install-apple-provisioning-profile.md) and [installing Apple Certificates](../tasks/utility/install-apple-certificate.md).

```yaml
- task: XamariniOS@2
    inputs:
      solutionFile: '**/*iOS.csproj'
      configuration: 'AppStore'
      packageApp: true
```
> [!TIP]
> The Xamarin.iOS build task will <u>only</u> generate an .ipa package if the agent running the job has the [appropriate provisioning profile and Apple certificate installed](../apps/mobile/app-signing.md?tabs=apple-install-during-build#sign-your-apple-ios-macos-tvos-or-watchos-app). If you enable the packageApp option and the agent does not have the appropriate apple provisioning profile(.mobileprovision) and apple certificate(.p12) the build may report succeeded but there will be no .ipa generated.

For Microsoft Hosted agents the .ipa package is by default located under path:  
`{iOS.csproj root}/bin/{Configuration}/{iPhone/iPhoneSimulator}/`

You can configure the output path by adding an argument to the Xamarin.iOS task:

# [YAML](#tab/yaml)
```yaml
- task: XamariniOS@2
    inputs:
      solutionFile: '**/*iOS.csproj'
      configuration: 'AppStore'
      packageApp: true
      args: /p:IpaPackageDir="/Users/vsts/agent/2.153.2/work/1/a"
```

This example locates the .ipa in the Build Artifact Staging Directory ready to be pushed into Azure DevOps as an artifact to each build run.To push it into Azure DevOps simply add a [Publish Artifact task](../tasks/utility/publish-build-artifacts.md) to the end of your pipeline.

For more information about signing and provisioning your iOS app, 
see [Sign your mobile iOS app during CI](../apps/mobile/app-signing.md?tabs=apple-install-during-build#sign-your-apple-ios-macos-tvos-or-watchos-app).

### Set the Xamarin SDK version on macOS

To set a specific Xamarin SDK version to use on the Microsoft-hosted macOS agent pool, add the following snippet before the `XamariniOS` task in your `azure-pipelines.yml` file. For details on properly formatting the version number (shown as **5_4_1** below), see [How can I manually select versions of tools on the Hosted macOS agent?](../agents/hosted.md#how-can-i-manually-select-versions-of-tools-on-the-hosted-macos-agent).

```yaml
- script: sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1
  displayName: 'Select Xamarin SDK version'
```

## Build Xamarin.Android and Xamarin.iOS apps with one pipeline

You can build and test your Xamarin.Android app, Xamarin.iOS app, and related apps in the same pipeline by defining multiple [jobs](../process/phases.md) in `azure-pipelines.yml`. These jobs can run in parallel to save time. The following complete example builds a Xamarin.Android app on Windows, and a Xamarin.iOS app on macOS, using two jobs.

```yaml
# Xamarin.Android and Xamarin.iOS
# Build a Xamarin.Android and Xamarin.iOS app.
# Add steps that test, sign, and distribute the app, save build artifacts, and more:
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/xamarin

jobs:

- job: Android
  pool:
    vmImage: 'windows-2019'

  variables:
    buildConfiguration: 'Release'
    outputDirectory: '$(build.binariesDirectory)/$(buildConfiguration)'

  steps:
  - task: NuGetToolInstaller@1

  - task: NuGetCommand@2
    inputs:
      restoreSolution: '**/*.sln'

  - task: XamarinAndroid@1
    inputs:
      projectFile: '**/*droid*.csproj'
      outputDirectory: '$(outputDirectory)'
      configuration: '$(buildConfiguration)'
      msbuildVersionOption: '16.0'

  - task: AndroidSigning@3
    inputs:
      apksign: false
      zipalign: false
      apkFiles: '$(outputDirectory)/*.apk'

  - task: PublishBuildArtifacts@1
    inputs:
      pathtoPublish: '$(outputDirectory)'

- job: iOS
  pool:
    vmImage: 'macOS-10.15'

  steps:
  # To manually select a Xamarin SDK version on the Hosted macOS agent, enable this script with the SDK version you want to target
  # https://go.microsoft.com/fwlink/?linkid=871629
  - script: sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1 
    displayName: 'Select Xamarin SDK version'
    enabled: false

  - task: NuGetToolInstaller@1

  - task: NuGetCommand@2
    inputs:
      restoreSolution: '**/*.sln'

  - task: XamariniOS@2
    inputs:
      solutionFile: '**/*.sln'
      configuration: 'Release'
      buildForSimulator: true
      packageApp: false
```

# [Classic](#tab/classic)
Expand menu Advanced for the Xamarin.iOS build task and add **/p:IpaPackageDir="/Users/vsts/agent/2.153.2/work/1/a"** in the input field Arguments to place the generated .ipa package in the Build Artifact Staging Directory. To push it into Azure DevOps simply add a [Publish Artifact task](../tasks/utility/publish-build-artifacts.md) to the end of your pipeline. 

---

## Clean up resources

If you don't need the example code, delete your GitHub repository and Azure Pipelines project. 

## Next steps

> [!div class="nextstepaction"]
> [Learn more about using Xcode in pipelines](xcode.md)

> [!div class="nextstepaction"]
> [Learn more about using Android in pipelines](android.md)
