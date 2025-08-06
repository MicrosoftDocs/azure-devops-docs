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
- Restore dependencies, build your project, and test with the **.NET Core** ([DotNetCoreCLI@2](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2)) task or a [script](../scripts/cross-platform-scripting.md).
- Use the **.NET Core** (`DotNetCoreCLI@2`) task to add other .NET SDK commands to your pipeline.
- Use the [publish code coverage task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) to publish code coverage results.
- Package and deliver your build output to your pipeline, a [NuGet feed](../artifacts/nuget.md), and a *.zip* for deployment to an [Azure web app](../targets/webapp.md).
::: moniker-end

::: moniker range=">= azure-devops"

- Create a .NET Core web app and upload it to a GitHub repository.
- Create an Azure DevOps project and Azure Pipelines pipeline to build the project.
- Set up your build environment with [Microsoft-hosted](../agents/hosted.md) or [self-hosted](../agents/agents.md) agents.
- Restore dependencies, build your project, and test with the **.NET Core** ([DotNetCoreCLI@2](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2)) task or a [script](../scripts/cross-platform-scripting.md).
- Use the **.NET Core** (`DotNetCoreCLI@2`) task to add other .NET SDK commands to your pipeline.
- Use the [publish code coverage task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) to publish code coverage results.
- Package and deliver your build output to your pipeline, a [NuGet feed](../artifacts/nuget.md), and a ZIP file for deployment to an [Azure web app](../targets/webapp.md).

::: moniker-end

> [!NOTE]
> To work with .NET Framework projects, see [Build ASP.NET apps with .NET Framework](../apps/aspnet/build-aspnet-4.md).

## Prerequisites

::: moniker range=">=azure-devops"

To complete all the procedures in this article, you need the following prerequisites:

