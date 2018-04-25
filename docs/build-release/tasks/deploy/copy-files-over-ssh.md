---
title: Copy Files Over SSH task for VSTS and TFS
description: Copy Files Over SSH build and release task for Microsoft VSTS and Microsoft Team Foundation Server
ms.assetid: 7ff495cf-2d1f-4baa-a052-d176bd507ef4
ms.prod: devops
ms.technology: devops-cicd 
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Deploy: Copy Files Over SSH

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/copy-files-over-ssh.png) Copy files from source folder to target folder on a remote machine over SSH. 

This task allows you to connect to a remote machine using SSH and copy files matching a set of minimatch patterns from specified source folder to target folder on the remote machine.
Supported protocols for file transfer are SFTP and SCP via SFTP. 
In addition to Linux, macOS is partially supported (see [Q&A](#is-this-task-supported-for-target-machines-running-operating-systems-other-than-linux)).

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s). 
* The public key must be pre-installed or copied to the remote machine(s).

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service endpoint containing connection details for the remote machine.<br />- The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH endpoint.<br />- The private key and the passphrase must be specified for authentication. |
| **Source folder** | The source folder for the files to copy to the remote machine. If omitted, the root of the repository is used. Names containing wildcards such as `*.zip` are not supported. Use [variables](../../concepts/definitions/build/variables.md) if files are not in the repository. Example: `$(Agent.BuildDirectory)` |
| **Contents** | File paths to include as part of the copy. Supports multiple lines of [minimatch patterns](../file-matching-patterns.md). Default is `**` which includes all files (including sub folders) under the source folder.<br />- Example: `**/*.jar \n **/*.war` includes all jar and war files (including sub folders) under the source folder.<br />- Example: `** \n !**/*.xml` includes all files (including sub folders) under the source folder but excludes xml files. |
| **Target folder** | Target folder on the remote machine to where files will be copied. Example: `/home/user/MySite`. Preface with a tilde (**~**) to specify the user's home directory. |
| **Advanced - Clean target folder** | If this option is selected, all existing files in the target folder will be deleted before copying. |
| **Advanced - Overwrite** | If this option is selected (the default), existing files in the target folder will be replaced. |
| **Advanced - Flatten folders** | If this option is selected, the folder structure is not preserved and all the files will be copied into the specified target folder on the remote machine. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: CopyFilesOverSSH@0
  inputs:
    sshEndpoint:
    sourceFolder:
#   contents: **
    targetFolder:
#   cleanTargetFolder: false
#   overwrite: true
#   failOnEmptySource: false
#   flattenFolders: false
```

::: moniker-end

## See also

* [Install SSH Key task](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InstallSSHKey)

* [SSH task](ssh.md)

* Blog post [SSH build task](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

### Is this task supported for target machines running operating systems other than Linux?
This task is intended for target machines running Linux.
- For copying files to a macOS machine, this task may be used, but authenticating with a password is not supported.
- For copying files to a Windows machine, consider using [Windows Machine File Copy](https://docs.microsoft.com/en-us/vsts/build-release/tasks/deploy/windows-machine-file-copy?view=vsts).

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
