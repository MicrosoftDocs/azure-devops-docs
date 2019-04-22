---
title: Azure Monitor Alerts task
description: Configure alerts on available metrics for an Azure resource
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1d876d40-9aa7-11e7-905d-f541cc882994
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Monitor Alerts task

**Azure Pipelines**

Use this task in a build or release pipeline to configure alerts on available metrics for an Azure resource.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureMonitorAlertsV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Subscription</td><td>(Required) Select the Azure Resource Manager subscription.

Note: To configure new service connection, select the Azure subscription from the list and click 'Authorize'.

If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button.</td></tr>
<tr><td>Resource Group</td><td>(Required) Select the Azure Resource Group that contains the Azure resource where you want to configure an alert.</td></tr>
<tr><td>Resource Type</td><td>(Required) Select the Azure resource type.</td></tr>
<tr><td>Resource name</td><td>(Required) Select name of Azure resource where you want to configure an alert.</td></tr>
<tr><td>Alert rules</td><td>(Required) List of Azure monitor alerts configured on selected Azure resource.

To add or modify alerts, click on […] button.</td></tr>
<tr><td>Subscription owners, contributors and readers</td><td>(Optional) Send email notification to everyone who has access to this resource group.</td></tr>
<tr><td>Additional administrator emails</td><td>(Optional) Add additional email addresses separated by semicolons(;) if you want to send email notification to additional people (whether or not you checked the "subscription owners..." box).</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
