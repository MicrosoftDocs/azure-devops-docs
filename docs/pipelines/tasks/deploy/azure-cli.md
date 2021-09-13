---
title: Azure CLI task
description: Azure Pipelines and Team Foundation Server build task to run a shell or batch script containing Microsoft Azure CLI commands
ms.assetid: C6F8437B-FF52-4EA1-BCB0-F34924303CA8
ms.topic: reference
ms.custom: seodec18, devx-track-azurecli
ms.author: ushan
author: N-Usha
ms.date: 08/12/2021
monikerRange: '> tfs-2018'
---

# Azure CLI task

**Azure Pipelines**

Use this task to run a shell or batch 
script containing Azure CLI commands against an Azure subscription.

This task is used to run Azure CLI commands on 
cross-platform agents running on Linux, macOS, or Windows operating systems.


### What's new in Version 2.0

- Supports running PowerShell and PowerShell Core script
- PowerShell Core script works with Xplat agents (Windows, Linux or OSX), make sure the agent has PowerShell version 6 or higher
- PowerShell script works only with Windows agent, make sure the agent has PowerShell version 5 or lower

## Prerequisites

- A Microsoft Azure subscription

- [Azure Resource Manager service connection](../../library/connect-to-azure.md) to your Azure account

- Microsoft hosted agents have Azure CLI pre-installed. However if you are using private agents, [install Azure CLI](/cli/azure/install-azure-cli) on the computer(s) that run the build and release agent. 
  If an agent is already running on the machine on which the Azure CLI is installed, restart the agent to ensure all the relevant stage variables are updated.
  
## Task Inputs

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
<tr>
    <td><code>azureSubscription</code><br/>Azure subscription</td>
    <td>(Required) Name of an Azure Resource Manager service connection for authentication.</td>
</tr>
<tr>
    <td><code>scriptType</code><br/>Script Type</td>
  <td>(Required) Type of script: </br>If you are using a <b>Linux agent</b>, select one of the following types:</br>
     <ul>
       <li><code>bash</code></li>
       <li><code>pscore</code></li>
    </ul>
    If you are using a <b>Windows agent</b>, select one of the following types:</br>
    <ul>
      <li><code>batch</code></li>
      <li><code>ps</code></li>
      <li><code>pscore</code></li>
    </ul></br><i>* PowerShell Core scripts can run on cross-platform agents (Linux, macOS, or Windows).</i>
   </td>
</tr>
<tr>
    <td><code>scriptLocation</code><br/>Script Location</td>
    <td>(Required) select <code>scriptPath</code> to use a script file or <code>inlineScript</code> if you want to write your script inline <br/>Default value: scriptPath</td>
</tr>
<tr>
    <td><code>scriptPath</code><br/>Script Path</td>
    <td>Required when <code>scriptLocation = scriptPath</code>. Fully qualified path of your script file or a path relative to the default working directory</td>
</tr>
<tr>
    <td><code>inlineScript</code><br/>Inline Script</td>
    <td>Required when <code>scriptLocation = inlineScript</code>. Use this option if you want to paste your scripts inline. Use PowerShell, PowerShell Core, or batch scripting for Windows agents and bash or PowerShell core when using Linux-based agents. Use the <code>call</code> prefix before every Azure command when you are using batch. You can also pass predefined and custom variables to your script using arguments. <br/><b>Examples:</b>
<br/>PowerShell/PowerShellCore/shell: az --version az account show <br/>batch: call az --version call az account show</td>
</tr>
<tr>
    <td><code>arguments</code><br/>Script Arguments</td>
    <td>(Optional) Arguments passed to your script</td>
</tr>
<tr>
    <td><code>powerShellErrorActionPreference</code><br/>ErrorActionPreference</td>
    <td>(Optional) Prepends the line <b>$ErrorActionPreference = 'VALUE'</b> at the top of your PowerShell/PowerShell Core script<br/>Default value: stop<br/>Options are stop, continue, and silentlyContinue</td>
</tr>
<tr>
    <td><code>addSpnToEnvironment</code><br/>Access service principal details in script</td>
    <td>(Optional) Adds service principal id and key of the Azure endpoint you chose to the script's execution environment. You can use these variables: <b>$env:servicePrincipalId, $env:servicePrincipalKey and $env:tenantId</b> in your script. This is honored only when the Azure endpoint has Service Principal authentication scheme<br/>Default value: false</td>
</tr>
<tr>
    <td><code>useGlobalConfig</code><br/>Use global Azure CLI configuration</td>
    <td>(Optional) If this is false, this task will use its own separate <a href= "/cli/azure/azure-cli-configuration?preserve-view=true&view=azure-cli-latest#cli-configuration-file">Azure CLI configuration directory</a>. This can be used to run Azure CLI tasks in <b>parallel</b> releases" <br/>Default value: false</td>
</tr>
<tr>
    <td><code>workingDirectory</code><br/>Working Directory</td>
    <td>(Optional) Current working directory where the script is run.  Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)</td>
</tr>
<tr>
    <td><code>failOnStandardError</code><br/>Fail on Standard Error</td>
    <td>(Optional) If this is true, this task will fail when any errors are written to the StandardError stream. Unselect the checkbox to ignore standard errors and rely on exit codes to determine the status<br/>Default value: false</td>
</tr>
<tr>
    <td><code>powerShellIgnoreLASTEXITCODE</code><br/>Ignore $LASTEXITCODE</td>
    <td>(Optional) If this is false, the line <code>if ((Test-Path -LiteralPath variable:\\LASTEXITCODE)) { exit $LASTEXITCODE }</code> is appended to the end of your script. This will cause the last exit code from an external command to be propagated as the exit code of PowerShell. Otherwise the line is not appended to the end of your script<br/>Default value: false</td>
</tr>
</table>

::: moniker range="> tfs-2018"

## Example

Following is an example of a YAML snippet that lists the version of Azure CLI and gets the details of the subscription.

```yaml
- task: AzureCLI@2
  displayName: Azure CLI
  inputs:
    azureSubscription: <Name of the Azure Resource Manager service connection>
    scriptType: ps
    scriptLocation: inlineScript
    inlineScript: |
      az --version
      az account show
```

The following example illustrates how to pass arguments to your script.

```yaml
- task: AzureCLI@2
  displayName: Azure CLI
  inputs:
    azureSubscription: <Name of the Azure Resource Manager service connection>
    scriptType: ps
    scriptLocation: inlineScript
    arguments:
      -Arg1 val1 `
      -Arg2 val2 `
      -Arg3 val3
    inlineScript: |
      az login --allow-no-subscription
```

::: moniker-end

## Related tasks

- [Azure Resource Group Deployment](azure-resource-group-deployment.md)
- [Azure Cloud Service Deployment](azure-cloud-powershell-deployment.md)
- [Azure Web App Deployment](azure-rm-web-app-deployment.md)

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

<!-- ENDSECTION -->
