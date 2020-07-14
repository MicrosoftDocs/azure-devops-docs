---
title: Android signing build and release task
ms.custom: seodec18
description: Android signing build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 16CF200D-EC24-4485-BCF5-C9195FE278F1
ms.author: vijayma
author: vijayma
ms.date: 12/17/2019
monikerRange: '>= tfs-2015'
---


# Android signing task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task in a pipeline to sign and align Android APK files.

## Demands

The build agent must have the following capabilities:

 * Java JDK

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AndroidSigningV3.md)]

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
      <td><code>files</code><br/>APK files</td>
      <td>
         <p>(Required) Relative path from the repo root to the APK(s) you want to sign.  You can use wildcards to specify multiple files. For example:</p>
         <ul>
            <li><code>outputs\apk*.apk</code> to sign all .APK files in the outputs\apk\ subfolder</li>
            <li><code><em>*\bin\</em>.apk</code> to sign all .APK files in all bin subfolders</li>
         </ul>
         <br/>Default value: **/*.apk<br/>
         Argument aliases: <code>apkFiles</code>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Signing Options</th>
   </tr>
   <tr>
      <td><code>apksign</code><br/>Sign the APK</td>
      <td>
         (Optional) Select this option to sign the APK with a provided Android Keystore file. Unsigned APKs can only run in an emulator. APKs must be signed to run on a device.<br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>keystoreFile</code><br/>Keystore file</td>
      <td>
         (Required) Select or enter the file name of the Android Keystore file that should be used to sign the APK. This file must be uploaded to the <a href="../../library/secure-files.md" data-raw-source="[secure files](../../library/secure-files.md)">secure files</a> library where it is securely stored with encryption. The Android Keystore file will be used to sign the APK, but will be removed from the agent machine when the pipeline completes.<br/>Argument aliases: <code>apksignerKeystoreFile</code>
      </td>
   </tr>
   <tr>
      <td><code>keystorePass</code><br/>Keystore password</td>
      <td>
         <p>(Optional) Enter the password for the provided Android Keystore file.</p>
         <blockquote><strong>Important: </strong> Use a new variable with its lock enabled on the Variables pane to encrypt this value. See <a href="../../process/variables.md#secret-variables" data-raw-source="[secret variables](../../process/variables.md#secret-variables)">secret variables</a>.</blockquote><br/>Argument aliases: <code>apksignerKeystorePassword</code>
      </td>
   </tr>
   <tr>
      <td><code>keystoreAlias</code><br/>Alias</td>
      <td>
         (Optional) Enter the alias that identifies the public/private key pair to be used in the keystore file.<br/>Argument aliases: <code>apksignerKeystoreAlias</code>
      </td>
   </tr>
   <tr>
      <td><code>keyPass</code><br/>Key password</td>
      <td>
         (Optional) Enter the key password for the alias and Android Keystore file.
         <blockquote><strong>Important: </strong> Use a new variable with its lock enabled on the Variables pane to encrypt this value. See <a href="../../process/variables.md#secret-variables" data-raw-source="[secret variables](../../process/variables.md#secret-variables)">secret variables</a>.</blockquote><br/>Argument aliases: <code>apksignerKeyPassword</code>
      </td>
   </tr>
   <tr>
      <td><code>apksignerArguments</code><br/>apksigner arguments</td>
      <td>
         <p>(Optional) Provide any options to pass to the apksigner command line. Default is: <code>--verbose</code>.</p>
         <p>See the <a href="https://developer.android.com/studio/command-line/apksigner" data-raw-source="[apksigner documentation](https://developer.android.com/studio/command-line/apksigner)">apksigner documentation</a>.</p><br/>Default value: --verbose
      </td>
   </tr>
   <tr>
      <td><code>apksignerLocation</code><br/>apksigner location</td>
      <td>
         <p>(Optional) Optionally specify the location of the apksigner executable used during signing. This defaults to the apksigner found in the Android SDK version folder that your application builds against.</p><br/>Argument aliases: <code>apksignerFile</code>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Zipalign Options</th>
   </tr>
   <tr>
      <td><code>zipalign</code><br/>Zipalign</td>
      <td>
         <p>(Optional) Select if you want to zipalign your package. This reduces the amount of RAM consumed by an app.</p><br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>zipalignLocation</code><br/>Zipalign location</td>
      <td>
         <p>(Optional) Optionally specify the location of the zipalign executable used during signing. This defaults to the zipalign found in the Android SDK version folder that your application builds against.</p><br/>Argument aliases: <code>zipalignFile</code>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Related tasks

[Android Build](android-build.md)
