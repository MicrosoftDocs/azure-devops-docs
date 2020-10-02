---
title: Install SSH Key task
description: Install an SSH key prior to a build or release
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5c9af2eb-5fc5-42dc-9b91-dc234a8c4400
ms.manager: mijacobs
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 02/02/2019
monikerRange: azure-devops
---

# Install SSH Key task

**Azure Pipelines**

Use this task in a pipeline to install an SSH key prior to a build or release step.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/InstallSSHKeyV0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Known Hosts Entry</td><td>(Required) The entry for this SSH key for the known_hosts file.</td></tr>
<tr><td>SSH Public Key</td><td>(Required) The contents of the public SSH key.</td></tr>
<tr><td>SSH Passphrase</td><td>(Optional) The passphrase for the SSH key, if any.</td></tr>
<tr><td>SSH Key (Secure File)</td><td>(Required) Select the SSH key that was uploaded to <code>Secure Files</code> to install on the agent.</td></tr>

[!INCLUDE [temp](../includes/control-options-arguments.md)]

</table>

## Example setup using GitHub

1. Create an SSH key using `ssh-keygen`, a program that is provided with the SSH package on Linux and macOS and comes with Git for Windows. When you run `ssh-keygen`, you will be prompted to provide an SSH passphrase and two files will be created: a public key and a private key (e.g. `mykey.pub` and `mykey`).
1. Upload the `mykey.pub` (public) SSH key to GitHub (see GitHub's [documentation](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) for help).
1. On a local computer, add the private SSH key by running `ssh-add ~/.ssh/mykey`, replacing `~/.ssh/mykey` with the path to your private key file.
1. Clone the repository to the local computer (`git clone git@github.com:myOrganizationName/myRepositoryName.git`).
1. While cloning the repository, you will be asked whether to trust GitHub. Accepting will add the SSH key to your `known_hosts` file.
1. Open your `known_hosts` file (`~/.ssh/known_hosts` or `C:\Users\<username>\.ssh\known_hosts`) and copy the line that was added.

You now have all necessary values for the Install SSH Key task:
- `Known Hosts Entry`: Enter the line copied in step 6.
- `SSH Key (Secure File)`, `SSH Public Key`, and `SSH Passphrase`: Enter the values that were created in step 1.

## Usage and best practices

If you install an SSH key in the [hosted pools](https://docs.microsoft.com/azure/devops/pipelines/agents/hosted?view=azure-devops), in later steps in your pipeline, you can connect to a remote system in which the matching public key is already in place. For example, you can connect to a Git repository or to a VM in Azure.

We recommend that you don't pass in your public key as plain text to the task configuration. Instead, [set a secret variable](https://docs.microsoft.com/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#secret-variables) in your pipeline for the contents of your `mykey.pub` file. Then, call the variable in your pipeline definition as `$(myPubKey)`. For the secret part of your key, use the [Secure File library](https://docs.microsoft.com/azure/devops/pipelines/library/secure-files?view=azure-devops) in Azure Pipelines.  

To create your task, use the following example of a well-configured Install SSH Key task:

```yaml
steps:
- task: InstallSSHKey@0
  displayName: 'Install an SSH key'
  inputs:
    knownHostsEntry: 'SHA256:1Hyr55tsxGifESBMc0s+2NtutnR/4+LOkVwrOGrIp8U johndoe@contoso'
    sshPublicKey: '$(myPubKey)'
    sshKeySecureFile: 'id_rsa'
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.


