---
title: Chef Knife task
description: Run scripts with Knife commands on your Chef workstation
ms.topic: reference
ms.assetid: C7B7CCF9-D6E0-472B-97BB-06B6E43504F3
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Chef Knife task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task to run scripts with Knife commands on your Chef workstation.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/ChefKnifeV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Chef Subscription</td><td>(Required) Chef subscription to configure before running knife commands</td></tr>
<tr><td>Script Path</td><td>(Required) Path of the script. Should be fully qualified path or relative to the default working directory.</td></tr>
<tr><td>Script Arguments</td><td>(Optional) Additional parameters to pass to Script.  Can be either ordinal or named parameters.</td></tr>
</table>

### [Task control options](../../process/tasks.md#controloptions)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
