---
title: Azure PowerShell task
description: Run a PowerShell script within an Azure environment
ms.topic: reference
ms.assetid: 72A1931B-EFFB-4D2E-8FD8-F8472A07CB62
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/22/2020
monikerRange: 'azure-devops'
---

# Azure PowerShell task

**Azure Pipelines**

Use this task to run a PowerShell script within an Azure environment. The Azure context is authenticated with the provided Azure Resource Manager service connection.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzurePowerShellV5.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceNameARM`<br/>Azure Subscription|(Required) name of an Azure Resource Manager service connection for authentication. <br/>Argument alias: `azureSubscription`|
|`ScriptType`<br/>Script Type|(Optional) Type of the script: filePath or inlineScript <br/>Default value: `FilePath`|
|`ScriptPath`<br/>Script Path|(Optional) Path of the script. Should be fully qualified path or relative to the default working directory.|
|`Inline`<br/>Inline Script|(Optional) Enter the script to execute. <br/>Default value: <br/># You can write your Azure PowerShell scripts inline here.|
|`ScriptArguments`<br/>Script Arguments|(Optional) Additional parameters to pass to PowerShell.  Can be either ordinal or named parameters. Not applicable for inline script option.|
|`errorActionPreference`<br/>ErrorActionPreference|(Optional) Select the value of the ErrorActionPreference variable for executing the script. <br/>Default value: `stop`|
|`FailOnStandardError`<br/>Fail on Standard Error|(Optional) If this is true, this task will fail if any errors are written to the error pipeline, or if any data is written to the Standard Error stream. <br/>Default value: `false`|
|`TargetAzurePs`<br/>Azure PowerShell Version|(Required) In case of Microsoft-hosted agents, the supported Azure PowerShell version. To pick the latest version available on the agent, select `latestVersion` <br/>For self-hosted agents, you can specify preferred version of Azure PowerShell using "Specify version" <br/>Default value: `OtherVersion` <br/>Argument alias: `azurePowerShellVersion`|
|`CustomTargetAzurePs`<br/>preferredAzurePowerShellVersion|(Required when TargetAzurePs = OtherVersion) <br/>Preferred Azure PowerShell Version needs to be a proper semantic version. For example, 1.2.3. Regex like 2.\*,2.3.\* is not supported. <br/>Argument alias: `preferredAzurePowerShellVersion`|
|`pwsh`<br />Use PowerShell Core|(Optional) If this is true, on Windows, the task will use pwsh.exe from your PATH instead of powershell.exe.|
|`workingDirectory`<br />Working Directory|(Optional) Working directory where the script is run.|

## Samples

[!INCLUDE [temp](../includes/yaml/AzurePowerShellV5Sample.md)]

## Troubleshooting
### Script worked locally, but failed in the pipeline

This typically occurs when the service connection used in the pipeline has insufficient permissions to run the script. Locally, the script runs with your credentials and would succeed as you may have the required access.

To resolve this issue, ensure the service principle/ authentication credentials have the required permissions. For more information, see 
   [Use Role-Based Access Control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).

### Error: Could not find the modules: '\<module name\>' with Version: '\<version\>'. If the module was recently installed, retry after restarting the Azure Pipelines task agent

Azure PowerShell task uses Azure/AzureRM/Az PowerShell Module to interact with Azure Subscription. This issue occurs when the PowerShell module is not available on the Hosted Agent. Hence, for a particular task version, *Preferred Azure PowerShell version* must be specified in the **Azure PowerShell version options** from the list of available versions. The installed software can be found in the [Software](../../agents/hosted.md#software) table in [Microsoft-hosted agents](../../agents/hosted.md).

### Service Connection Issues
To troubleshoot issues related to service connections, see [Service Connection troubleshooting](../../release/azure-rm-endpoint.md).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
