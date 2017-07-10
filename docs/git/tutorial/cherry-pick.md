---
title: Copy changes to a branch with cherry-pick | Team Services & TFS
description: Copy and port changes from one branch to another in Git with cherry-pick,
ms.assetid: 5bf5a8d2-9ff2-4d89-b59f-484a3c14021a
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 08/26/2016
---

# Copy changes with cherry-pick

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2015 & 2017

## Overview

Copy commits from one branch to another using cherry-pick. Unlike a merge or rebase, cherry-pick only brings the changes from the commits you select, instead of all the changes in a branch.

Cherry-pick is a great way to tackle these common problems:

----
- Accidentally committing on the wrong branch. Cherry-pick the commit(s) over to the correct branch and then reset the original branch to the previous commit.
- Pulling out a set of commits made in a feature branch so you merge them back to your `master` branch sooner.
- Porting in specific commits from the `master` branch without rebasing your branch.   

---

## Cherry-pick a commit

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to cherry-pick changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<h6 style="padding-left:25px;">Visual Studio 2015 Update 2 &amp; 2107</h6>

<p><ol><li>Open up Team Explorer and checkout to the branch you want to cherry-pick changes into using the **Branches** view.
<li>Right-click the branch containing the changes you want and select **View History...**. 
<li>Right-click the commit you want to cherry-pick and select **Cherry-pick**.    


<p>Visual Studio copies the changes made in that commit into a new one on your current branch.
    ![Cherry pick from inside Visual Studio](_img/vscherrypick.gif)</li></ol>

<p>Repeat this process for each commit you need to bring over to your current branch.
</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

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
