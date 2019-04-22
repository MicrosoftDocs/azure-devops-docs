---
title: Azure Network Load Balancer task
description: Connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: e94f1750-a6a8-11e6-be69-bdf37a7b15d8
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Network Load Balancer task

**Azure Pipelines**

Use this task in a build or release pipeline to connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureNLBManagementV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Subscription</td><td>(Required) Select the Azure Resource Manager subscription for the deployment.</td></tr>
<tr><td>Resource Group</td><td>(Required) Select the resource group name.</td></tr>
<tr><td>Load Balancer Name</td><td>(Required) Select or enter the load balancer.</td></tr>
<tr><td>Action</td><td>(Required) Disconnect:  Removes the virtual machine’s primary network interface from the load balancer’s backend pool. So that it stops receiving network traffic.

Connect: Adds the virtual machine’s primary network interface to load balancer backend pool. So that it starts receiving network traffic based on the load balancing rules for the load balancer resource.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
