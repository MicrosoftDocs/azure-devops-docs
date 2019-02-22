---
title: Download Secure File task
description: Download a secure file to a temporary location on the build or release agent in Azure Pipelines and Team Foundation Server
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2a6ca863-f2ce-4f4d-8bcb-15e64608ec4b
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Secure File task

**Azure Pipelines**

Use this task in a build or release pipeline to download a secure file to a temporary location on the build or release agent.

Use this task to download a [secure file](../../library/secure-files.md) from the server during a build or release.

Once downloaded, the secure file is located in the `$(Agent.TempDirectory)` directory of the Azure Pipelines Agent.

The full path of the downloaded file is stored to the `$env:DOWNLOADSECUREFILE_SECUREFILEPATH` environment variable.

If you use multiple versions of the Download Secure File task in your pipeline, they can be referenced with the `$env:DOWNLOADSECUREFILE1_SECUREFILEPATH`, `$env:DOWNLOADSECUREFILE2_SECUREFILEPATH`, `...` environment variables, where the number in the environment variable corresponds with the task version.

Note that if you use two Download Secure File tasks in the same pipeline with the same task version, the `$env:DOWNLOADSECUREFILE_SECUREFILEPATH` environment variable will not be populated, but both files will still be downloaded to `$(Agent.TempDirectory)`.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadSecureFileV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| Secure File | Select the secure file to download to a temporary location on the agent machine. The file will be deleted after the build or release. |
