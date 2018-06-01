---
title: Azure Network Load Balancer
description: Connect/Disconnect an Azure virtual machine's network interface to a Load Balancer's backend address pool
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: e94f1750-a6a8-11e6-be69-bdf37a7b15d8
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Azure Network Load Balancer

![](_img/azurenlbmanagement.png) Connect/Disconnect an Azure virtual machine's network interface to a Load Balancer's backend address pool

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/AzureNLBManagementV1.1.md)]

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

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
