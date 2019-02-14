---
title: Artifacts in Azure Pipelines
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Understand build artifacts in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 11/13/2018
monikerRange: '>= tfs-2015'
---

# Artifacts in Azure Pipelines

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can publish and consume many different types of packages and artifacts with Azure Pipelines. Your continuous integration/continuous deployment (CI/CD) pipeline can publish specific package types to their respective package repositories (NuGet, npm, Python, and so on). Or you can use build artifacts and pipeline artifacts (preview) to help store build outputs and intermediate files between build steps. You can then add onto, build, test, or even deploy those artifacts.

## Supported artifact types

The following table describes supported artifact types in Azure Pipelines.

| Supported artifact types                              | Description                                                                                                              |
|------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [Build artifacts](build-artifacts.md)                 | Build artifacts are the files that you want your build to produce. Build artifacts can be nearly anything that your team needs to test or deploy your app. For example, you've got .dll and .exe executable files and a .PDB symbols file of a C# or C++ .NET Windows app. |
| [Pipeline artifacts (preview)](pipeline-artifacts.md) | You can use pipeline artifacts to help store build outputs and move intermediate files between jobs in your pipeline. Pipeline artifacts are tied to the pipeline that they're created in. You can use them within the pipeline and download them from the build, as long as the build is retained. Pipeline artifacts are the new generation of build artifacts. They take advantage of existing services to dramatically reduce the time it takes to store outputs in your pipelines. **Only available in Azure DevOps Services**. |
| [Maven](maven.md)                         | You can publish Maven artifacts to Azure Artifacts feeds or Maven repositories.                                          |
| [npm](npm.md)                              | You can publish npm packages to Azure Artifacts or npm registries.                                                       |
| [NuGet](nuget.md)                          | You can publish NuGet packages to Azure Artifacts, other NuGet services (like NuGet.org), or internal NuGet repositories. |
| [PyPI](pypi.md)                            | You can publish Python packages to Azure Artifacts or PyPI repositories. |
| [Symbols](symbols.md)                        | [Symbol files](/azure/devops/artifacts/concepts/symbols.md) contain debugging information for compiled executables. You can publish symbols to symbol servers. Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing specific product, package, or build information. |
| [Universal](universal-packages.md)         | Universal Packages store one or more files together in a single unit that has a name and version. Unlike pipeline artifacts that reside in the pipeline, Universal Packages reside within a feed in Azure Artifacts. |                       

## How do I publish and consume artifacts?

Each kind of artifact has a different way of being published and consumed. Some artifacts are specific to particular development tools, such as .NET, Node.js/JavaScript, Python, and Java. Other artifact types offer more generic file storage, such as pipeline artifacts and Universal Packages. Refer to the earlier table for specific guidance on each kind of artifact that we support.