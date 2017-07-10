---
title: Save your changes with Git commits (command line) | Team Services & TFS
description: Use Git commit to save your work into Git version control with Visual Studio or the command line.
ms.assetid: 2e4cdf2a-927e-4bfa-92b8-b2dc9d5919e7
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article 
ms.manager: douge
ms.author: sdanie
ms.date: 02/24/2017
ROBOTS: NOINDEX, NOFOLLOW
layout: HubPage
---

#  Save work with commits (command line)

###### Git command line

## Save work with commits

Git does not automatically snapshot your code as you make edits to files in your repo. You must tell Git exactly which changes you want to add to the next snapshot by staging those changes.
After staging your changes, create a commit to save the snapshot to your repo. 

Git tracks file changes in your repo as you work, and separates the files in your repo into three categories:

- Unmodified files – These files haven’t changed since your last commit.
- Modified files – These files have changes since your last commit, but you aren't yet staged for the next commit.
- Staged files – These files have changes that will be added to the next commit.   

![Lifecyle of files in your repo between the three states](_img/git_file_status_lifecycle.png)   

When you create a commit, only the staged changes and unchanged files are used for the snapshot. 
Changes to unstaged but modified files are kept, but the commit uses the unmodified version from the previous commit in its snapshot.
   
Commits are created in your local Git repository, so you don't have to worry about your changes being perfect. 
Continue to create commits as you work, [pushing](pushing-cmdline.md) your changes to then team when they are ready to share.

<li><p><a data-toggle="collapse" href="#expando-git-cmdline-tutorial">This article is part of the command line Git tutorial. Expand to view more Git tutorial steps &#x25BC;</a></p>
<div class="collapse" id="expando-git-cmdline-tutorial">
<ul>
<li><a href="gitworkflow-cmdline.md">Learn about Git</a></li>
<li><a href="creatingrepo-cmdline.md">Create a new repo</a></li>
<li><a href="clone-cmdline.md">Clone an existing repo</a></li>
<li><a href="commits-cmdline.md">Save work with commits (this article)</a></li>
<li><a href="branches-cmdline.md">Create work in branches</a></li>
<li><a href="pushing-cmdline.md">Share code with push</a></li>
<li><a href="pulling-cmdline.md">Update code with fetch and pull</a></li>
<li><a href="pullrequest-cmdline.md">Review code with pull requests</a></li>
<li><a href="rebase-cmdline.md">Apply changes with rebase</a></li>
<li><a href="cherry-pick-cmdline.md">Copy changes with cherry-pick</a></li>
<li><a href="merging-cmdline.md">Resolve merge conflicts</a></li>
<li><a href="undo-cmdline.md">Undo changes</a></li>
<li><a href="ignore-files-cmdline.md">Ignore files</a></li>
<li><a href="history-cmdline.md">Review history</a></li>
<li><a href="howto-cmdline.md">Frequently asked questions</a></li>
</ul>
</div>
</li>

### Video overview

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Commits/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

## What's in a commit

Commits include the following information:

---
- A snapshot of the files saved in the commit. Git snapshots the contents of all files in your repo at the time of the commit&mdash;this makes switching versions very fast and helps Git [merge](merging-cmdline.md) changes.
- A reference to the parent commit(s). Commits with multiple parents occur when [branches](branches-cmdline.md) are merged together.
- A short and to the point message describing the changes in the commit. You enter this message when you create the commit.  

---

Git uses the references between commits along with the file snapshots to maintain a complete record of development in your repo.

