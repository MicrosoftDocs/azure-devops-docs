---
title: Azure VM Scale Set Deployment task
description: Deploy Virtual Machine scale set image
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4dda660c-b643-4598-a4a2-61080d0002d9
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure VM Scale Set Deployment task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy a virtual machine scale set image.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureVmssDeploymentV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription for the scale set.</td></tr>
<tr><td>Action</td><td>(Required) Choose between updating a VM scale set by using a VHD image and/or by running deployment/install scripts using Custom Script VM extension.<br/>The VHD image approach is better for scaling quickly and doing rollback. The extension approach is useful for post deployment configuration, software installation, or any other configuration / management task.<br/>You can use a VHD image to update a VM scale set only when it was created by using a custom image, the update will fail if the VM Scale set was created by using a platform/gallery image available in Azure.<br/>The Custom script VM extension approach can be used for VM scale set created by using either custom image or platform/gallery image.</td></tr>
<tr><td>Virtual Machine scale set name</td><td>(Required) Name of VM scale set which you want to update by using either a VHD image or by using Custom script VM extension.</td></tr>
<tr><td>OS type</td><td>(Required) Select the operating system type of VM scale set.</td></tr>
<tr><td>Image url</td><td>(Required) Specify the URL of VHD image. If it is an Azure storage blob url, the storage account location should be same as scale set location.</td></tr>
<tr><td>Custom script directory</td><td>(Optional) Path to directory containing custom script(s) that will be run by using Custom Script VM extension. The extension approach is useful for post deployment configuration, application/software installation, or any other application configuration/management task. For example: the script can set a machine level stage variable which the application uses, like database connection string.</td></tr>
<tr><td>Command</td><td>(Optional) The script that will be run by using Custom Script VM extension. This script can invoke other scripts in the directory. The script will be invoked with arguments passed below.<br/>This script in conjugation with such arguments can be used to execute commands. For example:<br/>1. Update-DatabaseConnectionStrings.ps1 -clusterType dev -user $(dbUser) -password $(dbUserPwd) will update connection string in web.config of web application.<br/>2. install-secrets.sh --key-vault-type prod -key serviceprincipalkey will create an encrypted file containing service principal key.</td></tr>
<tr><td>Arguments</td><td>(Optional) The custom script will be invoked with arguments passed. Build/Release variables can be used which makes it easy to use secrets.</td></tr>
<tr><td>Azure storage account where custom scripts will be uploaded</td><td>(Optional) The Custom Script Extension downloads and executes scripts provided by you on each virtual machines in the VM scale set. These scripts will be stored in the storage account specified here. Specify a pre-existing ARM storage account.</td></tr>
<tr><td>Skip Archiving custom scripts</td><td>(Optional) By default, this task creates a compressed archive of directory containing custom scripts. This improves performance and reliability while uploading to azure storage. If not selected, archiving will not be done and all files will be individually uploaded.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
