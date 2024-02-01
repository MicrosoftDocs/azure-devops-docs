---
title: Debug with symbols in WinDbg
description: Use WinDbg to consume symbols and debug your application
ms.assetid: C8C003EA-79C8-49EF-BEBD-35548505F0CF
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 09/26/2023
monikerRange: '<= azure-devops'
---

# Debug with WinDbg

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts provides a dedicated symbols server for publishing symbols. This server allows you to connect a debugger that can automatically fetch the correct symbol files, enabling you to debug your application efficiently. With tools like WinDbg, you can load an executable, attach the debugger to a running process, consume your symbols, set up breakpoints, and systematically analyze your code.

## Add symbol server to WinDbg

To use the Azure Artifacts symbol server, you must add your organization to the symbols search path, but before we can do that, we must first create a personal access token.

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Symbols (read)** scope and copy it to your clipboard.

1. Open WinDbg, or [install](/windows-hardware/drivers/debugger/) it if you haven't already.

1. Select **File**, and then select **OpenExecutable** to load the executable you wish to debug.

1. Run the following command to set the symbols path. Replace the placeholder with your specific organization name:


    ```Command
    .sympath+ https://artifacts.dev.azure.com/<ORGANIZATION_NAME>/_apis/symbol/symsrv
    ```

1. Set a breakpoint by running the [bp command](/windows-hardware/drivers/debugger/bp--bu--bm--set-breakpoint-). this will trigger a symbols request.

1. During the authentication prompt, insert the *personal access token* you generated earlier. You can leave the *username* field empty. WinDbg will proceed to obtain the symbols for your executable.

1. To verify if your symbols are loaded, run the **lm** command to list all loaded modules.

## Start debugging

WinDbg enhances the scope and versatility of debugging, enabling effective troubleshooting of components in both user-mode and kernel-mode:

- [Get started with Windows debugging](/windows-hardware/drivers/debugger/getting-started-with-windows-debugging)
- [Get started with WinDbg (user-mode)](/windows-hardware/drivers/debugger/getting-started-with-windbg)
- [Get started with WinDbg (kernel-mode)](/windows-hardware/drivers/debugger/getting-started-with-windbg--kernel-mode-)
- [Use the WinDbg Graphical Interface (Classic)](/windows-hardware/drivers/debugger/windbg-graphical-interface)
- [Use the Debugger Commands](/windows-hardware/drivers/debugger/using-debugger-commands)

## Related articles

- [Debug with Visual Studio](./debug-with-symbols-visual-studio.md)
- [Publish symbols with Azure Pipelines](../../pipelines/artifacts/symbols.md)
- [Artifacts storage consumption](../artifact-storage.md)
