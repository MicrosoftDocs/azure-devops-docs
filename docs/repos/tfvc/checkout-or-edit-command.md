---
title: Checkout or Edit command
titleSuffix: Azure Repos
description: Checkout or Edit command
ms.assetid: 377fec8a-bdc5-4e3c-ac8c-79ee85eef4ce
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/17/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Checkout (or Edit) command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The TFVC `checkout` or `edit` command checks out a file and changes its pending change status to **edit**. You can call this command by using either `checkout` or `edit`.

You can also use Visual Studio to [Check out and edit files](check-out-edit-files.md).

## Tips

- If you're beginning a new task, it's a good idea to download the latest files from the server before you check out files and begin your work. See [Get command](get-command.md).

- When you begin editing a file in a [local workspace](decide-between-using-local-server-workspace.md), it's automatically checked out to you.

- You can view a list of your pending changes at the command prompt by using the [Status command](status-command.md).

- You can work with related data such as comments and associated work items in the **Check In** dialog box by using the [Checkin command](checkin-command.md).

- When you're ready to check in your changes to the team's codebase on the server, use the [Checkin command](checkin-command.md).

- If you need to set aside changes or want to clean your workspace for another task, use the [Shelve Command](shelve-command.md).

- If you use a [server workspace](decide-between-using-local-server-workspace.md), files that you haven't checked out are read-only.

## Prerequisites

- [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf checkout [/lock:(none|checkin|checkout)] [/recursive] [/encoding:encoding] itemspec [/login: username,[password]]
```

## Parameters

|**Parameter**|**Description**|
|---|---|
|`/encoding`|Ignore this parameter.|
|`<itemspec>`|Specifies the scope of the items to check out. For syntax, see [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md).|
|`/lock`|Applies or removes a lock. See [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md#use-an-item-specification-argument-to-specify-affected-items).|
|`/login:<username>[,<password>]`|Specifies the user account to run the command. See [Use Team Foundation Version Control commands](use-team-foundation-version-control-commands.md).|
|`/recursive`|Recursively checks out items in the specified directory and any subdirectories.|

## Examples

The following examples assume that `c:\code\SiteApp\Main` is the main folder mapped to the project collection in the user's workspace.

### Check out a single item

The following example checks out *program.cs*:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program.cs
```

### Check out two items

The following example checks out *program.cs* and *program2.cs*:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program1.cs program2.cs
```

