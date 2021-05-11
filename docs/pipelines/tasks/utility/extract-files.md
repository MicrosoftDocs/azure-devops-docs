---
title: Extract Files task
description: Extract files from archives to a target folder using minimatch patterns on Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: fe025768-2cb4-4939-b22f-8f69155bf310
ms.custom: seodec18
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Extract Files task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to extract files from archives to a target folder using match patterns.
A range of standard archive formats is supported, including .zip, .jar, .war, .ear, .tar, .7z, and more.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/ExtractFilesV1.md)]

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
<p>Patterns to match the archives you want to extract. By default, patterns start in the root folder of the repo (same as if you had specified <code>$(Build.SourcesDirectory)</code>).</p>
<p>Specify pattern filters, one per line, that match the archives to extract. For example:
</p>
<ul>
<li><code>test.zip</code> extracts the test.zip file in the root folder.</li>
<li><code>test/*.zip</code> extracts all .zip files in the test folder.</li>
<li><code>**/*.tar</code> extracts all .tar files in the root folder and sub-folders.</li>
<li><code>**/bin/*.7z</code> extracts all &#39;&#39;.7z&#39;&#39; files in any sub-folder named bin.</li>
</ul>
<p>The pattern is used to match only archive file paths, not folder paths, and not archive contents to be extracted. So you should specify patterns such as <code>**/bin/**</code> instead of <code>**/bin</code>.</p>
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
<td>Overwrite files in the destination directory</td>
<td>Select this option to overwrite files in the output directory if they already exist.</td>
</tr>
<tr>
<td>Path to 7z utility</td>
<td>You can specify custom path to 7z utility using this option. If it's not specified on Windows - default 7zip version supplied with a task will be used.</td>
</tr>
<tr>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Examples

### Extract all .zip files recursively

This example will extract all .zip files recursively, including both root files and files from sub-folders

```yaml
steps:
- task: ExtractFiles@1
  inputs:
    archiveFilePatterns: '**/*.zip'
    cleanDestinationFolder: true
    overwriteExistingFiles: false
```

### Extract all .zip files from subfolder

This example will extract `test/one.zip`, `test/two.zip` but will leave `test/nested/three.zip`.

```yaml
steps:
- task: ExtractFiles@1
  inputs:
    archiveFilePatterns: 'test/*.zip'
    cleanDestinationFolder: true
    overwriteExistingFiles: false
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../includes/qa-minimatch.md)]

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
