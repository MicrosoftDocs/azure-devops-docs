---
title: Use labels to take a snapshot of your files
titleSuffix: Azure Repos
description: Find out how you can use Team Foundation Version Control labels to take a snapshot of your files. See how to create, list, edit, apply, and delete labels.
ms.assetid: 8945006e-3a03-4ae1-b5a1-79be57610321
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 11/29/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Use labels to take a snapshot of your files in Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control (TFVC) labels provide a way for you to take a snapshot of your files. Later, you can refer back to that snapshot. By using your label, you can view, build, or even roll back a large set of files to the state they were in when you applied the label.

## Prerequisites

- To apply a label, you must have the **Label** permission set to **Allow**.
- To find, list, or view labels, you must have the **Read** permission set to **Allow**.
- To modify or delete a label, you must own the label or have the **Administer Labels** permission set to **Allow**.

## Use labels

In many software projects, when the code has reached a reasonable level of quality and stability, the team builds and releases a new version of the product. The team needs to mark the current version of each file. Even as the files continue to change, the team can still get and build the new version of every file in their project.

Theoretically, you could record the ID of each changeset for each file manually. But this kind of process isn't practical. TFVC makes the job easy. Apply a label to the folder, branch, or project that contains the files. You can give the label a name that follows whatever naming convention you prefer. Some examples of label names include: "Sprint 5," "M1," "Beta2," and "Release Candidate 0."

After you apply the label, you can use it to qualify operations such as building, branching, merging, comparing, and getting specific versions of files and folders.

Sometimes after you apply a label, you decide that you need to change it. TFVC provides a way for you to apply a label to additional files, remove a label from certain files, and modify which version of a specific file a label applies to.

> [!TIP]
> Applying a label provides many of the same benefits as creating a branch, but typically with lower cost and complexity. The tradeoff is that for large databases, operations such as merging might take much longer than usual when running against a label.

## Apply a label

