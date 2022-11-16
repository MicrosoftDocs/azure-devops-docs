---
title: Msdn command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf msdn command to display a help topic from learn.microsoft.com documentation.
ms.assetid: 6a1c9dfe-dacb-466b-a68e-efe3cd6df3e8
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Msdn command  (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The `tf msdn` command displays documentation from learn.microsoft.com that contains detailed information about a Team Foundation Version Control (TFVC) command.


## Prerequisites

See  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf msdn commandname
```

## Parameters

### Argument

| **Argument** | **Description** |
|---|---|
| `<commandname>` | Specifies a `tf` command for which to display documentation. |

## Remarks

When you need a command and aren't sure which one to use, enter `tf msdn` to see command reference articles and links to more resources. If you use the `msdn` command without specifying a `commandname` parameter, the article [Use Team Foundation version control commands](/previous-versions/visualstudio/visual-studio-2013/cc31bk2e(v=vs.120)) opens.

When you specify the `commandname` parameter, the documentation for that specific command opens. If the system can't find a match for the `commandname`, it searches for aliases and short names. If it doesn't find a matching command, alias, or short name, you get an error message.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples
The following example displays an article that lists all the version control commands, including a brief explanation of syntax.

```
c:\projects>tf msdn
```

The following example displays an article about the `workspace` command.

```
c:\projects>tf msdn workspace
```

## Related articles

- [Help command (Team Foundation Version Control)](help-command-team-foundation-version-control.md)
