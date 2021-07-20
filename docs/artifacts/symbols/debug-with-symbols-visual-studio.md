---
title: Debug with symbols in Visual Studio
description: Use symbols to debug your application with Visual Studio.
ms.assetid: 318323C4-5B2F-45DE-A834-CCE03C670F8C
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 07/20/2021
monikerRange: '>= tfs-2017'
---

# Debug with Visual Studio

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. These files contain useful information for the debugger and generally have the *PDB* extension. You can use Visual Studio to consume your symbols from Azure Artifacts symbol server or other external sources to step into your code and debug your application.

## Add Azure Artifacts symbol server

To debug with symbols from the Azure Artifacts symbol server, we must authenticate to the server and add a new Azure DevOps Services symbol server to our Visual Studio environment.

1. From Visual Studio select **Tools** > **Options** > **Debugging**.

1. Select **Symbols** from the list, and then select the `+` sign to add a new Azure DevOps symbol server location.

    :::image type="content" source="media/add-server-location.png" alt-text="Add a new Azure DevOps symbol server location":::

1. A new dialog box **Connect to Azure DevOps Symbol Server** will open, select your account from the dropdown menu, and then select the organization that you wish to connect to. Select **Connect** when you are done to connect to the symbol server.

    :::image type="content" source="media/connect-to-symbol-server.png" alt-text="Connect to Azure DevOps Symbol Server":::

1. Your symbol server is then added to the list of symbol file locations.

    :::image type="content" source="media/symbol-locations.png" alt-text="New symbol server added to the list of symbol file locations":::

## Debugging optimized modules

If you're planning to debug an optimized module (example release binaries) or a third-party source code, we recommend that you uncheck the `Enable Just My Code` checkbox in Visual Studio options.

To do so, select **Tools** > **Options** and then **Debugging**. Select **General** from the list and then uncheck **Enable Just My Code**.

:::image type="content" source="media/enable-just-my-code.png" alt-text="Enable just my code - enable 3rd party source code debugging":::

## Source Link support

We recommend enabling source link support to step into source code. To do so, check **Enable Source Link support** under Options > Debugging > General. By default Source Link support is enabled in Visual Studio.

If you choose to enable source server support, please consider the [security implications](/visualstudio/debugger/source-server-security-alert) before doing so.

### Portable PDBs and Source Link

If you're using [Portable PDBs](https://github.com/dotnet/core/blob/master/Documentation/diagnostics/portable_pdb.md), Source Link does not support authenticating to private source repositories like Azure DevOps Services. See [Source Link diagnostics](https://github.com/dotnet/designs/blob/main/accepted/2020/diagnostics/source-link.md) for more details.

## What's next?

* [Symbol files](../concepts/symbols.md).
* [Publish symbols for debugging](../../pipelines/artifacts/symbols.md?toc=%252fazure%252fdevops%252fartifacts%252ftoc.json). 
* [Debug with symbols in WinDbg](debug-with-symbols-windbg.md).