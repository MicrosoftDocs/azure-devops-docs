---
title: Android
description: CI and CD for Android projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 7b2856ea-290d-4fd4-9734-ea2d48cb19d3
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 05/30/2018
monikerRange: '>= tfs-2017'
---

# Android

**VSTS | TFS 2018 | TFS 2017.2**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This guide explains creating pipelines for Android projects. Before this guidance, read the [designer quickstart](../get-started-designer.md) or [YAML quickstart](../get-started-yaml.md).

## Get started

You can build Android projects using [Microsoft-hosted agents](../agents/hosted.md) that include tools for Android. Or, you can use [self-hosted agents](../agents/agents.md#install) with specific tools you need.

# [Designer](#tab/designer)

Choose the **Android** template as you create a pipeline for your project. This will get you started with tasks to build, test, sign, and align an Android APK.

# [YAML](#tab/yaml)

Start by adding the following YAML to a file named **vsts-ci.yml** in the root of your repository. Change any values to match your project configuration. See the [Gradle](../tasks/build/gradle.md) task for more about these options.

```yaml
# https://aka.ms/yaml
queue: 'Hosted VS2017'
steps:
- task: Gradle@2
  inputs:
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx2048m'
    tasks: 'assembleRelease'
```

---

## Sign and align an Android APK

Add the [Android Signing](../tasks/build/android-signing.md) task to sign and zipalign a built APK. An APK must be signed to run on a device instead of an emulator. Zipaligning reduces the RAM it consumes.

<blockquote><strong>Important: </strong>We recommend storing each of the specified passwords in a [secret variable](../process/variables.md#secret-variables).</blockquote>

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

## Test on Azure-hosted devices

Add the [App Center Test](../tasks/test/app-center-test.md) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required which must later be converted to paid.

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterTestV1.md)]

::: moniker-end

## Retain artifacts

Add the [Copy Files](../tasks/utility/copy-files.md) and [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) tasks to store your APK with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../build/artifacts.md).

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

Add the [App Center Distribute](../tasks/deploy/app-center-distribute.md) task to distribute an app to a group of testers or beta users, or promote the app to Intune or Google Play. A free [App Center]( https://appcenter.ms) account is required (no payment is necessary).

::: moniker range="> tfs-2018"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterDistributeV1.md)]

::: moniker-end

### Google Play

Install the [Google Play extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) and use the following tasks to automate interaction with Google Play. By default, these tasks authenticate to Google Play using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [Google Play Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---release) task to release a new Android app version to the Google Play store.

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

Add the [Google Play Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---promote) task to promote a previously-released Android app update from one track to another, such as `alpha` &rarr; `beta`.

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

Add the [Google Play Increase Rollout](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play#user-content-google-play---increase-rollout) task to increase the rollout percentage of an app that was previously released to the `rollout` track.

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

[Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) (Codified Security)  
[Google Play](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) (Microsoft)  
[Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) (James Montemagno)  
[Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) (Perfecto Mobile)  
[React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) (Microsoft)  
