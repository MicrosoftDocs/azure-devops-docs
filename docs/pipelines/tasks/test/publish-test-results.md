---
title: Publish Test Results task
description: Publish Test Results to integrate test reporting into your build and release pipelines 
ms.assetid: 6A752841-345D-4BC6-8765-C45F63D91D75
ms.topic: reference
ms.custom: seodec18
ms.author: shashban
author: shashban
ms.date: 09/30/2020
monikerRange: '>= tfs-2015'
---

# Publish Test Results task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

This task publishes test results to Azure Pipelines or TFS when tests are executed
to provide a comprehensive test reporting and analytics experience.
You can use the test runner of your choice that supports the results format
you require. Supported results formats include [CTest](https://cmake.org/cmake/help/latest/manual/ctest.1.html),
[JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd)
(including [PHPUnit](https://phpunit.readthedocs.io/en/8.0/configuration.html#logging)),
[NUnit 2](https://docs.nunit.org/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format),
Visual Studio Test (TRX), and [xUnit 2](https://xunit.net/docs/format-xml-v2).

Other built-in tasks such as [Visual Studio Test task](vstest.md) and [Dot NetCore CLI task](../build/dotnet-core-cli.md) automatically publish
test results to the pipeline, while tasks such as [Ant](../build/ant.md), [Maven](../build/maven.md),
[Gulp](../build/gulp.md), [Grunt](../build/grunt.md), [.NET Core](../build/dotnet-core-cli.md) and [Xcode](../build/xcode.md)
provide publishing results as an option within the task, or build libraries such as [Cobertura](https://cobertura.github.io/cobertura/)
and [JaCoCo](https://www.eclemma.org/jacoco/).
If you are using any of these tasks, you do not need a separate **Publish Test Results** task in the pipeline.

The published test results are displayed in the [Tests tab](../../test/review-continuous-test-results-after-build.md)
in the pipeline summary and help you to measure pipeline quality, review traceability,
troubleshoot failures, and drive failure ownership. 

The following example shows the task configured to publish test results.

![Open the test history page](media/publish-test-results.png)

You can also use this task in a build pipeline to **publish code coverage results**
produced when running tests to Azure Pipelines or TFS in order to obtain coverage reporting. 

## Check prerequisites

If you're using a Windows self-hosted agent, be sure that your machine has this prerequisite installed:

- [.NET Framework](/dotnet/framework/install/) 4.6.2 or a later version

<a name="demands"></a>

## Demands

[none]

::: moniker range="> tfs-2018"

<a name="yamlsnippet"></a>

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishTestResultsV2.md)]

The default option uses JUnit format to publish test results.
When using VSTest as the **testRunner**, the **testResultsFiles** option should
be changed to `**/TEST-*.trx`. 

**testResultsFormat** is an alias for the **testRunner** input name.
The results files can be produced by multiple runners, not just a specific
runner. For example, jUnit results format is supported by many runners and
not just jUnit.

To publish test results for Python using YAML, see [Python](../../ecosystems/python.md)
in the **Ecosystems** section of these topics, which also includes examples for other languages. 

::: moniker-end

<a name="taskargumets"></a>

## Arguments

> [!NOTE]
> Options specified below are applicable to the latest version of the task. 

| Argument | Description |
| -------- | ----------- |
|`testRunner` <br/>Test result format| (Required) Specify the format of the results files you want to publish. The following formats are supported:<br />- [CTest](https://cmake.org/cmake/help/latest/manual/ctest.1.html), [JUnit](https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd), [NUnit 2](https://docs.nunit.org/), [NUnit 3](https://github.com/nunit/docs/wiki/Test-Result-XML-Format), Visual Studio Test (TRX) and [xUnit 2](https://xunit.net/docs/format-xml-v2) <br/>Default value: `JUnit` <br/>Argument alias: `testResultsFormat`|
|`testResultsFiles` <br/>Test results files| (Required) Use this to specify one or more test results files.<br />- You can use a single-folder wildcard (`*`) and recursive wildcards (`**`). For example, `**/TEST-*.xml` searches for all the XML files whose names start with `TEST-` in all subdirectories. If using VSTest as the test result format, the file type should be changed to `.trx` e.g. `**/TEST-*.trx` <br />- Multiple paths can be specified, separated by a newline.<br />- Additionally accepts [minimatch patterns](../file-matching-patterns.md). <br/>For example, `!TEST[1-3].xml` excludes files named `TEST1.xml`, `TEST2.xml`, or `TEST3.xml`. <br/>Default value: `**/TEST-*.xml`|
|`searchFolder`<br/>Search folder| (Optional) Folder to search for the test result files. <br/>Default value: `$(System.DefaultWorkingDirectory)`|
|`mergeTestResults`<br/>Merge test results| When this option is selected, test results from all the files will be reported against a single [test run](../../test/test-glossary.md). If this option is not selected, a separate test run will be created for each test result file. <br />Note: Use merge test results to combine files from same test framework to ensure results mapping and duration are calculated correctly. <br/>Default value: `false`|
|`failTaskOnFailedTests`<br/>Fail if there are test failures| (Optional) When selected, the task will fail if any of the tests in the results file is marked as failed. The default is false, which will simply publish the results from the results file. <br/>Default value: `false`|
|`testRunTitle`<br/>Test run title| (Optional) Use this option to provide a name for the test run against which the results will be reported. Variable names declared in the build or release pipeline can be used. |
|`platform`<br/>Build Platform| (Optional) Build platform against which the test run should be reported. <br/> For example, `x64` or `x86`. If you have defined a variable for the platform in your build task, use that here. <br/>Argument alias: `buildPlatform`|
|`configuration`<br/>Build Configuration| Build configuration against which the Test Run should be reported. For example, Debug or Release. If you have defined a variable for configuration in your build task, use that here. <br/>Argument alias: `buildConfiguration`|
|`publishRunAttachments`<br/>Upload test results files| (Optional) When selected, the task will upload all the test result files as attachments to the test run. <br/>Default value: `true`|

<a name="resultmapping"></a>

## Result formats mapping

This table lists the fields reported in the [Tests tab](../../test/review-continuous-test-results-after-build.md)
in a build or release summary, and the corresponding mapping with the attributes in the supported test result formats. 

#### [Visual Studio Test (TRX)](#tab/trx)

| Scope | Field | Visual Studio Test (TRX) |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /TestRun/Times.Attributes["**start**"].Value |
|  | Date completed | /TestRun/Times.Attributes["**finish**"].Value |
|  | Duration | Date completed - Date started |
|  | Attachments | Refer to **Attachments support** section below |
| [**Test result**](../../test/test-glossary.md) | Title | /TestRun/Results/UnitTestResult.Attributes["**testName**"].Value Or /TestRun/Results/WebTestResult.Attributes["**testName**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**testName**"].Value |
|  | Date started | /TestRun/Results/UnitTestResult.Attributes["**startTime**"].Value Or /TestRun/Results/WebTestResult.Attributes["**startTime**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**startTime**"].Value |
|  | Date completed | /TestRun/Results/UnitTestResult.Attributes["**startTime**"].Value + /TestRun/Results/UnitTestResult.Attributes["**duration**"].Value Or /TestRun/Results/WebTestResult.Attributes["**startTime**"].Value + /TestRun/Results/WebTestResult.Attributes["**duration**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**startTime**"].Value + /TestRun/Results/TestResultAggregation.Attributes["**duration**"].Value |
|  | Duration<sup>1</sup> | /TestRun/Results/UnitTestResult.Attributes["**duration**"].Value Or /TestRun/Results/WebTestResult.Attributes["**duration**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**duration**"].Value |
|  | Owner | /TestRun/TestDefinitions/UnitTest/Owners/Owner.Attributes["**name**"].Value |
|  | Outcome | /TestRun/Results/UnitTestResult.Attributes["**outcome**"].Value Or /TestRun/Results/WebTestResult.Attributes["**outcome**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**outcome**"].Value |
|  | Error message | /TestRun/Results/UnitTestResult/Output/ErrorInfo/**Message.InnerText** Or /TestRun/Results/WebTestResultOutput/ErrorInfo/**Message.InnerText** Or /TestRun/Results/TestResultAggregation/Output/ErrorInfo/**Message.InnerText** |
|  | Stack trace | /TestRun/Results/UnitTestResult/Output/ErrorInfo/**StackTrace.InnerText** Or /TestRun/Results/WebTestResultOutput/ErrorInfo/**StackTrace.InnerText** Or /TestRun/Results/TestResultAggregation/Output/ErrorInfo/**StackTrace.InnerText** |
|  | Attachments | Refer to **Attachments support** section below |
|  | Console log | /TestRun/Results/UnitTestResult/Output/**StdOut.InnerText** Or /TestRun/Results/WebTestResultOutput/Output/**StdOut.InnerText** Or /TestRun/Results/TestResultAggregation/Output/**StdOut.InnerText** |
|  | Console error log | /TestRun/Results/UnitTestResult/Output/**StdErr.InnerText** Or /TestRun/Results/WebTestResultOutput/Output/**StdErr.InnerText** Or /TestRun/Results/TestResultAggregation/Output/**StdErr.InnerText** |
|  | Agent name | /TestRun/Results/UnitTestResult.Attributes["**computerName**"].Value Or /TestRun/Results/WebTestResult.Attributes["**computerName**"].Value Or /TestRun/Results/TestResultAggregation.Attributes["**computerName**"].Value |
|  | Test file | /TestRun/TestDefinitions/UnitTest.Attributes["**storage**"].Value |
|  | Priority | /TestRun/TestDefinitions/UnitTest.Attributes["**priority**"].Value |

#### [JUnit](#tab/junit)

| Scope | Field | JUnit |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /testsuites/testsuite.Attributes["**timestamp**"].Value |
|  | Date completed | /testsuites/testsuite.Attributes["**timestamp**"].Value + SUM(/testsuites/testsuite/testcase.Attributes["**time**"].Value) for all test cases in the test suite |
|  | Duration | Date completed - Date started |
|  | Attachments | Results file, used to publish test results |
| [**Test result**](../../test/test-glossary.md) | Title | /testsuites/testsuite/testcase/Attributes["**name**"].Value |
|  | Date started | /testsuites/testsuite.Attributes["**timestamp**"].Value |
|  | Date completed | /testsuites/testsuite.Attributes["**timestamp**"].Value +  /testsuites/testsuite/testcase.Attributes["**time**"].Value |
|  | Duration<sup>1</sup> | /testsuites/testsuite/testcase/.Attributes["**time**"].Value |
|  | Owner | /testsuites/testsuite/testcase/Attributes["**owner**"].Value |
|  | Outcome | **Failed**: if exists /Testsuites/testsuite/testcase/**failure** Or /Testsuites/testsuite/testcase/**error**  **Not Executed**: if exists Testsuites/testsuite/testcase/**skipped**  **Passed**: for all other cases |
|  | Error message | /Testsuites/testsuite/testcase/failure.Attributes["**message**"].Value Or /Testsuites/testsuite/testcase/error.Attributes["**message**"].Value Or /Testsuites/testsuite/testcase/skipped.Attributes["**message**"].Value |
|  | Stack trace | /Testsuites/testsuite/testcase/failure.**InnerText** Or /Testsuites/testsuite/testcase/error.**InnerText** |
|  | Attachments | - |
|  | Console log | /Testsuites/testsuite/testcase/**system-out** |
|  | Console error log | /Testsuites/testsuite/testcase/**system-err** |
|  | Agent name | /testsuites/testsuite.Attributes["**hostname**"].Value |
|  | Test file | /testsuites/testsuite/testcase/Attributes["**classname**"].Value |
|  | Priority | - |

#### [NUnit 2](#tab/nunit2)

| Scope | Field | NUnit 2 |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /test-results.Attributes["**date**"].Value + /test-results.Attributes["**time**"].Value |
|  | Date completed | Date started + /test-results/results/test-case.Attributes["**time**"].Value for all test cases |
|  | Duration | Date completed - Date started |
|  | Attachments | Results file used to publish test results |
| [**Test result**](../../test/test-glossary.md) | Title | /test-results/results/test-case.Attributes["**name**"].Value |
|  | Date started | /test-results.Attributes["**date**"].Value + /test-results.Attributes["**time**"].Value |
|  | Date completed | Date started + /test-results/results/test-case.Attributes["**time**"].Value |
|  | Duration<sup>1</sup> | /test-results/results/test-case.Attributes["**time**"].Value |
|  | Owner | build or release requested for user |
|  | Outcome | **Failed**: if exists /test-results/results/test-case/**failure**  **Not Executed**: if exists /test-results/results/test-case.Attributes["**result**"].Value=="Ignored"  **Passed**: for all other cases |
|  | Error message | /test-results/results/test-casefailure/**message.InnerText** |
|  | Stack trace | /test-results/results/test-case/failure/**stack-trace.InnerText** |
|  | Attachments | - |
|  | Console log | /test-results/results/test-case/failure/**message.InnerText** |
|  | Console error log | /test-results/results/test-case/**output.InnerText** |
|  | Agent name | /test-results/environment.Attributes["**machine-name**"].Value |
|  | Test file | /test-results/test-suite.Attributes["**name**"].Value |
|  | Priority | - |

#### [NUnit 3](#tab/nunit3)

| Scope | Field | NUnit 3 |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /test-run/**start-time** |
|  | Date completed | /test-run/**end-time** |
|  | Duration | Date completed - Date started |
|  | Attachments | Refer to **Attachments support** section below |
| [**Test result**](../../test/test-glossary.md) | Title | /test-suite[@type='Assembly']/test-case.Attributes["**name**"].Value |
|  | Date started | /test-suite[@type='Assembly']/test-case.Attributes["**start-time**"].Value |
|  | Date completed | /test-suite[@type='Assembly']/test-case.Attributes["**end-time**"].Value |
|  | Duration<sup>1</sup> | /test-suite[@type='Assembly']/test-case.Attributes["**duration**"].Value |
|  | Owner | build or release requested for user |
|  | Outcome | /test-results/test-suite/results/test-case.Attributes["**result**"].Value |
|  | Error message | /test-suite[@type='Assembly']/test-case/failure/**message** |
|  | Stack trace | /test-suite[@type='Assembly']//test-case/failure/**stack-trace** |
|  | Attachments | Refer to **Attachments support** section below |
|  | Console log | /test-suite[@type='Assembly']/test-case/failure/**output** |
|  | Console error log | - |
|  | Agent name | /test-suite[@type='Assembly']/environment.Attributes["**machine-name**"].Value |
|  | Test file | /test-suite[@type='Assembly'].Attributes["**name**"].Value |
|  | Priority | - |

#### [xUnit 2](#tab/xunit2)

| Scope | Field | xUnit 2 |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /assemblies/assembly/**run-date** + /assemblies/assembly/**run-time** |
|  | Date completed | Date started + /assemblies/assembly/**time** |
|  | Duration | Date completed - Date started |
|  | Attachments | Results file used to publish test results |
| [**Test result**](../../test/test-glossary.md) | Title | /assemblies/assembly/collection/test.Attributes["**method**"].Value |
|  | Date started | /assemblies/assembly/**run-date** + /assemblies/assembly/**run-time** |
|  | Date completed | Date started + /assemblies/assembly/collection/test.Attributes["**time**"].Value |
|  | Duration<sup>1</sup> | /assemblies/assembly/collection/test.Attributes["**time**"].Value |
|  | Owner | /assemblies/assembly/collection/test/traits/trait[@name='owner'].Attributes["**value**"].Value |
|  | Outcome | /assemblies/assembly/collection/test/failure.Attributes["**result**"].Value |
|  | Error message | /assemblies/assembly/collection/test/failure/**message** |
|  | Stack trace | /assemblies/assembly/collection/test/failure/**stack-trace** |
|  | Attachments | - |
|  | Console log | /assemblies/assembly/collection/test/failure/**output** |
|  | Console error log | - |
|  | Agent name | - |
|  | Test file | /assemblies/assembly.Attributes["**name**"].Value |
|  | Priority | /testcaseNode/traits/trait[@name='priority'].Attributes["**value**"].Value |

#### [CTest](#tab/ctest)

| Scope | Field | CTest |
|-|-|-|
| [**Test run**](../../test/test-glossary.md) | Title | **Test run title** specified in the task |
|  | Date started | /Site/Testing/**StartTestTime.InnerText** |
|  | Date completed | /Site/Testing/**EndTestTime.InnerText** |
|  | Duration | Date completed - Date started |
|  | Attachments | Results file, used to publish test results |
| [**Test result**](../../test/test-glossary.md) | Title | /Site/Testing/Test/**Name.InnerText** |
|  | Date started | /Site/Testing/**StartTestTime.InnerText** |
|  | Date completed | Date Started + /Site/Testing/Test/Results/**NamedMeasurement[@name= 'Execution Time']/Value.InnerText** |
|  | Duration<sup>1</sup> | /Site/Testing/Test/Results/**NamedMeasurement[@name= 'Execution Time']/Value.InnerText** |
|  | Owner | Build or release requested for user |
|  | Outcome | /Site/Testing/**Test.Attributes["Status"].Value** |
|  | Error message | - |
|  | Stack trace | /Site/Testing/Test/Results/Measurement/**Value.InnerText** |
|  | Attachments | - |
|  | Console log | - |
|  | Console error log | - |
|  | Agent name | - |
|  | Test file | /Site/Testing/Test/**Path.InnerText** |
|  | Priority | - |

* * *

<sup>1</sup> **Duration** is used only when **Date started** and **Date completed** are not available.

<sup>2</sup> The fully Qualified name format is **Namespace.Testclass.Methodname** with a character limit of 512. If the test is data driven and has parameters, the character limit will include the parameters.

<a name="docker"></a>

## Docker

For Docker based apps there are many ways to build your application and run tests:

* Build and test in a build pipeline: build and tests execute in the pipeline and test results are published using the **Publish Test Results** task.
* Build and test with a multi-stage Dockerfile: build and tests execute inside the container using a multi-stage Docker file, as such test results are not published back to the pipeline.
* Build, test, and publish results with a Dockerfile: build and tests execute inside the container and results are published back to the pipeline. See the example below.

<a name="publishtestindocker"></a>

### Build, test, and publish results with a Docker file

In this approach, you build your code and run tests inside the container using a Docker file.
The test results are then copied to the host to be published to the pipeline.
To publish the test results to Azure Pipelines, you can use the **Publish Test Results** task. 
The final image will be published to Docker or Azure Container Registry

#### Get the code

1. Import into Azure DevOps or fork into GitHub the following repository.
   This sample code includes a `Dockerfile` file at the root of the repository along with `.vsts-ci.docker.yml` file.

   ```URL
   https://github.com/MicrosoftDocs/pipelines-dotnet-core
   ```

1. Create a `Dockerfile.build` file at the root of the directory with the following:

   ```Dockerfile
   # Build and run tests inside the docker container
   FROM mcr.microsoft.com/dotnet/sdk:2.1
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
   FROM mcr.microsoft.com/dotnet/aspnet:2.1
   # Create app directory
   WORKDIR /app
   # Copy only the deployment artifacts
   COPY /out .
   ENTRYPOINT ["dotnet", "dotnetcore-sample.dll"]
   ```

#### Define the build pipeline

#### [YAML](#tab/yaml/)
::: moniker range="azure-devops"

1. If you have a Docker Hub account, and want to push the image to your Docker registry,
   replace the contents of the `.vsts-ci.docker.yml` file with the following:

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

   Alternatively, if you configure an Azure Container Registry and want to push the image to that registry,
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

1. Push the change to the main branch in your repository. 

1. If you use Azure Container Registry, ensure you have
   [pre-created the registry](/azure/container-registry/container-registry-get-started-portal) in the Azure portal.
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

#### [Classic](#tab/classic/)
1. Create a new build pipeline using the **Empty job**.

1. Select **Pipeline** on the **Tasks** page of the build pipeline editor and edit its properties as follows

   * **Agent queue**: `Hosted Ubuntu 1604`

1. Add a [Bash task](../utility/bash.md) and configure it as follows to build and copy artifacts to the host:

   * **Type**: Inline
   * **Script**: To build, test and copy artifacts to host, use the following script:

     ```Bash
     docker build -f Dockerfile.build -t $(dockerId)/dotnetcore-build:$BUILD_BUILDID .
     docker run --name dotnetcoreapp --rm -d $(dockerId)/dotnetcore-build:$BUILD_BUILDID
     docker cp dotnetcoreapp:app/dotnetcore-tests/TestResults $(System.DefaultWorkingDirectory)
     docker cp dotnetcoreapp:app/dotnetcore-sample/out $(System.DefaultWorkingDirectory)
     docker stop dotnetcoreapp
     ```

1. Add a **Publish Test Results** task to publish results to the pipeline, and edit its properties as follows:

   * **Test result format**: `VSTest`
   * **Test results files**: `**/*.trx`

1. Add a [Bash task](../utility/bash.md) to publish the final image to the repository, and edit its properties as follows:

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
   [pre-created the registry](/azure/container-registry/container-registry-get-started-portal) in the Azure portal.
   Copy the admin user name and password shown in the **Access keys** section of the registry settings in Azure portal.

1. In the **Variables** tab of the build pipeline, define two variables:

   * **dockerId**: Set the value to your Docker ID for DockerHub or the admin user name for Azure Container Registry.
   * **dockerPassword**: Set the value to your password for DockerHub or the admin password Azure Container Registry, and mark it as secure. 

1. Save the pipeline and queue a build. Watch it create and push a Docker image to your registry and the test results to Azure DevOps.

* * *
<a name="attachments"></a>

## Attachments support

The Publish Test Results task provides support for attachments for both test run and test results for the following formats. For public projects, we support 2GB of total attachments. 

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

## FAQ

#### What is the maximum permissible limit of FQN?

The maximum FQN limit is 512 characters.

#### Does the FQN Character limit also include properties and their values in case of data driven tests?

Yes, the FQN character limit includes properties and their values.

#### Will the FQN be different for sub-results?

Currently, sub-results from the data driven tests will not show up in the corresponding data. 

Example: I have a Test case: Add product to cart
Data 1: Product = Apparel
Data 2: Product = Footwear

All test sub-result published will only have the test case name and the data of the first row.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

[!INCLUDE [test-help-support-shared](../../includes/test-help-support-shared.md)]
