---
title: Copy Files Over SSH task
description: Copy Files Over SSH task for use in the jobs of all of your build and release pipelines in Azure Pipelines and TFS
ms.assetid: 7ff495cf-2d1f-4baa-a052-d176bd507ef4
ms.prod: devops
ms.technology: devops-cicd 
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Copy Files Over SSH task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to copy files from a source folder to a target folder on a remote machine over SSH.

This task allows you to connect to a remote machine using SSH and copy files matching a set of minimatch patterns from specified
source folder to target folder on the remote machine. Supported protocols for file transfer are SFTP and SCP via SFTP.
In addition to Linux, macOS is partially supported (see [Q&A](#is-this-task-supported-for-target-machines-running-operating-systems-other-than-linux)).

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s).
* The public key must be pre-installed or copied to the remote machine(s).

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/CopyFilesOverSSHV0.md)]
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

## See also

* [Install SSH Key task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallSSHKey)

* [SSH task](ssh.md)

* Blog post [SSH build task](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-ssh-supported-keys](../_shared/qa-ssh-supported-keys.md)]

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

### Is this task supported for target machines running operating systems other than Linux?
This task is intended for target machines running Linux.
- For copying files to a macOS machine, this task may be used, but authenticating with a password is not supported.
- For copying files to a Windows machine, consider using [Windows Machine File Copy](windows-machine-file-copy.md).

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
