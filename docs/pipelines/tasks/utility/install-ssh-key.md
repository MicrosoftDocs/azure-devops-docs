---
title: Install SSH Key task
description: Install an SSH key prior to a build or release
ms.topic: reference
ms.assetid: 5c9af2eb-5fc5-42dc-9b91-dc234a8c4400
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 08/25/2020
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

- GitBash for Windows

## Example setup using GitHub

This section describes how to use a private GitHub repository with YAML from within Azure Pipelines. 

If you have a repository that you don't want to expose to the open-source community, a common practice is to make the repository private. However, a CI/CD tool like Azure DevOps needs access to the repository if you want to use the tool to manage the repository. To give Azure DevOps access, you might need an SSH key to authenticate access to GitHub. 

Here are the steps to complete to use an SSH key to authenticate access to GitHub:

1. Generate a key pair to use to authenticate access from GitHub to Azure DevOps:

   1. In GitBash, run the following command:

       ```bash
       ssh-keygen -t rsa
       ```

    1. Enter a name for the SSH key pair. In our example, we use **myKey**.

        :::image type="content" alt-text="Screenshot of the GitBash prompt to enter a name for your SSH key pair." source="./media/ssh-task-01.png":::
     
    1. (Optional) You can enter a passphrase to encrypt your private key. This step is optional. Using a passphrase is more secure than not using one.
   
        :::image type="content" alt-text="Screenshot of the GitBash prompt to enter a passphrase for your SSH key pair." source="./media/ssh-task-02.png":::
   
       The SSH key pairs are created and the following success message appears:
   
       :::image type="content" alt-text="Screenshot of the GitBash message that shows that an SSH key pair was created." source="./media/ssh-task-03.png":::
     
    1. In Windows File Explorer, check your newly created key pair:
   
        :::image type="content" alt-text="Screenshot of the key pair files in Windows File Explorer." source="./media/ssh-task-04.png":::
     
2. Add the public key to the GitHub repository. (The public key ends in  ".pub"). To do this, go the following URL in your browser: `https://github.com/(organization-name)/(repository-name)/settings/keys`.  

    1. Select **Add deploy key**.
   
    1. In the **Add new** dialog box, enter a title, and then copy and paste the SSH key:
   
        :::image type="content" alt-text="Screenshot of the Add new dialog box." source="./media/ssh-task-05.png":::
     
    1.  Select **Add key**.
   
 3. Upload your private key to Azure DevOps:
 
    1. In Azure DevOps, in the left menu, select **Pipelines** > **Library**.
   
        :::image type="content" alt-text="Screenshot of the Azure Pipelines menu." source="./media/ssh-task-06.png":::
     
    1.  Select **Secure files** > **+ Secure file**:
   
        :::image type="content" alt-text="Screenshot of the Secure files menu." source="./media/ssh-task-07.png":::
     
    1.  Select **Browse**, and then select your private key:
     
        :::image type="content" alt-text="Screenshot of the Upload file dialog box and the Browse button." source="./media/ssh-task-08.png":::
       
  4. Recover your "Known Hosts Entry". In GitBash, enter the following command: 
   
      ```bash
      ssh-keyscan github.com
      ```
   
      Your "Known Hosts Entry" is the displayed value that doesn't begin with **#** in the GitBash results:
     
      :::image type="content" alt-text="Screenshot of key search results in GitBash." source="./media/ssh-task-09.png":::
    
  5. Create a YAML pipeline. 
  
     To create a YAML pipeline, in the YAML definition, add the following task:
  
     ```bash
     - task: InstallSSHKey@0
      inputs:
        knownHostsEntry: #{Enter your Known Hosts Entry Here}
        sshPublicKey: #{Enter your Public key Here}
        sshKeySecureFile: #{Enter the name of your key in "Secure Files" Here}
     ```
  
Now, the SSH keys are installed and you can proceed with the script to connect by using SSH, and not the default HTTPS.
   

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
