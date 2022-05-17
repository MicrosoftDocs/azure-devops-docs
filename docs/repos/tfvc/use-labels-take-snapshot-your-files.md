---
title: Use labels to take a snapshot of your files
titleSuffix: Azure Repos
description: Learn how labels let you take a snapshot of your files so that, at a later date, you can refer back to that snapshot.
ms.assetid: 8945006e-3a03-4ae1-b5a1-79be57610321
ms.technology: devops-code-tfvc
ms.topic: how-to
ms.date: 05/17/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
---

# Use labels to take a snapshot of your files in Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Labels let you take a snapshot of your files so that you can refer back to that snapshot. By using your label, you can view, build, or even roll back a large set of files to the state they were in when you applied the label.

## Prerequisites

To apply a label, you must have the **Label** permission set to **Allow**. To find, list, or view labels, you must have the **Read** permission set to **Allow**. To modify or delete a label, you must own the label or have the **Administer Labels** permission set to **Allow**.

## Use labels

In many software projects, when the code has reached a reasonable level of quality and stability, the team builds and releases a new version of the product. The team needs to mark the current version of each file. Even as the files continue to change, the team can still get and build the new version of every file in their project.

Theoretically, you could record the ID of each changeset for each file manually. This kind of process isn't practical. Team Foundation version control makes the job simple. Apply a label to the folder, branch, or project that contains the files. You can give the label a name that follows whatever naming convention you prefer. Some examples of label names include: "Sprint 5", "M1", "Beta2", and "Release Candidate 0".

After you apply the label, you can use it to qualify operations such as building, branching, merging, comparing, and getting specific versions of files and folders.

Sometimes after you apply a label, you decide that you need to change it. Team Foundation version control enables you to apply a label to more files, remove a label from certain files, and even to modify which version of a specific file to which the label applies.

> [!TIP]
> Applying a label provides many of the same benefits as creating a branch, but typically with lower cost and complexity. The tradeoff is that for large databases, operations such as merging might take much longer when running against a label.

## Apply a label