[Learn more about Git history](https://www.visualstudio.com/learn/understand-git-history/) and how to [review history](history-cmdline.md) to investigate changes made to your code.

<a name="stage-your-changes-and-commit"></a>

## Stage your changes

Git does not automatically add changed files to the snapshot when you create a commit. 
You must first stage your changes to let Git know which updates you want to add to the next commit. 
Staging lets you to selectively add files to a commit while excluding changes made in other files.

[Ignore](ignore-files-cmdline.md) temp files, logs, and other files that might change on your local machine but you don't want to add to version control.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to stage changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade">
<h6>Visual Studio 2015 (Update 2) and 2017</h6>
   
<p>Visual Studio keeps track of file changes to your project as you do your work. When you are ready to stage changes, open up the **Changes** view in Team Explorer. 
<p>Stage individual file changes by right-clicking a file in the **Change** view and selecting **Stage**. 
Staging a change creates a **Staged Changes** section in Team Explorer. Only changes in the **Staged Changes** section are added to the next commit. 
<p>![Stage files for your next commit using Team Explorer](_img/vs-stage-files.gif)

<blockquote> The Team Explorer **Changes** view had **Included Files** and **Excluded Files** sections before Visual Studio 2015 Update 2. The **Changes** view was updated in Visual Studio 2015 Update 2 for better
compatibility with other Git tools.</blockquote>
   
<p>Stage multiple files or folders by selecting them then right-clicking and choosing **Stage** or by dragging and dropping files from the **Changes** list into the **Staged Changes** list. 

<p>Ignore files by right-clicking and selecting **Ignore this local item** or **Ignore this extension**. This adds an entry to the the file to the .gitignore file in your local repo. If the ignored file was added 
to your repo in an earlier commit, ignoring the file will not remove it from the **Changes** list. See [excluding and ignoring files section](ignore-files.md) for more information on how to ignore files already tracked by Git.   
</div>

<div class="tab-pane fade in active" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

Stage all pending changes in your repo with the following command:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git add --all
&gt; git status
</pre>   

<p>The `--all` flag stages all changes made in the repo since the last commit. Note that adding all changes might include files you don't want to commit to version control
such as IDE project files, build outputs, and editor autosaves. Tell Git to [ignore](ignore-files-cmdline.md) stop tracking these files by setting up a `.gitignore` for your repository.
You can find a large, up-to-date set of gitignore configurations for a variety of tools in the [GitHub gitignore repository](https://github.com/github/gitignore).

<p>If you need to selectively stage file changes, you can use the Git `add`, `rm`, and `mv` commands to add changes and updates, remove files, and move/rename files respectively. 
See the [tutorial command reference](../command-prompt.md#commits) and the [Git command line reference](https://git-scm.com/docs) for more information on using these commands.

<p>Run the `status` command after you stage files to review your changes before making a commit. Checking `status` before committing is a great way to avoid trouble.

</div></div></div>

## Create a commit

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample2">How to commit your changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline2">Command Line</a></li>
</ul>

<div id="changeexample2" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs2" class="tab-pane fade">

<p>Open the **Changes** view in Team Explorer.

<p>Enter a commit message describing your changes and select **Commit Staged** to create a new commit that includes the changes listed in the **Staged Changes** section.

   <p>![Create a commit from staged items in Visual Studio](_img/vscommit.gif) 

<p>Skip staging files if you just want to commit all changes listed by entering a commit message and selecting **Commit All** when you have no staged changes.
<p>![Commit all changes without staging them first in Visual Studio](_img/vscommitall.gif)

<p>When you commit in Visual Studio you can [push](pushing-cmdline.md) the commit and [sync](pulling-cmdline.md) the branch with a remote repository. 
These options are available in the drop-down on the **Commit** button.   
</div>

<div class="tab-pane fade in active" id="cmdline2" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git status
&gt; git commit -m <font color="#b5bd68">"short but descriptive message"</font>
</pre>

<p>Run the `status` command before `commit` to review your staged and unstaged changes. Checking `status` before creating a commit helps avoid trouble.

<p>The `commit` command runs with the `-m` flag, which allows you to pass a message through the command line. If you don't provide this, Git will open up an editor in the
terminal so you can enter a commit message.
</div></div></div>   

## Update your last commit

Amend your last commit to correct small errors without making a new commit.

> Caution: Do not amend [pushed](pushing-cmdline.md) commits. If you need to update pushed code, [undo the changes with revert](undo-cmdline.md) or create and push another commit.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample1">How to amend the last commit</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline1">Command Line</a></li>
</ul>

<div id="changeexample1" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs1" class="tab-pane fade">
<h6 style="padding-left:25px;">Visual Studio 2015 Update 2</h6>

<ol><li> Open the **Changes** view in Team Explorer and stage your updated changes. You can amend just the commit message by leaving the staged changes empty.
<li>Enter the updated commit message and select **Amend Previous Commit** from the **Actions** drop-down.   
 <p>![Amend a commit in Visual Studio](_img/vs_amend_commit.png)
</ol>

</div>

<div class="tab-pane fade in active" id="cmdline1" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol><li>Stage your changes using `git add` just as you would if you were creating a new commit.
<li>Use the `--amend` option to the `commit` command to update the most recent commit with the staged changes and updated description.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git commit -m --amend <font color="#b5bd68">"short descriptive message"</font>
</pre></ol>

</div></div></div>

## What's next

- [Create work in branches](branches-cmdline.md).
