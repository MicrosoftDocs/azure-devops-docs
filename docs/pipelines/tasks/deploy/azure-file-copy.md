---
title: Azure File Copy task
description: Azure Pipelines and Team Foundation Server build task to copy files to Microsoft Azure storage blobs or virtual machines (VMs) 
ms.assetid: 22879225-BB1B-436A-ADF3-6E0B6E5E6EF4
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Azure File Copy task

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

Use this task in a build or release pipeline to copy files to 
Microsoft Azure storage blobs or virtual machines (VMs).

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

The task is used to copy application files and other
artifacts that are required in order to install the 
app; such as PowerShell scripts, PowerShell-DSC modules,
and more.
 
When the target is Azure VMs, the files are first copied
to an automatically generated Azure blob container 
and then downloaded into the VMs. The container is deleted 
after the files have been successfully copied to the VMs.

The task uses **AzCopy**, the command-line utility 
built for fast copying of data from and into Azure storage accounts.

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

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureFileCopyV3.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Source** | Required. The source of the files to copy. Pre-defined system variables such as ``` $(Build.Repository.LocalPath)``` can be used. Names containing wildcards such as ```*.zip``` are not supported. |
| **Azure Connection Type** | Required. Select the type of service connection used to define the connection to Azure. Choose **Azure Classic** or **Azure Resource Manager**. |
| **Azure Classic Subscription** | Required if you select **Azure Classic** for the **Azure Connection Type** parameter. The name of an [Azure Classic service connection](../../library/service-endpoints.md#sep-azure-classic) configured for the subscription where the target Azure service, virtual machine, or storage account is located. |
| **Azure RM Subscription** | Required if you select **Azure Resource Manager** for the **Azure Connection Type** parameter. The name of an [Azure Resource Manager service connection](../../library/connect-to-azure.md) configured for the subscription where the target Azure service, virtual machine, or storage account is located. See [Azure Resource Manager overview](https://azure.microsoft.com/documentation/articles/resource-group-overview/) for more details. |
| **Destination Type** | Required. The type of target destination for the files. Choose **Azure Blob** or **Azure VMs**. |
| **Classic Storage Account** | Required if you select **Azure Classic** for the **Azure Connection Type** parameter. The name of an existing storage account within the Azure subscription. |
| **RM Storage Account** | Required if you select **Azure Resource Manager** for the **Azure Connection Type** parameter. The name of an existing storage account within the Azure subscription. |
| **Container Name** | Required if you select **Azure Blob** for the **Destination Type** parameter. The name of the container to which the files will be copied. If a container with this name does not exist, a new one will be created. |
| **Blob Prefix** | Optional if you select **Azure Blob** for the **Destination Type** parameter. A prefix for the blob names, which can be used to filter the blobs. For example, using the build number enables easy filtering when downloading all blobs with the same build number. |
| **Cloud Service** | Required if you select **Azure Classic** for the **Azure Connection Type** parameter and **Azure VMs** for the **Destination Type** parameter. The name of the Azure Cloud Service in which the virtual machines run. |
| **Resource Group** | Required if you select **Azure Resource Manager** for the **Azure Connection Type** parameter and **Azure VMs** for the **Destination Type** parameter. The name of the Azure Resource Group in which the virtual machines run. |
| **Select Machines By** | Depending on how you want to specify the machines in the group when using the **Filter Criteria** parameter, choose **Machine Names** or **Tags**. |
| **Filter Criteria** | Optional. A list of machine names or tag names that identifies the machines that the task will target. The filter criteria can be:<br />- The name of an <a href="https://azure.microsoft.com/documentation/articles/resource-group-overview/">Azure Resource Group</a>.<br />- An output variable from a previous task.<br />- A comma-delimited list of tag names or machine names.<br />Format when using machine names is a comma-separated list of the machine FQDNs or IP addresses.<br />Specify tag names for a filter as {TagName}**:**{Value} Example: `Role:DB;OS:Win8.1` |
| **Admin Login** | Required if you select **Azure VMs** for the **Destination Type** parameter. The user name of an account that has administrative permissions for all the target VMs.<br />- Formats such as **username**, **domain\username**, **machine-name\username**, and **.\username** are supported.<br />- UPN formats such as **username@domain.com** and built-in system accounts such as **NT Authority\System** are not supported. |
| **Password** | Required if you select **Azure VMs** for the **Destination Type** parameter. The password for the account specified as the **Admin Login** parameter. Use the padlock icon for a variable defined in the **Variables** tab to protect the value, and insert the variable name here. |
| **Destination Folder** | Required if you select **Azure VMs** for the **Destination Type** parameter. The folder in the Azure VMs to which the files will be copied. Environment variables such as `$env:windir` and `$env:systemroot` are supported. Examples: ` $env:windir\FabrikamFiber\Web` and `c:\FabrikamFiber` |
| **Additional Arguments** | Optional. Any arguments you want to pass to the **AzCopy.exe** program for use when uploading to the blob and downloading to the VMs. See [Transfer data with the AzCopy Command-Line Utility](https://azure.microsoft.com/documentation/articles/storage-use-azcopy/) for more details. If you are using a Premium storage account, which supports only Azure page blobs, the pass `/BlobType:Page` as an additional argument. |
| **Enable Copy Prerequisites** | Available if you select **Azure Resource Manager** for the **Azure Connection Type** parameter and **Azure VMs** for the **Destination Type** parameter. Setting this option configures the Windows Remote Management (WinRM) listener over HTTPS protocol on port 5986, using a self-signed certificate. This configuration is required for performing copy operation on Azure virtual machines.<br />- If the target virtual machines are accessed through a load balancer, ensure an inbound NAT rule is configured to allow access on port 5986.<br />- If the target virtual machines are associated with a Network Security Group (NSG), configure an inbound security rule to allow access on port 5986. |
| **Copy in Parallel** | Available if you select **Azure VMs** for the **Destination Type** parameter. Setting this option causes the process to execute in parallel for the copied files. This can considerably reduce the overall time taken. |
| **Clean Target** | Available if you select **Azure VMs** for the **Destination Type** parameter. Setting this option causes all of the files in the destination folder to be deleted before the copy process starts. |
| **Test Certificate** | Available if you select **Azure VMs** for the **Destination Type** parameter. WinRM requires a certificate for the HTTPS transfer when copying files from the intermediate storage blob into the Azure VMs. If you set use a self-signed certificate, set this option to prevent the process from validating the certificate with a trusted certificate authority (CA). |
| **Output - Storage Container URI** | Optional. The name of a variable that will be updated with the URI of the storage container into which the files were copied. Use this variable as an input to subsequent tasks. |
| **Output - Storage Container SAS Token** | Optional. The name of a variable that will be updated with the Storage Access Security (SAS) token of the storage container into which the files were copied. Use this variable as an input to subsequent tasks. By default, the SAS token expires after 4 hours. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Related tasks

* [Azure Resource Group Deployment](azure-resource-group-deployment.md)
* [Azure Cloud Service Deployment](azure-cloud-powershell-deployment.md)
* [Azure Web App Deployment](azure-rm-web-app-deployment.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
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
and a suitable certificate installed.

If the VMs have been created without opening the 
WinRM HTTPS ports, follow these steps:

1. Configure an inbound access rule to allow HTTPS on port 5986 of each VM.
1. Disable [UAC remote restrictions](https://support.microsoft.com/kb/951016).
1. Specify the credentials for the task to access the VMs using an administrator-level login in the simple form **username** without any domain part.
1. Install a certificate on the machine that runs the automation agent.
1. Set the **Test Certificate** parameter of the task if you are using a self-signed certificate.

#### What type of service connection should I choose?

The following table lists the storage accounts and 
the service connections that work with them.
To identify whether a storage account is based on 
the classic APIs or the Resource Manager APIs, log 
into the [Azure portal](https://portal.azure.com/)
and browse for **Storage accounts (Classic)** or 
**Storage accounts**.

| Storage account type | Azure Service Connections in TFS/TS |
| --- | --- |
| Resource Manager | Azure Resource Manager service connection | 
| Classic | Azure service connection with certificate-based or credentials-based authentication using a school or work account | 


* For Azure classic resources, use an **Azure** service connection
  type with certificate or credentials-based authentication.
  If you are using credentials-based authentication, 
  ensure that the credentials are for a 
  [school or work account](https://azure.microsoft.com/pricing/member-offers/msdn-benefits-details/work-accounts-faq/).
  Microsoft accounts such as **joe@live.com** and 
  **joe@hotmail.com** are not supported.
  
* For Azure Resource Manager VMs, use an **Azure Resource Manager** service connection type. See more details at [Automating Azure Resource Group deployment using a Service Principal](https://devblogs.microsoft.com/devops/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-buildrelease-management/).
  
* If you are using an **Azure Resource Manager** 
  service connection type, or an **Azure** service connection 
  type with certificate-based authentication, the task
  automatically filters appropriate classic storage 
  accounts, the newer Azure Resource Manager storage 
  accounts, and other fields. For example, the Resource
  Group or cloud service, and the virtual machines.

* **Note**: Currently an **Azure** service connection type with 
  credentials-based authentication does not filter 
  the storage, Resource Group or cloud service, and 
  virtual machine fields.

#### What happens if my Resource Group contains both Classic and Resource Manager VMs?

If the specified Resource Group contains both 
Azure Resource Manager and Classic VMs, the set of VMs that 
will be targeted depends on the connection type.
For certificate-based connections and credentials-based
connections, the copy operation will be performed 
only on Classic VMs. For Service Principal Name 
based connections, the copy operation will be 
performed on only Resource Manager VMs.

#### How do I create a school or work account for use with this task?

A suitable account can be easily created for use in a service connection:

1. Use the Azure portal to create a new user account in Azure Active Directory.
1. Add the Azure Active Directory user account to the co-administrators group in your Azure subscription.
1. Sign into the Azure portal with this user account and change the password.
1. Use the username and password of this account in the service connection. Deployments will be processed using this account.

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
