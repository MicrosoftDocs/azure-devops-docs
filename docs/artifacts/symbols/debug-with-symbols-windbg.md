---
title: Debug with symbols in WinDbg
description: Debug with symbols in WinDbg using the Symbol Server in Azure Artifacts
ms.assetid: C8C003EA-79C8-49EF-BEBD-35548505F0CF
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 10/18/2017
monikerRange: '>= tfs-2017'
---

# Debug with symbols in WinDbg

[!INCLUDE [](../_shared/availability-symbols.md)]

Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. To learn more about symbols, read the [concept page](../concepts/symbols.md); to publish symbols, see [this page](/azure/devops/pipelines/artifacts/symbols). To use symbols in Visual Studio, see [this page](debug-with-symbols-visual-studio.md).

## Ensure WinDbg can find tf.exe

1. Open `C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\srcsrv.ini`
2. Ensure that it contains the following content:

```
[trusted commands]
tf.exe="CommonExtensions\Microsoft\TeamFoundation\Team Explorer\TF.exe"
```

## Add the symbol server to WinDbg

To use the Azure DevOps Services symbol server in WinDbg, you'll add your organization to the symbol search path.

1. Open WinDbg (you can [install it from the Store](https://www.microsoft.com/store/p/windbg-preview/9pgjgd53tn86)).
2. Load the executable you wish to debug.
3. Copy this command and replace `<yourOrg>` with your Azure DevOps Services account name: `.sympath+ https://artifacts.dev.azure.com/<yourOrg>/_apis/symbol/symsrv`
4. In the Command window in WinDbg, enter the command from the previous step
5. Set a breakpoint (`bp`), which will cause WinDbg to issue a symbols request
6. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with the **Symbols (read)** scope and copy it to your clipboard
7. In the authentication prompt that appears, leave the username blank and enter your PAT from the previous step as the password

WinDbg should then acquire symbols for your executable. You can run `lm` to confirm.