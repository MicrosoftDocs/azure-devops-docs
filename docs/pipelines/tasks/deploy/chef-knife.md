---
title: Chef Knife task
description: Run scripts with Knife commands on your Chef workstation
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C7B7CCF9-D6E0-472B-97BB-06B6E43504F3
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Chef Knife task

**Azure Pipelines**

Use this task in a build or release pipeline to run scripts with Knife commands on your Chef workstation.

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

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
