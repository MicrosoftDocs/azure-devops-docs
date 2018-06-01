---
title: Decrypt File (OpenSSL)
description: A thin utility task for file decryption using OpenSSL.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7C6A6b71-4355-4AFC-A274-480EAB5678E9
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Decrypt File (OpenSSL)

![](_img/decryptfile.png) A thin utility task for file decryption using OpenSSL.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/DecryptFileV1.1.md)]

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

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
