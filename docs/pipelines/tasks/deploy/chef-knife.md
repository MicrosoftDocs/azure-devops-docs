---
title: Chef Knife
titleSuffix: Azure Pipelines & TFS
description: Run Scripts with knife commands on your chef workstation
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C7B7CCF9-D6E0-472B-97BB-06B6E43504F3
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Deploy: Chef Knife

![](_img/chefknife.png) Run Scripts with knife commands on your chef workstation

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ChefKnifeV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Chef Subscription</td><td>(Required) Chef subscription to configure before running knife commands</td></tr>
<tr><td>Script Path</td><td>(Required) Path of the script. Should be fully qualified path or relative to the default working directory.</td></tr>
<tr><td>Script Arguments</td><td>(Optional) Additional parameters to pass to Script.  Can be either ordinal or named parameters.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
