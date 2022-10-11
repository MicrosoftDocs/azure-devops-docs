---
title:  Add TFVC command 
titleSuffix: Azure Repos
description: See how to use the Add command in Visual Studio to add files to a TFVC repository.
ms.assetid: 0b61e4c6-a3da-48d6-bda0-7b14452049a4
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Add command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control `add` command adds files and folders to a TFVC repository.

## Prerequisites

- [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

- The TFVC workspace set up on the dev machine. See [Workspace command](workspace-command.md) or [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md).

## Syntax

```
tf add itemspec [/lock:(none|checkin|checkout)] [/encoding:filetype] 
[/noprompt] [/recursive] [/noignore] [/login:username,[password]] 
```

## Parameters

|Parameter|Description|
|------------------------------------|----------------|
|     `/encoding: <filetype>`      |Ignore this parameter.|
|             `itemspec`             |Specifies the scope of the items to add. You can specify more than one `itemspec` argument. |
|             `/lock`              |   Applies or removes a lock. See [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md). |
|           `/noignore`            | By default, version control ignores certain types of files, such as *.dll* files. You can configure which kinds of files to ignore by using a *.tfignore* file. See [Customize which files version control ignores](add-files-server.md#tfignore). The rules in a *.tfignore* file apply to the `add` command when you specify a wildcard in your `itemspec`. To override these rules, specify `/noignore`.|
|           `/noprompt`            | Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md).|
|           `/recursive`           |Recursively adds items in the specified directory and any subdirectories.|

## Examples

The following examples assume that `c:\code\SiteApp\Main\` maps to `$/SiteApp/Main/` in the workspace.

### Add all new files in a local workspace

New files in a [local workspace](decide-between-using-local-server-workspace.md) are automatically detected. You can promote these newly detected files to your pending changes.

The following command adds the latest versions of all items in a local workspace, except those items that are [ignored](add-files-server.md#tfignore):

```
c:\code\SiteApp\Main\SolutionA\Project1>tf add
```


The following command adds the latest versions of all items in a local workspace, even items designated as ignored:
```
c:\code\SiteApp\Main\SolutionA\Project1>tf add /noignore
```

### Add individual items
The following command adds the files *program1.cs* and *program2.cs*:

```
c:\code\SiteApp\Main>tf add program1.cs program2.cs
```

### Recursively add all items of a specific type

The following command adds all C# code files (*.cs*) in the current directory and any subdirectories:

```
c:\code\SiteApp\Main>tf add *.cs /recursive
```

## Work in Visual Studio

- You can also use Visual Studio to [add files to the server](add-files-server.md).

## Tips

- The results of the `add` command are queued as pending changes and don't take effect on the server until you check them in. See [Checkin command](checkin-command.md).  
- To set aside changes or clean your workspace for another task, use the [Shelve command](shelve-command.md).

## Related articles

- [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md)
- [Status command](status-command.md)