---
title: Chef task
description: Deploy to Chef environments by editing environment attributes
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B719DB6C-40A2-4F43-9AFF-827825BAECAE
ms.manager: dastahel
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Chef task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy to Chef environments by editing environment attributes.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/ChefV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Chef Connection</td><td>(Required) Name of the Chef subscription</td></tr>
<tr><td>Environment</td><td>(Required) Name of the Chef Environment to be used for Deployment. The attributes of that environment will be edited.</td></tr>
<tr><td>Environment Attributes</td><td>(Required) Specify the value of the leaf node attribute(s) to be updated. Example. { &quot;default_attributes.connectionString&quot; : &quot;$(connectionString)&quot;, &quot;override_attributes.buildLocation&quot; : &quot;<a href="https://sample.blob.core.windows.net/build" data-raw-source="https://sample.blob.core.windows.net/build">https://sample.blob.core.windows.net/build</a>&quot; }. Task fails if the leaf node does not exist.</td></tr>
<tr><td>Wait Time</td><td>(Required) The amount of time (in minutes) to wait for this task to complete. Default value: 30 minutes</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
