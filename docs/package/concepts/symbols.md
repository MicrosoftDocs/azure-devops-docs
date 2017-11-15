---
title: Symbol files (PDBs)
description: Symbol files conceptual overview for VSTS and Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.assetid: 6D0F0D86-2ADC-4902-AFA7-98F7EF78EE07
ms.manager: douge
ms.author: amullans
ms.date: 10/19/2017
---

# Symbol files (PDBs)

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
To allow your users to debug your application, you need to [publish your symbol files](/vsts/build-release/symbols/index) to a Symbol Server, like the one provided by Package Management in VSTS. 

## Consuming symbol files
Once you've published your symbol files, users can use them in the debugging process in [Visual Studio](../symbols/debug-with-symbols-visual-studio.md) or [WinDbg](../symbols/debug-with-symbols-windbg.md). The debugger will find the appropriate symbols using a unique ID that identifies the symbols associated with the binary.

## Using symbols with NuGet packages
If you publish your application's executables via NuGet packages, there are two ways to share symbols with your users. NuGet can make *symbols packages*, which are denoted by a `.symbols.nupkg` extension, but these packages are only needed if you're publishing symbols to [SymbolSource.org](http://www.symbolsource.org/) or another external symbol host.

### Sharing private symbols with Symbol Server
If you're publishing packages to Package Management, there's no need to use NuGet symbols packages. Instead, configure the [Index Sources and Publish Symbols](../../build-release/tasks/build/index-sources-publish-symbols.md) task in Team Build [using the walkthrough](../../build-release/symbols/index.md).

### Sharing public symbols on SymbolSource.org
If you're publishing your packages to NuGet.org, you can publish corresponding [symbols packages](https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages) to [SymbolSource.org](http://www.symbolsource.org/). If you're using the [NuGet](../../build-release/tasks/package/nuget.md) or [.NET Core](../../build-release/tasks/build/dotnet-core.md) tasks in Team Build, check **Create symbols package** to create a symbol package when you pack your executables.

## Learn more
To learn more about symbols, see [the Windows documentation](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/introduction-to-symbols).