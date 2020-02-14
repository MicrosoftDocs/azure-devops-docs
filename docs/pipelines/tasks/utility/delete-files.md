---
title: Delete Files task
description: Delete files from the agent working directory when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C71CD55E-3028-4526-A9C3-779ECE31CCD1
ms.manager: mijacobs
ms.custom: seodec18
ms.author: macoope
author: vtbassmatt
ms.date: 02/12/2020
monikerRange: '>= tfs-2015'
---

# Delete Files task

[!INCLUDE [temp](../../includes/version-tfs-2015-update.md)]

Use this task in a build or release pipeline to delete files or folders from the agent working directory.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DeleteFilesV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`SourceFolder`<br/>Source Folder|(Optional) Folder that contains the files you want to delete. If you leave it empty, the deletions are done from the root folder of the repo (same as if you had specified [**$(Build.SourcesDirectory)**](../../build/variables.md)). <br/>If your build produces artifacts outside of the sources directory, specify **`$(Agent.BuildDirectory)`** to delete files from the build agent working directory.|
|`Contents`<br/>Contents|(Required) File/folder paths to delete. Supports multiple lines of minimatch patterns. [More Information](https://go.microsoft.com/fwlink/?LinkID=722333). <br/> For example:<ul><li><code>**/*</code> deletes all files and folders in the root folder.</li><li><code>temp</code> deletes the <em>temp</em> folder in the root folder.</li><li><code>temp*</code> deletes any file or folder in the root folder with a name that begins with <em>temp</em>.</li><li><code>\*\*/temp/*</code> deletes all files in any sub-folder named <em>temp</em>.</li><li><code>\*\*/temp*</code> deletes any file or folder with a name that begins with <em>temp</em>.</li><li><code>!(*.vsix)</code> deletes all files in the root folder that do not have a <em>.vsix</em> extension.</li></ul>|
|`RemoveSourceFolder`<br/>Remove SourceFolder|(Optional) Attempt to remove the source folder as well <br/>Default value: `false`|
## Examples

### Delete several patterns

This example will delete `some/file`, all files beginning with `test`, and all files in all subdirectories called `bin`.

```yaml
steps:
- task: DeleteFiles@1
  displayName: 'Remove unneeded files'
  inputs:
    contents: |
      some/file
      test*
      **/bin/*
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: What's a minimatch pattern? How does it work?

A: See: 

* https://github.com/isaacs/minimatch 

* https://realguess.net/tags/minimatch/

* http://man7.org/linux/man-pages/man3/fnmatch.3.html

<!-- [!INCLUDE [temp](../includes/build-step-common-qa.md)] -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end


<!-- ENDSECTION -->
