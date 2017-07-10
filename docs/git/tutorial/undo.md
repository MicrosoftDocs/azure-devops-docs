---
title: Undo changes in your Git repo | Team Services & TFS
description: Undoing Changes with Git in Visual Studio Team Services using reset and revert.
ms.assetid: 02cdccb4-373d-4bd0-8053-6432f859e495
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 08/22/2016
---

#  Undo changes

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2015 & 2017

## Overview

When undoing changes in Git, first decide what type of changes you are looking to undo. These changes fall into three categories:

- Discard uncommitted changes to a file, bringing the file back to the version in the last commit.
- Reset your local branch to a previous commit.
- Revert changes pushed to a remote branch and shared with others.

> Avoid trouble: **Never change the commit history of branches shared with others**

If you just need to make small updates such as to fix a typo or small problem introduced in your last commit, consider [amending your previous commit](commits.md) or fixing the change
in a new commit instead of any of these other steps. 

## Discard uncommitted changes to a single file

Restore file contents back to a known good version, removing unwanted changes.

> Avoid trouble: These commands will overwrite your existing file changes.  If you think you might want these changes later, consider [stashing](howto.md#stash) them instead.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample2">How to undo file changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline2">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs2">Visual Studio</a></li>
</ul>

<div id="changeexample2" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs2" class="tab-pane fade in active">
<h6 style="padding-left:25px;">Visual Studio 2015 &amp; 2017</h6>
<ol><li>Open up the **Changes** view in Team Explorer.
<li>Under the **Changes** section, find the file that you want to restore to the previous version. If your change is staged, remove it from the **Staged Changes** section by right-clicking and selecting **Unstage**.
<li>Right-click that file and select **Undo Changes**.    
   <p>![Reset a single file with Git in Visual Studio](_img/vs_reset_single_file.gif)
</ol>

</div>

<div class="tab-pane fade" id="cmdline2" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

You can use the `checkout` command and give it the filename(s) to change. Use wildcards for undoing changes to multiple files.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git checkout <font color="#b5bd68">approuter.js</font>
</pre>

You can revert the file to the version in a specific commit by providing the commit ID:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git checkout <font color="#b5bd68">38035acd2 approuter.js</font>
</pre>

This differs from the earlier use of the `checkout` command used to swap to a different [branch](branches.md). 
Git will tell you if it is changing a file or swapping between branches in the output, and complain if it's not clear which one you are trying to do.

</div></div></div>

## Reset a branch to a previous state

Use `reset` to bring a branch in your local repository back to the contents of a previous commit. The most common use of the `reset` command is 
to simply discard all changed files since the last commit and return the files to the state they were in at the most recent commit.

> Avoid trouble: Don't use `reset` on branches shared with others. Use [revert](undo.md#revert) instead.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to discard changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<h6>Visual Studio 2015 &amp; 2017</h6>

<ol><li>Open up the **Changes** view in Team Explorer. 
<li>Select **Actions** and choose **View History** from the drop-down. 
<li>In the history window that appears, right-click the commit to reset the repo to and select **Reset** from the context menu. 
<li>Choose **Reset and delete changes...**.

   <p>![Reset a branch from Visual Studio](_img/vs_reset_branch.png)
</li></ol>
</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git reset --hard HEAD 
</pre>

The `--hard` part of the command tells Git to reset the files to the state of the previous commit and discard any staged changes. 
The `HEAD` argument tells Git to reset the local repository to the most recent commit. If you want to reset the repo to a different commit, provide the ID instead of HEAD.
</div></div></div>   

A `reset` affects all files in the current branch on the repository, not just those in your current directory. `Reset` only discards changes that haven't 
been committed yet.

<a name="revert"></a>

## Revert changes in shared commits

Use `revert` to undo the changes made in your commits pushed to shared branches. The `revert` command creates a new commit that undoes the changes on a previous commit. No history is rewritten
in a `revert`, making it safe to use when working with others.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample1">How to revert changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline1">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs1">Visual Studio</a></li>
</ul>

<div id="changeexample1" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs1" class="tab-pane fade in active">
<h6>Visual Studio 2015 &amp; 2017</h6>

<p>Open up the **Changes** view in Team Explorer. Select **Actions** and choose **View History** from the drop-down. In the history window that appears, right-click the commit to undo and
select **Revert** from the context menu.

<p>![Reset a branch from Visual Studio](_img/vs_revert_changes.png)
</div>

<div class="tab-pane fade" id="cmdline1" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git revert <font color="#b5bd68">8437fbaf</font>
&gt; git commit
</pre>

These commands will undo the changes made in commit 8437fbaf and create a new commit on the branch. The original commit at `commit_id` is still in the Git history.
`Revert` is flexible but it requires a branch history and commit identifiers to use. Review your [history](history.md) to find the commits you want to revert. 

</div></div></div>

