---
title: Manage a VM in DevTest Labs
description: Create, manage, and delete Azure virtual machines (VMs) in Azure DevTest Labs in Azure Pipelines and TFS
ms.assetid: 4FC75F92-EC04-4458-8069-53EEBF855D2F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Manage a virtual machine in Azure DevTest Labs

[!INCLUDE [version-tfs-2015-rtm](../../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/concept-rename-note.md)]
::: moniker-end

The [Azure DevTest Labs](https://azure.microsoft.com/services/devtest-lab/)
service lets you quickly provision development and test stages using reusable
templates. You can use pre-created images, minimize waste with quotas and policies,
and minimize costs by using automated shutdown.

By using an extension installed in Azure Pipelines or Team Foundation Server (TFS) you
can easily integrate your build and release pipeline with  Azure DevTest Labs.
The extension installs three tasks to create a VM, create a custom image from
a VM, and delete a VM. This makes it easy to, for example, quickly deploy a 
"golden image" for specific test task, then delete it when the test is finished.

This example shows how to create and deploy a VM, create a custom image, then
delete the VM. It does so as one complete pipeline, though it reality you
would use the tasks individually in your own custom build-test-deploy pipeline.

## Get set up

Start by installing the
[Azure DevTest Labs Tasks](https://marketplace.visualstudio.com/items?itemName=ms-azuredevtestlabs.tasks)
extension from Visual Studio Marketplace, Azure DevOps tab:

* For Azure Pipelines, choose **Install**
* For TFS, choose **Download** and install the extension on your server.

## Create an Azure RM template

Carry out these tasks to create the Azure Resource Manager (ARM) template that you can
use to create an Azure Virtual Machine on demand.

1. Follow the steps in [these documents](/azure/devtest-lab/devtest-lab-overview)
   on the Azure website to create an ARM template in your subscription.

1. Follow the steps in [these documents](/azure/devtest-lab/devtest-lab-overview)
   on the Azure website to save the ARM template as a file
   on your computer. Name the file **CreateVMTemplate.json**.

1. Edit the **CreateVMTemplate.json** file as described in 
   [this post](http://www.visualstudiogeeks.com/blog/DevOps/Configure-winrm-with-ARM-template-in-AzureDevTestLab-VM-deployment-using-PowerShell-artifact)
   on Tarun Arora's blog to configure it for Windows Remote
   Management (WinRM).

   >WinRM access is required to use deploy tasks such as 
   **Azure File Copy** and **PowerShell on Target Machines**.

1. Check the template into your source control system.

1. Open a text editor and copy the following script into it.

   ```powershell
   Param( [string] $labVmId)

   $labVmComputeId = (Get-AzureRmResource -Id $labVmId).Properties.ComputeId

   # Get lab VM resource group name
   $labVmRgName = (Get-AzureRmResource -Id $labVmComputeId).ResourceGroupName

   # Get the lab VM Name
   $labVmName = (Get-AzureRmResource -Id $labVmId).Name

   # Get lab VM public IP address
   $labVMIpAddress = (Get-AzureRmPublicIpAddress -ResourceGroupName $labVmRgName
                      -Name $labVmName).IpAddress

   # Get lab VM FQDN
   $labVMFqdn = (Get-AzureRmPublicIpAddress -ResourceGroupName $labVmRgName
                 -Name $labVmName).DnsSettings.Fqdn

   # Set a variable labVmRgName to store the lab VM resource group name
   Write-Host "##vso[task.setvariable variable=labVmRgName;]$labVmRgName"

   # Set a variable labVMIpAddress to store the lab VM Ip address
   Write-Host "##vso[task.setvariable variable=labVMIpAddress;]$labVMIpAddress"

   # Set a variable labVMFqdn to store the lab VM FQDN name
   Write-Host "##vso[task.setvariable variable=labVMFqdn;]$labVMFqdn"

1. Check the script into your source control system. Name 
   it something like **GetLabVMParams.ps1**.

   >This script, when run on the agent as part of the release pipeline,
   collects values that you'll need to deploy your app to the VM
   if you use task steps such as **Azure File Copy** or 
   **PowerShell on Target Machines**. These are the tasks you 
   typically use to deploy apps to an Azure VM, and they require values
   such as the VM Resource Group name, IP address, and 
   fully-qualified domain name (FQDN).

## Deploy

Carry out the following steps to create the 
release pipeline in Azure Pipelines.

1. Open the **Releases** tab of **Azure Pipelines** and choose the
   "**+**" icon to create a new release pipeline.

1. In the **Create release pipeline** dialog, 
   select the **Empty** template and choose **Next**.

1. In the next page, select **Choose Later** and then choose **Create**.
   This creates a new release pipeline with one 
   default stage and no linked artifacts.

1. In the new release pipeline, choose the ellipses (**...**) next 
   to the stage name to open the shortcut menu 
   and select **Configure variables**.

1. In the **Configure - stage** dialog, enter the following values
   for the variables you will use in the release pipeline tasks:
   - **vmName**: Enter the name you assigned to the VM when 
     you created the ARM template in the Azure portal.
   - **userName**: Enter the username you assigned to the VM when 
     you created the ARM template in the Azure portal.
   - **password**: Enter the password you assigned to the VM when 
     you created the ARM template in the Azure portal.
     Use the "padlock" icon to hide and secure the password.<p />

1. The first stage in this deployment is to create the VM
   you will use as the "golden image" for subsequent deployments.
   You create this within your Azure DevTestsLab instance using the
   task specially developed for this purpose.
   In the release pipeline, select **+ Add tasks**
   and add an **Azure DevTest Labs Create VM** task
   from the **Deploy** tab.

1. Configure the **Azure DevTest Labs Create VM** task as follows:

   ![Azure DevTest Labs Tasks](_img/devtestlabs-icon.png) [Azure DevTest Labs Tasks](https://marketplace.visualstudio.com/items?itemName=ms-azuredevtestlabs.tasks) - Create the VM to use for subsequent deployments.
   
   - **Azure RM Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Lab Name**: Select the name of the instance you created earlier.
   
   - **Template Name**: Enter the full path and name of the template file you saved into your source code repository. You can use the built-in properties of Azure Pipelines to simplify the path, for example: `$(System.DefaultWorkingDirectory)/Contoso/ARMTemplates/CreateVMTemplate.json`.
   
   - **Template Parameters**: Enter the parameters for the variables defined in the template. Use the names of the variables you defined in the stage, for example: `-newVMName '$(vmName)' -userName '$(userName)' -password (ConvertTo-SecureString -String '$(password)' -AsPlainText -Force)`.
   
   - **Output Variables - Lab VM ID**: You will need the ID of the newly created VM in subsequent tasks. The default name of the stage variable that will automatically be populated with this ID is set in the **Output Variables** section. You can edit this if required, but remember to use the correct name in subsequent tasks. The Lab VM ID is in the form: `/subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualMachines/{vmName}`.<p />

1. The next stage is to execute the script you created earlier
   to collect the details of the DevTest Labs VM.
   In the release pipeline, select **+ Add tasks**
   and add an **Azure PowerShell** task from the **Deploy** tab.
   Configure the task as follows:

   ![Azure PowerShell](../../../tasks/deploy/_img/azure-powershell-icon.png) [Deploy: Azure PowerShell](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShellV3) - Execute the script to collect the details of the DevTest Labs VM.
   
   - **Azure Connection Type**: `Azure Resource Manager`.
   
   - **Azure RM Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Script Type**: `Script File`.
   
   - **Script Path**:  Enter the full path and name of the script you saved into your source code repository. You can use the built-in properties of Azure Pipelines to simplify the path, for example: `$(System.DefaultWorkingDirectory/Contoso/Scripts/GetLabVMParams.ps1`.
   
   - **Script Arguments**: Enter as the script argument the name of the stage variable that was automatically populated with the ID of the lab VM by the previous task, for example: `-labVmId '$(labVMId)'`. |
   
   >The script collects the values you will require and stores them in 
   stage variables within the release pipeline so that you can
   easily refer to them in subsequent tasks.

1. Now you can deploy your app to the new DevTest Labs VM.
   The tasks you will typically use for this are
   **Azure File Copy** and **PowerShell on Target Machines**.
   - The information about the VM you'll need for the parameters of these 
     tasks is stored in three configuration variables
     named **labVmRgName**, **labVMIpAddress**, and **labVMFqdn** within the release pipeline.
   - If you just want to experiment with creating a DevTest Labs
     VM and a custom image, without deploying an app to it, just
     skip this step.<p />

1. The next stage is to create an image of the newly deployed
   VM in your Azure DevTest Labs instance. You can then use
   this image to create copies of the VM on demand, whenever 
   you want to execute a dev task or run some tests.
   In the release pipeline, select **+ Add tasks**
   and add an **Azure DevTest Labs Create Custom Image** task
   from the **Deploy** tab. Configure it as follows:

   ![Azure DevTest Labs Tasks](_img/devtestlabs-icon.png) [Azure DevTest Labs Tasks](https://marketplace.visualstudio.com/items?itemName=ms-azuredevtestlabs.tasks) - Create an image of the VM.
   
   - **Azure RM Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Lab Name**: Select the name of the instance you created earlier.
   
   - **Custom Image Name**: Enter a name for the custom image you will create.
   
   - **Description**: Optionally enter a description to make it easy to select the correct image later.
   
   - **Source Lab VM - Source Lab VM ID**: If you changed the default name of the stage variable that was automatically populated with the ID of the lab VM by an earlier task, edit it here. The default is `$(labVMId)`.
   
   - **Output Variables - Lab VM ID**: You will need the ID of the newly created image when you want to manage or delete it. The default name of the stage variable that will automatically be populated with this ID is set in the **Output Variables** section. You can edit this if required.<p />
    
1. The final stage in this example is to delete the VM you deployed
   in your Azure DevTest Labs instance. In reality you will, of course,
   do this _after_ you execute the dev tasks or run the tests you need
   on the deployed VM. In the release pipeline, select 
   **+ Add tasks** and add an **Azure DevTest Labs Delete VM** task
   from the **Deploy** tab. Configure it as follows:

   ![Azure DevTest Labs Tasks](_img/devtestlabs-icon.png) [Azure DevTest Labs Tasks](https://marketplace.visualstudio.com/items?itemName=ms-azuredevtestlabs.tasks) - Delete the VM.
   
   - **Azure RM Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Lab VM ID**: If you changed the default name of the stage variable that was automatically populated with the ID of the lab VM by an earlier task, edit it here. The default is `$(labVMId)`.<p />

1. Enter a name for the release pipeline and save it.

1. Create a new release, select the latest build,
   and deploy it to the single stage in the pipeline.

1. At each stage, refresh the view of your DevTest Labs instance
   in the Azure portal to see the VM and image being created, and the
   VM being deleted again. You can now use the custom image to create
   VMs when required.

   >For more information, or if you have any suggestions for 
   improvements to the extension, visit the 
   [DevTest Labs feedback forum](https://feedback.azure.com/forums/320373-azure-devtest-labs).  

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../../_shared/rm-help-support-shared.md)]
