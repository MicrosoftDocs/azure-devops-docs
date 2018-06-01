---
title: Extract Files | VSTS or Team Foundation Server
description: Learn how you can extract files from archives to a target folder using minimatch patterns on VSTS and Team Foundation Server TFS
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: fe025768-2cb4-4939-b22f-8f69155bf310
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/15/2016
monikerRange: '>= tfs-2017'
---


# Utility: Extract Files

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![](_img/extract-files.png) Extract files from archives to a target folder using match patterns.  A variety of standard archive formats are supported including: .zip, .jar, .war, .ear, .tar, .7z., and others.

## Demands

None

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/ExtractFilesV1.1.md)]

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
<p>The archives you want to extract. The default file path is relative from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</p>
<p>Specify match pattern filters (one on each line) that you want to apply to identify the list of archives to extract. For example:
</p>
<ul>
<li>``` test.zip``` extracts the test.zip file to the root folder.</li>
<li>```test\*.zip``` extracts all .zip files in the test folder.</li>
<li>```**\*.tar``` extracts all .tar files in the root folder and sub-folders.</li>
<li>```**\bin\*.7z``` extracts all ''.7z'' files in any sub-folder named bin.</li>
</ul>
<p>The pattern is used to match only archive file paths, not folder paths, and not archive contents to be extracted. So you should specify patterns such as ```**\bin\**``` instead of of ```**\bin```.</p>
</td>
</tr>
<tr>
<td>Destination folder</td>
<td>Folder where the archives will be extracted.  The default file path is relative to the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</td>
</tr>
<tr>
<td>Clean destination folder before extracting</td>
<td>Select this check box to delete all existing files in the destination folder before beginning to extract archives.</td>
</tr>
<tr>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
