---
title: Copy Files Over SSH task
description: Copy Files Over SSH task for use in the jobs of all of your build and release pipelines in Azure Pipelines and TFS
ms.assetid: 7ff495cf-2d1f-4baa-a052-d176bd507ef4
ms.technology: devops-cicd 
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Copy Files Over SSH task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to copy files from a source folder to a target folder on a remote machine over SSH.

This task allows you to connect to a remote machine using SSH and copy files matching a set of minimatch patterns from specified
source folder to target folder on the remote machine. Supported protocols for file transfer are SFTP and SCP via SFTP.
In addition to Linux, macOS is partially supported (see [FAQ](#is-this-task-supported-for-target-machines-running-operating-systems-other-than-linux)).

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s).
* The public key must be pre-installed or copied to the remote machine(s).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CopyFilesOverSSHV0.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service connection containing connection details for the remote machine.<br />- The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH service connection.<br />- The private key and the passphrase must be specified for authentication. |
| **Source folder** | The source folder for the files to copy to the remote machine. If omitted, the root of the repository is used. Names containing wildcards such as `*.zip` are not supported. Use [variables](../../build/variables.md) if files are not in the repository. Example: `$(Agent.BuildDirectory)` |
| **Contents** | File paths to include as part of the copy. Supports multiple lines of [minimatch patterns](../file-matching-patterns.md). Default is `**` which includes all files (including sub folders) under the source folder.<br />- Example: `**/*.jar \n **/*.war` includes all jar and war files (including sub folders) under the source folder.<br />- Example: `** \n !**/*.xml` includes all files (including sub folders) under the source folder but excludes xml files. |
| **Target folder** | Target folder on the remote machine to where files will be copied. Example: `/home/user/MySite`. Preface with a tilde (**~**) to specify the user's home directory. |
| **Advanced - Clean target folder** | If this option is selected, all existing files in the target folder will be deleted before copying. |
| **Advanced - Overwrite** | If this option is selected (the default), existing files in the target folder will be replaced. |
| **Advanced - Flatten folders** | If this option is selected, the folder structure is not preserved and all the files will be copied into the specified target folder on the remote machine. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Supported algorithms

### Key pair algorithms

* RSA
* DSA

### Encryption algorithms

* aes256-cbc
* aes192-cbc
* aes128-cbc
* blowfish-cbc
* 3des-cbc
* arcfour256
* arcfour128
* cast128-cbc
* arcfour

For OpenSSL v1.0.1 and higher (on agent):
* aes256-ctr
* aes192-ctr
* aes128-ctr

For OpenSSL v1.0.1 and higher, NodeJS v0.11.12 and higher (on agent):
* aes128-gcm
* aes128-gcm@openssh.com
* aes256-gcm
* aes256-gcm@openssh.com


## See also

* [Install SSH Key task](../utility/install-ssh-key.md)

* [SSH task](ssh.md)

* Blog post [SSH build task](https://devblogs.microsoft.com/devops/ssh-build-task/)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-ssh-supported-keys](../includes/qa-ssh-supported-keys.md)]

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

### Is this task supported for target machines running operating systems other than Linux?
This task is intended for target machines running Linux.
- For copying files to a macOS machine, this task may be used, but authenticating with a password is not supported.
- For copying files to a Windows machine, consider using [Windows Machine File Copy](windows-machine-file-copy.md).

::: moniker range="<= tfs-2018"

[!INCLUDE [qa-versions](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->