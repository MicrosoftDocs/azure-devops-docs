---
title: Author names in Git
titleSuffix: Azure Repos
description: How Git stores author names
ms.assetid: 09e60acb-fa48-4843-9f5d-5dfed981f467
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


# How names work in Git

When you commit to your local repo, Git includes your name and email address as part of the commit.
This can sometimes lead to confusion.
The name and email on your commits may not match the identity you log in with on a Git host like Azure Repos.
Further, you may have commits under several different names and email addresses even though you were the author for each of them.

## Why are there multiple names for me in my repo?

Have you searched your name in the [History](commit-history.md) page and been surprised to see multiple, slightly different entries for yourself?
You were probably left wondering how this happened and what you can do about it.
The answer is simple: in different commits, your name was recorded differently.
Maybe you have two different computers, one configured with your full name (e.g. Frances) and the other with the nickname you go by (e.g. Frank).
Or maybe you have a home computer connected to your Microsoft Account (e.g. frances@outlook.com) and a work computer connected to your employer's Azure Active Directory (e.g. frances_t@fabrikam.com).
It's even possible you changed your settings over time, so older commits have one name and newer commits have another.

## Where does Git get your name and email?

Git stores your name and email address in its [config file](https://git-scm.com/docs/git-config).
This file can be at the system level, global to your account on your computer, or local to a repository.
If a name and email aren't found in any of these places, Git will do its best to get this information from your operating system.
Your details are included in the commit, marking you as the author of that commit.

When you set up Git for the first time on a new machine, you may create a commit using Git's "best effort" information.
Git will prompt you to set an explicit name and email address, and the new settings will be used for subsequent commits.
This is a frequent source of one author having multiple names.

## Where does Azure DevOps Services get your name and email?

Your details in Azure DevOps Services come from your [profile](https://app.vssps.visualstudio.com/profile/view).
Your profile was originally populated from details in your Microsoft Account or Azure Active Directory account, but you may change these details yourself.
When you edit a file in the web or complete a PR, Azure Repos supplies your profile details as the author of the commit.
This is another opportunity for your name or email address to be specified differently.

## How do I change my information in Git and Azure DevOps Services?

In Git, you can run two commands to change your name and email address:

```
git config --global user.name "Frances Totten"
git config --global user.email "frances_t@fabrikam.com"
```

In Azure DevOps Services, you can update your profile by clicking your picture in the upper right corner and choosing [My profile](../../organizations/settings/set-your-preferences.md).

## How do I change the author displayed for past commits?

If you've made a single change locally and it has the wrong author, you can amend that commit with new author information. Be sure to format it like this: `Name <email>`.

```
git commit --amend --author="Frances L. Totten <frances_t@fabrikam.com>"
```

In most other cases, it's best to keep the existing author information.
To change an author name or email, you must create a new commit.
When you change a commit, all subsequent commits descended from that commit also must change.
