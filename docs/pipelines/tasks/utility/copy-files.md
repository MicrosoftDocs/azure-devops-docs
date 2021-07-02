---
title: Copy Files task
description: Copy files between folders with match patterns when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: BB8401FB-652A-406B-8920-4BD8977BFE68
ms.custom: seodec18
ms.date: 06/08/2020
monikerRange: '>= tfs-2015'
---

# Copy Files task

[!INCLUDE [temp](../../includes/version-tfs-2015-update.md)]

Use this task to copy files from a source folder to a target folder using match patterns.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CopyFilesV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`SourceFolder`<br/>Source Folder|(Optional) Folder that contains the files you want to copy. If you leave it empty, the copying is done from the root folder of the repo (same as if you had specified [**`$(Build.SourcesDirectory)`**](../../build/variables.md)). <br/> If your build produces artifacts outside of the sources directory, specify `$(Agent.BuildDirectory)` to copy files from the directory created for the pipeline.|
|`Contents`<br/>Contents|(Required) File paths to include as part of the copy. Supports multiple lines of match patterns. <br/>For example: <br/><ul><li><b><code>*</code></b> copies all files in the specified source folder</li><li><b><code>\*\*</code></b> copies all files in the specified source folder and all files in all sub-folders</li><li><b><code>\*\*\bin\\\*\*</code></b> copies all files recursively from any bin folder <br/><br/>The pattern is used to match only file paths, not folder paths. So you should specify patterns such as \*\*\bin\\\*\* instead of \*\*\bin.<br/>You must use the path separator that matches your build agent type. **Example,** / must be used for Linux agents. More examples are shown below. <br/>Default value: `**`|
|`TargetFolder`<br/>Target Folder|(Required) Target folder or UNC path files will copy to. You can use [variables](../../build/variables.md). <br/>Example: **$(build.artifactstagingdirectory)**|
|`CleanTargetFolder`<br/>Clean Target Folder|(Optional) Delete all existing files in target folder before copy <br/>Default value: `false`|
|`OverWrite`<br/>Overwrite|(Optional) Replace existing files in target folder <br/>Default value: `false`|
|`flattenFolders`<br/>Flatten Folders|(Optional) Flatten the folder structure and copy all files into the specified target folder <br/>Default value: `false`|
|`preserveTimestamp`<br/>Preserve Target Timestamp|(Optional) Using the original source file, preserve the target file timestamp. <br/>Default value: `false`|

## Notes

If no files are matched, the task will still report success.
If a matched file already exists in the target, the task will report failure unless Overwrite is set to true.

[!INCLUDE [example](../includes/copyfiles-publishbuildartifacts-usage.md)]

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

> [!NOTE]
> _ConsoleApplication1.sln_ contains a _bin_ folder with .dll and .exe files, see the Results below to see what gets moved!

On the Variables tab, ```$(BuildConfiguration)``` is set to ```release```.

#### [YAML](#tab/yaml/)
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

**Example with variables in content section**

```yaml
- task: CopyFiles@2
  inputs:
    Contents: '$(Build.Repository.LocalPath)/**' 
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
```

::: moniker-end

::: moniker range="< azure-devops"

YAML builds are not yet available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
:::image type="icon" source="media/copy-files.png" border="false"::: **Utility: Copy Files**

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

* * *
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


#### [YAML](#tab/yaml/)
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

#### [Classic](#tab/classic/)
:::image type="icon" source="media/copy-files.png" border="false"::: **Utility: Copy Files**

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

* * *
## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../includes/qa-minimatch.md)]

### How do I use this task to publish artifacts?

See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
