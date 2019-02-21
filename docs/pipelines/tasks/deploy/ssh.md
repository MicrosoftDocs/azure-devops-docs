---
title: SSH Deployment task
description: SSH task for use in the jobs of all of your build and release pipelines in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: dcd2ed8f-5bc6-4fc5-8787-4d9f6fe63f65
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

# SSH Deployment task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to run shell commands or a script on a remote machine using SSH.
This task enables you to connect to a remote machine using SSH and run commands or a script.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s).
* The public key must be pre-installed or copied to the remote machine(s).

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/SshV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service connection containing connection details for the remote machine. The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH service connection.<br />- The private key and the passphrase must be specified for authentication.<br />- A password can be used to authenticate to remote Linux machines, but this is not supported for macOS or Windows systems. |
| **Run** | Choose to run either shell commands or a shell script on the remote machine. |
| **Commands** | The shell commands to run on the remote machine. This parameter is available only when **Commands** is selected for the **Run** option. Enter each command together with its arguments on a new line of the multi-line textbox. To run multiple commands together, enter them on the same line separated by semicolons. Example: `cd /home/user/myFolder;build`<br /><br />**NOTE**: Each command runs in a separate process. If you want to run a series of commands that are interdependent (for example, changing the current folder before executing a command) use the **Inline Script** option instead. |
| **Shell script path** | Path to the shell script file to run on the remote machine. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Arguments** | The arguments to pass to the shell script. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Advanced - Fail on STDERR** | If this option is selected (the default), the build will fail if the remote commands or script write to **STDERR**. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## See also

* [Install SSH Key task](../utility/install-ssh-key.md)

* [Copy Files Over SSH](copy-files-over-ssh.md)

* Blog post [SSH build task](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-ssh-supported-keys](../_shared/qa-ssh-supported-keys.md)]

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
