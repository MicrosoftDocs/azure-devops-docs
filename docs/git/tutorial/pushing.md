---
title: Sync your changes to a remote Git repo | Team Services & TFS
description: Using Git Push to share code with Git.
ms.assetid: 6c388abd-1b63-4957-9814-9ec5f104fa5b
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 08/04/2016
---

#  Share code with push

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2015 & 2017

## Overview

Share changes made in [commits](commits.md) and [branches](branches.md) using the `push` command. 
Push your branches to the remote repository, where Git takes the commits and adds them to an existing branch on the remote or creates a new branch with the same commits as your local branch.

Git makes sure that pushed changes are consistent with the remote branch so others can [pull](pulling.md) your commits and merge them into their own local copy of the branch. 
Pushed branches that have finished work are reviewed and merged into the main branch of the your repo through a [pull request](pullrequest.md).

## Video overview
   
<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Push/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

<a name="share-your-code-with-push"></a>

## Share your code with push

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to push changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<h6>Team Services | TFS 2015 &amp; 2017 | Visual Studio 2015 &amp; 2017</h6>
 
<p>In Team Explorer, open the **Sync** view. The view lists outgoing commits and will present you with one of two links to push them to your remote repo:
<ul>
<li> **Publish** when there is not a branch on the remote repo associated with the current local branch. This will create a branch with the same name on the remote repo
and push the commits to it. Later you will **Push**, not publish changes when using this branch since the relationship between the branch on the local branch and the remote repo exists. 
<li> **Push** when there is a relationship between the local branch and  the remote repo. Clicking this will `push` the commits to the remote branch.    

<p>![Pushing Changes with Git in Visual Studio](_img/vspush.gif)
</ol>
</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<p>The `push` command will update the remote branch on `origin` with the commits from your local branch.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git push
<font color="#b5bd68">Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 861 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Analyzing objects... (3/3) (114 ms)
remote: Storing packfile... done (62 ms)
remote: Storing index... done (53 ms)</font>  
</pre>

If the remote branch doesn't exist, run the following to create a remote branch on `origin`.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git push -u origin <font color="#b5bd68">users/frank/bugfix</font>
</pre>

<p> Your commits on your local branch are added to the branch on `origin`, and a upstream tracking relationship will be set up in
Git so that next time you `push` (or `pull`) from this local branch, you won't have to specify the remote branch name.

</div></div></div>

### Resolve merge conflicts before pushing   

If there are [conflicts](merging.md) between your local commits on the commits on the remote branch, you must first resolve these conflicts before you can push your changes. 
You should [pull](pulling.md) the changes from others first, resolve the conflicts and commit the changes, then re-attempt the `push`.

## What's next

[Review code with pull requests](pullrequest.md) or [update code with fetch and pull](pulling.md)