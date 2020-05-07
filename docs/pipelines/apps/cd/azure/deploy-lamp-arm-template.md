---
title: Deploy a LAMP app using an ARM template
description: Deploy a LAMP app on Ubuntu using an Azure Resource Manager (ARM) Template Deployment Task
ms.topic: conceptual
ms.author: jukullam
author: JuliaKM
ms.date: 05/07/2020
monikerRange: '= tfs-2015'
---

# Use an Azure Resource Manager template to deploy a LAMP app

In just a few steps, you can provision Azure virtual machines (VMs)
using the [Azure Resource Group Deployment task](../../../tasks/deploy/azure-resource-group-deployment.md).

Managing the pipelines for virtual machines in this way is considered **Infrastructure as code** and is
a good DevOps practice.

## Prerequisites

Before you begin, you need:
* Access to the Azure quickstart template
* An Azure account
* An Azure DevOps account

# Get the code

Fork this repo in GitHub:

```
https://github.com/Azure/azure-quickstart-templates/tree/master/lamp-app/
```

## Build your YAML

Follow these steps to deploy your ARM template.



## OLD!!!
1. Open the **Releases** tab of **Azure Pipelines** and choose the
   "**+**" icon to create a new release pipeline.

2. In the **Create release pipeline** dialog, select the **Empty** template and choose **Next**.

3. In the next page, select the build pipeline you created 
   earlier and choose **Create**. This creates a new release pipeline 
   with one default stage.

4. In the new release pipeline, select **+ Add tasks** and add an **Azure Resource Group Deployment** task.
   Optionally edit the name to help identify the task, such as **Provision Windows 2012 R2 VM**.

5. Configure the **Azure Resource Group Deployment** task as follows:

   ![Azure Resource Group Deployment](../../../tasks/deploy/media/azure-resource-group-deployment-icon.png) [Deploy: Azure Resource Group Deployment](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureResourceGroupDeploymentV2) - Deploy files to an Azure Resource Group.
   
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
