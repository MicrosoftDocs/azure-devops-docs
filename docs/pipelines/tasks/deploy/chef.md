---
title: Chef
titleSuffix: Azure Pipelines & TFS
description: Deploy to Chef environments by editing environment attributes
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B719DB6C-40A2-4F43-9AFF-827825BAECAE
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Deploy: Chef

![](_img/chef.png) Deploy to Chef environments by editing environment attributes

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ChefV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Chef Connection</td><td>(Required) Name of the Chef subscription</td></tr>
<tr><td>Environment</td><td>(Required) Name of the Chef Environment to be used for Deployment. The attributes of that environment will be edited.</td></tr>
<tr><td>Environment Attributes</td><td>(Required) Specify the value of the leaf node attribute(s) to be updated. Example. { "default_attributes.connectionString" : "$(connectionString)", "override_attributes.buildLocation" : "https://sample.blob.core.windows.net/build" }. Task fails if the leaf node does not exist.</td></tr>
<tr><td>Wait Time</td><td>(Required) The amount of time (in minutes) to wait for this task to complete. Default value: 30 minutes</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
