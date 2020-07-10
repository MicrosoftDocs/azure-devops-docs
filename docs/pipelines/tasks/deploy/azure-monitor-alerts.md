---
title: Azure Monitor Alerts task
description: Configure alerts on available metrics for an Azure resource
ms.topic: reference
ms.assetid: 1d876d40-9aa7-11e7-905d-f541cc882994
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/22/2020
monikerRange: 'azure-devops'
---

# Azure Monitor Alerts task

**Azure Pipelines**

Use this task to configure alerts on available metrics for an Azure resource.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureMonitorAlertsV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure Subscription|(Required) Select the Azure Resource Manager subscription. <br/>**Note:** To configure new service connection, select the Azure subscription from the list and click `Authorize`. If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button. <br/>Argument alias: `azureSubscription`|
|`ResourceGroupName`<br/>Resource Group|(Required) Select the Azure Resource Group that contains the Azure resource where you want to configure an alert.|
|`ResourceType`<br/>Resource Type|(Required) Select the Azure resource type. <br/>Options: `Microsoft.Insights/components, Microsoft.Web/sites, Microsoft.Storage/storageAccounts, Microsoft.Compute/virtualMachines`<br/>Default value: `Microsoft.Insights/components`|
|`ResourceName`<br/>Resource name|(Required) Select name of Azure resource where you want to configure an alert.|
|`AlertRules`<br/>Alert rules|(Required) List of Azure monitor alerts configured on selected Azure resource. To add or modify alerts, click on […] button.|
|`NotifyServiceOwners`<br/>Subscription owners, contributors and readers|(Optional) Send email notification to everyone who has access to this resource group.|
|`NotifyEmails`<br/>Additional administrator emails|(Optional) Add additional email addresses separated by semicolons(;) if you want to send email notification to additional people (whether or not you checked the "subscription owners..." box).|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
