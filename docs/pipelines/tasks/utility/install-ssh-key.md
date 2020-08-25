---
title: Install SSH Key task
description: Install an SSH key prior to a build or release
ms.topic: reference
ms.assetid: 5c9af2eb-5fc5-42dc-9b91-dc234a8c4400
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
<tr><td>SSH Public Key</td><td>(Optional) The contents of the public SSH key.</td></tr>
<tr><td>SSH Passphrase</td><td>(Optional) The passphrase for the SSH key, if any.</td></tr>
<tr><td>SSH Key (Secure File)</td><td>(Required) Select the SSH key that was uploaded to <code>Secure Files</code> to install on the agent.</td></tr>

[!INCLUDE [temp](../includes/control-options-arguments.md)]

</table>

## Prerequisites

GitBash for Windows

## Example setup using GitHub

This section describes how to use a private GitHub repository from within Azure Pipelines by using YAML. 

When you have repositories that you don't want to expose to the open-source community, a common practice is to make the repositories "private." However, a CI/CD tool like Azure DevOps needs access to the repositories for you to manage them by using the tool. To do this, you might need an SSH key to authenticate access to GitHub. 

Here are the steps you need to complete for this scenario:

1. Generate a key pair that's used to authenticate access from GitHub to Azure DevOps. To do this, run the following command in Bash:

   ```
   ssh-keygen -t rsa
   ```

   - The CLI asks you for a name to give the SSH key pairs. Enter a name of your choice. In this example, we use **myKey**.

     ![Image of GitBash](https://github.com/ManuelGalindo/images/blob/master/ssh-task-01.png)
     
   - The CLI will ask for a passphrase, this is used to encrypt your private key. You can use it if you like. (Using a passphrase is more secure than not using one)
   
     ![Image of GitBash](https://github.com/ManuelGalindo/images/blob/master/ssh-task-02.png)
   
   - Your SSH key pairs are created. Below is the success message you will see in the CLI.
   
     ![Image of GitBash](https://github.com/ManuelGalindo/images/blob/master/ssh-task-03.png)
     
   - You can check your newly create key pair in File Explorer.
   
     ![Image of Windows File Explorer](https://github.com/ManuelGalindo/images/blob/master/ssh-task-04.png)
     
2. Now the public key generated needs to be added to the GitHub repository. (The public key is the one with ".pub" ending). To do this, you need to go the following URL in your browser:

```
https://github.com/{YourOrganizationName}/{YourRepositoryName}/settings/keys
```   

   - In here you need to click in "Add deploy key"
   
   - Fill the information needed in the following textboxes:
   
     ![Image of GitHub Keys](https://github.com/ManuelGalindo/images/blob/master/ssh-task-05.png)
     
   - Once this is done, click "Add key".
   
 3. Now we need to upload our private key to Azure DevOps, we do this following these steps:
 
   - Inside Azure DevOps on the left side pane click on Pipeline and then select "Library".
   
     ![Image of AzureDevOpsMenu](https://github.com/ManuelGalindo/images/blob/master/ssh-task-06.png)
     
   - Select "Secure Files" and click on "+ Secure File".
   
     ![Image of AzureDevOps ScureFiles](https://github.com/ManuelGalindo/images/blob/master/ssh-task-07.png)
     
   - Now upload the key by clicking on "Browse…" and selecting your Private key.
     
     ![Image of AzureDevOps PrivateKey](https://github.com/ManuelGalindo/images/blob/master/ssh-task-08.png)
     
   - You have now added your Private Key to Azure DevOps Secure Files.
   
  4. Next is recovering you "Known Hosts Entry", which you can obtain the following way:
  
   - In Git Bash type the following command: 
   
   ```
   ssh-keyscan github.com
   ```
   
   - Your "Known Hosts Entry" is the one not starting in '#' from the result given in Git Bash as shown below:
   
    ![Image of AzureDevOps PrivateKey](https://github.com/ManuelGalindo/images/blob/master/ssh-task-09.png)
    
  5. The last step is creating a YAML Pipeline. Inside the YAML definition, add the following task:
  
  ```
  - task: InstallSSHKey@0
   inputs:
     knownHostsEntry: #{Enter your Known Hosts Entry Here}
     sshPublicKey: #{Enter your Public key Here}
     sshKeySecureFile: #{Enter the name of your key in "Secure Files" Here}
  ```
  
   - Now the SSH keys are installed, we now proceed with the following script to connect using SSH and not HTTPS by default:
   

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
