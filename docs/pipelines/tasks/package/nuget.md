---
title: NuGet restore, pack, and publish task
ms.custom: seodec18
description: Learn all about how you can make use of NuGet packages when you are building code in Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: 7e2793cd-7ce1-4268-9f51-ecb41842f13e
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.date: 09/10/2019
monikerRange: '>= tfs-2018'
---

# NuGet task

**Version 2.**

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to install and update NuGet package dependencies, or package and publish NuGet packages.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

If your code depends on NuGet packages, make sure to add this step before your [Visual Studio Build step](../build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGet Packages** checkbox in that step.

> [!TIP]
> Looking for help to get started? See the how-tos for [restoring](../../../artifacts/nuget/consume.md) and [publishing](../../../artifacts/nuget/publish.md) packages.
> This version of the NuGet task uses NuGet 4.1.0 by default. To select a different version of NuGet, use the [Tool Installer](../tool/nuget.md).

> [!NOTE]
> Using or creating .NET Core or .NET Standard packages? Use the [.NET Core](../build/dotnet-core-cli.md) task, which has full support for all package scenarios currently supported by dotnet, including restore, pack, and nuget push.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/NuGetCommandV2.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `command`<br/>Command | The NuGet command to run. Select 'Custom' to add arguments or to use a different command.<br/>Options: `restore`, `pack`, `custom`, `push` |
| `restoreSolution`<br/>Path to solution, packages.config, or project.json | The path to the solution, packages.config, or project.json file that references the packages to be restored. |
| `feedsToUse`<br/>Feeds to use | You can either select a feed from Azure Artifacts and/or NuGet.org here, or commit a nuget.config file to your source code repository and set its path here. |
| `vstsFeed`<br/>Use packages from this Azure Artifacts/TFS feed | Include the selected feed in the generated NuGet.config. You must have Azure Artifacts installed and licensed to select a feed here. |
| `includeNuGetOrg`<br/>Use packages from NuGet.org | Include NuGet.org in the generated NuGet.config. |
| `nugetConfigPath`<br/>Path to NuGet.config | The NuGet.config in your repository that specifies the feeds from which to restore packages.|
| `externalFeedCredentials`<br/>Credentials for feeds outside this organization/collection | Credentials to use for external registries located in the selected NuGet.config. For feeds in this organization/collection, leave this blank; the build’s credentials are used automatically. |
| `noCache`<br/>Disable local cache | Prevents NuGet from using packages from local machine caches. |
| `disableParallelProcessing`<br/>Disable parallel processing | Prevents NuGet from installing multiple packages in parallel. |
| `restoreDirectory`<br/>Destination directory | Specifies the folder in which packages are installed. If no folder is specified, packages are restored into a packages/ folder alongside the selected solution, packages.config, or project.json. |
| `verbosityRestore`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `packagesToPush`<br/>Target feed location | Specifies whether the target feed is and internal feed/collection or an external NuGet server.<br/>Options: `internal`, `external` |
| `publishVstsFeed`<br/>Target feed | Select a feed hosted in this account. You must have Azure Artifacts installed and licensed to select a feed here. |
| `publishPackageMetadata`<br/>Publish pipeline metadata | If you continually publish a set of packages and only change the version number of the subset of packages that changed, use this option. |
| `allowPackageConflicts` | It allows the task to report success even if some of your packages are rejected with 409 Conflict errors.<br/>This option is currently only available on Azure Pipelines and using Windows agents. If NuGet.exe encounters a conflict, the task will fail. This option will not work and publish will fail if you are within a proxy environment. |
| `publishFeedCredentials`<br/>Verbosity | Specifies the amount of detail displayed in the output. |
| `verbosityRestore`<br/>NuGet server | The NuGet service connection that contains the external NuGet server’s credentials. |
| `verbosityPush`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `packagesToPack`<br/>Path to csproj or nuspec file(s) to pack" | Pattern to search for csproj directories to pack.\n\nYou can separate multiple patterns with a semicolon, and you can make a pattern negative by prefixing it with '!'. Example: `**\\*.csproj;!**\\*.Tests.csproj` |
| `configuration`<br/>Configuration to package | When using a csproj file this specifies the configuration to package. |
| `packDestination`<br/>Package folder | Folder where packages will be created. If empty, packages will be created at the source root. |
| `versioningScheme`<br/>Automatic package versioning | Cannot be used with include referenced projects. If you choose 'Use the date and time', this will generate a [SemVer](http://semver.org/spec/v1.0.0.html)-compliant version formatted as `X.Y.Z-ci-datetime` where you choose X, Y, and Z.\n\nIf you choose 'Use an environment variable', you must select an environment variable and ensure it contains the version number you want to use.\n\nIf you choose 'Use the build number', this will use the build number to version your package. **Note:** Under Options set the build number format to be '[$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)](https://go.microsoft.com/fwlink/?LinkID=627416)'.<br/>Options: `off`, `byPrereleaseNumber`, `byEnvVar`, `byBuildNumber` |
| `includeReferencedProjects`<br/>Environment variable | Enter the variable name without $, $env, or %. |
| `majorVersion`<br/>Major | The 'X' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) |
| `minorVersion`<br/>Minor | The 'Y' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) |
| `patchVersion`<br/>Patch | The 'Z' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) |
| `packTimezone`<br/>Time zone | Specifies the desired time zone used to produce the version of the package. Selecting UTC is recommended if you're using hosted build agents as their date and time might differ.<br/>Options: `utc`, `local` |
| `includeSymbols`<br/>Create symbols package | Specifies that the package contains sources and symbols. When used with a .nuspec file, this creates a regular NuGet package file and the corresponding symbols package. |
| `toolPackage`<br/>Tool Package | Determines if the output files of the project should be in the tool folder. |
| `buildProperties`<br/>Additional build properties | Specifies a list of token=value pairs, separated by semicolons, where each occurrence of $token$ in the .nuspec file will be replaced with the given value. Values can be strings in quotation marks. |
| `basePath`<br/>Base path | The base path of the files defined in the nuspec file. |
| `verbosityPack`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `arguments`<br/>Command and arguments | The command and arguments which will be passed to NuGet.exe for execution. If NuGet 3.5 or later is used, authenticated commands like list, restore, and publish against any feed in this organization/collection that the Project Collection Build Service has access to will be automatically authenticated. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

