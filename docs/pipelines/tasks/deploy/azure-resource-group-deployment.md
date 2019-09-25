---
title: Azure Resource Group Deployment task
description: Deploy, start, stop, or delete Azure Resource Groups
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 94A74903-F93F-4075-884F-DC11F34058B4
ms.manager: dastahel
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
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
<tr><td>Template link</td><td>(Required) Specify the URL of the template file. Example: <a href="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.json" data-raw-source="[https://raw.githubusercontent.com/Azure/...](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.json)">https://raw.githubusercontent.com/Azure/...</a> 

To deploy a template stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. Example: <code>&lt;blob_storage_url&gt;/template.json?&lt;SAStoken&gt;</code> To upload a template file (or a linked template) to a storage account and generate a SAS token, you could use <a href="https://aka.ms/azurefilecopyreadme" data-raw-source="[Azure file copy](https://aka.ms/azurefilecopyreadme)">Azure file copy</a> task or follow the steps using <a href="https://go.microsoft.com/fwlink/?linkid=838080" data-raw-source="[PowerShell](https://go.microsoft.com/fwlink/?linkid=838080)">PowerShell</a> or <a href="https://go.microsoft.com/fwlink/?linkid=836911" data-raw-source="[Azure CLI](https://go.microsoft.com/fwlink/?linkid=836911)">Azure CLI</a>.

To  view the template parameters in a grid, click on <strong>...</strong> next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to <a href="/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests" data-raw-source="[this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests)">this</a> to enable CORS.</td></tr>
<tr><td>Template parameters link</td><td>(Optional) Specify the URL of the parameters file. Example: <a href="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.parameters.json" data-raw-source="[https://raw.githubusercontent.com/Azure/...](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/101-vm-simple-windows/azuredeploy.parameters.json)">https://raw.githubusercontent.com/Azure/...</a> 

To use a file stored in a private storage account, retrieve and include the shared access signature (SAS) token in the URL of the template. Example: <code>&lt;blob_storage_url&gt;/template.json?&lt;SAStoken&gt;</code> To upload a parameters file to a storage account and generate a SAS token, you could use <a href="https://aka.ms/azurefilecopyreadme" data-raw-source="[Azure file copy](https://aka.ms/azurefilecopyreadme)">Azure file copy</a> task or follow the steps using <a href="https://go.microsoft.com/fwlink/?linkid=838080" data-raw-source="[PowerShell](https://go.microsoft.com/fwlink/?linkid=838080)">PowerShell</a> or <a href="https://go.microsoft.com/fwlink/?linkid=836911" data-raw-source="[Azure CLI](https://go.microsoft.com/fwlink/?linkid=836911)">Azure CLI</a>.

To  view the template parameters in a grid, click on <strong>...</strong> next to Override template parameters text box. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to <a href="/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests" data-raw-source="[this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests)">this</a> to enable CORS.</td></tr>
<tr><td>Template</td><td>(Required) Specify the path or a pattern pointing to the Azure Resource Manager template. For more information about the templates see <a href="https://aka.ms/azuretemplates" data-raw-source="https://aka.ms/azuretemplates">https://aka.ms/azuretemplates</a>. To get started immediately use template <a href="https://aka.ms/sampletemplate" data-raw-source="https://aka.ms/sampletemplate">https://aka.ms/sampletemplate</a>.</td></tr>
<tr><td>Template parameters</td><td>(Optional) Specify the path or a pattern pointing for the parameters file for the Azure Resource Manager template.</td></tr>
<tr><td>Override template parameters</td><td>(Optional) To view the template parameters in a grid, click on “…” next to Override Parameters textbox. This feature requires that CORS rules are enabled at the source. If templates are in Azure storage blob, refer to <a href="/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests" data-raw-source="[this](/rest/api/storageservices/fileservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?redirectedfrom=MSDN#understanding-cors-requests)">this</a> to enable CORS. Or type the template parameters to override in the textbox. Example, <br>–storageName fabrikam –adminUsername $(vmusername) -adminPassword $(password) –azureKeyVaultName $(fabrikamFibre).<br>If the parameter value you&#39;re using has multiple words, enclose them in quotes, even if you&#39;re passing them using variables. For example, -name &quot;parameter value&quot; -name2 &quot;$(var)&quot;<br>To override object type parameters use stringified JSON objects. For example, -options [&quot;option1&quot;] -map {&quot;key1&quot;: &quot;value1&quot; }. </td></tr>
<tr><td>Deployment mode</td><td>(Required) Incremental mode handles deployments as incremental updates to the resource group . It leaves unchanged resources that exist in the resource group but are not specified in the template.

 Complete mode deletes resources that are not in your template.

 Validate mode enables you to find problems with the template before creating actual resources.

 By default, Incremental mode is used.</td></tr>
<tr><td>Enable prerequisites</td><td>(Optional) These options would be applicable only when the Resource group contains virtual machines. <br><br>Choosing Deployment Group option would configure Deployment Group agent on each of the virtual machines. <br><br>Selecting WinRM option configures Windows Remote Management (WinRM) listener over HTTPS protocol on port 5986, using a self-signed certificate. This configuration is required for performing deployment operation on Azure machines. If the target Virtual Machines are backed by a Load balancer, ensure Inbound NAT rules are configured for target port (5986).</td></tr>
<tr><td>Azure Pipelines/TFS endpoint</td><td>(Required) Agent registration with a deployment group requires access to your Visual Studio project.? <br><br>Click &quot;Add&quot; to create a service connection using a personal access token (PAT) with scope restricted to &quot;Deployment Group&quot; and a default expiration time of 90 days. <br><br>?Click &quot;Manage&quot; to update service connection details.?</td></tr>
<tr><td>Project</td><td>(Required) Specify the project which has the Deployment Group defined in it?</td></tr>
<tr><td>Deployment Group</td><td>(Required) Specify the Deployment Group against which the Agent(s) will be registered. For more guidance, refer to <a href="https://aka.ms/832442" data-raw-source="[Deployment Groups](https://aka.ms/832442)">Deployment Groups</a></td></tr>
<tr><td>Copy Azure VM tags to agents</td><td>(Optional) Choose if the tags configured on the Azure VM need to be copied to the corresponding Deployment Group agent. <br><br>By default all Azure tags will be copied following the format “Key: Value”. Example: An Azure Tag &quot;Role : Web&quot; would be copied  as-is to the Agent machine. <br><br>For more information on how tag Azure resources refer to <a href="/azure/azure-resource-manager/resource-group-using-tags?" data-raw-source="[link](/azure/azure-resource-manager/resource-group-using-tags?)">link</a></td></tr>
<tr><td>VM details for WinRM</td><td>(Optional) Provide a name for the variable for the resource group. The variable can be used as $(variableName) to refer to the resource group in subsequent tasks like in the PowerShell on Target Machines task for deploying applications. <br>Valid only when the selected action is Create, Update or Select, and required when an existing resource group is selected.</td></tr>
<tr><td>Deployment outputs</td><td>(Optional) Provide a name for the variable for the output variable which will contain the outputs section of the current deployment object in string format. You can use the “ConvertFrom-Json” PowerShell cmdlet to parse the JSON object and access the individual output values.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
