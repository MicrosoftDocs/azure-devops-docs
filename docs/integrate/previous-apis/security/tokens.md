---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Security Tokens | REST API Reference for Team Foundation Server
description: Secure Git repositories and branches programmatically using the REST APIs for Team Foundation Server.
ms.assetid: e9da48fa-fefb-4b17-bdb2-fff937b3cdab
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Tokens 

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

Tokens are arbitrary strings representing resources in Team Services and Team Foundation Server. Resources are secured by 
associating [access control lists](./acls.md) (ACLs) with tokens. This article contains the format and examples for tokens representing different resource types.

The token format differs per resource type, however **hierarchy** and **separator characters** are common between all tokens.

<a name="hierarchy" />

**Hierarchy**
* A security namespace can be either hierarchical or flat.
* Tokens in a hierarchical namespace exist in a hierarchy with effective permissions being inherited from parent tokens to child tokens.
* Tokens in a flat namespace have no concept of a parent-child relationship between any two tokens.

<a name="separators" />

**Separator character**
* Tokens in a hierarchical namespace either have a fixed length for each path part, or variable length.
* If the tokens have variable-length path parts, then a separator character is used to distinguish where one path part ends and another begins.

In addition to **hierarchy** and **separator characters** the contents of tokens vary depending on the needs of the resource.

## Git repositories and branches

### Token attributes

| Attribute      | Value     |
|:--------------|:----------|
| Hierarchical  | true      |
| Separator     | /         |
| Token root    | repoV2    |

### Token format and example
```
Format: repoV2/[{projectId}/[{repoId}/[{refNamespace}/[{encodedRef}/]]]]
Example: repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/heads/6d0061007300740065007200/
```

### Token parameters

| Parameter         | Required | Type     | Notes
|:------------------|:---------|:---------|:--------------------------------
| `projectId`         | false    | GUID     | required if passing a repoId
| `repoId`           | false    | GUID     | required if passing a ref
| `refNamespace`      | false    | string   | required if passing a ref, see below for valid values
| `encodedRef`        | false    | string   | see below for encoding algorithm

Valid tokens always end in the separator character: '/'.

#### Ref namespaces

There are three valid ref namespaces:
* `refs/heads` - Git branches
* `refs/tags` - lightweight tags
* `refs/notes` - notes

Ref namespaces must be all lowercase.

#### Ref name encoding

Security tokens are case-insensitive, but Git refs are case-sensitive.
Ref names are encoded to allow "master", "Master", and "MASTER" to be protected by different tokens.

To encode a ref name, each non-slash is converted to a string of the character's hexadecimal value.
Slashes are preserved as-is.
Input characters are C# strings, which means they are UTF-16 little-endian.
For instance, in UTF-16 the character "m" is represented by the bytes `0x6d00`.
Thus, when encoding the branch "master", the first four characters are "6d00".

Check out the [Git repo token blog post](https://blogs.msdn.microsoft.com/visualstudioalm/2017/03/14/git-repo-tokens-for-the-security-service/) for more information on ref name encoding, including Python and C# code samples.

### Token examples

For each of these examples, assume a `projectId` of 212d1460-2143-4296-9771-c54336dbf3d3 and a `repoId` of 393d8e86-ed2b-473f-8480-0cf728c1f866.

| Securable resource       | Token
|:-------------------------|:--------------------------------
| All repos in the entire account/collection | repoV2/
| All repos in the project | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/
| All refs in the repo     | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/
| All branches in the repo | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/heads/
| All tags in the repo | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/tags/
| The master branch        | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/heads/6d0061007300740065007200/
| Any branch under "user/" | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/heads/7500730065007200/
| Any branch under "user/totten/" | repoV2/212d1460-2143-4296-9771-c54336dbf3d3/393d8e86-ed2b-473f-8480-0cf728c1f866/refs/heads/7500730065007200/74006f007400740065006e00/




