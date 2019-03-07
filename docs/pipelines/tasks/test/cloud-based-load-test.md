---
title: Cloud-based Load Test task
description: Runs the load test in cloud with a build or release pipeline with Azure Pipelines to integrate cloud-based load tests into your build and release pipelines
ms.assetid: 4D10E9D5-2269-4A95-8670-2901DFE4CBB1
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Cloud-based Load Test task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

[!INCLUDE [loadtest-deprecated-include](../../../test/_shared/loadtest-deprecated-include.md)]

Use this task in a build or release pipeline to run a load test in the cloud, to understand, test, and validate your app's performance. 
The task uses the Cloud-based Load Test Service based in
Microsoft Azure and can be used to test your app's 
performance by generating load on it.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

The agent must have the following capability:

* Azure PowerShell

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/RunLoadTestV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Azure Pipelines connection** | The name of a Generic service connection that references the Azure DevOps organization you will be running the load test from and publishing the results to.<br />- Required for builds and releases on TFS and must specify a connection to the Azure DevOps organization where the load test will run.<br />- Optional for builds and releases on Azure Pipelines. In this case, if not provided, the current Azure Pipelines connection is used.<br />- See [Generic service connection](../../library/service-endpoints.md). |
| **Test settings file** | Required. The path relative to the repository root of the test settings file that specifies the files and data required for the load test such as the test settings, any deployment items, and setup/clean-up scripts. The task will search this path and any subfolders. |
| **Load test files folder** | Required. The path of the load test project. The task looks here for the files required for the load test, such as the load test file, any deployment items, and setup/clean-up scripts. The task will search this path and any subfolders. |
| **Load test file** | Required. The name of the load test file (such as **myfile.loadtest**) to be executed as part of this task. This allows you to have more than one load test file and choose the one to execute based on the deployment environment or other factors. |
| **Number of permissible threshold violations** | Optional. The number of critical violations that must occur for the load test to be deemed unsuccessful, aborted, and marked as failed. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Examples

* [Scheduling Load Test Execution](http://blogs.msdn.com/b/visualstudioalm/archive/2015/11/23/scheduling-load-test-execution.aspx)

## More Information

* [Cloud-based Load Testing](https://visualstudio.microsoft.com/features/vso-cloud-load-testing-vs)
* [Source code for this task](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/RunLoadTestV1)
* [Build your Visual Studio solution](../../apps/windows/dot-net.md)
* [Cloud-based Load Testing Knowledge Base](https://blogs.msdn.microsoft.com/devops/?s=clt)  

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
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
[How to: Analyze Threshold Violations Using the Counters Panel in Load Test Analyzer](https://msdn.microsoft.com/library/ff426917.aspx).

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
