---
title: Symbol files
description: Working with symbols
ms.technology: devops-artifacts
ms.topic: conceptual
ms.assetid: 6D0F0D86-2ADC-4902-AFA7-98F7EF78EE07
ms.date: 07/15/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Symbols overview

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

To debug compiled executables from native languages like C and C++, you need symbol files that contain mapping information to the source code. These files are created from source code during compilation and generally have the PDB (program database) extension. Azure Artifacts offers a dedicated symbols server to publish your symbols.

## What are symbol files

Symbol files are created by the compiler when you build your project. A typical symbols file might contain: source indexers, local and/or global variables, function names and pointers to the addresses of their entry points, line numbers etc. This data can be used to link the debugger to your source code to debug your application.

## Publish symbol files

Using the **Index Sources and Publish Symbols** task, you can publish your symbols to Azure Artifacts symbol server, file shares, or portable PDBs:  

- [publish to the symbol server](../../pipelines/artifacts/symbols.md#publish-symbols-to-azure-artifacts-symbol-server).
- [Publish to a file share](../../pipelines/artifacts/symbols.md#publish-symbols-to-a-file-share).
- [Publish to Portable PDBs](../../pipelines/artifacts/symbols.md#portable-pdbs).

If your application uses the .NET standard, another viable option to share your symbols is to [Create a .snupkg symbol package](/nuget/create-packages/symbol-packages-snupkg#creating-a-symbol-package) and publish it to NuGet.org.

## Consume symbol files

Once the symbol files are published, you can use Visual Studio or WinDbg to consume the symbols and debug your application. The debugger will find the appropriate symbols using a unique ID that identifies the symbols associated with the compiled binary and link it to your source code.

- [Debug with symbols in Visual Studio](../symbols/debug-with-symbols-visual-studio.md).
- [Debug with symbols in WinDbg](../symbols/debug-with-symbols-windbg.md).
 
## Related articles

- [Artifacts feeds overview](./feeds.md).
- [Promote a package to a view](../feeds/views.md).
- [Upstream sources overview](./upstream-sources.md).
- [Configure upstream behavior](./upstream-behavior.md).
