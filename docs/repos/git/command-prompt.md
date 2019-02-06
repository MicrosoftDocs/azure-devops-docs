---
title: Git command reference
titleSuffix: Azure Repos
description: Commands reference for common Git tasks in Visual Studio or the command line
ms.assetid: FAED51BE-2CB0-46DE-8C72-E4EEF6CB8827
toc: show
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


#  Git command reference 
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 Update 2

## Overview

<a name="set_up"></a>
<a name="pat"></a>

Visual Studio's [Team Explorer](../../user-guide/work-team-explorer.md) lets you perform most common Git tasks you'll need for your day to day work right from Visual Studio. 
Open Team Explorer through the **View** menu in Visual Studio, or with the **Ctrl+\, Ctrl+M** hotkey.   

Team Explorer and the Git command line work great together. When you make updates and perform commands through one interface, you'll see those changes reflected in the other.

[Git Installation instructions](/azure/devops/learn/git/install-and-set-up-git) are available if you don't have Git installed on your computer.

> [!TIP]
> Windows users: If you aren't using Visual Studio, installing [Git for Windows](https://git-scm.com/download/win) will set up the [Git credential manager for Windows](set-up-credential-managers.md). The credential manager makes it easy to authenticate with Azure Repos.

While in Visual Studio, open a command prompt in your repo from Team Explorer's **Connect** view. Right-click on your local repo and select **Open Command Prompt**
   
![Open a command prompt to a repo from inside Visual Studio](_img/command-prompt/open_cmd_prompt_repo_vs.png)

