---
title: .NET Core build and release task
ms.custom: seodec18
description: How to use npm packages build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1CFB5762-5ABB-4107-BDF0-5079555101DC
ms.manager: jillfra
ms.author: amullans
ms.date: 05/16/2018
monikerRange: '>= tfs-2017'
---

# .NET Core task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to build, test, and release .NET Core and .NET Standard projects and create .NET Core and .NET Standard NuGet packages using the `dotnet` command-line tool.

If your .NET Core or .NET Standard build depends on NuGet packages, make sure to add two copies of this step: one with the `restore` command and one with the `build` command.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Restore NuGet packages

### Demands

None

::: moniker range="> tfs-2018"
### YAML snippet
```YAML
# .NET Core
# Restore NuGet packages.
- task: DotNetCoreCLI@2
  inputs:
    command: 'restore'
    projects: '**/*.csproj'
    #verbosityRestore: 'detailed' # Options: quiet, minimal, normal, detailed, diagnostic
```
::: moniker-end

### Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Command</td><td>(Required) The dotnet command to run. Select 'Custom' to add arguments or use a command not listed here.</td></tr>
<tr><td>Path to project(s)</td><td>(Optional) The path to the csproj file(s) to use. You can use wildcards (e.g. **/*.csproj for all .csproj files in all subfolders).</td></tr>
<tr><td>Verbosity</td><td>(Required) Specifies the amount of detail displayed in the output.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Pack NuGet packages

### Demands

None

::: moniker range="> tfs-2018"
### YAML snippet
```YAML
# .NET Core
# Pack NuGet packages.
- task: DotNetCoreCLI@2
  inputs:
    command: 'pack'
    configuration: 'release'
    #packagesToPack: '**/*.csproj' # Required when command == pack
    #packDirectory: '$(build.artifactStagingDirectory)' # Optional
    #nobuild: false # Optional
    #versioningScheme: 'off' # Options: off, byPrereleaseNumber, byEnvVar, byBuildNumber
    #versionEnvVar: # Required when versioningScheme == byEnvVar
    #majorVersion: '1' # Required when versioningScheme == byPrereleaseNumber
    #minorVersion: '0' # Required when versioningScheme == byPrereleaseNumber
    #patchVersion: '0' # Required when versioningScheme == byPrereleaseNumber
    #buildProperties: # Optional
    #verbosityPack: 'detailed' # Options: quiet, minimal, normal, detailed, diagnostic
```
::: moniker-end

### Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Command</td><td>(Required) The dotnet command to run. Select 'Custom' to add arguments or use a command not listed here.</td></tr>
<tr><td>Configuration to Package</td><td>(Optional) When using a csproj file this specifies the configuration to package</td></tr>
<tr><td>Package Folder</td><td>(Optional) Folder where packages will be created. If empty, packages will be created alongside the csproj file.</td></tr>
<tr><td>Do not build</td><td>(Optional) Don't build the project before packing. Corresponds to the --no-build command line parameter.</td></tr>
<tr><td>Automatic package versioning</td><td>(Required) Cannot be used with include referenced projects. If you choose 'Use the date and time', this will generate a [SemVer](http://semver.org/spec/v1.0.0.html)-compliant version formatted as `X.Y.Z-ci-datetime` where you choose X, Y, and Z.

If you choose 'Use an environment variable', you must select an environment variable and ensure it contains the version number you want to use.

If you choose 'Use the build number', this will use the build number to version your package. **Note:** Under Options set the build number format to be '[$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)](https://go.microsoft.com/fwlink/?LinkID=627416)'.</td></tr>
<tr><td>Environment variable</td><td>(Required) Enter the variable name without $, $env, or %.</td></tr>
<tr><td>Major</td><td>(Required) The 'X' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html)</td></tr>
<tr><td>Minor</td><td>(Required) The 'Y' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html)</td></tr>
<tr><td>Patch</td><td>(Required) The 'Z' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html)</td></tr>
<tr><td>Additional build properties</td><td>(Optional) Specifies a list of token = value pairs, separated by semicolons, where each occurrence of $token$ in the .nuspec file will be replaced with the given value. Values can be strings in quotation marks.</td></tr>
<tr><td>Verbosity</td><td>(Required) Specifies the amount of detail displayed in the output.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Push NuGet packages

### Demands

None

::: moniker range="> tfs-2018"
### YAML snippet
```YAML
# .NET Core
# Push NuGet packages.
- task: DotNetCoreCLI@2
  inputs:
    command: 'push'
    #nuGetFeedType: 'internal' # Required when command == push. Options: internal, external
    #packagesToPush: '$(build.artifactStagingDirectory)/*.nupkg' # Required when command == push
    #publishVstsFeed: # Required when command == push && NuGetFeedType == internal
    #publishFeedCredentials: # Required when command == push && NuGetFeedType == external
```
::: moniker-end

### Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Command</td><td>(Required) The dotnet command to run. Select 'Custom' to add arguments or use a command not listed here.</td></tr>
<tr><td>Target feed location</td><td>(Required) Use 'internal' for this organization/collection. Use 'external' for an external NuGet server (including other accounts/collections).</td></tr>
<tr><td>Path to NuGet package(s) to publish</td><td>(Required) The pattern to match or path to nupkg files to be uploaded. Multiple patterns can be separated by a semicolon, and you can make a pattern negative by prefixing it with '-:'. Example: `**\*.nupkg;-:**\*.Tests.nupkg`</td></tr>
<tr><td>Target feed</td><td>(Required) Select a feed hosted in this organization. You must have Package Management installed and licensed to select a feed here.</td></tr>
<tr><td>NuGet server</td><td>(Required) The NuGet service connection that contains the external NuGet server’s credentials.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Custom NuGet command

::: moniker range="> tfs-2018"
### YAML snippet
```YAML
# .NET Core
# Custom NuGet command.
- task: DotNetCoreCLI@2
  inputs:
    command: custom
    projects: '**/*.csproj'
    custom: 'Enter your custom NuGet command here'
    arguments: '--configuration release --output $(build.artifactStagingDirectory)'
```
::: moniker-end

### Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Command</td><td>(Required) The dotnet command to run. Select 'Custom' to add arguments or use a command not listed here.</td></tr>
<tr><td>Path to project(s)</td><td>(Optional) The path to the csproj file(s) to use. You can use wildcards (e.g. **/*.csproj for all .csproj files in all subfolders).</td></tr>
<tr><td>Custom command</td><td>(Required) The command to pass to dotnet.exe for execution.</td></tr>
<tr><td>Arguments</td><td>(Optional) Arguments to the selected command. For example, build configuration, output folder, runtime. The arguments depend on the command selected.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Why is my build or publish step failing to restore packages?

Most `dotnet` commands, including `build` and `publish`, include an implicit `restore` step. This will fail against authenticated feeds, even if you ran a successful `dotnet restore` in an earlier step, because the earlier step will have cleaned up the credentials it used.

To fix this issue, add the `--no-restore` flag to the Arguments textbox.

[!INCLUDE [temp](../_shared/nuget-step-qa.md)]

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
