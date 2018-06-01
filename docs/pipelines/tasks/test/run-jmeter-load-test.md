---
title: Cloud-based Apache JMeter Load Test
description: Runs the Apache JMeter load test in cloud
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: F20661EB-E0F7-4AFD-9A86-9FE9D1A93382
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Test: Cloud-based Apache JMeter Load Test

![](_img/apachejmeterloadtest.png) Runs the Apache JMeter load test in cloud

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/RunJMeterLoadTestV1.1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>VS Team Services Connection</td><td>(Optional) Select a previously registered service connection to talk to the cloud-based load test service. Choose 'Manage' to register a new connection.</td></tr>
<tr><td>Apache JMeter test files folder</td><td>(Required) Relative path from repo root where the load test files are available.</td></tr>
<tr><td>Apache JMeter file</td><td>(Required) The Apache JMeter test filename to be used under the load test folder specified above.</td></tr>
<tr><td>Agent Count</td><td>(Required) Number of test agents (dual-core) used in the run.</td></tr>
<tr><td>Run Duration (sec)</td><td>(Required) Load test run duration in seconds.</td></tr>
<tr><td>Run load test using</td><td>(Optional) undefined</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
