---
title: NuGet restore, pack, and publish
description: How to use NuGet packages when building code in VSTS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7e2793cd-7ce1-4268-9f51-ecb41842f13e
ms.manager: douge
ms.author: elbatk
ms.date: 07/05/2017
---

# Package: NuGet

**Version 2.\* | [Other versions](#versions)**

**VSTS | TFS 2018**

![](_img/nuget.png) Install and update NuGet package dependencies, or package and publish NuGet packages. 

If your code depends on NuGet packages, make sure to add this step before your [Visual Studio Build step](../build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGet Packages** checkbox in that step.

> [!TIP]
> Looking for help to get started? See the how-to's for [restoring](../../../package/nuget/consume.md) and [publishing](../../../package/nuget/publish.md) packages.

> [!TIP]
> This version of the NuGet task uses NuGet 4.1.0 by default. To select a different version of NuGet, use the [Tool Installer](../tool/nuget.md).

> [!NOTE]
> Using or creating .NET Core or .NET Standard packages? Use the [.NET Core](../build/dotnet-core.md) task, which has full support for all package scenarios currently supported by dotnet, including restore, pack, and nuget push.

## Restore NuGet packages

### Demands

None

### Arguments

<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Path to solution, packages.config, or project.json</td>
        <td>
            Copy the **Solution** argument in your [Visual Studio Build step](../../tasks/build/visual-studio-build.md) and paste it
            here, or create a link using the Link button in the information panel.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Feeds and authentication</th>
    </tr>
    <tr>
        <td>Feeds to use</td>
        <td>
            **Feed(s) I select here:**
            <ul>
                <li>Select this option to use NuGet.org and/or one Package Management feed in the same account/collection as the build.</li>
            </ul>
            **Feeds in my NuGet.config:**
            <ul>
                <li>Select this option to use feeds specified in a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File)
                    file you've checked into source control.</li>
                <li>Credentials for feeds outside this account/collection can be used to inject credentials you've provided as a [NuGet service endpoint](../../concepts/library/service-endpoints.md#sep-nuget) into your NuGet.config as the build runs.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Disable local cache</td>
        <td>
            Prevents NuGet from using packages from local machine caches.
        </td>
    </tr>
    <tr>
        <td>Destination directory</td>
        <td>
            Specifies the folder in which packages are installed. If no folder is specified, packages are restored into a packages/ folder alongside the selected solution, packages.config, or project.json.
        </td>
    </tr>
    <tr>
        <td>Verbosity</td>
        <td>
            Specifies the amount of detail displayed in the output.
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

### Examples

#### Install NuGet dependencies

You're building a Visual Studio solution that depends on a NuGet feed.

```
`-- ConsoleApplication1
    |-- ConsoleApplication1.sln
    |-- NuGet.config
    `-- ConsoleApplication1
        |-- ConsoleApplication1.csproj
```


##### [Build](../../index.md) steps

<table>
    <tr>
        <td>![Package: NuGet](_img/nuget.png)<br/>**Package: NuGet**</td>
        <td>
            Install your NuGet package dependencies.
            <ul>
                <li>Path to solution, packages.config, or project.json: ```**/*.sln```</li>
                <li>Feeds to use: Feeds in my NuGet.config</li>
                <li>Path to NuGet.config: ```ConsoleApplication1/NuGet.config```</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>![Build: Visual Studio Build](../build/_img/visual-studio-build.png)<br/>**Build: Visual Studio Build**</td>
        <td>
            Build your solution.
            <ul>
                <li>Solution: ```**\*.sln```</li>
                <li>Restore NuGet Packages: **(Important)** Make sure this option is cleared.</li>
            </ul>
        </td>
    </tr>
</table>

## Pack NuGet packages
### Demands

None

### Arguments
<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Path to csproj or nuspec file(s) to pack</td>
        <td>
            Specify .csproj files (for example, ```**\*.csproj```) for simple projects. In this case:
            <ul>
                <li>The packager compiles the .csproj files for packaging.</li>
                <li>You must specify <strong>Configuration to Package</strong> (see below).</li>
                <li>You do not have to check in a .nuspec file. If you do check one in, the packager honors
                    its settings and replaces tokens such as *$id$* and *$description$*.</li>
            </ul>
            Specify .nuspec files (for example, ```**\*.nuspec```) for more complex projects, such as multi-platform scenarios in which you need to compile and package in separate steps. In this case:
            <ul>
                <li>The packager does not compile the .csproj files for packaging.</li>
                <li>Each project is packaged only if it has a .nuspec file checked in.</li>
                <li>The packager does not replace tokens in the .nuspec file (except the <code>&lt;version/&gt;</code> element,
                    see <strong>Use build number to version package</strong>, below). You must supply values for elements
                    such as <code>&lt;id/&gt;</code> and <code>&lt;description/&gt;</code>. The most common way to do this
                    is to hardcode the values in the .nuspec file.
                </li>
            </ul>
           To package a single file, click the <strong>...</strong> button and select the file. To package multiple files, use [file matching patterns](../file-matching-patterns.md). Note that these patterns were updated in version 2 of the NuGet task; if you have a pattern that contains `-:`, use `!` instead.
        </td>
    </tr>
    <tr>
        <td>Configuration to package</td>
        <td>
            If you are packaging a .csproj file, you must specify a configuration that you are building and that you want to package.
            For example: ```Release``` or ```$(BuildConfiguration)```
        </td>
    </tr>
    <tr>
        <td>Package folder</td>
        <td>
            (Optional) Specify the folder where you want to put the packages. You can use a [variable](../../concepts/definitions/build/variables.md) such as ```$(Build.ArtifactStagingDirectory)``` If you leave it empty, the package will be created in the root of your source tree.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Pack options</th>
    </tr>
    <tr>
        <td>Automatic package versioning</td>
        <td>
            [This blog post](https://blogs.msdn.microsoft.com/devops/2016/05/03/versioning-nuget-packages-cd-1/) provides an overview of the automatic package versioning available here.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Additional build properties</td>
        <td>
            Semicolon delimited list of properties used to build the package. For example, you could replace ```
            <description>$description$</description>``` in the .nuspec file this way: ```Description="This is a
            great package"``` Using this argument is equivalent to supplying properties from [nuget pack](https://docs.nuget.org/consume/command-line-reference#pack)
            with the ```-Properties``` option.
        </td>
    </tr>
    <tr>
        <td>Verbosity</td>
        <td>
            Specifies the amount of detail displayed in the output.
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Push NuGet packages

### Demands

None

### Arguments

<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Path to NuGet package(s) to publish</td>
        <td>
            Specify the packages you want to publish.
            <ul>
                <li>Default value: ```$(Build.ArtifactStagingDirectory)/*.nupkg```</li>
                <li>To publish a single package, click the <strong>...</strong> button and select the file.</li>
                <li>Use [file matching patterns](../file-matching-patterns.md) to publish multiple packages. Note that these patterns were updated in version 2 of the NuGet task; if you have a pattern that contains `-:`, use `!` instead.</li>
                <li>Use [variables](../../concepts/definitions/build/variables.md) to specify directories. For example, if you specified ```$(Build.ArtifactStagingDirectory)\``` as the **package folder** in the pack step above, you could specify ```$(Build.ArtifactStagingDirectory)\**\*.nupkg``` here.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Target feed location</td>
        <td>
            <ul>
                <li>**This account/collection** publishes to a Package Management feed in the same account/collection as the build. After you select this option, select the target feed from the dropdown.
                    <ul><li>"Allow duplicates to be skipped" allows you to continually publish a set of packages and only change the version number of the subset of packages that changed. It allows the task to report success even if some of your packages are rejected with 409 Conflict errors. <br />This option is currently only available on VSTS.
                    </li></ul>
                </li>
                <li>**External NuGet server (including other accounts/collections)** publishes to an external server such as [NuGet](https://www.nuget.org/), [MyGet](http://www.myget.org/), or a Package Management feed in another VSTS account or TFS collection. After you select this option, you create and select a [NuGet service endpoint](../../concepts/library/service-endpoints.md#sep-nuget).
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Verbosity</td>
        <td>
            Specifies the amount of detail displayed in the output.
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

### Publishing symbols
When you push packages to a Package Management feed, you can also publish symbols using the [Index Sources & Publish Symbols task](../build/index-sources-publish-symbols.md). 

### Publishing packages to TFS with IIS Basic authentication enabled
This task is unable to publish NuGet packages to a TFS Package Management feed that is running on a TFS server with IIS Basic authentication enabled. [See here](/vsts/integrate/get-started/auth/tfs-basic-auth) for more details.

## Custom NuGet command

### Arguments
<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Command and arguments</td>
        <td>
            NuGet command and arguments you want to pass as your custom command.
        </td>
    </tr>
</table>

## End-to-end example
You want to package and publish some projects in a C# class library to your VSTS feed.

```
`-- Message
    |-- Message.sln
    `-- ShortGreeting
        |-- ShortGreeting.csproj
        |-- Class1.cs
        `-- Properties
            |-- AssemblyInfo.cs
    `-- LongGreeting
        |-- LongGreeting.csproj
        |-- Class1.cs
        `-- Properties
            |-- AssemblyInfo.cs
```

<a name="prepare"></a>

### Prepare

#### AssemblyInfo.cs
Make sure your AssemblyInfo.cs files contain the information you want shown in your packages. For example, ```AssemblyCompanyAttribute``` will be shown as the author, and ```AssemblyDescriptionAttribute``` will be shown as the description.


#### [Variables](../../concepts/definitions/build/variables.md) tab
| Name | Value | 
|---|---|
|```$(BuildConfiguration)``` | ```release```|
|```$(BuildPlatform)``` | ```any cpu```|

#### [Options](../../concepts/definitions/build/options.md)
| Setting | Value | 
|---|---|
| Build number format | ```$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)```|


### Option 1: publish to VSTS
1. Make sure you've prepared the build as described [above](#prepare).
2. If you haven't already, [create a feed](../../../package/feeds/create-feed.md).
3. Add the following build steps:

<table>
    <tr>
        <td>![Package: NuGet](_img/nuget.png)<br/>**Package: NuGet**</td>
        <td>
            Install your NuGet package dependencies.
            <ul>
                <li>Path to solution, packages.config, or project.json: ```**/*.sln```</li>
                <li>Feeds to use: Feeds I select here</li>
                <li>Use packages from NuGet.org: Checked</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>![Build: Visual Studio Build](../build/_img/visual-studio-build.png)<br/>**Build: Visual Studio Build**</td>
        <td>
            <p>Build your solution.</p>
            <ul>
                <li>Solution: ```**\*.sln```</li>
                <li>Platform: ```$(BuildPlatform)```</li>
                <li>Configuration: ```$(BuildConfiguration)```</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>![Package: NuGet](../package/_img/nuget.png)<br/>**Package: NuGet**</td>
        <td>
            <p>Package your projects.</p>
            <ul>
                <li>Command: pack</li>
                <li>Path to csproj or nuspec file(s) to pack: ```**/*.csproj```</li>
                <li>Configuration to Package: ```Release```</li>
                <li>Package Folder: ```$(Build.ArtifactStagingDirectory)```</li>
                <li>Pack options > Automatic package versioning: Use the build number</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>![Package: NuGet](../package/_img/nuget.png)<br/>**Package: NuGet**</td>
        <td>
            <p>Publish your packages to VSTS.</p>
            <ul>
                <li>Command: push</li>
                <li>Path to NuGet package(s) to publish: ```$(Build.ArtifactStagingDirectory)```</li>
                <li>Target feed location: This account/collection</li>
                <li>Target feed: Select your feed</li>
            </ul>
        </td>
    </tr>
</table>

### Option 2: publish to NuGet.org
1. Make sure you've prepared the build as described [above](#prepare).
2. If you haven't already, [register with NuGet.org](https://www.nuget.org/).
3. Use the steps in the previous section, but substitute the final step for the step shown here.

<table>
    <tr>
        <td>![Package: NuGet](../package/_img/nuget.png)<br/>**Package: NuGet**</td>
        <td>
            <p>Publish your packages to NuGet.org.</p>
            <ul>
                <li>Command: push</li>
                <li>Path to NuGet package(s) to publish: ```$(Build.ArtifactStagingDirectory)```</li>
                <li>Target feed location: External NuGet server</li>
                <li>NuGet server: Create a new [NuGet service endpoint](../../concepts/library/service-endpoints.md#sep-nuget) with your
                    NuGet.org ApiKey and select it here</li>
            </ul>
        </td>
    </tr>
</table>

<a name="versions" />

## Task versions

### Task: NuGet (formerly NuGet Restore at 1.\*, NuGet Installer at 0.\*)
| Task version                                | VSTS                     | TFS                                           |
|---------------------------------------------|--------------------------|-----------------------------------------------|
| 2.*                                         | Available                | Appeared in 2018                              |
| [1.*](#restore-nuget-packages)              | Deprecated but available | Appeared in 2017 Update 2, deprecated in 2018 |
| [0.*](./prev-versions/nuget-installer-0.md) | Deprecated but available | Appeared in 2017, deprecated in 2017 Update 2 |

### Task: NuGet Packager
| Task version | VSTS                         | TFS                                           |
|--------------|------------------------------|-----------------------------------------------|
| [0.*](./prev-versions/nuget-packager-0.md)  | Deprecated but available | Available in TFS < 2018, deprecated in TFS >= 2018 |

### Task: NuGet Publisher
| Task version | VSTS                         | TFS                                           |
|--------------|------------------------------|-----------------------------------------------|
| [0.*](./prev-versions/nuget-publisher-0.md) | Deprecated but available | Available in TFS < 2018, deprecated in TFS >= 2018 |

### Task: NuGet Command
| Task version | VSTS                     | TFS                                           |
|--------------|--------------------------|-----------------------------------------------|
| [0.*](#custom-nuget-command)            | Deprecated but available | Available in TFS < 2017 Update 2, deprecated in TFS >= 2018 |

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: NuGetCommand@2
  inputs:
#   command: restore # restore (default), pack, push, custom
#   restoreSolution: **/*.sln
#   feedsToUse: select # select (default), config
    vstsFeed:
#   includeNuGetOrg: true
    nugetConfigPath:
    externalFeedCredentials:
#   noCache: false
    restoreDirectory:
#   verbosityRestore: Detailed # Quiet, Normal, Detailed (default)
#   packagesToPush: $(Build.ArtifactStagingDirectory)/**/*.nupkg;!$(Build.ArtifactStagingDirectory)/**/*.symbols.nupkg
#   nuGetFeedType: internal # internal (default), external
    publishVstsFeed:
#   allowPackageConflicts: False
    publishFeedCredentials:
#   verbosityPush: Detailed # Quiet, Normal, Detailed (default)
#   packagesToPack: **/*.csproj
#   configuration: $(BuildConfiguration)
#   packDestination: $(Build.ArtifactStagingDirectory)
#   versioningScheme: off # off (default), byPrereleaseNumber, byEnvVar, byBuildNumber
#   includeReferencedProjects: false
    versionEnvVar:
#   majorVersion: 1
#   minorVersion: 0
#   patchVersion: 0
#   packTimezone: utc # utc (default), local
#   includeSymbols: false
#   toolPackage: False
    buildProperties:
#   verbosityPack: Detailed # Quiet, Normal, Detailed (default)
    arguments:
```

::: moniker-end

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/nuget-step-qa.md)]

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
