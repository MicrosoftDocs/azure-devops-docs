---
title: NuGet restore, pack, and publish task
ms.custom: seodec18
description: Learn all about how you can make use of NuGet packages when you are building code in Azure Pipelines and Team Foundation Server (TFS).
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: 7e2793cd-7ce1-4268-9f51-ecb41842f13e
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.date: 07/05/2017
monikerRange: '>= tfs-2018'
---

# NuGet task

**Version 2.\* | [Other versions](#versions)**

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to install and update NuGet package dependencies, or package and publish NuGet packages.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

If your code depends on NuGet packages, make sure to add this step before your [Visual Studio Build step](../build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGet Packages** checkbox in that step.

> [!TIP]
> Looking for help to get started? See the how-tos for [restoring](../../../artifacts/nuget/consume.md) and [publishing](../../../artifacts/nuget/publish.md) packages.

> [!TIP]
> This version of the NuGet task uses NuGet 4.1.0 by default. To select a different version of NuGet, use the [Tool Installer](../tool/nuget.md).

> [!NOTE]
> Using or creating .NET Core or .NET Standard packages? Use the [.NET Core](../build/dotnet-core-cli.md) task, which has full support for all package scenarios currently supported by dotnet, including restore, pack, and nuget push.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/NuGetCommandV2.md)]

### Versioning schemes

For **byPrereleaseNumber**, the version will be set to whatever you choose for major, minor, and patch, plus the date and time in the format `yyyymmdd-hhmmss`.

For **byEnvVar**, the version will be set as whatever environment variable, e.g. `MyVersion` (no **$**, just the environment variable name), you provide. Make sure the environment variable is set to a proper SemVer e.g. `1.2.3` or `1.2.3-beta1`.

For **byBuildNumber**, the version will be set to the build number, ensure that your build number is a proper SemVer e.g. `1.0.$(Rev:r)`. If you select **byBuildNumber**, the task will extract a dotted version, `1.2.3.4` and use only that, dropping any label. To use the build number as is, you should use **byEnvVar** as described above, and set the environment variable to `BUILD_BUILDNUMBER`.

::: moniker-end

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
            Copy the <strong>Solution</strong> argument in your <a href="../../tasks/build/visual-studio-build.md" data-raw-source="[Visual Studio Build step](../../tasks/build/visual-studio-build.md)">Visual Studio Build step</a> and paste it
            here, or create a link using the Link button in the information panel.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Feeds and authentication</th>
    </tr>
    <tr>
        <td>Feeds to use</td>
        <td>
            <strong>Feed(s) I select here:</strong>
            <ul>
                <li>Select this option to use NuGet.org and/or one Azure Artifacts/Package Management feed in the same organization/collection as the build.</li>
            </ul>
            <strong>Feeds in my NuGet.config:</strong>
            <ul>
                <li>Select this option to use feeds specified in a <a href="http://docs.nuget.org/Consume/NuGet-Config-File" data-raw-source="[NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File)">NuGet.config</a>
                    file you&#39;ve checked into source control.</li>
                <li>Credentials for feeds outside this organization/collection can be used to inject credentials you&#39;ve provided as a <a href="../../library/service-endpoints.md#sep-nuget" data-raw-source="[NuGet service connection](../../library/service-endpoints.md#sep-nuget)">NuGet service connection</a> into your NuGet.config as the build runs.</li>
                <li>Azure Artifacts users: see the <a href="../../packages/nuget-restore.md" data-raw-source="[walkthrough](../../packages/nuget-restore.md)">walkthrough</a> for help using packages from feeds in multiple Azure DevOps organizations.</li>
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


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

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
        <td>

![Package: NuGet](_img/nuget.png)

<br/>**Package: NuGet**</td>
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
        <td>

![Build: Visual Studio Build](../build/_img/visual-studio-build.png)

