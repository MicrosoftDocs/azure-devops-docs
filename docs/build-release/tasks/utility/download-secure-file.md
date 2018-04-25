---
title: Download Secure File
description: Download a secure file to a temporary location on the build or release agent
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2a6ca863-f2ce-4f4d-8bcb-15e64608ec4b
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 01/19/2018
monikerRange: 'vsts'
---


# Utility: Download Secure File

**VSTS**

![](../utility/_img/secure-file.png) Download a secure file to a temporary location on the build or release agent

Use this task to download a [secure file](../../concepts/library/secure-files.md) from the server during a build or release.

Once downloaded, the secure file is located in the `$env:TEMP` directory of the VSTS Agent.

The full path of the downloaded file is stored to the `$env:DOWNLOADSECUREFILE_SECUREFILEPATH` environment variable.

If you use multiple versions of the Download Secure File task in your definition, they can be referenced with the `$env:DOWNLOADSECUREFILE1_SECUREFILEPATH`, `$env:DOWNLOADSECUREFILE2_SECUREFILEPATH`, `...` environment variables, where the number in the environment variable corresponds with the task version.

Note that if you use two Download Secure File tasks in the same definition with the same task version, the `$env:DOWNLOADSECUREFILE_SECUREFILEPATH` environment variable will not be populated, but both files will still be downloaded to `$env:TEMP`.

## Arguments

| Argument | Description |
| -------- | ----------- |
| Secure File | Select the secure file to download to a temporary location on the agent. The file will be cleaned up after the build or release. |

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: DownloadSecureFile@1
  inputs:
    secureFile:
```

::: moniker-end
