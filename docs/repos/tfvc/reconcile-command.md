---
title: Reconcile Command
titleSuffix: Azure Repos
description: Reconcile Command
ms.assetid: ef4aa5f8-b62e-4dd2-9fb8-1e28b7e0123f
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/25/2020
monikerRange: '>= tfs-2015'
---


# Reconcile Command

#### Azure Repos | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Compares the current state of the workspace on disk with the server's view, either to clean the workspace or to promote unpended local changes.

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf reconcile [itemspec]
/clean [/diff] [/noprompt] [/preview] [/recursive] [/ignore]
[/unmapped] [/exclude:itemspec1,itemspec2,...] 

tf reconcile [itemspec]
/promote [/adds] [/deletes] [/diff] [/noprompt] [/preview]
[/recursive] [/noignore] [/exclude:itemspec1,itemspec2,...]
```

## Parameters

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
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Used to identify the file or folder for which to apply the reconcile command. If omitted, all suitable items will be included. For more information about how Visual Studio Team Foundation Server parses itemspecs to determine which items are within scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::


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
   **/clean**
   :::column-end:::
   :::column span="3":::
   Updates local items on disk to match the server's structure.
   
   Remove items that are not present in version control and add those that are missing on disk but present in version control.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/promote**
   :::column-end:::
   :::column span="3":::
   Promote local file changes to version control.

   Add locally created items to version control (similar to **tf add**) and remove those 

   > [!Note]  
   > Should specify **/adds** or(and) **/deletes** when using with **/noprompt**.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/adds**
   :::column-end:::
   :::column span="3":::
   Promote locally added files and folders to version control.

   > [!Note]  
   > Can be used with **/promote** only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/deletes**
   :::column-end:::
   :::column span="3":::
   Promote deleted files and folders to version control.

   > [!Note]  
   > Can be used with **/promote** only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/exclude**
   :::column-end:::
   :::column span="3":::
   Items specified in the **/exclude** option will be ignored. The items are separated by comma.

   > [!Note]  
   > This option overrides **/ignore**, **/noignore** and **/unmapped** options in case of intersections.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/unmapped**
   :::column-end:::
   :::column span="3":::
   By default unmapped and cloaked items are not affected by the **/clean** command. Use this option to clean unmapped and cloaked items as well (see [Mapping Workspace](../../pipelines/repos/tfvc.md#mappings-workspace)).

   > [!Note]  
   > Can be used with **/clean** only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/diff**
   :::column-end:::
   :::column span="3":::
   Compares items with source control using MD5 hashes. Use this option to detect items which are different from the workspace version but still have their read-only bit set (+R).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/preview**
   :::column-end:::
   :::column span="3":::
   Displays what would occur, without actually performing the **Reconcile** operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/ignore**
   :::column-end:::
   :::column span="3":::
   By default **tf /clean** command will update all items based on the current server state, including ignored by version control items. Use this option to avoid changing the ignored items.
   
   You can configure which kinds of items are ignored using a ".tfignore" file (see [Add Files: .tfignore file](add-files-server.md#tfignore)).

   > [!Note]  
   > Can be used with **/clean** only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noignore**
   :::column-end:::
   :::column span="3":::
   By default **tf /promote** command will promote all items except those that are ignored by version control. Use this option to promote the ignored items as well. This behavior is similar to using **/noignore** in the **tf add** command.
   
   You can configure which kinds of items are ignored using a ".tfignore" file (see [Add Files: .tfignore file](add-files-server.md#tfignore)).

   > [!Note]  
   > Can be used with **/promote** only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Reconciles items in the specific directory and subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="3":::
   Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::

## Remarks
You can use the **reconcile** command to synchronize your local workspace state with the server's one.

Use **/clean** to update the local workspace according to the server's state.
Use **/promote** to promote locally added and deleted items to pending changes in version control.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

## Examples

### Clean

The following example invokes the **Clean Workspace** dialog box so that you can specify local items that should be deleted or redownloaded from the server.

```
tf reconcile /clean
```

The following example cleans all local items except ignored by version control.

```
tf reconcile /clean /ignore
```

The following example cleans all local items including unmapped and cloaked.

```
tf reconcile /clean /unmapped
```

The following example cleans all items except "file1.txt" and "dir1" (with all its content).

```
tf reconcile /clean /noprompt /recursive /exclude:file1.txt,dir1
```

### Promote

The following example invokes the **Promote Candidate Changes** dialog box so that you can specify what items should be promoted to pending changes.

```
tf reconcile /promote
```

The following example promotes all items including ignored by version control items, except the "myLib.dll" file.

```
tf reconcile /promote /noignore /exclude:myLib.dll
```

The following example adds all locally created items to version control pending changes. This command works similar to the **tf add /noprompt** command.

```
tf reconcile /promote /adds /noprompt
```

The following example adds all locally deleted items to version control pending changes.

```
tf reconcile /promote /deletes /noprompt
```

## See Also

#### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))

[Add Command](add-command.md)

[Get Command](get-command.md)

[Checkin Command](checkin-command.md)

[Difference Command](difference-command.md)

#### Concepts

[Managing File Types](/azure/devops/server/admin/manage-file-types)

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))

[Comparing Folders and Files](./compare-files.md)