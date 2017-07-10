---
title: Visual Studio Git tutorial (command line) | Team Services & TFS
description: Learn Git with the Team Services/TFS Git tutorial.
ms.assetid: 997fbdaf-e704-4b28-bf2b-1fa41741bd83
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: sdanie
ms.date: 02/24/2017
ROBOTS: NOINDEX, NOFOLLOW
layout: HubPage
---

#  Learn about version control and Git (command line)

###### Git command line

## Learn about version control and Git

Use version control to save your work and coordinate code changes across your team. Even if you're just a single developer, version control helps you stay organized as you fix bugs and develop new features.  
Version control keeps a history of your development so that you can review and even rollback to any version of your code with ease.

<li><p><a data-toggle="collapse" href="#expando-git-cmdline-tutorial">This article is part of the command line Git tutorial. Expand to view more Git tutorial steps &#x25BC;</a></p>
<div class="collapse" id="expando-git-cmdline-tutorial">
<ul>
<li><a href="gitworkflow-cmdline.md">Learn about Git (this article)</a></li>
<li><a href="creatingrepo-cmdline.md">Create a new repo</a></li>
<li><a href="clone-cmdline.md">Clone an existing repo</a></li>
<li><a href="commits-cmdline.md">Save work with commits</a></li>
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


## Version control workflow

Version control has a general workflow that most developers will use when writing code and sharing it with the team.

These steps are:

----
0. Get a local copy of code if they don't have one yet.
0. Make changes to code to fix bugs or add new features.
0. Once the code is ready, make it available for review by your team.
0. Once the code is reviewed, merge it into the team's shared codebase.

---

![The Git feature branch workflow](_img/gitworkflow.png)

Git has a version of this workflow using terminology and commands unique to Git. Throughout this tutorial you'll learn about repositories, branches, commits, and pull requests. 
These terms might sound familiar if you've used a version control system like Team Foundation Version Control or Subversion, but they behave differently in Git.
 
##  Git workflow

---
0. [Create a branch](branches-cmdline.md) for the changes you plan to make and give it a name, such as fix-bug-3214 or cool-feature-x. 
0. [Commit changes](commits-cmdline.md) to your branch. People often have multiple commits for a bug fix or feature.
0. [Push your branch](pushing-cmdline.md) to the remote repository. 
0. [Create a pull request](pullrequest-cmdline.md) so other people can review your changes. To incorporate feedback, you might need to make more commits and push more changes.
0. [Complete your pull request](pullrequest-cmdline.md) and resolve any merge conflicts from changes other people made after you created your branch.   

---

Use this workflow if you're new to Git. As your team gets more experienced and confident with Git,  extend it to suit your team's needs.

## What's next

- [Create a new Git repository](creatingrepo-cmdline.md)
- [Clone an existing Git repository](clone-cmdline.md)
