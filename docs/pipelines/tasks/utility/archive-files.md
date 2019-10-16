---
title: Archive Files task
description: Use an archive file to then create a source folder in Azure Pipelines and Team Foundation Server (TFS)  
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.manager: mijacobs
ms.custom: seodec18
ms.author: macoope
author: vtbassmatt
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Archive Files task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to create an archive file from a source folder.
A range of standard archive formats are supported including .zip, .jar, .war, .ear, .tar, .7z, and more.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/ArchiveFilesV2.md)]

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
<td>Root folder (or file) to archive</td>
<td>
<p>The folder (or file) you wish to archive. The default file path is relative from the root folder of the repo (same as if you had specified <code>$(Build.SourcesDirectory)</code>).</p>
<p>If the specified path is a folder, recursively, all nested files and folders will be included in the archive.</p>
<p>If the specified path is a file, only the single file will be included in the archive.</p>
</td>
</tr>
<tr>
<td>Prefix root folder name to archive paths</td>
<td>If selected, the root folder name will be prefixed to file paths within the archive.  Otherwise, all file paths will start one level lower.
<p>For example, suppose the selected root folder is: <b><code>/home/user/output/classes/</code></b>, and contains: <b><code>com/acme/Main.class</code></b>.
<ul>
    <li>If selected, the resulting archive would contain: <b><code>classes/com/acme/Main.class</code></b>.
    </li>
    <li>Otherwise, the resulting archive would contain: <b><code>com/acme/Main.class</code>.</b>.
    </li>
</ul>
</td>
</tr>
<tr>
<td>Archive type</td>
<td>Specify the compression scheme used.  To create <b><code>foo.jar</code></b>, for example, choose <b><code>zip</code></b> for the compression, and specify <b><code>foo.jar</code></b> as the archive file to create.  For all tar files (including compressed ones), choose <b><code>tar</code></b>.
<p>
<ul>
<li><b><code>zip</code></b> - default, zip format, choose this for all zip compatible types, (.zip, .jar, .war, .ear)</li>
<li><b><code>7z</code></b> - 7-Zip format, (.7z)</li>
<li><b><code>tar</code></b> - tar format, choose this for compressed tars, (.tar.gz, .tar.bz2, .tar.xz)</li>
<li><b><code>wim</code></b> - wim format, (.wim)</li>
</ul>
</td>
</tr>
<tr>
<td>Tar compression</td>
<td>Only applicable if the <b><code>tar</code></b> archive type is selected.
<p>Optionally choose a compression scheme, or choose <b><code>None</code></b> to create an uncompressed tar file.
<ul>
<li><b><code>gz</code></b> - default, gzip compression (.tar.gz, .tar.tgz, .taz)</li>
<li><b><code>bz2</code></b> - bzip2 compression (.tar.bz2, .tz2, .tbz2)</li>
<li><b><code>xz</code></b> - xz compression (.tar.xz, .txz)</li>
<li><b><code>None</code></b> - no compression, choose this to create a uncompressed tar file (.tar)</li>
</ul>
</td>
</tr>
<tr>
<td>Archive file to create</td>
<td>Specify the name of the archive file to create. The file extension should match the selected archive type.  For example to create <b><code>foo.tgz</code></b>, select the <b><code>tar</code></b> archive type, <b><code>gz</code></b> for tar compression.
</td>
</tr>
<tr>
<td>Replace existing archive</td>
<td>If an existing archive exists, specify whether to overwrite it.  Otherwise, files will be added to it as long as it is not a compressed tar.
<p>If adding to an existing archive, these types are supported:</p>
<ul>
<li><b><code>zip</code></b></li>
<li><b><code>7z</code></b></li>
<li><b><code>tar</code></b> - uncompressed only</li>
<li><b><code>wim</code></b></li>
</ul>
</td>
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

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
