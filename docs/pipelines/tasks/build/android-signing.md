---
title: Android signing build and release task
ms.custom: seodec18
description: Android signing build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 16CF200D-EC24-4485-BCF5-C9195FE278F1
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.date: 10/13/2019
monikerRange: '>= tfs-2015'
---


# Android signing task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a pipeline to sign and align Android APK files.

## Demands

The build agent must have the following capabilities:

 * Java JDK

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AndroidSigningV3.md)]

::: moniker-end

 ## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>apkFiles</td>
<td>
<p>Relative path from the repo root to the APK(s) you want to sign.  You can use wildcards to specify multiple files. For example:</p>
<ul>
<li><code>outputs\apk*.apk</code> to sign all .APK files in the outputs\apk\ subfolder</li>
<li><code><em>*\bin\</em>.apk</code> to sign all .APK files in all bin subfolders</li>
</ul>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Signing Options</th>
</tr>
<tr>
<td>apksign</td>
<td>
Select this option to sign the APK with a provided Android Keystore file. Unsigned APKs can only run in an emulator. APKs must be signed to run on a device.
</td>
</tr>
<tr>
<td>apksignerKeystoreFile</td>
<td>
Select or enter the file name of the Android Keystore file that should be used to sign the APK. This file must be uploaded to the <a href="../../library/secure-files.md" data-raw-source="[secure files](../../library/secure-files.md)">secure files</a> library where it is securely stored with encryption. The Android Keystore file will be used to sign the APK, but will be removed from the agent machine when the pipeline completes.
</td>
</tr>
<tr>
<td>apksignerKeystorePassword</td>
<td>
<p>Enter the password for the provided Android Keystore file.</p>
<blockquote><strong>Important: </strong> Use a new variable with its lock enabled on the Variables pane to encrypt this value. See <a href="../../process/variables.md#secret-variables" data-raw-source="[secret variables](../../process/variables.md#secret-variables)">secret variables</a>.
</blockquote>
</td>
</tr>
<tr>
<td>apksignerKeystoreAlias</td>
<td>
Enter the alias that identifies the public/private key pair to be used in the keystore file.
</td>
</tr>
<tr>
<td>apksignerKeyPassword</td>
<td>
Enter the key password for the alias and Android Keystore file.
<blockquote><strong>Important: </strong> Use a new variable with its lock enabled on the Variables pane to encrypt this value. See <a href="../../process/variables.md#secret-variables" data-raw-source="[secret variables](../../process/variables.md#secret-variables)">secret variables</a>.
</blockquote>
</td>
</tr>
<tr>
<td>apksignerArguments</td>
<td>
<p>(Optional) Provide any options to pass to the apksigner command line. Default is: <code>-verbose -sigalg MD5withRSA -digestalg SHA1</code>.</p>
<p>See the <a href="https://developer.android.com/studio/command-line/apksigner" data-raw-source="[apksigner documentation](https://developer.android.com/studio/command-line/apksigner)">apksigner documentation</a>.</p>
</td>
</tr>
 <tr>
<td>apksignerFile</td>
<td>
<p>(Optional) Optionally specify the location of the apksigner executable used during signing. This defaults to the apksigner found in the Android SDK version folder that your application builds against.</p>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Zipalign Options</th>
</tr>
<tr>
<td>zipalign</td>
<td>
<p>(Optional) Select if you want to zipalign your package. This reduces the amount of RAM consumed by an app. The default is <code>true</code>.</p>
</td>
</tr>
<tr>
<td>zipalignFile</td>
<td>
<p>(Optional) Optionally specify the location of the zipalign executable used during signing. This defaults to the zipalign found in the Android SDK version folder that your application builds against.</p>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Related tasks

[Android Build](android-build.md)
