---
title: Understand SSH passphrases
titleSuffix: Azure Repos
description: Understand what an SSH passphrase is.
ms.assetid: 266f5d0e-78b9-4911-9bdf-ab509f17ff23
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 11/13/2020
monikerRange: '>= tfs-2015'
---


# SSH passphrases

[!INCLUDE [version-gt-eq-2015](../../includes/version-gt-eq-2015.md)]

SSH uses private/public key pairs to protect your communication with the server. 
SSH passphrases protect your private key from being used by someone who doesn't know the passphrase. 
Without a passphrase, anyone who gains access to your computer has the potential to copy your private key. For example, family members, coworkers, system administrators, and hostile actors could gain access. 

A secure passphrase helps keep your private key from being copied and used even if your computer is compromised.

The downside to passphrases is that you need to enter it every time you create a connection using SSH.
You can [temporarily cache your passphrase using ssh-agent](use-ssh-keys-to-authenticate.md#questions-and-troubleshooting) so you don't have to enter it every time you connect.

## Related articles

- [Use SSH key authentication](use-ssh-keys-to-authenticate.md)