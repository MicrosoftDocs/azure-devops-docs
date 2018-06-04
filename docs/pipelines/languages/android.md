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

This guide explains creating pipelines for Android projects. Before this guidance, read the [web quickstart](../get-started-designer.md) or [YAML quickstart](../get-started-yaml.md).

## Get started

You can build Android projects using [Microsoft-hosted agents](../agents/hosted.md) that include tools for Android. Or, you can use [self-hosted agents](../agents/agents.md#install) with specific tools you need.

# [Web](#tab/web)

Choose the **Android** template as you create a build pipeline for your project. This will get you started with tasks to build, test, sign, and align an Android APK.

# [YAML](#tab/yaml)

Add the following YAML to a file named **vsts-ci.yml** in the root of your repository. Make sure the `gradleWrapperFile` and `tasks` values match your project configuration. See the [Gradle](../tasks/build/gradle.md) task for more about these options.

```yaml
# https://aka.ms/yaml
queue: 'Hosted VS2017'
steps:

- task: Gradle@2
  inputs:
    gradleWrapperFile: 'gradlew'
    tasks: 'assembleRelease'
```

---

## Sign and align an APK

Add the following YAML to sign and zipalign a built APK. An APK must be signed to run on a device instead of an emulator. Zipaligning reduces the RAM it consumes. See the [Android Signing](../tasks/build/android-signing.md) task for more about these options.

```yaml
- task: AndroidSigning@2
  inputs:
    apkFiles: '**/*.apk'
    jarsign: true
    jarsignerKeystoreFile: 'MyKeystoreFile'
    jarsignerKeystorePassword: '$(jarsignerKeystorePassword)'
    jarsignerKeystoreAlias: 'MyKeyStoreAlias'
    jarsignerKeyPassword: '$(jarsignerKeyPassword)'
    jarsignerArguments: '-verbose -sigalg MD5withRSA -digestalg SHA1'
    zipalign: true
    zipalignFile: 'MyZipalignFile'
```

## Test on the Android Emulator

> Note: The Android Emulator is currently available only the **Hosted macOS** agent.

## Test on devices

Add the [App Center Test](../tasks/test/app-center-test.md) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required.

::: moniker range="vsts"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterTestV1.1.md)]

::: moniker-end

## Distribute and promote

Add the following YAML to distribute an app to a group of testers or beta users, or promote the app to Intune or Google Play. A free [App Center]( https://appcenter.ms) account is required. See the [App Center Distribute](../tasks/deploy/app-center-distribute.md) task for more about these options. Alternatively, install the [Google Play extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play) to release directly to Google Play.

::: moniker range="vsts"

[!INCLUDE [temp](../tasks/_shared/yaml/AppCenterDistributeV1.1.md)]

::: moniker-end