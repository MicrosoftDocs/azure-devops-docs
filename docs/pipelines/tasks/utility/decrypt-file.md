---
title: Decrypt File (OpenSSL) task
description: A thin utility task for file decryption using OpenSSL
ms.topic: reference
ms.assetid: 7C6A6b71-4355-4AFC-A274-480EAB5678E9
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 02/12/2020
monikerRange: azure-devops
---

# Decrypt File (OpenSSL) task

**Azure Pipelines**

Use this task to decrypt files using OpenSSL.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DecryptFileV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`cipher`<br/>Cypher|(Required) Encryption cypher to use. See [cypher suite names](https://go.microsoft.com/fwlink/?LinkID=627129) for a complete list of possible values <br/>Default value: `des3`|
|`inFile`<br/>Encrypted file|(Required) Relative path of file to decrypt.|
|`passphrase`<br/>Passphrase|(Required) Passphrase to use for decryption. Use a Variable to encrypt the passphrase.|
|`outFile`<br/>Decrypted file path|(Optional) Optional filename for decrypted file. Defaults to the Encrypted File with a ".out" extension|
|`cwd`<br/>Working directory|(Optional) Working directory for decryption. Defaults to the root of the repository <br/>Argument aliases: `workingDirectory`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
