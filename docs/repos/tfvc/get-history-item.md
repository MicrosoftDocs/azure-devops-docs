---
title: Get the history of an item
titleSuffix: Azure Repos
description: Get the history of an item
ms.assetid: 5a29031c-7fb6-42ac-885c-276b59a4b951
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Get the history of an item

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

One advantage of a version control system is that you can look back in time to get detailed information about what changes have been made to your files. Team Foundation version control maintains historical data related to every version of every file that has ever been checked in.

Often when you look over the history of a file, folder, or branch, you are trying to solve a problem or answer a question. By using the Team Foundation version control **History** window, you can more easily resolve questions and situations such as the following:

-   What changes have been made in the past weeks or months?

-   What work item was completed by this change to the file?

-   Who checked in this change? What did they say about the change? What did they change?

-   Unexpected changes occurred in this file, causing a bug in an area of the product that we thought was stable. Who made this change, and why did they make it?

-   A change in this branch fixes a bug that also needed to be fixed in other branches. How can I make sure that the change was merged to those branches?

Use the **History** window to get detailed historical data about a project, branch, folder, or file.

**Required permissions**

You must be one of the **Contributors** for your project. See [Team Foundation Server default groups, permissions, and roles](https://msdn.microsoft.com/library/ms253077).

To display the History window:

-   In [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), select an item, open its shortcut menu, and then choose **View History**.

	> [!TIP]
	> You can customize the position of the window by right-clicking the title and then choosing one of these options: **Float**, **Dock**, or **Dock as Tabbed Document**.

-   Use the [History Command](history-command.md).

The **History** window displays the historical data about the item in two tabs:

-   The [Changesets tab](get-history-item.md#changesets_tab) lists every change (including edits, renames, and merges) made to the item.

-   The [Labels tab](get-history-item.md#labels_tab) lists every label that has been applied to the item.

<a name="changesets_tab"><a/>

## Changesets Tab

The **Changesets** tab displays detailed data about every change that has been made to an item. All changesets that have modified the item are listed in a table that includes the following columns:

-   **Changeset**   The ID of the changeset.

-   **User**   The name of the user who checked in the changeset.

-   **Date**   The date and time the changeset was checked in.

-   **Comment**   The comment entered by the user who checked in the changeset.

> [!NOTE]
> If you open this window by using the **History** command and you are displaying data about a project, branch, or folder, then the history of children items (for example, the files contained by a folder) is shown only if you use the **/recursive** option.

If the item is a file, then additional data is displayed in the following columns:

-   **Change**   The types of changes that were made to the file with the changeset. Examples of values that can appear in this column include **add**, **edit**, **rename**, and **merge**.

-   **Path**  The path to the file.

> [!TIP]
> Sometimes you need to share this kind of data with someone else. You can select one or more rows from the table in the **Labels** tab, right-click them, click **Copy** to copy the data to the clipboard, and then paste the data into an e-mail message, document, or spreadsheet.

### Common Tasks

By using the **Changesets** tab, you can perform the following tasks:

<table><thead>
<tr><th><p>Task</p></th><th><p>Supporting content</p></th></tr></thead><tbody>
<tr>
	<td><p><strong>View the item as it existed when the changeset was checked in:</strong> Double click the changeset or right-click it, and then click <strong>View</strong>. (This command is available only if the item is a file.)</p><p></p></td>
	<td><p>None</p></td></tr>
<tr>
	<td><p><strong>Get more details about a changeset:</strong> Right-click a changeset and then click <strong>Changeset Details</strong> to get information such as:</p><ul><li><p>Other source files that are part of the changeset.</p></li><li><p>Work items associated with the changeset.</p></li><li><p>Any check-in notes left for reviewers.</p></li></ul></td>
	<td><p> <a href="find-view-changesets.md">Find and view changesets</a> </p></td></tr>
<tr>
	<td><p><strong>Compare a past version with the current version:</strong> Right-click a changeset and then click <strong>Compare</strong>.</p><p><strong>Compare a past version with another past version:</strong></p><ol><li><p>Select a changeset.</p></li><li><p>Press and hold the CONTROL key and then select the second changeset.</p></li><li><p>Right-click the second changeset and click <strong>Compare</strong>.</p></li></ol></td>
	<td><p> <a href="compare-files.md">Compare files</a> </p><p> <a href="compare-folders.md">Compare folders</a> </p></td></tr>
<tr>
	<td><p><strong>Get a past version of the item: </strong>Right-click a changeset and then click <strong>Get This Version</strong> to download the past version of the item to your workspace.</p></td>
	<td><p> <a href="download-get-files-from-server.md">Download (get) files from the Server</a> </p></td></tr>
<tr>
	<td><p><strong>View which users made specific changes within a file:</strong> Right-click a changeset and then click <strong>Annotate</strong>. (This command is available only if the item is a file.)</p></td>
	<td><p> <a href="view-file-changes-using-annotate.md">View file changes using annotate</a> </p></td></tr>
<tr>
	<td><p><strong>Get more details about a merge:</strong> If the changeset resulted from a <strong>merge</strong> change, you can expand this item. Expand the node to display the changesets that were merged into this item from another branch. (This command is available only if the item is a file.)</p></td>
	<td><p>None</p></td></tr>
<tr>
	<td><p><strong>Get more details about changes that were made before a rename change:</strong> If the changeset includes a <strong>rename</strong> change, you can expand this item. Expand the node to display the changesets that occurred before the <strong>rename</strong> change was made.</p></td>
	<td><p>None</p></td></tr>
<tr>
	<td><p><strong>View other branches to which this changeset has been merged: </strong>Right-click the changeset and click <strong>Track Changeset</strong>.</p></td>
	<td><p> <a href="view-where-when-changesets-have-been-merged.md">View where and when changesets have been merged</a> </p></td></tr>
<tr>
	<td><p><strong>Roll back changes from one changeset</strong> Select a single changeset and choose <strong>Rollback Entire Changeset</strong>.</p></td>
	<td><p> <a href="roll-back-changesets.md">Roll back changesets</a> </p></td></tr>
<tr>
	<td><p><strong>Roll back changes from two or more consecutive changesets</strong> Select a set of consecutive changesets and choose <strong>Rollback</strong>.</p></td>
	<td><p> <a href="roll-back-changesets.md">Roll back changesets</a> </p></td></tr>
<tr>
	<td><p><strong>Display non-recursive history of a folder</strong> You can get this data only from the command prompt.</p></td>
	<td><p><a href="history-command.md">History Command</a></p></td></tr></tbody>
</table>

<a name="labels_tab"><a/>

## Labels tab

All labels that have been applied to the item are listed in a table that includes the following columns:

-   **Name**   The name of the label.

-   **User**   The user who applied the label.

-   **Date**   The date and time the label was applied.

-   **Changeset** The changeset to which the label applies.

-   **Comment**   The comment made by the user who applied the label.

> [!NOTE]
> When you display historical data about a project, branch, or folder, the data about labels applied to children items (for example, the files contained by a folder) is not shown.

&nbsp;

> [!TIP]
> Sometimes you need to share this kind of data with someone else. You can select one or more rows from the table in the **Labels** tab, right-click them, click **Copy** to copy the data to the clipboard, and then paste the data into an e-mail message, document, or spreadsheet.

## Common Tasks

|Task|Supporting content|
|---|---|
|**View the item as it existed when the labeled changeset was checked in:** Right-click a label and then click **View**. (This command is available only if the item is a file.)|None|
|**Edit the label:** Right-click the label and click **Edit Label**.| [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md) |
|**Delete the label: **Right-click the label and click **Delete Label**.| [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md) |
|**Compare a past version of the item with the current version:** Right-click a label and then click **Compare** to compare a past version of the item with the current version.| [Compare files](compare-files.md) [Compare folders](compare-folders.md) |
|**Get a past version of the item: **Right-click a label and then click **Get This Version** to download the past version of the item to your workspace.| [Download (get) files from the Server](download-get-files-from-server.md) |
|**View other branches to which the labeled changeset has merged: **Right-click the label and click **Track Changeset**. (This command is available only if the item is a file.)| [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md) |
|**View which users made specific changes within the labeled version of a file:** Right-click a changeset and then click **Annotate**. (This command is available only if the item is a file.)| [View file changes using annotate](view-file-changes-using-annotate.md) |

## See Also

#### Other Resources

 [Find and view changesets](find-view-changesets.md) 

 [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md) 

 [Use branches to isolate risk in Team Foundation Version Control](use-branches-isolate-risk-team-foundation-version-control.md) 
