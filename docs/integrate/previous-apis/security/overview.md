---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Security with VSTS | REST API Reference for Team Foundation Server
description: Security overview for integrating with VSTS
ms.assetid: ae811730-f033-4d5a-b3a6-6cbb0743cada
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Security

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Data stored in security namespaces are used to determine whether an user has permissions to perform a specific action on a specific resource.

Typically, each family of resources (work items, Git repositories, etc.) is secured using a different namespace.
Each security namespace contains zero or more access control lists.
Each access control list contains a token, an inherit flag and a set of zero or more access control entries. 
Each access control entry contains an identity descriptor, an allowed permissions bitmask and an denied permissions bitmask.

 * [Security Namespaces](./securitynamespaces.md) 
 * [Access Control Lists (ACLs)](./acls.md)
 * [Access Control Entries (ACEs)](./aces.md) 
 * [Permissions](./permissions.md)
 * [Tokens](./tokens.md)

## Common tasks

### Get security namespaces

Get a list of [security namespaces](./securitynamespaces.md#getnamespaces).

### Change the inherit flag for a token

Set the [inherit flag](./securitynamespaces.md#inheritflag) for an access control list.

### Get, add, and remove access control lists

1. [Get](./acls.md#get) a list of access control lists in a security namespace.
2. [Add](./acls.md#add) a list of access control lists to a security namespace.
2. [Remove](./acls.md#remove) a list of access control lists from a security namespace.

### Add and remove access control entries

1. [Add](./aces.md#add) a list of access control entries to an access control list.
2. [Remove](./aces.md#remove) a list of access control entries from an access control list.

### Evaluate effective permissions

Determine if an identity has the [requested permissions](./permissions.md#evaluate) on a token or a list of tokens.

### Selectively remove permissions

[Remove permissions](./permissions.md#remove) from an access control entry.