- An Azure DevOps organization. You can [create one for free](../get-started/pipelines-sign-up.md).
- Membership in the organization [Project Administrators group](../../organizations/security/change-project-level-permissions.md), so you can create Azure DevOps projects and grant project access to pipelines. Azure DevOps Organization owners automatically have this membership.
- An Azure DevOps project in the organization. [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- The ability to run pipelines on Microsoft-hosted agents, by requesting a free tier of parallel jobs. The request can take several business days to process. For more information, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md).
- The **Administrator** or **Creator** role for [service connections](../library/add-resource-protection.md), which you can assign as a Project Administrator.
- A [GitHub](https://github.com) account and repository.

::: moniker-end

::: moniker range="< azure-devops"

To complete all the procedures in this article, you need the following prerequisites:

- An Azure DevOps collection.
- An Azure DevOps project created in the organization. For instructions, see [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- Membership in the [Project Administrators group](../../organizations/security/change-project-level-permissions.md), so you can create Azure DevOps projects and grant project access to pipelines. Azure DevOps Organization owners automatically have this membership.
- The **Administrator** or **Creator** role for [service connections](../library/add-resource-protection.md), which you can assign as a Project Administrator.
- A [GitHub](https://github.com) account and repository.

::: moniker-end

## Create a .NET project and upload it to GitHub

If you want to use a .NET project already uploaded to your GitHub repository, you can skip this section. [!INCLUDE [include](../includes/dotnet-setup.md)]

## Create a pipeline

If you have a pipeline you want to use, you can skip this section. Otherwise, you can use either the YAML pipeline editor or the classic editor to create a pipeline as follows:
# [YAML](#tab/yaml-editor)

::: moniker range=">=azure-devops"

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

1. On the **Configure** tab, select **Show more** and select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list.
1. On the **Review pipeline** tab, examine the YAML code. You can customize the file for your requirements. For example, you could specify the agent pool or add a [task to install a different .NET SDK](#build-environment).

::: moniker-end

::: moniker range="< azure-devops"

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.
1. Select **New pipeline** or **Create pipeline** if this is the first pipeline in the project.
1. Select your source repository type. For this example, use **GitHub Enterprise Server**.
1. On the next screen, enter the following information:
   - The URL for your GitHub account, for example `https://github.com/myname`.
   - Your GitHub personal access token (PAT).
   - A service connection name, for example `my-github`.
1. Select **Create**.
1. Select your GitHub repository.
1. On the **Configure** tab, select **Show more** and select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list.
1. Examine the new YAML pipeline code. You can customize the YAML file for your requirements. For example, you could add a [task to install a different .NET SDK](#build-environment) or to test and publish your project.

::: moniker-end
<!--::: moniker range=">= azure-devops-2020 <= azure-devops-2022"-->

1. When you're ready, select **Save and run**.

   ![Screenshot that shows the Save and run button in a new YAML pipeline.](media/save-and-run-button-new-yaml-pipeline.png)

1. Optionally edit the **Commit message**, and then select **Save and run** again.
1. On the **Summary** tab, select the job in the **Jobs** section to watch your pipeline in action.

# [Classic](#tab/classic-editor)

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.
1. Select **New pipeline** or **Create pipeline** if this is the first pipeline in the project.
1. On the **Where is your code** screen, select **Use the classic editor to create a pipeline without YAML**.
   >[!NOTE]
   >The ability to create classic pipelines is turned off by default for new Azure DevOps organizations and projects. If you don't see the option to use the classic editor, turn off the **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines** in **Organization Settings** > **Pipelines** > **Settings** and/or **Project settings**> **Pipelines** > **Settings**.

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

## Set up your build environment

::: moniker range="<=azure-devops-2022"

You can build your .NET Core projects by using the .NET Core SDK and runtime on [Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Docker](../agents/docker.md). Azure Pipelines uses [self-hosted agents](../agents/agents.md#install) to build your .NET Core project. Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agents.

To install a specific version of the .NET SDK, add the `UseDotNet@2` task in your pipeline YAML file or add the **.NET Core** task to your pipeline in the classic editor.

>[!NOTE]
>For agents that run on physical systems, installing SDKs and tools through your pipeline alters the build environment on the agent's host.

The following example YAML snippet installs .NET SDK 8.0.x:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '8.x'
```

To install a newer SDK, set `performMultiLevelLookup` to `true`.

```yaml
steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 8.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions
```

You can select the agent pool and agent for your build job. You can also specify agents based on their capabilities. For example, the following YAML pipeline snippet selects a pool and agent capabilities.

```yml
pool:
  name: myPrivateAgents
  demands:
  - agent.os -equals Darwin
  - anotherCapability -equals somethingElse
```

::: moniker-end

::: moniker range=">=azure-devops"

You can build your .NET Core projects by using the .NET Core SDK and runtime on Windows, Linux, or macOS. Your builds run on [Microsoft-hosted agents](../agents/hosted.md), so you don't need to set up infrastructure.

The Azure Pipelines [Microsoft-hosted agents](../agents/hosted.md) include several preinstalled versions of supported .NET Core SDKs. See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of available images and configuration examples.

For example, the following YAML pipeline snippet sets Ubuntu OS for the agent pool.

```yaml
pool:
  vmImage: 'ubuntu-latest' 
```

Microsoft-hosted agents don't include some older versions of the .NET Core SDK, and don't typically include prerelease versions. If you need these versions of the SDK on Microsoft-hosted agents, you can install them by using the [UseDotNet@2](/azure/devops/pipelines/tasks/reference/use-dotnet-v2) task.

For example, use the following snippet to install the 5.0.x SDK:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '5.x'
```

Windows agents already include a .NET Core runtime. To install a newer SDK, set `performMultiLevelLookup` to `true` as in the following snippet:

```yaml
steps:
- task: UseDotNet@2
  displayName: 'Install .NET Core SDK'
  inputs:
    version: 8.x
    performMultiLevelLookup: true
    includePreviewVersions: true # Required for preview versions
```

Alternatively, you can use [self-hosted agents](../agents/agents.md#self-hosted-agents) to build your .NET Core projects. You can set up [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Windows](../agents/windows-agent.md) self-hosted agents. 

Self-hosted agents let you:

- Avoid the cost of running the `UseDotNet@2` tool installer.
- Decrease build time if you have a large repository.
- Run incremental builds.
- Use preview or private SDKs that Microsoft doesn't officially support.
- Use SDKs available only on your corporate or on-premises environments.

For more information, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).

::: moniker-end

## Restore dependencies

NuGet packages are a way for your project to depend on code that you don't build. You can download NuGet packages and project-specific tools by running the `dotnet restore` command, either through the **.NET Core** (`DotNetCoreCLI@2`) task or as a script in your pipeline. The `dotnet restore` command uses the `NuGet.exe` packaged with the .NET Core SDK and can only restore packages specified in .NET Core project *.csproj* files.

You can use the **.NET Core** (`DotNetCoreCLI@2`) task to download NuGet packages from Azure Artifacts, NuGet.org, or another external or internal NuGet repository, and to restore packages from authenticated NuGet feeds. If your feed is in the same project as your pipeline, you don't need to authenticate. For more information, see [.NET Core task (DotNetCoreCLI@2)](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2).

::: moniker range=">=azure-devops"

When you use Microsoft-hosted agents, you get a new machine every time you run a build, which restores the packages with each run. Restoration can take a significant amount of time. To mitigate this issue, use Azure Artifacts or a self-hosted agent to take advantage of the package cache.

::: moniker-end

The following pipeline uses the `DotNetCoreCLI@2` task to restore an Azure Artifact feed.

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

In .NET Core SDK version 2.0 and newer, packages restore automatically when you run commands such as `dotnet build`. You still need to use the **.NET Core** (`DotNetCoreCLI@2`) task to restore packages if you use an authenticated feed.

If your feed is authenticated, manage its credentials by creating a NuGet service connection in **Project Settings** > **Pipelines** > **Service connections**. For more information about NuGet service connections, see [Publish NuGet packages with Azure Pipelines](../artifacts/nuget.md).

### Restore packages from NuGet.org

To restore packages from NuGet.org, update your pipeline as follows.

# [YAML](#tab/yaml-editor)

You can add the restore command to your pipeline by editing the YAML code directly or by using the task assistant.

Add the **.NET Core** (`DotNetCoreCLI@2`) task directly by inserting the following snippet into your *azure-pipelines.yml* file before your build tasks.

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Restore
  inputs:
    command: restore
    projects: '**/*.csproj'
    feedsToUse: select
```

To use the task assistant:

1. Go to the position in the YAML file where you want to insert the task.
1. Select **.NET Core** from the task catalog.
1. On the configuration screen, select **restore** from the **Command** dropdown list.
1. In the **Path to project(s) or solution(s)** field, enter the path to your *.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *.csproj* files in all subfolders.
1. For **Feeds to add**, ensure that **Feed(s) I select here** and **Use packages from NuGet.org** are selected.
1. Select **Add**.
1. Select **Validate and save**, and then select **Save** to commit the change.

# [Classic](#tab/classic-editor)

Use these steps to add a restore task by using the classic editor:

1. On the **Tasks** tab in your pipeline, select **Agent job 1** or other job that runs your build tasks.
1. Select **+** to add a new task to that job.
1. In the task catalog, select **.NET Core** and then select **Add**.
1. In the left pane, select the added **dotnet build** task to open the task editor.
1. Select **restore** from the **Command** dropdown list. The display name changes to **dotnet restore**.
1. In the **Path to project(s) or solution(s)** field, enter the path to your *.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *.csproj* files in all subfolders.
1. For **Feeds to add**, ensure that **Feed(s) I select here** and **Use packages from NuGet.org** are selected.
1. In the left pane, drag the task to position it before the **Build** task.
1. At the top of the page, select **Save & queue** > **Save**.

---

### Restore packages from an external feed

To specify an external NuGet repository, put the URL in a *NuGet.config* file in your repository. Make sure any custom feed is specified in your *NuGet.config* file, and that credentials are specified in a NuGet service connection.

To restore packages from an external feed, add the `restore` task as instructed in the previous section, but change the configuration settings as follows:

# [YAML](#tab/yaml-editor)

Add the **.NET Core** (`DotNetCoreCLI@2`) task directly by inserting the following snippet into your *azure-pipelines.yml* file before your build tasks. Replace `<NuGet service connection>` with your service connection name.

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Restore
  inputs:
    command: restore
    projects: '**/*.csproj'
    feedsToUse: config
    nugetConfigPath: NuGet.config    # Relative to root of the repository
    externalFeedCredentials: <NuGet service connection>
```

To use the task assistant:

1. Add the **.NET Core** task and select **restore** on the configuration screen as in the preceding procedure.
1. For **Feeds to add**, select **Feeds in my NuGet.config**.
1. Under **Path to NuGet.config**, enter the path to your *NuGet.config* file, relative to the root of your repository. You can select the ellipsis **...** to browse to and select the location.
1. Under **Credentials for feeds outside this organization/collection**, select credentials to use for external registries located in the selected *NuGet.config*. For feeds in this organization, you can leave this field blank. The build’s credentials are used automatically.

# [Classic](#tab/classic-editor)

1. Add the **.NET Core** task and select **restore** on the configuration screen.
1. For **Feeds to add**, select **Feeds in my NuGet.config**.
1. Under **Path to NuGet.config**, enter the path to your *NuGet.config* file, relative to the root of your repository. You can select the ellipsis **...** to browse to and select the repository location.
1. Under **Credentials for feeds outside this organization/collection**, select credentials to use for external registries located in the selected *NuGet.config*. For feeds in this organization, you can leave this field blank because the build’s credentials are used automatically.

   You can select **Manage** to go to your project settings and select the connection. You can also select **New** to create a service connection. Be sure to select the checkbox for **Grant access permission to all pipelines**.

---

### Restore packages for .NET Framework projects

If you also have a Microsoft .NET Framework project in your solution or use *package.json* to specify your dependencies, use the **NuGetCommand@2** task to restore those dependencies.

```yaml
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'
    feedsToUse: 'select'
```

>[!NOTE]
>For Ubuntu 24.04 or higher, you must use the **NuGetAuthenticate** task instead of the **NuGetCommand@2** task with the .NET CLI. For more information, see [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images).

## Build your project

Build your .NET Core projects by running the `dotnet build` command. You can add the command to your pipeline as a command line script or by using the **.NET Core** (`DotNetCoreCLI@2`) task.

### Use the .NET Core task

YAML example to build using the **.NET Core** (`DotNetCoreCLI@2`) task:

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

If your project builds on your local machine but not in Azure Pipelines, explore the following potential causes and corrective actions.

::: moniker range=">=azure-devops"

- Prerelease versions of the .NET Core SDK aren't installed on Microsoft-hosted agents. A new version of the .NET Core SDK can take a few weeks to roll out to all Azure Pipelines data centers. Instead of waiting for this rollout to complete, you can use the [Use .NET Core](#build-environment) task to install the .NET Core SDK version you want on Microsoft-hosted agents.

::: moniker-end

- A new version of the .NET Core SDK or Visual Studio that contains a newer version or feature of the NuGet tool could break the build. Make sure the .NET Core SDK versions and runtime on your development machine match the pipeline agent.

  You can include a `dotnet --version` command-line script in your pipeline to print the version of the .NET Core SDK. Either use the [.NET Core Tool Installer](#build-environment) to deploy the same version on the agent, or update your projects and development machine to the pipeline version of the .NET Core SDK.

- You might be using some logic in Visual Studio that isn't encoded in your pipeline. Azure Pipelines runs each command you specify in a task sequentially in a new process. Examine the logs from the pipelines build to see the exact commands that ran in the build. To locate the problem, repeat the same commands in the same order on your development machine.

- If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects, use the **NuGet** task to restore packages specified in the *packages.config* files. Add the **MSBuild** or **Visual Studio Build** task to build the .NET Framework projects.

- Your builds might fail intermittently because of connection issues when you restore packages from NuGet.org. NuGet.org might be having issues, or there could be networking problems between the Azure data center and NuGet.org. You can explore whether using Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md) to cache the packages improves the reliability of your builds.

  The credentials of the pipeline are automatically used to connect to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service** account. To learn more about using Azure Artifacts to cache your NuGet packages, see [Connect to Azure Artifact feeds](../../artifacts/nuget/nuget-exe.md).


## Related content

- [Azure Artifacts](../../artifacts/index.yml)
- [Build and release tasks](../tasks/index.md)
- [.NET Core CLI tools](/dotnet/core/tools/)
- [Unit testing in .NET Core projects](/dotnet/core/testing/)
