---
title: Publish Test Results task
description: Publish Test Results to integrate test reporting into your build and release pipelines 
ms.assetid: 6A752841-345D-4BC6-8765-C45F63D91D75
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 01/08/2019
monikerRange: '>= tfs-2015'
---

# Publish Test Results task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

This task publishes test results to Azure Pipelines or TFS when tests are executed
to provide a comprehensive test reporting and analytics experience.
You can use the test runner of your choice that supports the results format
you require. Supported results formats include [CTest](https://cmake.org/cmake/help/latest/manual/ctest.1.html),
[JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd)
(including [PHPUnit](https://phpunit.readthedocs.io/en/8.0/configuration.html#logging)),
[NUnit 2](http://nunit.org/documentation/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format),
Visual Studio Test (TRX), and [xUnit 2](https://xunit.github.io/docs/format-xml-v2.html).

Other built-in tasks such as [Visual Studio Test task](vstest.md) automatically publish
test results to the pipeline, while tasks such as [Ant](../build/ant.md), [Maven](../build/maven.md),
[Gulp](../build/gulp.md), [Grunt](../build/grunt.md), and [Xcode](../build/xcode.md)
provide publishing results as an option within the task.
If you are using any of these tasks, you do not need a separate **Publish Test Results** task in the pipeline.

The published test results are displayed in the [Tests tab](../../test/review-continuous-test-results-after-build.md)
in the pipeline summary and help you to measure pipeline quality, review traceability,
troubleshoot failures, and drive failure ownership. 

The following example shows the task configured to publish test results.

![Open the test history page](_img/publish-test-results.png)

You can also use this task in a build pipeline to **publish code coverage results**
produced when running tests to Azure Pipelines or TFS in order to obtain coverage reporting. 
The task supports popular coverage result formats such as [Cobertura](http://cobertura.github.io/cobertura/)
and [JaCoCo](http://www.eclemma.org/jacoco/).

<a name="demands"></a>

## Demands

[none]

::: moniker range="> tfs-2018"

<a name="yamlsnippet"></a>

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/PublishTestResultsV2.md)]

The default option uses JUnit format to publish test results.
When using VSTest as the **testRunner**, the **testResultsFiles** option should
be changed to `**/TEST-*.trx`. 

**testResultsFormat** is an alias for the **testRunner** input name.
The results files can be produced by multiple runners, not just a specific
runner. For example, jUnit results format is supported by many runners and
not just jUnit.

To publish test results for Python using YAML, see [Python](../../languages/python.md)
in the **Languages** section of these topics, which also includes examples for other languages. 

::: moniker-end

<a name="taskargumets"></a>

## Arguments

> [!NOTE]
> Options specified below are applicable to the latest version of the task. 

| Argument | Description |
| -------- | ----------- |
| **Test result formats** | Specify the format of the results files you want to publish. The following formats are supported:<br />- [CTest](https://cmake.org/cmake/help/latest/manual/ctest.1.html), [JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd), [NUnit 2](http://nunit.org/documentation/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format), Visual Studio Test (TRX) and [xUnit 2](https://xunit.github.io/docs/format-xml-v2.html) |
| **Test results files** | Use this to specify one or more test results files.<br />- You can use a single-folder wildcard (`*`) and recursive wildcards (`**`). For example, `**/TEST-*.xml` searches for all the XML files whose names start with `TEST-` in all subdirectories. If using VSTest as the test result format, the file type should be changed to `.trx` e.g. `**/TEST-*.trx` <br />- Multiple paths can be specified, separated by a semicolon.<br />- Additionally accepts [minimatch patterns](../file-matching-patterns.md). For example, `!TEST[1-3].xml` excludes files named `TEST1.xml`, `TEST2.xml`, or `TEST3.xml`. |
| **Search folder** | Folder to search for the test result files. Default is `$(System.DefaultWorkingDirectory)` |
| **Merge test results** | When this option is selected, test results from all the files will be reported against a single [test run](../../test/test-glossary.md). If this option is not selected, a separate test run will be created for each test result file. <br />Note: Use merge test results to combine files from same test framework |
| **Fail if there are test failures** | When selected, the task will fail if any of the tests in the results file is marked as failed. The default is false, which will simply publish the results from the results file. |
| **Test run title** | Use this option to provide a name for the test run against which the results will be reported. Variable names declared in the build or release pipeline can be used. |
| **Advanced - Platform** | Build platform against which the test run should be reported. For example, `x64` or `x86`. If you have defined a variable for the platform in your build task, use that here. |
| **Advanced - Configuration** | Build configuration against which the Test Run should be reported. For example, Debug or Release. If you have defined a variable for configuration in your build task, use that here. |
| **Advanced - Upload test results files** | When selected, the task will upload all the test result files as attachments to the test run. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

<a name="resultmapping"></a>

## Result formats mapping

This table lists the fields reported in the [Tests tab](../../test/review-continuous-test-results-after-build.md)
in a build or release summary, and the corresponding mapping with the attributes in the supported test result formats. 

| Scope | Field | Visual Studio Test (TRX) | JUnit | NUnit 2 | NUnit 3 | xUnit 2 | CTest |
| ----------------- | ----- | ------------------------ | ----- | ------- | ------- | ------- | ------- |
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task | **Test run title** specified in the task | **Test run title** specified in the task | **Test run title** specified in the task | **Test run title** specified in the task | **Test run title** specified in the task |
| | Date started | /TestRun/Times.Attributes["**start**"].Value | /testsuites/testsuite.Attributes["**timestamp**"].Value | /test-results.Attributes["**date**"].Value + /test-results.Attributes["**time**"].Value | /test-run/**start-time** | /assemblies/assembly/**run-date** + /assemblies/assembly/**run-time** | /Site/Testing/**StartTestTime.InnerText** |
| | Date completed | /TestRun/Times.Attributes["**finish**"].Value | /testsuites/testsuite.Attributes["**timestamp**"].Value + SUM(/testsuites/testsuite/testcase.Attributes["**time**"].Value) for all test cases in the test suite | Date started + /test-results/results/test-case.Attributes["**time**"].Value for all test cases  | /test-run/**end-time** | Date started + /assemblies/assembly/**time** | /Site/Testing/**EndTestTime.InnerText** |
| | Duration | Date completed - Date started | Date completed - Date started | Date completed - Date started | Date completed - Date started | Date completed - Date started | Date completed - Date started |
| | Attachments | Refer to **Attachments support** section below | Results file, used to publish test results | Results file used to publish test results | Refer to **Attachments support** section below | Results file used to publish test results | Results file, used to publish test results |
| [**Test result**](../../test/test-glossary.md) | Title | /TestRun/Results/UnitTestResult.Attributes["**testName**"].Value Or /TestRun/Results/WebTestResult.Attributes["**testName**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**testName**"].Value | /testsuites/testsuite/testcase/Attributes["**name**"].Value | /test-results/results/test-case.Attributes["**name**"].Value | /test-suite[@type='Assembly']/test-case.Attributes["**name**"].Value | /assemblies/assembly/collection/test.Attributes["**method**"].Value | /Site/Testing/Test/**Name.InnerText** |
| | Date started | /TestRun/Results/UnitTestResult.Attributes["**startTime**"].Value Or /TestRun/Results/WebTestResult.Attributes["**startTime**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**startTime**"].Value | /testsuites/testsuite.Attributes["**timestamp**"].Value | /test-results.Attributes["**date**"].Value + /test-results.Attributes["**time**"].Value | /test-suite[@type='Assembly']/test-case.Attributes["**start-time**"].Value | /assemblies/assembly/**run-date** + /assemblies/assembly/**run-time** | /Site/Testing/**StartTestTime.InnerText** |
| | Date completed | /TestRun/Results/UnitTestResult.Attributes["**startTime**"].Value + /TestRun/Results/UnitTestResult.Attributes["**duration**"].Value Or /TestRun/Results/WebTestResult.Attributes["**startTime**"].Value + /TestRun/Results/WebTestResult.Attributes["**duration**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**startTime**"].Value + /TestRun/Results/TestResultAggregation.Attributes["**duration**"].Value | /testsuites/testsuite.Attributes["**timestamp**"].Value +  /testsuites/testsuite/testcase.Attributes["**time**"].Value | Date started + /test-results/results/test-case.Attributes["**time**"].Value | /test-suite[@type='Assembly']/test-case.Attributes["**end-time**"].Value | Date started + /assemblies/assembly/collection/test.Attributes["**time**"].Value | Date Started + /Site/Testing/Test/Results/**NamedMeasurement[@name= 'Execution Time']/Value.InnerText** |
| | Duration (See note 1) | /TestRun/Results/UnitTestResult.Attributes["**duration**"].Value Or /TestRun/Results/WebTestResult.Attributes["**duration**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**duration**"].Value | /testsuites/testsuite/testcase/.Attributes["**time**"].Value | /test-results/results/test-case.Attributes["**time**"].Value | /test-suite[@type='Assembly']/test-case.Attributes["**duration**"].Value | /assemblies/assembly/collection/test.Attributes["**time**"].Value | /Site/Testing/Test/Results/**NamedMeasurement[@name= 'Execution Time']/Value.InnerText** |
| | Owner | /TestRun/TestDefinitions/UnitTest/Owners/Owner.Attributes["**name**"].Value | /testsuites/testsuite/testcase/Attributes["**owner**"].Value | build or release requested for user | build or release requested for user | /assemblies/assembly/collection/test/traits/trait[@name='owner'].Attributes["**value**"].Value | Build or release requested for user |
| | Outcome | /TestRun/Results/UnitTestResult.Attributes["**outcome**"].Value Or /TestRun/Results/WebTestResult.Attributes["**outcome**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**outcome**"].Value | **Failed**: if exists /Testsuites/testsuite/testcase/**failure** Or /Testsuites/testsuite/testcase/**error** <br/>**Not Executed**: if exists Testsuites/testsuite/testcase/**skipped** <br/>**Passed**: for all other cases | **Failed**: if exists /test-results/results/test-case/**failure** <br/>**Not Executed**: if exists /test-results/results/test-case.Attributes["**result**"].Value=="Ignored" <br/>**Passed**: for all other cases | /test-results/test-suite/results/test-case.Attributes["**result**"].Value | /assemblies/assembly/collection/test/failure.Attributes["**result**"].Value | /Site/Testing/**Test.Attributes["Status"].Value** |
| | Error message | /TestRun/Results/UnitTestResult/Output/ErrorInfo/**Message.InnerText** Or /TestRun/Results/WebTestResultOutput/ErrorInfo/**Message.InnerText** Or /TestRun/Results/TestResultAggregation/Output/ErrorInfo/**Message.InnerText** | /Testsuites/testsuite/testcase/failure.Attributes["**message**"].Value Or /Testsuites/testsuite/testcase/error.Attributes["**message**"].Value Or /Testsuites/testsuite/testcase/skipped.Attributes["**message**"].Value | /test-results/results/test-casefailure/**message.InnerText** | /test-suite[@type='Assembly']/test-case/failure/**message** | /assemblies/assembly/collection/test/failure/**message** | - |
| | Stack trace | /TestRun/Results/UnitTestResult/Output/ErrorInfo/**StackTrace.InnerText** Or /TestRun/Results/WebTestResultOutput/ErrorInfo/**StackTrace.InnerText** Or /TestRun/Results/TestResultAggregation/Output/ErrorInfo/**StackTrace.InnerText** | /Testsuites/testsuite/testcase/failure.**InnerText** Or /Testsuites/testsuite/testcase/error.**InnerText** | /test-results/results/test-case/failure/**stack-trace.InnerText** | /test-suite[@type='Assembly']//test-case/failure/**stack-trace** | /assemblies/assembly/collection/test/failure/**stack-trace** | /Site/Testing/Test/Results/Measurement/**Value.InnerText** |
| | Attachments | Refer to **Attachments support** section below | - | - | Refer to **Attachments support** section below | - | - |
| | Console log | /TestRun/Results/UnitTestResult/Output/**StdOut.InnerText** Or /TestRun/Results/WebTestResultOutput/Output/**StdOut.InnerText** Or /TestRun/Results/TestResultAggregation/Output/**StdOut.InnerText** | /Testsuites/testsuite/testcase/**system-out** | /test-results/results/test-case/failure/**message.InnerText** | /test-suite[@type='Assembly']/test-case/failure/**output** | /assemblies/assembly/collection/test/failure/**output** | - |
| | Console error log | /TestRun/Results/UnitTestResult/Output/**StdErr.InnerText** Or /TestRun/Results/WebTestResultOutput/Output/**StdErr.InnerText** Or /TestRun/Results/TestResultAggregation/Output/**StdErr.InnerText** | /Testsuites/testsuite/testcase/**system-err** | /test-results/results/test-case/**output.InnerText** | - | - | - |
| | Agent name | /TestRun/Results/UnitTestResult.Attributes["**computerName**"].Value Or /TestRun/Results/WebTestResult.Attributes["**computerName**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**computerName**"].Value | /testsuites/testsuite.Attributes["**hostname**"].Value | /test-results/environment.Attributes["**machine-name**"].Value | /test-suite[@type='Assembly']/environment.Attributes["**machine-name**"].Value  | - | - |
| | Test file | /TestRun/TestDefinitions/UnitTest.Attributes["**storage**"].Value | /testsuites/testsuite/testcase/Attributes["**classname**"].Value | /test-results/test-suite.Attributes["**name**"].Value | /test-suite[@type='Assembly'].Attributes["**name**"].Value | /assemblies/assembly.Attributes["**name**"].Value | /Site/Testing/Test/**Path.InnerText** |
| | Priority | /TestRun/TestDefinitions/UnitTest.Attributes["**priority**"].Value | - | - | - | /testcaseNode/traits/trait[@name='priority'].Attributes["**value**"].Value | - |

Note (1): **Duration** is used only when **Date started** and **Date completed** are not available. 

<a name="docker"></a>

## Docker

For Docker based apps there are many ways to build your application and run tests:

* [Build and test in a build pipeline](../../languages/docker.md): build and tests execute in the pipeline and test results are published using the **Publish Test Results** task.
* [Build and test with a multi-stage Docker file](../../languages/docker.md): build and tests execute inside the container using a multi-stage Docker file, as such test results are not published back to the pipeline.
* [Build, test, and publish results with a Docker file](#publishtestindocker): build and tests execute inside the container and results are published back to the pipeline. See the example below.

<a name="publishtestindocker"></a>

### Build, test, and publish results with a Docker file

In this approach, you build your code and run tests inside the container using a Docker file.
The test results are then copied to the host to be published to the pipeline.
To publish the test results to Azure Pipelines, you can use the **Publish Test Results** task. 
The final image will be published to Docker or Azure Container Registry

#### Get the code

1. Import into Azure DevOps or fork into GitHub the following repository.
   This sample code includes a `Dockerfile` file at the root of the repository along with `.vsts-ci.docker.yml` file.

   ```URL
   https://github.com/MicrosoftDocs/pipelines-dotnet-core
   ```

1. Create a `Dockerfile.build` file at the root of the directory with the following:

   ```Dockerfile
   # Build and run tests inside the docker container
   FROM microsoft/dotnet:2.1-sdk
   WORKDIR /app
   # copy the contents of agent working directory on host to workdir in container
   COPY . ./
   # dotnet commands to build, test, and publish
   RUN dotnet restore
   RUN dotnet build -c Release
   RUN dotnet test dotnetcore-tests/dotnetcore-tests.csproj -c Release --logger "trx;LogFileName=testresults.trx"
   RUN dotnet publish -c Release -o out
   ENTRYPOINT dotnet dotnetcore-sample/out/dotnetcore-sample.dll
   ```

   This file contains the instructions to build code and run tests.
   The tests are then copied to a file `testresults.trx` inside the container.

1. To make the final image as small as possible, containing only the runtime and deployment artifacts,
   replace the contents of the existing `Dockerfile` with the following:

   ```Dockerfile
   # This Dockerfile creates the final image to be published to Docker or
   # Azure Container Registry
   # Create a container with the compiled asp.net core app
   FROM microsoft/aspnetcore:2.0
   # Create app directory
   WORKDIR /app
   # Copy only the deployment artifacts
   COPY /out .
   ENTRYPOINT ["dotnet", "dotnetcore-sample.dll"]
   ```

#### Define the build pipeline

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

1. If you have a Docker Hub account, and want to push the image to your Docker registry,
   replace the contents of the `.vsts-ci.docker.yml` file with the following:

   ```YAML
   # Build Docker image for this app, to be published to Docker Registry
   pool:
     vmImage: 'ubuntu-16.04'
   variables:
     buildConfiguration: 'Release'
   steps:
   - script: |
       docker build -f Dockerfile.build -t $(dockerId)/dotnetcore-build:$BUILD_BUILDID .
       docker run --name dotnetcoreapp --rm -d $(dockerId)/dotnetcore-build:$BUILD_BUILDID
       docker cp dotnetcoreapp:app/dotnetcore-tests/TestResults $(System.DefaultWorkingDirectory)
       docker cp dotnetcoreapp:app/dotnetcore-sample/out $(System.DefaultWorkingDirectory)
       docker stop dotnetcoreapp

   - task: PublishTestResults@2
     inputs:
       testRunner: VSTest
       testResultsFiles: '**/*.trx'
       failTaskOnFailedTests: true

   - script: |
       docker build -f Dockerfile -t $(dockerId)/dotnetcore-sample:$BUILD_BUILDID .
       docker login -u $(dockerId) -p $pswd
       docker push $(dockerId)/dotnetcore-sample:$BUILD_BUILDID
     env:
       pswd: $(dockerPassword)
   ```

   Alternatively, if you configure an Azure Container Registry and want to push the image to that registry,
   replace the contents of the `.vsts-ci.yml` file with the following:

   ```YAML
   # Build Docker image for this app to be published to Azure Container Registry
   pool:
     vmImage: 'ubuntu-16.04'
   variables:
     buildConfiguration: 'Release'

   steps:
   - script: |
       docker build -f Dockerfile.build -t $(dockerId)/dotnetcore-build:$BUILD_BUILDID .
       docker run --name dotnetcoreapp --rm -d $(dockerId)/dotnetcore-build:$BUILD_BUILDID
       docker cp dotnetcoreapp:app/dotnetcore-tests/TestResults $(System.DefaultWorkingDirectory)
       docker cp dotnetcoreapp:app/dotnetcore-sample/out $(System.DefaultWorkingDirectory)
       docker stop dotnetcoreapp

   - task: PublishTestResults@2
     inputs:
       testRunner: VSTest
       testResultsFiles: '**/*.trx'
       failTaskOnFailedTests: true

   - script: |
       docker build -f Dockerfile -t $(dockerId).azurecr.io/dotnetcore-sample:$BUILD_BUILDID .
       docker login -u $(dockerId) -p $pswd $(dockerid).azurecr.io
       docker push $(dockerId).azurecr.io/dotnetcore-sample:$BUILD_BUILDID 
     env:
       pswd: $(dockerPassword)
   ```

1. Push the change to the master branch in your repository. 

1. If you use Azure Container Registry, ensure you have
   [pre-created the registry](https:/docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) in the Azure portal.
   Copy the admin user name and password shown in the **Access keys** section of the registry settings in Azure portal.

1. Update your build pipeline with the following

   * **Agent pool**: `Hosted Ubuntu 1604`
     - **dockerId**: Set the value to your Docker ID for DockerHub or the admin user name for Azure Container Registry.
     - **dockerPassword**: Set the value to your password for DockerHub or the admin password Azure Container Registry. 
   * **YAML file path**: `/.vsts-ci.docker.yml`

1. Queue a new build and watch it create and push a Docker image to your registry and the test results to Azure DevOps.

::: moniker-end

::: moniker range="< azure-devops"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

1. Create a new build pipeline using the **Empty job**.

1. Select **Pipeline** on the **Tasks** page of the build pipeline editor and edit its properties as follows

   * **Agent queue**: `Hosted Ubuntu 1604`

1. Add a [Bash task](../utility/bash.md) and configure it as follows to build and copy artifacts to the host:

   * **Type**: Inline
   * **Script**: To build, test and copy artifacts to host, use the following script:

     ```Bash
     docker build -f Dockerfile.build -t $(dockerId)/dotnetcore-build:$BUILD_BUILDID .
     docker run --name dotnetcoreapp --rm -d $(dockerId)/dotnetcore-build:$BUILD_BUILDID
     docker cp dotnetcoreapp:app/dotnetcore-tests/TestResults $(System.DefaultWorkingDirectory)
     docker cp dotnetcoreapp:app/dotnetcore-sample/out $(System.DefaultWorkingDirectory)
     docker stop dotnetcoreapp
     ```

1. Add a **Publish Test Results** task to publish results to the pipeline, and edit the its properties as follows:

   * **Test result format**: `VSTest`
   * **Test results files**: `**/*.trx`

1. Add a [Bash task](../utility/bash.md) to publish the final image to the repository, and edit the its properties as follows:

   * **Type**: `Inline`
   * **Script**:

     * To push to Docker Hub, use the following script:

       ```Bash
       docker build -f Dockerfile -t $(dockerId)/dotnetcore-sample:$BUILD_BUILDID .
       docker login -u $(dockerId) -p $(dockerPassword)
       docker push $(dockerId)/dotnetcore-sample:$BUILD_BUILDID
       ```

     * To push to Azure Container Registry, use the following script:

       ```Bash
       docker build -t $(dockerId).azurecr.io/dotnetcore-sample:$BUILD_BUILDID . 
       docker login -u $(dockerId) -p $(dockerPassword) $(dockerId).azurecr.io 
       docker push $(dockerId).azurecr.io/dotnetcore-sample:$BUILD_BUILDID
       ```
1. If you use Azure Container Registry, ensure you have
   [pre-created the registry](https:/docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) in the Azure portal.
   Copy the admin user name and password shown in the **Access keys** section of the registry settings in Azure portal.

1. In the **Variables** tab of the build pipeline, define two variables:

   * **dockerId**: Set the value to your Docker ID for DockerHub or the admin user name for Azure Container Registry.
   * **dockerPassword**: Set the value to your password for DockerHub or the admin password Azure Container Registry, and mark it as secure. 

1. Save the pipeline and queue a build. Watch it create and push a Docker image to your registry and the test results to Azure DevOps.

---

<a name="attachments"></a>

## Attachments support

The Publish Test Results task provides support for attachments for both test run and test results for the following formats.

### Visual Studio Test (TRX)

| Scope | Type | Path |
| ----- | ---- | ---- |
| **Test run** | Data Collector | /TestRun/ResultSummary/CollectorDataEntries/Collector/UriAttachments/UriAttachment/A.Attributes["**href**"].Value |
| | Test Result | /TestRun/ResultSummary/ResultFiles/ResultFile.Attributes["**path**"].Value |
| | Code Coverage | /TestRun/TestSettings/Execution/AgentRule/DataCollectors/DataCollector/Configuration/CodeCoverage/Regular/CodeCoverageItem.Attributes["**binaryFile**"].Value And /TestRun/TestSettings/Execution/AgentRule/DataCollectors/DataCollector/Configuration/CodeCoverage/Regular/CodeCoverageItem.Attributes["**pdbFile**"].Value |
| **Test result** | Data Collectors | /TestRun/Results/UnitTestResult/CollectorDataEntries/Collector/UriAttachments/UriAttachment/A.Attributes["**href**"].Value Or /TestRun/Results/WebTestResult/CollectorDataEntries/Collector/UriAttachments/UriAttachment/A.Attributes["**href**"].Value Or /TestRun/Results/TestResultAggregation/CollectorDataEntries/Collector/UriAttachments/UriAttachment/A.Attributes["**href**"].Value |
| | Test Result | /TestRun/Results/UnitTestResult/ResultFiles/ResultFile.Attributes["**path**"].Value Or /TestRun/Results/WebTestResult/ResultFiles/ResultFile.Attributes["**path**"].Value Or /TestRun/Results/TestResultAggregation/ResultFiles/ResultFile.Attributes["**path**"].Value |

### NUnit 3

| Scope | Path |
| ----- | ---- |
| **Test run** | /test-suite/attachments/attachment/**filePath** |
| **Test run** | /test-suite[@type='Assembly']/test-case/attachments/attachment/**filePath** |

> [!NOTE]
> The option to upload the test results file as an attachment is a default option in the task, applicable to all formats.

## Related tasks

* [Visual Studio Test](./vstest.md)  
* [Publish Code Coverage Results](publish-code-coverage-results.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
