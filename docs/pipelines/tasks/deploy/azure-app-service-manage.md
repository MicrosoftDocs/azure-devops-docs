---
title: Azure App Service Manage task
description: Start, Stop, Restart, Slot swap, Swap with Preview, Install site extensions, or Enable Continuous Monitoring for an Azure App Service
ms.topic: reference
ms.assetid: f045e430-8704-11e6-968f-e717e6411619
ms.manager: dastahel
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/22/2020
monikerRange: 'azure-devops'
---

# Azure App Service Manage task

**Azure Pipelines**

Use this task to start, stop, restart, slot swap, Swap with Preview, install site extensions, or enable continuous monitoring for an Azure App Service.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureAppServiceManageV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure subscription|(Required) Select the Azure Resource Manager subscription <br/>Argument alias: `azureSubscription`|
|`Action`<br/>Action|(Optional) Action to be performed on the App Service. You can Start, Stop, Restart, Slot swap, Start Swap with Preview, Complete Swap with preview, Cancel Swap with preview, Install site extensions or enable Continuous Monitoring for an Azure App Service <br/>Default value: `Swap Slots`|
|`WebAppName`<br/>App Service name|(Required) Enter or select the name of an existing Azure App Service|
|`SpecifySlot`<br/>Specify Slot or App Service Environment|(Optional) undefined|
|`ResourceGroupName`<br/>Resource group|(Required) Enter or Select the Azure Resource Group that contains the Azure App Service specified above|
|`SourceSlot`<br/>Source Slot|(Required) Used as source slot when `action == Swap Slots`. The swap action directs destination slot's traffic to the source slot.|
|`SwapWithProduction`<br/>Swap with Production|(Optional) Select the option to swap the traffic of source slot with production. If this option is not selected, then you will have to provide source and target slot names. <br/>Default value: `true`|
|`TargetSlot`<br/>Target Slot|(Required) Used as destination slot when `action == Swap Slots`. The swap action directs destination slot's traffic to the source slot.|
|`PreserveVnet`<br/>Preserve Vnet|(Optional) The swap action would overwrite the destination slot's network configuration with the source <br/>Default value: `false`|
|`Slot`<br/>Slot|(Required) <br/>Default value: `production`|
|`ExtensionsList`<br/>Install Extensions|(Required) Site Extensions run on Microsoft Azure App Service. You can install set of tools as site extension and better manage your Azure App Service. The  App Service will be restarted to make sure latest changes take effect.|
|`OutputVariable`<br/>Output variable|(Optional) Provide the variable name for the local installation path for the selected extension.This field is now deprecated and would be removed. Use LocalPathsForInstalledExtensions variable from Output Variables section in subsequent tasks.|
|`AppInsightsResourceGroupName`<br/>Resource Group name for Application Insights|(Required) Enter or Select resource group where your application insights resource is available|
|`ApplicationInsightsResourceName`<br/>Application Insights resource name|(Required) Select Application Insights resource where continuous monitoring data will be recorded. If your application insights resource is not listed here and you want to create a new resource, click on [+New] button. Once the resource is created on Azure portal, come back here and click on refresh button.|
|`ApplicationInsightsWebTestName`<br/>Application Insights web test name| (Optional) Enter Application Insights Web Test name to be created or updated. If not provided, the default test name will be used.|

## What happens during a swap

When you swap two slots (usually from a staging slot into the production slot), make sure that the production slot is always the target slot. This way, the swap operation doesn't affect your production app.

Also at any point of the swap (or swap with preview) operation, all work of initializing the swapped apps happens on the source slot. The target slot remains online while the source slot is being prepared and warmed up, regardless of where the swap succeeds or fails. 
Please refer to [Set up staging environments in Azure App Service](/azure/app-service/deploy-staging-slots#AboutConfiguration) for more details.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
