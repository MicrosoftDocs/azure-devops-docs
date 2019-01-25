---
title: NuGet Installer task Version 0.*
ms.custom: seodec18
description: Learn all about how you can use NuGet packages when building code in Azure Pipelines and Team Foundation Server
ms.prod: devops
ms.technology: vs-devops-package
ms.assetid: 43289B55-AB44-415C-BD44-DC6C8BC0479E
ms.manager: jillfra
ms.author: amullans
ms.date: 08/10/2016
---

# NuGet Installer task version 0.*

**Azure Pipelines (deprecated) | TFS 2017 (deprecated in 2017 Update 2)**

Use this task in a build or release pipeline to install and update NuGet package dependencies.

## Demands

If your code depends on NuGet packages, make sure to add this task before your [Visual Studio Build task](../../build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGetPackages** checkbox in that task.

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Path to Solution</td>
<td>
Copy the value from the **Solution** argument in your [Visual Studio Build task](../../build/visual-studio-build.md) and paste it here.
</td>
</tr>
<tr>
<td>Path to NuGet.config</td>
<td>
If you are using a package source other than NuGet.org, you must check in a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File) file and specify the path to it here.
</td>
</tr>
<tr>
<td>Disable local cache</td>
<td>
Equivalent to [nuget restore](https://docs.nuget.org/consume/command-line-reference#user-content-restore-command) with the ```-NoCache``` option.
</td>
</tr>
<tr>
<td>NuGet Arguments</td>
<td>
Additional arguments passed to [nuget restore](https://docs.nuget.org/consume/command-line-reference#user-content-restore-command).
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
[!INCLUDE [temp](../../_shared/nuget-step-arguments.md)]
[!INCLUDE [temp](../../_shared/control-options-arguments.md)]
</table>

## Examples

### Install NuGet dependencies

You're building a Visual Studio solution that depends on a NuGet feed.

```
`-- ConsoleApplication1
    |-- ConsoleApplication1.sln
    |-- NuGet.config
    `-- ConsoleApplication1
        |-- ConsoleApplication1.csproj
```


#### Build tasks

<table>
<tr>
<td>![Package: NuGet Installer](../_img/nuget-installer.png)<br/>**Package: NuGet Installer**</td>
<td>
<p>Install your NuGet package dependencies.</p>
<ul>
<li>Path to Solution: ```**\*.sln```</li>
<li>Path to NuGet.config: ```ConsoleApplication1/NuGet.config```</li>
</ul>
</td>
</tr>
<tr>
<td>![Build: Visual Studio Build](../../build/_img/visual-studio-build.png)<br/>**Build: Visual Studio Build**</td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: ```**\*.sln```</li>
<li>Restore NuGet Packages: **(Important)** Make sure this option is cleared.</li>
</ul>
</td>
</tr>
</table>


