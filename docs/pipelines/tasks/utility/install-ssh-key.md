---
title: Install SSH Key
description: Install an SSH key prior to a build or release
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5c9af2eb-5fc5-42dc-9b91-dc234a8c4400
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Install SSH Key

![](_img/installsshkey.png) Install an SSH key prior to a build or release

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/InstallSSHKeyV0.0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Known Hosts Entry</td><td>(Required) The entry for this SSH key for the known_hosts file.</td></tr>
<tr><td>SSH Public Key</td><td>(Required) The contents of the public SSH key.</td></tr>
<tr><td>SSH Passphrase</td><td>(Optional) The passphrase for the SSH key, if any.</td></tr>
<tr><td>SSH Key</td><td>(Required) Select the SSH key that was uploaded to `Secure Files` to install on the agent.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
