---
title: Artifacts in Azure Pipelines
ms.custom: seodec18
description: Understand build artifacts in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 11/13/2018
monikerRange: '>= tfs-2015'
---

# Artifacts in Azure Pipelines

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015.3 and newer | TFS 2015 RTM ([see Q&A](#tfs-2015))**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can publish and consume many different types of packages and artifacts with Azure Pipelines. Your continuous integration (CI)/continuous deployment (CD) pipeline can publish specific package types to their respective package repositories (NuGet, npm, Python, etc.), or you can leverage Build artifacts/Pipeline Artifacts (Preview) to help store build outputs and intermediate files between build steps where they can be added onto, built, tested, or even deployed.

## Supported artifact types

Below you will find a table of supported artifact types in Azure Pipelines.

| Supported artifact types                              | Description                                                                                                              |
|------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [Build artifacts](build-artifacts.md)                 | Build artifacts are the files that you want your build to produce. Build artifacts can be nearly anything your team needs to test or deploy your app. For example, you've got a .DLL and .EXE executable files and .PDB symbols file of a C# or C++ .NET Windows app. |
| [Pipeline Artifacts (Preview)](pipeline-artifacts.md) | You can use Pipelines Artifacts to help store build outputs and move intermediate files between jobs in your pipeline. Pipeline Artifacts are tied to the pipeline that they are created in and can be used within the pipeline and downloaded from the build as long as the build is retained. Pipelines Artifacts are the new generation of Build artifacts, they leverage existing services to dramatically reduce the time it takes to store outputs in your pipelines. |
| [Maven](maven.md)                         | You can publish Maven artifacts to Azure Artifacts feeds or Maven repositories.                                          |
| [npm](npm.md)                              | You can publish npm packages to Azure Artifacts or npm registries.                                                       |
| [NuGet](nuget.md)                          | You can publish NuGet packages to Azure Artifacts, other NuGet services (like NuGet.org), or interal NuGet repositories. |
| [PyPI](pypi.md)                            | You can publish Python packages to Azure Artifacts or PyPI repositories. |
| [Symbols](symbols.md)                        | [Symbol files](/azure/devops/artifacts/concepts/symbols.md) contain debugging information for compiled executables. You can publish symbols to symbol servers, which enable debuggers to automatically retrieve the correct symbol files without knowing specific product, package, or build information. |
| [Universal](universal-packages.md)         | Universal Packages store one or more files together in a single unit that has a name and version. Unlike Pipeline Artifacts that reside in the pipeline, Universal Packages reside within a feed in Azure Artifacts. |                       

## How do I publish and consume artifacts?

Each different kind of artifact has a different way of being published and consumed. Some artifacts are specific to particular development tools such as .NET, Node.js/JavaScript, Python, and Java. Other artifact types offer more generic file storage such as Pipeline Artifacts and Universal Packages. Refer to the table above for specific guidance on each kind of artifact that we support.