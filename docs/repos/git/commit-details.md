---
title: View commit details
titleSuffix: Azure Repos
description: View Git commit details in Visual Studio
ms.assetid: 82aa7c10-c304-400a-84c9-d5ed87d66180
toc: show
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 03/14/2018
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# Commit details


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
 

The commit details view provides information regarding all the changes made as part of a commit. You can view additional metadata associated with the commit and also perform certain actions to revert or cherry pick the commit. <!-- c123: Images need updated. -->

::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/commit-details/git-repo-file-history.png" alt-text="Files, Commits page example":::
::: moniker-end
::: moniker range="<= azure-devops-2019"
![Commit details page](media/commit-details/1Commitdetails.png)
::: moniker-end


## What information do you see on the commit details page?

* Commit ID and commit message - You can view the commit ID and commit message of the commit. You also have the option to copy the commit ID or commit message by clicking on the **Copy** buttons.
	
* Author details - You can also view details about the person making the commit in the author drop-down menu. Select **Pushed on** link to access the associated push details  

    ![Author page](media/commit-details/2AuthorDetails.png)

* Associated pull requests - Once you navigate from the [commit history](commit-history.md) to the commit details, the context of the branch from the commit history page is retained. In the following example you can see that commit #33 brought this commit to the main branch. You can also view all the associated pull requests for this commit, which are all the pull requests that brought this commit to one branch or another.

    ![Associated pull requests](media/commit-details/3AssociatedPRDetails.png)

* Associated work items - You can also view all the work items associated with this commit in the work items dropdown.

    ![Associated work items](media/commit-details/4AssociatedWorkItems.png)
	
* Build status - You can also review the build status associated with the commit.

    ![Build status](media/commit-details/4BuildStatus.png)

		
## What actions can you perform?

You can perform the following actions on the commit details page. 

* Search in branches and tags - Click the **Search in branches** button to search a commit in a particular branch or tags. You can view whether a particular branch or a tag includes this commit or not.
	
    ![Search in branches and tags](media/commit-details/6SearchcommitsinBranchesandTags.png)
    
* Cherry pick - Click on **Cherry-pick** to cherry pick a commit and port the changes to another branch. 
	
    ![Cherry pick](media/commit-details/7CherryPick.png)
 	
* Revert - Click on **Revert** to revert the changes of a commit . A topic branch is created with the reverted changes and then you will be prompted to create a pull request to the target branch.
	
    ![Revert](media/commit-details/8Revertcommit.png)
 	
* New branch - Click on **New branch** to create a new branch from a commit.  
	
    ![Create branch](media/commit-details/9CreateBranch.png)
 	
    
## What are the changes included in the commit?

The source explorer allows you to select a file or a folder to view changes associated with a commit.

* Diff to parent - Click on **Diff on parent1** in the **Source Explorer** pane to view the difference between the current commit and its parent commit.  

    ![Diff to parent](media/commit-details/10DifftoParent.png)
 	
* The file explorer view provides all the capabilities that we get in the file explorer view i.e. you can
  * browse files in a side by side or inline diff view 
  * use the navigation keys to browse the next set of changes
  * preview the files
  * compare file diff for previous commits
		
    ![Diff view](media/commit-details/11SidebySide.png)
 	


