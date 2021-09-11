---
title: Archive Files task
description: Use an archive file to then create a source folder in Azure Pipelines and Team Foundation Server (TFS)  
ms.topic: reference
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.custom: seodec18
ms.date: 02/10/2020
monikerRange: '>= tfs-2017'
---

# Archive Files task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to create an archive file from a source folder.
A range of standard archive formats are supported including .zip, .jar, .war, .ear, .tar, .7z, and more.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/ArchiveFilesV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`rootFolderOrFile`<br/>Root folder or file to archive| (Required) Enter the root folder or file path to add to the archive. If a folder, everything under the folder will be added to the resulting archive <br/>Default value: `$(Build.BinariesDirectory)`|
|`includeRootFolder`<br/>Prepend root folder name to archive paths| (Required) If selected, the root folder name will be prefixed to file paths within the archive. Otherwise, all file paths will start one level lower. <br/> **For example**, suppose the selected root folder is: <code>**/home/user/output/classes/**</code>, and contains: <code>**com/acme/Main.class**</code>. <ul><li>If selected, the resulting archive would contain: <code>**classes/com/acme/Main.class**</code></li> <li>Otherwise, the resulting archive would contain: <code>**com/acme/Main.class..**</code> </li>|
|`archiveType`<br/>Archive type| (Required) Specify the compression scheme used.  To create **`foo.jar`**, for example, choose zip for the compression, and specify **`foo.jar`** as the archive file to create. For all tar files (including compressed ones), choose `tar`.<br/><ul><li><b><code>zip</code></b> - default, zip format, choose this for all zip compatible types, (.zip, .jar, .war, .ear)</li><li><b><code>7z</code></b> - 7-Zip format, (.7z)</li><li><b><code>tar</code></b> - tar format, choose this for compressed tars, (.tar.gz, .tar.bz2, .tar.xz)</li><li><b><code>wim</code></b> - wim format, (.wim)</li></ul>|
|`sevenZipCompression`<br/>7z compression| Optionally choose a compression level, or choose **`None`** to create an uncompressed 7z file <br/>Default value: `5`|
|`tarCompression`<br/>Tar compression|Optionally choose a compression scheme, or choose **`None`** to create an uncompressed tar file. <br/><ul><li><b><code>gz</code></b> - default, gzip compression (.tar.gz, .tar.tgz, .taz)</li><li><b><code>bz2</code></b> - bzip2 compression (.tar.bz2, .tz2, .tbz2)</li><li><b><code>xz</code></b> - xz compression (.tar.xz, .txz)</li><li><b><code>None</code></b> - no compression, choose this to create a uncompressed tar file (.tar)</li></ul> <br/>Default value: `gz`|
|`archiveFile`<br/>Archive file to create|(Required) Specify the name of the archive file to create. <br/>**For example**, to create **`foo.tgz`**, select the **`tar`** archive type and <b>`gz`</b> for tar compression. <br/>Default value: `$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip`|
|`replaceExistingArchive`<br/>Replace existing archive|(Required) If an existing archive exists, specify whether to overwrite it.  Otherwise, files will be added to it as long as it is not a compressed tar. <br/>If adding to an existing archive, these types are supported: <ul><li><b><code>zip</code></b></li><li><b><code>7z</code></b></li><li><b><code>tar</code></b> - uncompressed only</li><li><b><code>wim</code></b></li></ul>|
|`verbose`<br/>Forces verbose output| (Optional) If set to true, forces tools to use verbose output. Overrides 'quiet'.<br/>Default value: false|
|`quiet`<br/>Forces quiet output| (Optional) If set to true, forces tools to use quiet output. Can be overridden by 'verbose'.<br/>Default value: false|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
