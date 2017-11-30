---
title: Manage branches in your Git repo | VSTS & TFS
description: Find your work and search for branches using the branches page in VSTS/TFS
ms.assetid: 17722c33-e156-49f1-acad-5fcf4bc3c4fc
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 11/30/2017
---

# Manage branches

#### VSTS | TFS 2018 | TFS 2017

Manage the work in your team's VSTS Git repo from the **Branches** view on the web. 
Customize the view to track the branches you care most about so you can stay on top of changes made by your team.

View your repo's branches by selecting **Branches** while viewing your repo on the web.    

![Access the branches view from your Git repo in Team Explorer](_img/branches/branches_nav.png)

## Organize your branches

The default **Mine** tab on the branches page shows branches you've created, pushed changes to, or set as a favorite, along with the default branch for the repo, such as `master`. The **All** tab lists all branches in the repo, and the **Stale** tab lists branches in the repo that haven't had any commits in three months or longer.

![My branches](_img/branches/my-branches.png)

If you don't see the branch you're looking for and you think it might have been deleted, see [Restore a deleted branch](restore-deleted-branch.md).

Filter the listed branches in any of the branch views by entering a specific name or pattern in the **Search all branches** box in the upper right.

![Search and filter branches viewed using the search all branches field](_img/branches/search_branches.png)  
If your team uses a forward slash separator in your branch names, you'll see a collapsible tree view for those branches.

>[!TIP]   
> Using a naming convention for your branches is highly recommended. For suggestions on how to name your branches, see [Adopt a Git branching strategy](concepts/git-branching-guidance.md).   

<a name="mark-favorites"></a>

### Add favorite branches

Add branches from the **All** view to the **Mine** view by selecting the star icon to favorite the branch. 
Mark multiple branches as favorites by selecting the star icon on the tree view next to a folder on the tree.
Remove favorites by toggling the star off or by selecting the **...** to the right of the star to open the branch context menu, then selecting **Remove from my favorites**.

![Set favorites in your branches to show them in the Mine view](_img/branches/branches_favorites.png)

<a name="review-updates"></a>

## Review updates to your branches

Each branch name has the name of the last contributor to the branch and a link to the latest commit on the branch. Select the date or time of the last commit to review the updates to the branch.
The branch view also shows the number of commits the branch is ahead of and behind the branch labeled **Compare**. Use this information to quickly check how far a branch has diverged from another.

If the branch has a pull request open, you can see its pull request ID. Select the pull request to open it up so you can review the details.

![See how far a branch is ahead of and behind the compare branch](_img/branches/branches_ahead_behind.png)

### Change the compare branch

The ahead and behind numbers listed for each branch are in comparison with the branch currently labeled **Compare** on the Branches page. Update your compare branch to see how far ahead or behind
your branches shown on the page are to another branch in your repo:

0. Select the **...** next to the branch you want to set as the baseline for comparison.   
0. Select **Set as compare branch**.

The **Compare** label will move to this branch and the other branches on the page will have the number of commits ahead/behind updated to reflect the new comparison.

## View branch history

Review the files in a branch or history by selecting the **...** icon next to the branch name and choosing **View files** or **View history**. **View files** opens up the **Files** view on the web so you can 
browse the files based on the most recent commit on the branch. **View history** shows each commit in the branch history. Select a commit from this history to see the file changes made in that commit.

![Access the view files and review history from the branches context menu](_img/branches/branches_context_menu.png)

## Change your default branch

Change the default branch used to merge code into when your team creates new pull requests.
This is useful when you want to use a branch other than `master` for the main line of development in your repo.

0. Select the settings icon while you have your team project open to bring up the project administration page.

   ![open up the administrative area of the VSTS web portal for your team project](_img/pull-requests/gear_icon_settings.png)
   
0. Select **Version Control**.

0. Select your Git repository. Your branches are displayed under your repo.   

0. Select the **...** next to the branch you want to set as default, then select **Set as default branch**.   

   ![Set a default branch for a Git repo in VSTS or TFS](_img/pull-requests/set_default_branch.png)


