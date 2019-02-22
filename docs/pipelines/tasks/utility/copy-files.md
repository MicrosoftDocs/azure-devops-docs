---
title: Copy Files task
description: Copy files between folders with match patterns when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BB8401FB-652A-406B-8920-4BD8977BFE68
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Copy Files task

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

Use this task in a build or release pipeline to copy files from a source folder to a target folder using match patterns.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/CopyFilesV2.md)]
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
<p>If your build produces artifacts outside of the sources directory, specify ```$(Agent.BuildDirectory)``` to copy files from the directory created for the pipeline.</p>
</td>
</tr>
<tr>
<td>Contents</td>
<td><p>Specify match pattern filters (one on each line) that you want to apply to the list of files to be copied. For example:
</p>
<ul>
<li>```*``` copies all files in the specified source folder.</li>
<li>```**\*``` copies all files in the specified source folder and all files in all sub-folders.</li>
<li>```**\bin\**``` copies all files recursively from any ```bin``` folder.</li>
</ul>
<p>The pattern is used to match only file paths, not folder paths. So you should specify patterns such as ```**\bin\**``` instead of ```**\bin```.</p>
<p>You must use the path separator that matches your build agent type, e.g. `/` must be used for Linux agents.
<p>More examples are shown below.</p>
</td>
</tr>
<tr>
<td>Target Folder</td>
<td>Folder where the files will be copied. In most cases you specify this folder using a variable. For example, specify ```$(Build.ArtifactStagingDirectory)``` if you intend to [publish the files as build artifacts](../../artifacts/build-artifacts.md).</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Clean Target Folder</td>
<td>Select this check box to delete all existing files in the target folder before beginning to copy.</td>
</tr>
<tr>
<td>Overwrite</td>
<td>Select this check box to replace existing files in the target folder.</td>
</tr>
<tr>
<td>Flatten Folders</td>
<td>Flatten the folder structure and copy all files into the specified target folder.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Notes

If no files are matched, the task will still report success.
If a matched file already exists in the target, the task will report failure unless Overwrite is set to true.

[!INCLUDE [example](../_shared/copyfiles-publishbuildartifacts-usage.md)]

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

> **Note:** _ConsoleApplication1.sln_ contains a _bin_ folder with .dll and .exe files, see the Results below to see what gets moved!

On the Variables tab, ```$(BuildConfiguration)``` is set to ```release```.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

**Example with multiple match patterns:**

```yaml
steps:
- task: CopyFiles@2
  displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
  inputs:
    Contents: |
     ConsoleApplication1\ConsoleApplication1\bin\**\*.exe
     ConsoleApplication1\ConsoleApplication1\bin\**\*.dll
     ConsoleApplication1\readme.txt
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
```

**Example with OR condition:**

```yaml
steps:
- task: CopyFiles@2
  displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
  inputs:
    Contents: |
     ConsoleApplication1\ConsoleApplication1\bin\**\?(*.exe|*.dll)
     ConsoleApplication1\readme.txt
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
```

**Example with NOT condition:**

```yaml
steps:
- task: CopyFiles@2
  displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
  inputs:
    Contents: |
     ConsoleApplication1\**\bin\**\!(*.pdb|*.config)
     !ConsoleApplication1\**\ClassLibrary*\**
     ConsoleApplication1\readme.txt
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
```

::: moniker-end

::: moniker range="< azure-devops"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

![icon](_img/copy-files.png) **Utility: Copy Files**

* Source folder

 ```
$(Build.SourcesDirectory)
```

* Contents

    **Example with multiple match patterns:**

    ```
    ConsoleApplication1\ConsoleApplication1\bin\**\*.exe
    ConsoleApplication1\ConsoleApplication1\bin\**\*.dll
    ConsoleApplication1\readme.txt
    ```

    **Example with OR condition:**
    ```
    ConsoleApplication1\ConsoleApplication1\bin\**\?(*.exe|*.dll)
    ConsoleApplication1\readme.txt
    ```

    **Example with NOT condition:**
    ```
    ConsoleApplication1\**\bin\**\!(*.pdb|*.config)
    !ConsoleApplication1\**\ClassLibrary*\**
    ConsoleApplication1\readme.txt
    ```

* Target folder

 ```
$(Build.ArtifactStagingDirectory)
```

---

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

### Copy everything from the source directory except the .git folder


# [YAML](#tab/yaml)

::: moniker range="azure-devops"

**Example with multiple match patterns:**

```yaml
steps:
- task: CopyFiles@2
  displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
  inputs:
    SourceFolder: '$(Build.SourcesDirectory)'
    Contents: |
     **/*
     !.git/**/*
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
```

::: moniker-end

::: moniker range="< azure-devops"

YAML builds are not yet available on TFS.

::: moniker-end

# [Designer](#tab/designer)

![icon](_img/copy-files.png) **Utility: Copy Files**

* Source folder

 ```
$(Build.SourcesDirectory)
```

* Contents

**Example with multiple match patterns:**

 ```
     **/*
     !.git/**/*
```

* Target folder

 ```
$(Build.ArtifactStagingDirectory)
```

---

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

### How do I use this task to publish artifacts?

See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
