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
monikerRange: 'VSTS'
---

# Test: Cloud-based Apache JMeter Load Test

![](_img/apachejmeterloadtest.png) Runs the Apache JMeter load test in cloud

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

::: moniker range="vsts"

## YAML snippet

```YAML
# Cloud-based Apache JMeter Load Test
# Runs the Apache JMeter load test in cloud
- task: ApacheJMeterLoadTest@1
  inputs:
    #connectedServiceName: # Optional
    testDrop: 
    #loadTest: 'jmeter.jmx' 
    #agentCount: '1' # Options: 1, 2, 3, 4, 5
    #runDuration: '60' # Options: 60, 120, 180, 240, 300
    #machineType: '0' # Optional. Options: 0, 2
```

::: moniker-end

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
