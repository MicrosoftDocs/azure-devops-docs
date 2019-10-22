---
title: Extract Files task
description: Extract files from archives to a target folder using minimatch patterns on Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: fe025768-2cb4-4939-b22f-8f69155bf310
ms.manager: mijacobs
ms.custom: seodec18
ms.author: macoope
author: vtbassmatt
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Extract Files task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to extract files from archives to a target folder using match patterns.
A range of standard archive formats is supported, including .zip, .jar, .war, .ear, .tar, .7z, and more.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/ExtractFilesV1.md)]

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
<td>Archive file patterns</td>
<td>
<p>The archives you want to extract. The default file path is relative from the root folder of the repo (same as if you had specified <code>$(Build.SourcesDirectory)</code>).</p>
<p>Specify match pattern filters (one on each line) that you want to apply to identify the list of archives to extract. For example:
</p>
<ul>
<li><code>test.zip</code> extracts the test.zip file to the root folder.</li>
<li><code>test*.zip</code> extracts all .zip files in the test folder.</li>
<li><code><strong>*.tar</code> extracts all .tar files in the root folder and sub-folders.</li>
<li><code></strong>\bin*.7z</code> extracts all &#39;&#39;.7z&#39;&#39; files in any sub-folder named bin.</li>
</ul>
<p>The pattern is used to match only archive file paths, not folder paths, and not archive contents to be extracted. So you should specify patterns such as <code><strong>\bin\</strong></code> instead of <code>**\bin</code>.</p>
</td>
</tr>
<tr>
<td>Destination folder</td>
<td>Folder where the archives will be extracted.  The default file path is relative to the root folder of the repo (same as if you had specified <code>$(Build.SourcesDirectory)</code>).</td>
</tr>
<tr>
<td>Clean destination folder before extracting</td>
<td>Select this check box to delete all existing files in the destination folder before beginning to extract archives.</td>
</tr>
<tr>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
