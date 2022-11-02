---
title: Use the Msdn Command to display a help topic 
titleSuffix: Azure Repos
description: Display a help topic from the MSDN library using the Msdn Command
ms.assetid: 6a1c9dfe-dacb-466b-a68e-efe3cd6df3e8
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Msdn command  (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


The **msdn** command displays a help topic from the MSDN library that contains detailed information about a Team Foundation version control command.


## Prerequisites

To use the **merges** command, you must have the **Read** permission set to **Allow** for both source and destination branches. 
For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf msdn commandname
```

## Parameters

### Argument

| **Argument** | **Description** |
|---|---|
| *commandname* | Specifies a Team Foundation command for which to display a help topic. |

## Remarks

When you need a command and are not sure which one to use, type **tf msdn** for a list of command reference topics and links to additional resources. If you use the **msdn** command without specifying a *commandname* parameter, you will see a topic that lists all commands together with usage requirements and a description.

When you specify the *commandname* parameter, the help topic opens for that specific command. If the system cannot find a match for the *commandname*, it searches for aliases and short names. If it does not find a matching command, alias, or short name, you will get an error message.

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
## Examples
The following example displays a help topic that lists all the version control commands, including a brief explanation of syntax.

```
c:\projects>tf msdn
```

The following example displays a help topic about the **workspace** command.

```
c:\projects>tf msdn workspace
```

## Related articles

- [Help Command (Team Foundation Version Control)](help-command-team-foundation-version-control.md)
