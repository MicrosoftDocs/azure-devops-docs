---
title: Debug with symbols in Visual Studio
description: Debug with symbols in Visual Studio using the Symbol Server in Azure Artifacts
ms.assetid: 318323C4-5B2F-45DE-A834-CCE03C670F8C
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 10/18/2017
monikerRange: '>= tfs-2017'
---

# Debug with symbols in Visual Studio

[!INCLUDE [](../_shared/availability-symbols.md)]

Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. To learn more about symbols, read the [concept page](../concepts/symbols.md); to publish symbols, see [this page](/azure/devops/pipelines/artifacts/symbols?toc=/azure/devops/artifacts/toc.json). To use symbols in WinDbg, see [this page](debug-with-symbols-windbg.md).

## Add the symbol server to Visual Studio

To debug with symbols, select and add the Azure DevOps Services symbol server to your Visual Studio environment using the Tools->Options->Debugger->Symbols page.

![Add Azure DevOps Services Symbol Server in VS Debugger](_img/vsdebugger1.jpg)

In the **Connect to Azure DevOps Services Symbol Server** dialog, select the organization to which the symbols have been published and the corresponding user identity that has access to this organization. 

![Connect to Azure DevOps Services Symbol Server](_img/connectsymbolserver.png)

Click **Connect** in the above dialog. The Azure DevOps Services Symbol Server is now remembered by Visual Studio. When a debugging session begins, Visual Studio will be able to get symbols from Azure DevOps Services.

![Add Azure DevOps Services Symbol Server in VS Debugger](_img/vsdebugger2.png)

## Debugging optimized modules

If you're debugging an optimized module (e.g. something that was built with the `Release` configuration) and you haven't changed the default "Enable Just My Code" setting in Options, Visual Studio will not automatically fetch symbols for the optimized module. If this is the case, the Modules window will have a warning message.

To debug the module, you can either:
- Open the Modules window, right-click the module, and choose "Load Symbols" (recommended)
- In Options > Debugging > General, uncheck "Enable Just My Code"

## Source Link support

We recommend checking "Enable Source Link support" in Options > Debugging > General (it's checked by default).

If you choose to enable source server support, please consider the [security implications](/visualstudio/debugger/source-server-security-alert) before doing so.

### Portable PDBs and Source Link

If you're using [Portable PDBs](https://github.com/dotnet/core/blob/master/Documentation/diagnostics/portable_pdb.md), [Source Link](https://github.com/dotnet/core/blob/master/Documentation/diagnostics/source_link.md) cannot currently authenticate to private source repositories (like Azure DevOps Services), and thus will not work.