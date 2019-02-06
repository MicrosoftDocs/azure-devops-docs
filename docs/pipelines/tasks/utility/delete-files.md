---
title: Delete Files task
description: Delete files from the agent working directory when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C71CD55E-3028-4526-A9C3-779ECE31CCD1
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Delete Files task

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

Use this task in a build or release pipeline to delete files or folders from the agent working directory.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DeleteFilesV1.md)]
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
<td>Source Folder</td>
<td>
<p>Folder that contains the files you want to delete. If you leave it empty, the deletions are done from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</p>
<p>If your build produces artifacts outside of the sources directory, specify ```$(Agent.BuildDirectory)``` to delete files from the build agent working directory.</p>
</td>
</tr>
<tr>
<td>Contents</td>
<td>
<p>Specify minimatch pattern filters (one on each line) that you want to apply to the list of files to be deleted. For example:
</p>
<ul>
<li>```**``` deletes all files and folders in the root folder.</li>
<li>```temp``` deletes the temp folder in the root folder.</li>
<li>```temp*``` deletes any file or folder in the root folder with a name that begins with temp.</li>
<li>```**\temp\**``` deletes all files in any sub-folder named temp.</li>
<li>```**\temp*``` deletes any file or folder with a name that begins with temp.</li>
<li>```**\temp*\**``` deletes files in any sub-folder that begins with the name temp.</li>
</ul>
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: What's a minimatch pattern? How does it work?

A: See: 

* https://github.com/isaacs/minimatch 

* https://realguess.net/tags/minimatch/

<!-- [!INCLUDE [temp](../_shared/build-step-common-qa.md)] -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end


<!-- ENDSECTION -->
