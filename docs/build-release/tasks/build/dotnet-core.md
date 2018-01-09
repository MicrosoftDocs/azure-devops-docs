---
title: .NET Core build and release task
description: How to use npm packages build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 1CFB5762-5ABB-4107-BDF0-5079555101DC
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Build: .NET Core

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![](_img/dotnet-core.png) Build, test, and release .NET Core and .NET Standard projects and create .NET Core and .NET Standard NuGet packages using the `dotnet` command-line tool.

If your .NET Core or .NET Standard build depends on NuGet packages, make sure to add two copies of this step: one with the `restore` command and one with the `build` command.

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
        <td>Path to project(s)</td>
        <td>
            Copy the **Project(s)** argument in your `build` command step and paste it
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
                <li>You do not have to check in a <a href="#nuspec">.nuspec file</a>. If you do check one in, the packager honors
                    its settings and replaces tokens such as *$id$* and *$description$*.</li>
            </ul>
            Specify .nuspec files (for example, ```**\*.nuspec```) for more complex projects, such as multi-platform scenarios in which you need to compile and package in separate steps. In this case:
            <ul>
                <li>The packager does not compile the .csproj files for packaging.</li>
                <li>Each project is packaged only if it has a <a href="#nuspec">.nuspec file</a> checked in.</li>
                <li>The packager does not replace tokens in the .nuspec file (except the <code>&lt;version/&gt;</code> element,
                    see <strong>Use build number to version package</strong>, below). You must supply values for elements
                    such as <code>&lt;id/&gt;</code> and <code>&lt;description/&gt;</code>. The most common way to do this
                    is to hardcode the values in the <a href="#nuspec">.nuspec file</a>.
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
            <description>$description$</description>``` in the <a href="#nuspec">.nuspec file</a> this way: ```Description="This is a
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
                <li>Use single-folder wildcards (```*```) and recursive wildcards (```**```) to publish multiple packages.</li>
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

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Why is my build or publish step failing to restore packages?

Most `dotnet` commands, including `build` and `publish`, include an implicit `restore` step. This will fail against authenticated feeds, even if you ran a successful `dotnet restore` in an earlier step, because the earlier step will have cleaned up the credentials it used. 

To fix this issue, add the `--no-restore` flag to the Arguments textbox.

[!INCLUDE [temp](../_shared/nuget-step-qa.md)]

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
