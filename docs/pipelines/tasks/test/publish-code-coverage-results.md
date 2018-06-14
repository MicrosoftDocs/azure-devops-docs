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

::: moniker range=">tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/PublishCodeCoverageResultsV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Code coverage tool</td><td>(Required) The tool with which code coverage results are generated.</td></tr>
<tr><td>Summary file</td><td>(Required) Path of the summary file containing code coverage statistics, such as line, method, and class coverage. The value may contain minimatch patterns. For example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura/coverage.xml`</td></tr>
<tr><td>Report directory</td><td>(Optional) Path of the code coverage HTML report directory. The report directory is published for later viewing as an artifact of the build. The value may contain minimatch patterns. For example: `$(System.DefaultWorkingDirectory)/MyApp/**/site/cobertura`</td></tr>
<tr><td>Additional files</td><td>(Optional) File path pattern specifying any additional code coverage files to be published as artifacts of the build. The value may contain minimatch patterns. For example: `$(System.DefaultWorkingDirectory)/**/*.exec`</td></tr>
<tr><td>Fail when code coverage results are missing</td><td>(Optional) Available only on VSTS and TFS 2018 and later. Fail the task if code coverage did not produce any results to publish.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>


## More Information

* [Continuous testing scenarios and capabilities](../../test/index.md)

## Related tasks

* [Publish Test Results](publish-test-results.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]

