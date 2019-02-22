---
title: Deploy an Azure VM using an RM template
description: Provision Azure virtual machines (VMs) using ARM templates by using Azure Pipelines or Team Foundation Server (TFS) 
ms.assetid: E6CF9C79-4A2A-45EF-8278-EA6AFA81CBAD
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

# CD of an Azure virtual machine using a Resource Manager template

[!INCLUDE [version-tfs-2015-rtm](../../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/concept-rename-note.md)]
::: moniker-end

In just a few steps, you can provision Azure virtual machines (VMs)
using [Resource Manager (RM) templates](https://azure.microsoft.com/documentation/articles/resource-group-template-deploy/).
Managing the pipelines for virtual machines in this
way is considered **Infrastructure as code** and is
a good DevOps practice.

## Prerequisites

Before you begin, you need a CI build that creates your Azure RM template. To set up CI, see:

* [Build an Azure virtual machine using an Azure RM template](build-azure-vm-template.md)

## Define and test your CD release pipeline

Carry out the following steps to deploy the Azure Resource Group.

1. Open the **Releases** tab of **Azure Pipelines** and choose the
   "**+**" icon to create a new release pipeline.

2. In the **Create release pipeline** dialog, select the **Empty** template and choose **Next**.

3. In the next page, select the build pipeline you created 
   earlier and choose **Create**. This creates a new release pipeline 
   with one default stage.

4. In the new release pipeline, select **+ Add tasks** and add an **Azure Resource Group Deployment** task.
   Optionally edit the name to help identify the task, such as **Provision Windows 2012 R2 VM**.

5. Configure the **Azure Resource Group Deployment** task as follows:

   ![Azure Resource Group Deployment](../../../tasks/deploy/_img/azure-resource-group-deployment-icon.png) [Deploy: Azure Resource Group Deployment](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureResourceGroupDeploymentV2) - Deploy files to an Azure Resource Group.
   
   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Action**: `Create or Update Resource Group`
   
   - **Resource Group**: The name for a new resource group, or an existing resource group name.
   
   - **Template location**: The path of the Resource Manager template; for example:<br />`$(System.DefaultWorkingDirectory)\ASPNet4.CI\drop\HelloWorldARM\Templates\WindowsVirtualMachine.json`
   
   - **Template Parameters**: The path of the Resource Manager template parameters file; for example:<br />`$(System.DefaultWorkingDirectory)\ASPNet4.CI\drop\HelloWorldARM\Templates\WindowsVirtualMachine.parameters.json`
   
   - **Override Template Parameters**: A list of values for the parameters in the template; for example:<br />`-adminUsername $(vmuser) -adminPassword (ConvertTo-SecureString -String $(vmpassword) -AsPlainText -Force) -dnsNameForPublicIP $(dns)'`<br />Use the **...** button to open the parameters editor dialog.
   
   - **Enable Deployment Prerequisites**: Checked.
   
   - **Output - Resource Group**: The name of the Resource Group output from the task as a value that can be used as an input to further deployment tasks.<p />
   
   >Checking the **Enable Deployment Prerequisites** checkbox
   configures WinRM on the virtual machine and enables
   execution of remote PowerShell scripts, which may be
   required to deploy an application. Also notice the use of
   **ConvertTo-SecureString** to specify the value for **adminPassword**.
   You must do this because **adminPassword** is defined as a **SecureString**
   type in the Resource Manager template file.

6. If you used [variables](../../../release/variables.md)
   in the parameters of the **Azure Resource Group Deployment** task,
   such as **vmuser**, **vmpassword**, and **dns**, set the values for them in the
   stage configuration variables. Encrypt the value
   of **vmpassword** by selecting the "padlock" icon.

7. Enter a name for the release pipeline and save it.

8. Create a new release, select the latest build, and 
   deploy it to the single stage.
