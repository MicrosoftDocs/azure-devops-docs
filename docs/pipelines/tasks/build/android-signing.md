---
title: Android signing build and release task
ms.custom: seodec18
description: Android signing build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 16CF200D-EC24-4485-BCF5-C9195FE278F1
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Android signing task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to sign and align Android APK files.

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
<td>APK Files</td>
<td>
<p>Relative path from the repo root to the APK(s) you want to sign.  You can use wildcards to specify multiple files. For example:</p>
<ul>
<li>```outputs\apk\*.apk``` to sign all .APK files in the outputs\apk\ subfolder</li>
<li>```**\\bin\\*.apk``` to sign all .APK files in all bin subfolders</li>
</ul>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Signing Options</th>
</tr>
<tr>
<td>Sign the APK</td>
<td>
Select this option to sign the APK with a provided keystore file. Unsigned APKs can only run in an emulator. APKs must be signed to run on a device.
</td>
</tr>
<tr>
<td>Keystore File</td>
<td>
Enter the file path to the keystore file that should be used to sign the APK. It can either be checked into source control or placed on the build machine directly by an administrator. It is recommended to encrypt the keystore file in source control and use the **Decrypt File** task to decrypt the file during the build.
</td>
</tr>
<tr>
<td>Keystore Password</td>
<td>
<p>Enter the password for the provided keystore file.</p>
<blockquote><strong>Important: </strong> We recommend that you put this value in a [secret variable](../../process/variables.md#secret-variables).
</blockquote>
</td>
</tr>
<tr>
<td>Alias</td>
<td>
Enter the alias that identifies the public/private key pair to be used in the keystore file.
</td>
</tr>
<tr>
<td>Key Password</td>
<td>
Enter the key password for the alias and keystore file.
<blockquote><strong>Important: </strong> We recommend that you put this value in a [secret variable](../../process/variables.md#secret-variables).
</blockquote>
</td>
</tr>
<tr>
<td>Jarsigner Arguments</td>
<td>
<p>Provide any options to pass to the jarsigner command line.  Default is ```-verbose -sigalg MD5withRSA -digestalg SHA1```</p>
<p>See [jarsigner documentation](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jarsigner.html).</p>
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Zipalign Options</th>
</tr>
<tr>
<td>Zipalign</td>
<td>
<p>Select if you want to zipalign your package.  This reduces the amount of RAM consumed by an app.</p>
</td>
</tr>
<tr>
<td>Zipalign Location</td>
<td>
<p>(Optional) The location of the zipalign executable used during signing.  Defaults to the zipalign found in the Android SDK version folder your application builds against.</p>
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Related tasks

[Android Build](android-build.md)
