---
title: SSH task
description: SSH build and release task for Microsoft VSTS and Microsoft Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: dcd2ed8f-5bc6-4fc5-8787-4d9f6fe63f65
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Deploy: SSH

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/ssh.png) Run shell commands or a script on a remote machine using SSH.

This task enables you to connect to a remote machine using SSH and run commands or a script.

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s). 
* The public key must be pre-installed or copied to the remote machine(s).

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service endpoint containing connection details for the remote machine. The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH endpoint.<br />- The private key and the passphrase must be specified for authentication.<br />- A password can be used to authenticate to remote Linux machines, but this is not supported for macOS or Windows systems. |
| **Run** | Choose to run either shell commands or a shell script on the remote machine. |
| **Commands** | The shell commands to run on the remote machine. This parameter is available only when **Commands** is selected for the **Run** option. Enter each command together with its arguments on a new line of the multi-line textbox. To run multiple commands together, enter them on the same line separated by semicolons. Example: `cd /home/user/myFolder;build` |
| **Shell script path** | Path to the shell script file to run on the remote machine. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Arguments** | The arguments to pass to the shell script. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Advanced - Fail on STDERR** | If this option is selected (the default), the build will fail if the remote commands or script write to **STDERR**. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

##See also

* [Install SSH Key task](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InstallSSHKey)

* [Copy Files Over SSH](copy-files-over-ssh.md)

* Blog post [SSH build task](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
