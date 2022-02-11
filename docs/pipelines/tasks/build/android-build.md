---
title: Android build task (deprecated; use Gradle)
ms.custom: seodec18
description: Android build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 21C3DC47-7D67-4427-8386-ACE3A6279995
ms.author: vijayma
author: vijayma
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Android build task (deprecated; use Gradle)

[!INCLUDE [version-gt-eq-2015](../../../includes/version-gt-eq-2015.md)]

Use this task to build an Android app using Gradle and optionally start the emulator for unit tests.

## Deprecated

**The Android Build task has been deprecated. Use the [Gradle](gradle.md) task instead.**

## Demands

The build agent must have the following capabilities:

* Android SDK (with the version number you will build against)
* Android Support Repository (if referenced by Gradle file)

## Arguments

| Argument | Description |
|----------|-------------|
| Location of Gradle Wrapper | The location in the repository of the `gradlew` wrapper used for the build. For agents on Windows (including Microsoft-hosted agents), you must use the `gradlew.bat` wrapper. Agents on Linux or macOS can use the `gradlew` shell script. See [The Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html). |
| Project Directory | Relative path from the repo root to the root directory of the application (likely where your build.gradle file is). |
| Gradle Arguments | Provide any options to pass to the Gradle command line. The default value is `build`. See [Gradle command line](https://docs.gradle.org/current/userguide/gradle_command_line.html). |

### Android Virtual Device (AVD) options

| Argument | Description |
|----------|-------------|
| Name | Name of the AVD to be started or created. <br><br> You must deploy your own [agent](../../agents/agents.md) to use this option. You cannot use a Microsoft-hosted pool if you want to create an AVD. |
| Create AVD | Select this check box if you would like the AVD to be created if it does not exist. |
| AVD Target SDK | Android SDK version the AVD should target.  The default value is `android-19`. |
| AVD Device | (Optional) Device pipeline to use.  Can be a device index or id.  The default value is `Nexus 5`. |
| AVD ABI | he Application Binary Interface to use for the AVD.  The default value is `default/armeabi-v7a`. See [ABI Management](https://developer.android.com/ndk/guides/abis.html). |
| Overwrite Existing AVD | Select this check box if an existing AVD with the same name should be overwritten. |
| Create AVD Optional Arguments | Provide any options to pass to the `android create avd` command. See [Android Command Line](https://developer.android.com/tools/help/android.html). |

### Emulator options

| Argument | Description |
|----------|-------------|
| Start and Stop Android Emulator | Check if you want the emulator to be started and stopped when Android Build task finishes. <br><br> You must deploy your own [agent](../../agents/agents.md) to use this option. You cannot use a Microsoft-hosted pool if you want to use an emulator. |
| Timeout in Seconds | How long should the build wait for the emulator to start.  The default value is `300` seconds. |
| Headless Display | Check if you want to start the emulator with no GUI (headless mode). |
| Emulator Optional Arguments | (Optional) Provide any options to pass to the `emulator` command.  The default value is `-no-snapshot-load -no-snapshot-save`. |
| Delete AVD | Check if you want the AVD to be deleted upon completion. |


### [Task control options](../../process/tasks.md#controloptions)

## Related tasks

[Android signing](android-signing.md)
