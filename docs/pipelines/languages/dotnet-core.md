---
title: Build, test, and deploy .NET Core apps
description: Automatically build .NET Core apps with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.custom: seodec18
ms.date: 03/27/2019
monikerRange: '>= tfs-2017'
---

# Build, test, and deploy .NET Core apps

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

This guidance explains how to automatically build and test .NET Core projects, and then deploy or publish to targets.

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

## Example

The following code is a simple ASP.NET Core MVC project. To get started, fork this repo in GitHub, or import it into Azure Repos.

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

::: moniker range="azure-devops"

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a pipeline for the sample app.
When you're done with that topic, you'll have a working YAML file (`azure-pipeines.yml`) in your repository that you can continue to modify by following the instructions in this topic. To learn more about YAML, see [YAML schema reference](../yaml-schema.md).

> [!Tip]
> To make changes to the YAML file as described in this topic, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.

::: moniker-end

::: moniker range="< azure-devops"

* After you have the sample code in your own repository, create a pipeline by using the instructions in [Create your first pipeline](../create-first-pipeline.md) and select the **ASP.NET Core** template. This selection automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

Read through the rest of this topic to learn some of the common ways to customize your .NET Core pipeline.

::: moniker-end

## Build environment

::: moniker range="azure-devops"

You can use Azure Pipelines to build your .NET Core projects on Windows, Linux, or macOS without needing to set up any infrastructure of your own. 
The [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines have several released versions of the .NET Core SDKs preinstalled.

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-16.04' # examples of other options: 'macOS-10.13', 'vs2017-win2016'
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images.

The Microsoft-hosted agents don't include some of the older versions of the .NET Core SDK. 
They also don't typically include prerelease versions. If you need these kinds of SDKs on Microsoft-hosted agents, add the **.NET Core Tool Installer** task to the beginning of your process.

If you need a version of the .NET Core SDK that isn't already installed on the Microsoft-hosted agent, add an extra step to your `azure-pipelines.yml` file:

```yaml
# do this before all your .NET Core tasks
steps:
- task: DotNetCoreInstaller@0
  inputs:
    version: '2.1.300' # replace this value with the version that you need for your project
# ...
```

> [!TIP]
>
> As an alternative, you can set up a [self-hosted agent](../agents/agents.md#install) and save the cost of running the tool installer.
> You can also use self-hosted agents to save additional time if you have a large repository or you run incremental builds.

::: moniker-end

::: moniker range="< azure-devops"

You can build your .NET Core projects by using the .NET Core SDK and runtime on Windows, Linux, or macOS. 
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

`dotnet restore` internally uses a version of `NuGet.exe` that is packaged with the .NET Core SDK. `dotnet restore` can only restore packages specified in the .NET Core project `.csproj` files. 
If you also have a Microsoft .NET Framework project in your solution or use `package.json` to specify your dependencies, you must also use the **NuGet** task to restore those dependencies.

::: moniker range="< tfs-2018"

In .NET Core SDK version 2.0 and newer, packages are restored automatically when running other commands such as `dotnet build`.

::: moniker-end

::: moniker range=">= tfs-2018"

In .NET Core SDK version 2.0 and newer, packages are restored automatically when running other commands such as `dotnet build`.
However, you might still need to use the **.NET Core** task to restore packages if you use an authenticated feed.

::: moniker-end

::: moniker range=">= tfs-2018"

If your builds occasionally fail when restoring packages from NuGet.org due to connection issues, 
you can use Azure Artifacts in conjunction with [upstream sources](../../artifacts/concepts/upstream-sources.md) 
and cache the packages. The credentials of the pipeline are automatically used when connecting 
to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service** 
account.

If you want to specify a NuGet repository, put the URLs in a `NuGet.config` file in your repository. 
If your feed is authenticated, manage its credentials by creating a NuGet service connection in the **Services** tab under **Project Settings**.

::: moniker-end

::: moniker range="azure-devops"

If you use Microsoft-hosted agents, you get a new machine every time your run a build, which means restoring the packages every time. 
This restoration can take a significant amount of time. To mitigate this issue, you can either use Azure Artifacts or a self-hosted agent, in which case, 
you get the benefit of using the package cache.

::: moniker-end

::: moniker range="azure-devops"  

To restore packages, use the `dotnet restore` command:

```yaml
steps:
- script: dotnet restore
```

Or to restore packages from a custom feed, use the **.NET Core** task:

```yaml
# do this before your build tasks
steps:
- task: DotNetCoreCLI@2
  inputs:
    command: restore
    projects: '**/*.csproj'
    feedsToUse: config
    nugetConfigPath: NuGet.config    # Relative to root of the repository
    externalFeedCredentials: <Name of the NuGet service connection>
# ...
```

For more information about NuGet service connections, see [publish to NuGet feeds](../artifacts/nuget.md).

::: moniker-end

::: moniker range="< azure-devops"

1. Select **Tasks** in the pipeline. Select the job that runs your build tasks. Then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **restore**.

1. Specify any other options you need for this task. Then save the build.

> [!NOTE]
>
> Make sure the custom feed is specified in your `NuGet.config` file and that credentials are specified in the NuGet service connection.

::: moniker-end

## Build your project

You build your .NET Core project either by running the `dotnet build` command in your pipeline or by using the .NET Core task.

::: moniker range="azure-devops"

To build your project by using the .NET Core task, add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Build
  inputs:
    command: build
    projects: '**/*.csproj'
    arguments: '--configuration Release' # Update this to match your need
```

You can run any custom dotnet command in your pipeline. The following example shows how to install and use a .NET global tool, [dotnetsay](https://www.nuget.org/packages/dotnetsay/):

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: 'Install dotnetsay'
  inputs:
    command: custom
    projects: '**/*.csproj'
    custom: tool
    arguments: 'install -g dotnetsay'
```

::: moniker-end

::: moniker range="< azure-devops"

### Build

1. Select **Tasks** in the pipeline. Select the job that runs your build tasks. Then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **build** or **publish**.

1. Specify any other options you need for this task. Then save the build.

### Install a tool

To install a .NET Core global tool like [dotnetsay](https://www.nuget.org/packages/dotnetsay/) in your build running on Windows, take the following steps:

1. Add the **.NET Core** task and set the following properties:
   * **Command**: custom.
    * **Path to projects**: _leave empty_.
   * **Custom command**: tool.
   * **Arguments**: `install -g dotnetsay`.

2. Add a **Command Line** task and set the following properties:
   * **Script:** `dotnetsay`.

::: moniker-end

## Run your tests

If you have test projects in your repository, then use the **.NET Core** task to run unit tests by using testing frameworks like MSTest, xUnit, and NUnit. For this functionality, the test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher.
Test results are automatically published to the service. These results are then made available to you in the build summary and can be used for troubleshooting failed tests and test-timing analysis.

::: moniker range="azure-devops"

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:
# ...
# do this after other tasks such as building
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration)'
```

An alternative is to run the `dotnet test` command with a specific logger and then use the **Publish Test Results** task:

```yaml
steps:
# ...
# do this after your tests have run
- script: dotnet test <test-project> --logger trx
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

::: moniker-end

::: moniker range="< azure-devops"

Use the **.NET Core** task with **Command** set to **test**. 
**Path to projects** should refer to the test projects in your solution.

::: moniker-end


## Collect code coverage 

If you're building on the Windows platform, code coverage metrics can be collected by using the built-in coverage data collector. For this functionality, the test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher. 
If you use the **.NET Core** task to run tests, coverage data is automatically published to the server. The **.coverage** file can be downloaded from the build summary for viewing in Visual Studio.

::: moniker range="azure-devops"

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:
# ...
# do this after other tasks such as building
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration) --collect "Code coverage"'
```

If you choose to run the `dotnet test` command, specify the test results logger and coverage options. Then use the [Publish Test Results](../tasks/test/publish-test-results.md) task:

```yaml
steps:
# ...
# do this after your tests have run
- script: dotnet test <test-project> --logger trx --collect "Code coverage"
- task: PublishTestResults@2
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

::: moniker-end

::: moniker range="< azure-devops"

1. Add the .NET Core task to your build job and set the following properties:

   * **Command**: test.
   * **Path to projects**: _Should refer to the test projects in your solution_.
   * **Arguments**: `--configuration $(BuildConfiguration) --collect "Code coverage"`.

2. Ensure that the **Publish test results** option remains selected.

::: moniker-end

> [!TIP]
> If you're building on Linux or macOS, you can use [Coverlet](https://github.com/tonerdo/coverlet) or a similar tool to collect code coverage metrics.
> Code coverage results can be published to the server by using the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task. To leverage this functionality, the coverage tool must be configured to generate results in Cobertura or JaCoCo coverage format.

## Package and deliver your code

After you've built and tested your app, you can upload the build output to Azure Pipelines or TFS, create and publish a NuGet package, 
or package the build output into a .zip file to be deployed to a web application.

::: moniker range="azure-devops"

### Publish artifacts to Azure Pipelines

To simply publish the output of your build to Azure Pipelines, add the following code to your `azure-pipelines.yml` file:

```yaml
steps:
# ...
# do this near the end of your pipeline in most cases
- task: PublishBuildArtifacts@1
```

This code takes all the files in `$(Build.ArtifactStagingDirectory)` and upload them as an artifact of your build. For this task to work, you must have already published the output of your build to this directory by using the `dotnet publish --output $(Build.ArtifactStagingDirectory)` command. To copy additional files to this directory before publishing, see [Utility: copy files](../tasks/utility/copy-files.md).

### Publish to a NuGet feed

To create and publish a NuGet package, add the following snippet:

```yaml
steps:
# ...
# do this near the end of your pipeline in most cases
- script: dotnet pack /p:PackageVersion=$(version)  # define version variable elsewhere in your pipeline
- task: NuGetCommand@2
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: '<Name of the NuGet service connection>'
    versioningScheme: byEnvVar
    versionEnvVar: version
```

For more information about versioning and publishing NuGet packages, see [publish to NuGet feeds](../artifacts/nuget.md).

### Deploy a web app

To create a .zip file archive that's ready for publishing to a web app, add the following snippet:

```yaml
steps:
# ...
# do this after you've built your app, near the end of your pipeline in most cases
# for example, you do this before you deploy to an Azure web app on Windows
- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True
```

To publish this archive to a web app, see [Azure Web Apps deployment](../targets/webapp.md).  

::: moniker-end

::: moniker range="< azure-devops"

### Publish artifacts to Azure Pipelines

To simply publish the output of your build to Azure Pipelines or TFS, use the **Publish Artifacts** task.

### Publish to a NuGet feed

If you want to publish your code to a NuGet feed, take the following steps:

1. Use a .NET Core task with **Command** set to pack.

1. [Publish your package to a NuGet feed](../artifacts/nuget.md).

### Deploy a web app

1. Use a .NET Core task with **Command** set to publish.

1. Make sure you've selected the option to create a .zip file archive.

1. To publish this archive to a web app, see [Azure Web Apps deployment](../targets/webapp.md).

::: moniker-end

## Build a container

You can build a Docker container image after you build your project. For more information, see [Docker](docker.md).

<a name="troubleshooting"></a>
## Troubleshooting

If you're able to build your project on your development machine, but you're having trouble building it on Azure Pipelines or TFS, explore the following potential causes and corrective actions:

::: moniker range="azure-devops"
* We don't install prerelease versions of the .NET Core SDK on Microsoft-hosted agents. After a new version of the .NET Core SDK is released, 
it can take a few weeks for us to roll it out to all the datacenters that Azure Pipelines runs on. You don't have to wait for us to finish 
this rollout. You can use the **.NET Core Tool Installer**, as explained in this guidance, to install the desired version of the .NET Core SDK 
on Microsoft-hosted agents.  

::: moniker-end

* Check that the versions of the .NET Core SDK and runtime on your development machine match those on the agent. 
You can include a command-line script `dotnet --version` in your pipeline to print the version of the .NET Core SDK. 
Either use the **.NET Core Tool Installer**, as explained in this guidance, to deploy the same version on the agent, 
or update your projects and development machine to the newer version of the .NET Core SDK.

* You might be using some logic in the Visual Studio IDE that isn't encoded in your pipeline. 
Azure Pipelines or TFS runs each of the commands you specify in the tasks one after the other in a new process. 
Look at the logs from the Azure Pipelines or TFS build to see the exact commands that ran as part of the build. 
Repeat the same commands in the same order on your development machine to locate the problem.

* If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects, 
  you should also use the **NuGet** task to restore packages specified in `packages.config` files.
Similarly, you should add **MSBuild** or **Visual Studio Build** tasks to build the .NET Framework projects.

* If your builds fail intermittently while restoring packages, either NuGet.org is having issues, or there are 
networking problems between the Azure datacenter and NuGet.org. These aren't under our control, and you might 
need to explore whether using Azure Artifacts with NuGet.org as an upstream source improves the reliability of your builds.

* Occasionally, when we roll out an update to the hosted images with a new version of the .NET Core SDK or Visual Studio, 
something might break your build. This can happen, for example, if a newer version or feature of the NuGet tool 
is shipped with the SDK. To isolate these problems, use the **.NET Core Tool Installer** task to specify the version 
of the .NET Core SDK that's used in your build.

## Q&A

### Where can I learn more about Azure Artifacts and the TFS Package Management service?

[Package Management in Azure Artifacts and TFS](../../artifacts/index.md)

### Where can I learn more about .NET Core commands?

[.NET Core CLI tools](/dotnet/core/tools/)

### Where can I learn more about running tests in my solution?

[Unit testing in .NET Core projects](/dotnet/core/testing/)

### Where can I learn more about tasks?

[Build and release tasks](../tasks/index.md)
