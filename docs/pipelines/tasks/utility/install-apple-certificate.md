---
title: Install Apple Certificate task 
description: Install an Apple certificate required to build on a macOS agent on Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: d2eff759-736d-4b7b-8554-7ba0960d49d6
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 12/07/2018
monikerRange: '>= tfs-2018'
---

# Install Apple Certificate task

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to install an Apple certificate that is required to build on a macOS agent.
You can use this task to install an Apple certificate that is stored as a [secure file](../../library/secure-files.md) on the server.

## Demands

xcode

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/InstallAppleCertificateV2.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| Certificate (P12) | Select the certificate (.p12) that was uploaded to **Secure Files** to install on the macOS agent. |
| Certificate (P12) Password | Password to the Apple certificate (.p12). Use a new build variable with its lock enabled on the **Variables** tab to encrypt this value. |
| Advanced - Keychain | Select the keychain in which to install the Apple certificate. You can choose to install the certificate in a temporary keychain (default), the default keychain or a custom keychain. A temporary keychain will always be deleted after the build or release is complete. |
| Advanced - Keychain Password | Password to unlock the keychain. Use a new build variable with its lock enabled on the **Variables** tab to encrypt this value. A password is generated for the temporary keychain if not specified. |
| Advanced - Delete Certificate from Keychain | Select to delete the certificate from the keychain after the build or release is complete. This option is visible when custom keychain or default keychain are selected. |
| Advanced - Custom Keychain Path | Full path to a custom keychain file. The keychain will be created if it does not exist. This option is visible when a custom keychain is selected. |
| Advanced - Delete Custom Keychain | Select to delete the custom keychain from the agent after the build or release is complete. This option is visible when a custom keychain is selected. |
