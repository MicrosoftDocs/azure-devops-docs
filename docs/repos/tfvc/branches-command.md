---
title: Branches command
titleSuffix: Azure Repos
description: See how to use the Branches command in TFVC.
ms.assetid: dae78c90-c65a-444d-96cb-84027b91ad4a
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Branches command


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Displays the history of a branch for a specified file or folder.

## Prerequisites

To use the `branches` command, your **Read** permission must be set to **Allow** for the item and any branches to view their history.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf branches itemspec [/version:versionspec] [/collection:TeamProjectCollectionUrl] [/login:username,[password]]
```

## Parameters

### Argument

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<Itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder that contains the branch you want to examine. For more information about how TFVC parses `<itemspec>`s to determine which items are within scope, see [Use Team Foundation version control commands, Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   Provides a value for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains a file or folder in a branch for which you want to display the history, for example, `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a username value as either `Domain\username` or `username`.
   :::column-end:::
:::row-end:::

### Option

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   Specifies the version for the path. This option is rarely used.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks
The `branches` command tells you when an item has been the source or destination of a branch operation. The output displays the parent branch for each version.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following examples assume that `c:\projects` maps to the main folder in the workspace.

The following example displays branch history for the version-controlled file *C:\\314.cs*.

```
c:\projects>tf branches 314.cs
```

The following example displays branch history for the *header.h* item in the Team Foundation version control server.

```
c:\projects>tf branches $/applications/header.h
```

The following example displays the branch history of the folder *$/rel30/math*.

```
c:\projects>tf branches $/rel30/math/
```

The following example displays the branch history for *WindowsApplication13-branch*. The results indicate the history for the specified branch by using angle brackets.

```
D:\projects\ws1>tf branches WindowsApplication13-branch
$/jun16-1/WindowsApplication13
>>      $/jun16-1/WindowsApplication13-branch   Branched from version 3 <<
                $/jun16-1/WindowsApplication13-branch-prime     Branched from version 5
        $/jun16-1/WindowsApplication13-branch2  Branched from version 3
```

## Related articles

- [Branch Command](branch-command.md)
- [Merges Command](merges-command.md)
- [Branching and Merging](./branching-strategies-with-tfvc.md)