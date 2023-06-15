---
title: Unlabel TFVC command
titleSuffix: Azure Repos
description: Use the unlabel command of the Team Foundation Version Control tf command-line utility to remove an item from an existing label.
ms.assetid: 37b15bd4-ec75-4fbe-938e-544793c88a3c
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Unlabel command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `unlabel` command removes an item from an existing label in the version control server.

## Prerequisites

To use the `unlabel` command, you must either own the label, or have the **Administer labels** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf unlabel [/collection:<team-project-collection-url>] [/recursive] [/login:<username>, [<password>]] <label-name> <item-specification>
```

## Parameters

The following sections describe arguments and options of the `unlabel` command.

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
   `<team-project-collection-url>`
   :::column-end:::
   :::column span="3":::
   Specifies the URL of the project collection that contains the item that you want to remove from an existing label, for example, `https://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<label-name>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the label to remove from the specified items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<item-specification>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to remove the specified label from. For more information about how TFVC parses item specifications to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   > [!Note]  
   > You can specify more than one item specification argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<password>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option.
   :::column-end:::
:::row-end:::

### Options

| Option | Description |
|---|---|
| `/recursive` | Removes the specified label from all items in the particular directory and all subdirectories that match the item specification. |
| `/collection` | Specifies the project collection. |
| `/login` | Specifies the username and password to authenticate the user with Azure DevOps. |

## Remarks

The `unlabel` command of the `tf` command-line utility removes an item from an existing label in the Azure DevOps server. For an introduction to labels, see [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md). For information about how to assign a label to a set of files and folders, see [Label command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

If you remove all items from a label in the Azure DevOps server, that label is deleted. You can also delete a label by using the `tf label /delete` command. To learn more about the existing labels in the system, see [Labels command](labels-command.md).

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example removes the **goodbuild** label from *314.cs*:

```
c:\projects>tf unlabel goodbuild $/src/314.cs
```

The following example removes the **Beta1** label from all files and folders in the collection at `https://myserver:8080/tfs/DefaultCollection`:

```
c:\projects>tf unlabel Beta1 $/ /collection:https://myserver:8080/tfs/DefaultCollection /recursive
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Label command](label-command-team-foundation-version-control.md)
- [Labels command](labels-command.md)
- [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md)
