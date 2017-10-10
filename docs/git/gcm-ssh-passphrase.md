---
title: Understand SSH passphrases
description: Understand what a SSH passphrase is and why the Git Credential Manager for Windows needs it.
ms.assetid: 266f5d0e-78b9-4911-9bdf-ab509f17ff23
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 08/11/2016
---

# SSH passphrases

SSH uses private / public key pairs to protect your communication with the server. 
SSH passphrases protect your private key from being used by someone who does not know the passphrase. 
Without a passphrase, anyone who gains access to your computer has the potential to copy your private key. This includes family members, cowokers, system administrators, as well as hostile actors. 
A secure passphrase helps keep your private key from being copied and used even if your computer is compromised.

The downside to passphrases is that you need to enter it every time you create a connection using SSH.
You can [temporarily cache your passphrase using ssh-agent](use-ssh-keys-to-authenticate.md#questions-and-troubleshooting) so you don't have to enter it every time you connect.

