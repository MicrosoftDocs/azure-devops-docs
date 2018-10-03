---
title: Building .NET Core projects with Azure Pipelines and TFS
description: Building .NET Core projects using Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 08/15/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Build .NET Core projects with Azure Pipelines or Team Foundation Server

**Azure Pipelines | TFS 2018 | TFS 2017**

This guidance explains how to use Azure Pipelines or Team Foundation Server (TFS) to automatically build .NET Core projects and deploy or publish to targets with CI/CD pipelines.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This guidance explains how to build .NET Core projects.

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

## Example

This example shows how to build a .NET Core project. To start, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

# [YAML](#tab/yaml)

::: moniker range="vsts"

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a pipeline for the sample app.

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

::: moniker range="< vsts"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure DevOps organization. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.
::: moniker-end

* After you have the sample code in your own repository, create a pipeline using the instructions in [Your first build and release](../get-started-designer.md) and select the **ASP.NET Core** template. This automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

---

Read through the rest of this topic to learn some of the common ways to customize your .NET Core pipeline.

## Build environment

::: moniker range="vsts"

You can use Azure Pipelines to build your .NET Core projects on Windows, Linux, or macOS without needing to set up any infrastructure of your own.
The [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines have several released versions of the .NET Core SDKs preinstalled.

# [YAML](#tab/yaml)

Add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
pool:
  vmImage: 'Ubuntu-16.04' # other options: 'macOS-10.13', 'VS2017-Win2016'
```

# [Designer](#tab/designer)

Use the **Hosted VS2017** agent pool (to build on Windows), the **Hosted Linux Preview** agent pool, or the **Hosted macOS Preview** pool.
To change the OS on which to build, select **Tasks**, then select the **Process** node, and finally select the **Agent pool** that you want to use.

---

The Microsoft hosted agents don't include some of the older versions of the .NET Core SDK.
They also don't typically include prerelease versions. If you need these kinds of SDKs on Microsoft hosted agents, add the **.NET Core Tool Installer** task to the beginning of your process.

# [YAML](#tab/yaml)

If you need a version of the .NET Core SDK that is not already installed on the Microsoft-hosted agent, add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: DotNetCoreInstaller@0
  inputs:
    version: '2.1.300' # replace this value with the version that you need for your project
```

# [Designer](#tab/designer)

If you need a version of the .NET Core SDK that is not already installed on the Microsoft-hosted agent:

1. In the pipeline, select **Tasks**, choose the job that runs your build tasks, and then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core Tool Installer** task.

1. Select the task and specify the version of the .NET Core SDK or runtime that you want to install.

---

> [!TIP]
> 
> As an alternative, you can set up a [self-hosted agent](../agents/agents.md#install) and save the cost of running the tool installer.
> You can also use self-hosted agents to save additional time if you have a large repository or you run incremental builds.

::: moniker-end

::: moniker range="< vsts"

You can build your .NET Core projects using the .NET Core SDK and runtime on Windows, Linux, or macOS.
Your builds run on a [self-hosted agent](../agents/agents.md#install).
Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agent.

::: moniker-end

## Restore dependencies

NuGet is a popular way to depend on code that you don't build. You can download NuGet packages by running
the `dotnet restore` command either through the
[.NET Core](../tasks/build/dotnet-core.md) task or directly in a script in your pipeline.

::: moniker range=">= tfs-2018"

You can download NuGet packages from Azure Artifacts, NuGet.org, or some other external or internal NuGet repository.
The **.NET Core** task is especially useful to restore packages from authenticated NuGet feeds.

::: moniker-end

::: moniker range="< tfs-2018"

You can download NuGet packages from NuGet.org.

::: moniker-end

`dotnet restore` internally uses `NuGet.exe` that is packaged with the .NET Core SDK. `dotnet restore` can only restore packages specified in the .NET Core project (`.csproj`) files.
If you also have a .NET Framework project in your solution or use `package.json` to specify your dependencies, you must also use the **NuGet** task to restore those dependencies.

::: moniker range="< tfs-2018"

In .NET Core SDK version 2.0 and newer, packages are restored automatically when running other commands such as `dotnet build`.

::: moniker-end

::: moniker range=">= tfs-2018"

In .NET Core SDK version 2.0 and newer, packages are restored automatically when running other commands such as `dotnet build`.
However, you might still need to use the **.NET Core** task to restore packages if you use an authenticated feed.

::: moniker-end

::: moniker range=">= tfs-2018"

If your builds occasionally fail when restoring packages from NuGet.org due to connection issues,
you can use Azure Artifacts in conjunction with [upstream sources](../../artifacts/concepts/upstream-sources.md),
and cache the packages. The credentials of the pipeline are automatically used when connecting
to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service**
account.

If you want to specify a NuGet repository, put the URLs in a `NuGet.config` file in your repository.
If your feed is authenticated, manage its credentials by creating a NuGet service connection in the **Services** tab under **Project Settings**.

::: moniker-end

::: moniker range="vsts"

If you're using Microsoft-hosted agents, you get a new machine every time your run a build - which means restoring the packages every time.
This can take a significant amount of time. To mitigate this you can either use Azure Artifacts or a self-hosted agent, in which case
you'll get the benefit of using the package cache.

::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="vsts"
To restore packages:

```yaml
- script: dotnet restore
```

Or, to restore packages from a custom feed, use the **.NET Core** task:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: restore
    projects: '**/*.csproj'
    feedsToUse: config
    nugetConfigPath: NuGet.config    # Relative to root of the repository
    externalFeedCredentials: <Name of the NuGet service connection>
```

For more information about NuGet service connections, see [publish to NuGet feeds](../targets/nuget.md).
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

1. Select **Tasks** in the pipeline, select the job that runs your build tasks, then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **restore**.

1. Specify any other options you need for this task, then save the build.

> [!NOTE]
> 
> Make sure the custom feed is specified in your `NuGet.config` file and that credentials are specified in the NuGet service connection.

---

## Build your project

You build your .NET Core project by running `dotnet build` command in your pipeline.

# [YAML](#tab/yaml)

::: moniker range="vsts"

To build your project using .NET Core task, add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: dotnet build # Include additional options such as --configuration to meet your need
```

You can run any `dotnet` command in your pipeline. The following example shows how to install and use a .NET global tool - [dotnetsay](https://www.nuget.org/packages/dotnetsay/).

```yaml
- script: dotnet tool install -g dotnetsay
- script: dotnetsay
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

### Build

1. Select **Tasks** in the pipeline, select the job that runs your build tasks, then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **build** or **publish**.

1. Specify any other options you need for this task, then save the build.

### Install a tool

To install a .NET Core global tool such as [dotnetsay](https://www.nuget.org/packages/dotnetsay/) in your build running on Windows:

1. Add **.NET Core** task and set the following properties:
  * **Command:** custom
  * **Path to projects:** _leave empty_
  * **Custom command:** tool
  * **Arguments:** `install -g dotnetsay`

1. Add a **Command Line** task and set the following properties:
  * **Script:** `dotnetsay`

---

## Run your tests

Use the **.NET Core** task to run unit tests in your .NET Core solution using testing frameworks such as MSTest, xUnit, and NUnit.
One benefit of using this built-in task (instead of a script) to run your tests is that the results of the tests are automatically published to the server.
These results are then made available to you in the build summary and can be used for troubleshooting failed tests and test timing analysis.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration)'
```

An alternative is to run the `dotnet test` command with a specific logger, and then to use **Publish Test Results** task.

```yaml
- script: dotnet test <test-project> --logger trx
- task: PublishTestResults@2
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

Use the **.NET Core** task with **Command** set to **test**.
**Path to projects** should refer to the test projects in your solution.

---

## Collect code coverage 

If you are building on the Windows platform, code coverage metrics can be collected using the built-in coverage data collector. For this functionality the test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher. 
If you use the **.NET Core** task to run tests, coverage data is automatically published to the server. The .coverage file can be downloaded from the build summary for viewing in Visual Studio.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration) --collect "Code coverage"'
```

If you choose to run the `dotnet test` command, specify the test results logger and coverage options, and then use the [Publish Test Results](../tasks/test/publish-test-results.md) task.

```yaml
- script: dotnet test <test-project> --logger trx --collect "Code coverage"
- task: PublishTestResults@2
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

1. Add .NET Core task to your build job and set the following properties:

  * **Command:** test
  * **Path to projects:** _Should refer to the test projects in your solution_
  * **Arguments:** `--configuration $(BuildConfiguration) --collect "Code coverage"`

2. Ensure that the **Publish test results** option remains selected.

---

> [!TIP]
> If you are building on Linux or macOS, you can use [Coverlet](https://github.com/tonerdo/coverlet) or a similar tool to collect code coverage metrics.
> Code coverage results can be published to the server using the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task. To leverage this functionality, the coverage tool must be configured to generate results in Cobertura or JaCoCo coverage formats.

## Package and deliver your code

Once you have built and tested your app, you can upload the build output to Azure Pipelines or TFS, create and publish a NuGet package,
or package the build output into a zip file to be deployed to a web application.

# [YAML](#tab/yaml)

::: moniker range="vsts"

### Publish artifacts to Azure Pipelines

To simply publish the output of your build to Azure Pipelines, add the following to your `azure-pipelines.yml` file.

```yaml
- task: PublishBuildArtifacts@1
```

This will take all the files in `$(Build.ArtifactStagingDirectory)` and upload them as an artifact of your build. For this to work, you must have already published the output of your build to this directory using `dotnet publish --output $(Build.ArtifactStagingDirectory)` command. To copy additional files to this directory before publishing, see [Copy Files](../tasks/utility/copy-files.md).

### Publish to a NuGet feed

To create and publish a NuGet package, add the following snippet:

```yaml
- script: dotnet pack /p:PackageVersion=$(version)  # define version variable elsewhere in your pipeline

- task: NuGetCommand@2
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: '<Name of the NuGet service connection>'
    versioningScheme: byEnvVar
    versionEnvVar: version
```

For more information about versioning and publishing NuGet packages, see [publish to NuGet feeds](../targets/nuget.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, add the following snippet:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True
```

To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).
::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

### Publish artifacts to Azure Pipelines

To simply publish the output of your build to Azure Pipelines of TFS, use the **Publish Artifacts** task.

### Publish to a NuGet feed

If you want to publish your code to a NuGet feed:

1. Use a .NET Core task with the Command set to pack.

1. [Publish your package to a NuGet feed](../targets/nuget.md).

### Deploy a web app

1. Use a .NET Core task with the Command set to publish.

1. Make sure you've selected the option to create a .zip file archive.

1. To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).

---

## Build a container

You can build a Docker container image after you build your project. For more information, see [Docker](docker.md).

<a name="troubleshooting"></a>
## Troubleshooting

If you are able to build your project on your development machine, but are having trouble building it on Azure Pipelines or TFS, explore the following potential causes and corrective actions:

::: moniker range="vsts"
* We don't install pre-release versions of .NET Core SDK on Microsoft-hosted agents. Once a new version of .NET Core SDK is released,
  it can take a few weeks for us to roll it out to all the data centers that Azure Pipelines runs on. You don't have to wait for us to complete
  this rollout. You can use the **.NET Core Tool Installer** (as explained in this guidance) to install the desired version of .NET Core SDK
  on Microsoft-hosted agents.
::: moniker-end

* Check that the versions of the .NET Core SDK and runtime on your development machine match those on the agent.
  You can include a command line script `dotnet --version` in your pipeline to print the version of .NET Core SDK.
  Either use the **.NET Core Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or update your projects and development machine to the newer version of .NET Core SDK.

* You may be using some logic in Visual Studio IDE that is not encoded in your pipeline.
  Azure Pipelines or TFS run each of the commands you specify in the tasks one after the other in a new process.
  Look at the logs from the Azure Pipelines or TFS build to see the exact commands that ran as part of the build.
  Repeat the same commands in the same order on your development machine to locate the problem.

* If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects,
  you should also use the **NuGet** task to restore packages specified in `package.json` files.
  Similarly, you should add **MSBuild** or **Visual Studio Build** tasks to build the .NET Framework projects.

* If your builds fail intermittently while restoring packages, either NuGet.org is having issues or there are
  networking problems between the Azure data center and NuGet.org. These are not under our control, and you may
  need to explore whether using Azure Artifacts with NuGet.org as an upstream source improves the reliability
  of your builds.

* Occasionally, when we roll out an update to the hosted images with a new version of .NET Core SDK or Visual Studio,
  something may break your build. This can happen, for example, if a newer version or feature of the NuGet tool
  is shipped with the SDK. To isolate these problems, use the **.NET Core Tool Installer** task to specify the version
  of the .NET Core SDK used in your build.

## Q&A

### Where can I learn more about Azure Artifacts and the TFS Package Management service?

[Package Management in Azure Artifacts and TFS](../../artifacts/index.md)

### Where can I learn more about .NET Core commands?

[.NET Core command-line interface (CLI) tools](/dotnet/core/tools/)

### Where can I learn more about running tests in my solution?

[Unit testing in .NET Core projects](/dotnet/core/testing/)

### Where can I learn more about tasks?

[Build and release tasks](../tasks/index.md)
