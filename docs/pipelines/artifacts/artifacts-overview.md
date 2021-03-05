---
title: Artifacts in Azure Pipelines
ms.custom: seodec18
description: Supported Artifacts in Azure Pipelines 
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.date: 03/05/2021
monikerRange: '>= tfs-2015'
---

# Artifacts in Azure Pipelines overview

Azure Artifacts enable developers to consume and publish different types of packages to Artifacts feeds and public registries such as NuGet.org and npmjs.com. You can use Azure Artifacts in conjunction with Azure Pipelines to deploy packages, publish build artifacts, or integrate files between your pipeline stages to build, test, or deploy your application.

## Supported artifact types

The following table describes supported artifact types in Azure Pipelines.

| Supported artifact types                              | Description                                                                                                                                                           |
|------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------                                              |
| [Build artifacts](build-artifacts.md)                 | Build artifacts are the files that your build produce. E.g. .dll, .exe, and .PDB symbols files.             |
| [Pipeline artifacts](pipeline-artifacts.md) | You can use pipeline artifacts to help store build outputs and move intermediate files between jobs in your pipeline. Pipeline artifacts are tied to the pipeline that they're created in. You can use them within the pipeline and download them from the build, as long as the build is retained. Pipeline artifacts are the new generation of build artifacts. They take advantage of existing services to dramatically reduce the time it takes to store outputs in your pipelines.                                                                                                                                            |
| [Maven](maven.md)                          | You can publish Maven artifacts to Azure Artifacts feeds or Maven repository.                                          |
| [npm](npm.md)                              | You can publish npm packages to Azure Artifacts feeds or npm registry.                                                 |
| [NuGet](nuget.md)                          | You can publish NuGet packages to Azure Artifacts feeds or NuGet repository.                                           |
| [PyPI](pypi.md)                            | You can publish Python packages to Azure Artifacts feeds or PyPI repository.                                           |
| [Symbols](symbols.md)                      | [Symbol files](../../artifacts/concepts/symbols.md) contain debugging information for compiled executables. You can publish symbols to symbol servers. Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing the specific product, package, or build information.                                                                                                                                                    |
| [Universal packages](universal-packages.md)| Universal Packages store one or more files together in a single unit that has a name and version. Unlike pipeline artifacts that reside in the pipeline, Universal Packages reside within a feed in Azure Artifacts.                                                                    |

> [!NOTE]
> Artifacts can be produced by different types of sources. See [Release Artifacts and Artifact sources](../release/artifacts.md) to learn about the different types of sources and how to configure your Azure pipelines to deploy from them.

## How do I publish and consume artifacts?

Each kind of artifact has a different way of being published and consumed. Some artifacts are specific to particular development tools, such as .NET, Node.js/JavaScript, Python, and Java. Other artifact types offer more generic file storage, such as pipeline artifacts and Universal Packages. Refer to the earlier table for specific guidance on each kind of artifact that we support.

To view the permissions involved, see [feed permissions](../../artifacts/feeds/feed-permissions.md).

## What's next?

- [Publish and download artifacts in Azure Pipelines](pipeline-artifacts.md)
- [Build Artifacts](build-artifacts.md)
- [Releases in Azure Pipelines](../release/releases.md)