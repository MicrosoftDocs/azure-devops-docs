---
title: Build, test, and deploy Android apps
description: Automatically build, test, and deploy Android projects with Azure Pipelines.
ms.topic: quickstart
ms.assetid: 7b2856ea-290d-4fd4-9734-ea2d48cb19d3
ms.author: vijayma
ms.reviewer: dastahel
ms.custom: seodec18, freshness-fy22q2
ms.date: 12/22/2021
monikerRange: azure-devops
author: vijayma
---

# Build, test, & deploy Android apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can set up pipelines to automatically build, test, and deploy Android applications.
## Prerequisites

You must have the following items:
- GitHub account. If you don't have a GitHub account, [create one now](https://github.com).
- Azure DevOps project. If you don't have a project, [create one now](../../organizations/projects/create-project.md).

## Set up pipeline

Do the following tasks to set up a pipeline for a sample Android application.

1. Fork the following repository to your GitHub account to get the code for a simple Android application.

    ```
    https://github.com/MicrosoftDocs/pipelines-android
    ```

2. Sign in to your Azure DevOps organization and go to your project.

3. Select **Pipelines** > **Create pipeline** or **New pipeline**.

4. Select **GitHub** as the location of your source code.
   
   :::image type="content" source="../media/python/where-is-your-code.png" alt-text="Screenshot showing list of repositories to select from.":::
   
   You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

5. Select the **-android** repository that you previously forked.

6. Select **Approve and install** on the screen that follows.
   
   Azure Pipelines generates a YAML file for your pipeline.

7. Select **Run**.
8. **Commit directly to the main branch**, and then choose **Run** again.

9.  Wait for the run to finish.

You have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Build with Gradle

Gradle is a common build tool used for building Android projects. For more information about your options, see the [Gradle](/azure/devops/pipelines/tasks/reference/gradle-v3) task.

```yaml
# https://learn.microsoft.com/azure/devops/pipelines/ecosystems/android
pool:
  vmImage: 'macOS-latest'

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

- Adjust the **workingDirectory** value if your `gradlew` file isn't in the root of the repository.
The directory value should be similar to the root of the repository,
such as `AndroidApps/MyApp` or `$(system.defaultWorkingDirectory)/AndroidApps/MyApp`.

- Adjust the **gradleWrapperFile** value if your `gradlew` file isn't in the root of the repository.
The file path value should be similar to the root of the repository,
such as `AndroidApps/MyApp/gradlew` or `$(system.defaultWorkingDirectory)/AndroidApps/MyApp/gradlew`.

### Adjust Gradle tasks

Adjust the **tasks** value for the build variant you prefer, such as `assembleDebug` or `assembleRelease`.
For more information, see the following Google Android development documentation:
- [Build a debug APK](https://developer.android.com/studio/build/building-cmdline#DebugMode) and
- [Configure build variants](https://developer.android.com/studio/build/build-variants.html).

### Sign and align an Android Package (APK)

If your build doesn't already [sign and zipalign](https://developer.android.com/studio/publish/app-signing) the APK,
add the [Android Signing](/azure/devops/pipelines/tasks/reference/android-signing-v3) task to the YAML.
An APK must be signed to run on a device instead of an emulator. Zipaligning reduces the RAM consumed by the application.

> [!IMPORTANT]
> We recommend storing each of the following passwords in a [secret variable](../process/variables.md#secret-variables).

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

## Test

### Test on the Android Emulator

Create the [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task and copy paste the code below in order to install and run the emulator. 
Don't forget to arrange the emulator parameters to fit your testing environment.
 The emulator starts as a background process and is available in later tasks.

```bash
#!/usr/bin/env bash

# Install AVD files
echo "y" | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install 'system-images;android-27;google_apis;x86'

# Create emulator
echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n xamarin_android_emulator -k 'system-images;android-27;google_apis;x86' --force

$ANDROID_HOME/emulator/emulator -list-avds

echo "Starting emulator"

# Start emulator in background
nohup $ANDROID_HOME/emulator/emulator -avd xamarin_android_emulator -no-snapshot > /dev/null 2>&1 &
$ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82'

$ANDROID_HOME/platform-tools/adb devices

