---
title: Build, test, and deploy .NET Core apps
description: Use .NET Core to build apps with Azure Pipelines.
ms.topic: how-to
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.reviewer: vijayma
ms.date: 08/05/2025
ms.custom: freshness-fy22q2, content-freshness, devx-track-dotnet
monikerRange: "<=azure-devops"
---

# Build, test, and deploy .NET Core apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to use Azure Pipelines to work with .NET Core projects. The article walks you through the following tasks:

::: moniker range="<=azure-devops-2022"

- Create a .NET Core web app and upload it to a GitHub repository.
- Create an Azure DevOps project and Azure Pipelines pipeline to build the project.
- Set up your build environment with [self-hosted](../agents/agents.md) agents.
- Restore dependencies, build your project, and test with the .NET Core [DotNetCoreCLI@2](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task or a [script](../scripts/cross-platform-scripting.md).
- Use the [publish code coverage task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) to publish code coverage results.
- Package and deliver your build output to your pipeline, a [NuGet feed](../artifacts/nuget.md), and a *.zip* for deployment to an [Azure web app](../targets/webapp.md).
::: moniker-end

::: moniker range=">= azure-devops"

- Create a .NET Core web app and upload it to a GitHub repository.
- Create an Azure DevOps project and Azure Pipelines pipeline to build the project.
- Set up your build environment with [Microsoft-hosted](../agents/hosted.md) or [self-hosted](../agents/agents.md) agents.
- Restore dependencies, build your project, and test with the .NET Core [DotNetCoreCLI@2](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task or a [script](../scripts/cross-platform-scripting.md).
- Use the [publish code coverage task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) to publish code coverage results.
- Package and deliver your build output to your pipeline, a [NuGet feed](../artifacts/nuget.md), and a ZIP file for deployment to an [Azure web app](../targets/webapp.md).

::: moniker-end

> [!NOTE]
> To work with .NET Framework projects, see [Build ASP.NET apps with .NET Framework](../apps/aspnet/build-aspnet-4.md).

## Prerequisites

::: moniker range=">=azure-devops"

To complete all the procedures in this article, you need the following prerequisites:

- An Azure DevOps organization. You can [create one for free](../get-started/pipelines-sign-up.md).
- Membership in the organization [Project Administrators group](../../organizations/security/change-project-level-permissions.md), to create Azure DevOps projects and grant project access to pipelines. Azure DevOps Organization owners automatically have this membership.
- An Azure DevOps project in the organization. For instructions, see [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- The ability to run pipelines on Microsoft-hosted agents, by requesting a free tier of parallel jobs. The request can take several business days to process. For more information, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md).
- The **Administrator** or **Creator** role for [service connections](../library/add-resource-protection.md), which you can assign as a Project Administrator.
- A [GitHub](https://github.com) account and repository.

::: moniker-end

::: moniker range="< azure-devops"

To complete all the procedures in this article, you need the following prerequisites:

- An Azure DevOps collection.
- An Azure DevOps project created in the organization. For instructions, see [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- Membership in the organization [Project Administrators group](../../organizations/security/change-project-level-permissions.md), to create Azure DevOps projects and grant project access to pipelines. Azure DevOps Organization owners automatically have this membership.
- The **Administrator** or **Creator** role for [service connections](../library/add-resource-protection.md), which you can assign as a Project Administrator.
- A [GitHub](https://github.com) account and repository.

::: moniker-end

## Create a .NET project and upload it to GitHub

If you already have a .NET project uploaded to your GitHub repository, you can skip this section. [!INCLUDE [include](../includes/dotnet-setup.md)]

## Create a pipeline

If you already have a pipeline in your repository, you can skip this section. Otherwise, you can use the Azure Pipelines YAML pipeline editor or Classic editor to create a pipeline as follows.

# [YAML](#tab/yaml-editor)

::: moniker range=">=azure-devops"

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

1. On the **Configure** tab, select **Show more** and select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list.

1. On the **Review pipeline** tab, examine the YAML code to see what it does. You can customize the YAML file for your requirements. For example, you could specify the agent pool or add a [task to install a different .NET SDK](#build-environment).

::: moniker-end

::: moniker range="< azure-devops"

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.
1. Select **New pipeline** or **Create pipeline** if this is the first pipeline in the project.
1. Select your source repository type. For this example, use **GitHub Enterprise Server**.
1. On the next screen, enter the following information:
   - Enter the URL for your GitHub account. For example, `https://github.com/<username>`.
   - Enter your personal access token for your GitHub account.
   - Enter a Service connection name. For example, `my-github`.
1. Select **Create**.
1. Select your GitHub repository.
1. On the **Configure** tab, select **Show more** and select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list.
1. Examine your new pipeline to see what the YAML does. You can customize the YAML file for your requirements. For example, you can add tasks to install a .NET SDK or to test and publish your project.

::: moniker-end
<!--::: moniker range=">= azure-devops-2020 <= azure-devops-2022"-->

1. When you're ready, select **Save and run**.

   ![Screenshot that shows the Save and run button in a new YAML pipeline.](media/save-and-run-button-new-yaml-pipeline.png)

1. Optionally edit the **Commit message**, and then select **Save and run** again.
1. On the **Summary** tab, select the job in the **Jobs** section to watch your pipeline in action.

# [Classic](#tab/classic-editor)

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.
1. Select **New pipeline** or **Create pipeline** if this is the first pipeline in the project.
1. On the **Where is your code** screen, select the link in **Use the classic editor to create a pipeline without YAML**.
   >[!NOTE]
   >The ability to create Classic pipelines is turned off by default for new Azure DevOps organizations and projects. If you don't see the option to use the Classic editor, turn off the **Disable creation of new Classic pipelines** option in **Organization Settings**> **Pipelines** and/or **Project settings**> **Pipelines**.

::: moniker range="< azure-devops"

1. Select your source. For this example, select **GitHub Enterprise Server**.
1. Select **Connect to GitHub Enterprise Server**.
1. Enter your GitHub credentials to create a GitHub service connection to use in your pipeline.
1. Select your repository and select **Continue**.

::: moniker-end

::: moniker range=">= azure-devops"

1. Under **Select a source**, select **GitHub**.
1. Provide a **Connection name**, and then select **Authorize using OAuth**. You can also select to **Authorize with a GitHub personal access token**.
1. Provide your GitHub repository organization and name, and your default branch, usually *main*.
1. Select **Continue**.

::: moniker-end

1. From **Select a template**, search for and select **ASP.NET Core**, and then select **Apply**. The pipeline page opens where you can add tasks, specify the agent pools and agents, and configure other build options.
1. In the **Tasks** tab, under **Agent pool**, select **Azure Pipelines**.
1. Under **Agent Specification**, select **windows-latest** for this example.

   **Agent job 1** currently contains the tasks **Restore**, **Build**, **Test**, **Publish**, and **Publish Artifacts**. You can add other tasks to **Agent job 1** by selecting **+** on job and selecting another task from the list. For example, you could add the **Use .NET Core** task as the first task to install a different version of the .NET SDK.

::: moniker range=">=azure-devops"

1. Select **Save and queue** > **Save and queue** at the top of the page.
1. In **Run pipeline**, enter a **Save comment** and then select **Save and Run**.
1. On the **Summary** tab, select the job in the **Jobs** section to watch your pipeline in action.

::: moniker-end

::: moniker range="< azure-devops-2022"

1. From the **Save & queue** dropdown list, select **Save and queue** .
1. From the **Save build pipeline and queue** dialog, select **Save and queue**.

When the **Build #nnnnnnnn.n has been queued** message appears, select the link to see your pipeline in action.

::: moniker-end

::: moniker range="azure-devops-2022"

1. From the **Save & queue** dropdown list at the top of the page, select **Save and queue** .
1. On the **Run pipeline** dialog, add a **Save comment** and select **Save and run**.

You can see your pipeline in action by selecting the job from the **Jobs** section on the **Summary** tab.

::: moniker-end

---

You now have a working pipeline that's ready to customize.

### Set up your build environment

::: moniker range="<=azure-devops-2022"

Your builds run on [self-hosted agents](../agents/agents.md#install). Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agents. You can build your .NET Core projects by using the .NET Core SDK and runtime on [Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), and [Docker](../agents/docker.md). 

You can install a specific version of .NET SDK by adding the UseDotNet@2 task in your pipeline YAML file or add the task to your pipeline using the classic editor.

Example YAML snippet:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '8.x'
```

Azure Pipelines uses self-hosted agents to build your .NET Core projects. Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agents. You can build your .NET Core projects by using the .NET Core SDK and runtime on [Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), and [Docker](../agents/docker.md).

For example, to select a pool and agent capabilities in the pipeline YAML file:  

You can select the agent pool and agent for your build job. Agents are specified based on their capabilities.

```yml
pool:
  name: myPrivateAgents
  demands:
  - agent.os -equals Darwin
  - anotherCapability -equals somethingElse
```

You can install a specific version of .NET SDK by adding the UseDotNet@2 task in your pipeline. Keep in mind that for agents that run on physical systems, installing SDKs and tools through your pipeline alters the build environment on the agent's host.

To install a newer SDK, set `performMultiLevelLookup` to `true` in the following snippet: 

```yaml
steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 8.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions
```

::: moniker-end

::: moniker range=">=azure-devops"

Your builds run on [Microsoft-hosted agents](../agents/hosted.md). You can build your .NET Core projects by using the .NET Core SDK and runtime on Windows, Linux, and macOS.

Alternatively, you can use a [self-hosted agent](../agents/agents.md). With a self-hosted agent, you can use preview or private SDKs not officially supported by Azure DevOps Services and run incremental builds.

You can use Azure Pipelines to build your .NET Core projects on Windows, Linux, or macOS without the need to set up infrastructure. 

For example, Ubuntu is set here in the pipeline YAML file.  

```yaml
pool:
  vmImage: 'ubuntu-latest' 
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images and further configuration examples.

The [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines include several preinstalled versions of supported .NET Core SDKs. Microsoft-hosted agents don't include some of the older versions of the .NET Core SDK. They also don't typically include prerelease versions. If you need these versions of the SDK on Microsoft-hosted agents, install them using the [UseDotNet@2](/azure/devops/pipelines/tasks/reference/use-dotnet-v2) task.

For example, to install 5.0.x SDK, add the following snippet:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '5.x'
```

Windows agents already include a .NET Core runtime. To install a newer SDK, set `performMultiLevelLookup` to `true` in the following snippet: 

```yaml
steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 8.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions
```

> [!TIP]
> To save the cost of running the tool installer, you can set up a [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Windows](../agents/windows-agent.md) [self-hosted agent](../agents/agents.md#install).
> You can also use self-hosted agents to save time if you have a large repository or you run incremental builds. A self-hosted agent can also help you in using the SDKs that aren't included in Azure DevOps or are only available on your corporate or on-premises environments. 

::: moniker-end

## Restore dependencies

NuGet is a popular way to depend on code that you don't build. You can download NuGet packages and project-specific tools that are specified in the project file by running the `dotnet restore` command either through the **.NET Core** task or directly in a script in your pipeline. For more information, see  [.NET Core task (DotNetCoreCLI@2)](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2).

You can download NuGet packages from Azure Artifacts, NuGet.org, or some other external or internal NuGet repository. The **.NET Core** task is especially useful to restore packages from authenticated NuGet feeds. If your feed is in the same project as your pipeline, you don't need to authenticate. 

This pipeline uses an Azure Artifact feed for `dotnet restore` in the **DotNetCoreCLI@2** task. 

```yaml
trigger:
- main

pool:
  vmImage: 'windows-latest'

steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 8.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions

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

The `dotnet restore` command uses the `NuGet.exe` packaged with the .NET Core SDK and can only restore packages specified in the .NET Core project `.csproj` files. 

If you also have a Microsoft .NET Framework project in your solution or use `package.json` to specify your dependencies, use the **NuGet** task to restore those dependencies.

```yaml
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'
    feedsToUse: 'select'
```

> [!NOTE]
> If you're using Ubuntu 24.04 or higher, you must use the `NuGetAuthenticate` task with the .NET CLI instead of the `NuGetCommand@2` task. For more information, see [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images).

In .NET Core SDK version 2.0 and newer, packages are restored automatically when running commands such as `dotnet build`. However, you would still need to use the **.NET Core** task to restore packages if you use an authenticated feed.

Your builds can fail because of connection issues when you restore packages from NuGet.org. You can use Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md) to cache the packages. The credentials of the pipeline are automatically used when it connects to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service** account. To learn more about using Azure Artifacts to cache your NuGet packages, see [Connect to Azure Artifact feeds](../../artifacts/nuget/nuget-exe.md).

To specify a NuGet repository, put the URL in a `NuGet.config` file in your repository. If your feed is authenticated, manage its credentials by creating a NuGet service connection in the **Services** tab under **Project Settings**.

::: moniker range=">=azure-devops"

When you use Microsoft-hosted agents, you get a new machine every time you run a build, which restores the packages with each run. Restoration can take a significant amount of time. To mitigate, you can either use Azure Artifacts or a self-hosted agent with the benefit of using the package cache.

::: moniker-end

For more information about NuGet service connections, see [publish to NuGet feeds](../artifacts/nuget.md).

### Restore packages from an external feed

Do the following to restore packages from an external feed.

# [YAML](#tab/yaml-editor)

You can add the restore command to your pipeline using the YAML pipeline editor by directly inserting the following snippet into your `azure-pipelines.yml` file or using the task assistant to add the **.NET Core** task.

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
```
 Replace the \<placeholder\> with your service connection name.

To use the task assistant:

To add a build task using the task assistant, do the following steps:

1. Go to the position in the YAML file where you want to insert the task.

1. Select the **.NET Core** from the task catalog.
1. Select the **restore** command from the **Command** dropdown list.  
1. In the **Path to project(s)** field, enter the path to your `.csproj` files.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

Use these steps to add a restore task using the classic editor:

1. Select **Tasks** in your pipeline and select the job that runs your build tasks. 

1. Select **+** to add a new task to that job.
1. In the task catalog, find and select **.NET Core** task and select **Add**.
1. Select the task to open the task editor.
1. Select **restore** in the **Command** list and specify any other options you need for this task.
1. In the task list, drag the task to position it before the build task.
1. From the **Save & queue** dropdown list, select an option to save the change.

---

> [!NOTE]
> Make sure the custom feed is specified in your `NuGet.config` file and that credentials are specified in the NuGet service connection.

## Build your project

Build your .NET Core projects by running the `dotnet build` command. You can add the command to your pipeline as a command line script or by using the .NET Core task.

### Build with the .NET Core task

YAML example to build using the DotNetCoreCLI@2 task:

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Build
  inputs:
    command: build
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration)' # Update this to match your needs
```

# [YAML](#tab/yaml-editor)

You can add a build task using the YAML pipeline editor by directly editing the file or adding the **.NET Core** task using the task assistant.

To add a build task using the task assistant, do the following steps:

1. Go to the position in the YAML file where you want to insert the task.

1. Select the **.NET Core** from the task catalog.
1. Select the **build** command from the **Command** dropdown list.  
1. In the **Path to project(s)** field, enter the path to your `.csproj` files.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

To add a build task using  the classic editor, do the following steps:

1. Select **Tasks** in your pipeline. 

1. Select the job that runs your build tasks. 
1. Select **+** to add a new task to that job.
1. In the task catalog, find and add the **.NET Core** task.
1. Select the task and select **build** from the **Command** dropdown list.
1. In the **Path to project(s)** field, enter the path to your `.csproj` files.
1. Drag the task to position it in the correct task sequence in the pipeline.
1. Select the **Save and queue** dropdown list and select an option to save your changes.

---

### Build .NET Core with a command line script

YAML example to build using `dotnet build` as a script:

```yml
steps:
- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'dotnet build $(buildConfiguration)'
```

# [YAML](#tab/yaml-editor)

You can add a build task using the YAML pipeline editor by directly editing the file or adding the [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task.

Use the following steps to add the **Command Line** task:

1. Go to the position in the YAML file where you want to insert the task.

1. Select the  **Command Line** from the task catalog.
1. Optionally, add a **Display name**.
1. Enter the `dotnet build` command with parameters. For example, `dotnet build --configuration $(buildConfiguration)`.
1. Enter the path to the `.csproj` file as the working directory.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

To add a build task using  the classic editor, do the following steps:

1. Select **Tasks** in your pipeline. 

1. Select the job that runs your build tasks. 
1. Select **+** to add a new task to that job.
1. In the task catalog, find and **Add** the **Command Line** task.
1. Optionally, add a **Display name**.
1. Enter the `dotnet build` command with parameters. For example, `dotnet build --configuration $(buildConfiguration)`.
1. Enter the path to the `.csproj` file as the working directory.
1. Drag the task to position it in the correct task sequence in the pipeline.
1. Select the **Save and queue** dropdown list and select an option to save your changes.

---

## Add .NET SDK commands to your pipeline

You can add .NET SDK commands to your project as a script or using the .NET Core task. The [.NET Core task (DotNetCoreCLI@2)](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task allows you to easily add dotnet CLI commands to your pipeline. You can add **.NET Core** tasks by editing your YAML file or using the classic editor.

### Add a .NET CLI command with the .NET Core task

# [YAML](#tab/yaml-editor)

To add a .NET Core CLI command using the YAML pipeline editor, do the following steps:

1. Go to the position in the YAML file where you want to insert the task.

1. Select **.NET Core** from the task catalog.
1. Select the command you want to run.  
1. Configure any options needed.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

To add .NET Core task using  the classic editor, do the following steps:

1. Select **Tasks** in your pipeline. 

1. Select the job that runs your build tasks. 
1. Select **+** to add a new task to that job.
1. In the task catalog, find and add the **.NET Core** task.
1. Select the task and select the **Command** that you want to run.
1. Configure any options needed.
1. Drag the task to position it in the correct task sequence in the pipeline.
1. From the **Save and queue** dropdown list, select an option to save your changes.

---

### Add a .NET Core CLI command in a script

You can add .NET Core CLI commands as a `script` in your `azure-pipelines.yml` file.

Example:

```yml

steps:
# ...
- script: dotnet test <test-project> 
```

### Install a tool

To install a .NET Core global tool like [dotnetsay](https://www.nuget.org/packages/dotnetsay/) in your build running on Windows, take the following steps:

1. Add the **.NET Core** task and set the following properties:
   * **Command**: custom.
     * **Path to projects**: _leave empty_.
   * **Custom command**: tool.
   * **Arguments**: `install -g dotnetsay`.
1. To run the tool, add a **Command Line** and set the following properties:
   * **Script:** `dotnetsay`.

## Run your tests

When you have test projects in your repository, you can use the **.NET Core** task to run unit tests by using testing frameworks like MSTest, xUnit, and NUnit. The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher.
Test results are automatically published to the service. These results are available to you in the build summary and can be used for troubleshooting failed tests and test-timing analysis.

You can add a test task to your pipeline using the **DotNetCoreCLI@2** task or add the following snippet to your `azure-pipelines.yml` file:

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

When using the **.NET Core** task editor, set **Command** to **test** and **Path to projects** should refer to the test projects in your solution.

Alternatively, you can run the `dotnet test` command with a specific logger and then use the **Publish Test Results** task:

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

## Collect code coverage 

When you're building on the Windows platform, code coverage metrics can be collected by using the built-in coverage data collector. The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher. 

When you use the **.NET Core** task to run tests, coverage data is automatically published to the server. The ``.coverage`` file can be downloaded from the build summary for viewing in Visual Studio.

Add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:
# ...
# do this after other tasks such as building
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration) --collect "Code Coverage"'
```

To add the **.NET Core** task through the task editor:

1. Add the .NET Core task to your build job and set the following properties:

    1. **Command**: test.
    1. **Path to projects**: _Should refer to the test projects in your solution_.
    1. **Arguments**: `--configuration $(BuildConfiguration) --collect "Code Coverage"`.

1. Ensure that the **Publish test results** option remains selected.

If you choose to run the `dotnet test` command, specify the test results logger and coverage options. Then use the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task:

```yaml
steps:
# ...
# do this after your tests have run
- script: dotnet test <test-project> --logger trx --collect "Code Coverage"
- task: PublishTestResults@2
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

### Collect code coverage metrics with Coverlet

If you're building on Linux or macOS, you can use [Coverlet](https://github.com/tonerdo/coverlet) or a similar tool to collect code coverage metrics.

You can publish code coverage results to the server with the [Publish Code Coverage Results task (PublishCodeCoverageResults@2)](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) task. The coverage tool must be configured to generate results in Cobertura or JaCoCo coverage format.

To run tests and publish code coverage with Coverlet, do the following tasks:

* Add a reference to the  `coverlet.collector` NuGet package.
* Add the following snippet to your `azure-pipelines.yml` file:

  ```yaml
  - task: UseDotNet@2
    inputs:
      version: '8.x'
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
    
  - task: PublishCodeCoverageResults@2
    displayName: 'Publish code coverage report'
    inputs:
      codeCoverageTool: 'Cobertura'
      summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'
  ```

## Package and deliver your code

You can publish your build artifacts by:

* Publishing to Azure Pipelines.
* Publishing packages to Azure Artifacts.
* Creating a NuGet package and publish to your NuGet feed.
* Creating a *.zip* archive to deploy your web app.

### Publish artifacts to Azure Pipelines

::: moniker range=">=azure-devops"

To publish the output of your .NET **build** to your pipeline, do the following tasks: 

* Run `dotnet publish --output $(Build.ArtifactStagingDirectory)` on the .NET CLI or add the **DotNetCoreCLI@2** task with the publish command.
* Publish the artifact by using the [Publish Pipeline Artifact](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task.

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
    artifactName: 'myWebsite'

```

> [!NOTE]
> The **DotNetCoreCLI@2** task has a `publishWebProjects` input that is set to **true** by default. This task publishes _all_ web projects in your repo by default. You can find more help and information in the [open source task on GitHub](https://github.com/microsoft/azure-pipelines-tasks).

To copy more files to the build directory before publishing, use the [Copy Files (CopyFile@2)](/azure/devops/pipelines/tasks/reference/copy-files-v2) task.

::: moniker-end

::: moniker range="< azure-devops"

To publish the output of your .NET **build** to your pipeline, do the following tasks: 

* Run `dotnet publish --output $(Build.ArtifactStagingDirectory)` on CLI or add the **DotNetCoreCLI@2** task with the publish command.
* Publish the artifact by using the [Publish build artifact (PublishBuildArtifacts@1)](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1)  task.

To publish your build artifacts as a .zip file, add the following snippet to your `azure-pipelines.yml` file:

```yaml
steps:

- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True

# this code takes all the files in $(Build.ArtifactStagingDirectory) and uploads them as an artifact of your build.
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'

```

For more information, see [Publish and download build artifacts](../artifacts/build-artifacts.md).

::: moniker-end

### Publish to a NuGet feed

To create a NuGet package and publish it to your NuGet feed, add the following snippet:

```yaml
steps:
# ...
# do this near the end of your pipeline in most cases
- script: dotnet pack /p:PackageVersion=$(version)  # define version variable elsewhere in your pipeline
- task: NuGetAuthenticate@1
  inputs:
    nuGetServiceConnections: '<Name of the NuGet service connection>'
- task: NuGetCommand@2
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: '<Name of the NuGet service connection>'
    versioningScheme: byEnvVar
    versionEnvVar: version
```

> [!NOTE]
> The NuGetAuthenticate@1 task doesn't support NuGet API key authentication. If you're using a NuGet API key, use the NuGetCommand@2 task with the `command` input set to `push` with the `--api-key` argument. For example, `dotnet nuget push --api-key $(NuGetApiKey)`.

For more information about versioning and publishing NuGet packages, see [publish to NuGet feeds](../artifacts/nuget.md).  

### Publish a NuGet package to Azure Artifacts

You can publish your NuGet packages to your Azure Artifacts feed by using the [NuGetCommand@2](/azure/devops/pipelines/tasks/reference/nuget-command-v2) to push to your Azure Artifact feed. For example, see [Publish NuGet packages with Azure Pipelines](../artifacts/nuget.md).

### Deploy a web app

To create a .zip file archive that's ready to publish to a web app, add the following snippet:

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

### Build an image and push to container registry

You can also [build an image](containers/build-image.md) for your app and [push it to a container registry](containers/push-image.md).

<a name="troubleshooting"></a>

### Publish symbols

You can use the **PublishSymbols@2** task to publish symbols to an Azure Artifacts symbol server or a file share.

For example, to publish symbols to a file share, add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: PublishSymbols@2
  inputs:
    SymbolsFolder: '$(Build.SourcesDirectory)'
    SearchPattern: '**/bin/**/*.pdb'
    IndexSources: true
    PublishSymbols: true
    SymbolServerType: 'FileShare' 
    SymbolsPath: '\\server\shareName'
```

When using the classic editor, select **Index sources publish symbols** from the task catalog to add to your pipeline.

For more information, see [Publish symbols](../artifacts/symbols.md).

## Troubleshooting

If your project builds on your development machine, but not in Azure Pipelines, explore the following potential causes and corrective actions.

::: moniker range=">=azure-devops"

- Prerelease versions of the .NET Core SDK aren't installed on Microsoft-hosted agents. A new version of the .NET Core SDK can take a few weeks to roll out to all Azure Pipelines data centers. Instead of waiting for this rollout to complete, you can use the [Use .NET Core](#build-environment) task to install the .NET Core SDK version you want on Microsoft-hosted agents.

::: moniker-end

- Make sure the .NET Core SDK versions and runtime on your development machine match the pipeline agent. You can include a `dotnet --version` command-line script in your pipeline to print the version of the .NET Core SDK. Either use the [.NET Core Tool Installer](#build-environment) to deploy the same version on the agent, or update your projects and development machine to the pipeline version of the .NET Core SDK.

- You might be using some logic in Visual Studio that isn't encoded in your pipeline. Azure Pipelines runs each of the commands you specify in the tasks one after another in a new process. Examine the logs from the pipelines build to see the exact commands that ran in the build. To locate the problem, repeat the same commands in the same order on your development machine.

- If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects, you should use the **NuGet** task to restore packages specified in *packages.config* files. Add the **MSBuild** or **Visual Studio Build** task to build the .NET Framework projects.

- Your builds might fail intermittently while restoring packages. Either NuGet.org is having issues, or there are networking problems between the Azure data center and NuGet.org. You can explore whether using Azure Artifacts with NuGet.org as an upstream source improves the reliability of your builds.

- A new version of the .NET Core SDK or Visual Studio could break your build. For example, a newer version or feature of the NuGet tool that's shipped with the SDK could break the build. To isolate this issue, use the **.NET Core Tool Installer** task to specify the version of the .NET Core SDK to use in your build.

## Related content

- To learn more about Azure Artifacts, see [Azure Artifacts](../../artifacts/index.yml).
- To learn more about .NET Core commands, see [.NET Core CLI tools](/dotnet/core/tools/).
- To learn more about running tests in your solution, see [Unit testing in .NET Core projects](/dotnet/core/testing/).
- To learn more about tasks, see [Build and release tasks](../tasks/index.md).
