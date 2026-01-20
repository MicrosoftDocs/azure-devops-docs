---
title: Build, test, and deploy .NET Core projects
description: Learn how to use Azure Pipelines to build, test, and deploy .NET Core projects and apps.
ms.topic: concept-article
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.date: 01/20/2026
ms.custom: freshness-fy22q2, content-freshness, devx-track-dotnet
monikerRange: "<=azure-devops"
#customer intent: As a .NET developer, I want to know how to use Azure Pipelines to work with .NET Core projects so I can build, test, and deploy my .NET Core apps.
---

# Build, test, and deploy .NET Core projects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to use Azure Pipelines to work with .NET Core projects. The article walks you through the following tasks:

::: moniker range="=azure-devops-2022"

- Create a .NET Core web app and upload it to a GitHub repository.
- Create an Azure DevOps project and an Azure Pipelines pipeline to build the project.
- Set up your build environment with self-hosted agents.
- Restore dependencies, build your project, and test with the **.NET Core** (`DotNetCoreCLI@2`) task or a script.
- Use the **.NET Core** (`DotNetCoreCLI@2`) task to add other .NET SDK commands to your pipeline.
- Use the **Publish Code Coverage Results** (`Publish code coverage results v2`) task to publish code coverage results.
- Package and deliver your build output to your pipeline, a NuGet feed, a ZIP archive, or other targets.
::: moniker-end

::: moniker range=">= azure-devops"

- Create a .NET Core web app and upload it to a GitHub repository.
- Create an Azure DevOps project and an Azure Pipelines pipeline to build the project.
- Set up your build environment with Microsoft-hosted or self-hosted agents.
- Restore dependencies, build your project, and test with the **.NET Core** (`DotNetCoreCLI@2`) task or a script.
- Use the **.NET Core** (`DotNetCoreCLI@2`) task to add other .NET SDK commands to your pipeline.
- Use the **Publish Code Coverage Results** (`Publish code coverage results v2`) task to publish code coverage results.
- Package and deliver your build output to your pipeline, a NuGet feed, a ZIP archive, or other targets.

::: moniker-end

> [!NOTE]
> To work with .NET Framework projects, see [Build ASP.NET apps with .NET Framework](../apps/aspnet/build-aspnet-4.md).

## Prerequisites

::: moniker range=">=azure-devops"

To complete all the procedures in this article, you need the following prerequisites:

- An Azure DevOps organization. You can [create one for free](../get-started/pipelines-sign-up.md).
- Membership in the organization [Project Administrators group](../../organizations/security/change-project-level-permissions.md#add-members-to-the-project-administrators-group), so you can create Azure DevOps projects and grant project access to pipelines. Azure DevOps organization owners automatically have this membership.
- An Azure DevOps project in the organization. [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- The ability to run pipelines on Microsoft-hosted agents, by requesting a free tier of parallel jobs. This request can take several business days to process. For more information, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md).
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

If you want to use a .NET project that's already in your GitHub repository, you can skip this section.

[!INCLUDE [include](../includes/dotnet-setup.md)]

## Create a pipeline

If you have a pipeline you want to use, you can skip this section. Otherwise, you can use either the YAML pipeline editor or the classic editor to create a pipeline.

# [YAML](#tab/yaml-editor)

::: moniker range=">=azure-devops"

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

7. On the **Configure** tab, select **Show more** and then select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list. This template provides many of the steps and settings that this article describes.

   You can also select **Starter pipeline** on the **Configure** tab to start with a minimal pipeline and add the steps and settings yourself.

8. On the **Review** tab, examine the YAML code. You can customize the file for your requirements. For example, you can specify a different agent pool or add a task to install a different .NET SDK.

::: moniker-end

::: moniker range="< azure-devops"

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.

2. Select **New pipeline** or **Create pipeline** if this pipeline is the first in the project.

3. Select your source repository type. For this example, use **GitHub Enterprise Server**.

4. On the next screen, enter the following information:

   - The URL for your GitHub account, for example `https://github.com/myname`.
   - Your GitHub personal access token (PAT).
   - A service connection name, for example `my-github`.
   
5. Select **Create**.

6. Select your GitHub repository.

7. On the **Configure** tab, select **Show more** and select the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) pipeline template from the list. This template provides many of the steps and settings that this article describes.

