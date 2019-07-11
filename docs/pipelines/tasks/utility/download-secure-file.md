---
title: Download Secure File task
description: Download a secure file to a temporary location on the build or release agent in Azure Pipelines and Team Foundation Server
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2a6ca863-f2ce-4f4d-8bcb-15e64608ec4b
ms.manager: jillfra
ms.custom: seodec18
ms.author: dastahel
author: davidstaheli
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Secure File task

**Azure Pipelines**

Use this task in a pipeline to download a [secure file](../../library/secure-files.md) to the agent machine.

Once downloaded, use the `name` value that is set on the task (or "Reference name" in the classic editor) to reference the path to the secure file on the agent machine. For example, if the task is given the name `mySecureFile`, its path can be referenced in the pipeline as `$(mySecureFile.secureFilePath)`. See a full example [below](#example).

When the pipeline job completes, no matter whether it succeeds, fails, or is canceled, the secure file is deleted from its download location.

It is unnecessary to use this task with the [Install Apple Certificate](install-apple-certificate.md) or [Install Apple Provisioning Profile](install-apple-provisioning-profile.md) tasks because they automatically download, install, and delete (at the end of the pipeline job) the secure file.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadSecureFileV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| Secure File | The file name or unique identifier (GUID) of the secure file to download to the agent machine. The file will be deleted when the pipeline job completes. |

## Example

This example downloads a secure certificate file and installs it to a trusted  certificate authority (CA) directory on Linux:

```yaml
- task: DownloadSecureFile@1
  name: caCertificate
  displayName: 'Download CA certificate'
  inputs:
    secureFile: 'myCACertificate.pem'

- script: |
    echo Installing $(caCertificate.secureFilePath) to the trusted CA directory...
    sudo chown root:root $(caCertificate.secureFilePath)
    sudo chmod a+r $(caCertificate.secureFilePath)
    sudo ln -s -t /etc/ssl/certs/ $(caCertificate.secureFilePath)
```
