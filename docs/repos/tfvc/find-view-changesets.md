---
title: Find and view changesets
titleSuffix: Azure Repos
description: Find and view changesets
ms.assetid: bf36f78e-231a-46a1-94e4-4b44852f30b0
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Find and view changesets

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

When you [check in your changes](check-your-work-team-codebase.md), they are stored on the server as a changeset. Changesets contain the history of each item in version control.

![Version Control Changesets](media/find-view-changesets/IC263819.png)   

You can view a changeset to see what the exact file changes were, discover the owner's comments, find linked work items, and see if any policy warnings were triggered.

## Prerequisites

You must be one of the **Contributors** for your project. To learn more, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Find a changeset by ID

-   In [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), press Ctrl + G.

    The **Go to Changeset** dialog box appears.

    ![Go to Changeset dialog box](media/find-view-changesets/IC612254.png)

    Type the number of the changeset and choose **OK**.

    If you don't know the number, choose **Find**. See [Find a changeset](find-view-changesets.md#find).

## List changesets that update a specific file or folder

1.  In Solution Explorer or [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to the folder or file, open its shortcut menu, and choose **View History**.

2.  In the [History window](get-history-item.md), select the row that contains the changeset for which you want to view details, open its shortcut menu, and then choose **Changeset Details**.

    The **Changeset Details** page appears in Team Explorer.   
    ![Changeset Details page](media/find-view-changesets/IC592883.png)
    
:::row:::
   :::column span="1":::
    **Tip**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   
   - You can ![Undock](media/find-view-changesets/IC667296.png) undock the **Pending Changes** page from Team Explorer and open it in a new window.

   - You can toggle between tree and list view from the **Actions** menu (Visual Studio 2013) or **View Options** menu (Visual Studio 2015 and later).  
   :::column-end:::
:::row-end:::


<a name="find"></a>

## Search for changesets

1. In [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), on the menu bar, choose **File**, **Source Control**, **Find**, **Find Changesets**.

   The **Find Changesets** dialog box appears.

   ![Find Changesets dialog box](media/find-view-changesets/IC612255.png)

2. (Optional) In **Containing file**, select **Browse**.

3. (Optional) In the **By User** box, type the alias or the name of the project team member who is associated with the changeset.

4. (Optional) In the **Range** section, choose one of the following options:

   -   **All changes**   Retrieves all changesets that were applied to that file or folder.

   -   **Changeset number**   Retrieves changesets from a range of numbers. In the **from** and **to** boxes, type the range.

   -   **Created date**   Retrieves changesets from a range of dates. In the **between** and **and** boxes, use the calendars to specify start and end dates.

5. Choose **Find**.

   Changesets that match your criteria appear in the **Results** list.

6. Right-click the changeset for which you want information, and select **Changeset Details...**

   The **Details for Changeset** dialog box appears.

   ![Details for Changeset dialog box](media/find-view-changesets/IC615597.png)

7. In the **Details for Changeset** dialog box, view the change types that were added and any comments, work items, check-in notes, and policy warnings that are associated with the changeset.

8. Close the **Details for Changeset** dialog box.

9. Choose **OK**.

## Work with changesets

The **Changeset Details** view in Team Explorer has links to perform the following tasks:

-   **Rollback** to remove the effects of the changeset. See [Roll back changesets](roll-back-changesets.md).

-   **Track** to determine which branches have and have not received a set of changes. See [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md).

-   **Actions**, **Request Review** to request a code review.

-   **Actions**, **Open in Browser** to view the changeset in your browser (for example, if you want to copy the URL into an email to discuss the change with your team).


## Work from the command prompt

To find a changeset from the [command prompt](use-team-foundation-version-control-commands.md):

```
c:\users\jamal\workspaces\fabrikam>tf changeset
```

To view or modify changesets and to learn about other options, see [Changeset Command](changeset-command.md).

## Tips

-   ![Tip](media/find-view-changesets/IC572374.png) You can download the version of a file in a changeset. See [Download (get) files from the Server](download-get-files-from-server.md).

-   ![Tip](media/find-view-changesets/IC572374.png) You can add a link between a changeset and one or more work items. See [Manage dependencies, link work items to support traceability](../../boards/queries/link-work-items-support-traceability.md).
