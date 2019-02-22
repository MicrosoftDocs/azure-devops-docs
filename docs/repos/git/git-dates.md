---
title: Dates in Git
titleSuffix: Azure Repos
description: How dates work in Git
ms.assetid: c5e233e2-cc84-4ca6-8ca3-8eb6d686533a
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


# How dates work in Git

Git tracks two dates in commits: author date and commit date.
In addition, Azure DevOps Services and TFS track when a commit was first pushed to the server.

* **Author date**: when a commit was originally authored. Typically, when someone first ran `git commit`.
* **Commit date**: when a commit was applied to the branch. In many cases it is the same as the author date. Sometimes it differs: if a commit was amended, rebased, or  applied by someone other than the author as part of a patch. In those cases, the date will be when the rebase happened or the patch was applied.
* **Push date**: when a commit was pushed to the remote repository in question. This date is specific to the remote version control system you are using, and won't be available in your local repository.

When you run `git log`, by default you will see the *author date*. 
If you want to see commit date, you can use one of the many command line options, such as `--pretty=fuller`.

Let's look at a brief example to see these concepts in practice. First we will create a normal commit:

    git init
    echo test > file.txt
    git add *
    git commit -m "A normal commit message"

Now let's amend our commit with a different message:

    echo again > file.txt
    git add *
    git commit --amend -m "An amended commit"
    
If we look at our regular log history we would see something like the following:

    git log
    
    commit 17232459f0ae25adeff21c9e21742ba22b7f3499
    Author: Ross Brodbeck <robrodbe@microsoft.com>
    Date:   Thu Feb 25 19:38:54 2016 -0500

        An amended commit

Now let's view the same commit with the author date:

    git log --pretty=fuller
    
    commit 17232459f0ae25adeff21c9e21742ba22b7f3499
    Author:     Ross Brodbeck <robrodbe@microsoft.com>
    AuthorDate: Thu Feb 25 19:38:54 2016 -0500
    Commit:     Ross Brodbeck <robrodbe@microsoft.com>
    CommitDate: Thu Feb 25 19:39:36 2016 -0500

        An amended commit

Note the (slight) difference between the author date and commit date above.
The author date is my original, unedited, commit time. The commit date is the time at which I ran the `--amend` command.

In fact, there are a lot of `git log` options to help you understand dates better.
For example, passing the `--date` flag will allow you to determine how dates are displayed. 
This can be useful for normalizing time zones (git displays dates in their original time zone, by default) or changing the date display string.

To learn more about the various formatting options, see the [git log man page](https://git-scm.com/docs/git-log).

## Changing Git Dates

When you're getting ready to commit your code, note that you have the ability to set both the author and commit dates. This isn't something you should do often.

You can change the author date of a given commit by passing the `--date` flag to `git commit`.
There are various articles regarding the formatting of this flag, but the gist is that it isn't well-documented. [This StackOverflow question](http://stackoverflow.com/questions/19742345/what-is-the-format-for-date-parameter-of-git-commit) does a great job of explaining the acceptable date formats.

You can also use the environment variables `GIT_COMMITTER_DATE` and `GIT_AUTHOR_DATE` to set the corresponding dates, as documented in the [man page](https://git-scm.com/docs/git-commit). 
If you need to go this route, use [this Stack Overflow question](http://stackoverflow.com/questions/454734/how-can-one-change-the-timestamp-of-an-old-commit-in-git) as a starting point.
