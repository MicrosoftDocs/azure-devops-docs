---
title: Code coverage Azure Pipelines and TFS 
description: Review code coverage results in Azure Pipelines or Team Foundation Server (TFS)
ms.assetid: 86D94FB7-D730-4ECE-8300-5E76934090A5
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: vinojos
author: vinojos
ms.date: 08/31/2018
monikerRange: '>= tfs-2015'
---

# Review code coverage results

<a name="prerequisites"></a>  

Code coverage helps you determine the proportion of your project's code that is
actually being tested by tests such as unit tests. To increase your confidence
of the code changes, and guard effectively against bugs, your tests should
exercise - or cover - a large proportion of your code.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker-end

## Example

For an example of publishing code coverage results for JavaScript with Istanbul
using YAML, see [JavaScript](../languages/javascript.md) in the Languages section of these topics,
which also includes examples for other languages.

## View results 

The code coverage summary can be viewed in the build timeline view.

![View code coverage results](_img/review-code-coverage-results/view-code-coverage-summary.png)

> [!NOTE]
> Merging of code coverage from multiple [test runs](test-glossary.md) is
> limited to .NET and .NET Core at present. This will be supported for other
> formats in future.

## Artifacts

The code coverage artifacts published during the build can be viewed under the
**Build artifacts published** milestone in the timeline view.

![View code coverage artifact](_img/review-code-coverage-results/view-code-coverage-artifact.png)

> [!NOTE]
> For .NET and .NET Core the link to download the artifact is availble on
> click of the Code coverage milestone

## Tasks

* [**Publish Code Coverage Results**](): publishes code coverage results to Azure Pipelines or TFS,
  which were produced by a build in [Cobertura] (http://cobertura.github.io/cobertura/) or [JaCoCo](http://www.eclemma.org/jacoco/) format. 
* **Other Tasks**: Built-in tasks such as [Visual Studio Test](../tasks/test/vstest.md),
  [.NET Core](../tasks/build/dotnet-core.md), [Ant](../tasks/build/ant.md), [Maven](../tasks/build/maven.md),
  [Gulp](../tasks/build/gulp.md), [Grunt](../tasks/build/grunt.md), and [Gradle](../tasks/build/gradle.md)
  provide the option to publish code coverage data to the pipeline.

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
