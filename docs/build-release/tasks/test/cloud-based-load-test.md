---
title: VSTS and TFS Build and Test - Cloud-based Load Test step
ms.assetid: 4D10E9D5-2269-4A95-8670-2901DFE4CBB1
description: Runs the load test in cloud with VSTS to integrate cloud-based load tests into your build and release pipelines
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Test: Cloud-based Load Test

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/cloud-based-load-test-icon.png)
Runs a load test in the cloud with VSTS.

Use this task to understand, test, and validate your app's 
performance. The task can be used in a build or release 
definition to trigger a load test by using the 
VSTS Cloud-based Load Test Service.
The Cloud-based Load Test Service is based in
Microsoft Azure and can be used to test your app's 
performance by generating load on it. 

## Demands

The build agent must have the following capabilities:

* MSBuild
* Azure PowerShell

## Arguments

| Argument | Description |
| -------- | ----------- |
| **VSTS connection** | The name of a Generic Service Endpoint that references the VSTS account you will be running the load test from and publishing the results to.<br />- Required for builds and releases on TFS and must specify a connection to the VSTS account where the load test will run.<br />- Optional for builds and releases on VSTS. In this case, if not provided, the current VSTS connection is used.<br />- See [Generic service endpoint](../../concepts/library/service-endpoints.md). |
| **Test settings file** | Required. The path relative to the repository root of the test settings file that specifies the files and data required for the load test such as the test settings, any deployment items, and setup/clean-up scripts. The task will search this path and any subfolders. |
| **Load test files folder** | Required. The path of the load test project. The task looks here for the files required for the load test, such as the load test file, any deployment items, and setup/clean-up scripts. The task will search this path and any subfolders. |
| **Load test file** | Required. The name of the load test file (such as **myfile.loadtest**) to be executed as part of this task. This allows you to have more than one load test file and choose the one to execute based on the deployment environment or other factors. |
| **Number of permissible threshold violations** | Optional. The number of critical violations that must occur for the load test to be deemed unsuccessful, aborted, and marked as failed. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

## Examples

* [Load test your app in the cloud](../../../load-test/index.md)
* [Scheduling Load Test Execution](http://blogs.msdn.com/b/visualstudioalm/archive/2015/11/23/scheduling-load-test-execution.aspx)

## More Information

* [Cloud-based Load Testing](https://www.visualstudio.com/features/vso-cloud-load-testing-vs)
* [Source code for this task](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/RunLoadTest)
* [Build your Visual Studio solution](../../apps/windows/dot-net.md)
* [Cloud-based Load Testing Knowledge Base](https://blogs.msdn.microsoft.com/devops/?s=clt)  

## Related tasks

* [Cloud-based Web Performance Test](cloud-based-web-performance-test.md)  
 
## Q&A
<!-- BEGINSECTION class="md-qanda" -->

#### How do I use a Test Settings file?

The **Test settings file** references any setup and cleanup 
scripts required to execute the load test. For more details see:
[Using Setup and Cleanup Script in Cloud Load Test](https://blogs.msdn.microsoft.com/visualstudioalm/2015/01/12/using-setup-and-cleanup-script-in-cloud-load-test/)

#### When should I specify the number of permissible threshold violations?

Use the **Number of permissible threshold violations**
setting if your load test is not already configured 
with information about how many violations will cause
a failure to be reported. For more details, see: 
[How to: Analyze Threshold Violations Using the Counters Panel in Load Test Analyzer](https://msdn.microsoft.com/en-us/library/ff426917.aspx).

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
