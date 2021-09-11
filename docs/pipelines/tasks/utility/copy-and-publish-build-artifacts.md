---
title: Copy and Publish Build Artifacts task
description: Copy build artifacts to a staging folder and publish them with Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 67C942BB-6DC7-4016-9364-50E3A3FEACDD
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Copy and Publish Build Artifacts task

**TFS 2015**

Use this task to copy build artifacts to a staging folder and then publish them to the server or a file share.
Files are copied to the `$(Build.ArtifactStagingDirectory)` staging folder and then published.

::: moniker range="> tfs-2015"

> [!IMPORTANT]
> This task is deprecated. If you're using Team Foundation Server 2017 or newer, we recommend that you use [Pipeline Artifacts](../../artifacts/pipeline-artifacts.md).

::: moniker-end

::: moniker range="tfs-2015"

> [!IMPORTANT]
> This task is deprecated. If you're using Team Foundation Server 2017 or newer, we recommend that you use [Pipeline Artifacts](../../artifacts/pipeline-artifacts.md).
>
> Use this task only if you're using Team Foundation Server (TFS) 2015 RTM. You can find this task under the **Build** category **Publish Build Artifacts**.

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
<p>Folder that contains the files you want to copy. If you leave it empty, the copying is done from the root folder of the repo (same as if you had specified <code>$(Build.SourcesDirectory)</code>).</p>
<p>If your build produces artifacts outside of the sources directory, specify <code>$(Agent.BuildDirectory)</code> to copy files from the build agent working directory.</p>
</td>
</tr>
<tr>
<td>Contents</td>
<td><p>Specify pattern filters (one on each line) that you want to apply to the list of files to be copied. For example:
</p>
<ul>
<li><code>**</code> copies all files in the root folder.</li>
<li><code>**\*</code> copies all files in the root folder and all files in all sub-folders.</li>
<li><code>**\bin</code> copies files in any sub-folder named bin.</li>
</ul>
</td>
</tr>
<tr>
<td>Artifact Name</td>
<td>Specify the name of the artifact. For example: <code>drop</code></td>
</tr>
<tr>
<td>Artifact Type</td>
<td>
<p>Choose <strong>server</strong> to store the artifact on your Team Foundation Server. This is the best and simplest option in most cases. See <a href="../../artifacts/build-artifacts.md" data-raw-source="[Artifacts in Azure Pipelines](../../artifacts/build-artifacts.md)">Artifacts in Azure Pipelines</a>.</p>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Q: This step didn't produce the outcome I was expecting. How can I fix it?

This task has a couple of known issues:

* Some minimatch patterns don't work.

* It eliminates the most common root path for all paths matched.

You can avoid these issues by instead using the [Copy Files task](copy-files.md) and the [Publish Build Artifacts task](publish-build-artifacts.md).

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
