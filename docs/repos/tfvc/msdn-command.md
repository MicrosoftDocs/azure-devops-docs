---
title: Use the Msdn Command to display a help topic from the MSDN library 
titleSuffix: Azure Repos
description: Display a help topic from the MSDN library using the Msdn Command
ms.assetid: 6a1c9dfe-dacb-466b-a68e-efe3cd6df3e8
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Msdn Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays a help topic from the MSDN library that contains detailed information about a Team Foundation version control command.

    tf msdn commandname
## Parameters
| **Argument** | **Description** |
|---|---|
| *commandname* | Specifies a Team Foundation command for which to display a help topic. |

## Remarks

When you need a command and are not sure which one to use, type **tf msdn** for a list of command reference topics and links to additional resources. If you use the **msdn** command without specifying a *commandname* parameter, you will see a topic that lists all commands together with usage requirements and a description.

When you specify the *commandname* parameter, the help topic opens for that specific command. If the system cannot find a match for the *commandname*, it searches for aliases and short names. If it does not find a matching command, alias, or short name, you will get an error message.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays a help topic that lists all the version control commands, including a brief explanation of syntax.

    c:\projects>tf msdn

The following example displays a help topic about the **workspace** command.

    c:\projects>tf msdn workspace

## See Also

#### Reference

[Help Command (Team Foundation Version Control)](help-command-team-foundation-version-control.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
