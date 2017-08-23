---
title: NuGet Installer
description: How to use NuGet packages when building code in Visual Studio Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.assetid: 43289B55-AB44-415C-BD44-DC6C8BC0479E
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Package: NuGet Installer

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/nuget-installer.png) Install and update NuGet package dependencies.

> [!TIP]
> Looking for help to get started? See [Use Team Build to restore and publish NuGet packages](../../../package/build/team-build-nuget.md).

## Demands

If your code depends on NuGet packages, make sure to add this step before your [Visual Studio Build step](../../tasks/build/visual-studio-build.md). Also make sure to clear the deprecated **Restore NuGetPackages** checkbox in that step.

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
<p>Copy the value from the **Solution** argument in your [Visual Studio Build step](../../tasks/build/visual-studio-build.md) and paste it here.</p>
</td>
</tr>
<tr>
<td>Path to NuGet.config</td>
<td>
<p>If you are using a package source other than NuGet.org, you must check in a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File) file and specify the path to it here.</p>
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
[!INCLUDE [temp](../_shared/nuget-step-arguments.md)]
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
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


#### [Build](../../index.md) steps

<table>
<tr>
<td>![Package: NuGet Installer](_img/nuget-installer.png)<br/>**Package: NuGet Installer**</td>
<td>
<p>Install your NuGet package dependencies.</p>
<ul>
<li>Path to Solution: ```**\*.sln```</li>
<li>Path to NuGet.config: ```ConsoleApplication1/NuGet.config```</li>
</ul>
</td>
</tr>
<tr>
<td>![Build: Visual Studio Build](../build/_img/visual-studio-build.png)<br/>**Build: Visual Studio Build**</td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: ```**\*.sln```</li>
<li>Restore NuGet Packages: **(Important)** Make sure this option is cleared.</li>
</ul>
</td>
</tr>
</table>

## Related steps

![](_img/nuget-packager.png) [NuGet Packager](nuget-packager.md) Create a NuGet package from either a .csproj or .nuspec file

![](_img/nuget-publisher.png) [NuGet Publisher](nuget-publisher.md) Publish your NuGet package to a server and update your feed

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/nuget-step-qa.md)]

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->