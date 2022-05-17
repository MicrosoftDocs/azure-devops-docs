---
title: Check in your work to the team's codebase
titleSuffix: Azure Repos
description: Learn how to check in your work to the team's codebase in Azure Repos, including possible outcomes and conflicts.
ms.assetid: 325ef815-f163-4b3c-8fcb-2b7faf09c83d
ms.technology: devops-code-tfvc
ms.topic: how-to
ms.date: 05/17/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
---


# Check in your work to the team's codebase

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Use the **Pending Changes** page in Team Explorer to check in your code into a new changeset. Press **Ctrl**+**0**, **P** on you keyboard: 

![Screenshot shows Pending Changes pane with a comment and Check In button.](media/check-your-work-team-codebase/IC593474.png)

<a name="include_exclude"></a>

## Choose the files you want to check in

You can specify which file changes you want to check in by dragging them between the **Included Changes** and **Excluded Changes** sections of the **Pending Changes** page in Team Explorer. 
You can also check in as you work in other areas of Visual Studio:

- In Solution Explorer, select one of the following items:

  - The solution
  - One or more of the code projects
  - One or more files

  After you select the items, right-click and select **Check In**.

- In Source Control Explorer, select one or more items with pending changes or one or more folders that contain items with pending changes. The TFSC checked-out status icon :::image type="icon" source="media/check-your-work-team-codebase/IC51402.gif"::: indicates items with pending changes. Open the context menu for the selected items, and choose **Check In**.

> [!IMPORTANT]
> The **Check in** option is not displayed if there are no pending changes to the item selected.

If you don't see pending changes for an item, make sure that it is not already listed as an excluded change.
Open Team Explorer's **Pending Changes** view and select the **Detected: ..** link under **Excluded Changes**.
Check the changes to include from the list and select **Promote** to move the excluded changes into the **Included Changes** section.
These changes can now be checked in.

## Associate work items

When you check in changes, you should associate work items with the changes. This practice offers the following benefits:

- A team member who looks at the work item can [link directly to the changeset](../../boards/queries/link-work-items-support-traceability.md) to see the work that you did.
- A team member who [reviews the history of a file](view-manage-past-versions.md) you changed can view the changeset and see the work items that were the justification for the change.
- You might build your changes in your automated build system, for example with a [CI Build](../../pipelines/build/triggers.md), or a [Gated Check-in Build](../../pipelines/repos/index.md). Your team members can see in which completed build the task was completed or the bug was fixed.

To associate work items with your changes:

- Choose the **Add Work Item by ID** link in the **Related Work Items** section.
- Drag a work item from a work item query window from Team Explorer's [**Work Item**](../../boards/queries/using-queries.md) page into the **Related Work Items** section.

Next to each work item, select how it should be related to your check-in: **Associate** or **Resolve**. These options are available only if the work item isn't already in a state that precludes this relationship, such as **Resolved**, **Done**, or **Closed**.

## Check in your changes

1. In Team Explorer, choose :::image type="icon" source="media/check-your-work-team-codebase/IC547418.png"::: **Home**, and then select **Pending Changes** or press **Ctrl**+**0**, **P**.

2. On the **Pending Changes** page, enter a **Comment** so that teammates who later need to [review and understand the history of your files](view-manage-past-versions.md) can understand what you did. For example: **Implemented shopping cart controller**.

3. Some teams prefer that their members to provide certain kinds of information about each check-in. In some cases, they even implement a check-in policy to require this practice. If an Administrator of your project has [enabled check-in notes](configure-check-notes.md), then you can type the information into each field in the **Notes** section.

4. Select **Check In**.

One of the following outcomes occurs:

- Your changes are checked in

  All the included file changes from your workspace along with the comment, check-in notes, and links to related work items are stored on the server as a single [changeset](find-view-changesets.md) on your server.

- Conflicts block your check in

  The system presents you with conflicts between your changes the latest version of the files on the server. See [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).

- A check-in policy blocks your check in

  Administrators of your project can implement check-in policies to encourage your team to follow best practices. For example, a check-in policy can encourage team members to associate at least one work item with their changes. For more information, see [Set and Enforce Quality Gates](set-enforce-quality-gates.md).

  In some cases, you might want to override these check-in policies. In the **Policy Warnings** section, choose **Override Warnings**.

  In the **Reason** box, explain why you chose to override the policy.

- Check in changes to a folder that is controlled by a gated check-in build process

  ![Screenshot shows the Gated Check-in dialog box with a message.](media/check-your-work-team-codebase/IC572351.png)

  If you're checking in changes into version control folders that are controlled by a [gated check-in build process](../../pipelines/repos/index.md), the **Gated Check-in** dialog box appears. For information about how to complete your check-in operation, see [Check in to a folder that is controlled by a gated check-in build process](check-folder-controlled-by-gated-check-build-process.md).

## Subscribe to alerts

If you want to be notified when someone checks in code in your TFVC project, you can [subscribe](../../notifications/manage-your-personal-notifications.md) to receive email alerts. Select **Checkin Alerts**.

![Screenshot shows the alerts page for a T F V C project in web portal.](media/check-your-work-team-codebase/IC720120.png)

## Work from the command prompt

- [Checkin command](checkin-command.md): View pending changes and check in files.

## Tips

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: You can :::image type="icon" source="media/check-your-work-team-codebase/IC667296.png"::: undock the **Pending Changes** page from Team Explorer and open it in a new window.

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: You can toggle between list and tree view from the **Actions** menu.

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: Before checking in new code, you should consider conducting a code review. See [Suspend work, fix a bug, and conduct a code review](day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: You can manage and, if necessary, undo your pending changes. See [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: If you need to set aside your changes, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).

- :::image type="icon" source="media/check-your-work-team-codebase/IC572374.png"::: A check-in is performed atomically. The operation either succeeds completely or fails completely, with one exception. If any one of the changes can't be submitted to Team Foundation Server, none of the changes are committed and a changeset isn't created. For example, if you lose network connectivity in the middle of a check-in, the whole operation fails.

  The exception is the association of work items with the changeset. If work item association fails but all other aspects of the check-in succeed, then the changeset is created. You can manually associate a work item with a changeset. See [Manage dependencies, link work items to support traceability](../../boards/queries/link-work-items-support-traceability.md).

## Next steps

[Rename or move files and folders](rename-move-files-folders.md)