8. Examine the new YAML pipeline code. You can customize the YAML file for your requirements. For example, you could add a [task to install a different .NET SDK](#build-environment) or to test and publish your project.

::: moniker-end

9. When you're ready, select **Save and run**.

   ![Screenshot that shows the Save and run button in a new YAML pipeline.](media/save-and-run-button-new-yaml-pipeline.png)

10. Optionally edit the **Commit message**, and then select **Save and run** again.

11. On the **Summary** tab, select the job in the **Jobs** section to watch your pipeline in action.

# [Classic](#tab/classic-editor)

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu.

1. Select **New pipeline** or **Create pipeline** if this pipeline is the first in the project.

1. On the **Where is your code** screen, select **Use the classic editor to create a pipeline without YAML**.

   >[!NOTE]
   >The ability to create classic pipelines is turned off by default for new Azure DevOps organizations and projects. If you don't see the option to use the classic editor, turn off the **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines** options in **Organization Settings** > **Pipelines** > **Settings** and/or **Project settings**> **Pipelines** > **Settings**.

::: moniker range="< azure-devops"

4. Select your source. For this example, select **GitHub Enterprise Server**.

5. Select **Connect to GitHub Enterprise Server**.

6. Enter your GitHub credentials to create a GitHub service connection to use in your pipeline.

7. Select your repository and select **Continue**.

::: moniker-end

::: moniker range=">= azure-devops"

4. Under **Select a source**, select **GitHub**.

5. Provide a **Connection name**, and then select **Authorize using OAuth**. You can also select to authorize with the [Azure Pipelines GitHub App](https://go.microsoft.com/fwlink/?linkid=2092108) or a GitHub personal access token (PAT).

6. Provide your GitHub repository name including organization or user, and your default branch, usually *main*.

7. Select **Continue**.

::: moniker-end

8. On the **Select a template** screen, search for and select the **ASP.NET Core** template, and then select **Apply**. The pipeline page opens, where you can add tasks, specify agent pools and agents, and configure other build options.

   The **ASP.NET Core** template provides many of the steps and settings that this article describes. You can also select **Empty job** to start with a minimal pipeline and add the tasks and settings yourself.

9. In the **Tasks** tab, under **Agent pool**, select **Azure Pipelines** to use Microsoft-hosted agents.

10. Under **Agent Specification**, select **windows-latest** for this example.

::: moniker range=">=azure-devops"

11. Select **Save and queue** > **Save and queue** at the top of the page.

12. On the **Run pipeline** screen, enter a **Save comment**, and then select **Save and run**.

13. Select the job from the **Jobs** section on the **Summary** tab to see your pipeline in action.

::: moniker-end

::: moniker range="azure-devops-2022"

11. From the **Save & queue** dropdown list at the top of the page, select **Save and queue**.

12. On the **Run pipeline** screen, add a **Save comment**, and then select **Save and run**.

13. Select the job from the **Jobs** section on the **Summary** tab to see your pipeline in action.

::: moniker-end

Add tasks to **Agent job 1** by selecting **+** on the job and choosing a task from the list. For example, you can add the **Use .NET Core** task as the first task to install the .NET SDK.

---

You now have a working pipeline that's ready to customize.

<a name="build-environment"></a>
## Set up your build environment

::: moniker range="=azure-devops-2022"

Azure Pipelines uses [self-hosted agents](../agents/agents.md#install) to build your .NET Core project. You can use the .NET Core SDK and runtime on [Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Docker](../agents/docker.md) agents. Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agents.

To install a specific version of the .NET SDK, add the `UseDotNet@2` task to a YAML pipeline file or the **Use .NET Core** task in the classic editor.

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

You can build your .NET Core projects by using the .NET Core SDK and runtime for Windows, Linux, or macOS. By default, your builds run on [Microsoft-hosted agents](../agents/hosted.md), so you don't need to set up infrastructure.

Azure Pipelines Microsoft-hosted agents include several preinstalled versions of supported .NET Core SDKs. See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of available images and configuration examples.

The following YAML pipeline snippet sets Ubuntu OS for the agent pool.

```yaml
pool:
  vmImage: 'ubuntu-latest' 
```

Microsoft-hosted agents don't include some older versions of the .NET Core SDK, and they don't typically include prerelease versions. If you need these versions of the SDK on Microsoft-hosted agents, you can install them by using the **Use DotNet** ([UseDotNet@2](/azure/devops/pipelines/tasks/reference/use-dotnet-v2)) task.

For example, the following code installs the .NET 8.0.x SDK:

```yaml
steps:
- task: UseDotNet@2
  inputs:
    version: '8.x'
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

### Self-hosted agents

Alternatively, you can use [self-hosted agents](../agents/agents.md#self-hosted-agents) to build your .NET Core projects. You can set up [Linux](../agents/linux-agent.md), [macOS](../agents/osx-agent.md), or [Windows](../agents/windows-agent.md) self-hosted agents. 

By using self-hosted agents, you can:

- Avoid the cost of running the `UseDotNet@2` tool installer.
- Decrease build time if you have a large repository.
- Run incremental builds.
- Use preview or private SDKs that Microsoft doesn't officially support.
- Use SDKs available only in your corporate or on-premises environments.

For more information, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).

::: moniker-end

## Restore dependencies

NuGet packages provide a way for your project to depend on code that you don't build. Run the `dotnet restore` command to download NuGet packages and project-specific tools. You can run this command through the **.NET Core** (`DotNetCoreCLI@2`) task or as a script in your pipeline. The `dotnet restore` command uses the *NuGet.exe* packaged with the .NET Core SDK and can only restore packages specified in the .NET Core project *\*.csproj* files.

Use the **.NET Core** (`DotNetCoreCLI@2`) task to download and restore NuGet packages from Azure Artifacts, NuGet.org, or another authenticated external or internal NuGet repository. If the NuGet feed is in the same project as your pipeline, you don't need to authenticate. For more information, see [.NET Core task (DotNetCoreCLI@2)](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2).

::: moniker range=">=azure-devops"

When you use Microsoft-hosted agents, you get a new machine every time you run a build, which restores the packages with each run. Restoration can take a significant amount of time. To mitigate this issue, use Azure Artifacts or a [self-hosted agent](#self-hosted-agents) to take advantage of the package cache.

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

.NET automatically restores packages when you run commands such as `dotnet build`. You still need to use the **.NET Core** (`DotNetCoreCLI@2`) task to restore packages if you use an authenticated feed.

Manage the credentials for an authenticated feed by creating a NuGet service connection in **Project Settings** > **Pipelines** > **Service connections**. For more information about NuGet service connections, see [Publish NuGet packages with Azure Pipelines](../artifacts/nuget.md).

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
1. In the **Path to project(s) or solution(s)** field, enter the path to your *\*.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *\*.csproj* files in all subfolders.
1. For **Feeds to add**, ensure that **Feed(s) I select here** and **Use packages from NuGet.org** are selected.
1. Select **Add**.
1. Select **Validate and save**, and then select **Save** to commit the change.

# [Classic](#tab/classic-editor)

You can add a restore task by using the classic editor.

1. On the **Tasks** tab in your pipeline, select **Agent job 1** or another job that runs your build tasks.
1. Select **+** to add a new task to that job.
1. In the task catalog, select **.NET Core** and then select **Add**.
1. In the left pane, select the added **dotnet build** task to open the task editor.
1. Select **restore** from the **Command** dropdown list. The display name changes to **dotnet restore**.
1. In the **Path to project(s) or solution(s)** field, enter the path to your *\*.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *\*.csproj* files in all subfolders.
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
1. Under **Path to NuGet.config**, enter the path to your *NuGet.config* file, relative to the root of your repository. You can select the ellipsis **...** next to the field to browse to and select the location.
1. Under **Credentials for feeds outside this organization/collection**, select credentials to use for external registries in the selected *NuGet.config* file. For feeds in the same organization, leave this field blank. The build’s credentials are used automatically.

# [Classic](#tab/classic-editor)

1. Add the **.NET Core** task and select **restore** on the configuration screen.
1. For **Feeds to add**, select **Feeds in my NuGet.config**.
1. Under **Path to NuGet.config**, enter the path to your *NuGet.config* file, relative to the root of your repository. Select the ellipsis **...** to browse to and select the repository location.
1. Under **Credentials for feeds outside this organization/collection**, select credentials to use for external registries located in the selected *NuGet.config*. For feeds in this organization, leave this field blank because the build’s credentials are used automatically.

   Select **Manage** to go to your project settings and select the connection. You can also select **New** to create a service connection. Be sure to select the check box for **Grant access permission to all pipelines**.

---

### Restore packages for .NET Framework projects

If your solution includes a .NET Framework project or you use *package.json* to specify your dependencies, use the **NuGetCommand@2** task to restore those dependencies.

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

Build your .NET Core project by running the `dotnet build` command. You can add the command to your pipeline by using the **.NET Core** (`DotNetCoreCLI@2`) task or as a command line script.

### Use the .NET Core task

# [YAML](#tab/yaml-editor)

You can add a build task by using the YAML pipeline editor. You can directly edit the file or use the task assistant.

Add the **.NET Core** (`DotNetCoreCLI@2`) task directly by inserting the following snippet. Update the `arguments` to match your needs.

```yaml
steps:
- task: DotNetCoreCLI@2
  displayName: Build
  inputs:
    command: build
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration)'
```

To use the task assistant:

1. Go to the position in the YAML file where you want to insert the task.
1. Select the **.NET Core** (`DotNetCoreCLI@2`) task.
1. Select **build** from the **Command** dropdown list.
1. In the **Path to project(s) or solution(s)** field, enter the path to your *\*.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *\*.csproj* files in all subfolders.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

Add a build task by using the classic editor.

1. On the **Tasks** tab in your pipeline, select **Agent job 1** or another job that runs your build tasks.
1. Select **+** to add a new task to that job.
1. In the task catalog, select **.NET Core** and then select **Add**.
1. In the left pane, select the added **dotnet build** task to open the task editor. The **Command** field already shows **build**.
1. In the **Path to project(s) or solution(s)** field, enter the path to your *\*.csproj* files. You can use the wildcard *\*\*/\*.csproj* for all *\*.csproj* files in all subfolders.
1. For **Feeds to add**, ensure that **Feed(s) I select here** and **Use packages from NuGet.org** are selected.
1. In the left pane, drag the task to position it in the correct task sequence.
1. At the top of the page, select **Save & queue** > **Save**.

---

### Build .NET Core with a command line script

You can also build using a command line script.

# [YAML](#tab/yaml-editor)

To add a build command line by directly editing the YAML file, add the following code:

```yml
steps:
- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'dotnet build $(buildConfiguration)'
```

You can also use the task assistant to add the [Command line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task.

1. Go to the position in the YAML file where you want to insert the task.
1. Select the **Command line** (`CmdLine@2`) task from the list.
1. In the **Script** field, enter the `dotnet build` command with parameters. For example, `dotnet build --configuration $(buildConfiguration)`.
1. Under **Advanced** > **Working Directory**, enter the path to the *\*.csproj* file as the working directory. If you leave it blank, the working directory defaults to `$(Build.SourcesDirectory)`.
1. Select **Add**.
1. Select **Save** to commit the change.

# [Classic](#tab/classic-editor)

To add a build command line by using the classic editor:

1. On the **Tasks** tab in your pipeline, select **Agent job 1** or another job that runs your build tasks.
1. Select **+** to add a new task to that job.
1. In the task catalog, select **Command line** and then select **Add**.
1. In the left pane, select the added **Command Line Script** task to open the task editor.
1. Edit the **Display name** if desired.
1. Under **Script**, enter the `dotnet build` command with parameters. For example, `dotnet build --configuration $(buildConfiguration)`.
1. Under **Advanced** > **Working Directory**, enter the path to the *\*.csproj* file as the working directory. You can select the ellipsis **...** to browse to and select the repository location.
1. In the left pane, drag the task to position it in the correct task sequence.
1. At the top of the page, select **Save & queue** > **Save**.

---

## Add other .NET SDK commands to your pipeline

You can add other .NET SDK commands to your pipeline by using the **.NET Core** (`DotNetCoreCLI@2`) task or as scripts.

### Add a .NET CLI command with the .NET Core task

The [.NET Core (DotNetCoreCLI@2)](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task lets you easily add .NET CLI commands to your pipeline. You can add **.NET Core** (`DotNetCoreCLI@2`) tasks by editing your YAML file or by using the classic editor.

# [YAML](#tab/yaml-editor)

To add a .NET Core command by using the task assistant in the YAML pipeline editor, complete the following steps:

1. Go to the position in the YAML file where you want to insert the task.
1. Select **.NET Core** from the task catalog.
1. Select the command you want to run from the dropdown list in the **Command** field.
1. Configure any options needed.
1. Select **Add**.
1. Select **Save** to commit the change.

### Add a .NET Core CLI command in a script

Add a .NET Core CLI command as a `script` in your *azure-pipelines.yml* file. For example:

```yml

steps:
# ...
- script: dotnet test <test-project> 
```

# [Classic](#tab/classic-editor)

To add a .NET Core command by using the classic editor, complete the following steps:

1. On the **Tasks** tab in your pipeline, select **Agent job 1** or another job that runs your build tasks.
1. Select **+** to add a new task to that job.
1. In the task catalog, select **.NET Core** and then select **Add**.
1. In the left pane, select the added **dotnet build** task to open the task editor.
1. Edit the **Display name** as desired. The task name in the left pane updates accordingly.
1. Under **Command**, select the command that you want to run, such as **custom**.
1. Configure any options needed.
1. In the left pane, drag the task to position it in the correct task sequence.
1. At the top of the page, select **Save & queue** > **Save**.

---

### Install a tool

To install a .NET Core global tool like [dotnetsay](https://www.nuget.org/packages/dotnetsay/) in a build running on Windows, add a **.NET Core** task and set the following properties in the configuration:

- **Command**: **custom**
- **Path to projects**: leave empty
- **Custom command**: `tool`
- **Arguments**: `install -g dotnetsay`

To run the tool, add a **Command Line** task and enter `dotnetsay` in the **Script** field.

## Run your tests

When your repository contains test projects, use the **.NET Core** (`DotNetCoreCLI@2`) task to run unit tests by using testing frameworks like MSTest, xUnit, and NUnit. The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher.

The service automatically publishes test results. You can see them in the build summary. Use the test results to troubleshoot failed tests and analyze test timing.

To add a test task to your pipeline, add the following snippet to your *azure-pipelines.yml* file:

```yaml
steps:
# ...
# do this after other tasks such as build
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration)'
```

If you use the task assistant to add the **.NET Core** (`DotNetCoreCLI@2`) task, set the following properties:

- **Command**: **test**
- **Path to projects**: Set to the test projects in your solution
- **Arguments**: `--configuration $(BuildConfiguration)`

Alternatively, run the `dotnet test` command with a specific logger and then use the `PublishTestResults@2` task:

```yaml
steps:
# ...
# do this after your tests run
- script: dotnet test <test-project> --logger trx
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

## Collect code coverage

When you build on the Windows platform, you can collect code coverage metrics by using the built-in coverage data collector. The test project must reference [Microsoft.NET.Test.SDK](https://www.nuget.org/packages/Microsoft.NET.Test.SDK) version 15.8.0 or higher. 

When you use the **.NET Core** (`DotNetCoreCLI@2`) task to run tests, the pipeline automatically publishes coverage data to the server. You can download the *\*.coverage* file from the build summary to view in Visual Studio.

To collect code coverage, add the `--collect "Code Coverage"` argument when you add the test task to your pipeline.

```yaml
steps:
# ...
# do this after other tasks such as build
- task: DotNetCoreCLI@2
  inputs:
    command: test
    projects: '**/*Tests/*.csproj'
    arguments: '--configuration $(buildConfiguration) --collect "Code Coverage"'
```

If you use the task assistant to add the **.NET Core** (`DotNetCoreCLI@2`) task, set the following properties:

- **Command**: **test**
- **Path to projects**: Set to the test projects in your solution
- **Arguments**: `--configuration $(BuildConfiguration) --collect "Code Coverage"`

Ensure that the **Publish test results** option remains selected.

Alternatively, to collect code coverage results by using the `dotnet test` command with a specific logger and then run the [PublishTestResults@2](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task, use the following code:

```yaml
steps:
# ...
# do this after your tests run
- script: dotnet test <test-project> --logger trx --collect "Code Coverage"
- task: PublishTestResults@2
  inputs:
    testRunner: VSTest
    testResultsFiles: '**/*.trx'
```

### Collect code coverage metrics with Coverlet

If you build on Linux or macOS, use [Coverlet](https://github.com/tonerdo/coverlet) or a similar tool to collect code coverage metrics.

You can publish code coverage results to the server with the [Publish Code Coverage Results (PublishCodeCoverageResults@2)](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) task. You must configure the coverage tool to generate results in Cobertura or JaCoCo coverage format.

To run tests and publish code coverage with Coverlet:

1. Add a reference to the `coverlet.collector` NuGet package.
1. Add the following snippet to your *azure-pipelines.yml* file. Don't add extra `DataCollectionRunSettings` arguments because the `XPlat Code Coverage` collector already produces a Cobertura report.

  ```yaml
  - task: DotNetCoreCLI@2
    displayName: 'dotnet test'
    inputs:
      command: 'test'
      arguments: '--configuration $(buildConfiguration) --collect:"XPlat Code Coverage"'
      publishTestResults: true
      projects: '<test project directory>'
    
  - task: PublishCodeCoverageResults@2
    displayName: 'Publish code coverage report'
    inputs:
      codeCoverageTool: 'Cobertura'
      summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'
  ```

## Package and deliver your code

To package and deliver your build output, you can:

- Publish your build artifacts to Azure Pipelines.
- Create a NuGet package and publish it to your NuGet feed.
- Publish your NuGet package to Azure Artifacts.
- Create a ZIP archive to deploy to a web app.
- Publish symbols to an Azure Artifacts symbol server or a file share.

You can also [build an image](containers/build-image.md) for your app and [push it to a container registry](containers/push-image.md).

### Publish artifacts to Azure Pipelines

::: moniker range=">=azure-devops"

To publish the output of your .NET build to your pipeline, follow these steps:

1. Run `dotnet publish --output $(Build.ArtifactStagingDirectory)` using the .NET CLI, or add the **.NET Core** (`DotNetCoreCLI@2`) task with the **publish** command.
1. Use the [Publish Pipeline Artifact (PublishPipelineArtifact@1)](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task to publish the artifact. This task uploads all the files in `$(Build.ArtifactStagingDirectory)` as an artifact of your build.

Add the following code to your *azure-pipelines.yml* file:

```yaml
steps:

- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True

- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Build.ArtifactStagingDirectory)' 
    artifactName: 'myWebsite'

```

To copy more files to the build directory before publishing, use the [Copy Files (CopyFile@2)](/azure/devops/pipelines/tasks/reference/copy-files-v2) task.

> [!NOTE]
> The `publishWebProjects` input in the **.NET Core** (`DotNetCoreCLI@2`) task is set to `true` by default, and publishes all web projects in your repository. For more information, see the [azure-pipelines-tasks](https://github.com/microsoft/azure-pipelines-tasks) GitHub repository.

::: moniker-end

::: moniker range="< azure-devops"

To publish the output of your .NET build to your pipeline, do the following tasks: 

1. Run `dotnet publish --output $(Build.ArtifactStagingDirectory)` using the .NET CLI or add the **.NET Core** (`DotNetCoreCLI@2`) task with the **publish** command.
1. Publish the artifact by using the [Publish build artifact (PublishBuildArtifacts@1)](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task.

The following *azure-pipelines.yml* code also publishes your build artifacts as a ZIP file. The `PublishBuildArtifacts@1` task uploads all the files in `$(Build.ArtifactStagingDirectory)` as an artifact of your build.

```yaml
steps:

- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: true
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'

```

::: moniker-end

For more information, see [Publish and download build artifacts](../artifacts/build-artifacts.md).

### Publish to a NuGet feed

To create a NuGet package and publish it to your NuGet feed, add the following snippet to your *azure-pipelines.yml* file:

```yaml
steps:
# ...
# do this near the end of your pipeline
- script: dotnet pack /p:PackageVersion=$(version)  # define the version variable elsewhere in your pipeline
- task: NuGetAuthenticate@1
  inputs:
    nuGetServiceConnections: '<NuGet service connection>'
- task: NuGetCommand@2
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: '<NuGet service connection>'
    versioningScheme: byEnvVar
    versionEnvVar: version
```

> [!NOTE]
> The `NuGetAuthenticate@1` task doesn't support NuGet API key authentication. If you're using a NuGet API key, use the `NuGetCommand@2` task with the `command` input set to `push` and the `--api-key` argument. For example, `dotnet nuget push --api-key $(NuGetApiKey)`.

For more information about versioning and publishing NuGet packages, see [Publish NuGet packages with Azure Pipelines](../artifacts/nuget.md).

### Publish a NuGet package to Azure Artifacts

You can publish your NuGet packages to your Azure Artifacts feed by using the [NuGetCommand@2](/azure/devops/pipelines/tasks/reference/nuget-command-v2) task. For more information, see [Publish NuGet packages with Azure Pipelines](../artifacts/nuget.md).

### Publish a ZIP file archive to a web app

To create a ZIP file archive that's ready to publish to a web app, add the following snippet to *azure-pipelines.yml*. Run this task after you build your app, near the end of your pipeline in most cases. For example, run this task before you deploy to an Azure web app on Windows.

```yaml
steps:
# ...
- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    zipAfterPublish: True
```

To publish this archive to a web app, see [Azure Web Apps deployment](../targets/webapp.md).

### Publish symbols

You can use the `PublishSymbols@2` task to publish symbols to an Azure Artifacts symbol server or a file share. For more information, see [Publish symbols](../artifacts/symbols.md).

For example, to publish symbols to a file share, add the following snippet to your *azure-pipelines.yml* file:

```yaml
- task: PublishSymbols@2
  inputs:
    SymbolsFolder: '$(Build.SourcesDirectory)'
    SearchPattern: '**/bin/**/*.pdb'
    IndexSources: true
    PublishSymbols: true
    SymbolServerType: 'FileShare' 
    SymbolsPath: '\\<server>\<shareName>'
```

To use the classic editor, add the **Index sources and publish symbols** task to your pipeline.

## Troubleshooting

If your project builds successfully on your local machine but not in Azure Pipelines, explore the following potential causes and corrective actions.

::: moniker range=">=azure-devops"

- Microsoft-hosted agents don't have prerelease versions of the .NET Core SDK installed, and rolling out a new version of the SDK to all Azure Pipelines data centers can take a few weeks. Instead of waiting for a rollout to complete, use the [Use .NET Core](#build-environment) task to install the .NET Core SDK version you want on Microsoft-hosted agents.

::: moniker-end

- A new version of the .NET Core SDK or Visual Studio might break the build. For example, it might contain a newer version or feature of the NuGet tool. Make sure the .NET Core SDK versions and runtime on your development machine match the pipeline agent.

  You can include a `dotnet --version` command-line script in your pipeline to print the version of the .NET Core SDK. Either use the [.NET Core Tool Installer](#build-environment) to deploy the same version on the agent, or update your projects and development machine to the pipeline version of the .NET Core SDK.

- Connection problems can cause your builds to fail intermittently when you restore packages from NuGet.org. NuGet.org might be having problems, or there could be networking problems between the Azure data center and NuGet.org. You can explore whether using Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md) to cache the packages improves the reliability of your builds.

  The pipeline automatically uses its credentials to connect to Azure Artifacts. These credentials typically come from the **Project Collection Build Service** account. To learn more about using Azure Artifacts to cache your NuGet packages, see [Connect to Azure Artifact feeds](../../artifacts/nuget/nuget-exe.md).

- You might be using some logic in Visual Studio that isn't encoded in your pipeline. Azure Pipelines runs each command in a task sequentially in a new process. Examine the logs from the pipelines build to see the exact commands that ran in the build. To locate the problem, repeat the same commands in the same order on your development machine.

- If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects, use the **NuGet** task to restore packages specified in the *packages.config* files. Add the **MSBuild** or **Visual Studio Build** task to build the .NET Framework projects.

## Related content

- [Azure Artifacts](../../artifacts/index.yml)
- [Build and release tasks](../tasks/index.md)
- [.NET Core CLI tools](/dotnet/core/tools/)
- [Unit testing in .NET Core projects](/dotnet/core/testing/)