<br/>**Build: Visual Studio Build**</td>
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
            Specify .csproj files (for example, <code><strong>*.csproj</code>) for simple projects. In this case:
            <ul>
                <li>The packager compiles the .csproj files for packaging.</li>
                <li>You must specify <strong>Configuration to Package</strong> (see below).</li>
                <li>You do not have to check in a .nuspec file. If you do check one in, the packager honors
                    its settings and replaces tokens such as <em>$id$</em> and <em>$description$</em>.</li>
            </ul>
            Specify .nuspec files (for example, <code></strong>*.nuspec</code>) for more complex projects, such as multi-platform scenarios in which you need to compile and package in separate steps. In this case:
            <ul>
                <li>The packager does not compile the .csproj files for packaging.</li>
                <li>Each project is packaged only if it has a .nuspec file checked in.</li>
                <li>The packager does not replace tokens in the .nuspec file (except the <code>&lt;version/&gt;</code> element,
                    see <a href="#versioning-schemes" data-raw-source="[versioning schemes](#versioning-schemes)">versioning schemes</a> for version options). You must supply values for elements
                    such as <code>&lt;id/&gt;</code> and <code>&lt;description/&gt;</code>. The most common way to do this
                    is to hardcode the values in the .nuspec file.
                </li>
            </ul>
           To package a single file, click the <strong>...</strong> button and select the file. To package multiple files, use <a href="../file-matching-patterns.md" data-raw-source="[file matching patterns](../file-matching-patterns.md)">file matching patterns</a>. Note that these patterns were updated in version 2 of the NuGet task; if you have a pattern that contains <code>-:</code>, use <code>!</code> instead.
        </td>
    </tr>
    <tr>
        <td>Configuration to package</td>
        <td>
            If you are packaging a .csproj file, you must specify a configuration that you are building and that you want to package.
            For example: <code>Release</code> or <code>$(BuildConfiguration)</code>
        </td>
    </tr>
    <tr>
        <td>Package folder</td>
        <td>
            (Optional) Specify the folder where you want to put the packages. You can use a <a href="../../build/variables.md" data-raw-source="[variable](../../build/variables.md)">variable</a> such as <code>$(Build.ArtifactStagingDirectory)</code> If you leave it empty, the package will be created in the root of your source tree.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Pack options</th>
    </tr>
    <tr>
        <td>Automatic package versioning</td>
        <td>
            <a href="https://blogs.msdn.microsoft.com/devops/2016/05/03/versioning-nuget-packages-cd-1/" data-raw-source="[This blog post](https://blogs.msdn.microsoft.com/devops/2016/05/03/versioning-nuget-packages-cd-1/)">This blog post</a> provides an overview of the automatic package versioning available here.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Additional build properties</td>
        <td>
            Semicolon delimited list of properties used to build the package. For example, you could replace <code>&lt;description&gt;$description$&lt;/description&gt;</code> in the .nuspec file this way: <code>Description=&quot;This is a
            great package&quot;</code> Using this argument is equivalent to supplying properties from <a href="https://docs.nuget.org/consume/command-line-reference#pack" data-raw-source="[nuget pack](https://docs.nuget.org/consume/command-line-reference#pack)">nuget pack</a>
            with the <code>-Properties</code> option.
        </td>
    </tr>
    <tr>
        <td>Verbosity</td>
        <td>
            Specifies the amount of detail displayed in the output.
        </td>
    </tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

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
                <li>Default value: <code>$(Build.ArtifactStagingDirectory)/*.nupkg</code></li>
                <li>To publish a single package, click the <strong>...</strong> button and select the file.</li>
                <li>Use <a href="../file-matching-patterns.md" data-raw-source="[file matching patterns](../file-matching-patterns.md)">file matching patterns</a> to publish multiple packages. Note that these patterns were updated in version 2 of the NuGet task; if you have a pattern that contains <code>-:</code>, use <code>!</code> instead.</li>
                <li>Use <a href="../../build/variables.md" data-raw-source="[variables](../../build/variables.md)">variables</a> to specify directories. For example, if you specified <code>$(Build.ArtifactStagingDirectory)&lt;/code&gt; as the <strong>package folder</strong> in the pack step above, you could specify <code>$(Build.ArtifactStagingDirectory)***.nupkg</code> here.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Target feed location</td>
        <td>
            <ul>
                <li><strong>This organization/collection</strong> publishes to an Azure Artifacts/Package Management feed in the same organization/collection as the build. After you select this option, select the target feed from the dropdown.
                    <ul><li>&quot;Allow duplicates to be skipped&quot; allows you to continually publish a set of packages and only change the version number of the subset of packages that changed. It allows the task to report success even if some of your packages are rejected with 409 Conflict errors.
                    </li></ul>
                </li>
                <li><strong>External NuGet server (including other organizations/collections)</strong> publishes to an external server such as <a href="https://www.nuget.org/" data-raw-source="[NuGet](https://www.nuget.org/)">NuGet</a>, <a href="http://www.myget.org/" data-raw-source="[MyGet](http://www.myget.org/)">MyGet</a>, or an Azure Artifacts/Package Management feed in another Azure DevOps organization or TFS collection. After you select this option, you create and select a <a href="../../library/service-endpoints.md#sep-nuget" data-raw-source="[NuGet service connection](../../library/service-endpoints.md#sep-nuget)">NuGet service connection</a>.
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


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

### Publishing symbols
When you push packages to an Azure Artifacts/Package Management feed, you can also publish symbols using the [Index Sources & Publish Symbols task](../build/index-sources-publish-symbols.md).

### Publishing or restoring packages to TFS with IIS Basic authentication enabled
This task is unable to publish or restore NuGet packages to or from a TFS Package Management feed that is running on a TFS server with IIS Basic authentication enabled. [See here](/azure/devops/integrate/get-started/auth/tfs-basic-auth) for more details.

## Custom NuGet command

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/NuGetV0.md)]

::: moniker-end

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

::: moniker range="> tfs-2018"
You want to package and publish some projects in a C# class library to your Azure Artifacts feed.
::: moniker-end
::: moniker range="<= tfs-2018"
You want to package and publish some projects in a C# class library to your TFS Package Management feed.
::: moniker-end

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


#### [Variables](../../build/variables.md) tab

| Name | Value | 
|---|---|
|```$(BuildConfiguration)``` | ```release```|
|```$(BuildPlatform)``` | ```any cpu```|

#### [Options](../../build/options.md)

| Setting | Value | 
|---|---|
| Build number format | ```$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)```|


::: moniker range="> tfs-2018"
### Publish to Azure Artifacts
::: moniker-end
::: moniker range="<= tfs-2018"
### Publish to a TFS feed
::: moniker-end

1. Make sure you've prepared the build as described [above](#prepare).
2. If you haven't already, [create a feed](../../../artifacts/feeds/create-feed.md).
3. Add the following build steps:

<table>
    <tr>
        <td>

![Package: NuGet](_img/nuget.png)

<br/>**Package: NuGet**</td>
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
        <td>

![Build: Visual Studio Build](../build/_img/visual-studio-build.png)

<br/>**Build: Visual Studio Build**</td>
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
        <td>

![Package: NuGet](../package/_img/nuget.png)

<br/>**Package: NuGet**</td>
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
        <td>

![Package: NuGet](../package/_img/nuget.png)

<br/>**Package: NuGet**</td>
        <td>
            <p>Publish your packages.</p>
            <ul>
                <li>Command: push</li>
                <li>Path to NuGet package(s) to publish: ```$(Build.ArtifactStagingDirectory)```</li>
                <li>Target feed location: This organization/collection</li>
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
        <td>

![Package: NuGet](../package/_img/nuget.png)

<br/>**Package: NuGet**</td>
        <td>
            <p>Publish your packages to NuGet.org.</p>
            <ul>
                <li>Command: push</li>
                <li>Path to NuGet package(s) to publish: ```$(Build.ArtifactStagingDirectory)```</li>
                <li>Target feed location: External NuGet server</li>
                <li>NuGet server: Create a new [NuGet service connection](../../library/service-endpoints.md#sep-nuget) with your
                    NuGet.org ApiKey and select it here</li>
            </ul>
        </td>
    </tr>
</table>

<a name="versions" />

## Task versions

### Task: NuGet (formerly NuGet Restore at 1.\*, NuGet Installer at 0.\*)

| Task version                                | Azure Pipelines                     | TFS                                           |
|---------------------------------------------|--------------------------|-----------------------------------------------|
| 2.*                                         | Available                | Appeared in 2018                              |
| [1.*](#restore-nuget-packages)              | Deprecated but available | Appeared in 2017 Update 2, deprecated in 2018 |
| [0.*](./prev-versions/nuget-installer-0.md) | Deprecated but available | Appeared in 2017, deprecated in 2017 Update 2 |

### Task: NuGet Packager

| Task version | Azure Pipelines                         | TFS                                           |
|--------------|------------------------------|-----------------------------------------------|
| [0.*](./prev-versions/nuget-packager-0.md)  | Deprecated but available | Available in TFS < 2018, deprecated in TFS >= 2018 |

### Task: NuGet Publisher

| Task version | Azure Pipelines                         | TFS                                           |
|--------------|------------------------------|-----------------------------------------------|
| [0.*](./prev-versions/nuget-publisher-0.md) | Deprecated but available | Available in TFS < 2018, deprecated in TFS >= 2018 |

### Task: NuGet Command

| Task version | Azure Pipelines                     | TFS                                           |
|--------------|--------------------------|-----------------------------------------------|
| [0.*](#custom-nuget-command)            | Deprecated but available | Available in TFS < 2017 Update 2, deprecated in TFS >= 2018 |

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
