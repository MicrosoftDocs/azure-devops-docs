---
title: Copy and publish build artifacts
description: Learn about how you can copy build artifacts to a staging folder and publish them with VSTS and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 67C942BB-6DC7-4016-9364-50E3A3FEACDD
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 10/12/2017
monikerRange: '>= tfs-2015'
---

# Utility: Copy and Publish Build Artifacts

**[VSTS](publish-build-artifacts.md) | [TFS 2015.3 and newer](publish-build-artifacts.md) | TFS 2015 RTM | [Previous versions (XAML builds)](http://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx)**

![](_img/copy-and-publish-build-artifacts.png) Copy build artifacts to a staging folder and then publish them to the server or a file share.

> [!IMPORTANT]
> 
> Are you using Visual Studio Team Services (VSTS), Team Foundation Server (TFS) 2015.3 or newer? If so, then we recommend that you do not use this task; it's deprecated. Instead, you should use the **Copy Files** and **Publish Build Artifacts** tasks. See [Artifacts in Team Build](../../build/artifacts.md).
>
> You should use this task only if you're using Team Foundation Server (TFS) 2015 RTM. In that version of TFS this task is listed under the **Build** category and it's called **Publish Build Artifacts**.
> 

Files are copied to the `$(Build.ArtifactStagingDirectory)` staging folder and then published.

## Demands

None

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Copy Root</td>
<td>
<p>Folder that contains the files you want to copy. If you leave it empty, the copying is done from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</p>
<p>If your build produces artifacts outside of the sources directory, specify ```$(Agent.BuildDirectory)``` to copy files from the build agent working directory.</p>
</td>
</tr>
<tr>
<td>Contents</td>
<td><p>Specify pattern filters (one on each line) that you want to apply to the list of files to be copied. For example:
</p>
<ul>
<li>```**``` copies all files in the root folder.</li>
<li>```**\*``` copies all files in the root folder and all files in all sub-folders.</li>
<li>```**\bin``` copies files in any sub-folder named bin.</li>
</ul>
</td>
</tr>
<tr>
<td>Artifact Name</td>
<td>Specify the name of the artifact. For example: `drop`</td>
</tr>
<tr>
<td>Artifact Type</td>
<td>
<p>Choose **server** to store the artifact on your Team Foundation Server. This is the best and simplest option in most cases. See [Artifacts in Team Build](../../build/artifacts.md).</p>
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: This step didn't produce the outcome I was expecting. How can I fix it?

This task has a couple of known issues:

* Some minimatch patterns don't work.

* It eliminates the most common root path for all paths matched.

You can avoid these issues by instead using the [Copy Files task](copy-files.md) and the [Publish Build Artifacts task](publish-build-artifacts.md).

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
