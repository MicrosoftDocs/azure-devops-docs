---
title: Artifacts in Azure Pipelines
ms.custom: seodec18
description: Learn how to publish and consume many different types of packages with Azure Pipelines
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.date: 02/26/2020
monikerRange: '>= tfs-2015'
---

# Overview of Artifacts in Azure Pipelines

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Azure Artifacts allow you to publish and consume different types of packages to your feed as well as to the public package managers (e.g. NuGet.org, npmjs.com). You can use Azure Pipelines to publish build artifacts, help store build outputs and integrate files between your pipeline steps. You can then add onto, build, test, or deploy those artifacts.

> [!NOTE]
> Build and Release artifacts remains available as long as that Build is retained in the system. For more information on retaining Build and Release artifacts, see the [Retention Policies](../policies/retention.md) documentation.

## Supported artifact types

The following table describes supported artifact types in Azure Pipelines.

| Supported artifact types                              | Description                                                                                                              |
|------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [Build artifacts](build-artifacts.md)                 | Build artifacts are the files that your build produce. E.g. .dll, .exe, and .PDB symbols files. |
| [Pipeline artifacts](pipeline-artifacts.md) | You can use pipeline artifacts to help store build outputs and move intermediate files between jobs in your pipeline. Pipeline artifacts are tied to the pipeline that they're created in. You can use them within the pipeline and download them from the build, as long as the build is retained. Pipeline artifacts are the new generation of build artifacts. They take advantage of existing services to dramatically reduce the time it takes to store outputs in your pipelines. |
| [Maven](maven.md)                         | You can publish Maven artifacts to Azure Artifacts feeds or Maven repositories.                                          |
| [npm](npm.md)                              | You can publish npm packages to Azure Artifacts feeds or npm registries.                                                |
| [NuGet](nuget.md)                          | You can publish NuGet packages to Azure Artifacts, other NuGet services (like NuGet.org), or internal NuGet repositories. |
| [PyPI](pypi.md)                            | You can publish Python packages to Azure Artifacts or PyPI repositories. |
| [Symbols](symbols.md)                        | [Symbol files](../../artifacts/concepts/symbols.md) contain debugging information for compiled executables. You can publish symbols to symbol servers. Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing specific product, package, or build information. |
| [Universal](universal-packages.md)         | Universal Packages store one or more files together in a single unit that has a name and version. Unlike pipeline artifacts that reside in the pipeline, Universal Packages reside within a feed in Azure Artifacts. |

> [!NOTE]
> Build and Release artifacts will be available as long as that Build or Release run is retained, unless you specify how long to retain the artifacts. For more information on retaining Build and Release artifacts, see the [Retention Policy](../policies/retention.md) documentation.                    

## How do I publish and consume artifacts?

Each kind of artifact has a different way of being published and consumed. Some artifacts are specific to particular development tools, such as .NET, Node.js/JavaScript, Python, and Java. Other artifact types offer more generic file storage, such as pipeline artifacts and Universal Packages. Refer to the earlier table for specific guidance on each kind of artifact that we support.

## What's next?

- [Publish and download artifacts in Azure Pipelines](pipeline-artifacts.md)
- [Build Artifacts](build-artifacts.md)
- [Releases in Azure Pipelines](../release/releases.md)