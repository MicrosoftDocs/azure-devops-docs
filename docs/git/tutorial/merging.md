---
title: Resolve Git merge conflicts | Team Services & TFS
description: Resolving Merge Conflicts in Git from Visual Studio or the command line.
ms.assetid: 2a51a33a-134b-4357-bcfc-540b3195682f
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 08/22/2016
---

#  Resolve merge conflicts

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2013, 2015 and 2017

## Understand merge conflicts

When you [merge](pulling.md) one branch into another, file changes from commits in one branch can conflict with the changes the other.
Git attempts to resolve these changes by using the [history](history.md) in your repo to determine what the merged files should look like.
When it isn't clear how to merge changes, it halts the merge and tells you which files conflict. 

![Master and bugfix branch have changes that conflict](_img/merge-conflict.png)    

This image shows a very basic example of how changes conflict in Git. Both the master and bugfix branch make updates to the same lines of source code.
If you try to merge the bugfix branch into master, Git can't determine which changes to use in the merged version. You may want to keep the changes
in the master branch, the bugfix branch, or some combination of the two. Resolve this conflict with a merge commit on the master branch
that reconciles the conflicting changes between the two branches.

![Create a merge commit to resolve the conflict between the two branches](_img/merge-conflict-resolved.png)

The most common merge conflict situation is when you pull updates from a remote branch to your local branch, for example from `origin/bugfix` into your local `bugfix` branch.
Resolve these conflicts is the same way-create a merge commit on your local branch reconciling the changes and complete the merge.

### What does Git do to prevent merge conflicts?

Git keeps an entire history of all changes made in your repo. Git uses this history as well as the relationships between commits to see if it can order the changes and resolve the merge automatically. 
 Conflicts only occur when it's not clear from your history how changes to the same lines in the same files should merge.

### Preventing merge conflicts

Git is very good at automatically merging file changes in most circumstances, provided that the file contents don't change dramatically between commits.
Consider [rebasing](rebase.md) branches before you open up a [pull request](pullrequest.md) if your branch is far behind your main branch.
Rebased branches will merge into your main branch without conflicts.

## Resolve merge conflicts 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">Example: Resolve merge conflicts</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<h6 style="padding-left:25px;">Visual Studio 2013, 2015 &amp; 2017</h6>
<ol>
<li> You'll be informed of the merge conflict(s) when you pull changes or attempt to merge two branches.   
<li> The conflict notification appears. Click the **Conflicts** link to start resolve file conflicts.   
   
   ![Prompt when there is a merge conflict when you pull a change](_img/merge_prompt_vs.png)   

<li> This will bring up a list of files with conflicts. Selecting a file lets you accept the changes in the source branch you are merging from with the **Take Source** button or accept the changes in the branch you are merging into using **Keep Target**. 
You can manually merge changes by selecting **Merge**, then entering the changes directly into the 
<li> Use the checkboxes next to the lines modified to select between remote and local changes entirely, or edit the results directly in the **Result** editor under the **Source** and **Target** editor in the diff view.   
<li> When done making changes, click **Accept Merge** . Repeat this for all conflicting files.
<li> Open the **Changes** view in Team Explorer and commit the changes to create the merge commit and resolve the conflict.

   ![Resolving Merge Conflicts in Visual Studio](_img/vsmerge.gif)</li>   

<br/>
<p>Compare the conflicting commits as well as the differences between the common history with the options in Visual Studio's merge tool.   
   <p>![VSMergeTool comparison options](_img/vsmergeoptions.png)
</ol>

</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

Resolve merge conflicts on the command line:   

<ol>
<li> (Optional) Before performing any `pull` or `merge`, make sure that your repo is clean with `git status`. 
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git status
<font color="#b5bd68">On branch myfeature
nothing to commit, working directory clean</font>
</pre>

<li> Perform your `pull` or `merge`. Use `git status` to see exactly which files did not merge properly.
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git pull origin <font color="#b5bd68">myfeature </font>   

<font color="#b5bd68">Auto-merging serverboot.js
CONFLICT (content): Merge conflict in serverboot.js
Automatic merge failed; fix conflicts and then commit the result</font>
</pre>

<li> (Optional) Check the commit logs to find the commits that conflict with your own using `git log --merge`. 
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git log --merge
<font color="#b5bd68">commit fac422e78f105ccb44b50a00fc82d6ea89b15513
Merge: 9b28b1e 1dd2603
Author: Francis Totten frank@fabrikam.com

    merging new api endpoint</font>
</pre>   

<li> Update the conflicted files listed in `git status`. Git adds markers to files that have conflicts. These markers look like:   
   
   <pre>
   &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
   console.log("Writing changes to dev console");
   =======
   debug("Writing changes to debug module);
   &gt;&gt;&gt;&gt;&gt;&gt;&gt; dev-updates
</pre>

   The `<<<<<<<` section are the changes from one commit, the `=======` separates the changes, and `>>>>>>>` for the other conflicting commit.   

<li>Edit the files so that they look exactly how they should, removing the markers. Use `git add` to stage the resolved changes.
<li> Resolve file deleting conflicts with `git add` (keep the file) or `git rm` (remove the file).
<li> If performing a merge (such as in a `pull`), commit the changes. If performing a rebase, use `git rebase --continue` to proceed.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git add <font color="#b5bd68">serverboot.js</font>
&gt; git commit -m <font color="#b5bd68">"Resolved both new api endpoints"</font>
</pre>
</ol>

</div></div></div>

