---
title: Azure PowerShell task
description: Run a PowerShell script within an Azure environment
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 72A1931B-EFFB-4D2E-8FD8-F8472A07CB62
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure PowerShell task

**Azure Pipelines**

Use this task in a build or release pipeline to run a PowerShell script within an Azure environment. The Azure context is authenticated with the provided Azure Resource Manager service connection.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzurePowerShellV4.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>azureSubscription</td><td>(Required) name of an Azure Resource Manager service connection for authentication.</td></tr>
<tr><td>scriptType</td><td>(Optional) Type of the script: filePath or inlineScript</td></tr>
<tr><td>scriptPath</td><td>(Optional) Path of the script. Should be fully qualified path or relative to the default working directory.</td></tr>
<tr><td>inline</td><td>(Optional) Enter the script to execute.</td></tr>
<tr><td>scriptArguments</td><td>(Optional) Additional parameters to pass to PowerShell.  Can be either ordinal or named parameters. Not applicable for inline script option.</td></tr>
<tr><td>errorActionPreference</td><td>(Optional) Select the value of the ErrorActionPreference variable for executing the script.</td></tr>
<tr><td>failOnStandardError</td><td>(Optional) If this is true, this task will fail if any errors are written to the error pipeline, or if any data is written to the Standard Error stream.</td></tr>
<tr><td>azurePowerShellVersion</td><td>(Required) In case of Microsoft-hosted agents, the supported Azure PowerShell version.
To pick the latest version available on the agent, select "Latest installed version".

For self-hosted agents you can specify preferred version of Azure PowerShell using "Specify version"</td></tr>
<tr><td>preferredAzurePowerShellVersion</td><td>(Required when azurePowerShellVersion is otherVersion) Preferred Azure PowerShell Version needs to be a proper semantic version eg. 1.2.3. Regex like 2.\*,2.3.\* is not supported.</td></tr>

<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Samples

[!INCLUDE [temp](../includes/yaml/AzurePowerShellV4Sample.md)]

## Troubleshooting
### Script worked locally, but failed in the pipeline

This typically occurs when the service connection used in the pipeline has insufficient permissions to run the script. Locally, the script runs with your credentials and would succeed as you may have the required access.

To resolve this issue, ensure the service principle/ authentication credentials have the required permissions. For more details, see 
   [Use Role-Based Access Control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).

### Error: Could not find the modules: '<module name>' with Version: '<version>'. If the module was recently installed, retry after restarting the Azure Pipelines task agent

Azure PowerShell task uses Azure/AzureRM/Az PowerShell Module to interact with Azure Subscription. This issue occurs when the PowerShell module is not available on the Hosted Agent. Hence, for a particular task version, *Preferred Azure PowerShell version* must be specified in the **Azure PowerShell version options** from the following available list of versions. 

<table><thead><tr><th>Task Version</th><th>Available versions of PowerShell Modules</th></tr></thead>
<tr><td>2.* </td><td>Choose one from any of the 2 lists:<br>Azure: 2.1.0, 3.8.0, 4.2.1, 5.1.1<br>AzureRM: 2.1.0, 3.8.0, 4.2.1, 5.1.1, 6.7.0</td></tr>
<tr><td>3.* </td><td>Choose one from any of the 2 lists:<br>Azure: 2.1.0, 3.8.0, 4.2.1, 5.1.1<br>AzureRM: 2.1.0, 3.8.0, 4.2.1, 5.1.1, 6.7.0</td></tr>
<tr><td>4.*</td><td>Az Module: 1.0.0, 1.6.0, 2.3.2, 2.6.0, 3.1.0</td></tr>
<tr><td>5.* (preview)</td><td>Az Module: 1.0.0, 1.6.0, 2.3.2, 2.6.0, 3.1.0</td></tr>
</table>

### Service Connection Issues
To troubleshoot issues related to service connections, see [Service Connection troubleshooting](/azure/devops/pipelines/release/azure-rm-endpoint?view=azure-devops)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
