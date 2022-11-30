---
title: Merges command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf merges command to display detailed information about past merges between specified source and destination branches.
ms.assetid: dfa1c139-028d-4329-aa03-0f9845337f82
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Merges command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf merges` command displays detailed information about past merges between the specified source and destination branches in Team Foundation Version Control (TFVC).

## Prerequisites

To use the `merges` command, you must have the **Read** permission set to **Allow** for both source and destination branches. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf merges [source] destination [/recursive] [/extended] [/format:(brief|detailed)] [/login:username, [password]] [/showall]]] [/collection:TeamProjectCollectionUrl]
```

## Parameters

### Arguments

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
   `<source>`
   :::column-end:::
   :::column span="3":::
   Filters the merge history to include only entries with the specified sources.

   This parameter is optional.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<destination>`
   :::column-end:::
   :::column span="3":::
   Specifies the destination branch for which merge history is displayed.

   This parameter is required.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a `username` value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the branches about which you want to display the merge history, for example `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::

### Options

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
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Displays information for all merges in the specified TFVC server folder and its subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/extended`
   :::column-end:::
   :::column span="3":::
   Displays a list of merges for a specific range of target items, for example `tf merges tgt\file1.txt; C21-25`. This option displays the types of merges, for example add or edit, and detailed information about the source and target items. This option implies `/format: Detailed`.

   > [!Note]  
   > You can't use this option if you specify a source item. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Specifies the formats in which merge history can appear:

   - `Brief` (default): Shows the changeset numbers for both the source and target items and the author and the date of the target checkin.
   - `Detailed`: Shows the detailed paths and changeset numbers for both the source and target items.
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
:::row:::
   :::column span="1":::
   `/showall`
   :::column-end:::
   :::column span="3":::
   Displays all past merges for a given target item under its current name and all previously used names.
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

## Remarks

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays information about all merge operations done between the *Beta1_branch* and the *RTM_branch*.

```
c:\projects>tf merges /recursive Beta1_branch RTM_branch
```

Sample output:

```
Changeset  Merged in Changeset   Author   Date
--------------------------------------------------------
135         162                   Justin     10/31/2003
146         162                   Justin      10/31/2003
147*        167                   Bill       11/02/2003
```

The asterisk `*` next to changeset 147 indicates that only some of the changes in that changeset #147 were merged into changeset #167.

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)  
- [Merge command](merge-command.md)  
- [Branch command](branch-command.md)  
- [Branching and merging](./branching-strategies-with-tfvc.md)