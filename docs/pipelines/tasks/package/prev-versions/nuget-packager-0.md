---
title: NuGet Packager task Version 0.*
ms.custom: seodec18
description: Learn all about how you can produce NuGet packages when building code in Azure Pipelines and Team Foundation Server
ms.prod: devops
ms.technology: vs-devops-package
ms.assetid: E725F98F-8753-4946-A3D0-B7B0C92AFF22
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
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

Specify .csproj files (for example, <code>**\*.csproj</code>) for simple projects. In this case:
<ul>
<li>The packager compiles the .csproj files for packaging.</li>
<li>You must specify <strong>Configuration to Package</strong> (see below).</li>
<li>You do not have to check in a .nuspec file. If you do check one in, the packager honors its settings and replaces tokens such as <em>$id$</em> and <em>$description$</em>.</li>
</ul>

<p>Specify .nuspec files (for example, <code><strong>*.nuspec</code>) for more complex projects, such as multi-platform scenarios in which you need to compile and package in separate steps. In this case:</p>
<ul>
<li>The packager does not compile the .csproj files for packaging.</li>
<li>Each project is packaged only if it has a .nuspec file checked in.</li>
<li>The packager does not replace tokens in the .nuspec file (except the <code>&lt;version/&gt;</code> element, see <strong>Use build number to version package</strong>, below). You must supply values for elements such as <code>&lt;id/&gt;</code> and <code>&lt;description/&gt;</code>. The most common way to do this is to hardcode the values in the .nuspec file.
</li>
</ul>

<p>To package a single file, click the <strong>...</strong> button and select the file. To package multiple files, use single-folder wildcards (<code>*</code>) and recursive wildcards (<code></strong></code>). For example, specify <code><strong>*.csproj</code> to package all .csproj files in all subdirectories in the repo.</p>
<p>You can use multiple patterns separated by a semicolon to create more complex queries. You can negate a pattern by prefixing it with &quot;-:&quot;. For example, specify <code></strong>*.csproj;-:***Tests.csproj</code> to package all .csproj files except those ending in &#39;Tests&#39; in all subdirectories in the repo.</p>
</td>
</tr>
<tr>
<td>Use build number to version package</td>
<td>
Select if you want to use the build number to version your package. If you select this option, for the <a href="../../../build/options.md" data-raw-source="[pipeline options](../../../build/options.md)">pipeline options</a>, set the <strong>build number format</strong> to something like <code>$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)</code>
<p>The build number format must be <code>{some_characters}_0.0.0.0</code>. The characters and the underscore character are omitted from the output. The version number at the end must be a unique number in a format such as <code>0.0.0.0</code> that is higher than the last published number.</p>
<p>The version number is passed to <a href="https://docs.nuget.org/consume/command-line-reference#pack" data-raw-source="[nuget pack](https://docs.nuget.org/consume/command-line-reference#pack)">nuget pack</a> with the <code>-Version</code> option.</p>
<p>Versions are shown prominently on NuGet servers. For example they are listed on the Azure Artifacts feeds page and on the NuGet.org package page.</p>
</td>
</tr>
<tr>
<td>Package Folder</td>
<td>
(Optional) Specify the folder where you want to put the packages. You can use a <a href="../../../build/variables.md" data-raw-source="[variable](../../../build/variables.md)">variable</a> such as <code>$(Build.StagingDirectory)\packages</code>
<p>If you leave it empty, the package will be created in the same directory that contains the .csproj or .nuspec file.</p>
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Configuration to Package</td>
<td>
If you are packaging a .csproj file, you must specify a configuration that you are building and that you want to package. For example: <code>Release</code>
</td>
</tr>
<tr>
<td>Additional build properties</td>
<td>
Semicolon delimited list of properties used to build the package. For example, you could replace  <code>&lt;description&gt;$description$&lt;/description&gt;</code> in the .nuspec file this way: <code>Description=&quot;This is a great package&quot;</code>
<p>Using this argument is equivalent to supplying properties from <a href="https://docs.nuget.org/consume/command-line-reference#pack" data-raw-source="[nuget pack](https://docs.nuget.org/consume/command-line-reference#pack)">nuget pack</a> with the <code>-Properties</code> option.</p>
</td>
</tr>
<tr>
<td>NuGet Arguments</td>
<td>
(Optional) Additional arguments passed <a href="https://docs.nuget.org/consume/command-line-reference#pack" data-raw-source="[nuget pack](https://docs.nuget.org/consume/command-line-reference#pack)">nuget pack</a>.
</td>
</tr>

[!INCLUDE [temp](../../_shared/nuget-step-arguments.md)]

[!INCLUDE [temp](../../_shared/control-options-arguments.md)]

</table>

## Examples

[!INCLUDE [temp](../../_shared/nuget-create-step-examples.md)]
