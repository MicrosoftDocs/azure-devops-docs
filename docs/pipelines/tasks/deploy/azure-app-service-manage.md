---
title: Azure App Service Manage task
description: Start, Stop, Restart, Slot swap, Install site extensions, or Enable Continuous Monitoring for an Azure App Service
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: f045e430-8704-11e6-968f-e717e6411619
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure App Service Manage task

**Azure Pipelines**

Use this task in a build or release pipeline to start, stop, restart, slot swap, install site extensions, or enable continuous monitoring for an Azure App Service.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureAppServiceManageV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription</td></tr>
<tr><td>Action</td><td>(Optional) Action to be performed on the App Service. You can Start, Stop, Restart, Slot swap, Install site extensions or enable Continuous Monitoring for an Azure App Service</td></tr>
<tr><td>App Service name</td><td>(Required) Enter or select the name of an existing Azure App Service</td></tr>
<tr><td>Specify Slot or App Service Environment</td><td>(Optional) undefined</td></tr>
<tr><td>Resource group</td><td>(Required) Enter or Select the Azure Resource Group that contains the Azure App Service specified above</td></tr>
<tr><td>Source Slot</td><td>(Required) The swap action directs destination slot's traffic to the source slot</td></tr>
<tr><td>Swap with Production</td><td>(Optional) Select the option to swap the traffic of source slot with production. If this option is not selected, then you will have to provide source and target slot names.</td></tr>
<tr><td>Target Slot</td><td>(Required) The swap action directs destination slot's traffic to the source slot</td></tr>
<tr><td>Preserve Vnet</td><td>(Optional) Preserve the Virtual network settings</td></tr>
<tr><td>Slot</td><td>(Required) undefined</td></tr>
<tr><td>Install Extensions</td><td>(Required) Site Extensions run on Microsoft Azure App Service. You can install set of tools as site extension and better manage your Azure App Service. The  App Service will be restarted to make sure latest changes take effect.</td></tr>
<tr><td>Output variable</td><td>(Optional) Provide the variable name for the local installation path for the selected extension.<br/>This field is now deprecated and would be removed. Use LocalPathsForInstalledExtensions variable from Output Variables section in subsequent tasks.</td></tr>
<tr><td>Resource Group name for Application Insights</td><td>(Required) Enter or Select resource group where your application insights resource is available</td></tr>
<tr><td>Application Insights resource name</td><td>(Required) Select Application Insights resource where continuous monitoring data will be recorded. <br/>If your application insights resource is not listed here and you want to create a new resource, click on [+New] button. Once the resource is created on Azure Portal, come back here and click on refresh button.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
