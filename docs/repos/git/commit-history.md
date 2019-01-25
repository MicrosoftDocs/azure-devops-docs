---
title: View commit history
titleSuffix: Azure Repos
description: View Git commit history in Visual Studio
ms.assetid: f1ceefae-192f-49ee-af52-b9a29852bf85
toc: show
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sancha
author: steved0x
ms.topic: reference
ms.date: 03/14/2018
monikerRange: '>= tfs-2017'
---


# Commit history

#### Azure Repos | TFS 2018 | TFS 2017 Update 1

## Commit history view

The commit history view shows you the history of all the commits for a particular branch in a repository. By default, all results are shown in reverse chronological order. 
 
![Commit history page](_img/commit-history/1-CommitHistory.png)

For each commit, you can view the following key elements:

* Author details - You can view the author and committer of each commit along with the associated time. 

    ![Author details for a commit](_img/commit-history/2-AuthorDetails.png)

* Complete commit message - If the commit message is too long, you can click on the down-arrow to expand the commit message to view the entire commit message. 

    ![Expanded commit message](_img/commit-history/3-CommitMessage.png)
	
* Copy commit SHA - You can copy the 40 character commit SHA by clicking on the **Copy full SHA to clipboard** button. You can click on a commit ID or commit message to open the commit details page.
	
    ![Copy 40 character commit ID](_img/commit-history/4-CopyCommitSHA.png)	
	
* Build and PR information - You can view the pull request that brought this commit to the branch selected on the page, and view the build status of the current commit.

    ![Build and PR details on commit history](_img/commit-history/5-BuildandPRInfo.png)

* You can select a repository from the repository picker to view the history of a particular repository.

    ![repository picker](_img/commit-history/6-RepoPicker.png)

* You can select a particular branch or tag from the branch picker to view associated history.

    ![Branch picker](_img/commit-history/7-BranchPicker.png)

* You can further filter the results by selecting a particular file from the code explorer. 

    ![Code explorer](_img/commit-history/8-CodeExplorer.png)

* You can also find a file or folder to view its history. In the following example, when you type "get", you see results of all files and folders in the repository that contain the word **src**.

    ![Find a file](_img/commit-history/9-FindaFile.png)


## History result filtering

You can filter the results using the following advanced filtering modes: **simple history**, **first parent**, **full history**, and **full history with simplified merges**. For more information, see [advanced git history options](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History).

![Advanced filters for git log](_img/commit-history/10-AdvancedFilter.png)

You can also filter commits by authors. You will see authors of most recent commits in the author filter drop down. In case you are not able to find an author in the drop down, then you can type the author name or email address and search for all commits by that author.

![Author filter](_img/commit-history/11-AuthorFilter.png)

In case you want to view commits that were authored between any two dates, you can use the **From date** and **To date** filter to scope down the list of commits.

![Date filter](_img/commit-history/12-DateFilter.png)

## Commit search

You can also search for a commit using its Commit ID. You can search for all commits starting with a commit ID. If you enter the 40 character Commit ID then you will be redirected directly to the commit details page.

![Commit search page](_img/commit-history/13-SearchCommit.png)

## Commit for file renames

In case a file or folder is renamed, you will see all commits until the file or folder got renamed. You will also see a link suggesting **Show rename history**. 

![Show rename files or folder history](_img/commit-history/renamefiles.png)

When you click on **Show rename history** you can view all the commits of the file or folder before the rename.

![Showing commits before file or folder rename](_img/commit-history/Showrenamefiles.png)





