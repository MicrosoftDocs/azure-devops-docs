---
title: Android build task (deprecated; use Gradle)
ms.custom: seodec18
description: Android build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 21C3DC47-7D67-4427-8386-ACE3A6279995
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Android build task (deprecated; use Gradle)

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build an Android app using Gradle and optionally start the emulator for unit tests.

## Deprecated
**The Android Build task has been deprecated. Use the [Gradle](gradle.md) task instead.**

## Demands

The build agent must have the following capabilities:

* Android SDK (with the version number you will build against)
* Android Support Repository (if referenced by Gradle file)

  ## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Location of Gradle Wrapper</td>
<td>
<p>The location in the repository of the gradlew wrapper used for the build. For agents on Windows (including Microsoft-hosted agents), you must use the <code>gradlew.bat</code> wrapper. Agents on Linux or macOS can use the <code>gradlew</code> shell script.</p>
<p>See <a href="https://docs.gradle.org/current/userguide/gradle_wrapper.html" data-raw-source="[The Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)">The Gradle Wrapper</a>.</p>
</td>
</tr>
<tr>
<td>Project Directory</td>
<td>Relative path from the repo root to the root directory of the application (likely where your build.gradle file is).</td>
</tr>
<tr>
<td>Gradle Arguments</td>
<td>
<p>Provide any options to pass to the Gradle command line.     The default value is <code>build</code></p>
<p>See <a href="https://docs.gradle.org/current/userguide/gradle_command_line.html" data-raw-source="[Gradle command line](https://docs.gradle.org/current/userguide/gradle_command_line.html)">Gradle command line</a>.</p>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Android Virtual Device (AVD) Options</th>
</tr>
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
<p>See <a href="http://developer.android.com/ndk/guides/abis.html" data-raw-source="[ABI Management](http://developer.android.com/ndk/guides/abis.html)">ABI Management</a>.</p>
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
<p>See <a href="http://developer.android.com/tools/help/android.html" data-raw-source="[Android Command Line](http://developer.android.com/tools/help/android.html)">Android Command Line</a>.</p>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Emulator Options</th>
</tr>
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


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Related tasks

[Android Signing](android-signing.md)
