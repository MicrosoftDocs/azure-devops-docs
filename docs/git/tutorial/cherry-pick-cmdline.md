---
title: Copy changes to a branch with cherry-pick (command line) | Team Services & TFS
description: Copy and port changes from one branch to another in Git with cherry-pick,
ms.assetid: 09f07728-57db-49d3-a48b-460c56a55f45
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: sdanie
ms.date: 02/24/2017
ROBOTS: NOINDEX, NOFOLLOW
layout: HubPage
---

# Copy changes with cherry-pick (command line)

###### Git command line

## Copy changes with cherry-pick

Copy commits from one branch to another using cherry-pick. Unlike a merge or rebase, cherry-pick only brings the changes from the commits you select, instead of all the changes in a branch.

Cherry-pick is a great way to tackle these common problems:

----
- Accidentally committing on the wrong branch. Cherry-pick the commit(s) over to the correct branch and then reset the original branch to the previous commit.
- Pulling out a set of commits made in a feature branch so you merge them back to your `master` branch sooner.
- Porting in specific commits from the `master` branch without rebasing your branch.   

---

<li><p><a data-toggle="collapse" href="#expando-git-cmdline-tutorial">This article is part of the command line Git tutorial. Expand to view more Git tutorial steps &#x25BC;</a></p>
<div class="collapse" id="expando-git-cmdline-tutorial">
<ul>
<li><a href="gitworkflow-cmdline.md">Learn about Git</a></li>
<li><a href="creatingrepo-cmdline.md">Create a new repo</a></li>
<li><a href="clone-cmdline.md">Clone an existing repo</a></li>
<li><a href="commits-cmdline.md">Save work with commits</a></li>
<li><a href="branches-cmdline.md">Create work in branches</a></li>
<li><a href="pushing-cmdline.md">Share code with push</a></li>
<li><a href="pulling-cmdline.md">Update code with fetch and pull</a></li>
<li><a href="pullrequest-cmdline.md">Review code with pull requests</a></li>
<li><a href="rebase-cmdline.md">Apply changes with rebase</a></li>
<li><a href="cherry-pick-cmdline.md">Copy changes with cherry-pick (this article)</a></li>
<li><a href="merging-cmdline.md">Resolve merge conflicts</a></li>
<li><a href="undo-cmdline.md">Undo changes</a></li>
<li><a href="ignore-files-cmdline.md">Ignore files</a></li>
<li><a href="history-cmdline.md">Review history</a></li>
<li><a href="howto-cmdline.md">Frequently asked questions</a></li>
</ul>
</div>
</li>

## Cherry-pick a commit

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to cherry-pick changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade">
<h6 style="padding-left:25px;">Visual Studio 2015 Update 2 &amp; 2107</h6>

<p><ol><li>Open up Team Explorer and checkout to the branch you want to cherry-pick changes into using the **Branches** view.
<li>Right-click the branch containing the changes you want and select **View History...**. 
<li>Right-click the commit you want to cherry-pick and select **Cherry-pick**.    


<p>Visual Studio copies the changes made in that commit into a new one on your current branch.
    ![Cherry pick from inside Visual Studio](_img/vscherrypick.gif)</li></ol>

<p>Repeat this process for each commit you need to bring over to your current branch.
</div>

<div class="tab-pane fade in active" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<p>Use `git log` to find the commit ID of the commit whose changes you want to copy.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git log app.ts
<font color="#b5bd68">commit d34bcef232f6cf033e1252b7300465d3e561b2ee
Author: Francis Totten &lt; frank@fabrikam.com &gt;
Date:   Wed May 18 21:10:39 2016 +0000

add complex query parsing logic</font>
</pre>
 
<p>Once you have the commit ID, you pass it to `git cherry-pick` to copy the changed into your current branch.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git cherry-pick <font color="#b5bd68">d34bcef232f6c</font>   

<font color="#b5bd68">[featurebranch a343e2c] add complex query parsing logic
 Date: Thu May 19 19:07:26 2016 -0400
 1 file changed, 67 insertions(+), 6 deletions(-)</font>
</pre>

<p>If you need to cherry-pick a range of commits, you can use two commit IDs separated by `...` to specify a range in your history.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git cherry-pick <font color="#b5bd68">d34bcef...86d2aec</font>   

<font color="#b5bd68">[featurebranch a343e2c] add complex query parsing logic
 Date: Thu May 19 19:07:26 2016 -0400
 1 file changed, 67 insertions(+), 6 deletions(-)
 [featurebranch 3065fc7] fix regression in error handling
 Date: Mon May 23 09:23:45 2016 -0400
 1 file changed, 32 insertions(+), 15 deletions(-)</font>
</pre>

</div></div></div>

## What's next

Check the other tutorial topics and learn more about Git.

- [Learn about Git](gitworkflow-cmdline.md)
- [Create a new repo](creatingrepo-cmdline.md)
- [Clone an existing repo](clone-cmdline.md)
- [Save work with commits](commits-cmdline.md)
- [Create work in branches](branches-cmdline.md)
- [Share code with push](pushing-cmdline.md)
- [Update code with fetch and pull](pulling-cmdline.md)
- [Review code with pull requests](pullrequest-cmdline.md)
- [Apply changes with rebase](rebase-cmdline.md)
- [Copy changes with cherry-pick](cherry-pick-cmdline.md)
- [Resolve merge conflicts](merging-cmdline.md)
- [Undo changes](undo-cmdline.md)
- [Ignore files](ignore-files-cmdline.md)
- [Review history](history-cmdline.md)
- [Frequently asked questions](howto-cmdline.md)