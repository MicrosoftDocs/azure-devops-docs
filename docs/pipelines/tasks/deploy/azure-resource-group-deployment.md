---
title: Azure Resource Group Deployment task
description: Deploy, start, stop, or delete Azure Resource Groups
ms.topic: reference
ms.assetid: 94A74903-F93F-4075-884F-DC11F34058B4
ms.manager: dastahel
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/10/2020
monikerRange: 'azure-devops'
---

# Azure Resource Group Deployment task

**Azure Pipelines**

Use this task to deploy, start, stop, and delete Azure Resource Groups.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureResourceGroupDeploymentV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName` <br/>Azure subscription|(Required) Select the Azure Resource Manager subscription for the deployment.<br/>Argument aliases: `azureSubscription`|
|`action` <br/> Action|(Required) Action to be performed on the Azure resources or resource group.<br/>Default value: `Create Or Update Resource Group`|
|`resourceGroupName`<br/>Resource group|(Required) Provide the name of a resource group.|
|`location` <br/> Location|(Required) Location for deploying the resource group. If the resource group already exists in the subscription, then this value will be ignored.|
|`templateLocation` <br/> Template location|(Required) Select either **Linked artifact** or **URL of the file**.<br/>Default value: `Linked artifact`|
|`csmFileLink`<br/>Template link|(Required) Specify the URL of the template file. <br/> **Example:** [https://raw.githubusercontent.com/Azure/...](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.json) <br/> To deploy a template stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. <br/>**Example**: **<blob_storage_url>/template.json?<SAStoken>**. <br/> To upload a template file (or a linked template) to a storage account and generate a SAS token, you could use [Azure file copy](https://aka.ms/azurefilecopyreadme) task or follow the steps using [PowerShell](/azure/azure-resource-manager/templates/deploy-powershell) or [Azure CLI](https://go.microsoft.com/fwlink/?linkid=836911).<br/>To  view the template parameters in a grid, click on **...** next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to [this](/rest/api/storageservices/cross-origin-resource-sharing--cors--support-for-the-azure-storage-services#understanding-cors-requests) to enable CORS. |
|`csmParametersFileLink`<br/>Template parameters link|(Optional) Specify the URL of the parameters file. <br/> **Example**: https://raw.githubusercontent.com/Azure/... <br/>To use a file stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. <br/> **Example:** **<blob_storage_url>/template.json?<SAStoken>**. <br/>To upload a parameters file to a storage account and generate a SAS token, you could use Azure file copy task or follow the steps using PowerShell or Azure CLI. <br/>To  view the template parameters in a grid, click on **...** next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to this to enable CORS. |
|`csmFile`<br/>Template|(Required) Specify the path or a pattern pointing to the Azure Resource Manager template. For more information about the templates see https://aka.ms/azuretemplates. To get started immediately use template https://aka.ms/sampletemplate. |
|`csmParametersFile`<br/>Template parameters|(Optional) Specify the path or a pattern pointing for the parameters file for the Azure Resource Manager template.|
|`overrideParameters`<br/>Override template parameters|(Optional) To view the template parameters in a grid, click on **...** next to Override Parameters textbox. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to this to enable CORS. Or type the template parameters to override in the textbox. <br/>**Example**: **-storageName fabrikam -adminUsername $(vmusername) -adminPassword $(password) -azureKeyVaultName $(fabrikamFibre)**.<br/>If the parameter value you're using has multiple words, enclose them in quotes, even if you're passing them using variables. <br/>**For example**, **-name "parameter value" -name2 "$(var)"**. <br/>To override object type parameters use stringified JSON objects. <br/>**For example**, **-options ["option1"] -map {"key1": "value1" }**.|
|`deploymentMode`<br/>Deployment mode|(Required) Incremental mode handles deployments as incremental updates to the resource group. It leaves unchanged resources that exist in the resource group but are not specified in the template. Complete mode deletes resources that are not in your template. Validate mode enables you to find problems with the template before creating actual resources. Note that this mode always creates a resource group, even if no resources are deployed. <br/>Default value: `Incremental`|
|`enableDeploymentPrerequisites`<br/>Enable prerequisites|(Optional) These options would be applicable only when the Resource group contains virtual machines. Choosing Deployment Group option would configure Deployment Group agent on each of the virtual machines. Selecting WinRM option configures Windows Remote Management (WinRM) listener over HTTPS protocol on port 5986, using a self-signed certificate. This configuration is required for performing deployment operation on Azure machines. If the target Virtual Machines are backed by a Load balancer, ensure Inbound NAT rules are configured for target port (5986). <br/>Default value: `None`|
|`deploymentGroupEndpoint`<br/>Azure Pipelines service connection|(Required) Specify the service connection to connect to an Azure DevOps organization or collection for agent registration.<br><br>You can create a service connection using **+New**, and select **Token-based authentication**. You need a [personal access token (PAT)](/vsts/accounts/use-personal-access-tokens-to-authenticate) to set up a service connection. <br/> ​Click **Manage** to update the service connection details. <br/>Argument aliases: `teamServicesConnection`|
|`project`<br/>Team project|(Required) Specify the Team project which has the Deployment Group defined in it. <br/>Argument aliases: `teamProject`|
|`deploymentGroupName`<br/>Deployment Group|(Required) Specify the Deployment Group against which the Agent(s) will be registered. For more guidance, refer to [Deployment Groups](../../release/deployment-groups/index.md).|
|`copyAzureVMTags`<br/>Copy Azure VM tags to agents|(Optional) Choose if the tags configured on the Azure VM need to be copied to the corresponding Deployment Group agent. By default all Azure tags will be copied following the format **Key: Value**. <br/>**Example**: An Azure Tag **"Role : Web"** would be copied  as-is to the Agent machine. For more information on how tag Azure resources refer to the [link](/azure/azure-resource-manager/resource-group-using-tags).|
|`runAgentServiceAsUser`<br/>Run agent service as a user| (Optional) Decide whether to run the agent service as a user other than the default. The default user is **NT AUTHORITY\\\SYSTEM** in Windows and **root** in Linux. |
|`userName`<br/>User name| (Required) The username to run the agent service on the virtual machines. <br>For domain users, please enter values as **domain\\\username** or **username\@domain.com**. <br/>For local users, please enter just the user name. <br/>It is assumed that the same domain user or a local user with the same name, respectively, is present on all the virtual machines in the resource group.|
| `password`<br/>Password| The password for the user to run the agent service on the Windows VMs. <br>It is assumed that the password is same for the specified user on all the VMs. <br>It can accept variable defined in build or release pipelines as **$(passwordVariable)**. You may mark variable as **secret** to secure it. <br>For linux VMs, a password is not required and will be ignored.|
|`outputVariable`<br/>VM details for WinRM|(Optional) Provide a name for the variable for the resource group. The variable can be used as **$(variableName)** to refer to the resource group in subsequent tasks like in the PowerShell on Target Machines task for deploying applications. Valid only when the selected action is **Create, Update** or **Select**, and required when an existing resource group is selected.|
|`deploymentName`<br/>Deployment name| (Optional) Specifies the name of the resource group deployment to create|
|`deploymentOutputs`<br/>Deployment outputs|(Optional) Provide a name for the variable for the output variable which will contain the outputs section of the current deployment object in string format. You can use the **ConvertFrom-Json** PowerShell cmdlet to parse the JSON object and access the individual output values.|
|`addSpnToEnvironment`<br/>Access service principal details in override parameters| Adds service principal ID and key of the Azure endpoint you chose to the script's execution environment. You can use these variables: **$servicePrincipalId** and **$servicePrincipalKey** in your override parameters like **-key $servicePrincipalKey**|

## Troubleshooting

### Error: Internal Server Error

These issues are mostly transient in nature. There are multiple reasons why it could be happening:
- One of the Azure services you're trying to deploy is undergoing maintenance in the region you're trying to deploy to. Keep an eye out on https://status.azure.com/ to check downtimes of Azure Services.
- Azure Pipelines service itself is going through maintenance. Keep an eye out on https://status.dev.azure.com/ for downtimes.

However, we've seen some instances where this is due to an error in the ARM template, such as the Azure service you're trying to deploy doesn't support the region you've chosen for the resource.

### Error: Timeout

Timeout issues could be coming from two places:
- Azure Pipelines Agent
- Portal Deployment

You can identify if the timeout is from portal, by checking for the portal deployment link that'll be in the task logs. If there's no link, this is likely due to Azure Pipelines agent. If there's a link, follow the link to see if there's a timeout that has happened in the portal deployment.

### Error: CORS rules to be enabled while overriding parameters

If the template file is being referred from a BLOB, while overriding parameters in the pipeline, you might see the following warning message:

`Warning: Failed to download the file from template path.`

This feature requires the CORS rules to be enabled at the source. If templates are in Azure storage blob, see [Cross-origin resource sharing support](/rest/api/storageservices/cross-origin-resource-sharing--cors--support-for-the-azure-storage-services?redirectedfrom=MSDN#understanding-cors-requests) to enable CORS. 

Besides enabling CORS, ensure that the SAS token specified in the link of the template is "srt-sco". This token is required for you to download the file and proceed.

#### Azure Pipelines Agent

If the issue is coming from Azure Pipelines agent, you can increase the timeout by setting timeoutInMinutes as key in the YAML to 0. Check out this article for more details: https://docs.microsoft.com/azure/devops/pipelines/process/phases?tabs=yaml.

#### Portal Deployment

Check out this doc on how to identify if the error came from the Azure portal: https://docs.microsoft.com/azure/azure-resource-manager/templates/deployment-history?tabs=azure-portal.

In case of portal deployment, try setting "timeoutInMinutes" in the ARM template to "0". If not specified, the value assumed is 60 minutes. 0 makes sure the deployment will run for as long as it can to succeed.

This could also be happening because of transient issues in the system. Keep an eye on  https://status.dev.azure.com/ to check if there's a downtime in Azure Pipelines service.

### Error: Azure Resource Manager (ARM) template failed validation

This issue happens mostly because of an invalid parameter in the ARM Template, such as an unsupported SKU or Region. If the validation has failed, please check the error message. It should point you to the resource and parameter that is invalid.

This issue could also arise because of multiline strings. Currently Azure Resource Group Deployment task does not support multiline strings in arm template/parameter json file.
  
In addition, refer to this article regarding structure and syntax of ARM Templates: https://docs.microsoft.com/azure/azure-resource-manager/templates/template-syntax.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
