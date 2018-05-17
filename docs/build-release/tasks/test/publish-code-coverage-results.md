---
title: Publish Code Coverage Results from a VSTS or TFS build
description: Publish Cobertura or JaCoCo code coverage results from a VSTS or TFS build
ms.assetid: 18F19A70-E9FF-4697-A3E9-CA3B34FCB15D
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: dastahel
ms.date: 05/17/2018
monikerRange: '>= tfs-2015'
---

# Test: Publish Code Coverage Results

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/publish-code-coverage-results-icon.png)
Publishes code coverage results that were produced by a build in [Cobertura](http://cobertura.github.io/cobertura/) or [JaCoCo](http://www.eclemma.org/jacoco/) format.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/PublishCodeCoverageResultsV1.1.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Code Coverage Tool** | Required. The tool with which code coverage results are generated. Currently supported schemas are [Cobertura](http://cobertura.sourceforge.net/xml/coverage-04.dtd) and [JaCoCo](http://www.eclemma.org/jacoco/trunk/coverage/report.dtd). |
| **Summary File** | Required. The path of the summary file containing code coverage statistics such as line, method, and class coverage. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura/coverage.xml` |
| **Report Directory** | The path of the code coverage HTML report directory. The report directory is published for subsequent viewing as an artifact of the build. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura` |
| **Additional Files** | The file path pattern specifying any additional code coverage files to be published as artifacts of the build. The value may contain [minimatch patterns](../file-matching-patterns.md). Example: `$(System.DefaultWorkingDirectory)/**/*.exec` |
| **Fail when code coverage results are missing** | Fail the task if code coverage did not produce any results to publish. |
| **Control options** | See [control options](../../concepts/process/tasks.md#controloptions). |

## More Information

* [Continuous testing scenarios and capabilities](../../test/index.md)

## Related tasks

* [Publish Test Results](publish-test-results.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]

