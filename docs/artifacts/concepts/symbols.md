---
title: Symbol files
description: Working with symbol files
ms.technology: devops-artifacts
ms.topic: conceptual
ms.assetid: 6D0F0D86-2ADC-4902-AFA7-98F7EF78EE07
ms.date: 06/08/2021
monikerRange: '>= tfs-2017'
---

# Symbol files overview

**Azure DevOps Services | TFS 2018 | TFS 2017**

> [!NOTE]
> A symbol server is available with **Azure Artifacts** in Azure DevOps Services and works best with **Visual Studio 2017 Update 4 or later**. **Team Foundation Server** users and users without the **Azure Artifacts** extension can publish symbols to a file share using the [Index Sources & Publish Symbols task](../../pipelines/tasks/build/index-sources-publish-symbols.md).

To debug compiled executables, especially executables compiled from native code languages like C++, you need symbol files that contain mapping information to the source code. These files are created from source code during compilation and generally have the PDB (program database) extension. Azure Artifacts offers a dedicated symbols server to publish your symbols.

## What's in a symbol file

Symbols contain a set of useful debugging information, including:

- publics and exports
- global symbols
- local symbols
- type data
- source indexes
- line numbers

## Publishing symbol files

You can publish your symbols to different destinations by using the **Index Sources and Publish Symbols** task:  

- [publish to the symbol server](../../pipelines/artifacts/symbols.md#publish-symbols)
- [Publish to a file share](../../pipelines/artifacts/symbols.md#publish-symbols-to-a-file-share)
- [Publish to Portable PDBs](../../pipelines/artifacts/symbols.md#portable-pdbs)

## Consuming symbol files

Once the symbol files are published, you can use Visual Studio or WinDbg to consume the symbols to debug your application. The debugger will find the appropriate symbols using a unique ID that identifies the symbols associated with the binary.

- [Use symbols in Visual Studio](../symbols/debug-with-symbols-visual-studio.md)
- [Use symbols in WinDbg](../symbols/debug-with-symbols-windbg.md) 
 
## Using symbols with NuGet packages

If your application uses the .NET standard NuGet packages, there are two ways to share your symbols. You can use NuGet to generate *symbol packages* (.snupkg), but these packages are only needed if you're publishing your symbols to SymbolSource.org or another external symbol host, or you can use the *Index Sources and Publish Symbols* task to publish your symbols to Azure Artifact's symbol server.

#### Sharing private symbols with Symbol Server
If you're publishing packages to Azure Artifacts, there's no need to use NuGet symbols packages. Instead, configure the [Index Sources and Publish Symbols](../../pipelines/tasks/build/index-sources-publish-symbols.md) task to publish your symbols to the Artifact's symbols server.

#### Sharing public symbols on SymbolSource.org
If you're publishing your packages to NuGet.org, you can create [symbol packages](/nuget/create-packages/symbol-packages) and publish them to [SymbolSource.org](http://www.symbolsource.org/).

## Related articles

- [Artifacts feeds overview](./feeds.md)
- [Feed views](./views.md)
- [Set up feed permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](./upstream-sources.md)
- [Configure upstream behavior](./upstream-behavior.md)