---
title: Suspend your work and manage your shelvesets
titleSuffix: Azure Repos
description: Use shelvesets in Team Foundation Version Control to set aside in-progress work. Use Team Explorer to suspend and resume work and to manage shelvesets.
ms.assetid: 91b026a7-a590-45d1-81cf-97dfa7acba1d
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Suspend your work and manage your shelvesets

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

For various reasons, sometimes you need to set aside some or all of your work that's in progress. Shelvesets in Team Foundation Version Control (TFVC) are useful when you want to stop work for:

- **Interruption:** You have pending changes that aren't ready to check in, but you need to work on a different task.  
- **Collaboration:** You have pending changes that aren't ready to check in, but you need to share them with another team member.  
- **Code review:** You want another team member to review your pending changes. To learn more about code reviews, see [Day in the life of a devops developer: Write new code for a user story](day-life-alm-developer-write-new-code-user-story.md).
- **Private build:** Before you check in your changes, you want to use your automated build system to build and test your code.  
- **Backup:** You have work in progress that you can't finish but want to make a backup copy of. You want the backup copy to be stored on your server and available to other team members.  
- **Handoff:** You have work in progress that you want to hand off to another team member.

In these scenarios and others, you can move your [pending changes](develop-code-manage-pending-changes.md) to a shelveset on the server and then clean your [workspace](create-work-workspaces.md). The shelveset saves your file revisions, comment, list of related work items, and check-in notes when you evaluate policies before shelving.

## Prerequisites

You must be one of the **Contributors** for your project. To learn more, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

[!INCLUDE [Visual Studio versions with My Work and Code Review features](includes/note-my-work-code-review-support.md)]
 
## Suspend and resume your work from the My Work page

From the **My Work** page in Team Explorer, you can save and restore your file changes and related work items. You can also restore the position of your open windows, breakpoints, and other important cues.

1. In Visual Studio, select **View** > **Team Explorer**.

1. In Team Explorer, select :::image type="icon" source="media/suspend-your-work-manage-your-shelvesets/IC547418.png"::: **Home**, and then select **My Work**.

1. On the **My Work** page, expand **Suspend**, enter a description of the suspended work, and then select **Suspend**.

   :::image type="content" source="media/suspend-your-work-manage-your-shelvesets/IC592393.png" alt-text="Screenshot of the My Work page in Team Explorer. Under In Progress Work, in the Suspend section, a description and the Suspend button are highlighted.":::

1. When you're ready, you can resume the work. On the **My Work** page, under **Suspended Work**, select the description of your work, and then select **Resume**.

   :::image type="content" source="media/suspend-your-work-manage-your-shelvesets/IC591026.png" alt-text="Screenshot of the My Work page in Team Explorer. Under Suspended Work, a work description is highlighted. In its shortcut menu, Resume is highlighted.":::

## Shelve your changes

> [!TIP]
> In either Solution Explorer or Source Control Explorer, you can shelve a specific subset of the files that you're working with. Select them, open their context menu, and then select **Shelve Pending Changes**. The **Pending Changes** page appears, ready to shelve only the files that you selected.

1. In Team Explorer, select :::image type="icon" source="media/suspend-your-work-manage-your-shelvesets/IC547418.png"::: **Home**, and then select **Pending Changes**.

1. On the **Pending Changes** page, make sure that the changes that you want to shelve are listed in the **Included Changes** section. You can drag files between **Included Changes** and **Excluded Changes**. From the keyboard, you can also open the context menu of an item, and then select **Include** or **Exclude**.

1. Expand **Shelve**.

1. Enter a name for the shelveset.

   :::image type="content" source="media/suspend-your-work-manage-your-shelvesets/IC612901.png" alt-text="Screenshot of the Pending Changes page in Team Explorer. In the Shelve section, a name that describes the work is highlighted.":::

1. (Optional) Select either of the following options:

   - **Preserve pending changes locally**. By default, this option is selected. As a result, your pending changes aren't removed from your workspace. The comment and the list of related work items also aren't removed. If you want to clean your workspace to work on another task, clear this checkbox.

   - **Evaluate policies and notes before shelving**. When you select this option, all check-in policies are evaluated before the shelveset is created. For more information about check-in policies, see [Set and enforce quality gates](set-enforce-quality-gates.md).

1. Select **Shelve**.

## Find a shelveset

1. In Team Explorer, select :::image type="icon" source="media/suspend-your-work-manage-your-shelvesets/IC547418.png"::: **Home**, and then select **Pending Changes**.

1. Expand **Actions**, and then select **Find Shelvesets**.

1. On the **Find Shelvesets** page, enter the name or alias of a project team member in the search box, and then select **Enter**.

   :::image type="content" source="media/suspend-your-work-manage-your-shelvesets/IC612902.png" alt-text="Screenshot of the Find Shelvesets page in Team Explorer. The search box contains the name of a team member. Under Results, two shelvesets are visible.":::

   > [!TIP]
   > If you don't know the name of the owner, you can enter **\*** to list shelvesets for all users.

1. A list of shelvesets appears in the **Results** list. You can filter the results to reduce the size of the list.

## View and work with a shelveset

After the **Find Shelvesets** page displays a list of shelvesets, as described in [Find a shelveset](#find-a-shelveset), double-click a shelveset to view it. The **Shelveset Details** page appears.

:::image type="content" source="media/suspend-your-work-manage-your-shelvesets/IC612903.png" alt-text="Screenshot of the Shelveset Details page in Team Explorer. The shelveset name, comment, work items, and changes are visible.":::

- To switch between the list and tree views, use the **View Options** menu.

- To get detailed information about a change to a file, open its context menu, and then select **Open**, **View History**, or one of the **Compare** options.

- To retrieve the changes in the shelveset into your workspace, select **Unshelve Changes**:

  1. If there's a file change that you don't want to unshelve, open the context menu of the file, and then select **Exclude**.

  1. If you want to delete the shelveset, clear the **Preserve shelveset on server** checkbox.

  1. If you don't want to restore the work item list and check-in notes that are stored in the shelveset, clear the **Restore work items and check-in notes** checkbox.

  1. Select **Unshelve**. If there are conflicts between changes in the shelveset and the file versions in your workspace, the system prompts you to [resolve them](resolve-team-foundation-version-control-conflicts.md).

- To delete the shelveset, select **Delete Shelveset**.

  > [!WARNING]
  > Be sure you don't need any of the work that's stored in a shelveset before you delete it. There's no way to recover a deleted shelveset.

## Work from the command prompt

- [Shelve command](shelve-command.md): Create or delete a shelveset.
- [Shelvesets command](shelvesets-command.md): List shelvesets.
- [Unshelve command](unshelve-command.md): Unshelve a shelveset.
- [Difference command](difference-command.md): Compare the changes to a file in a shelveset with another version.

> [!TIP]
> - Unlike a changeset, a shelveset is a non-versioned entity. You can unshelve the items in a shelveset, edit several files, and then reshelve the shelveset. But the system doesn't create a new version of the items for future comparison. It also doesn't maintain a record of who revised the items, when they were revised, or in what manner. The original shelveset is completely replaced.
> - Conflicts can prevent you from resuming suspended work. If you experience conflicts, see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).
