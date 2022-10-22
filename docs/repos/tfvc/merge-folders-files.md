---
title: Merge folders and files
titleSuffix: Azure Repos
description: Learn how to use the graphical user interface of Visual Studio to merge together changes made in different branches in Azure Repos.
ms.assetid: b23efc53-f715-4eef-9631-64455663cfcc
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 07/13/2022
ms.custom: kr2b-contr-experiment
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Merge folders and files in Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

For the various reasons described in [Branch folders and files](branch-folders-files.md), many software development teams work in a codebase that is forked into various branches. If you use branches, eventually your team must integrate the work that has been completed on different branches during certain phases of your project. For example, when you're ready to test a full version of your software, you need the changes made on different feature team branches to be merged together.

The procedures in this article advise how you can use the graphical user interface of Visual Studio to merge together changes made in different branches. For information about how to perform merges at the command prompt, see [Merge Command](merge-command.md).

## Prerequisites

To perform these procedures, you must have the following permissions set:

- You must have the **Read** permission for the item in the source tree and your **Check out** permission for the item in the target tree set to **Allow**.

- You must have the **Merge** permission set for the target path.

- If the item in the target tree is being renamed, you must have the **Check out** permission for both the source tree and the target tree set to **Allow**.

- If any files affected by the operation are locked, you must have the **Lock** permission set to **Allow**.

For more information about permissions, See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Initiate a merge from the Source Control window

> [!IMPORTANT]
> The release of Visual Studio Team Foundation Server 2010 began a distinction between branches and folders. For example, in the following illustration you can see how branches and folders are displayed with different icons.
>
> ![Screenshot shows a branch icon and a folder icon.](media/merge-folders-files/IC268252.png)
>
> While you can still branch and merge among folders, the best practice for your team to follow is to branch and merge only among branches. For more information, see [Branch folders and files](branch-folders-files.md).

Merge branches, files, and folders from Source Control Explorer:

1. In Source Control Explorer, select the branch, folder, or file that you want to merge.

2. Select **File** > **Source Control** > **Branching and Merging**, and then select **Merge**.

  The **Source Control Merge Wizard** is displayed. For information about how to use this wizard to complete the merge, see [Use the Source Control Merge Wizard to Complete a Merge](merge-folders-files.md#sourcecontrolwizard).

## Initiate a merge from the Tracking Changeset window

You can use the Tracking Changeset window to view information such as, where a changeset was made, where it was merged, and when these events occurred. Branches where a changeset hasn't been merged are also highlighted. If you see a branch where the changeset is needed but is missing, drag it in.

> [!IMPORTANT]
> This procedure can be performed only for changesets that affect a branch. For example, in the following illustration you can view how branches and folders are displayed with different icons.
>
> ![Screenshot shows a branch icon and a folder icon.](media/merge-folders-files/IC268252.png)
>
> For more information, see [Branch folders and files](branch-folders-files.md).

### Drag and drop a changeset into the Tracking Changeset window

1. In Source Control Explorer, select either a branch, a folder, or a file that is contained within a branch.

2. Right-click the selected item and select **View History**.

3. In the **History** window, right-click the changeset you want to view and select **Track Changeset**.

   The **Select Branches** dialog box appears.

4. (Optional) In the **Target branches** list, check the branches that you want to view and uncheck the branches that you want to hide.

5. Select **Visualize**.

   The Tracking Changeset window appears.

6. Drag the branch that contains the changeset to the target branch.

   The **Source Control Merge Wizard** appears. For information about how to use this wizard to complete the merge, see [Use the Source Control Merge Wizard to Complete a Merge](merge-folders-files.md#sourcecontrolwizard).

### Example: Where is that new method?

To illustrate how you might use the preceding procedure, consider the following example. Julie has asked Chris to implement a new method in some of the **FeatureTeamA** code that she uses in her **FeatureTeamB** code. Chris writes code for the new method and then he checks it into the **FeatureTeamA** branch. He meets Julie in the hallway as he's leaving for the day and mentions that he's checked in the new method.

Julie gets back to her desk and finds the latest source, but she doesn't see the new method that Chris checked in. She opens Source Control Explorer, views the **History** window for the **FeatureTeamA** branch, and she can see that with changeset 50 Chris did indeed check in the new method. She right-clicks changeset 50 and selects **Track Changeset**, and the following window appears:

![Screenshot shows the Tracking Changeset window: merge to parent branch.](media/merge-folders-files/IC269735.png)

From the Tracking Changeset window, Julie can see that Chris checked in the method with changeset 50, and merged it to the **Dev** branch with changeset 51. But Julie can't get the new code until changeset 51 is merged into the **FeatureTeamB** branch. So she drags the **Dev** branch onto the **FeatureTeamB** branch to launch the **Source Control Merge Wizard**, which she then uses to complete the merge.

<a name="sourcecontrolwizard"></a>

## Use the Source Control Merge Wizard to complete a merge

After you complete one of the above procedures, the Source Control Merge Wizard appears. This wizard enables you to specify the source and target of the merge. You can merge one entire branch to another branch, or you can pick a specific changeset or group of changesets that you want to merge.

Use the Source Control Merge Wizard to merge files, folders, or branches:

1. In the Source Control Merge Wizard, in **Source branch**, either type the name of the project source branch, or select **Browse** to select one from the list.

2. In the **Target branch** dropdown list, select the target project branch to which you want to merge the source branch.

3. Select the range of changes that you want to merge into the target branch by selecting either the **All changes up to a specific version** or **Selected changesets** option, and select **Next**.

   > [!TIP]
   > If possible, select **All changes up to a specific version**. This practice reduces the risk of conflicts in future merges.

   - If you selected **All changes up to a specific version**, then the **Select the versions of the source items** page appears. Select the version of the items that you want to use.

        :::row:::
          :::column span="1":::
          **Changeset**
          :::column-end:::
          :::column span="3":::
          Merge by specifying a [changeset](find-view-changesets.md) version.
          :::column-end:::
        :::row-end:::
        :::row:::
          :::column span="1":::
          **Date**
          :::column-end:::
          :::column span="3":::
          Merge by specifying a date version.
          :::column-end:::
        :::row-end:::
        :::row:::
          :::column span="1":::
          **Label**
          :::column-end:::
          :::column span="3":::
          Merge by specifying a [label](use-labels-take-snapshot-your-files.md) version.
          :::column-end:::
        :::row-end:::
        :::row:::
          :::column span="1":::
          **Latest Version**
          :::column-end:::
          :::column span="3":::
          Merge by specifying the latest version.
          :::column-end:::
        :::row-end:::
        :::row:::
          :::column span="1":::
          **Workspace**
          :::column-end:::
          :::column span="3":::
          Merge by specifying a [workspace](create-work-workspaces.md) version.
          :::column-end:::
        :::row-end:::

   - If you chose **Selected changesets**, then the **Select changesets to merge into the target branch** page appears. Select the changeset you want to merge.

     > [!TIP]
     > You can press and hold the **Ctrl** or **Shift** keys and then select multiple items in a continuous range.

4. Select **Next**, and then on the **Perform the merge operation** page, select **Finish**.

   One or more pending changes are generated.

5. (Optional) If you want to check in the pending changes immediately, you can perform these steps:

   1. Select the **View** menu, point to **Other Windows**, and then select **Pending Changes**.

   2. Use the **Pending Changes** window to check in the changes. For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).

## Next steps

- [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md)
- [Merge Command](merge-command.md)
- [Merges Command](merges-command.md)
- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md)
- [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md)
