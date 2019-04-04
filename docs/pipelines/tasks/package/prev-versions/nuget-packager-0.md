---
title: NuGet Packager task Version 0.*
ms.custom: seodec18
description: Learn all about how you can produce NuGet packages when building code in Azure Pipelines and Team Foundation Server
ms.prod: devops
ms.technology: vs-devops-package
ms.assetid: E725F98F-8753-4946-A3D0-B7B0C92AFF22
ms.manager: jillfra
ms.author: amullans
ms.date: 08/10/2016
---

# NuGet Packager task version 0.*

**Azure Pipelines (deprecated) | TFS 2017 Update 2 and below (deprecated in TFS 2018)**

Use this task in a build or release pipeline to create a NuGet package from either a .csproj or .nuspec file.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../../_shared/yaml/NuGetPackagerV0.md)]
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Path/Pattern to nuspec files</td>
<td>

Specify .csproj files (for example, ```**\*.csproj```) for simple projects. In this case:
<ul>
<li>The packager compiles the .csproj files for packaging.</li>
<li>You must specify <strong>Configuration to Package</strong> (see below).</li>
<li>You do not have to check in a .nuspec file. If you do check one in, the packager honors its settings and replaces tokens such as *$id$* and *$description$*.</li>
</ul>

<p>Specify .nuspec files (for example, ```**\*.nuspec```) for more complex projects, such as multi-platform scenarios in which you need to compile and package in separate steps. In this case:</p>
<ul>
<li>The packager does not compile the .csproj files for packaging.</li>
<li>Each project is packaged only if it has a .nuspec file checked in.</li>
<li>The packager does not replace tokens in the .nuspec file (except the <code>&lt;version/&gt;</code> element, see <strong>Use build number to version package</strong>, below). You must supply values for elements such as <code>&lt;id/&gt;</code> and <code>&lt;description/&gt;</code>. The most common way to do this is to hardcode the values in the .nuspec file.
</li>
</ul>

<p>To package a single file, click the <strong>...</strong> button and select the file. To package multiple files, use single-folder wildcards (```*```) and recursive wildcards (```**```). For example, specify ```**\*.csproj``` to package all .csproj files in all subdirectories in the repo.</p>
<p>You can use multiple patterns separated by a semicolon to create more complex queries. You can negate a pattern by prefixing it with "-:". For example, specify ```**\*.csproj;-:**\*Tests.csproj``` to package all .csproj files except those ending in 'Tests' in all subdirectories in the repo.</p>
</td>
</tr>
<tr>
<td>Use build number to version package</td>
<td>
Select if you want to use the build number to version your package. If you select this option, for the [pipeline options](../../../build/options.md), set the **build number format** to something like ```$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)```
<p>The build number format must be ```{some_characters}_0.0.0.0```. The characters and the underscore character are omitted from the output. The version number at the end must be a unique number in a format such as ```0.0.0.0``` that is higher than the last published number.</p>
<p>The version number is passed to [nuget pack](https://docs.nuget.org/consume/command-line-reference#pack) with the ```-Version``` option.</p>
<p>Versions are shown prominently on NuGet servers. For example they are listed on the Azure Artifacts feeds page and on the NuGet.org package page.</p>
</td>
</tr>
<tr>
<td>Package Folder</td>
<td>
(Optional) Specify the folder where you want to put the packages. You can use a [variable](../../../build/variables.md) such as ```$(Build.StagingDirectory)\packages```
<p>If you leave it empty, the package will be created in the same directory that contains the .csproj or .nuspec file.</p>
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Configuration to Package</td>
<td>
If you are packaging a .csproj file, you must specify a configuration that you are building and that you want to package. For example: ```Release```
</td>
</tr>
<tr>
<td>Additional build properties</td>
<td>
Semicolon delimited list of properties used to build the package. For example, you could replace  ```<description>$description$</description>``` in the .nuspec file this way: ```Description="This is a great package"```
<p>Using this argument is equivalent to supplying properties from [nuget pack](https://docs.nuget.org/consume/command-line-reference#pack) with the ```-Properties``` option.</p>
</td>
</tr>
<tr>
<td>NuGet Arguments</td>
<td>
(Optional) Additional arguments passed [nuget pack](https://docs.nuget.org/consume/command-line-reference#pack).
</td>
</tr>
[!INCLUDE [temp](../../_shared/nuget-step-arguments.md)]
[!INCLUDE [temp](../../_shared/control-options-arguments.md)]
</table>

## Examples

[!INCLUDE [temp](../../_shared/nuget-create-step-examples.md)]
