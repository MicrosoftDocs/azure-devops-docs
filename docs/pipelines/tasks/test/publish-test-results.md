---
title: VSTS and TFS Build and Test - Publish Test Results task
description: Publish Test Results with the Visual Studio to integrate cloud-based load tests into your build and release pipelines 
ms.assetid: 6D7152C7-2CC7-4CB3-8002-2498650A2509
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 07/09/2018
monikerRange: '>= tfs-2015'
---

# Test: Publish Test Results

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

![icon](_img/publish-test-results-icon.png)
Publishes the test results to TFS or VSTS when tests are run
using a runner of your choice.

The task supports popular test result formats
including [JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd),
[NUnit 2](http://nunit.org/documentation/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format),
Visual Studio Test (TRX), and
[xUnit 2](https://xunit.github.io/docs/format-xml-v2.html). 
If you use the built-in tasks such as
[Visual Studio Test](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md)
to run tests, results are automatically published and you do not need a separate publish test results task.  

## Demands

The build agent must have the following capabilities:

* MSBuild
* Azure PowerShell

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PublishTestResultsV2.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Test result format** | Specify the format of the results files you want to publish. The following formats are supported.<br /> - Version 1 of the task: [JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd), [xUnit 2](https://xunit.github.io/docs/format-xml-v2.html), [NUnit 2](http://nunit.org/documentation/), Visual Studio Test Results (TRX)<br />- Version 2 of the task: [JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd), [xUnit 2](https://xunit.github.io/docs/format-xml-v2.html), [NUnit 2](http://nunit.org/documentation/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format), Visual Studio Test Results (TRX) |
| **Test results files** | Use this to specify one or more test results files.<br />- Version 1 of the task: You can use a single-folder wildcard (`*`) and recursive wildcards (`**`). For example, `**/TEST-*.xml` searches for all the XML files whose names start with `TEST-` in all subdirectories. Multiple paths can be specified, separated by a semicolon.<br />- Version 2 of the task: Uses the [minimatch patterns](../file-matching-patterns.md). For example, `**/TEST-*.xml` searches for all the XML files whose names start with `TEST-` in all subdirectories. |
| **Search folder** | Available only in version 2 of the task. Folder to search for the test result files. Default is `$(System.DefaultWorkingDirectory)` |
| **Merge test results** | When this option is selected, test results from all the files will be reported against a single test run. If this option is not selected, a separate test run will be created for each test result file. |
| **Test run title** | Use this option to provide a name for the test run against which the results will be reported. Variable names declared in the build or release process can be used. |
| **Advanced - Platform** | Build platform against which the test run should be reported. For example, `x64` or `x86`. If you have defined a variable for the platform in your build task, use that here. |
| **Advanced - Configuration** | Build configuration against which the Test Run should be reported. For example, Debug or Release. If you have defined a variable for configuration in your build task, use that here. |
| **Advanced - Upload test results files** | When selected, the task will upload all the test result files as attachments to the test run. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## More Information

* [Continuous testing scenarios and capabilities](../../test/index.md)

## Related tasks

* [Visual Studio Test](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md)  
* [Publish Code Coverage Results](publish-code-coverage-results.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
