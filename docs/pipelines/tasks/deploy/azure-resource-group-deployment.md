---
title: Azure Resource Group Deployment task
description: Deploy, start, stop, or delete Azure Resource Groups
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 94A74903-F93F-4075-884F-DC11F34058B4
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Resource Group Deployment task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy, start, stop, and delete Azure Resource Groups.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureResourceGroupDeploymentV2.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription for the deployment.</td></tr>
<tr><td>Action</td><td>(Required) Action to be performed on the Azure resources or resource group.</td></tr>
<tr><td>Resource group</td><td>(Required) Provide the name of a resource group.</td></tr>
<tr><td>Location</td><td>(Required) Location for deploying the resource group. If the resource group already exists in the subscription, then this value will be ignored.</td></tr>
<tr><td>Template location</td><td>(Required) undefined</td></tr>
<tr><td>Template link</td><td>(Required) Specify the URL of the template file. Example: [https://raw.githubusercontent.com/Azure/...](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.json) 

To deploy a template stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. Example: `<blob_storage_url>/template.json?<SAStoken>` To upload a template file (or a linked template) to a storage account and generate a SAS token, you could use [Azure file copy](https://aka.ms/azurefilecopyreadme) task or follow the steps using [PowerShell](https://go.microsoft.com/fwlink/?linkid=838080) or [Azure CLI](https://go.microsoft.com/fwlink/?linkid=836911).

To  view the template parameters in a grid, click on **...** next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to [this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests) to enable CORS.</td></tr>
<tr><td>Template parameters link</td><td>(Optional) Specify the URL of the parameters file. Example: [https://raw.githubusercontent.com/Azure/...](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.parameters.json) 

To use a file stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. Example: `<blob_storage_url>/template.json?<SAStoken>` To upload a parameters file to a storage account and generate a SAS token, you could use [Azure file copy](https://aka.ms/azurefilecopyreadme) task or follow the steps using [PowerShell](https://go.microsoft.com/fwlink/?linkid=838080) or [Azure CLI](https://go.microsoft.com/fwlink/?linkid=836911).

To  view the template parameters in a grid, click on **...** next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to [this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests) to enable CORS.</td></tr>
<tr><td>Template</td><td>(Required) Specify the path or a pattern pointing to the Azure Resource Manager template. For more information about the templates see https://aka.ms/azuretemplates. To get started immediately use template https://aka.ms/sampletemplate.</td></tr>
<tr><td>Template parameters</td><td>(Optional) Specify the path or a pattern pointing for the parameters file for the Azure Resource Manager template.</td></tr>
<tr><td>Override template parameters</td><td>(Optional) To view the template parameters in a grid, click on “…” next to Override Parameters textbox. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to [this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests) to enable CORS. Or type the template parameters to override in the textbox. Example, <br>–storageName fabrikam –adminUsername $(vmusername) -adminPassword $(password) –azureKeyVaultName $(fabrikamFibre).<br>If the parameter value you're using has multiple words, enclose them in quotes, even if you're passing them using variables. For example, -name "parameter value" -name2 "$(var)"<br>To override object type parameters use stringified JSON objects. For example, -options ["option1"] -map {"key1": "value1" }. </td></tr>
<tr><td>Deployment mode</td><td>(Required) Incremental mode handles deployments as incremental updates to the resource group . It leaves unchanged resources that exist in the resource group but are not specified in the template.

 Complete mode deletes resources that are not in your template.

 Validate mode enables you to find problems with the template before creating actual resources.

 By default, Incremental mode is used.</td></tr>
<tr><td>Enable prerequisites</td><td>(Optional) These options would be applicable only when the Resource group contains virtual machines. <br><br>Choosing Deployment Group option would configure Deployment Group agent on each of the virtual machines. <br><br>Selecting WinRM option configures Windows Remote Management (WinRM) listener over HTTPS protocol on port 5986, using a self-signed certificate. This configuration is required for performing deployment operation on Azure machines. If the target Virtual Machines are backed by a Load balancer, ensure Inbound NAT rules are configured for target port (5986).</td></tr>
<tr><td>Azure Pipelines/TFS endpoint</td><td>(Required) Agent registration with a deployment group requires access to your Visual Studio project.? <br><br>Click "Add" to create a service connection using a personal access token (PAT) with scope restricted to "Deployment Group" and a default expiration time of 90 days. <br><br>?Click "Manage" to update service connection details.?</td></tr>
<tr><td>Project</td><td>(Required) Specify the project which has the Deployment Group defined in it?</td></tr>
<tr><td>Deployment Group</td><td>(Required) Specify the Deployment Group against which the Agent(s) will be registered. For more guidance, refer to [Deployment Groups](https://aka.ms/832442)</td></tr>
<tr><td>Copy Azure VM tags to agents</td><td>(Optional) Choose if the tags configured on the Azure VM need to be copied to the corresponding Deployment Group agent. <br><br>By default all Azure tags will be copied following the format “Key: Value”. Example: An Azure Tag "Role : Web" would be copied  as-is to the Agent machine. <br><br>For more information on how tag Azure resources refer to [link](/azure/azure-resource-manager/resource-group-using-tags?)</td></tr>
<tr><td>VM details for WinRM</td><td>(Optional) Provide a name for the variable for the resource group. The variable can be used as $(variableName) to refer to the resource group in subsequent tasks like in the PowerShell on Target Machines task for deploying applications. <br>Valid only when the selected action is Create, Update or Select, and required when an existing resource group is selected.</td></tr>
<tr><td>Deployment outputs</td><td>(Optional) Provide a name for the variable for the output variable which will contain the outputs section of the current deployment object in string format. You can use the “ConvertFrom-Json” PowerShell cmdlet to parse the JSON object and access the individual output values.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
