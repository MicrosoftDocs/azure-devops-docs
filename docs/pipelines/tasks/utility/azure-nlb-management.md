---
title: Azure Network Load Balancer task
description: Connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool
ms.topic: reference
ms.assetid: e94f1750-a6a8-11e6-be69-bdf37a7b15d8
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/11/2020
monikerRange: 'azure-devops'
---

# Azure Network Load Balancer task

**Azure Pipelines**

Use this task to connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureNLBManagementV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure Subscription|(Required) Select the Azure Resource Manager subscription for the deployment <br/>Argument aliases: `azureSubscription`|
|`ResourceGroupName`<br/>Resource Group|(Required) Select the resource group name|
|`LoadBalancer`<br/>Load Balancer Name|(Required) Select or enter the load balancer|
|`Action`<br/>Action|(Required) <br/> **Disconnect**: Removes the virtual machine’s primary network interface from the load balancer’s backend pool. So that it stops receiving network traffic. <br/>**Connect**: Adds the virtual machine’s primary network interface to load balancer backend pool. So that it starts receiving network traffic based on the load balancing rules for the load balancer resource|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
