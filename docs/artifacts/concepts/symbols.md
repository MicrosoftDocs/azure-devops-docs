---
title: Symbol files (PDBs)
description: Symbol files conceptual overview for Azure DevOps Services and Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.assetid: 6D0F0D86-2ADC-4902-AFA7-98F7EF78EE07
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 10/19/2017
monikerRange: '>= tfs-2017'
---

 

# Symbol files (PDBs)

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

[!INCLUDE [](../_shared/availability-symbols.md)]

To debug compiled executables, especially executables compiled from native code languages like C++, you need symbol files that contain debugging information. These files generally have the PDB (program database) extension. 

## What's in a symbol file
Symbols contain a set of useful debugging information, including:
- publics and exports
- global symbols
- local symbols
- type data
- source indexes
- line numbers

## Publishing symbol files
To allow your users to debug your application, you need to [publish your symbol files](/azure/devops/pipelines/artifacts/symbols) to a Symbol Server, like the one provided by Azure Artifacts in Azure DevOps Services. 

## Consuming symbol files
Once you've published your symbol files, users can use them in the debugging process in [Visual Studio](../symbols/debug-with-symbols-visual-studio.md) or [WinDbg](../symbols/debug-with-symbols-windbg.md). The debugger will find the appropriate symbols using a unique ID that identifies the symbols associated with the binary.

## Using symbols with NuGet packages
If you publish your application's executables via NuGet packages, there are two ways to share symbols with your users. NuGet can make *symbols packages*, which are denoted by a `.symbols.nupkg` extension, but these packages are only needed if you're publishing symbols to [SymbolSource.org](http://www.symbolsource.org/) or another external symbol host.

### Sharing private symbols with Symbol Server
If you're publishing packages to Azure Artifacts, there's no need to use NuGet symbols packages. Instead, configure the [Index Sources and Publish Symbols](../../pipelines/tasks/build/index-sources-publish-symbols.md) task in Team Build [using the walkthrough](../../pipelines/artifacts/symbols.md).

### Sharing public symbols on SymbolSource.org
If you're publishing your packages to NuGet.org, you can publish corresponding [symbols packages](/nuget/create-packages/symbol-packages) to [SymbolSource.org](http://www.symbolsource.org/). If you're using the [NuGet](../../pipelines/tasks/package/nuget.md) or [.NET Core](../../pipelines/tasks/build/dotnet-core.md) tasks in Team Build, check **Create symbols package** to create a symbol package when you pack your executables.

## Learn more
To learn more about symbols, see [the Windows documentation](/windows-hardware/drivers/debugger/introduction-to-symbols).
