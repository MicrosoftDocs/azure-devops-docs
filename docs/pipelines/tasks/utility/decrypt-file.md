---
title: Decrypt File (OpenSSL) task
description: A thin utility task for file decryption using OpenSSL
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7C6A6b71-4355-4AFC-A274-480EAB5678E9
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Decrypt File (OpenSSL) task

**Azure Pipelines**

Use this task in a build or release pipeline to decrypt files using OpenSSL.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DecryptFileV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Cypher</td><td>(Required) Encryption cypher to use. See [cypher suite names](https://go.microsoft.com/fwlink/?LinkID=627129) for a complete list of possible values.</td></tr>
<tr><td>Encrypted file</td><td>(Required) Relative path of file to decrypt.</td></tr>
<tr><td>Passphrase</td><td>(Required) Passphrase to use for decryption. **Use a Variable to encrypt the passphrase.**</td></tr>
<tr><td>Decrypted file path</td><td>(Optional) Optional filename for decrypted file. Defaults to the Encrypted File with a ".out" extension</td></tr>
<tr><td>Working directory</td><td>(Optional) Working directory for decryption. Defaults to the root of the repository.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
