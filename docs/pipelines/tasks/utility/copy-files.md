---
title: Copy Files | VSTS or Team Foundation Server
description: Learn how you can copy files between folders with match patterns when building code in VSTS and Team Foundation Server TFS
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BB8401FB-652A-406B-8920-4BD8977BFE68
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Utility: Copy Files

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![](_img/copy-files.png) Copy files from a source folder to a target folder using match patterns.

## Demands

None

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/CopyFilesV2.2.md)]

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
<p>Folder that contains the files you want to copy. If you leave it empty, the copying is done from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</p>
<p>If your build produces artifacts outside of the sources directory, specify ```$(Agent.BuildDirectory)``` to copy files from the directory created for the definition.</p>
</td>
</tr>
<tr>
<td>Contents</td>
<td><p>Specify match pattern filters (one on each line) that you want to apply to the list of files to be copied. For example:
</p>
<ul>
<li>```*``` copies all files in the root folder.</li>
<li>```**\*``` copies all files in the root folder and all files in all sub-folders.</li>
<li>```**\bin\**``` copies all files recursively from any ```bin``` folder.</li>
</ul>
<p>The pattern is used to match only file paths, not folder paths. So you should specify patterns such as ```**\bin\**``` instead of of ```**\bin```.</p>
<p>More examples are shown below.</p>
</td>
</tr>
<tr>
<td>Target Folder</td>
<td>Folder where the files will be copied. In most cases you specify this folder using a variable. For example, specify ```$(Build.ArtifactStagingDirectory)``` if you intend to [publish the files as build artifacts](../../build/artifacts.md).</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Clean Target Folder</td>
<td>Select this check box to delete all existing files in the target folder before beginning to copy.</td>
</tr>
<tr>
<td>Over Write</td>
<td>Select this check box to replace existing files in the target folder.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Examples

### Copy executables and a readme file

#### Goal

You want to copy just the readme and the files needed to run this C# console app:

```
`-- ConsoleApplication1
    |-- ConsoleApplication1.sln
    |-- readme.txt
    `-- ClassLibrary1
        |-- ClassLibrary1.csproj
    `-- ClassLibrary2
        |-- ClassLibrary2.csproj
    `-- ConsoleApplication1
        |-- ConsoleApplication1.csproj
```

On the Variables tab, ```$(BuildConfiguration)``` is set to ```release```.

#### Arguments

* Source Folder: ```$(Build.SourcesDirectory)```

* Contents (example of multiple match patterns):

   ```
   ConsoleApplication1\ConsoleApplication1\bin\**\*.exe
   ConsoleApplication1\ConsoleApplication1\bin\**\*.dll
   ConsoleApplication1\readme.txt
   ```

* Contents (example of OR condition):

   ```
   ConsoleApplication1\ConsoleApplication1\bin\**\?(*.exe|*.dll)
   ConsoleApplication1\readme.txt
   ```

* Contents (example of NOT condition): 

   ```
   ConsoleApplication1\**\bin\**\!(*.pdb|*.config)
   !ConsoleApplication1\**\ClassLibrary*\**
   ConsoleApplication1\readme.txt
   ```

* Target Folder: ```$(Build.ArtifactStagingDirectory)```

#### Results

These files are copied to the staging directory:

```
`-- ConsoleApplication1
    |-- readme.txt
    `-- ConsoleApplication1
        `-- bin
            `-- Release
                | -- ClassLibrary1.dll
                | -- ClassLibrary2.dll
                | -- ConsoleApplication1.exe
```

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

### How do I use this task to publish artifacts?

See [Artifacts in Team Build](../../build/artifacts.md).

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
