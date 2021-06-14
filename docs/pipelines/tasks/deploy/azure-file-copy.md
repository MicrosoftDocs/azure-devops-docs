---
title: Azure File Copy task
description: Azure Pipelines and Team Foundation Server build task to copy files to Microsoft Azure storage blobs or virtual machines (VMs) 
ms.assetid: 22879225-BB1B-436A-ADF3-6E0B6E5E6EF4
ms.topic: reference
ms.custom: seodec18, fasttrack-edit
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Azure File Copy task

[!INCLUDE [temp](../../includes/version-tfs-2015-update.md)]

Use this task to copy files to 
Microsoft Azure storage blobs or virtual machines (VMs).

> [!NOTE]
> This task is written in PowerShell and thus works **only** when run on Windows agents. If your pipelines require Linux agents and need to copy files to an Azure Storage Account, consider running `az storage blob` commands in the [Azure CLI task](./azure-cli.md) as an alternative.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

The task is used to copy application files and other
artifacts that are required in order to install the 
app; such as PowerShell scripts, PowerShell-DSC modules,
and more.

> [!NOTE]
> If you are using Azure File copy task version 3 or below, see [Azure file copy version 3 or earlier](./azure-file-copy-version3.md). 
 
When the target is Azure VMs, the files are first copied
to an automatically generated Azure blob container 
and then downloaded into the VMs. The container is deleted 
after the files have been successfully copied to the VMs.

The task uses **AzCopy**, the command-line utility 
built for fast copying of data from and into Azure storage accounts. The version 4 of the Azure File Copy task uses [AzCopy V10](/azure/storage/common/storage-use-azcopy-v10).

To dynamically deploy Azure Resource Groups that 
contain virtual machines, use the 
[Azure Resource Group Deployment](azure-resource-group-deployment.md) task. This task
has a sample template that can perform the required
operations to set up the WinRM HTTPS
protocol on the virtual machines, open the 5986 port 
in the firewall, and install the test certificate.

> [!NOTE]
> If you are deploying to Azure Static Websites as a container in blob storage,
  you must use **Version 2** or higher of the task in order to preserve the **$web**
  container name.

The task supports authentication based on Azure Active Directory. Authentication using a service principal and managed identity are available. For managed identities, only system-wide managed identity is supported.
  
