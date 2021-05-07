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

<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><em>itemspec</em></p></td>
<td><p>Used to identify the file or folder for which to apply the reconcile command. If omitted, all suitable items will be included. For more information about how Visual Studio Team Foundation Server parses itemspecs to determine which items are within scope, see <a href="/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)">Command-Line Syntax (Version Control)</a>.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
You can specify more than one <em>Itemspec</em> argument.
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><p><strong>Option</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>/clean</strong></p></td>
<td><p>Updates local items on disk to match the server's structure. <p>Remove items that are not present in version control and add those that are missing on disk but present in version control.</p>
</td>
</tr>
<tr>
<td><p><strong>/promote</strong></p></td>
<td><p>Promote local file changes to version control.
<p>Add locally created items to version control (similar to <strong>tf add</strong>) and remove those </p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Should specify <strong>/adds</strong> or(and) <strong>/deletes</strong> when using with <strong>/noprompt</strong>.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/adds</strong></p></td>
<td><p>Promote locally added files and folders to version control.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Can be used with <strong>/promote</strong> only.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/deletes</strong></p></td>
<td><p>Promote deleted files and folders to version control.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Can be used with <strong>/promote</strong> only.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/exclude</strong></p></td>
<td><p>Items specified in the <strong>/exclude</strong> option will be ignored. The items are separated by comma.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
This option overrides <strong>/ignore</strong>, <strong>/noignore</strong> and <strong>/unmapped</strong> options in case of intersections.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/unmapped</strong></p></td>
<td><p>By default unmapped and cloaked items are not affected by the <strong>/clean</strong> command. Use this option to clean unmapped and cloaked items as well (see <a href="../../pipelines/repos/tfvc.md#mappings-workspace">Mapping Workspace</a>).</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Can be used with <strong>/clean</strong> only.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/diff</strong></p></td>
<td><p>Compares items with source control using MD5 hashes. Use this option to detect items which are different from the workspace
version but still have their read-only bit set (+R).</p>
</td>
</tr>
<tr>
<td><p><strong>/preview</strong></p></td>
<td><p>Displays what would occur, without actually performing the <strong>Reconcile</strong> operation.</p></td>
</tr>
<tr>
<td><p><strong>/ignore</strong></p></td>
<td><p>By default <strong>tf /clean</strong> command will update all items based on the current server state, including ignored by version control items. Use this option to avoid changing the ignored items.<p> You can configure which kinds of items are ignored using a ".tfignore" file (see <a href="add-files-server.md#tfignore">Add Files: .tfignore file</a>).</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Can be used with <strong>/clean</strong> only.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/noignore</strong></p></td>
<td><p>By default <strong>tf /promote</strong> command will promote all items except those that are ignored by version control. Use this option to promote the ignored items as well. This behavior is similar to using <strong>/noignore</strong> in the <strong>tf add</strong> command.<p> You can configure which kinds of items are ignored using a ".tfignore" file (see <a href="add-files-server.md#tfignore">Add Files: .tfignore file</a>).</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
Can be used with <strong>/promote</strong> only.
</div>
</div>
</div>
</td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Reconciles items in the specific directory and subdirectories.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
</tbody>
</table>

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