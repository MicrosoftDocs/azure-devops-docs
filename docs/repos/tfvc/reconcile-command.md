---
title: Reconcile command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control reconcile command to compare the current state of the workspace on disk with the server's view.
ms.assetid: ef4aa5f8-b62e-4dd2-9fb8-1e28b7e0123f
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Reconcile command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `tf reconcile` command compares the current state of the workspace on disk with the server's view, either to clean the workspace or to promote unpended local changes.

## Prerequisites

See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf reconcile [itemspec]
/clean [/diff] [/noprompt] [/preview] [/recursive] [/ignore]
[/unmapped] [/exclude:itemspec1,itemspec2,...] 

tf reconcile [itemspec]
/promote [/adds] [/deletes] [/diff] [/noprompt] [/preview]
[/recursive] [/noignore] [/exclude:itemspec1,itemspec2,...]
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
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder for which to apply the `reconcile` command. If omitted, all suitable items are included. For more information about how TFVC parses an `itemspec` to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
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
   `/clean`
   :::column-end:::
   :::column span="3":::
   Updates local items on disk to match the server's structure. Removes items that aren't present in version control, and adds items that are missing on disk but present in version control.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/promote`
   :::column-end:::
   :::column span="3":::
   Promotes local file changes to version control. Adds locally created items to version control, similar to `tf add`, and removes locally deleted items.

   > [!Note]  
   > Specify `/adds` and/or `/deletes` when using with `/noprompt`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/adds`
   :::column-end:::
   :::column span="3":::
   Promotes locally added files and folders to version control.

   > [!Note]  
   > Can use with `/promote` only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/deletes`
   :::column-end:::
   :::column span="3":::
   Promotes deleted files and folders to version control.

   > [!Note]  
   > Can use with `/promote` only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/exclude`
   :::column-end:::
   :::column span="3":::
   Ignores comma-separated items specified in this option.

   > [!Note]  
   > This option overrides `/ignore`, `/noignore`, and `/unmapped` options in case of intersections.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/unmapped`
   :::column-end:::
   :::column span="3":::
   Overrides the default, and cleans unmapped and cloaked items. By default, unmapped and cloaked items aren't affected by the `/clean` command. For more information, see [Mappings (workspace)](../../pipelines/repos/tfvc.md#mappings-workspace).

   > [!Note]  
   > Can use with `/clean` only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/diff`
   :::column-end:::
   :::column span="3":::
   Compares items with source control by using MD5 hashes. Use this option to detect items that are different from the workspace version but still have their read-only bit set (+R).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/preview`
   :::column-end:::
   :::column span="3":::
   Displays what would occur, without actually doing the `reconcile` operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/ignore`
   :::column-end:::
   :::column span="3":::
   Overrides the default and doesn't change ignored items. By default, `/clean` updates all items based on the current server state, including items ignored by version control. Use this option to avoid changing the ignored items.
   
   You can configure which items are ignored using a *.tfignore* file. For more information, see [Customize which files version control ignores](add-files-server.md#tfignore).

   > [!Note]  
   > Can use with `/clean` only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noignore`
   :::column-end:::
   :::column span="3":::
   Overrides the default, and promotes ignored items. By default, `/promote` promotes all items except items that are ignored by version control. Use this option to promote the ignored items as well. This option is similar to using `/noignore` in the `tf add` command.
   
   > [!Note]  
   > Can use with `/promote` only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Reconciles items in the specific directory and subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::

## Remarks
You can use the `reconcile` command to synchronize your local workspace state with the server's state.

- Use `/clean` to update the local workspace according to the server's state.
- Use `/promote` to promote locally added and deleted items to pending changes in version control.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

### Clean

The following example opens the Visual Studio **Clean Workspace** dialog box, so that you can specify local items that should be deleted or re-downloaded from the server.

```
tf reconcile /clean
```

The following example cleans all local items except items that are ignored by version control.

```
tf reconcile /clean /ignore
```

The following example cleans all local items, including unmapped and cloaked items.

```
tf reconcile /clean /unmapped
```

The following example cleans all items except *file1.txt* and *dir1* with all its contents, and doesn't display the **Clean Workspace** dialog box.

```
tf reconcile /clean /noprompt /recursive /exclude:file1.txt,dir1
```

### Promote

The following example opens the Visual Studio **Promote Candidate Changes** dialog box, so that you can specify what items should be promoted to pending changes.

```
tf reconcile /promote
```

The following example promotes all items, including items ignored by version control, except for the *myLib.dll* file.

```
tf reconcile /promote /noignore /exclude:myLib.dll
```

The following example adds all locally created items to version control pending changes, without opening the **Promote Candidate Changes** dialog box. This command is similar to the `tf add /noprompt` command.

```
tf reconcile /promote /adds /noprompt
```

The following example adds all locally deleted items to version control pending changes, without opening the **Promote Candidate Changes** dialog box.

```
tf reconcile /promote /deletes /noprompt
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Add command](add-command.md)
- [Get command](get-command.md)
- [Checkin command](checkin-command.md)
- [Difference command](difference-command.md)
- [Manage file types](/azure/devops/server/admin/manage-file-types)
- [Compare folders and files](./compare-files.md)