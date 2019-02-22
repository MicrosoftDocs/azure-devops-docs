---
title: Deploy apps to an Azure VM Scale Set
description: Implement deployment of your app to an Azure Virtual Machine Scale Set without learning concepts such as provisioners and builders
ms.assetid: C08EC3FB-6787-4956-86D3-B4085B69FCBA
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Implement continuous deployment of your app to an Azure Virtual Machine Scale Set

[!INCLUDE [version-tfs-2017-rtm](../../../_shared/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/concept-rename-note.md)]
::: moniker-end

The **Build Machine Image** task makes it easy for users who are new to immutable
VHD-based deployments to use **Packer** without learning concepts such as provisioners
and builders. If you are deploying to virtual machines by using deployment scripts,
you can use this task for either creating new virtual machine instances or for
creating and updating virtual machine scale sets.

The auto-generate mode of the task generates the **Packer** configuration with:

* Builder for Azure
* Provisioners that depend on the type of base operating system selected.
  For Linux, this is shell script. For Windows, this is PowerShell script.
  The deployment script provided is used by the provisioner.

A custom **Packer** configuration JSON file can also be used.

## Get set up

### Begin with a CI build

Before you begin, you need a CI build that creates your app. To set up CI, see:

* [Build and deploy your app](../../index.md)

## Create the release pipeline

1. Open the **Releases** tab of **Azure Pipelines** and choose the
   "**+**" icon to create a new release pipeline.

1. In the **Create release pipeline** dialog, select the **Empty** template and choose **Next**.

1. In the next page, select the build pipeline you created 
   earlier and choose **Create**. This creates a new release pipeline 
   with one default stage.

1. In the new release pipeline, select **+ Add tasks** and add these tasks:

   * **Build Machine Image**
   * **Azure PowerShell**<p />

   The **Build Machine Image** uses **Packer** to create a VHD. The entire process is:

   * Create a new virtual machine with the selected base operating system
   * Install all the prerequisites and the application on the VM by using a deployment script
   * Create a VHD and store it in the Azure storage account
   * Delete the new virtual machine that was created<p />

1. Configure the **Build Machine Image** task as follows:

   ![Build Machine Image](../../../tasks/deploy/_img/build-machine-image.png) [Deploy: Build Machine Image](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/15/deploying-applications-to-azure-vm-scale-sets/) - Build machine image using Packer.
   
   - **Packer template**: You can use your own packer configuration JSON file or use the auto-generate feature where the task generates a packer template for you. This example uses the auto-generated packer configuration.
   
   - **Azure subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Storage location**: The location of storage account where the VHD will be stored. This should be the same location where the virtual machine scale set is located, or where it will be created.
   
   - **Base Image Source**: You can choose from either a curated gallery of OS images, or provide the URL of your custom image. For example, `Ubuntu 16.04 LTS`
   
   - **Deployment Package**: Specify the path of the deployment package directory relative to **$(System.DefaultWorkingDirectory)**. For example, `$(System.DefaultWorkingDirectory)/Packer-NodeJs/drop`
   
   - **Deployment Script**: Specify the relative path to the PowerShell script (for Windows) or shell script (for Linux) that deploys the package. This script should be within the deployment package path selected above. For example, `Deploy/ubuntu/deployNodejsApp.sh`. The script may need to install Curl, Node.js, NGINX, and PM2; copy the application; and then configure NGINX and PM2 to run the application.
   
   - **Output - Image URL**: Provide a name for the output variable that will hold the URL of the generated machine image. For example, `bakedImageUrl`<p />
   
   ![Azure PowerShell](../../../tasks/deploy/_img/azure-powershell-icon.png) [Deploy: Azure PowerShell](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShellV3) - Run a PowerShell script to update the Virtual Machine Scale Set with the new VHD.
   
   - **Azure Connection Type**: Select `Azure Resource Manager`
   
   - **Azure RM Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Script type**: Select `Inline Script`
   
   - **Inline Script**: Enter the script shown below to update the virtual machine scale set.<p />
   
   Use the following script for the **Inline Script** parameter of the **Azure PowerShell** task: 
   
   ```powershell
   # get the VMSS model

   $vmss = Get-AzureRmVmss -ResourceGroupName resource_group_name -VMScaleSetName VM_scale_set_name

   # set the new version in the model data

   $vmss.virtualMachineProfile.storageProfile.osDisk.image.uri="$(bakedImageUrl)"

   # update the virtual machine scale set model

   Update-AzureRmVmss -ResourceGroupName resource_group_name -Name resource_group_name -VirtualMachineScaleSet $vmss
   ```
   
   You can use variables to pass values such as the resource group and virtual machine scale set names to the script if you wish.

1. In the **Deployment conditions** dialog for the stage, ensure that the **Trigger** section is set to **After release creation**.

1. Enter a name for the release pipeline and save it.

1. Create a new release, select the latest build, and 
   ensure that the application has been deployed correctly and has generated the VHD.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/qa-versions.md)]
::: moniker-end


<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../../_shared/rm-help-support-shared.md)]

