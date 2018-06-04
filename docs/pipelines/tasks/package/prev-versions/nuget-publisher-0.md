---
title: NuGet Publisher Version 0.* | VSTS or Team Foundation Server
description: Learn all about how you can publish NuGet packages when building code in Visual Studio Team Services and Team Foundation Server
ms.prod: devops
ms.technology: vs-devops-package
ms.assetid: E592A505-C253-4190-86D2-E4F679F5FCBE
ms.manager: douge
ms.author: amullans
ms.date: 08/10/2016
---

# Package: NuGet Publisher version 0.*

**VSTS (deprecated) | TFS 2017 Update 2 and below (deprecated in TFS 2018)**

![](../_img/nuget-publisher.png) Publish your NuGet package to a server and update your feed.

## Demands

None

[!INCLUDE [temp](../../_shared/yaml/NuGetPublisherV0.0.md)]

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Path/Pattern to nupkg</td>
<td>
<p>Specify the packages you want to publish.</p>
<ul>
<li>Default value: ```**\*.nupkg;-:**\packages\**\*.nupkg```</li>
<li>To publish a single package, click the <strong>...</strong> button and select the file.</li>
<li>Use single-folder wildcards (```*```) and recursive wildcards (```**```) to publish multiple packages.</li>
<li>Use [variables](../../../build/variables.md) to specify directories. For example, if you specified ```$(Build.StagingDirectory)\packages``` as the **package folder** in the NuGet Packager task, you could specify ```$(Build.StagingDirectory)\packages\**\*.nupkg``` here.</li>
</ul>
<!-- https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/NugetPublisher/task.json says you can specify multiple patterns separated by semicolons. That doesn't seem to work -->
</td>
</tr>
<tr>
<td>Feed type</td>
<td>
<ul>
<li>**External NuGetFeed** publishes to an external server such as [NuGet](https://www.nuget.org/) or [MyGet](http://www.myget.org/). After you select this option, you create and select a **NuGet server endpoint**.
</li>
<li>**Internal NuGet Feed** publishes to an internal or  Visual Studio Team Services feed. After you select this option, you specify the **internal feed URL**.
</li>
</ul>
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>NuGet Arguments</td>
<td>
(Optional) Additional arguments passed to [nuget push](https://docs.nuget.org/consume/command-line-reference#user-content-push-command).
</td>
</tr>
[!INCLUDE [temp](../../_shared/nuget-step-arguments.md)]
[!INCLUDE [temp](../../_shared/control-options-arguments.md)]
</table>

## Examples

[!INCLUDE [temp](../../_shared/nuget-create-step-examples.md)]
