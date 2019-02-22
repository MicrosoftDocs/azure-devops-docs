---
title: Install Apple Provisioning Profile task
description: Install an Apple provisioning profile required to build on a macOS agent in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 0f9f66ca-250e-40fd-9678-309bcd439d5e
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 12/07/2018
monikerRange: '>= tfs-2018'
---

# Install Apple Provisioning Profile task

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to install an Apple provisioning profile that is required to build on a macOS agent.
You can use this task to install provisioning profiles needed to build iOS Apps, Apple WatchKit Apps and App Extensions.

You can install an Apple provisioning profile that is:

- Stored as a [secure file](../../library/secure-files.md) on the server.
- (**Azure Pipelines**) Committed to the source repository or copied to a local path on the macOS agent. We recommend encrypting the provisioning profiles if you are committing them to the source repository. The **Decrypt File** task can be used to decrypt them during a build or release.

## Demands

xcode

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/InstallAppleProvisioningProfileV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| Provisioning Profile Location (**Azure Pipelines**) | Select the location of the provisioning profile to install. The provisioning profile can be uploaded to **Secure Files** or stored in your source repository or a local path on the agent. |
| Provisioning Profile | Select the provisioning profile that was uploaded to **Secure Files** to install on the macOS agent (or) Select the provisioning profile from the source repository or specify the local path to a provisioning profile on the macOS agent.|
| Remove Profile After Build | Select to specify that the provisioning profile should be removed from the agent after the build or release is complete. |