> [!IMPORTANT]
> Some commands require having [specific Git permissions](../../organizations/security/set-git-tfvc-repository-permissions.md#git-repository) in Azure Repos to complete.

## Repos

| How do I ? | Git command line | Visual Studio
|------------|-------------|---------------|
| Create a repo in a new folder | git init *foldername* | Select the **Connect** button ( ![Team Explorer plug icon to open the Connect page](_img/command-prompt/te_connect_icon.png) ) in Team Explorer to open the **Connect** view, then select **New** under **Local Git repositories**  
| Create a repo with code in an existing folder | git init *foldername*<br>git add --all<br>git commit -m "Initial commit" | Create the repo from the command line, then open Team Explorer's **Connect** view and select **Add** under **Local Git repositories**
| Create a repo from an existing Visual Studio solution | git init *foldername*<br>cd *foldername*<br>git add --all<br>git commit -m "Initial commit" | Open the solution and select **Publish** ( ![Publish button on the status bar in Visual Studio 2015 Update 2](_img/share-your-code-in-git-vs/publish_status_bar.png)  ) from the status bar in the lower right. 
| Create a new repo in your Project | Not applicable | From the web, select **Repos** (or **Code** if you haven't enabled the new navigation preview), then select the drop-down next to the current repo name and choose **New Repository...**    
| Clone a repo into a local folder | git clone *URL* *foldername* | Select **Clone** under **Local Git repositories** in Team Explorer's **Connect** view 
| Clone a repo in your Project | git clone *URL* *foldername* | Open the **Connect** view in Team Explorer and right click the Git repo in your Project under the account name. Select **Clone...**    
| Add an existing repo to Visual Studio | Not applicable | Open the solution file in Visual Studio (this will automatically add the repo to Team Explorer) or select **Add** under **Local Git repositories** in the **Connect** view 
| Delete the Git repo and history, but keep the current version of the files | Delete the hidden .git folder created at the root of the repo | Delete the hidden .git folder created at the root of the repo from Windows Explorer or the command line
| Delete a local repo and all files | Delete the folder containing your repo from your computer's filesystem |  Close any open solutions using files in the repo, then delete the folder containing your repo from your computer's filesystem. 
| Delete a repo in your Project | Not applicable |  Select the settings icon ( ![Gear icon on the top navigation bar in Azure DevOps Services](_img/command-prompt/settings_icon.png) ) in Azure DevOps Services/TFS, then select the **Version Control** tab. Find the Git repository to delete and select the **...** next to the name. Choose **Delete Repository** from the options.
| Add a remote | git remote add *name* *url* | Open the repository using the **Connect** view in Team Explorer, then open the **Settings** view in Team Explorer. Select **Repository Settings**, and select **Add** under **Remotes** 
| Update a remote | git remote set-url *name* *url* |  Open the repository using the **Connect** view in Team Explorer, then open the **Settings** view in Team Explorer. Select **Repository Settings**, and select **Edit** under **Remotes** 

Learn more:  

[Create a new repo](creatingrepo.md)
[Clone an existing repo](clone.md)   
[Share your code in Git with the command line](share-your-code-in-git-cmdline.md)   
[Share your code in Git with Visual Studio 2015](share-your-code-in-git-vs.md)   
[Share your code in Git with Visual Studio 2013](share-your-code-in-git-vs-2013.md)   
[Create a new repo in your Project](create-new-repo.md)   
[Delete a repo in your Project](delete-existing-repo.md)

## Branches

| How do I ? | Git command line | Visual Studio |
|------------|-------------|---------------|
| Create a new branch | git branch *branchname* | Open the **Branches** view in Team Explorer, then right-click a branch and choose **New Local Branch From...**   
| Swap to a different branch | git checkout *branchname* | Open the **Branches** view in Team Explorer, then double click a local branch. Alternatively, click the current branch name from the status bar and select a different branch.
| Create and switch to a new branch | git checkout -b *branchname* | Open the **Branches** view in Team Explorer, then right-click a branch and choose **New Local Branch From...**
| Delete a local branch | git branch -d *branchname* | Open the **Branches** view in Team Explorer, then right-click the branch and select **Delete**. You must be checked out to a different branch than the one you want to delete.
| Delete a remote branch | git push origin --delete *branchname* | Open the **Branches** view in Team Explorer, expand the remote that has the branch you want to delete. Right-click the remote and select **Delete Branch from Remote**
| Lock a branch, preventing updates to it  | From the web, select the **Branches** tab while viewing your repo. Select the **...** next to the branch you want to lock and choose **Lock**. Unlock the branch with **Unlock** | Same as command line
| Set a default branch in your Azure DevOps Services/TFS repo | Select the settings icon on the web ( ![Gear icon on the top navigation bar in Azure DevOps Services](_img/command-prompt/settings_icon.png) ), then select the **Version Control** tab. Select your Git repository, then select the **...** next to the branch name and choose **Set as default branch** | Same as command line 
| Set a compare branch for pull requests in your Azure DevOps Services/TFS repo | From the web, select the **Branches** tab while viewing your repo. Select the **...** next to the branch you want to lock and choose **Compare branch** | Same as command line

Learn more:  

[Create and manage your work in branches](branches.md)   
[Managing your Git branches in Azure DevOps Services/TFS](manage-your-branches.md)   
[Delete a Git branch on your Azure DevOps Services/TFS repo](delete-branch.md)   
[Lock and unlock an Azure DevOps Services/TFS branch](lock-branches.md)

## Commits

| How do I ? | Git command | Visual Studio |
|------------|-------------|--------------|
| Create a new commit | git commit -m "*message*" |  Open the **Changes** view in Team Explorer. Stage changes by right-clicking on the modified files and selecting **Stage**. Enter a commit message and select **Commit Staged**.
| Amend the last commit with staged changes | git commit --amend -m "Updated message" |  Open the **Changes** view in Team Explorer, stage your changes, then select **Amend Previous Commit** from the **Actions** drop-down.
| Stage all file changes | git add --all | Open the **Changes** view in Team Explorer. Select the **+** icon in the **Changes** list to stage all changes for the next commit.
| Stage a specific file change | git add *filename* |  Open the **Changes** view in Team Explorer. Stage changes by right-clicking on the changed file and selecting **Stage**.
| Review unstaged changes | git status --untracked | Open the **Changes** view in Team Explorer. Unstaged changes are listed under **Changes** section. 
| Delete a file | git rm *filename*<br>git commit -m "Deleted *filename*" | Delete the file through Solution Explorer, the command line, or any other means. Right-click the deleted file in Team Explorer's **Changes** view and select **Stage** . Select **Commit Staged** to commit the deletion.
| Move a file  | git mv *filename*<br>git commit -m "Moved *filename*" | Move a file from one location to another in your repo through Solution Explorer, the command line, or any other means.  Right-click the moved file in Team Explorer's **Changes** view and select **Stage** . Select **Commit Staged** to commit the move.
| Tag a commit | git tag -a *tagname* -m "*description*" | Open the **Changes** view in Team Explorer, then choose **View history..."** from the **Action** drop-down. Locate the commit in the History view, then right-click and select **Create Tag** 

Learn more:   

[Save your work with commits](commits.md)

## Compare files and versions

| How do I ? | Git command | Visual Studio |
|------------|-------------|--------------|
| Compare the current contents of a single file and the contents in the last commit | git diff HEAD *filename* | Right-click on the change in the **Changes** view in Team Explorer and select **Compare with unmodified**. 
| Compare your current version with a branch | git diff *branchname* |  Right-click on a file in Solution Explorer and select **View History...**, then select both on the latest commit on your current branch and the latest commit on the remote branch. Right-click and select **Compare**
| Compare changes between two branches | git diff *branchname1* *branchname2*  | Right-click on a file in Solution Explorer and select **View History...**, then select the most recent commits for both branches. Right-click and select **Compare**

Learn more:   

[Compare versions and review history](review-history.md)

## Sync changes

| How do I ? | Git command | Visual Studio |
|------------|-------------|--------------|
| Download new branches and commits from a remote repo, but do not merge them into your local branches | git fetch | Open the **Sync** view from Team Explorer and select **Fetch**.
| Merge updates from a remote repo into your local repo | git pull *remote* *branchname* | While working on the branch in your local repo, open the **Sync** view in Team Explorer, then select **Pull**. 
| Publish a local branch to a remote repo | git push -u *remote* *branchname* | Open the **Sync** view in Team Explorer and select **Publish** under **Outgoing Commits**.
| Synchronize your local branch with a remote branch, pushing your local changes and pulling remote ones | git pull *remote* *branchname*<br>git push -u *remote* *branchname* | Open the **Sync** view in Team Explorer. Select **Sync**.
| Force push a branch, rewriting the remote branch history with the history of your current branch | git push --force -u origin *remote_branchname* | Use command line   
   
Learn more:   
 
[Share code with push](pushing.md)   
[Update your code with fetch and pull](pulling.md)   
[Resolve merge conflicts](merging.md)

## Merge and rebase

| How do I ? | Git command | Visual Studio  |
|------------|-------------|--------------|
| Merge a branch into the current branch | git merge *branchname* | In the Team Explorer **Branches** view, right-click the branch you want to merge and select **Merge From..**. Verify the options set and select **Merge**.
| Merge a remote branch into the current branch | git pull origin *branchname* | In the Team Explorer **Branches** view, right-click the remote branch you want to merge and select **Merge From..**. Verify the options set and select **Merge**.
| Rebase your current branch onto the history of another branch | git rebase *branchname* |  In the Team Explorer **Branches** view, right-click the branch you want to rebase your current branch changes onto and select **Rebase Onto.."**
| Do an interactive rebase of the last *n* commits | git rebase -i HEAD~*n* (Linux and macOS)<br>git rebase -i "HEAD^*n*" (Windows) | Use command line
| Cherry-pick a commit into the current branch | git cherry-pick *commitID* | Open the **Changes** view in Team Explorer, then choose **View history..."** from the **Action** drop-down. Locate the commit in the History view, then right-click and select **Cherry-pick** 
   
Learn more:   

[Resolve merge conflicts](merging.md)   
[Catch up and replay changes with rebase](rebase.md)   
[Copy changes with cherry-pick](cherry-pick.md)

## Undo

> [!WARNING]
> If you are not an experienced Git user, exercise caution when using the `reset` command. [Learn more](undo.md)

| How do I ? | Git command | Visual Studio |
|------------|-------------|--------------|
| Revert all changes and roll back to the most recent commit | git reset --hard HEAD | Open the **Changes** view in Team Explorer. Select **Actions and choose **View History** from the drop-down. Right-click the commit where the branch is currently located and select **Reset and Delete changes....** 
| Revert staging of files, but keep file changes | git reset --mixed HEAD | Open the **Changes** view in Team Explorer. Select **Actions and choose **View History** from the drop-down. Right-click the commit where the branch is currently located and select **Reset and Keep changes....** 
| Delete untracked files | git clean -f | In the **Changes** view in Team Explorer, right-click the files to remove under **Changes** marked with **[add]** and select **Delete**.
| Reset your local branch to the most recent commit on a remote branch | git reset --hard *remote*/*branchname*<br>(for example, git reset --hard origin/master) | Right-click the branch from Team Explorer's **Branches** view and select **Reset and Delete changes....**
| Revert a commit pushed to a remote repository | git revert *commitID* | Open the **Changes** view in Team Explorer. Select **Actions and choose **View History** from the drop-down. Right-click the commit to revert and select **Revert**.
   
Learn more: 
   
[Undo changes and commits](undo.md)
