---
title: Install Apple Certificate
description: Install an Apple certificate required to build on a macOS agent
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: d2eff759-736d-4b7b-8554-7ba0960d49d6
ms.manager: dastahel
ms.author: madhurig
ms.date: 05/22/2017
---

# Utility: Install Apple Certificate

**Team Services**

![](../build/_img/xcode-build.png) Install an Apple certificate required to build on a macOS agent

This task allows installing an Apple certificate that is stored as a [secure file](../../concepts/library/secure-files.md) on the server. 

## Demands

xcode

## Agent version

2.116.0 or higher is required

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Certificate (P12)</td>
<td>
Select the certificate (.p12) that was uploaded to `Secure Files` to install on the macOS agent.
</td>
</tr>
<tr>
<td>Certificate (P12) Password</td>
<td>
Password to the Apple certificate (.p12). Use a new build variable with its lock enabled on the `Variables` tab to encrypt this value.
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Keychain</td>
<td>
Select the keychain in which to install the Apple certificate. You can choose to install the certificate in a temporary keychain (default), the default keychain or a custom keychain. A temporary keychain will always be deleted after the build or release is complete."
</td>
</tr>
<tr>
<td>Keychain Password</td>
<td>
Password to unlock the keychain. Use a new build variable with its lock enabled on the `Variables` tab to encrypt this value. A password is generated for the temporary keychain if not specified.
</td>
</tr>
<tr>
<td>Delete Certificate from Keychain</td>
<td>
Select to delete the certificate from the keychain after the build or release is complete. This option is visible when custom keychain or default keychain are selected.
</td>
</tr>
<tr>
<td>Custom Keychain Path</td>
<td>
Full path to a custom keychain file. The keychain will be created if it does not exist. This option is visible when a custom keychain is selected.
</td>
</tr>
<tr>
<td>Delete Custom Keychain</td>
<td>
Select to delete the custom keychain from the agent after the build or release is complete. This option is visible when a custom keychain is selected.
</td>
</tr>
</table>
