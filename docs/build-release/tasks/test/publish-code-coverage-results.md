---
title: VSTS and TFS Build and Test - Publish Code Coverage Results step
ms.assetid: 18F19A70-E9FF-4697-A3E9-CA3B34FCB15D
description: Publish Code Coverage Results with the Visual Studio to integrate cloud-based load tests into your build and release pipelines 
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Test: Publish Code Coverage Results

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/publish-code-coverage-results-icon.png)
Publishes the code coverage results of a build.

## Demands

The build agent must have the following capabilities:

* MSBuild
* Azure PowerShell

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Code Coverage Tool** | Required. The tool with which code coverage results are generated. Currently supported schemas are [Cobertura](http://cobertura.sourceforge.net/xml/coverage-04.dtd) and [Jacoco](http://www.eclemma.org/jacoco/trunk/coverage/report.dtd). |
| **Summary File** | Required. The path of the summary file containing code coverage statistics such as line, method, and class coverage. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura/coverage.xml` |
| **Report Directory** | The path of the code coverage HTML report directory. The report directory is published for subsequent viewing as an artifact of the build. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura` |
| **Additional Files** | The file path pattern specifying any additional code coverage files to be published as artifacts of the build. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/**/*.exec` |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

## More Information

* [Continuous testing scenarios and capabilities](../../test/index.md)

## Related tasks

* [Visual Studio Test](visual-studio-test.md)  
* [Visual Studio Test Agent Deployment](visual-studio-test-agent-deployment.md)  
* [Publish Test Results](publish-test-results.md)
* [Run Functional Tests](run-functional-tests.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]

