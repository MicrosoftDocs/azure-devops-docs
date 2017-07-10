---
title: Visual Studio Git tutorial | Team Services & TFS
description: Learn Git with the Team Services/TFS Git tutorial.
ms.assetid: 0270b0fa-461b-4079-9703-cdcf53bdf39f
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 08/19/2016
---

#  Learn about version control and Git

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2015 & 2017

Use version control to save your work and coordinate code changes across your team. Even if you're just a single developer, version control helps you stay organized as you fix bugs and develop new features.  
Version control keeps a history of your development so that you can review and even rollback to any version of your code with ease.

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
0. [Create a branch](branches.md) for the changes you plan to make and give it a name, such as fix-bug-3214 or cool-feature-x. 
0. [Commit changes](commits.md) to your branch. People often have multiple commits for a bug fix or feature.
0. [Push your branch](pushing.md) to the remote repository. 
0. [Create a pull request](pullrequest.md) so other people can review your changes. To incorporate feedback, you might need to make more commits and push more changes.
0. [Complete your pull request](pullrequest.md) and resolve any merge conflicts from changes other people made after you created your branch.   

---

Use this workflow if you're new to Git. As your team gets more experienced and confident with Git,  extend it to suit your team's needs.

## What's next

[Create a new Git repository](creatingrepo.md)
[Clone an existing Git repository](clone.md)