---
title: Cloud-based Apache JMeter Load Test task
description: Runs the Apache JMeter load test in cloud
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: F20661EB-E0F7-4AFD-9A86-9FE9D1A93382
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Cloud-based Apache JMeter Load Test task

**Azure Pipelines**

[!INCLUDE [loadtest-deprecated-include](../../../test/_shared/loadtest-deprecated-include.md)]

Use this task in a build or release pipeline to run Apache JMeter load tests in the cloud.

## Demands

The agent must have the following capability:

* Azure PowerShell

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/RunJMeterLoadTestV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Pipelines Connection</td><td>(Optional) Select a previously registered service connection to talk to the cloud-based load test service. Choose 'Manage' to register a new connection.</td></tr>
<tr><td>Apache JMeter test files folder</td><td>(Required) Relative path from repo root where the load test files are available.</td></tr>
<tr><td>Apache JMeter file</td><td>(Required) The Apache JMeter test filename to be used under the load test folder specified above.</td></tr>
<tr><td>Agent Count</td><td>(Required) Number of test agents (dual-core) used in the run.</td></tr>
<tr><td>Run Duration (sec)</td><td>(Required) Load test run duration in seconds.</td></tr>
<tr><td>Run load test using</td><td>(Optional) undefined</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
