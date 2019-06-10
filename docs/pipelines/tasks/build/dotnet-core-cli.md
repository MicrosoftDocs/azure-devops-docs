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
ms.date: 05/29/2019
monikerRange: 'azure-devops'
---

# .NET Core CLI task

**Azure Pipelines**

Use this task in a build or release pipeline to build, test, package, or publish a dotnet application, or to run a custom dotnet command. For package commands, this task supports NuGet.org and authenticated feeds like Package Management and MyGet.

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) The dotnet command to run. Select 'Custom' to add arguments or use a command not listed here <br/>Default value: build</td></tr>
<tr><td><code>publishWebProjects</code><br/>Publish Web Projects</td><td>(Required) If true, the task will try to find the web projects in the repository and run the publish command on them. Web projects are identified by presence of either a web.config file or wwwroot folder in the directory <br/>Default value: true</td></tr>
<tr><td><code>projects</code><br/>Path to project(s)</td><td>(Optional) The path to the csproj file(s) to use. You can use wildcards (e.g. &ast;&ast;/.csproj for all .csproj files in all subfolders).</td></tr>
<tr><td><code>custom</code><br/>Custom command</td><td>(Required) The command to pass to dotnet.exe for execution</td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Arguments to the selected command. For example, build configuration, output folder, runtime. The arguments depend on the command selected</td></tr>
<tr><td><code>publishTestResults</code><br/>Publish test results</td><td>(Optional) Enabling this option will generate a test results TRX file in `$(Agent.TempDirectory)` and results will be published to the server. <br>This option appends `--logger trx --results-directory $(Agent.TempDirectory)` to the command line arguments. <br/>Default value: true</td></tr>
<tr><td><code>testRunTitle</code><br/>Test run title</td><td>(Optional) Provide a name for the test run</td></tr>
<tr><td><code>zipAfterPublish</code><br/>Zip Published Projects</td><td>(Optional) If true, folder created by the publish command will be zipped. <br/>Default value: true</td></tr>
<tr><td><code>modifyOutputPath</code><br/>Add project name to publish path</td><td>(Optional) If true, folders created by the publish command will have project file name prefixed to their folder names when output path is specified explicitly in arguments. This is useful if you want to publish multiple projects to the same folder. <br/>Default value: true</td></tr>
<tr><td><code>selectOrConfig</code><br/>Feeds to use</td><td>(Required) You can either select a feed from Azure Artifacts and/or NuGet.org here, or commit a nuget.config file to your source code repository and set its path here. <br/>Default value: select</td></tr>
<tr><td><code>feedRestore</code><br/>Use packages from this Azure Artifacts/TFS feed</td><td>(Optional) Include the selected feed in the generated NuGet.config. You must have Package Management installed and licensed to select a feed here.</td></tr>
<tr><td><code>includeNuGetOrg</code><br/>Use packages from NuGet.org</td><td>(Optional) Include NuGet.org in the generated NuGet.config. <br/>Default value: true</td></tr>
<tr><td><code>nugetConfigPath</code><br/>Path to NuGet.config</td><td>(Optional) The NuGet.config in your repository that specifies the feeds from which to restore packages.</td></tr>
<tr><td><code>externalEndpoints</code><br/>Credentials for feeds outside this organization/collection</td><td>(Optional) Credentials to use for external registries located in the selected NuGet.config. For feeds in this organization/collection, leave this blank; the build’s credentials are used automatically</td></tr>
<tr><td><code>noCache</code><br/>Disable local cache</td><td>(Optional) Prevents NuGet from using packages from local machine caches <br/>Default value: false</td></tr>
<tr><td><code>packagesDirectory</code><br/>Destination directory</td><td>(Optional) Specifies the folder in which packages are installed. If no folder is specified, packages are restored into the default NuGet package cache</td></tr>
<tr><td><code>verbosityRestore</code><br/>Verbosity</td><td>(Optional) Specifies the amount of detail displayed in the output <br/>Default value: Detailed</td></tr>
<tr><td><code>searchPatternPush</code><br/>Path to NuGet package(s) to publish</td><td>(Required) The pattern to match or path to nupkg files to be uploaded. Multiple patterns can be separated by a semicolon, and you can make a pattern negative by prefixing it with '-:'. Example: &ast;&ast;/&ast;.nupkg;-:&ast;&ast;/&ast;.Tests.nupkg <br/>Default value: $(Build.ArtifactStagingDirectory)/*.nupkg
</td></tr>
<tr><td><code>nuGetFeedType</code><br/>Target feed location</td><td>(Required) undefined <br/>Default value: internal</td></tr>
<tr><td><code>feedPublish</code><br/>Target feed</td><td>(Required) Select a feed hosted in this organization. You must have Package Management installed and licensed to select a feed here</td></tr>
<tr><td><code>publishPackageMetadata</code><br/>Publish pipeline metadata</td><td>Associate this build/release pipeline’s metadata (run #, source code information) with the package <br/>Default value: true</td></tr>
<tr><td><code>externalEndpoint</code><br/>NuGet server</td><td>(Required) The NuGet service connection that contains the external NuGet server’s credentials.</td></tr>
<tr><td><code>searchPatternPack</code><br/>Path to csproj or nuspec file(s) to pack</td><td>(Required) Pattern to search for csproj or nuspec files to pack.

You can separate multiple patterns with a semicolon, and you can make a pattern negative by prefixing it with '-:'. Example: &ast;&ast;/&ast;.csproj;-:&ast;&ast;/&ast;.Tests.csproj <br/>Default value: **/*.csproj</td></tr>
<tr><td><code>configurationToPack</code><br/>Configuration to Package</td><td>(Optional) When using a csproj file this specifies the configuration to package <br/>Default value: $(BuildConfiguration)</td></tr>
<tr><td><code>outputDir</code><br/>Package Folder</td><td>(Optional) Folder where packages will be created. If empty, packages will be created alongside the csproj file <br/>Default value: $(Build.ArtifactStagingDirectory)</td></tr>
<tr><td><code>nobuild</code><br/>Do not build</td><td>(Optional) Don't build the project before packing. Corresponds to the --no-build command line parameter.</td></tr>
<tr><td><code>includesymbols</code><br/>Include Symbols</td><td>(Optional) Additionally creates symbol NuGet packages. Corresponds to the --include-symbols command line parameter <br/>Default value: false</td></tr>
<tr><td><code>includesource</code><br/>Include Source</td><td>(Optional) Includes source code in the package. Corresponds to the --include-source command line parameter <br/>Default value: false</td></tr>
<tr><td><code>versioningScheme</code><br/>Automatic package versioning</td><td>(Required) Cannot be used with include referenced projects. If you choose 'Use the date and time', this will generate a [SemVer](http://semver.org/spec/v1.0.0.html)-compliant version formatted as `X.Y.Z-ci-datetime` where you choose X, Y, and Z.

If you choose 'Use an environment variable', you must select an environment variable and ensure it contains the version number you want to use.

If you choose 'Use the build number', this will use the build number to version your package. **Note:** Under Options set the build number format to be '[$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)](https://go.microsoft.com/fwlink/?LinkID=627416)' <br/>Default value: off</td></tr>
<tr><td><code>versionEnvVar</code><br/>Environment variable</td><td>(Required) Enter the variable name without $, $env, or %</td></tr>
<tr><td><code>requestedMajorVersion</code><br/>Major</td><td>(Required) The 'X' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) <br/>Default value: 1</td></tr>
<tr><td><code>requestedMinorVersion</code><br/>Minor</td><td>(Required) The 'Y' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) <br/>Default value: 0</td></tr>
<tr><td><code>requestedPatchVersion</code><br/>Patch</td><td>(Required) The 'Z' in version [X.Y.Z](http://semver.org/spec/v1.0.0.html) <br/>Default value: 0</td></tr>
<tr><td><code>buildProperties</code><br/>Additional build properties</td><td>(Optional) Specifies a list of token = value pairs, separated by semicolons, where each occurrence of $token$ in the .nuspec file will be replaced with the given value. Values can be strings in quotation marks</td></tr>
<tr><td><code>verbosityPack</code><br/>Verbosity</td><td>(Optional) Specifies the amount of detail displayed in the output <br/>Default value: Detailed</td></tr>
<tr><td><code>workingDirectory</code><br/>Working Directory</td><td>(Optional) Current working directory where the script is run. Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)</td></tr>
</table>

## Example

The following example builds a project.

```YAML
steps:
- task: DotNetCoreCLI@2
  inputs:
    command: build
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.