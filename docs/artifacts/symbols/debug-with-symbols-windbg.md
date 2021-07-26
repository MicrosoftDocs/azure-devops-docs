---
title: Debug with symbols in WinDbg
description: Use WinDbg to consume symbols and debug your application
ms.assetid: C8C003EA-79C8-49EF-BEBD-35548505F0CF
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 07/26/2021
monikerRange: '>= tfs-2017'
---

# Debug with WinDbg

 Azure Artifacts offers a dedicated symbols server to publish your symbols. You can connect a debugger to automatically retrieve the correct symbol files and debug your application. Using WinDbg, you can load an executable or attach the debugger to a running process, consume your symbols, set up breakpoints, and step through and analyze your code.

## Add the symbol server to WinDbg

To use the Azure Artifacts symbol server, you must add your organization to the symbols search path, but before we can do that, we must first create a personal access token.

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Symbols (read)** scope and copy it to your clipboard.
1. Open WinDbg, or [install](https://www.microsoft.com/store/p/windbg-preview/9pgjgd53tn86) it if you haven't already.
1. Select **File** > **OpenExecutable** to load the executable you wish to debug.
1. Run the following command to set the symbols path. Replace the placeholder *<ORGANIZATION_NAME>* with your organization name:

    ```Command
    .sympath+ https://artifacts.dev.azure.com/<ORGANIZATION_NAME>/_apis/symbol/symsrv
    ```

1. Set a breakpoint by running the [bp command](/windows-hardware/drivers/debugger/bp--bu--bm--set-breakpoint-). this will trigger a symbols request.
1. In the authentication prompt, paste your personal access token that you created earlier. You can leave the username field blank.

WinDbg should then acquire the symbols for your executable. To verify if your symbols are loaded, run the **lm** command to list all loaded modules.
