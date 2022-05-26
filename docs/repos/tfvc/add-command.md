---
title:  Add TFVC command 
titleSuffix: Azure Repos
description: Use the  Add command to add files to a TFVC repository.
ms.assetid: 0b61e4c6-a3da-48d6-bda0-7b14452049a4
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Add command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


The **add** command adds files and folders to a TFVC repository.

> [!TIP]
> Before you add files to version control, you should first set up the workspace on your dev machine. See [Workspace Command](workspace-command.md) or [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md).  

## Prerequisites

See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).


## Syntax

```
tf add itemspec [/lock:(none|checkin|checkout)] [/encoding:filetype] 
[/noprompt] [/recursive] [/noignore] [/login:username,[password]] 
```

## Parameters

|           **Parameter**            |                                                                                                                                                                                                                  **Description**                                                                                                                                                                                                                   |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **/encoding**: *filetype*      |                                                                                                                                                                                                               Ignore this parameter.                                                                                                                                                                                                               |
|             *itemspec*             |                                                                                                                                                                            Specifies the scope of the items to add. You can specify more than one *itemspec* argument.                                                                                                                                                                             |
|             **/lock**              |                                                                                                                                                          Applies or removes a lock. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                                                                                                                                           |
| **/login**:*username*,[*password*] |                                                                                                                                                Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                                                                                                                                 |
|           **/noignore**            | By default certain types of files (for example, .dll files) are ignored by version control. The rules in a **.tfignore** files apply to the **Add** command when you specify a wildcard in your *itemspec*. To override the application of the rules in this case, specify **/noignore**.<p> You can configure which kinds of files are ignored using a .tfignore file (see <a href="add-files-server.md#tfignore">Add Files: .tfignore file</a>). |
|           **/noprompt**            |                                                                                                                      Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                                                                                                      |
|           **/recursive**           |                                                                                                                                                                                     Recursively adds items in the specified directory and any subdirectories.                                                                                                                                                                                      |

## Examples

In all the following examples, assume that `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\` in the workspace.

### Add all new files in a local workspace

New files in a [local workspace](decide-between-using-local-server-workspace.md) are automatically detected. You can promote these newly detected files to your pending changes.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf add
```

Adds the latest versions of all items, except those items that are [ignored](add-files-server.md#tfignore), in a local workspace.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf add /noignore
```

Adds the latest versions of all items in a local workspace.

### Add individual items

```
c:\code\SiteApp\Main>tf add program1.cs program2.cs
```

Adds the files program1.cs and program2.cs.

### Recursively add all items of a specific type

```
c:\code\SiteApp\Main>tf add *.cs /recursive
```

Adds all C\# code files (.cs) in the current directory and any subdirectories.

## Work in Visual Studio

-    [Add files to the server](add-files-server.md)  Use Visual Studio to add files to the server.

## Tips

-   The results of the **add** command are queued as pending changes and don't take effect on the server until you check in. See [Checkin command](checkin-command.md).  
-   If you need to set aside changes or want to clean your workspace for another task, use the [Shelve command](shelve-command.md).

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Status command](status-command.md)