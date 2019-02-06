---
title: Git frequently asked questions
titleSuffix: Azure Repos
description: Tips, Tricks, and HOWTO to complete some less-common Git tasks.
ms.assetid: b1262306-214c-4422-8eda-d03d05825241
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


#  Frequently Asked Git Questions

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

### Is there an easy way to get a remote branch downloaded into my local repository?

As long as you have an `origin` repository configured (which happens automatically via [`git clone`](clone.md)), when you checkout a
 branch that doesn't exist locally Git will see if there is a remote branch with the same name. 
If there is, Git will create a local branch with a reference to the remote branch of that name. 
Then you can `git pull` to download the commits and have Git catch up on the branch history locally.

### How can I find out which branch I am working in?

`git branch` with no arguments shows the local branches and highlights the one you are checked out on. In Visual Studio, the status bar also displays the current branch
when you are working with a project stored in a local Git repository. 

### When should you make Git commits?
This is up to you and your team. An accepted practice is to make separate commits for logically separate changes. Think of commits as entries in a logbook-whenever you've made a change that's worth noting, record it in a commit.
A popular option is to allow everyone to commit locally as much as they want, but before they push the local commits, they squash them first through [rebasing](rebase.md).
This gives users a lot of personal flexibility to make frequent commits while keeping the commit history streamlined. 

### If every branch retains its full commit history even when merged into master, doesn't that make the commit history of master hard to follow over time?

Large projects with many commits and a range of contributors can result in commit histories for the `master` branch that represent 
the development history of the topic branches merged into `master` more than the development history of the overall project. 
Git provides a facility for condensing commits on branches through [squashing commits and rebasing](rebase.md). 
Squashing commits makes the commit history on a branch less verbose and makes for a simpler commit history on the master branch once merged.

### How can I find out who made a specific change to a file in my Git repository?

The `git blame` command can quickly track down who made a particular change to a file. From your local repository, you can run `git blame` with the `-L`
parameter specifying which lines of interest. `Blame` produces formatted output showing the commit that last updated the line as well as the name of the person 
who made the commit. 

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;">
&gt; git blame <font color="#b5bd68">foo.js -L 20,+40</font>  # show the blame output for the next forty lines starting at line 20
<font color="#b5bd68">
215d1108 (Francis Totten 2015-11-21 09:54:23 -0800 20) line 20 of the code
215d1108 (Francis Totten 2015-11-21 09:54:23 -0800 21) line 21 of the code
215d1108 (Francis Totten 2015-11-21 09:54:23 -0800 22) line 22 of the code</font>
</pre>

`Blame` does the searching through the commit history for you. You can also go back through the a file's history in the web portal as well for a different approach to determining
who made a change and when. Go into the Code Explorer for your repository and branch, then click on the file of interest. Azure Repos will show a complete
commit history for that file on the current branch.

### I've made changes to some files and now I can't checkout to a different branch or rebase my work.
Checking out to a different branch in Git will affect the state of files on your filesystem as Git uses the commit history to make sure you are working with the files
that represent the state of your branch. If you attempt to change branches while you have uncommitted changes, those changes would be overwritten during the checkout. Git doesn't
want you to accidentally lose your changes, so it prevents the checkout from happening. You can resolve this by:

----
- Abandoning the changes and return to the most recent commit. See [undoing changes in Git](undo.md) for instructions on how to roll back to the most recent commit.  
- Committing the changes. See [saving your work in Git with commits](commits.md). 
- [Stashing](howto.md#stash) your current work, saving the changes for later and cleaning up the workspace to the last commit.    

---

<a name="stash"> </a>
### I've done some work but need to swap to something else. How can I save my work for later without committing the changes?

The problem with these options is that sometimes you want to keep the changes, but not commit them because they are not at a point where you are comfortable doing so. Git 
provides a compact way of doing this using `stash`. Stash takes the current staged and unstaged changes in your branch and saves the work, then returns your branch back to the state of
the last commit. You can change to the other branch, do your work, then when you return to this branch run `stash apply` to restore the changes.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git stash
<font color="#b5bd68">Saved working directory and index state WIP on feature1: be26067 updated endpoint docs
HEAD is now at be26067</font>
</pre>

Once you run `git stash apply` the most recently stashed changes will be applied to your current branch. If there is a conflict applying the stashed changes, 
`stash` will restore the changes for the files that do not conflict and create conflict markers in the files that do conflict for you to resolve. You should 
[merge](merging.md) the changes manually in this case.

Once you are done with the stash, delete it with `git stash drop`. This will remove the last set of stashed changes.

A final note about stash is that you can have multiple stashes, but doing so requires more manual manipulation as you have to explicitly apply and drop stashes. You can read more about
this from in the [Git Stash documentation](http://git-scm.com/book/en/v1/Git-Tools-Stashing).


### How can I change the default editor that is used when working with Git command line tools?

By default, command line Git will use a command-line editor when asking for commit messages, performing rebases, and other work that requires additional information to 
complete. The default editor is configured using `git config`:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;">
&gt; git config core.editor _path_to_editor_ _options_to_editor_
</pre>

Note that Git For Windows makes it very easy to set notepad as the editor:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;">
&gt; git config core.editor notepad
</pre>

Which will configure Windows' Notepad to edit Git information as needed and properly pass through the text from Git to Notepad. You can also specify 

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;">
&gt; git config format.commitMessageColumns 72 
</pre>

To keep the text columns in the commit messages to the preferred 72 and line wrap after hitting that character limit on a line.

### How can I change the username and email displayed in my commits?

Git puts a user name and email address information inside each commit, and Azure Repos uses this information when viewing commits and when working with pull requests.
If you are working on the command line, you can update the name and email information displayed using the `git config` command:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;">
&gt; git config --global user.email <font color="#b5bd68">"frank@fabrikam.com"</font>
&gt; git config --global user.name <font color="#b5bd68">"Francis Totten"</font>
</pre>

Note that the `--global` option will set the email and name included in commits for all Git repositories on this system. If you want to change the settings for a single
repository, you must change to the directory where the Git repository is located and run the above commands without the `--global` flag.

You can also change the name and email settings from Visual Studio. In Team Explorer, choose **Settings** and under **Git**, click the **Global Settings** or **Repository Settings** link.  

