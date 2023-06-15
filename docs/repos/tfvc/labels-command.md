---
title: Labels command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf labels command to list the labels in the server for Team Foundation Version Control (TFVC).
ms.assetid: 7772bc3d-7c43-47d8-ba5c-eee89aeed3ce
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Labels command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `tf labels` command displays the list of labels in the TFVC server.

## Prerequisites

To use the `labels` command, you must have the **Read** permission set to **Allow** for all files or folders to which the specified label is attached. If you have permission to some, but not all the files referenced in the label, partial results are displayed. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf labels [/owner:ownername] [/format:(brief|detailed)] 
[/collection:TeamProjectCollectionUrl] [labelname] [/login:username,[password]]
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
   `<ownername>`
   :::column-end:::
   :::column span="3":::
   Provides a value such as `DOMAIN\JuanGo` or just `juango` to the `/owner` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<labelname>`
   :::column-end:::
   :::column span="3":::
   Specifies a string that should be used to filter the list of labels. If this parameter is omitted, the label name field won't be filtered.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection for which you want to display the list of labels, for example `http://myserver:8080/tfs/DefaultCollection`.
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
   `/owner`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the user who owns the label. By default, the owner is the person who applies the label.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Displays information about the specified label in one of the following formats:
   
   - `Brief`: Includes label, owner, and date created. This is the default.
   - `Detailed`: Also includes comments, scope, and a list of files and folders associated with each label.
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

- The `labels` command displays information about labels in the TFVC server. If you don't specify a TFVC server, TFVC tries to determine the TFVC server by using the current directory. If the current directory isn't mapped to a TFVC server, you must specify one by using the `/s` option.

- By default, the results display the label name, owner and creation date for each label. If the format is changed to `detailed`, comments and the list of files and folders associated with each label are also displayed.

- For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays the list of labels created by user `jasonj`.

```
c:\projects> tf labels /owner:jasonj
```

The following example displays information about the `build1033` label and lists the files and folders to which the label has been applied in the TFVC server.

```
c:\projects> tf labels /format:detailed build1033
```

The following example displays all labels in the TFVC server that have a `labelname` that begins with `build` and are owned by the account executing the `labels` command.

```
c:\projects> tf labels build*
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Label command (Team Foundation Version Control)](label-command-team-foundation-version-control.md)
- [Unlabel command](unlabel-command.md)
