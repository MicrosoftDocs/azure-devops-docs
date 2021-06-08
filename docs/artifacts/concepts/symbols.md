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

- [publish to the symbol server](/azure/devops/pipelines/artifacts/symbols?toc=%2Fazure%2Fdevops%2Fartifacts%2Ftoc.json&view=azure-devops#publish-symbols)
- [Publish to a file share](/azure/devops/pipelines/artifacts/symbols?toc=%2Fazure%2Fdevops%2Fartifacts%2Ftoc.json&view=azure-devops#publish-symbols-to-a-file-share)
- [Publish to Portable PDBs](/azure/devops/pipelines/artifacts/symbols?toc=%2Fazure%2Fdevops%2Fartifacts%2Ftoc.json&view=azure-devops#portable-pdbs)

## Consuming symbol files
Once you've published your symbol files, users can use them in the debugging process in [Visual Studio](../symbols/debug-with-symbols-visual-studio.md) or [WinDbg](../symbols/debug-with-symbols-windbg.md). The debugger will find the appropriate symbols using a unique ID that identifies the symbols associated with the binary.

## Using symbols with NuGet packages
If you publish your application's executables via NuGet packages, there are two ways to share symbols with your users. NuGet can make *symbols packages*, which are denoted by a `.snupkg` extension, but these packages are only needed if you're publishing symbols to [SymbolSource.org](http://www.symbolsource.org/) or another external symbol host.

### Sharing private symbols with Symbol Server
If you're publishing packages to Azure Artifacts, there's no need to use NuGet symbols packages. Instead, configure the [Index Sources and Publish Symbols](../../pipelines/tasks/build/index-sources-publish-symbols.md) task in Team Build [using the walkthrough](../../pipelines/artifacts/symbols.md).

### Sharing public symbols on SymbolSource.org
If you're publishing your packages to NuGet.org, you can publish corresponding [symbols packages](/nuget/create-packages/symbol-packages) to [SymbolSource.org](http://www.symbolsource.org/). If you're using the [NuGet](../../pipelines/tasks/package/nuget.md) or [.NET Core](../../pipelines/tasks/build/dotnet-core-cli.md) tasks in Team Build, check **Create symbols package** to create a symbol package when you pack your executables.

## Learn more
To learn more about symbols, see [the Windows documentation](/windows-hardware/drivers/debugger/introduction-to-symbols).