::: moniker range="> tfs-2018"

## Versioning schemes

For **byPrereleaseNumber**, the version will be set to whatever you choose for major, minor, and patch, plus the date and time in the format `yyyymmdd-hhmmss`.

For **byEnvVar**, the version will be set as whatever environment variable, e.g. `MyVersion` (no **$**, just the environment variable name), you provide. Make sure the environment variable is set to a proper SemVer e.g. `1.2.3` or `1.2.3-beta1`.

For **byBuildNumber**, the version will be set to the build number, ensure that your build number is a proper SemVer e.g. `1.0.$(Rev:r)`. If you select **byBuildNumber**, the task will extract a dotted version, `1.2.3.4` and use only that, dropping any label. To use the build number as is, you should use **byEnvVar** as described above, and set the environment variable to `BUILD_BUILDNUMBER`.

::: moniker-end

## Examples

### Restore

Restore all solutions. Packages are restored into a packages folder alongside solutions using currently selected feeds.

```YAML
# Restore project
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: Select
    restoreSolution: '**/*.sln'
```

### Package

Package a your solution to your Artifact Staging directory

```YAML
# Package a project
- task: NuGetCommand@2
  inputs:
    command: 'pack'
    packagesToPack: '**/*.csproj'
    packDestination: '$(Build.ArtifactStagingDirectory)'
```

### Push

> [!NOTE]
> Release pipelines download pipeline artifacts to `System.ArtifactsDirectory` so you can use the `$(System.ArtifactsDirectory)/**/*.nupkg` for the `packagesToPush` input in release pipelines.

Push/Publish a package to a feed defined in your NuGet.config.

```YAML
# Push a project
- task: NuGetCommand@2
  inputs:
    command: 'push'
    packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg'
    feedsToUse: 'config'
    nugetConfigPath: '$(Build.WorkingDirectory)/NuGet.config'
```

Push/Publish a package to a feed you define in the task

```YAML
# Push a project
- task: NuGetCommand@2
  inputs:
    command: 'push'
    feedsToUse: 'select'
    vstsFeed: 'myTestFeed'
```

Push/Publish a package to NuGet.org

```YAML
# Push a project
- task: NuGetCommand@2
  inputs:
    command: 'push'
    feedsToUse: 'config'
    includeNugetOrg: 'true'
```

## Open source

These tasks are open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/nuget-step-qa.md)]

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
