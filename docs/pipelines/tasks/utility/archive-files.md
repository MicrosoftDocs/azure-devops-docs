---
title: Archive Files task
description: Use an archive file to then create a source folder in Azure Pipelines and Team Foundation Server (TFS)  
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
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
<p>The folder (or file) you wish to archive. The default file path is relative from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</p>
<p>If the specified path is a folder, recursively, all nested files and folders will be included in the archive.</p>
<p>If the specified path is a file, only the single file will be included in the archive.</p>
</td>
</tr>
<tr>
<td>Prefix root folder name to archive paths</td>
<td>If selected, the root folder name will be prefixed to file paths within the archive.  Otherwise, all file paths will start one level lower.
<p>For example, suppose the selected root folder is: <b>`/home/user/output/classes/`</b>, and contains: <b>`com/acme/Main.class`</b>.
<ul>
    <li>If selected, the resulting archive would contain: <b>`classes/com/acme/Main.class`</b>.
    </li>
    <li>Otherwise, the resulting archive would contain: <b>`com/acme/Main.class`.</b>.
    </li>
</ul>
</td>
</tr>
<tr>
<td>Archive type</td>
<td>Specify the compression scheme used.  To create <b>`foo.jar`</b>, for example, choose <b>`zip`</b> for the compression, and specify <b>`foo.jar`</b> as the archive file to create.  For all tar files (including compressed ones), choose <b>`tar`</b>.
<p>
<ul>
<li><b>`zip`</b> - default, zip format, choose this for all zip compatible types, (.zip, .jar, .war, .ear)</li>
<li><b>`7z`</b> - 7-Zip format, (.7z)</li>
<li><b>`tar`</b> - tar format, choose this for compressed tars, (.tar.gz, .tar.bz2, .tar.xz)</li>
<li><b>`wim`</b> - wim format, (.wim)</li>
</ul>
</td>
</tr>
<tr>
<td>Tar compression</td>
<td>Only applicable if the <b>`tar`</b> archive type is selected.
<p>Optionally choose a compression scheme, or choose <b>`None`</b> to create an uncompressed tar file.
<ul>
<li><b>`gz`</b> - default, gzip compression (.tar.gz, .tar.tgz, .taz)</li>
<li><b>`bz2`</b> - bzip2 compression (.tar.bz2, .tz2, .tbz2)</li>
<li><b>`xz`</b> - xz compression (.tar.xz, .txz)</li>
<li><b>`None`</b> - no compression, choose this to create a uncompressed tar file (.tar)</li>
</ul>
</td>
</tr>
<tr>
<td>Archive file to create</td>
<td>Specify the name of the archive file to create. The file extension should match the selected archive type.  For example to create <b>`foo.tgz`</b>, select the <b>`tar`</b> archive type, <b>`gz`</b> for tar compression.
</td>
</tr>
<tr>
<td>Replace existing archive</td>
<td>If an existing archive exists, specify whether to overwrite it.  Otherwise, files will be added to it as long as it is not a compressed tar.
<p>If adding to an existing archive, these types are supported:</p>
<ul>
<li><b>`zip`</b></li>
<li><b>`7z`</b></li>
<li><b>`tar`</b> - uncompressed only</li>
<li><b>`wim`</b></li>
</ul>
</td>
</tr>
<tr>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
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
