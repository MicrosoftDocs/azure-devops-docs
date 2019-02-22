---
title: Azure PowerShell task
description: Run a PowerShell script within an Azure environment
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 72A1931B-EFFB-4D2E-8FD8-F8472A07CB62
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure PowerShell task

**Azure Pipelines**

Use this task in a build or release pipeline to run a PowerShell script within an Azure environment.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzurePowerShellV4.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Connection Type</td><td>(Optional) </td></tr>
<tr><td>Azure Classic Subscription</td><td>(Required) Azure Classic subscription to configure before running PowerShell</td></tr>
<tr><td>Azure Subscription</td><td>(Required) Azure Resource Manager subscription to configure before running PowerShell</td></tr>
<tr><td>Script Type</td><td>(Optional) Type of the script: File Path or Inline Script</td></tr>
<tr><td>Script Path</td><td>(Optional) Path of the script. Should be fully qualified path or relative to the default working directory.</td></tr>
<tr><td>Inline Script</td><td>(Optional) Enter the script to execute.</td></tr>
<tr><td>Script Arguments</td><td>(Optional) Additional parameters to pass to PowerShell.  Can be either ordinal or named parameters.</td></tr>
<tr><td>ErrorActionPreference</td><td>(Optional) Select the value of the ErrorActionPreference variable for executing the script.</td></tr>
<tr><td>Fail on Standard Error</td><td>(Optional) If this is true, this task will fail if any errors are written to the error pipeline, or if any data is written to the Standard Error stream.</td></tr>
<tr><td>Azure PowerShell Version</td><td>(Optional) In case of Microsoft-hosted agents, the supported Azure PowerShell Versions are: 2.1.0, 3.8.0, 4.2.1 and 5.1.1 (Hosted VS2017 pool), 3.6.0 (Hosted pool).
To pick the latest version available on the agent, select "Latest installed version".

For self-hosted agents you can specify preferred version of Azure PowerShell using "Specify version"</td></tr>
<tr><td>Preferred Azure PowerShell Version</td><td>(Required) Preferred Azure PowerShell Version needs to be a proper semantic version eg. 1.2.3. Regex like 2.\*,2.3.\* is not supported. The Hosted VS2017 pool currently supports versions: 2.1.0, 3.8.0, 4.2.1, 5.1.1</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
