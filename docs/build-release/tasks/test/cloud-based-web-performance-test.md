---
title: VSTS and TFS Build and Test - Cloud-based Web Performance Test
description: Runs the Quick Web Performance Test with VSTS to easily verify your web application exists and is responsive
ms.assetid: 8030BD4C-F119-4A0F-9ED5-B021C4E760CD
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Test: Cloud-based Web Performance Test

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/web-based-perf-icon.png)
Runs the Quick Web Performance Test with VSTS.

The task can be used in a build or release 
definition to generate load against an application URL
using the VSTS Cloud-based Load Test Service.
The Cloud-based Load Test Service is based in
Microsoft Azure and can be used to test your app's 
performance by generating load on it, and verify it
exists and is responsive. 

## Demands

The build agent must have the following capabilities:

* MSBuild
* Azure PowerShell

## Arguments

| Argument | Description |
| -------- | ----------- |
| **VSTS connection** | The name of a Generic Service Endpoint that references the VSTS account you will be running the load test from and publishing the results to.<br />- Required for builds and releases on TFS and must specify a connection to the VSTS account where the load test will run.<br />- Optional for builds and releases on VSTS. In this case, if not provided, the current VSTS connection is used.<br />- See [Generic service endpoint](../../concepts/library/service-endpoints.md). |
| **Website Url** | Required. The URL of the app to test. |
| **Test Name** | Required. A name for this load test, used to identify it for reporting and for comparison with other test runs. |
| **User Load** | Required. The number of concurrent users to simulate in this test. Select a value from the drop-down list. |
| **Run Duration (sec)** | Required. The duration of this test in seconds. Select a value from the drop-down list. |
| **Load Location** | The location from which the load will be generated. Select a global Azure location, or **Default** to generate the load from the location associated with your VSTS account. |
| **Run load test using** | Select **Automatically provisioned agents** if you want the cloud-based load testing service to automatically provision agents for running the load tests. The application URL must be accessible from the Internet.<br />Select **Self-provisioned agents** if you want to test apps behind the firewall. You must provision agents and register them against your VSTS account when using this option. See [Testing private/intranet applications using Cloud-based load testing](https://blogs.msdn.microsoft.com/visualstudioalm/2016/08/23/testing-privateintranet-applications-using-cloud-based-load-testing/). |
| **Fail test if Avg. Response Time (ms) exceeds** | Specify a threshold for the average response time in milliseconds. If the observed response time during the load test exceeds this threshold, the task will fail. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: QuickPerfTest@1
  inputs:
    connectedServiceName:
    websiteUrl:
    testName:
#   vuLoad: 25 # 25 (default), 50, 100, 250
#   runDuration: 60 # 60 (default), 120, 180, 240, 300
#   geoLocation: Default # Default (default), East US, East US 2, Central US, West US, North Central US, South Central US, North Europe, West Europe, Southeast Asia, East Asia, Japan East, Japan West, Brazil South, Australia East, Australia Southeast
#   machineType: 0 # 0 (default), 2
#   avgResponseTimeThreshold: 0
```

::: moniker-end

## More Information

* [Cloud-based Load Testing](https://www.visualstudio.com/features/vso-cloud-load-testing-vs)
* [Performance testing video and Q&A](../../../load-test/reference-qa.md)

## Related tasks

* [Cloud-based Load Test](cloud-based-load-test.md)  
* [Cloud-based Apache JMeter Load Test](cloud-based-apache-jmeter-load-test.md)  

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
