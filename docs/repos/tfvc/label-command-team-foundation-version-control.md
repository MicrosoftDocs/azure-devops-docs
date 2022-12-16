---
title: Label command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf label command to attach or remove labels from files or folders in Team Foundation Version Control (TFVC).
ms.assetid: 815fd18a-1511-4f72-8a4a-7b1b0d3b2144
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Label command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `tf label` command attaches a label to or removes a label from a version of a file or folder in the TFVC server.

## Prerequisites

To use the `label` command, you must have the **Label** permission set to **Allow**. To modify or delete labels created by other users, you must have the **Administer labels** permission set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf label labelname[@scope] [/owner:ownername] 
itemspec [/version:versionspec] [/comment:("comment"|@commentfile)] 
[/child:(replace|merge)] [/recursive] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]	
```

```
tf label /delete labelname[@scope] 
itemspec [/login:username,[password]] [/collection:TeamProjectCollectionUrl]
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
   `<labelname>`
   :::column-end:::
   :::column span="3":::
   Identifies the name of the label to attach, modify, or remove from the specified items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `@<scope>`
   :::column-end:::
   :::column span="3":::
   Specifies a TFVC server directory within which the `labelname` is unique. This parameter lets you independently create, manage, retrieve, and delete one label or set of labeled items when two labels of the same name are in different parts of the TFVC server.
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
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder from which to label, re-label, or modify. For more information about how TFVC parses the `itemspec` to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   Provides a value such as `c2` for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<comment>`
   :::column-end:::
   :::column span="3":::
   A user-provided comment about the label.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `@<commentfile>`
   :::column-end:::
   :::column span="3":::
   The user-provided path of a file on disk that contains the comment to use for the label.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the specified project collection that contains a version of a file or folder to which you want to attach a label or from which you want to delete a label, for example `http://myserver:8080/tfs/DefaultCollection`.
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
   Specifies the name of the user who owns the label.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   Optional. Specifies the version of the file or folder to which the label should be attached, modified, or from which the label should be removed. These are changeset values, for example, `C93`. By default, TFVC uses the base workspace version if no `versionspec` is provided.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/comment`
   :::column-end:::
   :::column span="3":::
   Adds or modifies a description or comment for the label.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/child`
   :::column-end:::
   :::column span="3":::
   Not documented.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Labels all items in the directory that match your `itemspec` and `versionspec`. Can't be used with the `/delete` option. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/delete`
   :::column-end:::
   :::column span="3":::
   Removes the label.
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
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
A label is a marker that you can attach to a set of otherwise unrelated files and folders in the TFVC server. Use the label to simplify file and folder retrieval to a workspace for either development or build purposes. A label is like a changeset or date/time to which and from which you can arbitrarily add and remove files and folders or change the versions of the items therein. A label is a version specification that can be passed to the following TFVC commands:

-   [Branch command](branch-command.md)
-   [Difference command](difference-command.md)
-   [Dir command](dir-command.md)
-   [Get command](get-command.md)
-   [History command](history-command.md)
-   [Merge command](merge-command.md)
-   [View command](view-command.md)

Common types of labels are milestone labels such as `M1`, `Beta2`, or `Release Candidate 0`.

Labels are version-specific. That is, you can only attach a label to one version of a file or folder. Each version of an item can support multiple labels.

A label isn't a versioned object. Therefore, the label history of files isn't tracked. Also, a label operation doesn't create a pending change in your workspace. When you issue the `label` command, the update is immediately reflected in the TFVC server.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Remove and delete labels

You can use the [Unlabel command](unlabel-command.md) to remove a label from a file or folder. Alternatively, you can delete a label from the system by using the `tf label /delete` command.

For information about an existing label that includes a list of the items to which the label has been attached, its comment, scope, and owner, see [Labels command](labels-command.md).

### Manage overloaded labels

Label names must be unique throughout a specified scope. When you add a label, you reserve the use of that label name at or under the specified or implied scope. The default value for the `@scope` parameter is the project, for example, *$/TeamProject1*.

If another team or user adds a common label such as `M3` to a set of version-controlled files in a different part of the TFVC server, you can apply the `M3` label to version-controlled files in your project as long as the root project folders are in different directories. For example, if files in the *$/math* directory are labeled `M3`, you can also apply the `M3` label to files in your *$/projects* directory.

To get, remove a label, or otherwise manage your `M3`-labeled items, you should specify the `@scope` parameter to tell TFVC which `M3` label you want to work with.

You can prevent other users from "overloading" a label such as `M3` in different parts of the TFVC server by either creating your label at the root *$/* of the Team Foundation version control server or by adjusting **Label** permissions for certain folders.

## Examples
The following example attaches the `goodbuild` label to the workspace version of the *docs* folder and the files and folders it contains.

```
c:\projects>tf label goodbuild docs /recursive
```

The following example attaches the `goodbuild` label to the *docs* folder but not to the files and folders the *docs* folder contains.

```
c:\projects>tf label goodbuild docs
```

The following example attaches the `goodbuild` label to version 3 of *314.cs* in the TFVC server.

```
c:\projects>tf label goodbuild /version:3 $/src/314.cs
```

The following example deletes the `badbuild` label from all items in the TFVC server.

```
c:\projects>tf label /delete badbuild
```

The following example uses the `@` scope option to apply a label to *314.cs*.

```
c:\projects>tf label goodbuild@$/TeamProject1 314.cs
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Labels command](labels-command.md)
- [Unlabel command](unlabel-command.md)
- [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md)

 