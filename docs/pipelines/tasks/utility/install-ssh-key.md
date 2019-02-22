---
title: Install SSH Key task
description: Install an SSH key prior to a build or release
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5c9af2eb-5fc5-42dc-9b91-dc234a8c4400
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 02/02/2019
monikerRange: 'azure-devops'
---

# Install SSH Key task

**Azure Pipelines**

Use this task in a pipeline to install an SSH key prior to a build or release step.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/InstallSSHKeyV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Known Hosts Entry</td><td>(Required) The entry for this SSH key for the known_hosts file.</td></tr>
<tr><td>SSH Public Key</td><td>(Required) The contents of the public SSH key.</td></tr>
<tr><td>SSH Passphrase</td><td>(Optional) The passphrase for the SSH key, if any.</td></tr>
<tr><td>SSH Key</td><td>(Required) Select the SSH key that was uploaded to `Secure Files` to install on the agent.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example setup using GitHub

1. Create an SSH key using `ssh-keygen` - a program that is provided with the SSH package on Linux and macOS and comes with Git for Windows. When you run `ssh-keygen`, you will be prompted to provide an SSH passphrase and two files will be created: a public key and a private key (e.g. `mykey.pub` and `mykey`).
1. Upload the `mykey.pub` (public) SSH key to GitHub (see GitHub's [documentation](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) for help).
1. On a local computer, add the private SSH key by running `ssh-add ~/.ssh/mykey`, replacing `~/.ssh/mykey` with the path to your private key file.
1. Clone the repository to the local computer (`git clone git@github.com:myOrganizationName/myRepositoryName.git`).
1. While cloning the repository, you will be asked whether to trust GitHub. Accepting will add the SSH key to your `known_hosts` file.
1. Open your `known_hosts` file (`~/.ssh/known_hosts` or `C:\Users\<username>\.ssh\known_hosts`) and copy the line that was added.

You now have all necessary values for the "Install SSH Key" task:
- 'Known Hosts Entry' - Enter the line copied in step 6
- 'SSH Key', 'SSH Public Key', and 'SSH Passphrase' - Enter these values that were created in step 1

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