> [!NOTE]
> For authorization you will have to provide access to the Security Principal. The level of authorization required can be referred [here](/azure/storage/common/storage-use-azcopy-v10#option-1-use-azure-active-directory).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/azure-file-copy-v4.md)]

::: moniker-end

## Arguments

| Argument | Description |
|------------------------------------------|----------------------------------------|
| **Source Path** | Required. The source of the files to copy. YAML Pipelines and Classic Release support [pre-defined system variables](../../build/variables.md?tabs=yaml) like *Build.Repository.LocalPath* as well. [Release variables](../../release/variables.md?tabs=batch) are supported only in classic releases. Wild card symbol (\*) is supported anywhere in the file path or file name. |
| **Azure Subscription** | Required. The name of an [Azure Resource Manager service connection](../../library/connect-to-azure.md) configured for the subscription where the target Azure service, virtual machine, or storage account is located. See [Azure Resource Manager overview](/azure/azure-resource-manager/management/overview) for more details. |
| **Destination** | Required. The type of target destination for the files. Choose **Azure Blob** or **Azure VMs**. |
| **Storage** | Required. The name of an existing storage account within the Azure subscription. |
| **Container Name** | Required if you select **Azure Blob** for the **Destination Type** parameter. The name of the container to which the files will be copied. If a container with this name does not exist, a new one will be created. |
| **Blob Prefix** | Optional if you select **Azure Blob** for the **Destination Type** parameter. A prefix for the blob names, which can be used to filter the blobs. For example, using the build number enables easy filtering when downloading all blobs with the same build number. |
| **Resource Group** | Required if you select **Azure Resource Manager** for the **Azure Connection Type** parameter and **Azure VMs** for the **Destination Type** parameter. The name of the Azure Resource Group in which the virtual machines run. |
| **Resource Filtering Method** | Depending on how you want to specify the machines in the group when using the **Filter Criteria** parameter, choose **Machine Names** or **Tags**. |
| **Filter Criteria** | Optional. A list of machine names or tag names that identifies the machines that the task will target. The filter criteria can be:<br />- The name of an <a href="/azure/azure-resource-manager/management/overview">Azure Resource Group</a>.<br />- An output variable from a previous task.<br />- A comma-delimited list of tag names or machine names.<br />Format when using machine names is a comma-separated list of the machine FQDNs or IP addresses.<br />Specify tag names for a filter as {TagName}**:**{Value} Example: `Role:DB;OS:Win8.1` |
| **VM Admin Login** | Required if you select **Azure VMs** for the **Destination Type** parameter. The user name of an account that has administrative permissions for all the target VMs.<br />- Formats such as **username**, **domain\username**, **machine-name\username**, and **.\username** are supported.<br />- UPN formats such as <strong>username@domain.com</strong> and built-in system accounts such as **NT Authority\System** are not supported. |
| **VM Admin Password** | Required if you select **Azure VMs** for the **Destination Type** parameter. The password for the account specified as the **Admin Login** parameter. Use the padlock icon for a variable defined in the **Variables** tab to protect the value, and insert the variable name here. |
| **Target Path** | Required if you select **Azure VMs** for the **Destination Type** parameter. The folder in the Azure VMs to which the files will be copied. Environment variables such as `$env:windir` and `$env:systemroot` are supported. Examples: `$env:windir\FabrikamFiber\Web` and `c:\FabrikamFiber` |
| **Additional Arguments** | Optional. Any arguments you want to pass to the **AzCopy.exe** program for use when uploading to the blob and downloading to the VMs. See [Transfer data with the AzCopy Command-Line Utility](/azure/storage/common/storage-use-azcopy-v10) for more details. If you are using a Premium storage account, which supports only Azure page blobs, the pass '--blob-type=PageBlob' as an additional argument. The default arguments are --log-level=INFO (default) and --recursive (only if container name is not $root). |
| **Enable Copy Prerequisites** | Available if you select **Azure Resource Manager** for the **Azure Connection Type** parameter and **Azure VMs** for the **Destination Type** parameter. Setting this option configures the Windows Remote Management (WinRM) listener over HTTPS protocol on port 5986, using a self-signed certificate. This configuration is required for performing copy operation on Azure virtual machines.<br />- If the target virtual machines are accessed through a load balancer, ensure an inbound NAT rule is configured to allow access on port 5986.<br />- If the target virtual machines are associated with a Network Security Group (NSG), configure an inbound security rule to allow access on port 5986. |
| **Copy Files in Parallel** | Available if you select **Azure VMs** for the **Destination Type** parameter. Setting this option causes the process to execute in parallel for the copied files. This can considerably reduce the overall time taken. |
| **Clean Target Before Copy** | Available if you select **Azure VMs** for the **Destination Type** parameter. Setting this option causes all of the files in the destination folder to be deleted before the copy process starts. |
| **Skip CA Certificate Check** | Available if you select **Azure VMs** for the **Destination Type** parameter. WinRM requires a certificate for the HTTPS transfer when copying files from the intermediate storage blob into the Azure VMs. If you set use a self-signed certificate, set this option to prevent the process from validating the certificate with a trusted certificate authority (CA). | 
| **SAS Token Expiration Period In Minutes** | Optional. Provide the time in minutes after which SAS token will expire. Valid only when the selected destination is Azure Blob. Default should be 4 hours. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Related tasks

* [Azure Resource Group Deployment](azure-resource-group-deployment.md)
* [Azure Cloud Service Deployment](azure-cloud-powershell-deployment.md)
* [Azure Web App Deployment](azure-rm-web-app-deployment.md)

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

#### What are the Azure PowerShell prerequisites for using this task?

The task requires Azure PowerShell to be installed 
on the machine running the automation agent. The 
recommended version is 1.0.2, but the task will work
with version 0.9.8 and higher. You can use the
[Azure PowerShell Installer v1.0.2](https://github.com/Azure/azure-powershell/releases/tag/v1.0.2-December2015)
to obtain this.

#### What are the WinRM prerequisites for this task?

The task uses Windows Remote Management (WinRM) HTTPS protocol to
copy the files from the storage blob container to the Azure VMs.
This requires the WinRM HTTPS service to be configured on the VMs,
and a suitable certificate installed. [Configure WinRM after virtual machine creation](/azure/marketplace/cloud-partner-portal/virtual-machine/cpp-configure-winrm-after-vm-creation)

If the VMs have been created without opening the 
WinRM HTTPS ports, follow these steps:

1. Configure an inbound access rule to allow HTTPS on port 5986 of each VM.
1. Disable [UAC remote restrictions](https://support.microsoft.com/kb/951016).
1. Specify the credentials for the task to access the VMs using an administrator-level login in the simple form **username** without any domain part.
1. Install a certificate on the machine that runs the automation agent.
1. Set the **Test Certificate** parameter of the task if you are using a self-signed certificate.

#### What type of service connection should I choose?
  
* For Azure Resource Manager storage accounts and Azure Resource Manager VMs, use an **Azure Resource Manager** service connection type. See more details at [Automating Azure Resource Group deployment using a Service Principal](https://devblogs.microsoft.com/devops/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-buildrelease-management/).
  
* While using an **Azure Resource Manager** 
  service connection type, the task
  automatically filters appropriate newer Azure Resource Manager storage 
  accounts, and other fields. For example, the Resource
  Group or cloud service, and the virtual machines.

#### How do I create a school or work account for use with this task?

A suitable account can be easily created for use in a service connection:

1. Use the Azure portal to create a new user account in Azure Active Directory.
1. Add the Azure Active Directory user account to the co-administrators group in your Azure subscription.
1. Sign into the Azure portal with this user account and change the password.
1. Use the username and password of this account in the service connection. Deployments will be processed using this account.

#### If the task fails, will the copy resume?

Since AzCopy V10 does not support journal files, the task cannot resume the copy. You will have to run the task again to copy all the files.

#### Are the log files and plan files cleaned after the copy?

The log and plan files are not deleted by the task. To explicitly clean up the files you can add a CLI step in the workflow using [this command](/azure/storage/common/storage-ref-azcopy-jobs-clean).

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [qa-versions](../../includes/qa-versions.md)]

#### How do I use the Azure file copy task to copy a file to an Azure virtual machine that doesn't have a public IP address?

Make sure that you're using version 4 of the Azure file copy task. If the task fails, you can add a build step to execute the command `azcopy cp "source-file-path" "destination-file-path"` to substitute the source and destination values.

#### Forbidden error: 'AzCopy.exe exited with non-zero exit code while uploading files to blob storage' while using Azure File Copy task

The hosted agents are assigned randomly every time a build is triggered and hence the [agent IP addresses](../../agents/hosted.md#agent-ip-ranges) will be different on every run. If these IP addresses are not in your allowed list of IPs, the communication between Azure DevOps and the storage account fails. In such scenarios, follow the below steps outlined:

1. Add a build step using Azure CLI, which will identify the IP of the Microsoft Hosted Build agent at runtime and it will add the IP address in the Network rule on the Azure Storage Account.
1. Execute the build step for your Azure Storage Account.
1. Add another build step using Azure CLI, which will remove the IP address of the build agent from the Azure Storage Account network rule which was added earlier.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

::: moniker-end

<!-- ENDSECTION -->
