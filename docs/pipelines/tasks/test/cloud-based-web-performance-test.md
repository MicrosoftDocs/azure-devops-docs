---
title: Azure Pipelines and TFS Build and Test - Cloud-based Web Performance Test
titleSuffix: Azure Pipelines & TFS
description: Runs the Quick Web Performance Test with a build or release pipeline to easily verify your web application exists and is responsive
ms.assetid: 8030BD4C-F119-4A0F-9ED5-B021C4E760CD
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Test: Cloud-based Web Performance Test

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

![icon](_img/web-based-perf-icon.png)
Runs the Quick Web Performance Test with Azure Pipelines.

The task can be used in a build or release 
pipeline to generate load against an application URL
using the Azure Pipelines Cloud-based Load Test Service.
The Cloud-based Load Test Service is based in
Microsoft Azure and can be used to test your app's 
performance by generating load on it, and verify it
exists and is responsive.

## Demands

The agent must have the following capability:

* Azure PowerShell

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/QuickPerfTestV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Azure Pipelines connection** | The name of a Generic service connection that references the Azure DevOps organization you will be running the load test from and publishing the results to.<br />- Required for builds and releases on TFS and must specify a connection to the Azure DevOps organization where the load test will run.<br />- Optional for builds and releases on Azure Pipelines. In this case, if not provided, the current Azure Pipelines connection is used.<br />- See [Generic service connection](../../library/service-endpoints.md). |
| **Website Url** | Required. The URL of the app to test. |
| **Test Name** | Required. A name for this load test, used to identify it for reporting and for comparison with other test runs. |
| **User Load** | Required. The number of concurrent users to simulate in this test. Select a value from the drop-down list. |
| **Run Duration (sec)** | Required. The duration of this test in seconds. Select a value from the drop-down list. |
| **Load Location** | The location from which the load will be generated. Select a global Azure location, or **Default** to generate the load from the location associated with your Azure DevOps organization. |
| **Run load test using** | Select **Automatically provisioned agents** if you want the cloud-based load testing service to automatically provision agents for running the load tests. The application URL must be accessible from the Internet.<br />Select **Self-provisioned agents** if you want to test apps behind the firewall. You must provision agents and register them against your Azure DevOps organization when using this option. See [Testing private/intranet applications using Cloud-based load testing](https://blogs.msdn.microsoft.com/visualstudioalm/2016/08/23/testing-privateintranet-applications-using-cloud-based-load-testing/). |
| **Fail test if Avg. Response Time (ms) exceeds** | Specify a threshold for the average response time in milliseconds. If the observed response time during the load test exceeds this threshold, the task will fail. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## More Information

* [Cloud-based Load Testing](https://visualstudio.microsoft.com/features/vso-cloud-load-testing-vs)
* [Performance testing video and Q&A](../../../test/load-test/reference-qa.md)

## Related tasks

* [Cloud-based Load Test](cloud-based-load-test.md)  
* [Cloud-based Apache JMeter Load Test](run-jmeter-load-test.md)  

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
