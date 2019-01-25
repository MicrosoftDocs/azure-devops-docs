---
title: Help Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Help Command (Team Foundation Version Control)
ms.assetid: 8cd73edc-8d60-42be-a840-616e6207a1d8
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Help Command (Team Foundation Version Control)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays help on the command line that contains information about syntax for a Team Foundation version control command.

    tf help commandname
## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><em>commandname</em></p></td>
<td><p>Specifies a Team Foundation command for which to display help about the syntax.</p></td>
</tr>
</tbody>
</table>
## Remarks
If you do not know which command you need, type **tf help** for a list of all commands.

If you specify the *commandname* parameter, the command line displays information about the arguments and options for that command. If the system cannot find a match for the *commandname*, it searches for aliases and short names. If it cannot find any matching command, alias, or short name, you will get an error.

The option **/?** is an alias for **help**. If you use the **/?** option together with a command, the system invokes the **help** command and it displays information about syntax.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays a list of the version control commands.

    c:\projects>tf help

The following example displays information about syntax for the **workspace** command.

    c:\projects>tf help workspace

The following example also displays the same information about syntax for the **workspace** command.

    c:\projects>tf workspace /?

## See Also

#### Reference

[Msdn Command](msdn-command.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
