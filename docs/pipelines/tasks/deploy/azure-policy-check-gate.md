---
title: Azure Policy Check Gate task
description: Security and compliance assessment with Azure policies on resources that belong to the resource group and Azure subscription.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8BA74703-E94F-4A35-814E-FC21F44578A2
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Policy Check Gate task

**Azure Pipelines**

Security and compliance assessment with Azure policies on resources that belong to the resource group and Azure subscription.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AzurePolicyV0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription to enforce the policies.</td></tr>
<tr><td>Resource group</td><td>(Required) Provide name of a resource group.</td></tr>
<tr><td>Resource name</td><td>(Optional) Select name of Azure resources for which you want to check the policy compliance.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
