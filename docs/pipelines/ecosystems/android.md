---
title: Build, test, and deploy Android apps
description: Automatically build, test, and deploy Android projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 7b2856ea-290d-4fd4-9734-ea2d48cb19d3
ms.manager: jillfra
ms.author: dastahel
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: 'azure-devops'
---

# Build, test, and deploy Android apps

This guidance explains how to automatically build, test, and deploy Android apps.

## Get started

Follow these instructions to set up a pipeline for a sample Android app.

1. The code in the following repository is a simple Android app. To get started, fork this repo to your GitHub account.

    ```
    https://github.com/MicrosoftDocs/pipelines-android
    ```

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your Java sample repository.

1. Azure Pipelines will analyze the code in your repository and recommend starter templates for your pipeline. Select the `Android` template.

1. Azure Pipelines will generate a YAML file for your pipeline. Select **Save and run**, then select **Commit directly to the master branch**, and then choose **Save and run** again.

1. A new run is started. Wait for the run to finish.

When you're done, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file as described in this topic, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Gradle

Gradle is a common build tool used for building Android projects. See the [Gradle](../tasks/build/gradle.md) task for more about these options.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/android
pool:
  vmImage: 'macOS-10.13'

steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'assembleDebug'
```

### Adjust the build path

Adjust the **workingDirectory** value if your `gradlew` file isn't in the root of the repository.
The directory value should be relative to the root of the repository,
such as `AndroidApps/MyApp` or `$(system.defaultWorkingDirectory)/AndroidApps/MyApp`.

Adjust the **gradleWrapperFile** value if your `gradlew` file isn't in the root of the repository.
The file path value should be relative to the root of the repository,
such as `AndroidApps/MyApp/gradlew` or `$(system.defaultWorkingDirectory)/AndroidApps/MyApp/gradlew`.

### Adjust Gradle tasks

Adjust the **tasks** value for the build variant you prefer, such as `assembleDebug` or `assembleRelease`.
For details, see Google's Android development documentation:
[Build a debug APK](https://developer.android.com/studio/build/building-cmdline#DebugMode) and
[Configure build variants](https://developer.android.com/studio/build/build-variants.html).

## Sign and align an Android APK

If your build does not already [sign and zipalign](https://developer.android.com/studio/publish/app-signing) the APK,
add the [Android Signing](../tasks/build/android-signing.md) task to the YAML.
An APK must be signed to run on a device instead of an emulator. Zipaligning reduces the RAM consumed by the app.

<blockquote><strong>Important: </strong>We recommend storing each of the following passwords in a <a href="../process/variables.md#secret-variables" data-raw-source="[secret variable](../process/variables.md#secret-variables)">secret variable</a>.</blockquote>

::: moniker range="> tfs-2018"

```yaml
- task: AndroidSigning@2
  inputs:
    apkFiles: '**/*.apk'
    jarsign: true
    jarsignerKeystoreFile: 'pathToYourKeystoreFile'
    jarsignerKeystorePassword: '$(jarsignerKeystorePassword)'
    jarsignerKeystoreAlias: 'yourKeystoreAlias'
    jarsignerKeyPassword: '$(jarsignerKeyPassword)'
    zipalign: true
```

::: moniker-end

## Test on the Android Emulator

> Note: The Android Emulator is currently available only on the **Hosted macOS** agent.

Create the [Bash](../tasks/utility/bash.md) Task and copy paste the code below in order to install and run the emulator. 
Don't forget to arrange the emulator parameters to fit your testing environment.
 The emulator will be started as a background process and available in subsequent tasks.

```bash
#!/usr/bin/env bash

# Install AVD files
# echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-27;google_apis;x86'

# Create emulator
echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n xamarin_android_emulator -k 'system-images;android-27;google_apis;x86' --force

echo $ANDROID_HOME/emulator/emulator -list-avds

echo "Starting emulator"

# Start emulator in background
nohup $ANDROID_HOME/emulator/emulator -avd xamarin_android_emulator -no-snapshot > /dev/null 2>&1 &
$ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82'

$ANDROID_HOME/platform-tools/adb devices

echo "Emulator started"
```

## Test on Azure-hosted devices

Add the [App Center Test](../tasks/test/app-center-test.md) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required which must later be converted to paid.

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterTestV1.md)]

::: moniker-end

## Retain artifacts with the build record

Add the [Copy Files](../tasks/utility/copy-files.md) and [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) tasks
to store your APK with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../artifacts/pipeline-artifacts.md).

::: moniker range="> tfs-2018"

```yaml
- task: CopyFiles@2
  inputs:
    contents: '**/*.apk'
    targetFolder: '$(build.artifactStagingDirectory)'
- task: PublishBuildArtifacts@1
```

::: moniker-end

## Deploy

### App Center

Add the [App Center Distribute](../tasks/deploy/app-center-distribute.md) task to distribute an app to a group of testers or beta users,
or promote the app to Intune or Google Play. A free [App Center](https://appcenter.ms) account is required (no payment is necessary).

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterDistributeV1.md)]

::: moniker-end

### Google Play

Install the [Google Play extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play)
and use the following tasks to automate interaction with Google Play. By default, these tasks authenticate to Google Play
using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [Google Play Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---release)
task to release a new Android app version to the Google Play store.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayRelease@2
  inputs:
    apkFile: '**/*.apk'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    track: 'internal'
```

::: moniker-end

#### Promote

Add the [Google Play Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---promote)
task to promote a previously-released Android app update from one track to another, such as `alpha` &rarr; `beta`.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayPromote@2
  inputs:
    packageName: 'com.yourCompany.appPackageName'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    sourceTrack: 'internal'
    destinationTrack: 'alpha'
```

::: moniker-end

#### Increase rollout

Add the [Google Play Increase Rollout](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---increase-rollout)
task to increase the rollout percentage of an app that was previously released to the `rollout` track.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayIncreaseRollout@1
  inputs:
    packageName: 'com.yourCompany.appPackageName'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    userFraction: '0.5' # 0.0 to 1.0 (0% to 100%)
```

::: moniker-end

## Related extensions

- [Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) (Codified Security)  
- [Google Play](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) (Microsoft)  
- [Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) (James Montemagno)  
- [Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) (Perfecto Mobile)  
- [React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) (Microsoft)  
