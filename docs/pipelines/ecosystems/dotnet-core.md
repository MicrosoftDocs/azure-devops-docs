---
title: Build, test, and deploy .NET Core apps
description: Use .NET Core to build apps with Azure Pipelines, Azure DevOps, & Team Foundation Server.
ms.topic: conceptual
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.reviewer: vijayma
ms.date: 11/02/2022
ms.custom: contperf-fy20q4, freshness-fy22q2, content-freshness, devx-track-dotnet
monikerRange: '<= azure-devops'
---

# Build, test, and deploy .NET Core apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use a pipeline to automatically build and test your .NET Core projects. Learn how to do the following tasks:

* Set up your build environment with [Microsoft-hosted](../agents/hosted.md) or [self-hosted](../agents/agents.md) agents.
* Restore dependencies, build your project, and test with the [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) or a [script](../scripts/cross-platform-scripting.md).
* Use the [publish code coverage task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) to publish code coverage results.
* Package and deliver your code with the [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) and the [publish build artifacts task](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1).
* Publish to a [NuGet feed](../artifacts/nuget.md).
* Deploy your [web app to Azure](../targets/webapp.md).

> [!NOTE]
> For help with .NET Framework projects, see [Build ASP.NET apps with .NET Framework](../apps/aspnet/build-aspnet-4.md).

[!INCLUDE [temp](../includes/concept-rename-note.md)]


## Create your first pipeline

::: moniker range=">=azure-devops-2020"

Are you new to Azure Pipelines? If so, then we recommend you try the following section first.

::: moniker-end

[!INCLUDE [include](../includes/dotnet-setup.md)]

::: moniker range=">=azure-devops-2020"

### Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

::: moniker-end

### Create the pipeline

::: moniker range=">=azure-devops-2020"

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **ASP.NET Core**.

1. Examine your new pipeline to see what the YAML does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

2. Commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   Because your code appeared to be a good match for the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) template, we automatically created the pipeline for you.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

3. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

Read further to learn some of the more common ways to customize your pipeline.

::: moniker-end

::: moniker range="azure-devops-2019"

### YAML

1. Add an `azure-pipelines.yml` file in your repository. Customize the following snippet for your build. 

```yaml
trigger:
- main

pool: Default

variables:
  buildConfiguration: 'Release'

# do this before all your .NET Core tasks
steps:
- task: DotNetCoreInstaller@2
  inputs:
    version: '2.2.402' # replace this value with the version that you need for your project
- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'dotnet build $(buildConfiguration)'
```
2. [Create a pipeline](../create-first-pipeline.md) and select the **YAML** template.

3. Set the **Agent pool** and **YAML file path** for your pipeline. 

4. Save the pipeline and queue a build. When the **Build #nnnnnnnn.n has been queued** message appears, select the number link to see your pipeline in action.

5. When you're ready to make changes to your pipeline, **Edit** it.

Read further to learn some of the more common ways to customize your pipeline.

::: moniker-end

::: moniker range="< azure-devops" 

### Classic

1. [Create a pipeline](../create-first-pipeline.md) and select the **Empty Pipeline** template. 

2. In the task catalog, find and add the **.NET Core** task. The following task runs `dotnet build` to build the code in the sample repository.

3. Save the pipeline and queue a build. When the **Build #nnnnnnnn.n has been queued** message appears, select the number link to see your pipeline in action.

   You now have a working pipeline that's ready for you to customize!

4. When you're ready to make changes to your pipeline, **Edit** it.

Read further to learn some of the more common ways to customize your pipeline.

::: moniker-end

## Build environment

::: moniker range=">=azure-devops-2020"

