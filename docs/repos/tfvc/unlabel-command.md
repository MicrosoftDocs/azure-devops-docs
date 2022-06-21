---
title: Unlabel TFVC command
titleSuffix: Azure Repos
description: Learn how to use the unlabel command to remove an item from an existing label.
ms.assetid: 37b15bd4-ec75-4fbe-938e-544793c88a3c
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Unlabel command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


The **unlabel** command removes an item from an existing label in the server for Team Foundation version control.

## Prerequisites

To use the **unlabel** command, you must either own the label, or have the **Administer labels** permission set to **Allow**.  For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf unlabel [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username, [password]] labelname itemspec
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
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the item that you want to remove from an existing label (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *labelname*
   :::column-end:::
   :::column span="3":::
   Specifies the name of the label to remove from the specified items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder from which to remove the specified label. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   > [!Note]  
   > You can specify more than one *itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName*.
   :::column-end:::
:::row-end:::

### Option

| **Option** | **Description** |
|---|---|
| **/recursive** | Unlabels all items in the particular directory and all the subdirectories that match the *itemspec*. |
| **/collection** | Specifies the project collection. |
| **/login** | Specifies the user name and password to authenticate the user with Azure DevOps. |

## Remarks

The **unlabel** command of the **tf** command-line utility removes an item from an existing label in the Team Foundation version control server. For an introduction to labels, see [Use Labels to Take a Snapshot of Your Files](use-labels-take-snapshot-your-files.md). For information about how to assign a label to a set of files and folders, see [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

If you remove all items from a label in the Team Foundation version control server, that label is deleted. You can also delete a label using the command `tf label /delete`. To learn more about the existing labels in the system, see [Labels Command](labels-command.md).

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example removes the "goodbuild" label from 314.cs.

```
c:\projects>tf unlabel goodbuild $/src/314.cs
```

The following example removes the "Beta1" label from all files and folders in the collection at http://myserver:8080/tfs/DefaultCollection.

```
c:\projects>tf unlabel Beta1 $/ /collection:http://myserver:8080/tfs/DefaultCollection /recursive
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Label command](label-command-team-foundation-version-control.md)
- [Labels command](labels-command.md)
- [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md)
