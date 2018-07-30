---
title: .NET Core
description: Building .NET Core projects using VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 06/14/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# .NET Core

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This guidance explains how to build .NET Core projects. 

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

::: moniker range="vsts"

> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](/vsts/project/navigation/preview-features) enabled on your organization.

::: moniker-end

<br/>

>[!VIDEO https://channel9.msdn.com/Shows/Docs/Build-your-ASPNET-Core-app/player]

## Example

If you want some sample code that works with this guidance, import (into VSTS or TFS) or fork (into GitHub) this repo:

```
https://github.com/adventworks/dotnetcore-sample
```

# [Designer](#tab/designer)

> [!IMPORTANT]
> If you are new to creating build pipelines, then complete the [designer](../get-started-designer.md) quickstart first before following these instructions.

* After you have the sample code in your own repository, create a build pipeline and select the **ASP.NET Core** template. This automatically adds the tasks required to build the code in the sample repository. 
* Select **Process** under the **Tasks** tab in the build pipeline editor and change the properties as follows:
  * **Agent queue:** `Hosted Linux Preview`
  * **Projects to test:** `**/*[Tt]ests/*.csproj`

Save the pipeline and queue a build to see it in action. Then read through the rest of this topic to learn some of the more common changes people make to customize a .NET Core build process.

# [YAML](#tab/yaml)

::: moniker range="vsts"

> [!IMPORTANT]
> If you are new to creating build pipelines using YAML, then complete the [YAML](../get-started-yaml.md) quickstart first before following these instructions.

The sample code above includes a `.vsts-ci.yml` file at the root of the repository.
You can use this file to build the app. Push a trivial change to your YAML file and see how the build is triggered.
Then read through the rest of this topic learn some of the more common changes people make to customize a .NET Core build process.

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Build environment

::: moniker range="vsts"

You can use VSTS to build your .NET Core projects on Windows, Linux, or macOS without needing to set up any infrastructure of your own.
The [Microsoft-hosted agents](../agents/hosted.md) in VSTS have several released versions of the .NET Core SDKs preinstalled.
Use the **Hosted VS2017** agent queue (to build on Windows), the **Hosted Linux Preview** agent queue, or the **Hosted macOS Preview** queue.

# [Designer](#tab/designer)

In the build pipeline, select **Tasks**, then select the **Process** node, and finally select the **Agent queue** that you want to use.

# [YAML](#tab/yaml)

Add the following snippet to your `.vsts-ci.yml` file to select the appropriate agent queue:

```yaml
queue: 'Hosted Linux Preview' # other options - 'Hosted VS2017', 'Hosted macOS Preview'
```

---

The Microsoft hosted agents do not include some of the older versions of the .NET Core SDK.
They also do not typically include prerelease versions. If you need these kinds of SDKs and
you prefer to use the Microsoft hosted agents, add the **.NET Core Tool Installer** task to the beginning of your process.

# [Designer](#tab/designer)

If you need a version of the .NET Core SDK that is not already installed on the Microsoft-hosted agent:

1. In the build pipeline, select **Tasks**, choose the phase that runs your build tasks, and then select **+** to add a new task to that phase.

1. In the task catalog, find and add the **.NET Core Tool Installer** task.

1. Select the task and specify the version of the .NET Core SDK or runtime that you want to install.

# [YAML](#tab/yaml)

If you need a version of the .NET Core SDK that is not already installed on the Microsoft-hosted agent, add the following snippet to your `.vsts-ci.yml` file:

```yaml
- task: DotNetCoreInstaller@0
  inputs:
    version: '2.1.300' # replace this value with the version that you need for your project
```

---

> [!TIP]
> 
> As an alternative to the approach shown above you can set up a [self-hosted agent](../agents/agents.md#install) and save the cost of running the tool installer.
> You can also use self-hosted agents to save additional time if you have a large repository or you run incremental builds. 
> For example, you don't select the "clean repository" option, or you don't use the `dotnet build --no-incremental` or `dotnet clean` commands.

::: moniker-end

::: moniker range="< vsts"

You can build your .NET Core projects using the .NET Core SDK and runtime on Windows, Linux, or macOS.
Your builds run on a [self-hosted agent](../agents/agents.md#install).
Make sure that you have the necessary version of the .NET Core SDK and runtime installed on the agent.

::: moniker-end

## Restore dependencies

NuGet is a popular way to depend on code that you don't build. You can download NuGet packages by running
the `dotnet restore` command either through the
[.NET Core](../tasks/build/dotnet-core.md) task or directly in a script in your build pipeline.

::: moniker range=">= tfs-2018"

You can download NuGet packages from VSTS Package Management, NuGet.org, or some other external or internal NuGet repository.
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
you can use VSTS Package Management in conjunction with [upstream sources](/vsts/package/upstream-sources.md),
and cache the packages in VSTS. The credentials of the build pipeline are automatically used when connecting
to VSTS Package Management. These credentials are derived from either the **Project Collection Build Service**
account or the **Project Build Service** account depending on the option selected in your build pipeline.

If you want to specify a NuGet repository, put the URLs in a `NuGet.config` file in your repository.
If your feed is authenticated, manage its credentials by creating a NuGet service connection in the **Services** tab under **Project Settings**.

::: moniker-end

::: moniker range="vsts"

If you're using Microsoft-hosted agents, you get a new machine every time your run a build - which means restoring the packages every time.
This can take a significant amount of time. To mitigate this you can either use VSTS Package Management or a self-hosted agent, in which case
you'll get the benefit of using the package cache.

::: moniker-end

To restore packages in your build pipeline:

# [Designer](#tab/designer)

1. Select **Tasks** in the build pipeline, select the phase that runs your build tasks, then select **+** to add a new task to that phase.

1. In the task catalog, find and add the **.NET Core** task.

1. Select the task and, for **Command**, select **restore**.

1. Specify any other options you need for this task, then save the build.

# [YAML](#tab/yaml)

::: moniker range="vsts"

To restore packages from NuGet.org:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: restore
    projects: "**/*.csproj"
```

To restore packages from a custom feed:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: restore
    projects: "**/*.csproj"
    feedsToUse: config
    nugetConfigPath: NuGet.config    # Relative to root of the repository
    externalFeedCredentials: <Name of the NuGet service connection>
```

> [!NOTE]
> 
> Make sure the custom feed is specified in your `NuGet.config` file and that credentials are specified in the NuGet service connection.

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Build your project

You build your .NET Core project using the **.NET Core** task with the **Command** set to **build**.
Running this task is equivalent to running `dotnet build` from a command prompt.

If you need to run additional .NET Core commands, you can specify other **Command** settings such as **clean** or
**publish**. If you need a command not listed, you can set **Command** to **custom** and then type the name of the
command in the **Custom command** box. This is useful, for example, to install [dotnet global tools](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools)
that are available in .NET Core 2.1.300 and newer.

# [Designer](#tab/designer)

### Build

1. Select **Tasks** in the build pipeline, select the phase that runs your build tasks, then select **+** to add a new task to that phase.

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

# [YAML](#tab/yaml)

::: moniker range="vsts"

### Build

Add the following snippet to your `.vsts-ci.yml` file:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: build
    arguments: --configuration Release   # replace with the desired configuration
    projects: "**/*.csproj"
```

### Install a tool

Here's an example of installing and using a .NET global tool - [dotnetsay](https://www.nuget.org/packages/dotnetsay/).

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: custom
    custom: tool
    arguments: 'install -g dotnetsay'

- script: dotnetsay 
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Run your tests

Use the **.NET Core** task to run unit tests in your .NET Core solution using testing frameworks such as MSTest, xUnit, and NUnit.
One benefit of using this built-in task to run your tests is that the results of the tests are automatically published to VSTS or TFS.
These results are then made available to you in the build summary.

# [Designer](#tab/designer)

Use the **.NET Core** task with **Command** set to **test**.
**Path to projects** should refer to the test projects in your solution.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Add the following snippet to your `.vsts-ci.yml` file:

```yaml
- task: DotNetCoreCLI@2
  displayName: Test
  inputs:
    command: test
    projects: **/*Tests/*.csproj
    arguments: '--configuration $(BuildConfiguration)'
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Package and deliver your code

The output of the `dotnet build` command is generally not transferable.
To prepare your code to run on another machine, you must package the code.

# [Designer](#tab/designer)

### Publish to a NuGet feed

If you want to publish your code to a NuGet feed:

1. Use a **.NET Core** task with the **Command** set to **pack**.

1. [Publish your package to a NuGet feed](../targets/nuget.md).

### Deploy a web app

If you want to deploy a web app:

1. Use a **.NET Core** task with the **Command** set to **publish**. 

1. Make sure you've selected the option to create a .zip file archive. 

When the build runs it will automatically search the folders in your solution for web projects,
and produce .zip file packages for each of them.

# [YAML](#tab/yaml)

::: moniker range="vsts"

### Publish to a NuGet feed

To create a NuGet package, add the following snippet:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: pack
```

After you've packaged your app, you are ready to [publish to NuGet feeds](../targets/nuget.md).

### Deploy a web app

To create a .zip file archive that ready for publishing to a web app, add the following snippet:

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(build.artifactstagingdirectory)'
    zipAfterPublish: True
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

<a name="troubleshooting"></a>
## Troubleshooting

If you are able to build your project on your development machine, but are having trouble building it on VSTS or TFS, explore the following potential causes and corrective actions:

* Check that the versions of the .NET Core SDK and runtime on your development machine match those on the agent.
  You can include a command line script `dotnet --version` in your build pipeline to print the version of .NET Core SDK.
  Either use the **.NET Core Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or update your projects and development machine to the newer version of .NET Core SDK.

* You may be using some logic in Visual Studio IDE that is not encoded in your build pipeline.
  VSTS or TFS run each of the commands you specify in the tasks one after the other in a new process.
  Look at the logs from the VSTS or TFS build to see the exact commands that ran as part of the build.
  Repeat the same commands in the same order on your development machine to locate the problem.

* If you have a mixed solution that includes some .NET Core projects and some .NET Framework projects,
  you should also use the **NuGet** task to restore packages specified in `package.json` files.
  Similarly, you should add **MSBuild** or **Visual Studio Build** tasks to build the .NET Framework projects.

* If your builds fail intermittently while restoring packages, either Nuget.org is having issues or there are
  networking problems between the Azure data center and Nuget.org. These are not under our control, and you may
  need to explore whether using VSTS Package Management with Nuget.org as an upstream source improves the reliability
  of your builds.

* Occasionally, when we roll out an update to the hosted images with a new version of .NET Core SDK or Visual Studio,
  something may break your build. This can happen, for example, if a newer version or feature of the NuGet tool
  is shipped with the SDK. To isolate these problems, use the **.NET Core Tool Installer** task to specify the version
  of the .NET Core SDK used in your build.

## Q&A

### Where can I learn more about the VSTS and TFS Package Management service?

[Package Management in VSTS and TFS](../../package/index.md)

### Where can I learn more about .NET Core commands?

[.NET Core command-line interface (CLI) tools](/dotnet/core/tools/)

### Where can I learn more about running tests in my solution?

[Unit testing in .NET Core projects](/dotnet/core/testing/)

### Where can I learn more about tasks?

[Build and release tasks](../tasks/index.md)