> [!NOTE]
> When you use Visual Studio to apply a label that already exists, the operation removes the label from all file versions and then applies the label. From the command prompt, however, the label operation is additive. See [Label command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

1. In Visual Studio, on the **View** menu, select **Other Windows** > **Source Control Explorer**.

1. In Source Control Explorer, right-click the collection, project, branch, folder, or file that you want to apply a label to, and then select **Advanced** > **Apply Label**. The **New Label** dialog box appears.

1. In the **Name** box, enter a name for the label.

1. (Optional) In the **Comment** box, enter a comment.

1. In the **Version** list, **Latest Version** is selected by default. This option is the one that's most typically used. If you need the label to target a specific version, select one of the following options:

   - **Changeset**: Specify the number of the changeset in the **Changeset** box. Alternatively, select the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**: Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**: Specify an existing label to base the new label on. Either enter the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

   - **Workspace Version**: Create the label for the version in your workspace.

1. When you're satisfied with your settings, take one of the following steps:

   - To apply the label, select **Create**.

   - To apply the label and then modify it after it has been applied, select **Create and Edit**. This action applies the label and then displays the **Label** window. For more information about using the **Label** window to edit a label, see [Use the Label window to work with labels](#use-the-label-window-to-work-with-labels).

> [!NOTE]
> When you apply a label that uses a name that already exists, the system warns you and asks whether you want to continue. If you select **OK** to continue, TFVC removes that label from any items that aren't in the path that you're applying the label to.

## Rename a label

You can't modify the name of an existing label. But you can easily apply a new label to exactly the same files and same versions that another label applies to.

1. In Source Control Explorer, right-click the project collection node (the root node), and then select **Advanced** > **Apply Label**. The **New Label** dialog box appears.

1. In the **Name** box, enter a name for the label.

1. (Optional) In the **Comment** box, enter a comment.

1. In **Version** list, select **Label**. The **Label** box appears.

1. Take one of the following steps:

   - Enter the name of the existing label.

   - If you aren't sure of the name of the existing label, select the browse button with the ellipses (...) next to the **Label** box. The **Find Label** dialog box appears. Use the options in the **Find Label** dialog box to filter the list of labels and find the existing label that you want to apply the new label to. For more information, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

1. Select **Create**.

1. (Optional) After you've created the new label, you can remove the old label. For more information, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

## List, find, view, edit, and remove labels

There are two ways to list and find labels: the **Find Label** dialog box and the **Label** tab in the **History** window. After you find the label that you're interested in, you can view, edit, or remove it. You can also work with the files that the label applies to.

### Find and work with labels by using the Find Label dialog box

1. In Source Control Explorer, on the menu bar, select **File** > **Source Control** > **Find** > **Find Label**. The **Find Label** dialog box appears.

1. (Optional) Refine your search by performing one or more of the following steps:

   - In the **Name** text box, enter the name of the label.

   - In the **Project** list, select the project that contains the label that you want to find.

   - In the **Owner** text box, enter the name or alias of the owner of the label.

1. Select **Find**. The **Results** list displays labels that match the search criteria that you entered.

1. (Optional) Take one of the following steps:

   - To view or edit a label, select it and select **Edit**. The **Label** window appears. For more information, see [Use the Label window to work with labels](#use-the-label-window-to-work-with-labels).

   - To delete a label, select it and select **Delete**.

   - Select **Close**.

### List and work with labels that apply to a specific item

Sometimes you might not be sure of the name of a label, but you know that the label was applied to a particular item under version control. The following procedure explains how to find and work with a label in this situation.

1. In Source Control Explorer, right-click an item that the label was applied to, and then select **View History**. The **History** window appears.

1. Select the **Labels** tab to display the list of labels that apply to this item.

1. (Optional) Take one of the following steps:

   - To view or edit a label, right-click the label, and then select **Edit Label**. The **Label** window appears. For information about how to use this window, see [Use the Label window to work with labels](#use-the-label-window-to-work-with-labels).

   - To delete a label, right-click the label, and then select **Delete Label**.

   - Right-click the label, and then select another action such as **Get This Version** or **Compare**.

For more information about how to use the label tab in the **History** window, see [Get the history of an item](get-history-item.md).

## Download labeled versions of files to your workspace

Labeling a set of files is like taking a snapshot of how they existed at a certain point in time. Weeks or months after you've taken this snapshot, you might need to view or work with the files as they existed in that snapshot. The following procedure explains how to download the labeled versions of a set of files to your workspace.

1. In Source Control Explorer, right-click the project collection, project, branch, or folder that contains the items that you want to download, and then select **Advanced** > **Get Specific Version**. The **Get** dialog box appears.

1. From the **Type** list, select **Label**, and then either enter the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information about how to use this dialog box, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

1. Select any other appropriate options in the **Get** dialog box.

1. Select **Get**.

<a name="label_window"></a>

## Use the Label window to work with labels

After you open the **Label** window by using one of the preceding procedures, you're ready to begin working with the label. At the top of the window, a box displays the comment, which you can edit.

You can use the **Label** window to perform the following tasks:

- Add an item to the label
- Remove an item from the label
- Change the version of a file
- Perform other actions on an item

### Add an item to the label

1. In the **Label** window, select **Add Item**. The **Choose Item Version** dialog box appears.

1. In the **Choose Item Version** dialog box, navigate to the item that you want to add and then select it.

   > [!TIP]
   > You can select and hold the **Ctrl** or **Shift** keys and then select multiple items.

1. (Optional) If you need the label to target a specific version, from the **Version** list, select a version:

   - **Latest Version**: Apply the label to the latest version that's in version control.

   - **Changeset**: Specify the number of a changeset in the **Changeset** box. Alternatively, select the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**: Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**: Specify an existing label to base the new label on. Either enter the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

   - **Workspace Version**: Create the label for the version in your workspace.

1. Select **OK**.

1. Select **File** > **Save**.

### Remove an item from the label

1. In the Label window, locate the collection, project, branch, folder, or file that you want to remove from this label.

1. Right-click the item and select **Remove from Label**. The label is removed from the item. If the item is a project collection, project, branch, or folder, the label is also removed from all the items it contains.

1. Select **File** > **Save**.

### Change the version of a file

1. In the Label window, locate the file that you want to modify.

1. Right-click the file and select **Change Labeled Version**. The **Change Labeled Version** dialog box appears.

1. Select one of the following values:

   - **Latest Version**: Apply the label to the latest version that's in version control.

   - **Changeset**: Specify the number of the changeset in the **Changeset** box. Alternatively, select the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**: Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**: Specify an existing label to base the new label on. Either select the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, edit, and remove labels](#list-find-view-edit-and-remove-labels).

   - **Workspace Version**: Create the label for the version in your workspace.

1. Select **File** > **Save**.

### Perform other actions on a labeled item

When you right-click an item in the Label window, you can also select one of the following commands:

- [View](view-command.md) (files only)
- [View history](get-history-item.md)
- [Compare](compare-files.md) (files only)
- [Annotate](view-file-changes-using-annotate.md) (files only)
- [Get this version](download-get-files-from-server.md)

## Work from the command prompt

- Use the `labels` command to list labels. For more information, see [Labels command](labels-command.md).
- Use the `label` command to apply or remove a label. For more information, see [Label command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

  > [!TIP]
  > When you use the `label` command to apply a label, you can specify a scope other than the project.

## Next steps

- [Find and view changesets](find-view-changesets.md)
- [Create and work with workspaces](create-work-workspaces.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md)
- [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md)