> [!NOTE]
> When you use Visual Studio to apply a label that already exists, the operation removes the label from all file versions and then applies the label. From the command prompt, however, the label operation is additive. See [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

1. In Source Control Explorer, open the context menu for the collection, project, branch, folder, or file to which you want to apply a label and select **Advanced** > **Apply Label**.

   The **New Label** dialog box appears.

2. In the **Name** box, type a name for the label.

3. (Optional) Type your comments in the **Comment** box.

4. In the **Version** list, **Latest Version** is selected by default. This option is the one most typically used, but if you need the label to target a specific version, select one of the following options:

   - **Changeset**. Specify the number of the changeset in the **Changeset** box. Alternatively, select the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**. Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**. Specify an existing label upon which to base the new label. Either type the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

   - **Workspace Version**. The label is created for the version in your workspace.

5. When you're satisfied with your settings, perform one of the following steps:

   - To apply the label, choose **Create**.

   - To apply the label and then modify it after it has been applied, choose **Create and Edit**. This action applies the label and then displays the **Label** window. For more information about using the **Label** window to edit a label, see [Use the Label Window to Work with Labels](use-labels-take-snapshot-your-files.md#label_window).

> [!NOTE]
> When you apply a label using a name that already exists, the system warns you and asks if you want to continue. If you select **OK** to continue, any items not contained in the path to which you are applying the label will no longer have that label.

## Rename a label

You can't modify the name of an existing label. You can easily apply a new label to exactly the same files and same versions to which another label applies.

1. In Source Control Explorer, open the context menu for the project collection node (the root node), and then select **Advanced** > **Apply Label**.

   The **New Label** dialog box appears.

2. In the **Name** box, type a name for the label.

3. (Optional) In the **Comment** box, type a comment.

4. In **Version** list, select **Label**.

   The **Label** box appears.

5. Perform one of the following steps:

   - Type the name of the existing label.

   - If you aren't sure of the name of the existing label, choose the browse button with the ellipses (...) next to the **Label** box.

        The **Find Label** dialog box appears.

        Use the options in the **Find Label** dialog box to filter the list of labels and find the existing label to which you want to apply the new label. For more information, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

6. Choose **Create**.

7. (Optional) After you've created the new label, you can remove the old label. For more information, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

<a name="find_label"></a>

## List, find, view, edit and remove labels

There are two ways to list and find labels: the **Find Label** dialog box and the **Label** tab in the **History** window. After you find the label you're interested in, you can then view it, edit it, remove it, or work with the files to which it applies.

### Find and work with labels by using the Find Label dialog box

1. In Source Control Explorer, on the menu bar select **File** > **Source Control** > **Find** > **Find Label**.

   The **Find Label** dialog box appears.

2. (Optional) Refine your search by performing one or more of the following steps:

   - In the **Name** text box, type the name of the label.

   - In the **Project** list, select the project that contains the label that you want to find.

   - In the **Owner** text box, type the name or alias of the owner of the label.

3. Select **Find**.

   The **Results** list displays labels that match the search criteria that you entered.

4. (Optional) Perform one of the following steps:

   - To view or edit a label, select it and select **Edit**.

     The **Label** window appears. For more information, see [Use the Label Window to Work with Labels](use-labels-take-snapshot-your-files.md#label_window).

   - To delete a label, select it and select **Delete**.

   - Select **Close**.

### List and work with labels that apply to a specific item

Sometimes you might not be sure of the name of a label, but you know that the label was applied to a particular item under version control. The following procedure explains how to find and then work with a label in this situation.

1. In Source Control Explorer, open the context menu for the item to which the label you want to find applies, and then select **View History**.

   The **History** window appears.

2. Select the **Labels** tab to display the list of labels that apply to this item.

3. (Optional) Perform one of the following steps:

   - To view or edit a label, open its context menu and choose **Edit Label**.

     The **Label** window appears. For information about how to use this window, see [Use the Label Window to Work with Labels](use-labels-take-snapshot-your-files.md#label_window).

   - To delete a label, open its context menu and choose **Delete Label**.

   - Open the context menu for the label and choose other actions such as **Get This Version** and **Compare**.

For more information about how to use the label tab in the **History** window, see [Get the history of an item](get-history-item.md).

## Download labeled versions of files to your workspace

Labeling a set of files is like taking a snapshot of how they existed at a certain point in time. Weeks or months after you've taken this snapshot, you might need to view or work with the files as they existed in that snapshot. The following procedure explains how to download the labeled versions of a set of files to your workspace.

1. In Source Control Explorer, open the context menu for the project collection, project, branch, or folder that contains the items you want to download and then select **Advanced** > **Get Specific Version**.

   The **Get** dialog box appears.

2. From the **Type** list, select **Label**, and then either type the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information about how to use this dialog box, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

3. Review, and if appropriate, select any of the other options in the **Get** dialog box.

4. Select **Get**.

<a name="label_window"></a>

## Use the Label window to work with labels

After you open the **Label** window by using one of the preceding procedures, you're ready to begin working with the label. At the top of the window, a box displays the comment, which you can edit if you want.

You can use the **Label** window to perform the following tasks:

- Add an item to the label
- Remove an item from the label
- Change the version of a file
- Perform other actions on an item

### Add an item to the label

1. In the **Label** window, choose **Add Item**.

   The **Choose Item Version** dialog box appears.

2. In the **Choose Item Version** dialog box, navigate to and then select the item that you want to add.

   > [!TIP]
   > You can press and hold the **Ctrl** or **Shift** keys and then select multiple items.

3. (Optional) If you need the label to target a specific version, from the **Version** list, select a version:

   - **Latest Version**. The label will be applied to the latest version that is in version control.

   - **Changeset**. Specify the number of the changeset in the **Changeset** box. Alternatively, choose the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**. Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**. Specify an existing label upon which to base the new label. Either type the label name in the **Label** box, or choose the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

   - **Workspace Version**. The label is created for the version in your workspace.

4. Select **OK**.

5. Select **File** > **Save**.

### Remove an item from the label

1. In the Label window, locate the collection, project, branch, folder, or file that you want to remove from this label.

2. Open the context menu for the item and select **Remove from Label**.

   The label is removed from the item. If the item is a project collection, project, branch, or folder, then the label is also removed from all the items it contains.

3. Select **File** > **Save**.

### Change the version of a file

1. In the Label window, locate the file that you want to modify.

2. Open the context menu for the file and select **Change Labeled Version**.

3. The **Change Labeled Version** dialog box appears.

4. Select one of the following values:

   - **Latest Version**. Apply the label to the latest version that is in version control.

   - **Changeset**. Specify the number of the changeset in the **Changeset** box. Alternatively, choose the ellipses (**...**) to open the **Find Changesets** dialog box. For more information, see [Find and view changesets](find-view-changesets.md).

   - **Date**. Specify a date in the **Date** box or select a date from the calendar on the dropdown menu.

   - **Label**. Specify an existing label upon which to base the new label. Either type the label name in the **Label** box, or select the ellipses (**...**) to open the **Find Label** dialog box. For more information, see [Find, Edit, and Remove Labels](use-labels-take-snapshot-your-files.md#find_label).

   - **Workspace Version**. The label is created for the version in your workspace.

5. Choose **File** > **Save**.

### Perform other actions on a labeled item

When you open the context menu for an item in the Label window, you can also choose one of the following commands:

- **View** (files only)
- [View History](get-history-item.md)
- [Compare](compare-files.md) (files only)
- [Annotate](view-file-changes-using-annotate.md) (files only)
- [Get This Version](download-get-files-from-server.md)

## Work from the command prompt

- [Labels Command](labels-command.md). List labels.
- [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).  Apply or remove a label.

  > [!TIP]
  > When you use this command to apply a label, you can specify a scope other than the project.

## Next steps

- [Find and view changesets](find-view-changesets.md)
- [Create and work with workspaces](create-work-workspaces.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md)
- [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md)
