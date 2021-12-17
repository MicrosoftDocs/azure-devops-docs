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

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

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

<table>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Name
</td>
<td>
Name of the AVD to be started or created.
<blockquote><strong>Note: </strong> You must deploy your own <a href="../../agents/agents.md" data-raw-source="[agent](../../agents/agents.md)">agent</a> to use this option. You cannot use a Microsoft-hosted pool if you want to create an AVD.
</blockquote>
</td>
</tr>
<tr>
<td>Create AVD</td>
<td><p>Select this check box if you would like the AVD to be created if it does not exist.</p>
</td>
</tr>
<tr>
<td>AVD Target SDK</td>
<td>Android SDK version the AVD should target.  The default value is <code>android-19</code></td>
</tr>
<tr>
<td>AVD Device</td>
<td>(Optional) Device pipeline to use.  Can be a device index or id.  The default value is <code>Nexus 5</code></td>
</tr>
<tr>
<td>AVD ABI</td>
<td>
<p>The Application Binary Interface to use for the AVD.  The default value is <code>default/armeabi-v7a</code></p>
<p>See <a href="http://developer.android.com/ndk/guides/abis.html" data-raw-source="[ABI Management](https://developer.android.com/ndk/guides/abis.html)">ABI Management</a>.</p>
</td>
</tr>
<tr>
<td>Overwrite Existing AVD</td>
<td>Select this check box if an existing AVD with the same name should be overwritten.</td>
</tr>
<tr>
<td>Create AVD Optional Arguments</td>
<td>
<p>Provide any options to pass to the <code>android create avd</code> command.</p>
<p>See <a href="http://developer.android.com/tools/help/android.html" data-raw-source="[Android Command Line](https://developer.android.com/tools/help/android.html)">Android Command Line</a>.</p>
</td>
</tr>
<tr>
</table>

| Argument | Description |
|----------|-------------|
| Name | Name of the AVD to be started or created. < /br>
You must deploy your own [agent](../../agents/agents.md) to use this option. You cannot use a Microsoft-hosted pool if you want to create an AVD. |
| Create AVD | Select this check box if you would like the AVD to be created if it does not exist. |
| AVD Target SDK | Android SDK version the AVD should target.  The default value is `android-19`. |
| AVD Device | (Optional) Device pipeline to use.  Can be a device index or id.  The default value is `Nexus 5`. |
| AVD ABI | he Application Binary Interface to use for the AVD.  The default value is `default/armeabi-v7a`. See [ABI Management](https://developer.android.com/ndk/guides/abis.html)>. |
| Overwrite Existing AVD | Select this check box if an existing AVD with the same name should be overwritten. |
| Create AVD Optional Arguments | Provide any options to pass to the `android create avd` command. See [Android Command Line](https://developer.android.com/tools/help/android.html). |

### Emulator options

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Start and Stop Android Emulator</td>
<td>
<p>Check if you want the emulator to be started and stopped when Android Build task finishes.</p>
<blockquote><strong>Note: </strong> You must deploy your own <a href="../../agents/agents.md" data-raw-source="[agent](../../agents/agents.md)">agent</a> to use this option. You cannot use a Microsoft-hosted pool if you want to use an emulator.
</blockquote>
</td>
</tr>
<tr>
<td>Timeout in Seconds</td>
<td>
How long should the build wait for the emulator to start.  The default value is <code>300</code> seconds.
</td>
</tr>
<tr>
<td>Headless Display</td>
<td>
Check if you want to start the emulator with no GUI (headless mode).
</td>
</tr>
<tr>
<td>Emulator Optional Arguments</td>
<td>
(Optional) Provide any options to pass to the <code>emulator</code> command.  The default value is <code>-no-snapshot-load -no-snapshot-save</code>
</td>
</tr>
<tr>
<td>Delete AVD</td>
<td>
Check if you want the AVD to be deleted upon completion.
</td>
</tr>
</table>

### [Task control options](../../process/tasks.md#controloptions)

## Related tasks

[Android signing](android-signing.md)
