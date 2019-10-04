---
title: .NET Core CLI task
ms.custom: seodec18
description: Build, test, package, or publish a dotnet application, or run a custom dotnet command. For package commands, supports NuGet.org and authenticated feeds like Package Management and MyGet.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5541a522-603c-47ad-91fc-a4b1d163081b
ms.manager: jillfra
ms.author: puagarw
author: pulkitaggarwl
ms.date: 07/02/2019
monikerRange: '>= tfs-2017'
---

# .NET Core CLI task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

**Azure Pipelines**

Use this task in a build or release pipeline to build, test, package, or publish a dotnet application, or to run a custom dotnet command. For package commands, this task supports NuGet.org and authenticated feeds like Package Management and MyGet.

If your .NET Core or .NET Standard build depends on NuGet packages, make sure to add two copies of this step: one with the `restore` command and one with the `build` command.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet
 
[!INCLUDE [temp](../_shared/yaml/DotNetCoreCliV2.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>The dotnet command to run. Select <code>custom</code> to add arguments or use a command not listed here.<br/>Options: <code>build</code>, <code>push</code>, <code>pack</code>, <code>restore</code>, <code>run</code>, <code>test</code>, <code>custom</code></td></tr>
<tr><td><code>selectOrConfig</code><br/>Feeds to use</td><td>You can either choose to select a feed from Azure Artifacts and/or NuGet.org here, or commit a nuget.config file to your source code repository and set its path using the <code>nugetConfigPath</code> argument.<br/>Options: <code>select</code>, <code>config</code></td></tr>
<tr><td><code>versioningScheme</code><br/>Automatic package versioning</td><td>Cannot be used with include referenced projects. If you choose &#39;Use the date and time&#39;, this will generate a <a href="http://semver.org/spec/v1.0.0.html" data-raw-source="[SemVer](http://semver.org/spec/v1.0.0.html)">SemVer</a>-compliant version formatted as <code>X.Y.Z-ci-datetime</code> where you choose X, Y, and Z.

If you choose &#39;Use an environment variable&#39;, you must select an environment variable and ensure it contains the version number you want to use.

If you choose &#39;Use the build number&#39;, this will use the build number to version your package. <strong>Note:</strong> Under Options set the build number format to be &#39;<a href="https://go.microsoft.com/fwlink/?LinkID=627416" data-raw-source="[$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)](https://go.microsoft.com/fwlink/?LinkID=627416)">$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)</a>&#39; <br/>Options: <code>off</code>, <code>byPrereleaseNumber</code>, <code>byEnvVar</code>, <code>byBuildNumber</code>, </td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>Arguments to the selected command. For example, build configuration, output folder, runtime. The arguments depend on the command selected<br/>Note: This input only currently accepts arguments for <code>build</code>, <code>publish</code>, <code>run</code>, <code>test</code>, <code>custom</code>. If you would like to add arguments for a command not listed, use <code>custom</code>.</td></tr>
<tr><td><code>projects</code><br/>Path to project(s)</td><td>The path to the csproj file(s) to use. You can use wildcards (e.g. <code>&ast;&ast;/&ast;.csproj</code> for all .csproj files in all subfolders).</td></tr>
<tr><td><code>noCache</code><br/>Disable local cache</td><td>Prevents NuGet from using packages from local machine caches.</td></tr>
<tr><td><code>packagesDirectory</code><br/>Destination directory</td><td>Specifies the folder in which packages are installed. If no folder is specified, packages are restored into the default NuGet package cache</td></tr>
<tr><td><code>buildProperties</code><br/>Additional build properties</td><td>Specifies a list of <code>token = value</code> pairs, separated by semicolons, where each occurrence of $token$ in the .nuspec file will be replaced with the given value. Values can be strings in quotation marks</td></tr>
<tr><td><code>verbosityPack</code><br/>Verbosity</td><td>Specifies the amount of detail displayed in the output for the <code>pack</code> command.</td></tr>
<tr><td><code>verbosityRestore</code><br/>Verbosity</td><td>Specifies the amount of detail displayed in the output for the <code>restore</code> command.</td></tr>
<tr><td><code>workingDirectory</code><br/>Working Directory</td><td>Current working directory where the script is run. Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)</td></tr>
<tr><td><code>searchPatternPush</code><br/>Path to NuGet package(s) to publish</td><td>The pattern to match or path to nupkg files to be uploaded. Multiple patterns can be separated by a semicolon, and you can make a pattern negative by prefixing it with <code>-:</code>. <strong>Example:</strong> <code>&ast;&ast;/&ast;.nupkg;-:&ast;&ast;/&ast;.Tests.nupkg.</code></td></tr>
<tr><td><code>nuGetFeedType</code><br/>Target feed location</td><td>Specifies whether the target feed is internal or external.<br/>Options: <code>internal</code>, <code>external</code></td></tr>
<tr><td><code>feedPublish</code><br/>Target feed</td><td>Select a feed hosted in your organization. You must have Package Management installed and licensed to select a feed here</td></tr>
<tr><td><code>publishPackageMetadata</code><br/>Publish pipeline metadata</td><td>Associate this build/release pipeline’s metadata (run ID, source code information) with the package</td></tr>
<tr><td><code>externalEndpoint</code><br/>NuGet server</td><td>The NuGet <a href="../../library/service-endpoints.md" data-raw-source="[service connection](../../library/service-endpoints.md)">service connection</a> that contains the external NuGet server’s credentials.</td></tr>
<tr><td><code>searchPatternPack</code><br/>Path to csproj or nuspec file(s) to pack</td><td>Pattern to search for csproj or nuspec files to pack. You can separate multiple patterns with a semicolon, and you can make a pattern negative by prefixing it with <code>-:</code>. <strong>Example:</strong> <code>&ast;&ast;/&ast;.csproj;-:&ast;&ast;/&ast;.Tests.csproj</code></td></tr>
<tr><td><code>configurationToPack</code><br/>Configuration to Package</td><td>When using a csproj file this specifies the configuration to package.</td></tr>
<tr><td><code>outputDir</code><br/>Package Folder</td><td>Folder where packages will be created. If empty, packages will be created alongside the csproj file.</td></tr>
<tr><td><code>nobuild</code><br/>Do not build</td><td>Don&#39;t build the project before packing. Corresponds to the <code>--no-build</code> command line parameter.</td></tr>
<tr><td><code>includesymbols</code><br/>Include Symbols</td><td>Additionally creates symbol NuGet packages. Corresponds to the <code>--include-symbols</code> command line parameter.</td></tr>
<tr><td><code>includesource</code><br/>Include Source</td><td>Includes source code in the package. Corresponds to the <code>--include-source</code> command line parameter.</td></tr>
<tr><td><code>publishWebProjects</code><br/>Publish Web Projects</td><td>If true, the task will try to find the web projects in the repository and run the publish command on them. Web projects are identified by presence of either a web.config file or wwwroot folder in the directory.</td></tr>
<tr><td><code>zipAfterPublish</code><br/>Zip Published Projects</td><td>If true, folder created by the publish command will be zipped.</td></tr>
<tr><td><code>modifyOutputPath</code><br/>Add project name to publish path</td><td>If true, folders created by the publish command will have project file name prefixed to their folder names when output path is specified explicitly in arguments. This is useful if you want to publish multiple projects to the same folder.</td></tr>
<tr><td><code>publishTestResults</code><br/>Publish test results</td><td>Enabling this option will generate a test results TRX file in <code>$(Agent.TempDirectory)</code> and results will be published to the server. <br>This option appends <code>--logger trx --results-directory $(Agent.TempDirectory)</code> to the command line arguments.</td></tr>
<tr><td><code>testRunTitle</code><br/>Test run title</td><td>Provides a name for the test run</td></tr>
<tr><td><code>custom</code><br/>Custom command</td><td>The command to pass to dotnet.exe for execution.<br/>For a full list of available commands, see the <a href="https://docs.microsoft.com/dotnet/core/tools/?tabs=netcore2x#cli-commands" data-raw-source="[dotnet CLI documentation](https://docs.microsoft.com/dotnet/core/tools/?tabs=netcore2x#cli-commands)">dotnet CLI documentation</a></td></tr>
<tr><td><code>feedRestore</code><br/>Use packages from this Azure Artifacts/TFS feed</td><td>Include the selected feed in the generated NuGet.config. You must have Package Management installed and licensed to select a feed here.</td></tr>
<tr><td><code>includeNuGetOrg</code><br/>Use packages from NuGet.org</td><td>Include NuGet.org in the generated NuGet.config000
0.
</td></tr>
<tr><td><code>nugetConfigPath</code><br/>Path to NuGet.config</td><td>The NuGet.config in your repository that specifies the feeds from which to restore packages.</td></tr>
<tr><td><code>externalEndpoints</code><br/>Credentials for feeds outside this organization/collection</td><td>Credentials to use for external registries located in the selected NuGet.config. For feeds in this organization/collection, leave this blank; the build’s credentials are used automatically</td></tr>
<tr><td><code>versionEnvVar</code><br/>Environment variable</td><td>Enter the variable name without $, $env, or %</td></tr>
<tr><td><code>requestedMajorVersion</code><br/>Major</td><td>The &#39;X&#39; in version <a href="http://semver.org/spec/v1.0.0.html" data-raw-source="[X.Y.Z](http://semver.org/spec/v1.0.0.html)">X.Y.Z</a>.</td></tr>
<tr><td><code>requestedMinorVersion</code><br/>Minor</td><td>The &#39;Y&#39; in version <a href="http://semver.org/spec/v1.0.0.html" data-raw-source="[X.Y.Z](http://semver.org/spec/v1.0.0.html)">X.Y.Z</a>.</td></tr>
<tr><td><code>requestedPatchVersion</code><br/>Patch</td><td>The &#39;Z&#39; in version <a href="http://semver.org/spec/v1.0.0.html" data-raw-source="[X.Y.Z](http://semver.org/spec/v1.0.0.html)">X.Y.Z</a>.</td></tr>

[!INCLUDE [temp](../_shared/control-options-arguments.md)]

</table>

## Examples

## Build

### Build a project

```YAML
# Build project
- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
```

### Build Multiple Projects

```YAML
# Build multiple projects
- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
    projects: |
     src/proj1/proj1.csproj 
     src/proj2/proj2.csproj 
     src/other/other.sln    # Pass a solution instead of a csproj.
```

## Push

### Push NuGet packages to internal feed

```YAML
# Push non test NuGet packages from a build to internal organization Feed
- task: DotNetCoreCLI@2
  inputs:
    command: 'push'
    searchPatternPush: '$(Build.ArtifactStagingDirectory)/*.nupkg;-:$(Build.ArtifactStagingDirectory)/*.Tests.nupkg'
    feedPublish: 'FabrikamFeed'
```

### Push NuGet packages to external feed

```YAML
# Push all NuGet packages from a build to internal organization Feed
- task: DotNetCoreCLI@2
  inputs:
    command: 'push'
    nugetFeedType: 'external'
    externalEndPoint: 'MyNuGetServiceConnection'
```

## Pack

### Pack a NuGetPackage to a specific output directory

```YAML
# Pack a NuGet package to a test directory
- task: DotNetCoreCLI@2
  inputs: 
    command: 'pack'
    outputDir: '$(Build.ArtifactStagingDirectory)/TestDir'
```

### Pack a Symbol Package

```YAML
# Pack a symbol package along with NuGet package
- task: DotNetCoreCLI@2
  inputs: 
    command: 'pack'
    includesymbols: true
```

## Publish

### Publish a package to external endpoint

```YAML
# Publish package to an external endpoint with a stored NuGet config file and stored credentials.
- task: DotNetCoreCLI@2
  inputs:
    command: 'pack'
    selectOrConfig: 'config'
    nugetConfigPath: '$(System.DefaultWorkingDirectory)/NuGet.Config'
    externalEndpoints: $(externalFeedCredential)
```
## Test

### Run tests in your repository

```YAML
# Run tests and auto publish test results.
- task: DotNetCoreCLI@2
  inputs:
    command: 'test'
```

## Q & A

### Why is my build or publish step failing to restore packages?

Most `dotnet` commands, including `build` and `publish`, include an implicit `restore` step. This will fail against authenticated feeds, even if you ran a successful `dotnet restore` in an earlier step, because the earlier step will have cleaned up the credentials it used.

To fix this issue, add the `--no-restore` flag to the Arguments textbox.

### Why should I check in a NuGet.Config?

Checking a NuGet.Config into source control ensures that a key piece of information needed to build your project-the location of its packages-is available to every developer that checks out your code.

However, for situations where a team of developers works on a large range of projects, it's also possible to add an Azure Artifacts feed to the global NuGet.Config on each developer's machine. In these situations, using the "Feeds I select here" option in the NuGet task replicates this configuration.

## Open Source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
