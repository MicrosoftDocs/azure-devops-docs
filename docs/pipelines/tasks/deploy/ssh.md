---
title: SSH Deployment task
description: SSH task for use in the jobs of all of your build and release pipelines in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: dcd2ed8f-5bc6-4fc5-8787-4d9f6fe63f65
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# SSH Deployment task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to run shell commands or a script on a remote machine using SSH.
This task enables you to connect to a remote machine using SSH and run commands or a script.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Prerequisites

* The task supports use of an SSH key pair to connect to the remote machine(s).
* The public key must be pre-installed or copied to the remote machine(s).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/SshV0.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **SSH endpoint** | The name of an SSH service connection containing connection details for the remote machine. The hostname or IP address of the remote machine, the port number, and the user name are required to create an SSH service connection.<br />- The private key and the passphrase must be specified for authentication.<br />- A password can be used to authenticate to remote Linux machines, but this is not supported for macOS or Windows systems. |
| **Run** | Choose to run either shell commands or a shell script on the remote machine. |
| **Commands** | The shell commands to run on the remote machine. This parameter is available only when **Commands** is selected for the **Run** option. Enter each command together with its arguments on a new line of the multi-line textbox. To run multiple commands together, enter them on the same line separated by semicolons. Example: `cd /home/user/myFolder;build`<br /><br />**NOTE**: Each command runs in a separate process. If you want to run a series of commands that are interdependent (for example, changing the current folder before executing a command) use the **Inline Script** option instead. |
| **Shell script path** | Path to the shell script file to run on the remote machine. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Interpreter command** | Path to the command interpreter used to execute the script. Used when **Run** option = Inline. Adds a shebang line to the beginning of the script. Relevant only for UNIX-like operating systems. Please use empty string for Windows-based remote hosts. [See more about shebang (#!)](https://homepages.cwi.nl/~aeb/std/shebang/unix-faq.txt) |
| **Arguments** | The arguments to pass to the shell script. This parameter is available only when **Shell script** is selected for the **Run** option. |
| **Advanced - Fail on STDERR** | If this option is selected (the default), the build will fail if the remote commands or script write to **STDERR**. |
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

* [Copy Files Over SSH](copy-files-over-ssh.md)

* Blog post [SSH build task](https://devblogs.microsoft.com/devops/ssh-build-task/)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-ssh-supported-keys](../includes/qa-ssh-supported-keys.md)]

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [qa-versions](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
