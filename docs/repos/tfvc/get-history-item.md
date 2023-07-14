---
title: Get the history of a TFVC item
titleSuffix: Azure Repos
description: See how to use the History window in Visual Studio to get the history of a Team Foundation Version Control (TFVC) item.
ms.assetid: 5a29031c-7fb6-42ac-885c-276b59a4b951
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/14/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Get the history of an item

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

One advantage of a version control system is that you can look back in time to get detailed information about what changes have been made to your files. Team Foundation Version Control (TFVC) maintains historical data related to every version of every file that's ever been checked in.

Often when you look over the history of a file, folder, or branch, you're trying to solve a problem or answer a question. By using the **History** window in Visual Studio, you can more easily resolve questions and situations such as the following:

-   What changes have been made in the past weeks or months?

-   What work item was completed by this change to the file?

-   Who checked in this change? What did they say about the change? What did they change?

-   If unexpected changes occurred in this file, causing a bug in an area of the product that the team thought was stable, who made this change, and why?

-   If a change in this branch fixes a bug that also needs to be fixed in other branches, how can you make sure that the change is merged to those branches?

Use the Visual Studio **History** window to get detailed historical data about a project, branch, folder, or file.

## Prerequisites

You must be one of the **Contributors** for your project. To learn more, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Open the History window

To open the **History** window from Visual Studio, right-click an item in [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) and then choose **View History**.

> [!TIP]
> You can customize the position of the window by right-clicking the title and then choosing **Float**, **Dock**, or **Set Tab Layout**.

You can also use the command-line [History command](history-command.md) to open the window in Visual Studio.

The **History** window displays the historical data about the item in two tabs:

-   The [Changesets tab](get-history-item.md#changesets_tab) lists every change made to the item, including edits, renames, and merges.

-   The [Labels tab](get-history-item.md#labels_tab) lists every label that has been applied to the item.

<a name="changesets_tab"><a/>

## Changesets tab

The **Changesets** tab displays detailed data about every change that has been made to an item. All changesets that have modified the item are listed in a table that includes the following columns:

-   **Changeset**:   The ID of the changeset.

-   **User**:   The name of the user who checked in the changeset.

-   **Date**:   The date and time the changeset was checked in.

-   **Comment**:   The comment entered by the user who checked in the changeset.

Files also display data in the following columns:

-   **Change**:   The types of changes that were made to the file with the changeset. Examples of values that can appear in this column include **add**, **edit**, **rename**, and **merge**.

-   **Path**:  The path to the file.

> [!NOTE]
> If you open the **History** window by using the `tf history` command, and you display data about a project, branch, or folder, the history of child items like files contained in a folder appears only if you use the `/recursive` option.

> [!TIP]
> Sometimes you need to share this kind of data with someone else. You can select one or more rows from the table in the **Changesets** tab, right-click them, select **Copy** to copy the data to the clipboard, and then paste the data into an e-mail message, document, or spreadsheet.

### Common tasks

By using the **Changesets** tab, you can do the following tasks:

:::row:::
   :::column span="3":::
   **Task**
   :::column-end:::
   :::column span="1":::
   **Supporting content**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View the item as it existed when the changeset was checked in:** Double-click or right-click the changeset, and then select **View**. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   None
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Get more details about a changeset:** Right-click a changeset and then select **Changeset Details** to get information such as:

     - Other source files that are part of the changeset.
     - Work items associated with the changeset.
     - Any check-in notes left for reviewers.
   :::column-end:::
   :::column span="1":::
   [Find and view changesets](find-view-changesets.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Compare a past version with the current version:** Right-click a changeset and then select **Compare**.
   
   - **Compare a past version with another past version:** Select two changesets by using Ctrl+Select, then right-click one of the changesets and select **Compare**.
   
   :::column-end:::
   :::column span="1":::
   [Compare files](compare-files.md), [Compare folders](compare-folders.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Get a past version of the item:** Right-click a changeset and then select **Get This Version** to download the past version of the item to your workspace.
   :::column-end:::
   :::column span="1":::
   [Download (get) files from the server](download-get-files-from-server.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View which users made specific changes within a file:** Right-click a changeset and then select **Annotate**. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   [View file changes using annotate](view-file-changes-using-annotate.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Get more details about a merge:** If the changeset resulted from a **merge**, you can expand this item to display the changesets that were merged into this item from another branch. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   None
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Get more details about changes that were made before a rename change:** If the changeset includes a **rename**, you can expand this item to display the changesets that occurred before the **rename** change was made.
   :::column-end:::
   :::column span="1":::
   None
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View other branches to which this changeset has been merged:** Right-click the changeset and select **Track Changeset**.
   :::column-end:::
   :::column span="1":::
   [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Roll back changes from one changeset:** Select a single changeset and choose **Rollback Entire Changeset**.
   :::column-end:::
   :::column span="1":::
   [Roll back changesets](roll-back-changesets.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Roll back changes from two or more consecutive changesets:** Select a set of consecutive changesets and choose **Rollback**.
   :::column-end:::
   :::column span="1":::
   [Roll back changesets](roll-back-changesets.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Display non-recursive history of a folder:** You can get this data only from the command prompt.
   :::column-end:::
   :::column span="1":::
   [History command](history-command.md)
   :::column-end:::
:::row-end:::

<a name="labels_tab"><a/>

## Labels tab

All labels that have been applied to the item are listed in a table that includes the following columns:

-   **Name**:   The name of the label.

-   **User**:   The user who applied the label.

-   **Date**:   The date and time the label was applied.

-   **Changeset**: The changeset to which the label applies.

-   **Comment**:   The comment made by the user who applied the label.

> [!NOTE]
> When you display historical data about a project, branch, or folder, the data about labels applied to child items, like the files in a folder, isn't shown.

> [!TIP]
> Sometimes you need to share this kind of data with someone else. You can select one or more rows from the table in the **Labels** tab, right-click them, select **Copy** to copy the data to the clipboard, and then paste the data into an e-mail message, document, or spreadsheet.

### Common tasks

:::row:::
   :::column span="3":::
   **Task**
   :::column-end:::
   :::column span="1":::
   **Supporting content**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View the item as it existed when the labeled changeset was checked in:** Right-click a label and then select **View**. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   None
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Edit the label:** Right-click the label and select **Edit Label**.
   :::column-end:::
   :::column span="1":::
   [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Delete the label:** Right-click the label and select **Delete Label**.
   :::column-end:::
   :::column span="1":::
   [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Compare a past version of the item with the current version:** Right-click a label and then select **Compare** to compare a past version of the item with the current version.
   :::column-end:::
   :::column span="1":::
   [Compare files](compare-files.md), [Compare folders](compare-folders.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **Get a past version of the item:** Right-click a label and then select **Get This Version** to download the past version of the item to your workspace.
   :::column-end:::
   :::column span="1":::
   [Download (get) files from the Server](download-get-files-from-server.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View other branches to which the labeled changeset has merged:** Right-click the label and select **Track Changeset**. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   - **View which users made specific changes within the labeled version of a file:** Right-click a changeset and then select **Annotate**. This command is available only if the item is a file.
   :::column-end:::
   :::column span="1":::
   [View file changes using annotate](view-file-changes-using-annotate.md)
   :::column-end:::
:::row-end:::

## Related articles

-  [Find and view changesets](find-view-changesets.md) 
-  [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md) 
-  [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md)