echo "Emulator started"
```

### Test on Azure-hosted devices

Add the [App Center Test](/azure/devops/pipelines/tasks/reference/app-center-test-v1) task to test the application in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required, which must later be converted to paid.

[Sign up with App Center](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) first.

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/includes/yaml/AppCenterTestV1.md)]

::: moniker-end

### Keep artifacts with the build record

Add the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks. Your APK gets stored with the build record or test, and gets deployed in later pipelines. For more information, see [Artifacts](../artifacts/pipeline-artifacts.md).

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

### Add App Center

Add the [App Center Distribute](/azure/devops/pipelines/tasks/reference/app-center-distribute-v3) task to distribute an application to a group of testers or beta users, or promote the application to Intune or Google Play. A free [App Center](https://appcenter.ms) account is required (no payment is necessary).

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/includes/yaml/AppCenterDistributeV1.md)]

::: moniker-end

### Install Google Play

Install the [Google Play extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play)
and use the following tasks to automate interaction with Google Play. By default, these tasks authenticate to Google Play
using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [Google Play Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---release)
task to release a new Android app version to the Google Play store.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayRelease@4
  inputs:
    apkFile: '**/*.apk'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    track: 'internal'
```

::: moniker-end

#### Promote

Add the [Google Play Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---promote)
task to promote a previously released Android application update from one track to another, such as `alpha` &rarr; `beta`.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayPromote@3
  inputs:
    packageName: 'com.yourCompany.appPackageName'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    sourceTrack: 'internal'
    destinationTrack: 'alpha'
```

::: moniker-end

#### Increase rollout

Add the [Google Play Increase Rollout](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---increase-rollout)
task to increase the rollout percentage of an application that was previously released to the `rollout` track.

::: moniker range="> tfs-2018"

```yaml
- task: GooglePlayIncreaseRollout@2
  inputs:
    packageName: 'com.yourCompany.appPackageName'
    serviceEndpoint: 'yourGooglePlayServiceConnectionName'
    userFraction: '0.5' # 0.0 to 1.0 (0% to 100%)
```

::: moniker-end

#### Status update

Add the [Google Play Status Update](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---status-update)
task to update the rollout status for the application that was previously released to the `rollout` track.

::: moniker range="> tfs-2018"

```yaml
  - task: GooglePlayStatusUpdate@2
    inputs:
      authType: ServiceEndpoint
      packageName: 'com.yourCompany.appPackageName'
      serviceEndpoint: 'yourGooglePlayServiceConnectionName'
      status: 'inProgress' # draft | inProgress | halted | completed
```

::: moniker-end

## Related extensions

- [Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) (Codified Security)  
- [Google Play](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) (Microsoft)  
- [Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) (James Montemagno)  
- [Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) (Perfecto Mobile)  
- [React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) (Microsoft)  

## FAQ

### Q: How do I create app bundles?

A: You can build and sign your app bundle with an inline script and a secure file. To do so, first download your keystore and [store it as a secure file in the Library](../library/secure-files.md). Then, create variables for `keystore.password`, `key.alias`, and `key.password` in a [variable group](../library/variable-groups.md). 

Next, use the [Download Secure File](/azure/devops/pipelines/tasks/reference/download-secure-file-v1) and [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) tasks to download your keystore and build and sign your app bundle.

In this YAML file, download an `app.keystore` secure file and use a bash script to generate an app bundle. Then, use [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) to copy the app bundle. From there, create and save an artifact with [Publish Build Artifact](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) or use the [Google Play extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) to publish.

::: moniker range="> tfs-2018"

```yaml
- task: DownloadSecureFile@1
  name: keyStore
  displayName: "Download keystore from secure files"
  inputs:
    secureFile: app.keystore

- task: Bash@3
  displayName: "Build and sign App Bundle"
  inputs:
    targetType: "inline"
    script: |
      msbuild -restore $(Build.SourcesDirectory)/myAndroidApp/*.csproj -t:SignAndroidPackage -p:AndroidPackageFormat=aab -p:Configuration=$(buildConfiguration) -p:AndroidKeyStore=True -p:AndroidSigningKeyStore=$(keyStore.secureFilePath) -p:AndroidSigningStorePass=$(keystore.password) -p:AndroidSigningKeyAlias=$(key.alias) -p:AndroidSigningKeyPass=$(key.password)

- task: CopyFiles@2
  displayName: 'Copy deliverables'
  inputs:
    SourceFolder: '$(Build.SourcesDirectory)/myAndroidApp/bin/$(buildConfiguration)'
    Contents: '*.aab'
    TargetFolder: 'drop'
```

::: moniker-end