Use Azure Pipelines to build your .NET Core projects. Build your projects on Windows, Linux, or macOS without the need to set up infrastructure. The [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines include several preinstalled versions of the .NET Core SDKs.

Ubuntu is set here in the YAML file.  

```yaml
pool:
  vmImage: 'ubuntu-latest' 
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images and [Pool](/azure/devops/pipelines/yaml-schema/pool) for further examples.

The Microsoft-hosted agents don't include some of the older versions of the .NET Core SDK. 
They also don't typically include prerelease versions. If you need these kinds of SDKs on Microsoft-hosted agents, add the [UseDotNet@2](/azure/devops/pipelines/tasks/reference/use-dotnet-v2) task to your YAML file.

To install 6.0.x SDK for building, add the following snippet:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '6.x'
```

Windows agents already include a .NET Core runtime. To install a newer SDK, set `performMultiLevelLookup` to `true` in the following snippet: 

```yaml
steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 6.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions
```

> [!TIP]
> To save the cost of running the tool installer, you can set up a [self-hosted agent](../agents/agents.md#install). See [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Windows](../agents/windows-agent.md). 
> You can also use self-hosted agents to save additional time if you have a large repository or you run incremental builds. A self-hosted agent can also help you in using the preview or private SDKs that aren't officially supported by Azure DevOps or you have available on your corporate or on-premises environments only. 

::: moniker-end

::: moniker range="< azure-devops"

You can build your .NET Core projects by using the .NET Core SDK and runtime on Windows, Linux, or macOS. Your builds run on a [self-hosted agent](../agents/agents.md#install). 
Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agent.

::: moniker-end

## Restore dependencies

NuGet is a popular way to depend on code that you don't build. You can download NuGet packages and project-specific tools that are specified in the project file by running the `dotnet restore` command either through the [.NET Core](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task or directly in a script in your pipeline.

::: moniker range=">= tfs-2018"

You can download NuGet packages from Azure Artifacts, NuGet.org, or some other external or internal NuGet repository. The **.NET Core** task is especially useful to restore packages from authenticated NuGet feeds. If your feed is in the same project as your pipeline, you do not need to authenticate. 

This pipeline uses an artifact feed for `dotnet restore` in the [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2). 

```yaml
trigger:
- main

pool:
  vmImage: 'windows-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: DotNetCoreCLI@2
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    vstsFeed: 'my-vsts-feed' # A series of numbers and letters

- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
    arguments: '--configuration $(buildConfiguration)'
  displayName: 'dotnet build $(buildConfiguration)'
```

::: moniker-end

::: moniker range="tfs-2018"

You can download NuGet packages from NuGet.org.

::: moniker-end

`dotnet restore` internally uses a version of `NuGet.exe` that's packaged with the .NET Core SDK. `dotnet restore` can only restore packages specified in the .NET Core project `.csproj` files. 
If you also have a Microsoft .NET Framework project in your solution or use `package.json` to specify your dependencies, use the **NuGet** task to restore those dependencies.

::: moniker range="tfs-2018"

In .NET Core SDK version 2.0 and newer, packages get restored automatically when running other commands such as `dotnet build`.

::: moniker-end

::: moniker range=">= tfs-2018"

In .NET Core SDK version 2.0 and newer, packages get restored automatically when running other commands such as `dotnet build`. However, you might still need to use the **.NET Core** task to restore packages if you use an authenticated feed.

::: moniker-end

::: moniker range=">= tfs-2018"

Your builds may sometimes fail because of connection issues when you restore packages from NuGet.org. You can use Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md) and cache the packages. The credentials of the pipeline get automatically used when it connects to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service** account.

If you want to specify a NuGet repository, put the URLs in a `NuGet.config` file in your repository. 
If your feed is authenticated, manage its credentials by creating a NuGet service connection in the **Services** tab under **Project Settings**.

::: moniker-end

::: moniker range=">=azure-devops-2020"

If you use Microsoft-hosted agents, you get a new machine every time your run a build, which means restoring the packages every time. Restoration can take a significant amount of time. To mitigate, you can either use Azure Artifacts or a self-hosted agent with the benefit of using the package cache.

::: moniker-end

::: moniker range=">=azure-devops-2020"

To restore packages from an external custom feed, use the following **.NET Core** task:

```yaml
# do this before your build tasks
steps:
- task: DotNetCoreCLI@2
  displayName: Restore
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

1. Select **Tasks** in the pipeline. Select the job that runs your build tasks. Then, select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **restore**.

1. Specify any other options you need for this task. Then save the build.

> [!NOTE]
> Make sure the custom feed is specified in your `NuGet.config` file and that credentials are specified in the NuGet service connection.

::: moniker-end

## Build your project

You build your .NET Core project either by running the `dotnet build` command in your pipeline or by using the .NET Core task.

::: moniker range=">=azure-devops-2020"

To build your project by using the .NET Core task, add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Build
  inputs:
    command: build
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration)' # Update this to match your need
```

You can run any custom dotnet command in your pipeline. The following example shows how to install and use a .NET global tool, [dotnetsay](https://www.nuget.org/packages/dotnetsay/):

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: 'Install dotnetsay'
  inputs:
    command: custom
    custom: tool
    arguments: 'install -g dotnetsay'
```

::: moniker-end

::: moniker range="< azure-devops"

### Build

1. Select **Tasks** in the pipeline. Select the job that runs your build tasks. Then select **+** to add a new task to that job.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **build** or **publish**.

1. Specify any other options you need for this task, and then save the build.

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

If you have test projects in your repository, then use the **.NET Core** task to run unit tests by using testing frameworks like MSTest, xUnit, and NUnit.The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher.
Test results get automatically published to the service. These results are available to you in the build summary and can be used for troubleshooting failed tests and test-timing analysis.

::: moniker range=">=azure-devops-2020"

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

If you're building on the Windows platform, code coverage metrics can be collected by using the built-in coverage data collector. The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher. 
If you use the **.NET Core** task to run tests, coverage data is automatically published to the server. The **.coverage** file can be downloaded from the build summary for viewing in Visual Studio.

::: moniker range=">=azure-devops-2020"

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

If you choose to run the `dotnet test` command, specify the test results logger and coverage options. Then use the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task:

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


### Collect code coverage metrics with Coverlet

If you're building on Linux or macOS, you can use [Coverlet](https://github.com/tonerdo/coverlet) or a similar tool to collect code coverage metrics.

You can publish code coverage results to the server with the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) task. The coverage tool must be configured to generate results in Cobertura or JaCoCo coverage format.

To run tests and publish code coverage with Coverlet, do the following tasks:

* Add a reference to the `coverlet.msbuild` NuGet package in your test project(s) for .NET projects below .NET 5. For .NET 5, add a reference to the  `coverlet.collector` NuGet package.
* Add the following snippet to your `azure-pipelines.yml` file:


# [.NET >= 5](#tab/dotnetfive)

  ```yaml
  - task: UseDotNet@2
    inputs:
      version: '6.x'
      includePreviewVersions: true # Required for preview versions
    
  - task: DotNetCoreCLI@2
    displayName: 'dotnet build'
    inputs:
      command: 'build'
      configuration: $(buildConfiguration)
    
  - task: DotNetCoreCLI@2
    displayName: 'dotnet test'
    inputs:
      command: 'test'
      arguments: '--configuration $(buildConfiguration) --collect:"XPlat Code Coverage" -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=cobertura'
      publishTestResults: true
      projects: 'MyTestLibrary' # update with your test project directory
    
  - task: PublishCodeCoverageResults@1
    displayName: 'Publish code coverage report'
    inputs:
      codeCoverageTool: 'Cobertura'
      summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'
  ```

# [.NET < 5](#tab/netearlierversions)

  ```yaml
  - task: DotNetCoreCLI@2
    displayName: 'dotnet test'
    inputs:
      command: 'test'
      arguments: '--configuration $(buildConfiguration) --collect:"XPlat Code Coverage" -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=cobertura'
      publishTestResults: true
      projects: '**/test-library/*.csproj' # update with your test project directory

  - task: PublishCodeCoverageResults@1
    displayName: 'Publish code coverage report'
    inputs:
      codeCoverageTool: 'Cobertura'
      summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'
  ```

---

 
## Package and deliver your code

Upload the build output to Azure Pipelines. You can create and publish a NuGet package, or package the build output into a .zip file to deploy to a web application.

::: moniker range=">=azure-devops-2020"

### Publish artifacts to Azure Pipelines

To publish the output of your .NET **build**, do the following tasks: 

* Run `dotnet publish --output $(Build.ArtifactStagingDirectory)` on CLI or add the DotNetCoreCLI@2 task with publish command.
* Publish the artifact by using Publish artifact task.

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:

- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True

# this code takes all the files in $(Build.ArtifactStagingDirectory) and uploads them as an artifact of your build.
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Build.ArtifactStagingDirectory)' 
    artifactName: 'myWebsiteName'

```

> [!NOTE]
> The `dotNetCoreCLI@2` task has a `publishWebProjects` input that is set to **true** by default. This task publishes _all_ web projects in your repo by default. You can find more help and information in the [open source task on GitHub](https://github.com/microsoft/azure-pipelines-tasks).

To copy more files to Build directory before publishing, use [Utility: copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2).

### Publish to a NuGet feed

To create and publish a NuGet package, add the following snippet:

```yaml
steps:
# ...
# do this near the end of your pipeline in most cases
- script: dotnet pack /p:PackageVersion=$(version)  # define version variable elsewhere in your pipeline
- task: NuGetAuthenticate@0
  input:
    nuGetServiceConnections: '<Name of the NuGet service connection>'
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

Use the **Publish Artifacts** task to publish the output of your build to Azure Pipelines.

### Publish to a NuGet feed

If you want to publish your code to a NuGet feed, take the following steps:

1. Use a .NET Core task with **Command** set to pack.

1. [Publish your package to a NuGet feed](../artifacts/nuget.md).

### Deploy a web app

1. Use a .NET Core task with **Command** set to publish.

1. Make sure you've selected the option to create a .zip file archive.

1. To publish this archive to a web app, see [Azure Web Apps deployment](../targets/webapp.md).

::: moniker-end

## Build an image and push to container registry

For your app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).

<a name="troubleshooting"></a>

## Troubleshoot

If you can build your project on your development machine, but you're having trouble building it on Azure Pipelines, explore the following potential causes and corrective actions:

::: moniker range=">=azure-devops-2020"

* We don't install prerelease versions of the .NET Core SDK on Microsoft-hosted agents. After a new version of the .NET Core SDK gets released, it can take a few weeks to roll out to all the Azure Pipelines data centers. You don't have to wait for this rollout to complete. You can use the [**.NET Core Tool Installer**](#yaml) to install the version you want of the .NET Core SDK on Microsoft-hosted agents.  

::: moniker-end

* Check the .NET Core SDK versions and runtime on your development machine and make sure they match the agent. You can include a command-line script `dotnet --version` in your pipeline to print the version of the .NET Core SDK. Either use the [**.NET Core Tool Installer**](#yaml) to deploy the same version on the agent, or update your projects and development machine to the newer version of the .NET Core SDK.

* You might be using some logic in the Visual Studio IDE that isn't encoded in your pipeline. 
Azure Pipelines runs each of the commands you specify in the tasks one after the other in a new process. 
Examine the logs from the pipelines build to see the exact commands that ran as part of the build. 
Repeat the same commands in the same order on your development machine to locate the problem.

* If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects, 
  you should also use the **NuGet** task to restore packages specified in `packages.config` files.
Add the **MSBuild** or **Visual Studio Build** task to build the .NET Framework projects.

* Your builds might fail intermittently while restoring packages: either NuGet.org is having issues, or there are networking problems between the Azure data center and NuGet.org. You may want to explore whether using Azure Artifacts with NuGet.org as an upstream source improves the reliability of your builds, as it's not in our control.

* Occasionally, when we roll out a new version of the .NET Core SDK or Visual Studio, your build might break. For example, if a newer version or feature of the NuGet tool gets shipped with the SDK. To isolate this issue, use the **.NET Core Tool Installer** task to specify the version of the .NET Core SDK that's used in your build.

## FAQ

### Q: Where can I learn more about Azure Artifacts and the TFS Package Management service?

A: [Package Management in Azure Artifacts](../../artifacts/index.yml)

### Q: Where can I learn more about .NET Core commands?

A: [.NET Core CLI tools](/dotnet/core/tools/)

### Q: Where can I learn more about running tests in my solution?

A: [Unit testing in .NET Core projects](/dotnet/core/testing/)

### Q: Where can I learn more about tasks?

A: [Build and release tasks](../tasks/index.md)
