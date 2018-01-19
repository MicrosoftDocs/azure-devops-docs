---
title: Copy Files Over SSH task
description: Copy Files Over SSH build and release task for Microsoft VSTS and Microsoft Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build 
ms.assetid: 7ff495cf-2d1f-4baa-a052-d176bd507ef4
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Deploy: Copy Files Over SSH

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/copy-files-over-ssh.png) Copy files from source folder to target folder on a remote machine over SSH. 

This task allows you to connect to a remote machine using SSH and copy files matching a set of minimatch patterns from specified source folder to target folder on the remote machine.
Supported protocols for file transfer are SFTP and SCP via SFTP. 

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s). 
* The public key must be pre-installed or copied to the remote machine(s).

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service endpoint containing connection details for the remote machine.<br />- The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH endpoint.<br />- The private key and the passphrase must be specified for authentication.<br />- A password can be used to authenticate to remote Linux machines, but this is not supported for macOS or Windows systems. |
| **Source folder** | The source folder for the files to copy to the remote machine. If omitted, the root of the repository is used. Names containing wildcards such as `*.zip` are not supported. Use [variables](../../concepts/definitions/build/variables.md) if files are not in the repository. Example: `$(Agent.BuildDirectory)` |
| **Contents** | File paths to include as part of the copy. Supports multiple lines of [minimatch patterns](../file-matching-patterns.md). Default is `**` which includes all files (including sub folders) under the source folder.<br />- Example: `**/*.jar \n **/*.war` includes all jar and war files (including sub folders) under the source folder.<br />- Example: `** \n !**/*.xml` includes all files (including sub folders) under the source folder but excludes xml files. |
| **Target folder** | Target folder on the remote machine to where files will be copied. Example: `/home/user/MySite`. Preface with a tilde (**~**) to specify the user's home directory. |
| **Advanced - Clean target folder** | If this option is selected, all existing files in the target folder will be deleted before copying. |
| **Advanced - Overwrite** | If this option is selected (the default), existing files in the target folder will be replaced. |
| **Advanced - Flatten folders** | If this option is selected, the folder structure is not preserved and all the files will be copied into the specified target folder on the remote machine. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

## See also

* [Install SSH Key task](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InstallSSHKey)

* [SSH task](ssh.md)

* Blog post [SSH build task](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
