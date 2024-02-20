---
title: Author names in Git
titleSuffix: Azure Repos
description: Learn how Git stores author names.
ms.assetid: 09e60acb-fa48-4843-9f5d-5dfed981f467
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# How names work in Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you commit to your local repo, Git includes your name and email address as part of the commit.
This behavior can sometimes cause confusion.
The name and email on your commits might not match the identity that you use to sign in to a Git host like Azure Repos.
You might have commits under several names and email addresses, even though you were the author for each of them.

## Why does your repo show multiple names for you?

Have you searched for your name on the [History](commit-history.md) page and found multiple, slightly different entries for yourself?
You probably wondered how it happened.

The answer is simple: your name was recorded differently across commits.
Maybe you have two computers, one configured with your full name (for example, Frances) and the other configured with a nickname (for example, Frank).
Or maybe you have a home computer that's connected to your Microsoft account (for example, `frances@outlook.com`) and a work computer that's connected to your employer's Microsoft Entra ID instance (for example, `frances_t@fabrikam.com`).
It's even possible that you changed your settings over time, so older commits have one name and newer commits have another.

## Where does Git get your name and email?

Git stores your name and email address in its [configuration file](https://git-scm.com/docs/git-config).
This file can be at the system level, global to your account on your computer, or local to a repository.
If Git can't find a name and email in any of these places, it tries to get this information from your operating system.
Git includes your details in the commit to mark you as the author of that commit.

When you set up Git for the first time on a new machine, you might create a commit by using Git's "best effort" information.
Git prompts you to set an explicit name and email address, and it uses the new settings for subsequent commits.
This change is often the reason why one author has multiple names.

## Where does Azure DevOps Services get your name and email?

Your details in Azure DevOps Services come from your [profile](https://app.vssps.visualstudio.com/profile/view).
Your profile was originally populated from details in your Microsoft account or Microsoft Entra account, but you can change these details yourself.

When you edit a file on the web or complete a pull request, Azure Repos supplies your profile details as the author of the commit.
This is another opportunity for your name or email address to be specified differently.

## How do you change your information in Git and Azure DevOps Services?

In Git, you can run the following commands to change your name and email address. Replace the example values with your information.

```
git config --global user.name "Frances Totten"
git config --global user.email "frances_t@fabrikam.com"
```

In Azure DevOps Services, you can [update your profile](../../organizations/settings/set-your-preferences.md) by selecting your picture in the upper-right corner and then selecting **My profile**.

## How do you change the author displayed for past commits?

If you made a single change locally and it has the wrong author, you can amend that commit with new author information. Be sure to format it as `Name <email>`, as shown in the following example.

```
git commit --amend --author="Frances L. Totten <frances_t@fabrikam.com>"
```

In most other cases, it's best to keep the existing author information.
To change an author name or email, you must create a new commit.
When you change a commit, all subsequent commits descended from that commit also must change.
