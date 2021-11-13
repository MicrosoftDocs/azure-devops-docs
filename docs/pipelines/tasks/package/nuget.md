---
title: NuGet restore, pack, and publish task
ms.custom: seodec18
description: Learn all about how you can make use of NuGet packages when you are building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 7e2793cd-7ce1-4268-9f51-ecb41842f13e
ms.date: 08/13/2021
monikerRange: '>= tfs-2018'
---

# NuGet task

**Version 2.**

[!INCLUDE [version-tfs-2018](../../includes/version-tfs-2018.md)]

> [!NOTE]
> The [NuGet Authenticate](nuget-authenticate.md) task is the new recommended way to authenticate with Azure Artifacts and other NuGet repositories. This task no longer takes new features and only critical bugs are addressed. 

Use this task to install and update NuGet package dependencies, or package and publish NuGet packages. Uses NuGet.exe and works with .NET Framework apps. For .NET Core and .NET Standard apps, use the .NET Core task.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

If your code depends on NuGet packages, make sure to add this step before your [Visual Studio Build step](../build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGet Packages** checkbox in that step.

If you are working with .NET Core or .NET Standard, use the [.NET Core](../build/dotnet-core-cli.md) task, which has full support for all package scenarios and it's currently supported by dotnet.

> [!TIP]
> This version of the NuGet task uses NuGet 4.1.0 by default. To select a different version of NuGet, use the [Tool Installer](../tool/nuget.md).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/NuGetCommandV2.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `command`<br/>Command | The NuGet command to run. Select 'Custom' to add arguments or to use a different command.<br/>Options: `restore`, `pack`, `custom`, `push` |
| `restoreSolution`<br/>Path to solution, packages.config, or project.json | The path to the solution, packages.config, or project.json file that references the packages to be restored. |
| `feedsToUse`<br/>Feeds to use | You can either select a feed from Azure Artifacts and/or NuGet.org, or commit a nuget.config file to your source code repository and set its path here.<br/>Options: `select`, `config`. |
| `vstsFeed`<br/>Use packages from this Azure Artifacts/TFS feed | Include the selected feed in the generated NuGet.config. You must have Azure Artifacts installed and licensed to select a feed here. |
| `includeNuGetOrg`<br/>Use packages from NuGet.org | Include NuGet.org in the generated NuGet.config. Default value is `true`.<br/>Required when `feedsToUse` == `Select`.|
| `nugetConfigPath`<br/>Path to NuGet.config | The NuGet.config in your repository that specifies the feeds from which to restore packages.<br/>Required when `feedsToUse` == `Config`|
| `externalFeedCredentials`<br/>Credentials for feeds outside this organization/collection | Credentials to use for external registries located in the selected NuGet.config. This is the name of your NuGet service connection. For feeds in this organization/collection, leave this blank; the build’s credentials are used automatically. |
| `noCache`<br/>Disable local cache | Prevents NuGet from using packages from local machine caches. |
| `disableParallelProcessing`<br/>Disable parallel processing | Prevents NuGet from installing multiple packages in parallel. |
| `restoreDirectory`<br/>Destination directory | Specifies the folder in which packages are installed. If no folder is specified, packages are restored into a packages/ folder alongside the selected solution, packages.config, or project.json. |
| `verbosityRestore`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `nuGetFeedType`<br/>Target feed location | Specifies whether the target feed is an internal feed/collection or an external NuGet server.<br/>Options: `internal`, `external`.<br/>Required when `command` == `Push` |
| `publishVstsFeed`<br/>Target feed | Select a feed hosted in this account. You must have Azure Artifacts installed and licensed to select a feed here. |
| `packagesToPush`<br/>Packages location | The pattern to match or path to the nupkg files.<br/>Example: '$(Build.ArtifactStagingDirectory)/*.nupkg'.<br/>Required when `command` == `Push`|
| `publishPackageMetadata`<br/>Publish pipeline metadata | If you continually publish a set of packages and only change the version number of the subset of packages that changed, use this option. |
| `allowPackageConflicts` | It allows the task to report success even if some of your packages are rejected with 409 Conflict errors.<br/>If NuGet.exe encounters a conflict, the task will fail. This option will not work and publish will fail if you are within a proxy environment. |
| `publishFeedCredentials`<br/>NuGet server | The NuGet service connection that contains the external NuGet server’s credentials. |
| `verbosityPush`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `packagesToPack`<br/>Path to csproj or nuspec file(s) to pack | Pattern to search for csproj directories to pack.<br />You can separate multiple patterns with a semicolon, and you can make a pattern negative by prefixing it with *!*.<br/>Example: `**\\*.csproj;!**\\*.Tests.csproj` |
| `configuration`<br/>Configuration to package | When using a csproj file this specifies the configuration to package. |
| `packDestination`<br/>Package folder | Folder where packages will be created. If empty, packages will be created at the source root. |
| `versioningScheme`<br/>Automatic package versioning | Cannot be used with include referenced projects. If you choose `Use the date and time`, this will generate a [SemVer-compliant](https://semver.org/spec/v1.0.0.html) version formatted as `X.Y.Z-ci-datetime` where you choose X, Y, and Z.<br />If you choose `Use an environment variable`, you must select an environment variable and ensure it contains the version number you want to use.<br/>If you choose `Use the build number`, this will use the build number to version your package.<br/>**Note:** You can set the build number format using the *name* property as follows:<br/>name: $(BuildDefinitionName)_$(Date:yyyyMMdd)$(Rev:.rr).<br/>Options: `off`, `byPrereleaseNumber`, `byEnvVar`, `byBuildNumber` |
| `includeReferencedProjects`<br/>Environment variable | Enter the variable name without $, $env, or %. |
| `majorVersion`<br/>Major | The 'X' in version [X.Y.Z](https://semver.org/spec/v1.0.0.html) |
| `minorVersion`<br/>Minor | The 'Y' in version [X.Y.Z](https://semver.org/spec/v1.0.0.html) |
| `patchVersion`<br/>Patch | The 'Z' in version [X.Y.Z](https://semver.org/spec/v1.0.0.html) |
| `packTimezone`<br/>Time zone | Specifies the desired time zone used to produce the version of the package. Selecting UTC is recommended if you're using hosted build agents as their date and time might differ.<br/>Options: `utc`, `local` |
| `includeSymbols`<br/>Create symbols package | Specifies that the package contains sources and symbols. When used with a .nuspec file, this creates a regular NuGet package file and the corresponding symbols package. |
| `toolPackage`<br/>Tool Package | Determines if the output files of the project should be in the tool folder. |
| `buildProperties`<br/>Additional build properties | Specifies a list of token=value pairs, separated by semicolons, where each occurrence of $token$ in the .nuspec file will be replaced with the given value. Values can be strings in quotation marks. |
| `basePath`<br/>Base path | The base path of the files defined in the nuspec file. |
| `verbosityPack`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `Quiet`, `Normal`, `Detailed` |
| `arguments`<br/>Command and arguments | The command and arguments which will be passed to NuGet.exe for execution. If NuGet 3.5 or later is used, authenticated commands like list, restore, and publish against any feed in this organization/collection that the Project Collection Build Service has access to will be automatically authenticated. |

::: moniker range="> tfs-2018"

## Versioning schemes

For **byPrereleaseNumber**, the version will be set to whatever you choose for major, minor, and patch, plus the date and time in the format `yyyymmdd-hhmmss`.

For **byEnvVar**, the version will be set to the value of the environment variable that has the name specified by the **versionEnvVar** parameter, e.g. `MyVersion` (no **$**, just the environment variable name). Make sure the environment variable is set to a proper SemVer e.g. `1.2.3` or `1.2.3-beta1`.

For **byBuildNumber**, the version will be set using the pipeline run's build number.  This is the value specified for the pipeline's `name` property, which gets saved to the `BUILD_BUILDNUMBER` environment variable).  Ensure that the build number being used contains a proper SemVer e.g. `1.0.$(Rev:r)`. When using **byBuildNumber**, the task will extract the dotted version, `1.2.3.4` from the build number string, and use only that portion.  The rest of the string will be dropped.  If you want to use the build number as is, you can use **byEnvVar** as described above, and set **versionEnvVar** to `BUILD_BUILDNUMBER`.

::: moniker-end

## Examples

### Restore

Restore all your solutions with packages from a selected feed.

```YAML
# Restore from a project scoped feed in the same organization
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    vstsFeed: 'my-project/my-project-scoped-feed'
    includeNuGetOrg: false
    restoreSolution: '**/*.sln'
```

```YAML
# Restore from an organization scoped feed in the same organization
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    vstsFeed: 'my-organization-scoped-feed'
    restoreSolution: '**/*.sln'
```

```YAML
# Restore from a feed in a different organization
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: config
    nugetConfigPath: ./nuget.config
    restoreSolution: '**/*.sln'
    externalFeedCredentials: 'MyServiceConnectionName'
    noCache: true
  continueOnError: true
```

```YAML
# Restore from feed(s) set in nuget.config
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: 'config'
    nugetConfigPath: 'nuget.config'
```
### Package

Create a NuGet package in the destination folder.

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
> Pipeline artifacts are downloaded to `System.ArtifactsDirectory` directory. `packagesToPush` value can be set to `$(System.ArtifactsDirectory)/**/*.nupkg` in your release pipeline.

* Push/Publish a package to a feed defined in your NuGet.config.

    ```YAML
    # Push a project
    - task: NuGetCommand@2
      inputs:
        command: 'push'
        packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg'
        feedsToUse: 'config'
        nugetConfigPath: '$(Build.WorkingDirectory)/NuGet.config'
    ```

* Push/Publish a package to a project scoped

    ```YAML
    # Push a project
    - task: NuGetCommand@2
      inputs:
        command: 'push'
        feedsToUse: 'select'
        vstsFeed: 'my-project/my-project-scoped-feed'
        publishVstsFeed: 'myTestFeed'
    ```

* Push/Publish a package to NuGet.org

    ```YAML
    # Push a project
    - task: NuGetCommand@2
      inputs:
        command: 'push'
        feedsToUse: 'config'
        includeNugetOrg: 'true'
    ```
### Custom

Run any other NuGet command besides the default ones: pack, push, and restore.

```YAML
# list local NuGet resources.
- task: NuGetCommand@2
  displayName: 'list locals'
  inputs:
    command: custom
    arguments: 'locals all -list'
```
## Open-source

Check out the Azure Pipelines and Team Foundation Server out-of-the-box tasks [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome. 

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/nuget-step-qa.md)]

[!INCLUDE [temp](../../includes/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

### My Pipeline needs to access a feed in a different project

If the pipeline is running in a different project than the project hosting the feed, you must set up the other project to grant read/write access to the build service. See [Package permissions in Azure Pipelines](../../../artifacts/feeds/feed-permissions.md#pipelines-permissions) for more details.

<!-- ENDSECTION -->
